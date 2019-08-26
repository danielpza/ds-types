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
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetScienceBonus(sciencebonus: any): any;
    ScienceBonus(): any;
    SetMagicBonus(magicbonus: any): any;
    MagicBonus(): any;
    SetAncientBonus(ancientbonus: any): any;
    AncientBonus(): any;
    SetShadowBonus(shadowbonus: any): any;
    ShadowBonus(): any;
    SetIngredientMod(ingredientmod: any): any;
    IngredientMod(): any;
    SetIsFreeBuildMode(isfreebuildmode: any): any;
    SetTechTrees(techlevels: any): any;
    GetTechTrees(): any;
    AddRecipe(recipename: any): any;
    RemoveRecipe(recipename: any): any;
    BufferBuild(recipename: any): any;
    SetIsBuildBuffered(recipename: any, isbuildbuffered: any): any;
    IsBuildBuffered(recipename: any): boolean;
    HasCharacterIngredient(ingredient: any): boolean;
    HasTechIngredient(ingredient: any): boolean;
    KnowsRecipe(recipename: any): boolean;
    CanBuild(recipename: any): boolean;
    CanLearn(recipename: any): boolean;
    CanBuildAtPoint(pt: any, recipe: any, rot: any): boolean;
    MakeRecipeFromMenu(recipe: any, skin: any): any;
    MakeRecipeAtPoint(recipe: any, pt: any, rot: any, skin: any): any;
    IsBusy(): boolean;
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
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetTarget(target: any): any;
    GetTarget(): any;
    SetLastTarget(target: any): any;
    IsRecentTarget(target: any): boolean;
    SetIsPanic(ispanic: any): any;
    SetAttackRange(attackrange: any): any;
    GetAttackRangeWithWeapon(): any;
    GetWeapon(): any;
    SetMinAttackPeriod(minattackperiod: any): any;
    MinAttackPeriod(): any;
    SetCanAttack(canattack: any): any;
    StartAttack(): any;
    CancelAttack(): any;
    CanAttack(target: any): boolean;
    CanExtinguishTarget(target: any, weapon: any): boolean;
    CanLightTarget(target: any, weapon: any): boolean;
    CanHitTarget(target: any): boolean;
    IsValidTarget(target: any): boolean;
    CanTarget(target: any): boolean;
    IsAlly(guy: any): boolean;
    CanBeAttacked(attacker: any): boolean;
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
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetBuilder(builder: any): any;
    SetSlotCount(slot: any, num: any): any;
    IsBuilder(guy: any): boolean;
    GetSlotCount(slot: any): any;
    GetIngredients(): any;
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
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    WidgetSetup(prefab: any, data: any): any;
    GetWidget(): any;
    SetNumSlots(numslots: any): any;
    GetNumSlots(): any;
    SetCanBeOpened(canbeopened: any): any;
    CanBeOpened(): boolean;
    CanTakeItemInSlot(item: any, slot: any): boolean;
    GetSpecificSlotForItem(item: any): any;
    AcceptsStacks(): boolean;
    IsSideWidget(): boolean;
    SetOpener(opener: any): any;
    IsOpenedBy(guy: any): boolean;
    IsHolding(item: any, checkcontainer: any): boolean;
    GetItemInSlot(slot: any): any;
    GetItems(): any;
    IsEmpty(): boolean;
    IsFull(): boolean;
    Has(prefab: any, amount: any): boolean;
    Open(doer: any): any;
    Close(): any;
    IsBusy(): boolean;
    PutOneOfActiveItemInSlot(slot: any): any;
    PutAllOfActiveItemInSlot(slot: any): any;
    TakeActiveItemFromHalfOfSlot(slot: any): any;
    TakeActiveItemFromAllOfSlot(slot: any): any;
    AddOneOfActiveItemToSlot(slot: any): any;
    AddAllOfActiveItemToSlot(slot: any): any;
    SwapActiveItemWithSlot(slot: any): any;
    MoveItemFromAllOfSlot(slot: any, container: any): any;
    MoveItemFromHalfOfSlot(slot: any, container: any): any;
  }

  interface Equippable {
    inst: any;
    restrictedtag: any;
    SetEquipSlot(eslot: any): any;
    EquipSlot(): any;
    IsEquipped(): boolean;
    IsRestricted(target: any): boolean;
  }

  interface FishingRod {
    inst: any;
    SetTarget(target: any): any;
    GetTarget(): any;
    SetHookedFish(hookedfish: any): any;
    HasHookedFish(): boolean;
    SetCaughtFish(caughtfish: any): any;
    HasCaughtFish(): boolean;
  }

  interface Follower {
    inst: any;
    SetLeader(leader: any): any;
    GetLeader(): any;
  }

  interface Health {
    inst: any;
    classified: any;
    ondetachclassified: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetCurrent(current: any): any;
    SetMax(max: any): any;
    SetPenalty(penalty: any): any;
    Max(): any;
    MaxWithPenalty(): any;
    GetPercent(): any;
    GetCurrent(): any;
    GetPenaltyPercent(): any;
    IsHurt(): boolean;
    SetIsFull(isfull: any): any;
    IsFull(): boolean;
    SetIsDead(isdead: any): any;
    IsDead(): boolean;
    SetIsTakingFireDamage(istakingfiredamage: any): any;
    IsTakingFireDamage(): boolean;
    SetIsTakingFireDamageLow(istakingfiredamagelow: any): any;
    IsTakingFireDamageLow(): boolean;
    IsTakingFireDamageFull(): boolean;
    SetCanHeal(canheal: any): any;
    CanHeal(): boolean;
    SetCanMurder(canmurder: any): any;
    CanMurder(): boolean;
  }

  interface Hunger {
    inst: any;
    classified: any;
    ondetachclassified: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetCurrent(current: any): any;
    SetMax(max: any): any;
    Max(): any;
    GetPercent(): any;
    GetCurrent(): any;
    IsStarving(): boolean;
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
    OnRemoveEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    OnOpen(): any;
    OnClose(): any;
    OnShow(): any;
    OnHide(): any;
    SetHeavyLifting(heavylifting: any): any;
    GetNumSlots(): any;
    CanTakeItemInSlot(item: any, slot: any): boolean;
    AcceptsStacks(): boolean;
    IgnoresCanGoInContainer(): any;
    EquipHasTag(tag: any): any;
    IsHeavyLifting(): boolean;
    IsVisible(): boolean;
    IsOpenedBy(guy: any): boolean;
    IsHolding(item: any, checkcontainer: any): boolean;
    GetActiveItem(): any;
    GetItemInSlot(slot: any): any;
    GetEquippedItem(eslot: any): any;
    GetItems(): any;
    GetEquips(): any;
    GetOpenContainers(): any;
    GetOverflowContainer(): any;
    IsFull(): boolean;
    Has(prefab: any, amount: any): boolean;
    ReturnActiveItem(): any;
    PutOneOfActiveItemInSlot(slot: any): any;
    PutAllOfActiveItemInSlot(slot: any): any;
    TakeActiveItemFromHalfOfSlot(slot: any): any;
    TakeActiveItemFromAllOfSlot(slot: any): any;
    AddOneOfActiveItemToSlot(slot: any): any;
    AddAllOfActiveItemToSlot(slot: any): any;
    SwapActiveItemWithSlot(slot: any): any;
    UseItemFromInvTile(item: any): any;
    ControllerUseItemOnItemFromInvTile(item: any, active_item: any): any;
    ControllerUseItemOnSelfFromInvTile(item: any): any;
    ControllerUseItemOnSceneFromInvTile(item: any): any;
    InspectItemFromInvTile(item: any): any;
    DropItemFromInvTile(item: any, single: any): any;
    EquipActiveItem(): any;
    EquipActionItem(item: any): any;
    SwapEquipWithActiveItem(): any;
    TakeActiveItemFromEquipSlot(eslot: any): any;
    MoveItemFromAllOfSlot(slot: any, container: any): any;
    MoveItemFromHalfOfSlot(slot: any, container: any): any;
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
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetCanBePickedUp(canbepickedup: any): any;
    CanBePickedUp(): boolean;
    SetCanGoInContainer(cangoincontainer: any): any;
    CanGoInContainer(): boolean;
    SetCanOnlyGoInPocket(canonlygoinpocket: any): any;
    CanOnlyGoInPocket(): boolean;
    SetImage(imagename: any): any;
    GetImage(): any;
    SetAtlas(atlasname: any): any;
    GetAtlas(): any;
    SetOwner(owner: any): any;
    IsHeld(): boolean;
    IsHeldBy(guy: any): boolean;
    IsGrandOwner(guy: any): boolean;
    SetPickupPos(pos: any): any;
    GetPickupPos(): any;
    SerializeUsage(): any;
    DeserializeUsage(): any;
    SetChargeTime(t: any): any;
    SetDeployMode(deploymode: any): any;
    IsDeployable(deployer: any): boolean;
    SetDeploySpacing(deployspacing: any): any;
    DeploySpacingRadius(): any;
    SetDeployRestrictedTag(restrictedtag: any): any;
    CanDeploy(pt: any, mouseover: any, deployer: any): boolean;
    SetUseGridPlacer(usegridplacer: any): any;
    GetDeployPlacerName(): any;
    SetAttackRange(attackrange: any): any;
    AttackRange(): any;
    IsWeapon(): boolean;
    SetWalkSpeedMult(walkspeedmult: any): any;
    GetWalkSpeedMult(): any;
    SetEquipRestrictedTag(restrictedtag: any): any;
    GetEquipRestrictedTag(): any;
    SetMoistureLevel(moisture: any): any;
    GetMoisture(): any;
    SetIsWet(iswet: any): any;
    IsWet(): boolean;
  }

  interface Moisture {
    inst: any;
    SetIsWet(iswet: any): any;
    IsWet(): boolean;
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
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetActionFilter(riding: any): any;
    OnIsRiding(riding: any): any;
    SetRiding(riding: any): any;
    IsRiding(): boolean;
    OnMountHealth(pct: any): any;
    IsMountHurt(): boolean;
    SetMount(mount: any): any;
    GetMount(): any;
    GetMountRunSpeed(): any;
    GetMountFasterOnRoad(): any;
    SetSaddle(saddle: any): any;
    GetSaddle(): any;
  }

  interface Sanity {
    inst: any;
    classified: any;
    ondetachclassified: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetCurrent(current: any): any;
    SetMax(max: any): any;
    SetPenalty(penalty: any): any;
    Max(): any;
    MaxWithPenalty(): any;
    GetPercent(): any;
    GetPercentNetworked(): any;
    GetCurrent(): any;
    GetPercentWithPenalty(): any;
    GetPenaltyPercent(): any;
    SetRateScale(ratescale: any): any;
    GetRateScale(): any;
    SetSanityMode(mode: any): any;
    SetIsSane(sane: any): any;
    IsSane(): boolean;
    IsInsane(): boolean;
    IsEnlightened(): boolean;
    IsCrazy(): boolean;
    GetSanityMode(): any;
    IsInsanityMode(): boolean;
    IsLunacyMode(): boolean;
    SetGhostDrainMult(ghostdrainmult: any): any;
    IsGhostDrain(): boolean;
  }

  interface Sheltered {
    inst: any;
    OnRemoveFromEntity(): any;
    StartSheltered(): any;
    StopSheltered(): any;
    IsSheltered(): boolean;
    CheckShade(): any;
    OnUpdate(dt: any): any;
  }

  interface Stackable {
    inst: any;
    SetStackSize(stacksize: any): any;
    SetMaxSize(maxsize: any): any;
    StackSize(): any;
    MaxSize(): any;
    IsStack(): boolean;
    IsFull(): boolean;
  }

  interface Writeable {
    inst: any;
    screen: any;
    opentask: any;
    classified: { inst: any; OnEntityReplicated: any; persists: boolean };
    ondetachclassified: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    BeginWriting(doer: any): any;
    Write(doer: any, text: any): any;
    EndWriting(): any;
    SetWriter(writer: any): any;
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
