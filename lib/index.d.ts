type Component = import("./components").Component;
type Replica = import("./replicas").Replica;
type Entity = import("./entity").Entity;

type Slot = "head" | "body" | "hands";

type EnsureProps<T, P extends keyof T = never> = {
  [K in P]-?: T[K];
} & { [K in Exclude<keyof T, P>]?: T[K] };

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
    replica: EnsureProps<Replica, "inventory" | "combat" | "builder">;
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
  class Widget {
    AddChild<T>(child: T): T;
    SetPosition(x: number, y: number, z: number): void;
    SetOnClick(cb: (this: void) => void): void;
    MoveToFront(): void;
    SetScale(x: number, y: number, z: number): void;
    SetText(text: string): void;
    SetFont(font: string): void;
    SetTextColour(p1: number, p2: number, p3: number, p4: number): void;
    SetTextFocusColour(p1: number, p2: number, p3: number, p4: number): void;
    SetTextSize(size: number): void;
  }
  class Image extends Widget {
    constructor(atlas: string, image: string);
  }
  class Button extends Widget {}
  class ImageButton extends Widget {
    constructor(
      image?: string,
      normal?: string,
      forcus?: string,
      disabled?: string,
      disabled2?: string,
      disabled3?: string
    );
  }
}

declare namespace GLOBAL {
  type Klass<T> = (...params: any[]) => T;
  const TheWorld: {
    ismastersim: any;
  };
  const ThePlayer: Prefabs.Player;
  const TheFrontEnd: import("./frontend").FrontEnd;
  const TheInput: import("./input").Input;

  function SendRPCToServer(...params: any[]): any;
  function RpcMakeRecipeFromMenu(recipe: any): void;
  function BufferedAction(
    inst: Prefab,
    target: Prefab | undefined | null,
    action: Action,
    tool?: any | undefined | null,
    pos?: any | undefined | null,
    recipeName?: any,
    last?: any
  ): any;
  interface Thread {
    id: number;
  }
  function StartThread(fn: (this: void) => void): Thread;
  function CreateEntity(): Prefab;
  function IsPaused(): boolean;
  function require(mod: "widgets/image"): Klass<Module.Image>;
  function require(mod: "widgets/imagebutton"): Klass<Module.ImageButton>;
  function require(mod: "widgets/button"): Klass<Module.Button>;
  function require(mod: string): any;
  function SpawnPrefab(prefab: string): Prefab;
  function printwrap(msg: string, obj: any): void;
  function Sleep(time: number): number;
  interface Recipe {
    name: string;
  }
  function GetInventoryItemAtlas(name: string): any;
  function GetValidRecipe(name: string): Recipe;
  function KillThread(task: Thread): void;
  function FindEntity(
    inst: Prefab,
    radius: number,
    filterFn: ((this: void, item: Prefab) => boolean | undefined) | undefined,
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
  const CONTROL_: string;
  const CONTROL_MOVE_UP: string;
  const CONTROL_MOVE_DOWN: string;
  const CONTROL_MOVE_LEFT: string;
  const CONTROL_MOVE_RIGHT: string;
  enum RPC {
    LeftClick,
  }
  interface Action {
    code: any;
    canforce: any;
    mod_name: any;
  }
  const ACTIONS: Record<
    "BUILD" | "WALKTO" | "CHOP" | "MINE" | "PICK" | "PICKUP" | "HAMMER" | "DIG",
    Action
  >;
  enum EQUIPSLOTS {
    HANDS,
    HEAD,
    BODY,
  }
  enum FOODTYPE {
    MEAT,
    VEGGIE,
    HORRIBLE,
    RAW,
    ELEMENTAL,
    ROUGHAGE,
  }

  const ANCHOR_LEFT: any;
  const ANCHOR_TOP: any;
  const ANCHOR_MIDDLE: any;
  const SCALEMODE_PROPORTIONAL: any;
}
declare const modname: string;
declare function print(data: any): void;
declare function GetModConfigData(key: string): any;
declare function AddPlayerPostInit(
  cb: (this: void, inst: Prefabs.Player) => void
): void;
declare function AddComponentPostInit<T extends keyof Component>(
  kind: T,
  cb: (this: void, comp: Component[T]) => void
): void;
declare function AddGamePostInit(fn: (this: void) => void): void;
declare function AddClassPostConstruct(
  name: string,
  fn: (this: any) => void
): void;
