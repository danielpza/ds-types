declare namespace Replica {
  interface Builder {
    inst: any;
    classified: any;
    ondetachclassified: any;
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
    IsBuildBuffered(recipename: any): any;
    HasCharacterIngredient(ingredient: any): any;
    HasTechIngredient(ingredient: any): any;
    KnowsRecipe(recipename: any): any;
    CanBuild(recipename: any): any;
    CanLearn(recipename: any): any;
    CanBuildAtPoint(pt: any, recipe: any, rot: any): any;
    MakeRecipeFromMenu(recipe: any, skin: any): any;
    MakeRecipeAtPoint(recipe: any, pt: any, rot: any, skin: any): any;
    IsBusy(): any;
  }

  interface Combat {
    inst: any;
    _target: any;
    _ispanic: any;
    _attackrange: any;
    _laststartattacktime: number;
    classified: any;
    ondetachclassified: any;
    weapon: any;
    follower: any;
    leader: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetTarget(target: any): any;
    GetTarget(): any;
    SetLastTarget(target: any): any;
    IsRecentTarget(target: any): any;
    SetIsPanic(ispanic: any): any;
    SetAttackRange(attackrange: any): any;
    GetAttackRangeWithWeapon(): any;
    GetWeapon(): any;
    SetMinAttackPeriod(minattackperiod: any): any;
    MinAttackPeriod(): any;
    SetCanAttack(canattack: any): any;
    StartAttack(): any;
    CancelAttack(): any;
    CanAttack(target: any): any;
    CanExtinguishTarget(target: any, weapon: any): any;
    CanLightTarget(target: any, weapon: any): any;
    CanHitTarget(target: any): any;
    IsValidTarget(target: any): any;
    CanTarget(target: any): any;
    IsAlly(guy: any): any;
    CanBeAttacked(attacker: any): any;
  }

  interface ConstructionSite {
    inst: any;
    classified: any;
    ondetachclassified: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetBuilder(builder: any): any;
    SetSlotCount(slot: any, num: any): any;
    IsBuilder(guy: any): any;
    GetSlotCount(slot: any): any;
    GetIngredients(): any;
  }

  interface Container {
    inst: any;
    _cannotbeopened: any;
    _isopen: boolean;
    _numslots: number;
    acceptsstacks: boolean;
    usespecificslotsforitems: boolean;
    issidewidget: boolean;
    type: any;
    widget: any;
    itemtestfn: any;
    opentask: any;
    classified: any;
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
    CanBeOpened(): any;
    CanTakeItemInSlot(item: any, slot: any): any;
    GetSpecificSlotForItem(item: any): any;
    AcceptsStacks(): any;
    IsSideWidget(): any;
    SetOpener(opener: any): any;
    IsOpenedBy(guy: any): any;
    IsHolding(item: any, checkcontainer: any): any;
    GetItemInSlot(slot: any): any;
    GetItems(): any;
    IsEmpty(): any;
    IsFull(): any;
    Has(prefab: any, amount: any): any;
    Open(doer: any): any;
    Close(): any;
    IsBusy(): any;
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
    _equipslot: any;
    restrictedtag: any;
    SetEquipSlot(eslot: any): any;
    EquipSlot(): any;
    IsEquipped(): any;
    IsRestricted(target: any): any;
  }

  interface FishingRod {
    inst: any;
    _target: any;
    _hashookedfish: any;
    _hascaughtfish: any;
    SetTarget(target: any): any;
    GetTarget(): any;
    SetHookedFish(hookedfish: any): any;
    HasHookedFish(): any;
    SetCaughtFish(caughtfish: any): any;
    HasCaughtFish(): any;
  }

  interface Follower {
    inst: any;
    _leader: any;
    SetLeader(leader: any): any;
    GetLeader(): any;
  }

  interface Health {
    inst: any;
    _isdead: any;
    _isnotfull: any;
    _cannotheal: any;
    _cannotmurder: any;
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
    IsHurt(): any;
    SetIsFull(isfull: any): any;
    IsFull(): any;
    SetIsDead(isdead: any): any;
    IsDead(): any;
    SetIsTakingFireDamage(istakingfiredamage: any): any;
    IsTakingFireDamage(): any;
    SetIsTakingFireDamageLow(istakingfiredamagelow: any): any;
    IsTakingFireDamageLow(): any;
    IsTakingFireDamageFull(): any;
    SetCanHeal(canheal: any): any;
    CanHeal(): any;
    SetCanMurder(canmurder: any): any;
    CanMurder(): any;
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
    IsStarving(): any;
  }

  interface Inventory {
    inst: any;
    opentask: any;
    classified: any;
    ondetachclassified: any;
    OnRemoveEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    OnOpen(): any;
    OnClose(): any;
    OnShow(): any;
    OnHide(): any;
    SetHeavyLifting(heavylifting: any): any;
    GetNumSlots(): any;
    CanTakeItemInSlot(item: any, slot: any): any;
    AcceptsStacks(): any;
    IgnoresCanGoInContainer(): any;
    EquipHasTag(tag: any): any;
    IsHeavyLifting(): any;
    IsVisible(): any;
    IsOpenedBy(guy: any): any;
    IsHolding(item: any, checkcontainer: any): any;
    GetActiveItem(): any;
    GetItemInSlot(slot: any): any;
    GetEquippedItem(eslot: any): any;
    GetItems(): any;
    GetEquips(): any;
    GetOpenContainers(): any;
    GetOverflowContainer(): any;
    IsFull(): any;
    Has(prefab: any, amount: any): any;
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
    _cannotbepickedup: any;
    _iswet: any;
    classified: any;
    ondetachclassified: any;
    percentusedcomponent: any;
    restrictedtag: any;
    x: number;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetCanBePickedUp(canbepickedup: any): any;
    CanBePickedUp(): any;
    SetCanGoInContainer(cangoincontainer: any): any;
    CanGoInContainer(): any;
    SetCanOnlyGoInPocket(canonlygoinpocket: any): any;
    CanOnlyGoInPocket(): any;
    SetImage(imagename: any): any;
    GetImage(): any;
    SetAtlas(atlasname: any): any;
    GetAtlas(): any;
    SetOwner(owner: any): any;
    IsHeld(): any;
    IsHeldBy(guy: any): any;
    IsGrandOwner(guy: any): any;
    SetPickupPos(pos: any): any;
    GetPickupPos(): any;
    SerializeUsage(): any;
    DeserializeUsage(): any;
    SetChargeTime(t: any): any;
    SetDeployMode(deploymode: any): any;
    IsDeployable(deployer: any): any;
    SetDeploySpacing(deployspacing: any): any;
    DeploySpacingRadius(): any;
    SetDeployRestrictedTag(restrictedtag: any): any;
    CanDeploy(pt: any, mouseover: any, deployer: any): any;
    SetUseGridPlacer(usegridplacer: any): any;
    GetDeployPlacerName(): any;
    SetAttackRange(attackrange: any): any;
    AttackRange(): any;
    IsWeapon(): any;
    SetWalkSpeedMult(walkspeedmult: any): any;
    GetWalkSpeedMult(): any;
    SetEquipRestrictedTag(restrictedtag: any): any;
    GetEquipRestrictedTag(): any;
    SetMoistureLevel(moisture: any): any;
    GetMoisture(): any;
    SetIsWet(iswet: any): any;
    IsWet(): any;
  }

  interface Moisture {
    inst: any;
    _iswet: any;
    SetIsWet(iswet: any): any;
    IsWet(): any;
  }

  interface Named {
    inst: any;
    _name: any;
    SetName(name: any): any;
  }

  interface Rider {
    inst: any;
    _isriding: any;
    classified: any;
    ondetachclassified: any;
    mount: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SetActionFilter(riding: any): any;
    OnIsRiding(riding: any): any;
    SetRiding(riding: any): any;
    IsRiding(): any;
    OnMountHealth(pct: any): any;
    IsMountHurt(): any;
    SetMount(mount: any): any;
    GetMount(): any;
    GetMountRunSpeed(): any;
    GetMountFasterOnRoad(): any;
    SetSaddle(saddle: any): any;
    GetSaddle(): any;
  }

  interface Sanity {
    inst: any;
    _oldissane: boolean;
    _oldisinsanitymode: boolean;
    _issane: any;
    _isinsanitymode: any;
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
    IsSane(): any;
    IsInsane(): any;
    IsEnlightened(): any;
    IsCrazy(): any;
    GetSanityMode(): any;
    IsInsanityMode(): any;
    IsLunacyMode(): any;
    SetGhostDrainMult(ghostdrainmult: any): any;
    IsGhostDrain(): any;
  }

  interface Sheltered {
    inst: any;
    _updating: boolean;
    _shade: any;
    _targetshade: any;
    _shelterspeed: any;
    _exposespeed: any;
    _issheltered: any;
    _task: any;
    OnRemoveFromEntity(): any;
    StartSheltered(): any;
    StopSheltered(): any;
    IsSheltered(): any;
    CheckShade(): any;
    OnUpdate(dt: any): any;
  }

  interface Stackable {
    inst: any;
    _stacksize: any;
    _maxsize: any;
    SetStackSize(stacksize: any): any;
    SetMaxSize(maxsize: any): any;
    StackSize(): any;
    MaxSize(): any;
    IsStack(): any;
    IsFull(): any;
  }

  interface Writeable {
    inst: any;
    screen: any;
    opentask: any;
    classified: any;
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

declare interface Replica {
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
