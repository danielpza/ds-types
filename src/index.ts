import globby from "globby";
import { parse } from "luaparse";
import { readFileSync } from "fs";
import { analyseClassDefinition, Definition } from "./builder";
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
generateEntity();

function generateComponents() {
  console.log("Generating Components");
  const componentsGlob = "components/*.lua";
  const files = globby.sync([componentsGlob], { cwd: root });
  const definitions = {} as Record<string, Definition>;
  files
    .filter(file => !file.match(/\w+_replica/))
    .map(file => readFileSync(resolve(root, file), "utf8").toString())
    .map(parse)
    .forEach(ast => analyseClassDefinition(ast, definitions));
  writeFileSync(
    resolve("lib/components.d.ts"),
    getInterfaceBundle("Component", Object.entries(definitions))
  );
}

function generateReplicas() {
  console.log("Generating Replicas");
  const componentsGlob = "components/*.lua";
  const files = globby.sync([componentsGlob], { cwd: root });
  const definitions = {} as Record<string, Definition>;
  files
    .filter(file => file.match(/\w+_replica/))
    .map(file => readFileSync(resolve(root, file), "utf8").toString())
    .map(parse)
    .forEach(ast => analyseClassDefinition(ast, definitions));
  writeFileSync(
    resolve("lib/replicas.d.ts"),
    getInterfaceBundle("Replica", Object.entries(definitions))
  );
}

function generateEntity() {
  console.log("Generating Entity");
  const definitions = analyseClassDefinition(
    parse(readFileSync(resolve(root, "entityscript.lua"), "utf8").toString())
  );
  writeFileSync(
    resolve("lib/entity.d.ts"),
    getInterface("Entity", definitions["EntityScript"])
  );
}

function getInterfaceBundle(
  namespace: string,
  definitions: [string, Definition][]
) {
  return `\
declare namespace ${namespace} {
${definitions.map(([name, def]) => getInterface(name, def)).join("\n")}
}

declare interface ${namespace} {
${definitions
  .map(([name]) => `${name.toLowerCase()}: ${namespace}.${name};`)
  .join("\n")}
}
`;
}

function getInterface(name: string, def: Definition) {
  return `\
interface ${name} {
${Object.entries(def.properties)
  .map(([name, value]) => `${name}: ${value};`)
  .join("\n")}
${Object.entries(def.methods)
  .map(([name, value]) => `${name}${value};`)
  .join("\n")}
}
`;
}

function isFileSync(file: string): boolean {
  return statSync(file).isFile();
}
