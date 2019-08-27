/** @noSelfInFile **/
type Component = import("./components").Component;
type Replica = import("./replicas").Replica;
type Entity = import("./entity").Entity;

type Slot = "head" | "body" | "hands";

type EnsureProps<T, P extends keyof T = never> = {
  [K in P]: T[K];
} &
  { [K in Exclude<keyof T, P>]?: T[K] };

interface Prefab<
  K extends keyof Component = never,
  L extends keyof Replica = never
> extends Entity {
  components: EnsureProps<Component, K>;
  replica: EnsureProps<Replica, L>;
  prefab: string;
  DoTaskInTime: (time: number, fn: (this: void) => void) => void;
  ListenForEvent: (
    ev: string,
    fn: (this: void, inst: any, data: any) => void
  ) => void;
}

declare namespace Prefabs {
  type Player = Prefab<never, "inventory">;
  type Item = Prefab<never, "inventoryitem">;
  type Container = Prefab<never, "container">;
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
  function CreateEntity(): Prefab;
  function IsPaused(): boolean;
  function require(mod: string): void;
  function SpawnPrefab(prefab: string): Prefab;
  function printwrap(msg: string, obj: any): void;
  function Sleep(time: number): number;
  function KillThread(task: number): void;
  let string: any;
  let setmetatable: any;
  let pcall: any;
  let unpack: any;

  const FRAMES: number;
  enum ACTIONS {
    CHOP,
    MINE,
    PICK,
    HAMMER,
    DIG
  }
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
declare function print(data: any): void;
declare let GetModConfigData: (key: string) => any;
declare let AddPlayerPostInit: (cb: (inst: Prefabs.Player) => void) => void;
declare function AddComponentPostInit<T extends keyof Component>(
  kind: T,
  cb: (comp: Component[T]) => void
): void;
