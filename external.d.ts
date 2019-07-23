declare module "luaparse" {
  // mainly from https://github.com/hazzard993/LuaToTypeScript/blob/master/src/ast.ts
  export type TextRange = [number, number];

  export type Node =
    | Chunk
    | Comment
    | Identifier
    | MemberExpression
    | AssignmentStatement
    | IfStatement
    | ForGenericStatement
    | ForNumericStatement
    | WhileStatement
    | BreakStatement
    | IfClause
    | ElseifClause
    | ElseClause
    | LocalStatement
    | ReturnStatement
    | FunctionDeclaration
    | FunctionDeclaration
    | CallStatement
    | CallExpression
    | StringCallExpression
    | TableCallExpression
    | TableConstructorExpression
    | UnaryExpression
    | LogicalExpression
    | BinaryExpression
    | TableValue
    | TableKeyString
    | NumericLiteral
    | StringLiteral
    | BooleanLiteral
    | VarargLiteral
    | NilLiteral
    | IndexExpression;

  export type Block = StatementKind[];

  export interface NodeBase {
    range: TextRange;
    raw: string;
  }

  export interface Chunk extends NodeBase {
    type: "Chunk";
    body: StatementKind[];
    comments: Comment[];
  }

  export interface Comment extends NodeBase {
    type: "Comment";
    value: string;
  }

  export type StatementKind =
    | AssignmentStatement
    | LocalStatement
    | ReturnStatement
    | FunctionDeclaration
    | CallStatement
    | IfStatement
    | ForGenericStatement
    | ForNumericStatement
    | WhileStatement
    | BreakStatement;

  export interface Identifier extends NodeBase {
    type: "Identifier";
    name: string;
  }

  export interface MemberExpression extends NodeBase {
    type: "MemberExpression";
    indexer: "." | ":";
    identifier: Identifier;
    base: Identifier | MemberExpression;
  }

  export interface AssignmentStatement extends NodeBase {
    type: "AssignmentStatement";
    variables: Array<Identifier | MemberExpression | IndexExpression>;
    init: ExpressionKind[];
  }

  export interface IfStatement extends NodeBase {
    type: "IfStatement";
    clauses: [IfClause, ...Array<ElseifClause | ElseClause>];
  }

  export interface ForGenericStatement extends NodeBase {
    type: "ForGenericStatement";
    variables: Identifier[];
    iterators: ExpressionKind[];
    body: StatementKind[];
  }

  export interface ForNumericStatement extends NodeBase {
    type: "ForNumericStatement";
    variable: Identifier;
    start: ExpressionKind;
    end: ExpressionKind;
    step: ExpressionKind | null;
    body: StatementKind[];
  }

  export interface WhileStatement extends NodeBase {
    type: "WhileStatement";
    condition: ExpressionKind;
    body: StatementKind[];
  }

  export interface BreakStatement extends NodeBase {
    type: "BreakStatement";
  }

  export interface IfClause extends NodeBase {
    type: "IfClause";
    condition: ExpressionKind;
    body: StatementKind[];
  }

  export interface ElseifClause extends NodeBase {
    type: "ElseifClause";
    condition: ExpressionKind;
    body: StatementKind[];
  }

  export interface ElseClause extends NodeBase {
    type: "ElseClause";
    condition: ExpressionKind;
    body: StatementKind[];
  }

  export interface LocalStatement extends NodeBase {
    type: "LocalStatement";
    variables: Identifier[];
    init: ExpressionKind[];
  }

  export interface ReturnStatement extends NodeBase {
    type: "ReturnStatement";
    arguments: ExpressionKind[];
  }

  export interface FunctionDeclaration extends NodeBase {
    type: "FunctionDeclaration";
    identifier: Identifier | MemberExpression;
    isLocal: boolean;
    parameters: Array<Identifier | VarargLiteral>;
    body: StatementKind[];
  }

  export interface FunctionExpression extends NodeBase {
    type: "FunctionDeclaration";
    identifier: null;
    isLocal: false;
    parameters: FunctionDeclaration["parameters"];
    body: StatementKind[];
  }

  export interface CallStatement extends NodeBase {
    type: "CallStatement";
    expression: CallExpression;
  }

  export interface CallExpression extends NodeBase {
    type: "CallExpression";
    base: Identifier | MemberExpression;
    arguments: ExpressionKind[];
  }

  export interface StringCallExpression extends NodeBase {
    type: "StringCallExpression";
    base: Identifier | MemberExpression;
    argument: StringLiteral;
  }

  export interface TableCallExpression extends NodeBase {
    type: "TableCallExpression";
    base: Identifier | MemberExpression;
    argument: TableConstructorExpression;
  }

  export interface TableConstructorExpression extends NodeBase {
    type: "TableConstructorExpression";
    fields: Array<TableValue | TableKeyString>;
  }

  export interface UnaryExpression extends NodeBase {
    type: "UnaryExpression";
    operator: "not" | "-" | "~" | "#";
    argument: ExpressionKind;
  }

  export interface LogicalExpression extends NodeBase {
    type: "LogicalExpression";
    operator: "and" | "or";
    left: ExpressionKind;
    right: ExpressionKind;
  }

  export interface BinaryExpression extends NodeBase {
    type: "BinaryExpression";
    operator:
      | "+"
      | "-"
      | "*"
      | "/"
      | "%"
      | "^"
      | "-"
      | "=="
      | "~="
      | ">"
      | "<"
      | ">="
      | "<="
      | "..";
    left: ExpressionKind;
    right: ExpressionKind;
  }

  export interface TableValue extends NodeBase {
    type: "TableValue";
    value: ExpressionKind;
  }

  export interface TableKeyString extends NodeBase {
    type: "TableKeyString";
    key: ExpressionKind;
    value: ExpressionKind;
  }

  export interface NumericLiteral extends NodeBase {
    type: "NumericLiteral";
    value: number;
  }

  export interface StringLiteral extends NodeBase {
    type: "StringLiteral";
    value: string;
  }

  export interface BooleanLiteral extends NodeBase {
    type: "BooleanLiteral";
    value: boolean;
  }

  export interface VarargLiteral extends NodeBase {
    type: "VarargLiteral";
    value: "...";
  }

  export interface NilLiteral extends NodeBase {
    type: "NilLiteral";
    value: null;
    raw: "nil";
  }

  export interface IndexExpression extends NodeBase {
    type: "IndexExpression";
    base: Identifier | MemberExpression;
    index: ExpressionKind;
  }

  export type ExpressionKind =
    | NumericLiteral
    | StringLiteral
    | Identifier
    | TableConstructorExpression
    | FunctionExpression
    | UnaryExpression
    | LogicalExpression
    | BinaryExpression
    | MemberExpression
    | CallExpression
    | StringCallExpression
    | TableCallExpression
    | BooleanLiteral
    | VarargLiteral
    | NilLiteral
    | IndexExpression;

  export function parse(code: string): Chunk;
}
