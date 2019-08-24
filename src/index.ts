import globby from "globby";
import { parse } from "luaparse";
import { readFileSync } from "fs";
import { Builder } from "./builder";
import { existsSync, writeFileSync, statSync } from "fs";
import { resolve } from "path";

const NO_SCRIPT_ERROR = "scripts/ folder doesn't exists";

const root = resolve(__dirname, "../scripts");

if (!existsSync(root) || isFileSync(root)) {
  console.error(NO_SCRIPT_ERROR);
  process.exit(1);
}

generateComponents();

function generateComponents() {
  const componentsGlob = "components/*.lua";
  const files = globby.sync([componentsGlob], { cwd: root });
  const sourceFiles = files
    .map(file => readFileSync(resolve(root, file), "utf8").toString())
    .map(parse);
  const builder = new Builder(sourceFiles);
  builder.analyze();
  const result = builder.getDefinitions();
  writeFileSync(resolve("lib/components.d.ts"), result);
}

function isFileSync(file: string): boolean {
  return statSync(file).isFile();
}
