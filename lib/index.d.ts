/// <reference path="./components.d.ts" />
/// <reference path="./replicas.d.ts" />
/** @noSelfInFile **/
type Slot = "head" | "body" | "hands";

type List<T> = Record<number, T>;

type EnsureProps<T, P extends keyof T = never> = {
  [K in P]: T[P];
} &
  { [K in Exclude<keyof T, P>]?: T[P] };

type ComponentBundle<P extends keyof Component = never> = EnsureProps<
  Component,
  P
>;

interface PrefabBase {
  prefab: string;
  DoTaskInTime: (time: number, fn: (this: void) => void) => void;
  ClearBufferedAction(): void;
  ListenForEvent: (
    ev: string,
    fn: (this: void, inst: any, data: any) => void
  ) => void;
  Remove(): void;
  HasTag(tag: string): boolean;
}

interface Prefab<
  K extends keyof Component = never,
  L extends keyof Replica = never
> extends PrefabBase {
  components: EnsureProps<Component, K>;
  replica: EnsureProps<Replica, L>;
}

interface Player extends Prefab<"inventory"> {}

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
  const ThePlayer: Player;
  const TheFrontEnd: {
    GetActiveScreen: () => any;
  };
  const TheInput: {
    AddKeyDownHandler(keycode: number, cb: () => void): any;
    AddKeyUpHandler(keycode: number, cb: () => void): any;
  };
  function CreateEntity(): Prefab;
  function IsPaused(): boolean;
  function require(mod: string): void;
  function unpack(...args: any[]): any;
  function SpawnPrefab(prefab: string): Prefab;
  function printwrap(msg: string, obj: any): void;
  let string: any;
  let setmetatable: any;

  enum ACTIONS {
    CHOP,
    MINE,
    PICK,
    HAMMER,
    DIG
  }
  enum EQUIPSLOTS {
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
declare let AddPlayerPostInit: (cb: (inst: Player) => void) => void;
declare function AddComponentPostInit<T extends keyof Component>(
  kind: T,
  cb: (comp: Component[T]) => void
): void;
