import * as Lua from "luaparse";
import {
  inferType,
  inferTypeFromIdentifier,
  getBase,
  mergeArrays
} from "./utils";

const RESERVED_WORDS = ["new", "var", "default"];

export class Definition {
  properties = {} as Record<string, string>;
  methods = {} as Record<string, string>;
  setMethod(name: string, type: string) {
    if (name[0] === "_") return;
    if (this.methods[name] !== undefined && this.methods[name] !== "any")
      return;
    this.methods[name] = type;
  }
  setProperty(name: string, type: string) {
    if (name[0] === "_") return;
    if (this.properties[name] !== undefined && this.properties[name] !== "any")
      return;
    this.properties[name] = type;
  }
}

function analyseMethod(
  definition: Definition,
  statements: Lua.StatementKind[],
  self = "self"
) {
  for (const node of statements) {
    if (node.type === "LocalStatement") {
      const variables = mergeArrays(node.variables, node.init);
      variables.forEach(([variable, init]) => {
        if (variable.type === "Identifier") {
          definition.setProperty(
            variable.name,
            (init && inferType(init)) || "any"
          );
        }
      });
    }
    if (node.type === "AssignmentStatement") {
      const variables = mergeArrays(node.variables, node.init);
      variables.forEach(([variable, init]) => {
        if (variable.type === "MemberExpression") {
          const base = getBase(variable);
          if (base && base.name === self) {
            definition.setProperty(
              variable.identifier.name,
              (init && inferType(init)) || "any"
            );
          }
        }
      });
    }
    if (node.type === "IfStatement") {
      for (const clause of node.clauses) {
        analyseMethod(definition, clause.body, self);
      }
    }
  }
}

export function analyseClassDefinition(
  ast: Lua.Chunk,
  definitions: Record<string, Definition> = {}
) {
  for (const node of ast.body) {
    if (node.type === "LocalStatement") {
      const interfaceName = node.variables[0].name;
      const init = node.init[0];
      if (
        init &&
        init.type === "CallExpression" &&
        init.base.type === "Identifier" &&
        init.base.name === "Class"
      ) {
        const firstArgument = init.arguments[0];
        if (firstArgument.type === "FunctionDeclaration") {
          if (!definitions[interfaceName])
            definitions[interfaceName] = new Definition();
          analyseMethod(definitions[interfaceName], firstArgument.body);
        }
      }
    } else if (
      node.type === "FunctionDeclaration" &&
      node.identifier.type === "MemberExpression" &&
      node.identifier.identifier.type === "Identifier" &&
      node.identifier.base.type === "Identifier" &&
      node.identifier.indexer === ":"
    ) {
      // interface method
      const interfaceName = node.identifier.base.name;
      const parameters = node.parameters
        .filter((p): p is Lua.Identifier => p.type === "Identifier")
        .map(p => p.name);

      if (!definitions[interfaceName])
        definitions[interfaceName] = new Definition();
      const paramsType = `${parameters
        .map(p => `${RESERVED_WORDS.includes(p) ? `_${p}` : p}: any`)
        .join(", ")}`;
      const retType =
        inferTypeFromIdentifier(node.identifier.identifier.name) || "any";
      definitions[interfaceName].setMethod(
        node.identifier.identifier.name,
        `(${paramsType}): ${retType}`
      );
      analyseMethod(definitions[interfaceName], node.body);
    }
  }
  return definitions;
}

function analyseBindingsAndReturn(statements: Lua.StatementKind[]) {
  const bindings: Record<
    string,
    Lua.ExpressionKind | Lua.FunctionDeclaration
  > = {};
  const returns: Lua.ExpressionKind[] = [];
  for (const node of statements) {
    if (node.type === "LocalStatement") {
      const variable = node.variables[0];
      const init = node.init[0];
      bindings[variable.name] = init;
    }
    if (
      node.type === "FunctionDeclaration" &&
      node.identifier.type === "Identifier"
    ) {
      bindings[node.identifier.name] = node;
    } else if (node.type === "ReturnStatement") {
      for (const call of node.arguments) {
        returns.push(call);
      }
    }
  }
  return { bindings, returns };
}

export function analysePrefabDefinition(
  ast: Lua.Chunk,
  definitions: Record<string, Definition> = {}
) {
  const { bindings, returns } = analyseBindingsAndReturn(ast.body);
  for (const ret of returns) {
    if (
      ret.type === "CallExpression" &&
      ret.base.type === "Identifier" &&
      ret.base.name === "Prefab" &&
      ret.arguments.length === 2 &&
      ret.arguments[0].type
    ) {
      const name = ret.arguments[0];
      const fn = ret.arguments[1];
      if (
        name.type === "StringLiteral" &&
        fn.type === "Identifier" &&
        bindings[fn.name]
      ) {
        const interfaceName = name.value;
        if (!definitions[interfaceName])
          definitions[interfaceName] = new Definition();
        const val = bindings[fn.name];
        if (val.type === "FunctionDeclaration") {
          const methodAnalysis = analyseBindingsAndReturn(val.body);
          if (methodAnalysis.returns.length > 0) {
            const methodRet = methodAnalysis.returns[0];
            if (methodRet.type === "Identifier") {
              const self = methodRet.name;
              analyseMethod(definitions[interfaceName], val.body, self);
            }
          }
        }
      }
    }
  }
  return definitions;
}
