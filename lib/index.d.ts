/** @noSelfInFile **/
type Component = import("./components").Component;
type Replica = import("./replicas").Replica;
type Entity = import("./entity").Entity;

type Slot = "head" | "body" | "hands";

type EnsureProps<T, P extends keyof T = never> = {
  [K in P]-?: T[K];
} &
  { [K in Exclude<keyof T, P>]?: T[K] };

interface Prefab extends Entity {
  components: Partial<Component>;
  replica: Partial<Replica>;
  prefab: string;
  DoTaskInTime: (time: number, fn: (this: void) => void) => void;
  ListenForEvent: (
    ev: string,
    fn: (this: void, inst: any, data: any) => void
  ) => void;
}

declare namespace Prefabs {
  interface Player extends Prefab {
    components: EnsureProps<
      Component,
      "playeractionpicker" | "playercontroller"
    >;
    replica: EnsureProps<Replica, "inventory" | "combat">;
    player_classified: import("./player_classified").PlayerClassified;
  }
  interface Inventory extends Prefab {
    replica: EnsureProps<Replica, "inventory">;
  }
  type Item = Prefab;
  type Container = Prefab;
}

declare namespace Module {
  /** @customConstructor GLOBAL.require("widget/widget") */
  class Widget {}
  /** @customConstructor GLOBAL.require("widget/image") */
  class Image {
    constructor(atlas: string, image: string);
  }
  /** @customConstructor GLOBAL.require("widget/imagebutton") */
  class ImageButton extends Button {
    constructor(
      image?: string,
      normal?: string,
      forcus?: string,
      disabled?: string,
      disabled2?: string,
      disabled3?: string
    );
  }
  /** @customConstructor GLOBAL.require("widget/button") */
  class Button extends Widget {}
}

declare namespace GLOBAL {
  const TheWorld: {
    ismastersim: any;
  };
  const ThePlayer: Prefabs.Player;
  const TheFrontEnd: import("./frontend").FrontEnd;
  const TheInput: import("./input").Input;

  function SendRPCToServer(...params: any[]): any;
  function BufferedAction(
    inst: Prefab,
    target: Prefab | undefined,
    action: Action,
    tool?: any | undefined,
    pos?: any | undefined
  ): any;
  interface Thread {
    id: number;
  }
  function StartThread(fn: () => void): Thread;
  function CreateEntity(): Prefab;
  function IsPaused(): boolean;
  function require(mod: string): void;
  function SpawnPrefab(prefab: string): Prefab;
  function printwrap(msg: string, obj: any): void;
  function Sleep(time: number): number;
  function KillThread(task: Thread): void;
  function FindEntity(
    inst: Prefab,
    radius: number,
    filterFn: (item: Prefab) => boolean,
    musttags?: string[] | undefined,
    canttags?: string[] | undefined,
    mustoneoftags?: string[] | undefined
  ): Prefab | undefined;
  let string: any;
  let setmetatable: any;
  let pcall: any;
  let unpack: any;

  const FRAMES: number;
  const CONTROL_PRIMARY: string;
  const CONTROL_SECONDARY: string;
  enum RPC {
    LeftClick
  }
  interface Action {
    code: any;
    canforce: any;
    mod_name: any;
  }
  const ACTIONS: Record<
    "WALKTO" | "CHOP" | "MINE" | "PICK" | "HAMMER" | "DIG",
    Action
  >;
  enum EQUIPSLOTS {
    HANDS,
    HEAD,
    BODY
  }
  enum FOODTYPE {
    MEAT,
    VEGGIE,
    HORRIBLE,
    RAW,
    ELEMENTAL,
    ROUGHAGE
  }
}
declare const modname: string;
declare function print(data: any): void;
declare let GetModConfigData: (key: string) => any;
declare let AddPlayerPostInit: (cb: (inst: Prefabs.Player) => void) => void;
declare function AddComponentPostInit<T extends keyof Component>(
  kind: T,
  cb: (comp: Component[T]) => void
): void;
declare function AddGamePostInit(fn: () => void): void;
