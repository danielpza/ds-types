import globby from "globby";
import { parse } from "luaparse";
import { readFileSync } from "fs";
import {
  analyseClassDefinition,
  analysePrefabDefinition,
  Definition
} from "./builder";
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
generateClassifieds();

function generateComponents() {
  console.log("Generating Components");
  const files = globby.sync(["components/*.lua"], { cwd: root });
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
  const files = globby.sync(["components/*.lua"], { cwd: root });
  const definitions = {} as Record<string, Definition>;
  files
    .filter(file => file.match(/\w+_replica/))
    .map(file => readFileSync(resolve(root, file), "utf8").toString())
    .map(parse)
    .forEach(ast => analyseClassDefinition(ast, definitions));

  console.log(" -Generating Classifieds");
  const classifiedsDefinitions = generateClassifieds();
  for (const [name, def] of Object.entries(definitions)) {
    const classified = `${name.toLowerCase()}_classified`;
    if (classifiedsDefinitions[classified])
      def.setProperty(
        "classified",
        `{${getProperties(classifiedsDefinitions[classified])}}`
      );
  }
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

function generateClassifieds() {
  const files = globby.sync(["prefabs/*_classified.lua"], { cwd: root });
  const definitions = {} as Record<string, Definition>;
  files
    .map(file => readFileSync(resolve(root, file), "utf8").toString())
    .map(parse)
    .forEach(ast => analysePrefabDefinition(ast, definitions));
  return definitions;
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
${getProperties(def)}
}
`;
}

function getProperties(def: Definition) {
  return `\
${Object.entries(def.properties)
  .map(([name, value]) => `${name}: ${value};`)
  .join("\n")}
${Object.entries(def.methods)
  .map(([name, value]) => `${name}${value};`)
  .join("\n")}
`;
}

function isFileSync(file: string): boolean {
  return statSync(file).isFile();
}
