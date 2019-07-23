import globby from "globby";
import { parse } from "luaparse";
import { readFileSync } from "fs";
import { Builder } from "./builder";

export async function main(glob: string) {
  const files = await globby([glob]);
  const sourceFiles = files
    .map(file => readFileSync(file, "utf8").toString())
    .map(parse);
  const builder = new Builder(sourceFiles);
  builder.analyze();
  const result = builder.getDefinitions();
  process.stdout.write(result);
}
