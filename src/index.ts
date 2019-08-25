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
generateReplicas();

function generateComponents() {
  console.log("Generating Components");
  const componentsGlob = "components/*.lua";
  const files = globby.sync([componentsGlob], { cwd: root });
  const builder = new Builder(
    "Component",
    files
      .filter(file => !file.match(/\w+_replica/))
      .map(file => readFileSync(resolve(root, file), "utf8").toString())
      .map(parse)
  );
  builder.analyze();
  const result = builder.getDefinitions();
  writeFileSync(resolve("lib/components.d.ts"), result);
}

function isFileSync(file: string): boolean {
  return statSync(file).isFile();
}

function generateReplicas() {
  console.log("Generating Replicas");
  const componentsGlob = "components/*.lua";
  const files = globby.sync([componentsGlob], { cwd: root });
  const builder = new Builder(
    "Replica",
    files
      .filter(file => file.match(/\w+_replica/))
      .map(file => readFileSync(resolve(root, file), "utf8").toString())
      .map(parse)
  );
  builder.analyze();
  const result = builder.getDefinitions();
  writeFileSync(resolve("lib/replicas.d.ts"), result);
}
