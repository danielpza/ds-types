export namespace Replica {
  interface Builder {
    inst: any;
    classified: any;
    ondetachclassified: any;
    health: any;
    current: any;
    penalty: any;
    sanity: any;
    level: any;
    recipe: any;
    has_tech: boolean;
    inventory: any;
    overflow: any;
    AddRecipe(recipename: any): any;
    AncientBonus(): any;
    AttachClassified(classified: any): any;
    BufferBuild(recipename: any): any;
    CanBuild(recipename: any): boolean;
    CanBuildAtPoint(pt: any, recipe: any, rot: any): boolean;
    CanLearn(recipename: any): boolean;
    DetachClassified(): any;
    GetTechTrees(): any;
    HasCharacterIngredient(ingredient: any): boolean;
    HasTechIngredient(ingredient: any): boolean;
    IngredientMod(): any;
    IsBuildBuffered(recipename: any): boolean;
    IsBusy(): boolean;
    KnowsRecipe(recipename: any): boolean;
    MagicBonus(): any;
    MakeRecipeAtPoint(recipe: any, pt: any, rot: any, skin: any): any;
    MakeRecipeFromMenu(recipe: any, skin: any): any;
    OnRemoveFromEntity(): any;
    RemoveRecipe(recipename: any): any;
    ScienceBonus(): any;
    SetAncientBonus(ancientbonus: any): any;
    SetIngredientMod(ingredientmod: any): any;
    SetIsBuildBuffered(recipename: any, isbuildbuffered: any): any;
    SetIsFreeBuildMode(isfreebuildmode: any): any;
    SetMagicBonus(magicbonus: any): any;
    SetScienceBonus(sciencebonus: any): any;
    SetShadowBonus(shadowbonus: any): any;
    SetTechTrees(techlevels: any): any;
    ShadowBonus(): any;
  }

  interface Combat {
    inst: any;
    classified: any;
    ondetachclassified: any;
    weapon: any;
    item: any;
    rider: any;
    range: any;
    error_threshold: number;
    follower: any;
    leader: any;
    combat: any;
    sanity: any;
    AttachClassified(classified: any): any;
    CanAttack(target: any): boolean;
    CanBeAttacked(attacker: any): boolean;
    CanExtinguishTarget(target: any, weapon: any): boolean;
    CanHitTarget(target: any): boolean;
    CanLightTarget(target: any, weapon: any): boolean;
    CanTarget(target: any): boolean;
    CancelAttack(): any;
    DetachClassified(): any;
    GetAttackRangeWithWeapon(): any;
    GetTarget(): any;
    GetWeapon(): any;
    IsAlly(guy: any): boolean;
    IsRecentTarget(target: any): boolean;
    IsValidTarget(target: any): boolean;
    MinAttackPeriod(): any;
    OnRemoveFromEntity(): any;
    SetAttackRange(attackrange: any): any;
    SetCanAttack(canattack: any): any;
    SetIsPanic(ispanic: any): any;
    SetLastTarget(target: any): any;
    SetMinAttackPeriod(minattackperiod: any): any;
    SetTarget(target: any): any;
    StartAttack(): any;
  }

  interface ConstructionSite {
    inst: any;
    classified: {
      inst: any;
      GetSlotCount: any;
      OnEntityReplicated: any;
      SetSlotCount: any;
      persists: boolean;
    };
    ondetachclassified: any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    GetIngredients(): any;
    GetSlotCount(slot: any): any;
    IsBuilder(guy: any): boolean;
    OnRemoveFromEntity(): any;
    SetBuilder(builder: any): any;
    SetSlotCount(slot: any, num: any): any;
  }

  interface Container {
    inst: any;
    acceptsstacks: boolean;
    usespecificslotsforitems: boolean;
    issidewidget: boolean;
    type: any;
    widget: any;
    itemtestfn: any;
    opentask: any;
    classified: {
      inst: any;
      InitializeSlots: any;
      OnEntityReplicated: any;
      IsHolding: any;
      GetItemInSlot: any;
      GetItems: any;
      IsEmpty: any;
      IsFull: any;
      Has: any;
      ReturnActiveItemToSlot: any;
      PutOneOfActiveItemInSlot: any;
      PutAllOfActiveItemInSlot: any;
      TakeActiveItemFromHalfOfSlot: any;
      TakeActiveItemFromAllOfSlot: any;
      AddOneOfActiveItemToSlot: any;
      AddAllOfActiveItemToSlot: any;
      SwapActiveItemWithSlot: any;
      MoveItemFromAllOfSlot: any;
      MoveItemFromHalfOfSlot: any;
      ReceiveItem: any;
      ConsumeByName: any;
      TakeActionItem: any;
      IsBusy: any;
      SetSlotItem: any;
      persists: boolean;
    };
    ondetachclassified: any;
    inv: any;
    AcceptsStacks(): boolean;
    AddAllOfActiveItemToSlot(slot: any): any;
    AddOneOfActiveItemToSlot(slot: any): any;
    AttachClassified(classified: any): any;
    CanBeOpened(): boolean;
    CanTakeItemInSlot(item: any, slot: any): boolean;
    Close(): any;
    DetachClassified(): any;
    GetItemInSlot(slot: any): any;
    GetItems(): any;
    GetNumSlots(): any;
    GetSpecificSlotForItem(item: any): any;
    GetWidget(): any;
    Has(prefab: any, amount: any): boolean;
    IsBusy(): boolean;
    IsEmpty(): boolean;
    IsFull(): boolean;
    IsHolding(item: any, checkcontainer: any): boolean;
    IsOpenedBy(guy: any): boolean;
    IsSideWidget(): boolean;
    MoveItemFromAllOfSlot(slot: any, container: any): any;
    MoveItemFromHalfOfSlot(slot: any, container: any): any;
    OnRemoveFromEntity(): any;
    Open(doer: any): any;
    PutAllOfActiveItemInSlot(slot: any): any;
    PutOneOfActiveItemInSlot(slot: any): any;
    SetCanBeOpened(canbeopened: any): any;
    SetNumSlots(numslots: any): any;
    SetOpener(opener: any): any;
    SwapActiveItemWithSlot(slot: any): any;
    TakeActiveItemFromAllOfSlot(slot: any): any;
    TakeActiveItemFromHalfOfSlot(slot: any): any;
    WidgetSetup(prefab: any, data: any): any;
  }

  interface Equippable {
    inst: any;
    restrictedtag: any;
    EquipSlot(): any;
    IsEquipped(): boolean;
    IsRestricted(target: any): boolean;
    SetEquipSlot(eslot: any): any;
  }

  interface FishingRod {
    inst: any;
    GetTarget(): any;
    HasCaughtFish(): boolean;
    HasHookedFish(): boolean;
    SetCaughtFish(caughtfish: any): any;
    SetHookedFish(hookedfish: any): any;
    SetTarget(target: any): any;
  }

  interface Follower {
    inst: any;
    GetLeader(): any;
    SetLeader(leader: any): any;
  }

  interface Health {
    inst: any;
    classified: any;
    ondetachclassified: any;
    AttachClassified(classified: any): any;
    CanHeal(): boolean;
    CanMurder(): boolean;
    DetachClassified(): any;
    GetCurrent(): any;
    GetPenaltyPercent(): any;
    GetPercent(): any;
    IsDead(): boolean;
    IsFull(): boolean;
    IsHurt(): boolean;
    IsTakingFireDamage(): boolean;
    IsTakingFireDamageFull(): boolean;
    IsTakingFireDamageLow(): boolean;
    Max(): any;
    MaxWithPenalty(): any;
    OnRemoveFromEntity(): any;
    SetCanHeal(canheal: any): any;
    SetCanMurder(canmurder: any): any;
    SetCurrent(current: any): any;
    SetIsDead(isdead: any): any;
    SetIsFull(isfull: any): any;
    SetIsTakingFireDamage(istakingfiredamage: any): any;
    SetIsTakingFireDamageLow(istakingfiredamagelow: any): any;
    SetMax(max: any): any;
    SetPenalty(penalty: any): any;
  }

  interface Hunger {
    inst: any;
    classified: any;
    ondetachclassified: any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    GetCurrent(): any;
    GetPercent(): any;
    IsStarving(): boolean;
    Max(): any;
    OnRemoveFromEntity(): any;
    SetCurrent(current: any): any;
    SetMax(max: any): any;
  }

  interface Inventory {
    inst: any;
    opentask: any;
    classified: {
      inst: any;
      visible: any;
      heavylifting: any;
      OnEntityReplicated: any;
      IsHolding: any;
      GetActiveItem: any;
      GetItemInSlot: any;
      GetEquippedItem: any;
      GetItems: any;
      GetEquips: any;
      GetOverflowContainer: any;
      IsFull: any;
      Has: any;
      ReturnActiveItem: any;
      ReturnActiveItemToSlot: any;
      PutOneOfActiveItemInSlot: any;
      PutAllOfActiveItemInSlot: any;
      TakeActiveItemFromHalfOfSlot: any;
      TakeActiveItemFromAllOfSlot: any;
      AddOneOfActiveItemToSlot: any;
      AddAllOfActiveItemToSlot: any;
      SwapActiveItemWithSlot: any;
      UseItemFromInvTile: any;
      ControllerUseItemOnItemFromInvTile: any;
      ControllerUseItemOnSelfFromInvTile: any;
      ControllerUseItemOnSceneFromInvTile: any;
      InspectItemFromInvTile: any;
      DropItemFromInvTile: any;
      EquipActiveItem: any;
      EquipActionItem: any;
      SwapEquipWithActiveItem: any;
      TakeActiveItemFromEquipSlot: any;
      MoveItemFromAllOfSlot: any;
      MoveItemFromHalfOfSlot: any;
      QueueRefresh: any;
      PushNewActiveItem: any;
      ReceiveItem: any;
      RemoveIngredients: any;
      IsBusy: any;
      SetActiveItem: any;
      SetSlotItem: any;
      SetSlotEquip: any;
      persists: boolean;
    };
    ondetachclassified: any;
    rebuild_pending: boolean;
    rebuild_snapping: boolean;
    containers: any;
    AcceptsStacks(): boolean;
    AddAllOfActiveItemToSlot(slot: number): any;
    AddOneOfActiveItemToSlot(slot: number): any;
    AttachClassified(classified: any): any;
    CanTakeItemInSlot(item: any, slot: number): boolean;
    ControllerUseItemOnItemFromInvTile(item: any, active_item: any): any;
    ControllerUseItemOnSceneFromInvTile(item: any): any;
    ControllerUseItemOnSelfFromInvTile(item: any): any;
    DetachClassified(): any;
    DropItemFromInvTile(item: any, single: any): any;
    EquipActionItem(item: any): any;
    EquipActiveItem(): any;
    EquipHasTag(tag: any): any;
    GetActiveItem(): Item;
    GetEquippedItem(eslot: GLOBAL.EQUIPSLOTS): Item;
    GetEquips(): any;
    GetItemInSlot(slot: number): Item;
    GetItems(): any;
    GetNumSlots(): number;
    GetOpenContainers(): any;
    GetOverflowContainer(): any;
    Has(prefab: any, amount: number): boolean;
    IgnoresCanGoInContainer(): any;
    InspectItemFromInvTile(item: any): any;
    IsFull(): boolean;
    IsHeavyLifting(): boolean;
    IsHolding(item: any, checkcontainer: any): boolean;
    IsOpenedBy(guy: any): boolean;
    IsVisible(): boolean;
    MoveItemFromAllOfSlot(slot: number, container: any): any;
    MoveItemFromHalfOfSlot(slot: number, container: any): any;
    OnClose(): any;
    OnHide(): any;
    OnOpen(): any;
    OnRemoveEntity(): any;
    OnShow(): any;
    PutAllOfActiveItemInSlot(slot: number): any;
    PutOneOfActiveItemInSlot(slot: number): any;
    ReturnActiveItem(): Item;
    SetHeavyLifting(heavylifting: any): any;
    SwapActiveItemWithSlot(slot: number): any;
    SwapEquipWithActiveItem(): any;
    TakeActiveItemFromAllOfSlot(slot: number): any;
    TakeActiveItemFromEquipSlots(eslot: GLOBAL.EQUIPSLOTS): any;
    TakeActiveItemFromHalfOfSlot(slot: number): any;
    UseItemFromInvTile(item: any): any;
  }

  interface InventoryItem {
    inst: any;
    classified: {
      inst: any;
      image: any;
      atlas: any;
      cangoincontainer: any;
      canonlygoinpocket: any;
      src_pos: any;
      percentused: any;
      perish: any;
      recharge: any;
      rechargetime: any;
      deploymode: any;
      deployspacing: any;
      deployrestrictedtag: any;
      usegridplacer: any;
      attackrange: any;
      walkspeedmult: any;
      equiprestrictedtag: any;
      moisture: any;
      DeserializePercentUsed: any;
      DeserializePerish: any;
      DeserializeRecharge: any;
      DeserializeRechargeTime: any;
      OnEntityReplicated: any;
      persists: boolean;
      SerializePercentUsed: any;
      SerializePerish: any;
      ForcePerishDirty: any;
      SerializeRecharge: any;
      SerializeRechargeTime: any;
    };
    ondetachclassified: any;
    src_pos: any;
    percentusedcomponent: any;
    restrictedtag: any;
    x: number;
    AttachClassified(classified: any): any;
    AttackRange(): any;
    CanBePickedUp(): boolean;
    CanDeploy(pt: any, mouseover: any, deployer: any): boolean;
    CanGoInContainer(): boolean;
    CanOnlyGoInPocket(): boolean;
    DeploySpacingRadius(): any;
    DeserializeUsage(): any;
    DetachClassified(): any;
    GetAtlas(): any;
    GetDeployPlacerName(): any;
    GetEquipRestrictedTag(): any;
    GetImage(): any;
    GetMoisture(): any;
    GetPickupPos(): any;
    GetWalkSpeedMult(): any;
    IsDeployable(deployer: any): boolean;
    IsGrandOwner(guy: any): boolean;
    IsHeld(): boolean;
    IsHeldBy(guy: any): boolean;
    IsWeapon(): boolean;
    IsWet(): boolean;
    OnRemoveFromEntity(): any;
    SerializeUsage(): any;
    SetAtlas(atlasname: any): any;
    SetAttackRange(attackrange: any): any;
    SetCanBePickedUp(canbepickedup: any): any;
    SetCanGoInContainer(cangoincontainer: any): any;
    SetCanOnlyGoInPocket(canonlygoinpocket: any): any;
    SetChargeTime(t: any): any;
    SetDeployMode(deploymode: any): any;
    SetDeployRestrictedTag(restrictedtag: any): any;
    SetDeploySpacing(deployspacing: any): any;
    SetEquipRestrictedTag(restrictedtag: any): any;
    SetImage(imagename: any): any;
    SetIsWet(iswet: any): any;
    SetMoistureLevel(moisture: any): any;
    SetOwner(owner: any): any;
    SetPickupPos(pos: any): any;
    SetUseGridPlacer(usegridplacer: any): any;
    SetWalkSpeedMult(walkspeedmult: any): any;
  }

  interface Moisture {
    inst: any;
    IsWet(): boolean;
    SetIsWet(iswet: any): any;
  }

  interface Named {
    inst: any;
    SetName(name: any): any;
  }

  interface Rider {
    inst: any;
    classified: any;
    ondetachclassified: any;
    actionbuttonoverride: any;
    old: any;
    mount: any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    GetMount(): any;
    GetMountFasterOnRoad(): any;
    GetMountRunSpeed(): any;
    GetSaddle(): any;
    IsMountHurt(): boolean;
    IsRiding(): boolean;
    OnIsRiding(riding: any): any;
    OnMountHealth(pct: any): any;
    OnRemoveFromEntity(): any;
    SetActionFilter(riding: any): any;
    SetMount(mount: any): any;
    SetRiding(riding: any): any;
    SetSaddle(saddle: any): any;
  }

  interface Sanity {
    inst: any;
    classified: any;
    ondetachclassified: any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    GetCurrent(): any;
    GetPenaltyPercent(): any;
    GetPercent(): any;
    GetPercentNetworked(): any;
    GetPercentWithPenalty(): any;
    GetRateScale(): any;
    GetSanityMode(): any;
    IsCrazy(): boolean;
    IsEnlightened(): boolean;
    IsGhostDrain(): boolean;
    IsInsane(): boolean;
    IsInsanityMode(): boolean;
    IsLunacyMode(): boolean;
    IsSane(): boolean;
    Max(): any;
    MaxWithPenalty(): any;
    OnRemoveFromEntity(): any;
    SetCurrent(current: any): any;
    SetGhostDrainMult(ghostdrainmult: any): any;
    SetIsSane(sane: any): any;
    SetMax(max: any): any;
    SetPenalty(penalty: any): any;
    SetRateScale(ratescale: any): any;
    SetSanityMode(mode: any): any;
  }

  interface Sheltered {
    inst: any;
    CheckShade(): any;
    IsSheltered(): boolean;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    StartSheltered(): any;
    StopSheltered(): any;
  }

  interface Stackable {
    inst: any;
    IsFull(): boolean;
    IsStack(): boolean;
    MaxSize(): any;
    SetMaxSize(maxsize: any): any;
    SetStackSize(stacksize: any): any;
    StackSize(): any;
  }

  interface Writeable {
    inst: any;
    screen: any;
    opentask: any;
    classified: { inst: any; OnEntityReplicated: any; persists: boolean };
    ondetachclassified: any;
    AttachClassified(classified: any): any;
    BeginWriting(doer: any): any;
    DetachClassified(): any;
    EndWriting(): any;
    OnRemoveFromEntity(): any;
    SetWriter(writer: any): any;
    Write(doer: any, text: any): any;
  }
}

export interface Replica {
  builder: Replica.Builder;
  combat: Replica.Combat;
  constructionsite: Replica.ConstructionSite;
  container: Replica.Container;
  equippable: Replica.Equippable;
  fishingrod: Replica.FishingRod;
  follower: Replica.Follower;
  health: Replica.Health;
  hunger: Replica.Hunger;
  inventory: Replica.Inventory;
  inventoryitem: Replica.InventoryItem;
  moisture: Replica.Moisture;
  named: Replica.Named;
  rider: Replica.Rider;
  sanity: Replica.Sanity;
  sheltered: Replica.Sheltered;
  stackable: Replica.Stackable;
  writeable: Replica.Writeable;
}
