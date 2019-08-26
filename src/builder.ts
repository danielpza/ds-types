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
    if (this.methods[name] !== undefined && this.methods[name] !== "any")
      return;
    this.methods[name] = type;
  }
  setProperty(name: string, type: string) {
    if (this.properties[name] !== undefined && this.properties[name] !== "any")
      return;
    this.properties[name] = type;
  }
}

function analyseMethod(
  definition: Definition,
  statements: Lua.StatementKind[]
) {
  for (const node of statements) {
    if (node.type === "LocalStatement") {
      const variables = mergeArrays(node.variables, node.init);
      variables.forEach(([variable, init]) => {
        if (variable.type === "Identifier") {
          definition.setProperty(
            variable.name,
            (init && inferType(init)) ||
              inferTypeFromIdentifier(variable.name) ||
              "any"
          );
        }
      });
    }
    if (node.type === "AssignmentStatement") {
      const variables = mergeArrays(node.variables, node.init);
      variables.forEach(([variable, init]) => {
        if (variable.type === "MemberExpression") {
          const base = getBase(variable);
          if (base && base.name === "self") {
            definition.setProperty(
              variable.identifier.name,
              (init && inferType(init)) ||
                inferTypeFromIdentifier(variable.identifier.name) ||
                "any"
            );
          }
        }
      });
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
