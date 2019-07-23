import * as ts from "typescript";

export class RLog {
  spaces = 0;
  logText(text: string) {
    const spaces = " ".repeat(this.spaces);
    console.log(spaces + text);
  }
  logFlags(flags: ts.NodeFlags) {
    for (const flag of FLAGS) {
      if (flag & flags) {
        this.logText(flag + ": " + ts.NodeFlags[flag]);
      }
    }
  }
  logSymbolFlags(flags: ts.SymbolFlags) {
    for (const flag of SYMBOL_FLAGS) {
      if (flag & flags) {
        this.logText(flag + ": " + ts.SymbolFlags[flag]);
      }
    }
  }
  nodeToText(node: any) {
    const kind = ts.SyntaxKind[node.kind];
    const text = node.getText().replace(/\n+/g, " ");
    return `${kind} ${text}`;
  }
  log(node: any, { all, parent } = { all: false, parent: false }) {
    this.logText(this.nodeToText(node));
    if (all && parent) {
      console.log(node);
    } else if (all && !parent) {
      const { parent, ...rest } = node;
      console.log(rest);
    }
  }
  in() {
    this.spaces++;
  }
  out() {
    this.spaces--;
  }
}

const SYMBOL_FLAGS = [
  0,
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768,
  65536,
  131072,
  262144,
  524288,
  1048576,
  2097152,
  4194304,
  8388608,
  16777216,
  33554432,
  67108864,
  134217728,
  384,
  3,
  67220415,
  67897832,
  1920,
  1536,
  98304,
  67220414,
  67220415,
  67220415,
  0,
  68008959,
  67219887,
  68008383,
  67897736,
  68008191,
  68008831,
  110735,
  0,
  67212223,
  67154879,
  67187647,
  67635688,
  67897832,
  2097152,
  2623475,
  944,
  418,
  98308,
  106500
];

const FLAGS = [
  0,
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768,
  65536,
  131072,
  262144,
  2097152,
  16777216,
  3,
  384,
  1408,
  12679168,
  20480
];
