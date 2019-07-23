import * as Lua from "luaparse";

export class Builder {
  classes: Record<
    string,
    { properties: Record<string, string>; methods: Record<string, string> }
  > = {};
  constructor(public files: Lua.Chunk[]) {}
  public analyze() {
    for (const ast of this.files) {
      ast.body.forEach(statement => this.visitStatement(statement));
    }
  }
  public getDefinitions() {
    return Object.entries(this.classes)
      .map(
        ([className, { properties, methods }]) => `declare class ${className} {
${Object.entries(properties)
  .map(([name, value]) => `  ${name}: ${value};`)
  .join("\n")}
${Object.entries(methods)
  .map(([name, value]) => `  ${name}${value};`)
  .join("\n")}
}
`
      )
      .join("\n");
  }
  protected ensure(className: string) {
    if (!this.classes[className]) {
      this.classes[className] = { properties: {}, methods: {} };
    }
  }
  protected addProperty(className: string, name: string, type: string) {
    this.ensure(className);
    this.classes[className].properties[name] = type;
  }
  protected addMethod(
    className: string,
    name: string,
    parameters: string[],
    retType?: string
  ) {
    this.ensure(className);
    this.classes[className].methods[name] = `(${parameters
      .map(p => `${p}: any`)
      .join(", ")})${retType ? `: ${retType}` : ""}`;
  }
  protected inferType(node: Lua.ExpressionKind, className?: string) {
    if (node.type === "NumericLiteral") return "number";
    if (node.type === "StringLiteral") return "string";
    if (node.type === "BooleanLiteral") return "boolean";
    return "any";
  }
  protected visitClassStatement(className: string, node: Lua.StatementKind) {
    if (node.type === "AssignmentStatement") {
      const variables = mergeArrays(node.variables, node.init);
      variables.forEach(([variable, init]) => {
        if (variable.type === "MemberExpression") {
          const base = this.getBase(variable);
          if (base && base.name === "self") {
            this.addProperty(
              className,
              variable.identifier.name,
              init ? this.inferType(init) : "any"
            );
          }
        }
      });
    }
  }

  protected visitStatement(node: Lua.StatementKind) {
    if (node.type === "LocalStatement") {
      const iden = node.variables[0];
      const init = node.init[0];
      if (
        init &&
        init.type === "CallExpression" &&
        init.base.type === "Identifier" &&
        init.base.name === "Class"
      ) {
        const firstArgument = init.arguments[0];
        if (firstArgument.type === "FunctionDeclaration") {
          // It is a class declaration!!!
          // constructor
          const parameters = firstArgument.parameters
            .filter(
              (p): p is Lua.Identifier =>
                p.type === "Identifier" && p.name !== "self"
            )
            .map(p => p.name);
          this.addMethod(iden.name, "constructor", parameters);
          // body
          firstArgument.body.forEach(statement =>
            this.visitClassStatement(iden.name, statement)
          );
        }
      }
    } else if (
      node.type === "FunctionDeclaration" &&
      node.identifier.type === "MemberExpression" &&
      node.identifier.identifier.type === "Identifier" &&
      node.identifier.base.type === "Identifier" &&
      node.identifier.indexer === ":"
    ) {
      // class method
      const className = node.identifier.base.name;
      const parameters = node.parameters
        .filter((p): p is Lua.Identifier => p.type === "Identifier")
        .map(p => p.name);
      this.addMethod(
        className,
        node.identifier.identifier.name,
        parameters,
        "any"
      );
      // body
      node.body.forEach(statement =>
        this.visitClassStatement(className, statement)
      );
    }
  }
  protected getBase(node: Lua.MemberExpression): Lua.Identifier | undefined {
    if (node.base.type === "Identifier") return node.base;
    if (node.base.type === "MemberExpression") return this.getBase(node.base);
    return undefined;
  }
}

export function mergeArrays<A, B>(a: A[], b: B[]): [A, B][] {
  return a.map((va, i) => [va, b[i]]);
}
