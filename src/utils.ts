import * as Lua from "luaparse";

export function inferTypeFromIdentifier(id: string) {
  const match = id.match(/^[A-Z][a-z]+/);
  if (
    match &&
    ["is", "has", "can", "accepts", "knows"].includes(match[0].toLowerCase())
  )
    return "boolean";
  return null;
}

export function inferType(node: Lua.ExpressionKind) {
  if (node.type === "NumericLiteral") return "number";
  if (node.type === "StringLiteral") return "string";
  if (node.type === "BooleanLiteral") return "boolean";
  return null;
}

export function getBase(
  node: Lua.MemberExpression
): Lua.Identifier | undefined {
  if (node.base.type === "Identifier") return node.base;
  if (node.base.type === "MemberExpression") return getBase(node.base);
  return undefined;
}

export function mergeArrays<A, B>(a: A[], b: B[]): [A, B][] {
  return a.map((va, i) => [va, b[i]]);
}
