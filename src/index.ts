import globby from "globby";
import { parse } from "luaparse";
import { readFileSync } from "fs";
import {
  analyseClassDefinition,
  analysePrefabDefinition,
  Definition,
} from "./builder";
import { existsSync, writeFileSync, statSync } from "fs";
import { resolve } from "path";

const NO_SCRIPT_ERROR = "scripts/ folder doesn't exists";

const root = resolve(__dirname, "../scripts");

if (!existsSync(root) || isFileSync(root)) {
  console.error(NO_SCRIPT_ERROR);
  process.exit(1);
}

const classifieds = generateClassifieds();
generateComponents();
generateReplicas();
generateClass("Entity", "entityscript.lua", "EntityScript");
generateClass("FrontEnd", "frontend.lua");
generateClass("Input", "input.lua");
generatePlayerClassified();

function generateComponents() {
  console.log("Generating Components");
  const files = globby.sync(["components/*.lua"], { cwd: root });
  const definitions = {} as Record<string, Definition>;
  files
    .filter((file) => !file.match(/\w+_replica/))
    .map((file) => readFileSync(resolve(root, file), "utf8").toString())
    .map(parse)
    .forEach((ast) => analyseClassDefinition(ast, definitions));
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
    .filter((file) => file.match(/\w+_replica/))
    .map((file) => readFileSync(resolve(root, file), "utf8").toString())
    .map(parse)
    .forEach((ast) => analyseClassDefinition(ast, definitions));

  for (const [name, def] of Object.entries(definitions)) {
    const classified = `${name.toLowerCase()}_classified`;
    if (classifieds[classified])
      def.setProperty(
        "classified",
        `{${getProperties(classifieds[classified])}}`
      );
  }
  writeFileSync(
    resolve("lib/replicas.d.ts"),
    getInterfaceBundle("Replica", Object.entries(definitions))
  );
}

function generatePlayerClassified() {
  writeFileSync(
    resolve("lib/player_classified.d.ts"),
    "export " +
      getInterface("PlayerClassified", classifieds["player_classified"])
  );
}

function generateClass(
  name: string,
  file: string,
  interfaceName: string = name
) {
  console.log(`Generating ${name}`);
  const definitions = analyseClassDefinition(
    parse(readFileSync(resolve(root, file), "utf8").toString())
  );
  writeFileSync(
    resolve(`lib/${name.toLowerCase()}.d.ts`),
    "export " + getInterface(name, definitions[interfaceName])
  );
}

function generateClassifieds() {
  console.log("Generating Classifieds");
  const files = globby.sync(["prefabs/*_classified.lua"], { cwd: root });
  const definitions = {} as Record<string, Definition>;
  files
    .map((file) => readFileSync(resolve(root, file), "utf8").toString())
    .map(parse)
    .forEach((ast) => analysePrefabDefinition(ast, definitions));
  return definitions;
}

function getInterfaceBundle(
  namespace: string,
  definitions: [string, Definition][]
) {
  return `\
export namespace ${namespace} {
${definitions.map(([name, def]) => getInterface(name, def)).join("\n")}
}

export interface ${namespace} {
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
  .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : a.length - b.length))
  .map(([name, value]) => `${name}: ${value};`)
  .join("\n")}
${Object.entries(def.methods)
  .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : a.length - b.length))
  .map(([name, value]) => `${name}${value};`)
  .join("\n")}
`;
}

function isFileSync(file: string): boolean {
  return statSync(file).isFile();
}
