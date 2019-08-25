declare namespace Component {
  interface Activatable {
    inst: any;
    OnActivate: any;
    inactive: boolean;
    standingaction: boolean;
    quickaction: boolean;
    OnRemoveFromEntity(): any;
    CanActivate(doer: any): boolean;
    DoActivate(doer: any): any;
  }

  interface Age {
    inst: any;
    saved_age: number;
    paused_time: number;
    spawntime: any;
    last_pause_time: any;
    _synctask: any;
    CancelPeriodicSync(): any;
    RestartPeriodicSync(): any;
    GetAge(): any;
    GetAgeInDays(): any;
    GetDisplayAgeInDays(): any;
    PauseAging(): any;
    ResumeAging(): any;
    OnSave(): any;
    GetDebugString(): any;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
  }

  interface Amorphous {
    inst: any;
    forms: any;
    currentform: any;
    numforms: any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(): any;
    GetCurrentForm(): any;
    AddForm(form: any): any;
    FindForm(name: any): any;
    MorphToForm(form: any, instant: any): any;
    CheckForMorph(): any;
  }

  interface AmphibiousCreature {
    inst: any;
    tile: any;
    tileinfo: any;
    ontilechangefn: any;
    in_water: boolean;
    onwaterchangefn: any;
    land_bank: any;
    ocean_bank: any;
    enterwaterfn: any;
    exitwaterfn: any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    SetBanks(land: any, ocean: any): any;
    OnUpdate(dt: any): any;
    ShouldTransition(x: any, z: any): any;
    OnEnterOcean(): any;
    OnExitOcean(): any;
    SetOnTileChangeFn(fn: any): any;
    SetOnWaterChangeFn(fn: any): any;
    SetEnterWaterFn(fn: any): any;
    SetExitWaterFn(fn: any): any;
  }

  interface Anchor {
    inst: any;
    is_anchor_lowered: boolean;
    drag: any;
    max_velocity_mod: any;
    raisers: any;
    numberofraisers: number;
    raiseunits: number;
    bottomunits: number;
    currentraiseunits: number;
    autolowerunits: number;
    data: any;
    depth: any;
    ground: any;
    rasing: boolean;
    is_anchor_transitioning: any;
    SetVelocityMod(set: any): any;
    GetVelocityMod(): any;
    GetDrag(): any;
    OnSave(): any;
    GetCurrentDepth(): any;
    OnLoad(data: any): any;
    GetBoat(): any;
    SetIsAnchorLowered(is_lowered: any): any;
    StartRaisingAnchor(): any;
    StartLoweringAnchor(): any;
    AddAnchorRaiser(doer: any): any;
    RemoveAnchorRaiser(doer: any): any;
    AnchorRaised(): any;
    AnchorLowered(): any;
    OnUpdate(dt: any): any;
  }

  interface AOETargeting {
    inst: any;
    reticule: any;
    targetprefab: any;
    alwaysvalid: boolean;
    range: number;
    enabled: any;
    IsEnabled(): boolean;
    SetEnabled(enabled: any): any;
    SetTargetFX(prefab: any): any;
    SetAlwaysValid(val: any): any;
    SetRange(range: any): any;
    GetRange(): any;
    StartTargeting(): any;
    StopTargeting(): any;
  }

  interface AreaTrigger {
    inst: any;
    stories: any;
    retune: any;
    DoOverride(overrides: any): any;
    CheckTrigger(area: any): any;
    RegisterTriggers(stories: any): any;
  }

  interface AreaUnlock {
    inst: any;
    stories: any;
    unlocked: any;
    CheckUnlock(area: any): any;
    RegisterStory(story: any): any;
    GetUnlocked(): any;
  }

  interface AreaAware {
    inst: any;
    current_area: any;
    current_area_data: any;
    lastpt: any;
    updatedistsq: number;
    _ForceUpdate: any;
    x: any;
    z: any;
    y: any;
    node: any;
    checkpositiontask: any;
    OnRemoveFromEntity(): any;
    UpdatePosition(x: any, y: any, z: any): any;
    OnUpdate(dt: any): any;
    SetUpdateDist(dist: any): any;
    GetCurrentArea(): any;
    CurrentlyInTag(tag: any): any;
    GetDebugString(): any;
    StartCheckingPosition(checkinterval: any): any;
  }

  interface Armor {
    inst: any;
    condition: number;
    maxcondition: number;
    tags: any;
    weakness: any;
    absorb_percent: any;
    indestructible: boolean;
    damage: number;
    InitCondition(amount: any, absorb_percent: any): any;
    InitIndestructible(absorb_percent: any): any;
    IsIndestructible(): boolean;
    GetPercent(amount: any): any;
    SetTags(tags: any): any;
    AddWeakness(tag: any, bonus_damage: any): any;
    RemoveWeakness(tag: any): any;
    SetAbsorption(absorb_percent: any): any;
    SetPercent(amount: any): any;
    SetCondition(amount: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    CanResist(attacker: any, weapon: any): boolean;
    GetAbsorption(attacker: any, weapon: any): any;
    GetBonusDamage(attacker: any, weapon: any): any;
    TakeDamage(damage_amount: any): any;
  }

  interface Attunable {
    inst: any;
    attuned_players: any;
    attuned_userids: any;
    attunable_tag: any;
    onattunecostfn: any;
    onlinkfn: any;
    onunlinkfn: any;
    onplayerattuned: any;
    onplayerremoved: any;
    onplayerjoined: any;
    toremove: any;
    userids: any;
    str: string;
    OnRemoveEntity(): any;
    GetAttunableTag(): any;
    SetAttunableTag(tag: any): any;
    SetOnAttuneCostFn(fn: any): any;
    SetOnLinkFn(fn: any): any;
    SetOnUnlinkFn(fn: any): any;
    IsAttuned(player: any): boolean;
    CanAttune(player: any): boolean;
    LinkToPlayer(player: any, isloading: any): any;
    UnlinkFromPlayer(player: any, isloading: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Attuner {
    inst: any;
    ismastersim: any;
    attuned: any;
    str: string;
    IsAttunedTo(target: any): boolean;
    HasAttunement(tag: any): boolean;
    GetAttunedTarget(tag: any): any;
    RegisterAttunedSource(proxy: any): any;
    UnregisterAttunedSource(proxy: any): any;
    GetDebugString(): any;
  }

  interface Aura {
    inst: any;
    radius: number;
    tickperiod: number;
    active: boolean;
    applying: boolean;
    auratestfn: any;
    auraexcludetags: any;
    _fn: any;
    str: any;
    applied: any;
    GetDebugString(): any;
    Enable(val: any): any;
    OnTick(): any;
  }

  interface Bait {
    inst: any;
    trap: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    IsFree(): boolean;
  }

  interface BalloonMaker {
    inst: any;
    balloon: any;
    MakeBalloon(x: any, y: any, z: any): any;
  }

  interface BathBomb {
    inst: any;
    OnRemoveFromEntity(): any;
    ApplyBathBomb(bathbombable_target: any): any;
  }

  interface BathBombable {
    inst: any;
    onbathbombedfn: any;
    canbebathbombedfn: any;
    OnRemoveFromEntity(): any;
    SetOnBathBombedFn(new_fn: any): any;
    OnBathBombed(bathbomb_inst: any): any;
    SetCanBeBathBombedFn(new_fn: any): any;
    SetCanBeBathBombed(can_be_bathbombed: any): any;
    CanBeBathBombed(bathbomb_inst: any): boolean;
  }

  interface BatSpawner {
    inst: any;
    bats: any;
    timetospawn: number;
    batcap: number;
    spawntime: any;
    battypes: any;
    theta: any;
    radius: any;
    ground: any;
    result_offset: any;
    GetDebugString(): any;
    SetSpawnTimes(times: any): any;
    SetMaxBats(max: any): any;
    StartTracking(inst: any): any;
    GetSpawnPoint(pt: any): any;
  }

  interface Beard {
    inst: any;
    daysgrowth: number;
    callbacks: any;
    prize: any;
    bits: number;
    insulation_factor: number;
    pause: any;
    onreset: any;
    isgrowing: any;
    nextevent: any;
    OnRemoveFromEntity(): any;
    EnableGrowth(enable: any): any;
    GetInsulation(): any;
    ShouldTryToShave(who: any, whithwhat: any): any;
    Shave(who: any, withwhat: any): any;
    AddCallback(day: any, cb: any): any;
    Reset(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Beaverness {
    inst: any;
    max: number;
    current: number;
    _old: any;
    time_effect_multiplier: number;
    task: any;
    old: any;
    IsStarving(): boolean;
    StartTimeEffect(dt: any, delta_b: any): any;
    StopTimeEffect(): any;
    SetTimeEffectMultiplier(multiplier: any): any;
    DoDelta(delta: any, overtime: any): any;
    GetPercent(): any;
    SetPercent(percent: any, overtime: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface BeefaloMetrics {
    inst: any;
    lastdomesticator: any;
    lastdomesticator_id: any;
    SetLastDomesticator(player: any): any;
    GetLastDomesticator(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface BirdAttractor {
    inst: any;
    spawnmodifier: any;
    str: any;
    GetDebugString(): any;
  }

  interface BlinkStaff {
    inst: any;
    onblinkfn: any;
    blinktask: any;
    frontfx: any;
    backfx: any;
    x: any;
    y: any;
    z: any;
    SetFX(front: any, back: any): any;
    SpawnEffect(inst: any): any;
    Blink(pt: any, caster: any): any;
  }

  interface Bloomer {
    inst: any;
    bloomstack: any;
    children: any;
    _onremovesource: any;
    str: string;
    OnRemoveFromEntity(): any;
    AttachChild(child: any): any;
    DetachChild(child: any): any;
    GetCurrentFX(): any;
    OnSetBloomEffectHandle(fx: any): any;
    OnClearBloomEffectHandle(): any;
    PushBloom(source: any, fx: any, priority: any): any;
    PopBloom(source: any): any;
    GetDebugString(): any;
  }

  interface BlowInWind {
    inst: any;
    maxSpeedMult: number;
    minSpeedMult: number;
    averageSpeed: any;
    speed: number;
    windAngle: number;
    windVector: any;
    currentAngle: number;
    currentVector: any;
    velocity: any;
    speedVarTime: number;
    speedVarPeriod: any;
    soundParameter: any;
    soundName: any;
    curr_speed: any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    StartSoundLoop(): any;
    StopSoundLoop(): any;
    Start(ang: any, vel: any): any;
    Stop(): any;
    ChangeDirection(ang: any, vel: any): any;
    SetMaxSpeedMult(spd: any): any;
    SetMinSpeedMult(spd: any): any;
    SetAverageSpeed(spd: any): any;
    GetSpeed(): any;
    GetVelocity(): any;
    GetDebugString(): any;
    OnUpdate(dt: any): any;
  }

  interface BoatAI {
    inst: any;
    my_position: any;
    entities: any;
    OnUpdate(dt: any): any;
  }

  interface BoatLeak {
    inst: any;
    has_leaks: boolean;
    leak_build: string;
    repair_state: string;
    patch_type: any;
    anim_state: any;
    current_state: any;
    boat: any;
    Repair(doer: any, patch_item: any): any;
    ChangeToRepaired(repair_build_name: any): any;
    SetState(state: any): any;
    SetBoat(boat: any): any;
  }

  interface BoatPatch {
    inst: any;
    patch_type: any;
    OnRemoveFromEntity(): any;
    GetPatchType(): any;
  }

  interface BoatPhysics {
    inst: any;
    velocity_x: number;
    velocity_z: number;
    has_speed: boolean;
    damageable_velocity: number;
    max_velocity: any;
    rudder_turn_speed: any;
    masts: any;
    anchor_cmps: any;
    lastzoomtime: any;
    lastzoomwasout: boolean;
    target_rudder_direction_x: number;
    target_rudder_direction_z: number;
    rudder_direction_x: number;
    rudder_direction_z: number;
    turn_vel: number;
    turn_acc: any;
    data: any;
    sinking: boolean;
    max_vel: number;
    mast_maxes: any;
    mult: number;
    total_anchor_drag: number;
    velocity_length: any;
    speed: number;
    boat_pos_x: any;
    boat_pos_y: any;
    boat_pos_z: any;
    stop: boolean;
    p1_angle: any;
    p2_angle: any;
    target_vel: any;
    TOLLERANCE: number;
    raised_sail_count: number;
    sail_force: number;
    MAX_ALLOWED_VELOCITY: number;
    new_speed_is_scary: any;
    time: any;
    OnSave(): any;
    OnLoad(data: any): any;
    AddAnchorCmp(anchor_cmp: any): any;
    RemoveAnchorCmp(anchor_cmp: any): any;
    SetTargetRudderDirection(dir_x: any, dir_z: any): any;
    GetTargetRudderDirection(): any;
    GetRudderDirection(): any;
    AddMast(mast: any): any;
    RemoveMast(mast: any): any;
    OnDeath(): any;
    GetVelocity(): any;
    ApplyForce(dir_x: any, dir_z: any, force: any): any;
    GetMaxVelocity(): any;
    GetTotalAnchorDrag(): any;
    GetRudderTurnSpeed(): any;
    OnUpdate(dt: any): any;
    OnRemoveFromEntity(): any;
  }

  interface BoatTrail {
    inst: any;
    anim_idx: number;
    fx: any;
    radius: number;
    total_distance_traveled: any;
    x: any;
    y: any;
    z: any;
    effect_spawn_rate: number;
    dir_x: any;
    dir_z: any;
    distance_traveled: any;
    angle_apart: number;
    last_x: any;
    last_z: any;
    last_dir_x: any;
    last_dir_z: any;
    SpawnEffectPrefab(x: any, y: any, z: any, dir_x: any, dir_z: any): any;
    OnUpdate(dt: any): any;
  }

  interface BoatTrailMover {
    inst: any;
    track_boat_time: number;
    dir_x: any;
    dir_z: any;
    rudder_angle: any;
    velocity: any;
    acceleration: any;
    x: any;
    y: any;
    z: any;
    Setup(dir_x: any, dir_z: any, velocity: any, acceleration: any): any;
    OnUpdate(dt: any): any;
  }

  interface Book {
    inst: any;
    OnRead(reader: any): any;
  }

  interface Brush {
    inst: any;
  }

  interface Brushable {
    inst: any;
    prize: any;
    max: number;
    cyclesperprize: number;
    lastbrushcycle: number;
    brushable: boolean;
    onbrushfn: any;
    elapsed: any;
    numprizes: number;
    SetBrushable(brushable: any, reset: any): any;
    SetOnBrushed(fn: any): any;
    CalculateNumPrizes(): any;
    Brush(doer: any, brush: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Builder {
    inst: any;
    recipes: any;
    station_recipes: any;
    accessible_tech_trees: any;
    current_prototyper: any;
    buffered_builds: any;
    bonus_tech_level: number;
    science_bonus: number;
    magic_bonus: number;
    ancient_bonus: number;
    shadow_bonus: number;
    ingredientmod: number;
    freebuildmode: boolean;
    exclude_tags: any;
    hungrytime: any;
    pos: any;
    ents: any;
    old_accessible_tech_trees: any;
    old_station_recipes: any;
    old_prototyper: any;
    prototyper_active: boolean;
    trees_changed: boolean;
    recipe: any;
    wetness: any;
    totalWetness: number;
    totalItems: number;
    has_tech: boolean;
    ActivateCurrentResearchMachine(recipe: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    IsBuildBuffered(recname: any): boolean;
    OnUpdate(): any;
    GiveAllRecipes(): any;
    UnlockRecipesForTech(tech: any): any;
    EvaluateTechTrees(): any;
    AddRecipe(recname: any): any;
    UnlockRecipe(recname: any): any;
    GetIngredientWetness(ingredients: any): any;
    GetIngredients(recname: any): any;
    RemoveIngredients(ingredients: any, recname: any): any;
    HasCharacterIngredient(ingredient: any): boolean;
    HasTechIngredient(ingredient: any): boolean;
    MakeRecipe(recipe: any, pt: any, rot: any, skin: any, onsuccess: any): any;
    DoBuild(recname: any, pt: any, rotation: any, skin: any): any;
    KnowsRecipe(recname: any): boolean;
    CanBuild(recname: any): boolean;
    CanLearn(recname: any): boolean;
    LongUpdate(dt: any): any;
    MakeRecipeFromMenu(recipe: any, skin: any): any;
    MakeRecipeAtPoint(recipe: any, pt: any, rot: any, skin: any): any;
    BufferBuild(recname: any): any;
  }

  interface BundleMaker {
    inst: any;
    bundlingprefab: any;
    bundledprefab: any;
    onstartbundlingfn: any;
    SetBundlingPrefabs(bundling: any, bundled: any): any;
    SetOnStartBundlingFn(fn: any): any;
    OnStartBundling(doer: any): any;
  }

  interface Bundler {
    inst: any;
    bundlinginst: any;
    itemprefab: any;
    wrappedprefab: any;
    data: any;
    CanStartBundling(): boolean;
    IsBundling(bundlinginst: any): boolean;
    StartBundling(item: any): any;
    StopBundling(): any;
    FinishBundling(): any;
    OnFinishBundling(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Burnable {
    inst: any;
    flammability: number;
    fxdata: any;
    fxlevel: number;
    fxchildren: any;
    fxoffset: any;
    burning: boolean;
    burntime: any;
    extinguishimmediately: boolean;
    smoldertimeremaining: any;
    smoldering: boolean;
    onignite: any;
    onextinguish: any;
    onburnt: any;
    onsmoldering: any;
    onstopsmoldering: any;
    canlight: boolean;
    lightningimmune: boolean;
    task: any;
    smolder_task: any;
    fxprefab: any;
    largestRadius: any;
    SetOnStopSmolderingFn(fn: any): any;
    SetOnSmolderingFn(fn: any): any;
    SetOnIgniteFn(fn: any): any;
    SetOnBurntFn(fn: any): any;
    SetOnExtinguishFn(fn: any): any;
    SetBurningFX(name: any): any;
    SetBurnTime(time: any): any;
    IsBurning(): boolean;
    IsSmoldering(): boolean;
    AddBurnFX(
      prefab: any,
      offset: any,
      followsymbol: any,
      followaschild: any
    ): any;
    OverrideBurnFXBuild(build: any): any;
    OverrideBurnFXFinalOffset(offs: any): any;
    OverrideBurnFXRadius(radius_levels: any): any;
    SetFXOffset(x: any, y: any, z: any): any;
    SetFXLevel(level: any, percent: any): any;
    GetLargestLightRadius(): any;
    GetDebugString(): any;
    OnRemoveEntity(): any;
    StartWildfire(): any;
    Ignite(immediate: any, source: any, doer: any): any;
    ExtendBurning(): any;
    LongUpdate(dt: any): any;
    SmotherSmolder(smotherer: any): any;
    StopSmoldering(heatpct: any): any;
    Extinguish(resetpropagator: any, heatpct: any, smotherer: any): any;
    SpawnFX(immediate: any): any;
    FixFX(): any;
    KillFX(): any;
    HasEndothermicHeat(): boolean;
    HasExothermicHeat(): boolean;
    OnRemoveFromEntity(): any;
  }

  interface CarefulWalker {
    inst: any;
    careful: boolean;
    carefulwalkingspeedmult: any;
    targets: any;
    data: any;
    x: any;
    y: any;
    z: any;
    checkcareful: any;
    toremove: any;
    OnRemoveFromEntity(): any;
    SetCarefulWalkingSpeedMultiplier(mult: any): any;
    TrackTarget(target: any, radius: any, duration: any): any;
    IsCarefulWalking(): boolean;
    ToggleCareful(careful: any): any;
    OnUpdate(dt: any): any;
  }

  interface Catcher {
    inst: any;
    enabled: boolean;
    actiondistance: number;
    catchdistance: number;
    canact: boolean;
    watchlist: any;
    OnRemoveFromEntity(): any;
    SetEnabled(enable: any): any;
    SetActionDistance(dist: any): any;
    SetCatchDistance(dist: any): any;
    StartWatching(projectile: any): any;
    StopWatching(projectile: any): any;
    CanCatch(): boolean;
    OnUpdate(): any;
  }

  interface Channelable {
    inst: any;
    enabled: boolean;
    channeler: any;
    onchannelingfn: any;
    onstopchannelingfn: any;
    SetEnabled(enabled: any): any;
    SetChannelingFn(startfn: any, stopfn: any): any;
    IsChanneling(): boolean;
    StartChanneling(channeler: any): any;
    StopChanneling(aborted: any): any;
    OnUpdate(dt: any): any;
    GetDebugString(): any;
  }

  interface ChildSpawner {
    inst: any;
    childrenoutside: any;
    childreninside: number;
    numchildrenoutside: number;
    maxchildren: number;
    childname: string;
    rarechild: any;
    rarechildchance: number;
    onvacate: any;
    onoccupied: any;
    onspawned: any;
    ongohome: any;
    spawning: boolean;
    timetonextspawn: number;
    spawnperiod: number;
    spawnvariance: number;
    regening: boolean;
    timetonextregen: number;
    regenperiod: number;
    regenvariance: number;
    spawnoffscreen: boolean;
    task: any;
    emergencychildname: any;
    emergencychildrenperplayer: number;
    maxemergencychildren: number;
    maxemergencycommit: number;
    emergencydetectionradius: number;
    emergencychildreninside: number;
    emergencychildrenoutside: any;
    numemergencychildrenoutside: number;
    _onchildkilled: any;
    onchildkilledfn: any;
    onaddchild: any;
    vacantchildren: number;
    data: any;
    references: any;
    str: any;
    num_children: any;
    x: any;
    y: any;
    z: any;
    offset: any;
    child: any;
    ents: any;
    OnRemoveFromEntity(): any;
    StartRegen(): any;
    SetRareChild(childname: any, chance: any): any;
    StopRegen(): any;
    SetSpawnPeriod(period: any, variance: any): any;
    SetRegenPeriod(period: any, variance: any): any;
    SetEmergencyRadius(rad: any): any;
    IsFull(): boolean;
    NumChildren(): any;
    OnUpdate(dt: any): any;
    StartUpdate(dt: any): any;
    StartSpawning(): any;
    StopSpawning(): any;
    SetOccupiedFn(fn: any): any;
    SetSpawnedFn(fn: any): any;
    SetGoHomeFn(fn: any): any;
    SetVacateFn(fn: any): any;
    SetOnChildKilledFn(fn: any): any;
    SetOnAddChildFn(fn: any): any;
    CountChildrenOutside(fn: any): any;
    SetMaxChildren(max: any): any;
    SetMaxEmergencyChildren(max: any): any;
    OnSave(): any;
    GetDebugString(): any;
    OnLoad(data: any): any;
    DoTakeOwnership(child: any): any;
    TakeOwnership(child: any): any;
    TakeEmergencyOwnership(child: any): any;
    LoadPostPass(newents: any, savedata: any): any;
    DoSpawnChild(target: any, prefab: any, radius: any): any;
    SpawnChild(target: any, prefab: any, radius: any): any;
    SpawnEmergencyChild(target: any, prefab: any, radius: any): any;
    UpdateMaxEmergencyCommit(): any;
    TrySpawnEmergencyChild(): any;
    GoHome(child: any): any;
    CanSpawn(): boolean;
    CanEmergencySpawn(): boolean;
    OnChildKilled(child: any): any;
    ReleaseAllChildren(target: any, prefab: any): any;
    AddChildrenInside(count: any): any;
    AddEmergencyChildrenInside(count: any): any;
    LongUpdate(dt: any): any;
  }

  interface Circler {
    inst: any;
    scale: number;
    speed: any;
    circleTarget: any;
    minSpeed: number;
    maxSpeed: number;
    minDist: number;
    maxDist: number;
    minScale: number;
    maxScale: number;
    onaccelerate: any;
    numAccelerates: number;
    sineMod: any;
    sine: number;
    distance: any;
    angleRad: any;
    offset: any;
    facingAngle: any;
    direction: any;
    x: any;
    y: any;
    z: any;
    Start(): any;
    Stop(): any;
    SetCircleTarget(tar: any): any;
    GetSpeed(dt: any): any;
    GetMinSpeed(): any;
    GetMaxSpeed(): any;
    GetMinScale(): any;
    GetMaxScale(): any;
    GetDebugString(): any;
    OnUpdate(dt: any): any;
  }

  interface CircuitNode {
    inst: any;
    range: number;
    numnodes: number;
    connectsacrossplatforms: boolean;
    ondisconnectfn: any;
    nodes: any;
    onconnectfn: any;
    OnRemoveEntity(): any;
    IsEnabled(): boolean;
    IsConnected(): boolean;
    NumConnectedNodes(): any;
    ConnectTo(tag: any): any;
    Disconnect(): any;
    SetRange(range: any): any;
    SetOnConnectFn(fn: any): any;
    SetOnDisconnectFn(fn: any): any;
    AddNode(node: any): any;
    RemoveNode(node: any): any;
    ForEachNode(fn: any): any;
  }

  interface ColourAdder {
    inst: any;
    colourstack: any;
    children: any;
    colour: any;
    _onremovesource: any;
    r: number;
    g: number;
    b: number;
    a: number;
    str: any;
    OnRemoveFromEntity(): any;
    AttachChild(child: any): any;
    DetachChild(child: any): any;
    GetCurrentColour(): any;
    CalculateCurrentColour(): any;
    OnSetColour(r: any, g: any, b: any, a: any): any;
    PushColour(source: any, r: any, g: any, b: any, a: any): any;
    PopColour(source: any): any;
    GetDebugString(): any;
  }

  interface ColourTweener {
    inst: any;
    i_colour_r: any;
    i_colour_g: any;
    i_colour_b: any;
    i_alpha: any;
    t_colour_r: any;
    t_colour_g: any;
    t_colour_b: any;
    t_alpha: any;
    callback: any;
    time: any;
    timepassed: number;
    tweening: boolean;
    i_colour: any;
    t: any;
    IsTweening(): boolean;
    EndTween(): any;
    StartTween(colour: any, time: any, callback: any): any;
    OnUpdate(dt: any): any;
  }

  interface Combat {
    inst: any;
    nextbattlecrytime: any;
    battlecryenabled: boolean;
    attackrange: number;
    hitrange: number;
    areahitrange: any;
    areahitdamagepercent: any;
    defaultdamage: number;
    externaldamagemultipliers: any;
    externaldamagetakenmultipliers: any;
    min_attack_period: number;
    onhitfn: any;
    onhitotherfn: any;
    laststartattacktime: number;
    lastwasattackedtime: number;
    keeptargetfn: any;
    keeptargettimeout: number;
    hiteffectsymbol: string;
    canattack: boolean;
    lasttargetGUID: any;
    target: any;
    panic_thresh: any;
    forcefacing: boolean;
    bonusdamagefn: any;
    playerstunlock: any;
    areahitcheck: any;
    areahitdisabled: any;
    blanktask: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    num_helpers: number;
    targetfn: any;
    retargetperiod: any;
    str: any;
    hurtsound: any;
    blocked: boolean;
    damageredirecttarget: any;
    damageresolved: number;
    lastattacker: any;
    redirect_combat: any;
    hitsound: string;
    weaponmod: any;
    tgtinv: any;
    is_attacking: any;
    basedamage: any;
    basemultiplier: any;
    bonus: any;
    playermultiplier: any;
    pvpmultiplier: any;
    weapon: any;
    range: any;
    reflected_dmg: number;
    reflect_list: any;
    lastdoattacktime: any;
    hitcount: number;
    SetLastTarget(target: any): any;
    SetAttackPeriod(period: any): any;
    TargetIs(target: any): any;
    InCooldown(): any;
    GetCooldown(): any;
    ResetCooldown(): any;
    RestartCooldown(): any;
    SetRange(attack: any, hit: any): any;
    SetPlayerStunlock(stunlock: any): any;
    SetAreaDamage(range: any, percent: any, areahitcheck: any): any;
    EnableAreaDamage(enable: any): any;
    BlankOutAttacks(fortime: any): any;
    ShareTarget(
      target: any,
      range: any,
      fn: any,
      maxnum: any,
      musttags: any
    ): any;
    SetDefaultDamage(damage: any): any;
    SetOnHit(fn: any): any;
    SuggestTarget(target: any): any;
    SetKeepTargetFunction(fn: any): any;
    TryRetarget(): any;
    SetRetargetFunction(period: any, fn: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    IsRecentTarget(target: any): boolean;
    StartTrackingTarget(target: any): any;
    StopTrackingTarget(target: any): any;
    DropTarget(hasnexttarget: any): any;
    EngageTarget(target: any): any;
    SetTarget(target: any): any;
    IsValidTarget(target: any): boolean;
    ValidateTarget(): any;
    GetDebugString(): any;
    GetGiveUpString(target: any): any;
    GiveUp(): any;
    GetBattleCryString(target: any): any;
    ResetBattleCryCooldown(t: any): any;
    BattleCry(): any;
    SetHurtSound(sound: any): any;
    GetAttacked(attacker: any, damage: any, weapon: any, stimuli: any): any;
    GetImpactSound(target: any, weapon: any): any;
    StartAttack(): any;
    CancelAttack(): any;
    CanTarget(target: any): boolean;
    HasTarget(): boolean;
    CanAttack(target: any): boolean;
    TryAttack(target: any): any;
    ForceAttack(): any;
    GetWeapon(): any;
    GetLastAttackedTime(): any;
    CalcDamage(target: any, weapon: any, multiplier: any): any;
    CalcReflectedDamage(
      targ: any,
      dmg: any,
      weapon: any,
      stimuli: any,
      reflect_list: any
    ): any;
    GetAttackRange(): any;
    CalcAttackRangeSq(target: any): any;
    GetHitRange(): any;
    CalcHitRangeSq(target: any): any;
    CanExtinguishTarget(target: any, weapon: any): boolean;
    CanLightTarget(target: any, weapon: any): boolean;
    CanHitTarget(target: any, weapon: any): boolean;
    DoAttack(
      targ: any,
      weapon: any,
      projectile: any,
      stimuli: any,
      instancemult: any
    ): any;
    GetDamageReflect(target: any, damage: any, weapon: any, stimuli: any): any;
    DoAreaAttack(
      target: any,
      range: any,
      weapon: any,
      validfn: any,
      stimuli: any,
      excludetags: any
    ): any;
    IsAlly(guy: any): boolean;
    CanBeAttacked(attacker: any): boolean;
    OnSave(): any;
    LoadPostPass(newents: any, data: any): any;
    OnRemoveFromEntity(): any;
  }

  interface Commander {
    inst: any;
    soldiers: any;
    numsoldiers: number;
    trackingdist: number;
    trackingperiod: number;
    _task: any;
    _onremove: any;
    k: any;
    OnRemoveFromEntity(): any;
    GetNumSoldiers(): any;
    GetAllSoldiers(): any;
    IsSoldier(ent: any): boolean;
    ShareTargetToAllSoldiers(target: any): any;
    DropAllSoldierTargets(): any;
    IsAnySoldierNotAlert(): boolean;
    AlertAllSoldiers(): any;
    PushEventToAllSoldiers(ev: any, data: any): any;
    AddSoldier(ent: any): any;
    RemoveSoldier(ent: any): any;
    SetTrackingDistance(dist: any): any;
    StartTrackingDistance(): any;
    StopTrackingDistance(): any;
    GetDebugString(): any;
  }

  interface ComplexProjectile {
    inst: any;
    velocity: any;
    gravity: any;
    horizontalSpeed: number;
    launchoffset: any;
    targetoffset: any;
    owningweapon: any;
    attacker: any;
    onlaunchfn: any;
    onhitfn: any;
    onmissfn: any;
    onupdatefn: any;
    usehigharc: boolean;
    speedSq: any;
    g: any;
    dx: any;
    dy: any;
    dz: any;
    rangeSq: any;
    range: any;
    discriminant: any;
    angle: any;
    cosangleXspeed: any;
    x: number;
    z: number;
    y: number;
    pos: any;
    offset: any;
    attacker_platform: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    SetHorizontalSpeed(speed: any): any;
    SetGravity(g: any): any;
    SetLaunchOffset(offset: any): any;
    SetTargetOffset(offset: any): any;
    SetOnLaunch(fn: any): any;
    SetOnHit(fn: any): any;
    SetOnUpdate(fn: any): any;
    CalculateTrajectory(startPos: any, endPos: any, speed: any): any;
    Launch(targetPos: any, attacker: any, owningweapon: any): any;
    Hit(target: any): any;
    OnUpdate(dt: any): any;
  }

  interface ConstructionBuilder {
    inst: any;
    constructioninst: any;
    constructionsite: any;
    _onremoveconstructionsite: any;
    CanStartConstruction(): boolean;
    IsConstructing(constructioninst: any): boolean;
    IsConstructingAny(): boolean;
    StartConstruction(target: any): any;
    StopConstruction(): any;
    FinishConstruction(): any;
    OnFinishConstruction(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface ConstructionBuilderUIData {
    inst: any;
    _containerinst: any;
    _targetinst: any;
    SetContainer(containerinst: any): any;
    GetContainer(): any;
    SetTarget(targetinst: any): any;
    GetTarget(): any;
    GetConstructionSite(): any;
    GetIngredientForSlot(slot: any): any;
    GetSlotForIngredient(prefab: any): any;
  }

  interface ConstructionPlans {
    inst: any;
    targetprefabs: any;
    constructionprefab: any;
    product: any;
    AddTargetPrefab(prefab: any, constructionprefab: any): any;
    RemoveTargetPrefab(prefab: any): any;
    StartConstruction(target: any): any;
    OnRemoveFromEntity(): any;
  }

  interface ConstructionSite {
    inst: any;
    materials: any;
    builder: any;
    constructionprefab: any;
    onstartconstructionfn: any;
    onstopconstructionfn: any;
    onconstructedfn: any;
    x: any;
    y: any;
    z: any;
    material: any;
    str: any;
    SetConstructionPrefab(prefab: any): any;
    SetOnStartConstructionFn(fn: any): any;
    SetOnStopConstructionFn(fn: any): any;
    SetOnConstructedFn(fn: any): any;
    OnStartConstruction(doer: any): any;
    OnStopConstruction(doer: any): any;
    OnConstruct(doer: any, items: any): any;
    HasBuilder(): boolean;
    IsBuilder(guy: any): boolean;
    AddMaterial(prefab: any, num: any): any;
    GetMaterialCount(prefab: any): any;
    GetSlotCount(slot: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Container {
    inst: any;
    slots: any;
    numslots: number;
    canbeopened: boolean;
    acceptsstacks: boolean;
    usespecificslotsforitems: boolean;
    issidewidget: boolean;
    type: any;
    widget: any;
    itemtestfn: any;
    opener: any;
    ignoresound: boolean;
    num: number;
    items: number;
    item: any;
    containers: any;
    num_found: number;
    total_num_found: number;
    data: any;
    references: any;
    refs: any;
    prevslot: any;
    inventory: any;
    active_item: any;
    WidgetSetup(prefab: any, data: any): any;
    GetWidget(): any;
    NumItems(): any;
    IsFull(): boolean;
    IsEmpty(): boolean;
    SetNumSlots(numslots: any): any;
    DropItemBySlot(slot: any): any;
    DropEverythingWithTag(tag: any): any;
    DropEverything(): any;
    DropItem(itemtodrop: any): any;
    CanTakeItemInSlot(item: any, slot: any): boolean;
    GetSpecificSlotForItem(item: any): any;
    AcceptsStacks(): boolean;
    IsSideWidget(): boolean;
    DestroyContents(): any;
    GiveItem(item: any, slot: any, src_pos: any, drop_on_fail: any): any;
    RemoveItemBySlot(slot: any): any;
    GetNumSlots(): any;
    GetItemInSlot(slot: any): any;
    GetItemSlot(item: any): any;
    Open(doer: any): any;
    Close(): any;
    IsOpen(): boolean;
    IsOpenedBy(guy: any): boolean;
    IsHolding(item: any, checkcontainer: any): boolean;
    FindItem(fn: any): any;
    FindItems(fn: any): any;
    Has(item: any, amount: any): boolean;
    GetItemByName(item: any, amount: any): any;
    ConsumeByName(item: any, amount: any): any;
    OnSave(): any;
    OnLoad(data: any, newents: any): any;
    RemoveItem(item: any, wholestack: any): any;
    OnUpdate(dt: any): any;
    PutOneOfActiveItemInSlot(slot: any): any;
    PutAllOfActiveItemInSlot(slot: any): any;
    TakeActiveItemFromHalfOfSlot(slot: any): any;
    TakeActiveItemFromAllOfSlot(slot: any): any;
    AddOneOfActiveItemToSlot(slot: any): any;
    AddAllOfActiveItemToSlot(slot: any): any;
    SwapActiveItemWithSlot(slot: any): any;
    MoveItemFromAllOfSlot(slot: any, container: any): any;
    MoveItemFromHalfOfSlot(slot: any, container: any): any;
    ReferenceAllItems(): any;
  }

  interface Cookable {
    inst: any;
    product: any;
    oncooked: any;
    OnRemoveFromEntity(): any;
    SetOnCookedFn(fn: any): any;
    Cook(cooker: any, chef: any): any;
  }

  interface Cooker {
    inst: any;
    OnRemoveFromEntity(): any;
    CanCook(item: any, chef: any): boolean;
    CookItem(item: any, chef: any): any;
  }

  interface Cooldown {
    inst: any;
    charged: boolean;
    cooldown_duration: any;
    startchargingfn: any;
    onchargedfn: any;
    task: any;
    cooldown_deadline: any;
    OnRemoveFromEntity(): any;
    StartCharging(time: any): any;
    FinishCharging(): any;
    GetTimeToCharged(): any;
    IsCharged(): boolean;
    IsCharging(): boolean;
    OnSave(): any;
    GetDebugString(): any;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
  }

  interface CraftingStation {
    inst: any;
    items: any;
    recipes: any;
    LearnItem(itemname: any, recipetouse: any): any;
    KnowsItem(itemname: any): boolean;
    GetItems(): any;
    GetRecipes(): any;
    ForgetItem(itemname: any): any;
    ForgetAllItems(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface CritterTraits {
    inst: any;
    traitscore: any;
    dominanttrait: any;
    dominanttraitlocked: any;
    owner: any;
    best_trait: any;
    metricsdata: any;
    data: any;
    str: any;
    OnPet(petter: any): any;
    StartTracking(): any;
    IncTracker(name: any, multiplier: any): any;
    DecayTraits(): any;
    SetDominantTrait(trait: any): any;
    IsDominantTrait(trait: any): boolean;
    RefreshDominantTrait(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Crop {
    inst: any;
    product_prefab: string;
    growthpercent: number;
    rate: number;
    task: any;
    matured: boolean;
    onmatured: any;
    onwithered: any;
    onharvest: any;
    cantgrowtime: number;
    grower: any;
    dt: number;
    OnRemoveFromEntity(): any;
    SetOnMatureFn(fn: any): any;
    SetOnWitheredFn(fn: any): any;
    SetOnHarvestFn(fn: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(): any;
    Fertilize(fertilizer: any, doer: any): any;
    DoGrow(dt: any, nowither: any): any;
    GetDebugString(): any;
    Resume(): any;
    StartGrowing(prod: any, grow_time: any, grower: any, percent: any): any;
    Harvest(harvester: any): any;
    Mature(): any;
    MakeWithered(): any;
    IsReadyForHarvest(): boolean;
    LongUpdate(dt: any): any;
  }

  interface DamageReflect {
    inst: any;
    reflectdamagefn: any;
    defaultdamage: number;
    SetReflectDamageFn(fn: any): any;
    SetDefaultDamage(value: any): any;
    GetReflectedDamage(
      attacker: any,
      damage: any,
      weapon: any,
      stimuli: any
    ): any;
  }

  interface DamageTracker {
    inst: any;
    damage_done: number;
    damage_threshold: number;
    damage_threshold_fn: any;
    enabled: boolean;
    Start(): any;
    Stop(): any;
    OnHealthDelta(data: any): any;
  }

  interface Debuff {
    inst: any;
    name: any;
    target: any;
    onattachedfn: any;
    ondetachedfn: any;
    onextendedfn: any;
    SetAttachedFn(fn: any): any;
    SetDetachedFn(fn: any): any;
    SetExtendedFn(fn: any): any;
    Stop(): any;
    AttachTo(name: any, target: any, followsymbol: any, followoffset: any): any;
    OnDetach(): any;
    Extend(followsymbol: any, followoffset: any): any;
  }

  interface Debuffable {
    inst: any;
    enable: boolean;
    followsymbol: string;
    followoffset: any;
    debuffs: any;
    toremove: any;
    x: any;
    y: any;
    z: any;
    debuff: any;
    data: any;
    str: any;
    IsEnabled(): boolean;
    Enable(enable: any): any;
    RemoveOnDespawn(): any;
    SetFollowSymbol(symbol: any, x: any, y: any, z: any): any;
    HasDebuff(name: any): boolean;
    GetDebuff(name: any): any;
    AddDebuff(name: any, prefab: any): any;
    RemoveDebuff(name: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Debugger {
    inst: any;
    debugger: any;
    z: number;
    debuggerdraws: any;
    SetOrigin(key: any, x: any, y: any): any;
    SetTarget(key: any, x: any, y: any): any;
    SetColour(key: any, r: any, g: any, b: any, a: any): any;
    SetAll(key: any, origin: any, tar: any, colour: any): any;
    SetZ(val: any): any;
    OnUpdate(): any;
  }

  interface Decay {
    inst: any;
    maxhealth: number;
    decayrate: number;
    currenthealth: any;
    oldhealth: any;
    DoDelta(amount: any): any;
    SetTimeDelta(amount: any, pause: any, num: any): any;
  }

  interface DeciduousTreeUpdater {
    inst: any;
    monster: boolean;
    monster_target: any;
    last_monster_target: any;
    last_attack_time: number;
    root: any;
    starttask: any;
    drakespawntask: any;
    ignitedrakespawntask: any;
    sleeptask: any;
    StartMonster(starttime: any): any;
    StopMonster(): any;
    OnEntityWake(): any;
    OnEntitySleep(): any;
    OnUpdate(dt: any): any;
    SpawnIgniteWave(): any;
  }

  interface DeerHerding {
    inst: any;
    herdhomelocation: any;
    herdlocation: any;
    herdheading: number;
    herdspawner: any;
    lastupdate: number;
    grazetimer: any;
    isgrazing: boolean;
    keepheading: any;
    grazing_time: any;
    roaming_time: any;
    alerttargets: any;
    valid_area_check: any;
    activedeer: any;
    count: number;
    center: any;
    facing: number;
    max_dist: number;
    result_offset: any;
    result_angle: any;
    deflected: any;
    herd_center: any;
    alldeer: any;
    curtime: any;
    was_spooked: any;
    isspooked: any;
    closest: any;
    closest_dist: number;
    data: any;
    s: string;
    Init(startingpt: any, herdspawner: any): any;
    SetValidAareaCheckFn(fn: any): any;
    CalcHerdCenterPoint(detailedinfo: any): any;
    UpdateHerdLocation(radius: any): any;
    IsActiveInHerd(deer: any): boolean;
    UpdateDeerHerdingStatus(): any;
    CalcIsHerdSpooked(): any;
    IsAnyEntityAsleep(): boolean;
    OnUpdate(dt: any): any;
    IsGrazing(): boolean;
    SetHerdAlertTarget(deer: any, target: any): any;
    GetClosestHerdAlertTarget(deer: any): any;
    HerdHasAlertTarget(): any;
    IsAHerdAlertTarget(target: any): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(newents: any, data: any): any;
    GetDebugString(): any;
  }

  interface Deployable {
    inst: any;
    mode: any;
    spacing: any;
    usegridplacer: boolean;
    ondeploy: any;
    inventoryitem: any;
    isplant: any;
    OnRemoveFromEntity(): any;
    SetDeployMode(mode: any): any;
    SetDeploySpacing(spacing: any): any;
    SetUseGridPlacer(usegridplacer: any): any;
    DeploySpacingRadius(): any;
    IsDeployable(deployer: any): boolean;
    CanDeploy(pt: any, mouseover: any, deployer: any): boolean;
    Deploy(pt: any, deployer: any, rot: any): any;
  }

  interface DeployHelper {
    inst: any;
    onenablehelper: any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    AddRecipeFilter(recipename: any): any;
    StartHelper(recipename: any, placerinst: any): any;
    StopHelper(): any;
    OnUpdate(): any;
  }

  interface Digester {
    inst: any;
    digesttime: number;
    itemstodigestfn: any;
    task: any;
    TryDigest(): any;
  }

  interface Disappears {
    inst: any;
    delay: number;
    disappearsFn: any;
    sound: any;
    anim: string;
    disappeartask: any;
    tasktotime: any;
    isdisappear: boolean;
    persists: boolean;
    Disappear(): any;
    StopDisappear(): any;
    PrepareDisappear(): any;
    GetDebugString(): any;
  }

  interface Discoverable {
    inst: any;
    discovered: boolean;
    undiscoveredIcon: any;
    discoveredIcon: any;
    data: any;
    Discover(): any;
    Hide(): any;
    SetIcons(undiscovered: any, discovered: any): any;
    OnSave(data: any): any;
    OnLoad(data: any): any;
  }

  interface Diseaseable {
    inst: any;
    onDiseasedFn: any;
    diseased: boolean;
    _lastfx: number;
    _fxtask: any;
    _spreadtask: any;
    _warningtask: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    OnRemoveFromEntity(): any;
    IsDiseased(): boolean;
    IsBecomingDiseased(): boolean;
    SetDiseasedFn(fn: any): any;
    Disease(): any;
    Spread(): any;
    RestartNearbySpread(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface DistanceTracker {
    previous_pos: any;
    inst: any;
    mypos: any;
    distance: number;
    OnUpdate(dt: any): any;
  }

  interface Domesticatable {
    inst: any;
    domesticated: boolean;
    domestication: number;
    domestication_latch: boolean;
    lastdomesticationgain: number;
    domestication_triggerfn: any;
    obedience: number;
    minobedience: number;
    maxobedience: number;
    domesticationdecaypaused: boolean;
    tendencies: any;
    decaytask: any;
    s: any;
    OnRemoveFromEntity(): any;
    SetDomesticationTrigger(fn: any): any;
    GetObedience(): any;
    GetDomestication(): any;
    Validate(): any;
    CheckForChanges(): any;
    BecomeDomesticated(): any;
    DeltaObedience(delta: any): any;
    DeltaDomestication(delta: any): any;
    DeltaTendency(tendency: any, delta: any): any;
    PauseDomesticationDecay(pause: any): any;
    TryBecomeDomesticated(): any;
    CancelTask(): any;
    CheckAndStartTask(): any;
    SetDomesticated(domesticated: any): any;
    IsDomesticated(): boolean;
    SetMinObedience(min: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Drawable {
    inst: any;
    candraw: boolean;
    imagename: any;
    atlasname: any;
    bgimagename: any;
    bgatlasname: any;
    ondrawnfn: any;
    OnRemoveFromEntity(): any;
    SetCanDraw(candraw: any): any;
    CanDraw(): boolean;
    SetOnDrawnFn(fn: any): any;
    OnDrawn(
      imagename: any,
      imagesource: any,
      atlasname: any,
      bgimagename: any,
      bgatlasname: any
    ): any;
    GetImage(): any;
    GetAtlas(): any;
    GetBGImage(): any;
    GetBGAtlas(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface DrawingTool {
    inst: any;
    ondrawfn: any;
    ent: any;
    atlas: any;
    bgimage: any;
    bgatlas: any;
    image: any;
    SetOnDrawFn(fn: any): any;
    GetImageToDraw(target: any): any;
    Draw(
      target: any,
      image: any,
      src: any,
      atlas: any,
      bgimage: any,
      bgatlas: any
    ): any;
  }

  interface Drownable {
    inst: any;
    enabled: any;
    ontakedrowningdamage: any;
    customtuningsfn: any;
    target_x: any;
    target_y: any;
    target_z: any;
    radius: any;
    pt: any;
    angle: any;
    offset: any;
    src_x: any;
    src_y: any;
    src_z: any;
    dest_x: any;
    dest_y: any;
    dest_z: any;
    inv: any;
    tunings: any;
    SetOnTakeDrowningDamageFn(fn: any): any;
    SetCustomTuningsFn(fn: any): any;
    ShouldDrown(): any;
    Teleport(): any;
    WashAshore(): any;
    OnFallInOcean(shore_x: any, shore_y: any, shore_z: any): any;
    TakeDrowningDamage(): any;
    GiveupAndDrown(): any;
    DropInventory(): any;
  }

  interface Dryable {
    inst: any;
    product: any;
    drytime: any;
    buildfile: any;
    OnRemoveFromEntity(): any;
    SetProduct(product: any): any;
    GetProduct(): any;
    SetDryTime(time: any): any;
    GetDryTime(): any;
    SetBuildFile(buildfile: any): any;
    GetBuildFile(): any;
  }

  interface Dryer {
    inst: any;
    ingredient: any;
    product: any;
    buildfile: any;
    foodtype: any;
    remainingtime: any;
    tasktotime: any;
    task: any;
    onstartdrying: any;
    ondonedrying: any;
    onharvest: any;
    protectedfromrain: any;
    watchingrain: any;
    ingredientperish: any;
    loot: any;
    OnRemoveFromEntity(): any;
    SetStartDryingFn(fn: any): any;
    SetDoneDryingFn(fn: any): any;
    SetOnHarvestFn(fn: any): any;
    CanDry(dryable: any): boolean;
    IsDrying(): boolean;
    IsDone(): boolean;
    GetTimeToDry(): any;
    GetTimeToSpoil(): any;
    IsPaused(): boolean;
    StartDrying(dryable: any): any;
    StopDrying(reason: any): any;
    Pause(): any;
    Resume(): any;
    DropItem(): any;
    Harvest(harvester: any): any;
    LongUpdate(dt: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Eater {
    inst: any;
    eater: boolean;
    strongstomach: boolean;
    preferseating: any;
    caneat: any;
    oneatfn: any;
    lasteattime: any;
    ignoresspoilage: boolean;
    eatwholestack: boolean;
    healthabsorption: number;
    hungerabsorption: number;
    sanityabsorption: number;
    tags: any;
    OnRemoveFromEntity(): any;
    SetDiet(caneat: any, preferseating: any): any;
    SetAbsorptionModifiers(health: any, hunger: any, sanity: any): any;
    TimeSinceLastEating(): any;
    HasBeen(time: any): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
    SetCanEatHorrible(): any;
    SetCanEatGears(): any;
    SetCanEatRaw(): any;
    SetPrefersEatingTag(tag: any): any;
    SetOnEatFn(fn: any): any;
    DoFoodEffects(food: any): any;
    GetEdibleTags(): any;
    Eat(food: any, feeder: any): any;
    TestFood(food: any, testvalues: any): any;
    PrefersToEat(inst: any): any;
    CanEat(inst: any): boolean;
  }

  interface Edible {
    inst: any;
    healthvalue: number;
    hungervalue: number;
    sanityvalue: number;
    woodiness: any;
    foodtype: any;
    oneaten: any;
    degrades_with_spoilage: boolean;
    gethealthfn: any;
    temperaturedelta: number;
    temperatureduration: number;
    chill: number;
    stale_hunger: any;
    stale_health: any;
    spoiled_hunger: any;
    spoiled_health: any;
    spice: any;
    ignore_spoilage: any;
    multiplier: number;
    spice_source: any;
    delta_multiplier: number;
    duration_multiplier: number;
    OnRemoveFromEntity(): any;
    GetWoodiness(eater: any): any;
    GetSanity(eater: any): any;
    GetHunger(eater: any): any;
    GetHealth(eater: any): any;
    GetDebugString(): any;
    SetOnEatenFn(fn: any): any;
    SetGetHealthFn(fn: any): any;
    OnEaten(eater: any): any;
    AddChill(delta: any): any;
    DiluteChill(item: any, count: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface ElectricAttacks {
    inst: any;
    _sources: any;
    AddSource(source: any): any;
    RemoveSource(source: any): any;
  }

  interface Embarker {
    inst: any;
    embarkable: any;
    start_x: any;
    start_y: any;
    start_z: any;
    embark_speed: number;
    last_embark_x: any;
    last_embark_z: any;
    embark_x: any;
    embark_z: any;
    my_x: any;
    my_y: any;
    my_z: any;
    delta_x: any;
    delta_z: any;
    delta_dist: any;
    travel_dist: any;
    disembark_x: any;
    disembark_z: any;
    hopping: boolean;
    UpdateEmbarkingPos(dt: any): any;
    SetEmbarkable(embarkable: any): any;
    SetDisembarkPos(pos_x: any, pos_z: any): any;
    SetDisembarkActionPos(pos_x: any, pos_z: any): any;
    StartMoving(): any;
    OnWallUpdate(dt: any): any;
    HasDestination(): boolean;
    GetEmbarkPosition(): any;
    Embark(): any;
    Cancel(): any;
  }

  interface Emitter {
    inst: any;
    area_emitter: any;
    config: any;
    max_lifetime: number;
    ground_height: number;
    particles_per_tick: number;
    num_particles_to_emit: number;
    density_factor: number;
    effect: any;
    emitter: any;
    tick_time: any;
    desired_particles_per_second: any;
    emit_fn: any;
    updateFunc: any;
    Emit(): any;
  }

  interface EntityTracker {
    inst: any;
    entities: any;
    str: string;
    ents: any;
    refs: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    TrackEntity(name: any, inst: any): any;
    ForgetEntity(name: any): any;
    GetEntity(name: any): any;
    OnSave(): any;
    LoadPostPass(ents: any, data: any): any;
  }

  interface EpicScare {
    inst: any;
    range: number;
    defaultduration: number;
    scaremusttags: any;
    scareexcludetags: any;
    scareoneoftags: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    SetRange(range: any): any;
    SetDefaultDuration(duration: any): any;
    Scare(duration: any): any;
  }

  interface Equippable {
    inst: any;
    isequipped: boolean;
    equipslot: any;
    onequipfn: any;
    onunequipfn: any;
    onpocketfn: any;
    equipstack: boolean;
    walkspeedmult: any;
    dapperness: number;
    dapperfn: any;
    insulated: boolean;
    equippedmoisture: number;
    maxequippedmoisture: number;
    inventoryitem: any;
    OnRemoveFromEntity(): any;
    IsInsulated(): boolean;
    SetOnEquip(fn: any): any;
    SetOnPocket(fn: any): any;
    SetOnUnequip(fn: any): any;
    IsEquipped(): boolean;
    Equip(owner: any): any;
    ToPocket(owner: any): any;
    Unequip(owner: any): any;
    GetWalkSpeedMult(): any;
    IsRestricted(target: any): boolean;
    GetDapperness(owner: any): any;
    GetEquippedMoisture(): any;
  }

  interface Explosive {
    inst: any;
    explosiverange: number;
    explosivedamage: number;
    buildingdamage: number;
    lightonexplode: boolean;
    onexplodefn: any;
    stacksize: any;
    totaldamage: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    world: any;
    SetOnExplodeFn(fn: any): any;
    OnBurnt(): any;
  }

  interface ExplosiveResist {
    inst: any;
    resistance: number;
    maxresistdamage: any;
    decaytime: any;
    decaydelay: any;
    delayremaining: number;
    OnExplosiveDamage(damage: any, src: any): any;
    GetResistance(): any;
    DoDelta(delta: any): any;
    SetResistance(resistance: any): any;
    OnUpdate(dt: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Fader {
    inst: any;
    values: any;
    numvals: number;
    rate: any;
    Fade(
      startval: any,
      endval: any,
      time: any,
      setter: any,
      atend: any,
      id: any
    ): any;
    StopAll(): any;
    OnUpdate(dt: any): any;
  }

  interface Fan {
    inst: any;
    canusefn: any;
    onusefn: any;
    onchannelingfn: any;
    overridesymbol: any;
    OnRemoveFromEntity(): any;
    SetCanUseFn(fn: any): any;
    SetOnUseFn(fn: any): any;
    SetOnChannelingFn(fn: any): any;
    SetOverrideSymbol(symbol: any): any;
    IsChanneling(): boolean;
    Channel(target: any): any;
    Fan(target: any): any;
  }

  interface Fertilizer {
    inst: any;
    fertilizervalue: number;
    soil_cycles: number;
    withered_cycles: number;
    fertilize_sound: string;
    planthealth: any;
    OnRemoveFromEntity(): any;
    SetHealingAmount(health: any): any;
    Heal(target: any): any;
  }

  interface Fillable {
    inst: any;
    filledprefab: any;
    filleditem: any;
    owner: any;
    Fill(): any;
  }

  interface FiniteUses {
    inst: any;
    total: number;
    current: number;
    consumption: any;
    was_positive: any;
    uses: any;
    onfinished: any;
    SetConsumption(action: any, uses: any): any;
    GetDebugString(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    SetMaxUses(val: any): any;
    SetUses(val: any): any;
    GetUses(): any;
    Use(num: any): any;
    OnUsedAsItem(action: any): any;
    GetPercent(): any;
    SetPercent(amount: any): any;
    SetOnFinished(fn: any): any;
  }

  interface Firebug {
    inst: any;
    time_to_fire: number;
    time_interval: number;
    time_variance: number;
    sanity_threshold: any;
    prefab: any;
    enabled: any;
    Enable(enable: any): any;
    Disable(): any;
    OnUpdate(dt: any): any;
    GetDebugString(): any;
  }

  interface FireDetector {
    inst: any;
    range: any;
    detectPeriod: any;
    onfindfire: any;
    onbeginemergency: any;
    onendemergency: any;
    onbeginwarning: any;
    onupdatewarning: any;
    onendwarning: any;
    detectedItems: any;
    detectTask: any;
    emergencyResponsePeriod: any;
    emergencyShutdownPeriod: any;
    emergencyLevelMax: any;
    emergencyLevelFireThreshold: any;
    emergencyLevel: number;
    emergency: boolean;
    emergencyWatched: any;
    emergencyBurnt: any;
    emergencyShutdownTask: any;
    emergencyShutdownTime: any;
    warningStartTime: any;
    SetOnFindFireFn(fn: any): any;
    SetOnBeginEmergencyFn(fn: any): any;
    SetOnEndEmergencyFn(fn: any): any;
    SetOnBeginWarningFn(fn: any): any;
    SetOnUpdateWarningFn(fn: any): any;
    SetOnEndWarningFn(fn: any): any;
    OnRemoveFromEntity(): any;
    Activate(randomizedStartTime: any): any;
    ActivateEmergencyMode(randomizedStartTime: any): any;
    IsEmergency(): boolean;
    GetEmergencyLevel(): any;
    GetMaxEmergencyLevel(): any;
    ResetEmergencyCooldown(): any;
    RaiseEmergencyLevel(numlevels: any): any;
    LowerEmergencyLevel(numlevels: any): any;
    Deactivate(): any;
    DetectFire(): any;
    GetDebugString(): any;
  }

  interface FireFX {
    inst: any;
    level: any;
    playingsound: any;
    playingsoundintensity: any;
    percent: number;
    levels: any;
    playignitesound: boolean;
    bigignitesoundthresh: number;
    usedayparamforsound: boolean;
    current_radius: number;
    lightsound: any;
    extinguishsound: any;
    light: any;
    _onremovelighttarget: any;
    old: any;
    time: any;
    highval_r: any;
    lowval_r: number;
    lowval_i: any;
    highval_i: any;
    flicker: any;
    rad: any;
    should_play_extinguish: any;
    OnRemoveEntity(): any;
    AttachLightTo(target: any): any;
    OnUpdate(dt: any): any;
    GetLevelRadius(level: any): any;
    UpdateRadius(): any;
    SetPercentInLevel(percent: any): any;
    SetLevel(lev: any): any;
    Extinguish(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
  }

  interface Fishable {
    inst: any;
    fish: any;
    maxfish: number;
    fishleft: number;
    hookedfish: any;
    fishrespawntime: any;
    respawntask: any;
    frozen: boolean;
    str: any;
    getfishfn: any;
    fishprefab: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    AddFish(prefab: any): any;
    SetGetFishFn(fn: any): any;
    SetRespawnTime(time: any): any;
    HookFish(): any;
    ReleaseFish(fish: any): any;
    RemoveFish(fish: any): any;
    IsFrozenOver(): boolean;
    Freeze(): any;
    Unfreeze(): any;
    RefreshFish(): any;
    GetFishPercent(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface FishingNet {
    inst: any;
    visualizer: any;
    CastNet(pos_x: any, pos_z: any, doer: any): any;
  }

  interface FishingNetVisualizer {
    inst: any;
    velocity: number;
    retrieve_velocity: number;
    collect_radius: number;
    collect_velocity: number;
    retrieve_distance: number;
    distance_to_play_open_anim: number;
    has_played_throw_pst: boolean;
    max_captured_entity_collect_distance: number;
    captured_entities: any;
    captured_entities_collect_distance: any;
    retrieve_distance_traveled: number;
    thrower: any;
    thrower_x: any;
    thrower_y: any;
    thrower_z: any;
    travel_vec_x: any;
    travel_vec_z: any;
    spawn_distance: number;
    distance_remaining: any;
    total_distance: any;
    dir_x: any;
    dir_z: any;
    target_x: any;
    target_z: any;
    my_x: any;
    my_y: any;
    my_z: any;
    distance_traveled: any;
    y: any;
    x_intersect: any;
    entities: any;
    time_between_drops: number;
    initial_delay: number;
    idx: number;
    dir_length: any;
    dir_x_normalized: any;
    dir_z_normalized: any;
    delta_x: any;
    delta_z: any;
    BeginCast(thrower: any, target_x: any, target_z: any): any;
    UpdateWhenMovingToTarget(dt: any): any;
    CalculateY(x: any, x_span: any, scale: any): any;
    UpdateWhenOpening(dt: any): any;
    BeginOpening(): any;
    DropItem(item: any, last_dir_x: any, last_dir_z: any, idx: any): any;
    BeginRetrieving(): any;
    BeginFinalPickup(): any;
    UpdateWhenRetrieving(dt: any): any;
  }

  interface FishingRod {
    inst: any;
    target: any;
    fisherman: any;
    hookedfish: any;
    caughtfish: any;
    minwaittime: number;
    maxwaittime: number;
    minstraintime: number;
    maxstraintime: number;
    fishtask: any;
    str: any;
    GetDebugString(): any;
    SetWaitTimes(min: any, max: any): any;
    SetStrainTimes(min: any, max: any): any;
    OnUpdate(dt: any): any;
    IsFishing(): boolean;
    HasHookedFish(): boolean;
    HasCaughtFish(): boolean;
    FishIsBiting(): any;
    StartFishing(target: any, fisherman: any): any;
    WaitForFish(): any;
    CancelFishTask(): any;
    StopFishing(): any;
    Hook(): any;
    Release(): any;
    Reel(): any;
    Collect(): any;
  }

  interface FishSchool {
    inst: any;
    max_fish_level: number;
    fish_level: any;
    fish_prefab_name: any;
    replenish_task: any;
    StartReplenish(replenish_rate: any): any;
    StopReplenish(): any;
    SetNettedPrefab(fishing_net_prefab: any): any;
    OnPreNet(net: any): any;
    Replenish(): any;
  }

  interface Floater {
    inst: any;
    size: string;
    vert_offset: any;
    xscale: number;
    yscale: number;
    zscale: number;
    should_parent_effect: boolean;
    do_bank_swap: boolean;
    float_index: number;
    swap_data: any;
    showing_effect: boolean;
    bob_percent: number;
    _is_landed: any;
    pos_x: any;
    pos_y: any;
    pos_z: any;
    SetSize(size: any): any;
    SetVerticalOffset(offset: any): any;
    SetScale(scale: any): any;
    SetBankSwapOnFloat(
      should_bank_swap: any,
      float_index: any,
      swap_data: any
    ): any;
    ShouldShowEffect(): any;
    AttachEffect(effect: any): any;
    IsFloating(): boolean;
    OnLandedServer(): any;
    OnLandedClient(): any;
    OnNoLongerLandedServer(): any;
    OnNoLongerLandedClient(): any;
  }

  interface FocalPoint {
    inst: any;
    targets: any;
    _onsourceremoved: any;
    current_focus: any;
    sourcetbl: any;
    parent: any;
    str: any;
    Reset(no_snap: any): any;
    StartFocusSource(
      source: any,
      id: any,
      target: any,
      minrange: any,
      maxrange: any,
      priority: any,
      updater: any
    ): any;
    StopFocusSource(source: any, id: any): any;
    PushTempFocus(
      target: any,
      minrange: any,
      maxrange: any,
      priority: any
    ): any;
    CameraUpdate(dt: any): any;
    GetDebugString(): any;
  }

  interface Follower {
    inst: any;
    leader: any;
    targettime: any;
    maxfollowtime: any;
    canaccepttarget: boolean;
    OnLeaderRemoved: any;
    str: any;
    currentTime: any;
    timeLeft: any;
    task: any;
    time: any;
    othercmp: any;
    keepleaderonattacked: boolean;
    GetDebugString(): any;
    GetLeader(): any;
    StartLeashing(): any;
    StopLeashing(): any;
    SetLeader(inst: any): any;
    GetLoyaltyPercent(): any;
    AddLoyaltyTime(time: any): any;
    StopFollowing(): any;
    IsNearLeader(dist: any): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
    IsLeaderSame(otherfollower: any): boolean;
    KeepLeaderOnAttacked(): any;
    LongUpdate(dt: any): any;
    OnRemoveFromEntity(): any;
  }

  interface FoodMemory {
    inst: any;
    duration: any;
    foods: any;
    mults: any;
    rec: any;
    count: any;
    OnRemoveFromEntity(): any;
    SetDuration(duration: any): any;
    SetMultipliers(mults: any): any;
    GetBaseFood(prefab: any): any;
    RememberFood(prefab: any): any;
    GetMemoryCount(prefab: any): any;
    GetFoodMultiplier(prefab: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Freezable {
    inst: any;
    state: any;
    resistance: number;
    coldness: number;
    wearofftime: number;
    damagetotal: number;
    damagetobreak: number;
    fxlevel: number;
    fxdata: any;
    wearofftask: any;
    extraresist: any;
    OnRemoveFromEntity(): any;
    SetResistance(resist: any): any;
    SetDefaultWearOffTime(wearofftime: any): any;
    AddShatterFX(prefab: any, offset: any, followsymbol: any): any;
    SetShatterFXLevel(level: any, percent: any): any;
    SpawnShatterFX(): any;
    IsFrozen(): boolean;
    IsThawing(): boolean;
    GetDebugString(): any;
    AddColdness(coldness: any, freezetime: any, nofreeze: any): any;
    StartWearingOff(wearofftime: any): any;
    UpdateTint(): any;
    SetExtraResist(resist: any): any;
    ResolveResistance(): any;
    ResolveWearOffTime(t: any): any;
    Freeze(freezetime: any): any;
    Unfreeze(): any;
    Thaw(thawtime: any): any;
    Reset(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface FrostyBreather {
    inst: any;
    breath: any;
    offset: any;
    offset_fn: any;
    enabled: boolean;
    breathevent: any;
    x: any;
    y: any;
    z: any;
    OnRemoveFromEntity(): any;
    StartBreath(): any;
    StopBreath(): any;
    Enable(): any;
    Disable(): any;
    OnTemperatureChanged(temperature: any): any;
    EmitOnce(): any;
    SetOffset(x: any, y: any, z: any): any;
    SetOffsetFn(fn: any): any;
    GetOffset(): any;
  }

  interface Fuel {
    inst: any;
    fuelvalue: number;
    fueltype: any;
    ontaken: any;
    OnRemoveFromEntity(): any;
    SetOnTakenFn(fn: any): any;
    Taken(taker: any): any;
  }

  interface Fueled {
    inst: any;
    consuming: boolean;
    maxfuel: number;
    currentfuel: number;
    rate: number;
    rate_modifiers: any;
    no_sewing: any;
    accepting: boolean;
    fueltype: any;
    secondaryfueltype: any;
    sections: number;
    sectionfn: any;
    period: number;
    bonusmult: number;
    depleted: any;
    ontakefuelfn: any;
    updatefn: any;
    section: any;
    target: any;
    firstperiod: any;
    firstperiodfull: any;
    firstperioddt: any;
    oldsection: any;
    newsection: any;
    OnRemoveFromEntity(): any;
    MakeEmpty(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    SetSectionCallback(fn: any): any;
    SetDepletedFn(fn: any): any;
    IsEmpty(): boolean;
    SetSections(num: any): any;
    CanAcceptFuelItem(item: any): boolean;
    GetCurrentSection(): any;
    ChangeSection(amount: any): any;
    SetTakeFuelFn(fn: any): any;
    TakeFuelItem(item: any, doer: any): any;
    SetUpdateFn(fn: any): any;
    GetDebugString(): any;
    AddThreshold(percent: any, fn: any): any;
    GetSectionPercent(): any;
    GetPercent(): any;
    SetPercent(amount: any): any;
    SetFirstPeriod(firstperiod: any, firstperiodfull: any): any;
    StartConsuming(): any;
    OnWallUpdate(dt: any): any;
    InitializeFuelLevel(fuel: any): any;
    DoDelta(amount: any, doer: any): any;
    DoUpdate(dt: any): any;
    StopConsuming(): any;
  }

  interface FuelMaster {
    inst: any;
    bonusmult: number;
    bonusfn: any;
    SetBonusMult(mult: any): any;
    SetBonusFn(fn: any): any;
    GetBonusMult(item: any, target: any): any;
  }

  interface GiftReceiver {
    inst: any;
    giftcount: number;
    giftmachine: any;
    HasGift(): boolean;
    RefreshGiftCount(): any;
    SetGiftMachine(inst: any): any;
    OpenNextGift(): any;
    OnStartOpenGift(): any;
    OnStopOpenGift(usewardrobe: any): any;
  }

  interface Grogginess {
    inst: any;
    resistance: number;
    grog_amount: number;
    knockouttime: number;
    knockoutduration: number;
    wearofftime: number;
    wearoffduration: any;
    decayrate: any;
    knockouttestfn: any;
    cometotestfn: any;
    whilegroggyfn: any;
    whilewearingofffn: any;
    onwearofffn: any;
    OnRemoveFromEntity(): any;
    SetDefaultTests(): any;
    SetComeToTest(fn: any): any;
    SetKnockOutTest(fn: any): any;
    SetResistance(resist: any): any;
    SetDecayRate(rate: any): any;
    SetWearOffDuration(duration: any): any;
    IsKnockedOut(): boolean;
    IsGroggy(): boolean;
    HasGrogginess(): boolean;
    GetDebugString(): any;
    AddGrogginess(grogginess: any, knockoutduration: any): any;
    ExtendKnockout(knockoutduration: any): any;
    KnockOut(): any;
    ComeTo(): any;
    OnUpdate(dt: any): any;
  }

  interface GroundPounder {
    inst: any;
    numRings: number;
    ringDelay: number;
    initialRadius: number;
    radiusStepDistance: number;
    pointDensity: number;
    damageRings: number;
    destructionRings: number;
    platformPushingRings: number;
    noTags: any;
    destroyer: boolean;
    burner: boolean;
    groundpoundfx: string;
    groundpoundringfx: string;
    groundpounddamagemult: number;
    groundpoundFn: any;
    points: any;
    radius: any;
    getEnts: any;
    map: any;
    delay: number;
    breakobjectsRadius: any;
    dodamageRadius: any;
    breakobjectsRadiusSQ: any;
    ents: any;
    GetPoints(pt: any): any;
    DestroyPoints(
      points: any,
      breakobjects: any,
      dodamage: any,
      pushplatforms: any
    ): any;
    GroundPound(pt: any): any;
    GroundPound_Offscreen(position: any): any;
    GetDebugString(): any;
  }

  interface GroundShadowHandler {
    inst: any;
    ground_shadow: any;
    original_width: any;
    original_height: any;
    pos_x: any;
    pos_y: any;
    pos_z: any;
    max_lerp_height: number;
    min_scale: number;
    max_scale: number;
    percent: any;
    scale: any;
    SetSize(width: any, height: any): any;
    OnUpdate(dt: any): any;
    OnRemove(): any;
  }

  interface GroupTargeter {
    inst: any;
    targets: any;
    total_weight: number;
    weight_change: number;
    num_targets: number;
    min_chance: number;
    max_chance: number;
    chance_delta: number;
    current_chance: number;
    _ontargetremoved: any;
    totalWeight: number;
    selection_weight: any;
    selected_target: any;
    weight: number;
    OnRemoveFromEntity(): any;
    StartTracking(target: any): any;
    StopTracking(target: any): any;
    GetTotalWeight(): any;
    OnPickTarget(target: any): any;
    AddTarget(target: any): any;
    RemoveTarget(target: any): any;
    GetTargets(): any;
    IsTargeting(target: any): boolean;
    TryGetNewTarget(): any;
    SelectTarget(): any;
  }

  interface Growable {
    inst: any;
    stages: any;
    stage: number;
    loopstages: boolean;
    growonly: boolean;
    springgrowth: boolean;
    magicgrowable: boolean;
    targettime: any;
    pausedremaining: any;
    data: any;
    GetDebugString(): any;
    StartGrowing(time: any): any;
    GetNextStage(): any;
    DoGrowth(): any;
    StopGrowing(): any;
    Pause(): any;
    Resume(): any;
    ExtendGrowTime(extra_time: any): any;
    GetStage(): any;
    SetStage(stage: any): any;
    GetCurrentStageData(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LongUpdate(dt: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
  }

  interface Grower {
    inst: any;
    crops: any;
    level: number;
    croppoints: any;
    growrate: number;
    cycles_left: number;
    max_cycles_left: number;
    isempty: boolean;
    data: any;
    was_fertile: any;
    prefab: any;
    pos: any;
    OnRemoveFromEntity(): any;
    IsEmpty(): boolean;
    IsFullFertile(): boolean;
    GetFertilePercent(): any;
    IsFertile(): boolean;
    OnSave(): any;
    Fertilize(obj: any, doer: any): any;
    OnLoad(data: any, newents: any): any;
    PlantItem(item: any, doer: any): any;
    RemoveCrop(crop: any): any;
    GetDebugString(): any;
    Reset(reason: any): any;
  }

  interface Grue {
    inst: any;
    soundevent: any;
    warndelay: number;
    level: any;
    immunity: any;
    inittask: any;
    soundwarn: any;
    soundattack: any;
    resistance: any;
    OnRemoveFromEntity(): any;
    CheckForStart(): any;
    Start(): any;
    SetSounds(warn: any, attack: any): any;
    Stop(): any;
    SetResistance(resistance: any): any;
    AddImmunity(source: any): any;
    RemoveImmunity(source: any): any;
    SetSleeping(asleep: any): any;
    OnUpdate(dt: any): any;
  }

  interface Guardian {
    inst: any;
    prefab: any;
    guardian: any;
    onsummonfn: any;
    onguardiandeathfn: any;
    threshold: number;
    summons: number;
    decaytime: number;
    decaytask: any;
    _onguardiandeath: any;
    _onguardianremove: any;
    old: any;
    data: any;
    refs: any;
    OnRemoveFromEntity(): any;
    SetGuardian(guardian: any): any;
    DoDelta(d: any): any;
    SummonsAtMax(): any;
    SummonsAtMin(): any;
    Call(d: any): any;
    Decay(d: any): any;
    StartDecay(): any;
    SummonGuardian(override: any): any;
    OnGuardianDeath(data: any): any;
    DismissGuardian(): any;
    HasGuardian(): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(ents: any, data: any): any;
  }

  interface Harvestable {
    inst: any;
    produce: number;
    growtime: any;
    product: any;
    ongrowfn: any;
    maxproduce: number;
    onharvestfn: any;
    data: any;
    time: any;
    str: any;
    OnRemoveFromEntity(): any;
    SetUp(product: any, max: any, time: any, onharvest: any, ongrow: any): any;
    SetOnGrowFn(fn: any): any;
    SetOnHarvestFn(fn: any): any;
    SetProduct(product: any, max: any): any;
    SetGrowTime(time: any): any;
    CanBeHarvested(): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
    Grow(): any;
    StartGrowing(time: any): any;
    StopGrowing(): any;
    Harvest(picker: any): any;
  }

  interface Hatchable {
    inst: any;
    progress: number;
    discomfort: number;
    state: string;
    cracktime: number;
    hatchtime: number;
    hatchfailtime: number;
    heater_prefs: any;
    delay: boolean;
    onstatefn: any;
    has_heater: any;
    wants_heater: any;
    toohot: boolean;
    toocold: boolean;
    oldstate: any;
    data: any;
    GetDebugString(): any;
    SetOnState(fn: any): any;
    SetCrackTime(t: any): any;
    SetHatchTime(t: any): any;
    SetHatchFailTime(t: any): any;
    OnState(state: any): any;
    Delay(time: any): any;
    StopUpdating(): any;
    StartUpdating(): any;
    SetHeaterPrefs(day: any, dusk: any, night: any): any;
    GetHeaterPref(phase: any): any;
    OnUpdate(dt: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Hauntable {
    inst: any;
    onhaunt: any;
    onunhaunt: any;
    haunted: boolean;
    hauntvalue: any;
    no_wipe_value: boolean;
    cooldowntimer: number;
    cooldown: any;
    cooldown_on_successful_haunt: boolean;
    panic: boolean;
    panictimer: number;
    usefx: boolean;
    flicker: string;
    SetOnHauntFn(fn: any): any;
    SetOnUnHauntFn(fn: any): any;
    SetHauntValue(val: any): any;
    Panic(panictime: any): any;
    StartFX(noflicker: any): any;
    AdvanceFlickerState(): any;
    StopFX(): any;
    DoHaunt(doer: any): any;
    StartShaderFx(): any;
    StopShaderFX(): any;
    OnUpdate(dt: any): any;
    OnRemoveFromEntity(): any;
  }

  interface Healer {
    inst: any;
    health: any;
    SetHealthAmount(health: any): any;
    Heal(target: any): any;
  }

  interface Health {
    inst: any;
    maxhealth: number;
    minhealth: number;
    currenthealth: any;
    invincible: boolean;
    takingfiredamage: boolean;
    takingfiredamagetime: number;
    fire_damage_scale: number;
    externalfiredamagemultipliers: any;
    fire_timestart: number;
    firedamageinlastsecond: number;
    firedamagecaptimer: number;
    nofadeout: boolean;
    penalty: number;
    absorb: number;
    playerabsorb: number;
    externalabsorbmodifiers: any;
    destroytime: any;
    canmurder: boolean;
    canheal: boolean;
    haspenalty: any;
    mult: any;
    time: any;
    amount: any;
    period: any;
    s: any;
    old_health: any;
    max_health: any;
    min_health: any;
    old_percent: any;
    new_percent: any;
    OnRemoveFromEntity(): any;
    RecalculatePenalty(): any;
    SetInvincible(val: any): any;
    ForceUpdateHUD(overtime: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetFireDamageScale(): any;
    DoFireDamage(amount: any, doer: any, instant: any): any;
    OnUpdate(dt: any): any;
    StartRegen(amount: any, period: any, interruptcurrentregen: any): any;
    SetAbsorptionAmount(amount: any): any;
    SetAbsorptionAmountFromPlayer(amount: any): any;
    StopRegen(): any;
    SetPenalty(penalty: any): any;
    DeltaPenalty(delta: any): any;
    GetPenaltyPercent(): any;
    GetPercent(): any;
    IsInvincible(): boolean;
    GetDebugString(): any;
    SetCurrentHealth(amount: any): any;
    SetMaxHealth(amount: any): any;
    SetMinHealth(amount: any): any;
    IsHurt(): boolean;
    GetMaxWithPenalty(): any;
    Kill(): any;
    IsDead(): boolean;
    SetPercent(percent: any, overtime: any, cause: any): any;
    SetVal(val: any, cause: any, afflicter: any): any;
    DoDelta(
      amount: any,
      overtime: any,
      cause: any,
      ignore_invincible: any,
      afflicter: any,
      ignore_absorb: any
    ): any;
  }

  interface HealthBar {
    inst: any;
    bar_atlas: string;
    bar_image: string;
    bar_width: number;
    bar_height: number;
    bar_border: number;
    bar_colour: any;
    bg_colour: any;
    bar_world_offset: any;
    bar_ui_offset: any;
    label_ui_offset: any;
    enabled: boolean;
    _healthpct: any;
    Enable(enable: any): any;
    SetValue(percent: any): any;
  }

  interface HealthSyncer {
    inst: any;
    _status: any;
    _healthpct: any;
    val: any;
    down: any;
    up: any;
    status: any;
    GetPercent(): any;
    GetOverTime(): any;
    OnUpdate(dt: any): any;
  }

  interface HealthTrigger {
    inst: any;
    triggers: any;
    totrigger: any;
    OnRemoveFromEntity(): any;
    AddTrigger(amount: any, fn: any): any;
    OnHealthDelta(data: any): any;
  }

  interface Heater {
    inst: any;
    heat: any;
    heatfn: any;
    equippedheat: any;
    equippedheatfn: any;
    carriedheat: any;
    carriedheatfn: any;
    carriedheatmultiplier: number;
    exothermic: boolean;
    endothermic: boolean;
    OnRemoveFromEntity(): any;
    SetThermics(exo: any, endo: any): any;
    IsEndothermic(): boolean;
    IsExothermic(): boolean;
    GetHeat(observer: any): any;
    GetEquippedHeat(observer: any): any;
    GetCarriedHeat(observer: any): any;
    GetDebugString(): any;
  }

  interface HeavyObstaclePhysics {
    inst: any;
    maxradius: any;
    currentradius: any;
    physicsstate: any;
    ischaracterpassthrough: any;
    issmall: boolean;
    task: any;
    onphysicsstatechangedfn: any;
    onchangetoitemfn: any;
    onchangetoobstaclefn: any;
    onstartfallingfn: any;
    onstopfallingfn: any;
    OnRemoveFromEntity(): any;
    SetRadius(radius: any): any;
    MakeSmallObstacle(): any;
    AddFallingStates(): any;
    GetPhysicsState(): any;
    IsItem(): boolean;
    IsObstacle(): boolean;
    IsFalling(): boolean;
    SetOnPhysicsStateChangedFn(fn: any): any;
    SetOnChangeToItemFn(fn: any): any;
    SetOnChangeToObstacleFn(fn: any): any;
    SetOnStartFallingFn(fn: any): any;
    SetOnStopFallingFn(fn: any): any;
  }

  interface Herd {
    inst: any;
    maxsize: number;
    members: any;
    membercount: number;
    membertag: any;
    gatherrange: any;
    updaterange: any;
    onempty: any;
    onfull: any;
    addmember: any;
    updatepos: boolean;
    updateposincombat: boolean;
    task: any;
    _onmemberkilled: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    str: any;
    data: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    SetMemberTag(tag: any): any;
    SetGatherRange(range: any): any;
    SetUpdateRange(range: any): any;
    SetMaxSize(size: any): any;
    SetOnEmptyFn(fn: any): any;
    SetOnFullFn(fn: any): any;
    SetAddMemberFn(fn: any): any;
    IsFull(): boolean;
    AddMember(inst: any): any;
    RemoveMember(inst: any): any;
    GatherNearbyMembers(): any;
    MergeNearbyHerds(): any;
    OnUpdate(): any;
    OnSave(): any;
    LoadPostPass(newents: any, savedata: any): any;
  }

  interface HerdMember {
    inst: any;
    enabled: boolean;
    herd: any;
    herdprefab: string;
    task: any;
    OnRemoveFromEntity(): any;
    SetHerd(herd: any): any;
    SetHerdPrefab(prefab: any): any;
    GetHerd(): any;
    CreateHerd(): any;
    Enable(enabled: any): any;
    GetDebugString(): any;
  }

  interface Hideout {
    inst: any;
    storedcreatures: any;
    numstoredcreatures: number;
    onvacate: any;
    onoccupied: any;
    onspawned: any;
    ongohome: any;
    timetonextspawn: number;
    spawnperiod: number;
    spawnvariance: number;
    spawnoffscreen: boolean;
    task: any;
    references: any;
    data: any;
    pos: any;
    offset: any;
    child: any;
    success: any;
    str: string;
    SetSpawnPeriod(period: any, variance: any): any;
    OnUpdate(dt: any): any;
    StartUpdate(): any;
    StartSpawning(): any;
    StopSpawning(): any;
    SetOccupiedFn(fn: any): any;
    SetSpawnedFn(fn: any): any;
    SetGoHomeFn(fn: any): any;
    SetVacateFn(fn: any): any;
    OnSave(): any;
    OnLoad(data: any, newents: any): any;
    LoadPostPass(newents: any, data: any): any;
    DoReleaseChild(target: any, child: any, radius: any): any;
    ReleaseChild(target: any, prefab: any, radius: any): any;
    GoHome(child: any): any;
    CanRelease(): boolean;
    ReleaseAllChildren(target: any, prefab: any): any;
    LongUpdate(dt: any): any;
    GetDebugString(): any;
  }

  interface Highlight {
    inst: any;
    base_add_colour_red: any;
    base_add_colour_green: any;
    base_add_colour_blue: any;
    flashadd: any;
    flashtimein: any;
    flashtimeout: any;
    t: number;
    flashing: boolean;
    goingin: boolean;
    highlit: boolean;
    SetAddColour(col: any): any;
    Flash(toadd: any, timein: any, timeout: any): any;
    OnUpdate(dt: any): any;
    ApplyColour(): any;
    Highlight(r: any, g: any, b: any): any;
    UnHighlight(): any;
    OnRemoveFromEntity(): any;
  }

  interface HomeSeeker {
    inst: any;
    onhomeremoved: any;
    home: any;
    HasHome(): boolean;
    GetDebugString(): any;
    SetHome(home: any): any;
    GoHome(shouldrun: any): any;
    GetHomePos(): any;
  }

  interface Hull {
    inst: any;
    plank: any;
    boat_lip: any;
    radius: any;
    FinishRemovingEntity(entity: any): any;
    AttachEntityToBoat(
      obj: any,
      offset_x: any,
      offset_z: any,
      parent_to_boat: any
    ): any;
    SetPlank(obj: any): any;
    SetBoatLip(obj: any): any;
    SetRadius(radius: any): any;
    OnDeployed(): any;
  }

  interface HullHealth {
    inst: any;
    leak_point_count: number;
    leak_radius: number;
    leak_radius_variance: number;
    leak_angle_variance: any;
    leak_damage: any;
    leak_indicators: any;
    small_leak_dmg: number;
    med_leak_dmg: number;
    hull_dmg: number;
    hull_damage: number;
    angle: any;
    boat_x: any;
    boat_y: any;
    boat_z: any;
    pos_x: any;
    pos_z: any;
    hit_pos_x: any;
    hit_pos_z: any;
    boat_to_hit_x: any;
    boat_to_hit_z: any;
    hit_angle: any;
    speed_damage_factor: any;
    damage_bias: number;
    damage: any;
    delta_angle: any;
    leak_idx: number;
    leaks: any;
    UpdateHealth(): any;
    GetLeakPosition(idx: any): any;
    GetLeakAngle(idx: any): any;
    RefreshLeakIndicator(leak_idx: any): any;
    OnCollide(data: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Hunger {
    inst: any;
    max: number;
    current: any;
    hungerrate: number;
    hurtrate: number;
    overridestarvefn: any;
    burning: boolean;
    burnrate: number;
    burnratemodifiers: any;
    period: number;
    old: any;
    OnSave(): any;
    OnLoad(data: any): any;
    SetOverrideStarveFn(fn: any): any;
    LongUpdate(dt: any): any;
    Pause(): any;
    Resume(): any;
    IsPaused(): boolean;
    GetDebugString(): any;
    SetMax(amount: any): any;
    IsStarving(): boolean;
    DoDelta(delta: any, overtime: any, ignore_invincible: any): any;
    GetPercent(): any;
    SetPercent(p: any, overtime: any): any;
    DoDec(dt: any, ignore_damage: any): any;
    SetKillRate(rate: any): any;
    SetRate(rate: any): any;
  }

  interface IncrementalProducer {
    inst: any;
    producefn: any;
    countfn: any;
    maxcount: number;
    maxcountfn: any;
    increment: number;
    incrementfn: any;
    incrementdelay: number;
    toproduce: number;
    lastproduction: number;
    count: any;
    CanProduce(): boolean;
    TryProduce(): any;
    DoProduce(): any;
    GetDebugString(): any;
  }

  interface Inspectable {
    inst: any;
    description: any;
    getspecialdescription: any;
    recordview: any;
    desc: any;
    OnRemoveFromEntity(): any;
    SetDescription(desc: any): any;
    RecordViews(state: any): any;
    GetStatus(viewer: any): any;
    GetDescription(viewer: any): any;
  }

  interface Instrument {
    inst: any;
    range: number;
    onheard: any;
    onplayed: any;
    SetOnHeardFn(fn: any): any;
    SetOnPlayedFn(fn: any): any;
    Play(musician: any): any;
  }

  interface Insulator {
    inst: any;
    insulation: number;
    type: any;
    SetSummer(): any;
    SetWinter(): any;
    GetType(): any;
    IsType(type: any): boolean;
    SetInsulation(val: any): any;
    GetInsulation(): any;
  }

  interface Inventory {
    inst: any;
    isopen: boolean;
    isvisible: boolean;
    ignoreoverflow: boolean;
    ignorefull: boolean;
    silentfull: boolean;
    ignoresound: boolean;
    itemslots: any;
    maxslots: any;
    equipslots: any;
    heavylifting: boolean;
    activeitem: any;
    acceptsstacks: boolean;
    ignorescangoincontainer: boolean;
    opencontainers: any;
    dropondeath: boolean;
    num: number;
    inv: any;
    data: any;
    references: any;
    refs: any;
    isloading: boolean;
    active_item: any;
    absorbers: any;
    absorbed_percent: number;
    total_absorption: number;
    absorbed_damage: any;
    leftover_damage: any;
    invitem: any;
    handitem: any;
    olditem: any;
    newitem: any;
    overflow: any;
    items: any;
    dropped: any;
    prefabname: any;
    prefabskinname: any;
    empty: any;
    stacksize: any;
    acceptcount: number;
    eslot: any;
    new_item: any;
    objectDestroyed: any;
    can_use_suggested_slot: boolean;
    container: any;
    item: any;
    leftovers: any;
    prevslot: any;
    num_found: number;
    total_num_found: number;
    containers: any;
    s: string;
    count: number;
    owner: any;
    moisture: number;
    max: number;
    waterproofness: number;
    EnableDropOnDeath(): any;
    DisableDropOnDeath(): any;
    NumItems(): any;
    TransferInventory(receiver: any): any;
    OnSave(): any;
    CanTakeItemInSlot(item: any, slot: any): boolean;
    AcceptsStacks(): boolean;
    IgnoresCanGoInContainer(): any;
    OnLoad(data: any, newents: any): any;
    DropActiveItem(): any;
    ReturnActiveActionItem(item: any): any;
    IsWearingArmor(): boolean;
    ArmorHasTag(tag: any): any;
    EquipHasTag(tag: any): any;
    IsHeavyLifting(): boolean;
    ApplyDamage(damage: any, attacker: any, weapon: any): any;
    GetActiveItem(): any;
    IsItemEquipped(item: any): boolean;
    SelectActiveItemFromEquipSlot(slot: any): any;
    CombineActiveStackWithSlot(slot: any, stack_mod: any): any;
    SelectActiveItemFromSlot(slot: any): any;
    ReturnActiveItem(slot: any, stack_mod: any): any;
    GetNumSlots(): any;
    GetItemSlot(item: any): any;
    IsHolding(item: any, checkcontainer: any): boolean;
    FindItem(fn: any): any;
    FindItems(fn: any): any;
    RemoveItemBySlot(slot: any): any;
    DropItem(item: any, wholestack: any, randomdir: any, pos: any): any;
    IsInsulated(): boolean;
    GetEquippedItem(eslot: any): any;
    GetItemInSlot(slot: any): any;
    IsFull(): boolean;
    GetNextAvailableSlot(item: any): any;
    CanAcceptCount(item: any, maxcount: any): boolean;
    GiveActiveItem(inst: any): any;
    GiveItem(inst: any, slot: any, src_pos: any): any;
    Unequip(equipslot: any, slip: any): any;
    SetActiveItem(item: any): any;
    Equip(item: any, old_to_active: any): any;
    RemoveItem(item: any, wholestack: any): any;
    GetOverflowContainer(): any;
    Has(item: any, amount: any): boolean;
    GetItemByName(item: any, amount: any): any;
    ConsumeByName(item: any, amount: any): any;
    DropEverythingWithTag(tag: any): any;
    DropEverything(ondeath: any, keepequip: any): any;
    DropEquipped(keepBackpack: any): any;
    BurnNonpotatableInContainer(container: any): any;
    ReferenceAllItems(): any;
    GetDebugString(): any;
    IsOpenedBy(guy: any): boolean;
    Show(): any;
    Open(): any;
    Hide(): any;
    Close(keepactiveitem: any): any;
    PutOneOfActiveItemInSlot(slot: any): any;
    PutAllOfActiveItemInSlot(slot: any): any;
    TakeActiveItemFromHalfOfSlot(slot: any): any;
    TakeActiveItemFromAllOfSlot(slot: any): any;
    AddOneOfActiveItemToSlot(slot: any): any;
    AddAllOfActiveItemToSlot(slot: any): any;
    SwapActiveItemWithSlot(slot: any): any;
    CanAccessItem(item: any): boolean;
    UseItemFromInvTile(item: any, actioncode: any, mod_name: any): any;
    ControllerUseItemOnItemFromInvTile(
      item: any,
      active_item: any,
      actioncode: any,
      mod_name: any
    ): any;
    ControllerUseItemOnSelfFromInvTile(
      item: any,
      actioncode: any,
      mod_name: any
    ): any;
    ControllerUseItemOnSceneFromInvTile(
      item: any,
      target: any,
      actioncode: any,
      mod_name: any
    ): any;
    InspectItemFromInvTile(item: any): any;
    DropItemFromInvTile(item: any, single: any): any;
    EquipActiveItem(): any;
    EquipActionItem(item: any): any;
    SwapEquipWithActiveItem(): any;
    TakeActiveItemFromEquipSlot(eslot: any): any;
    TakeActiveItemFromEquipSlotID(eslotid: any): any;
    MoveItemFromAllOfSlot(slot: any, container: any): any;
    MoveItemFromHalfOfSlot(slot: any, container: any): any;
    GetEquippedMoistureRate(slot: any): any;
    GetWaterproofness(slot: any): any;
    IsWaterproof(): boolean;
  }

  interface InventoryItem {
    inst: any;
    owner: any;
    canbepickedup: boolean;
    canbepickedupalive: boolean;
    onpickupfn: any;
    isnew: boolean;
    nobounce: boolean;
    cangoincontainer: boolean;
    canonlygoinpocket: boolean;
    keepondeath: boolean;
    atlasname: any;
    imagename: any;
    onactiveitemfn: any;
    trappable: boolean;
    sinks: boolean;
    pushlandedevents: boolean;
    ondropfn: any;
    onputininventoryfn: any;
    x: any;
    y: any;
    z: any;
    is_landed: any;
    OnRemoveFromEntity(): any;
    EnableMoisture(enable: any): any;
    GetMoisture(): any;
    IsWet(): boolean;
    InheritMoisture(moisture: any, iswet: any): any;
    DiluteMoisture(item: any, count: any): any;
    AddMoisture(delta: any): any;
    SetOwner(owner: any): any;
    ClearOwner(owner: any): any;
    SetOnDroppedFn(fn: any): any;
    SetOnActiveItemFn(fn: any): any;
    SetOnPickupFn(fn: any): any;
    SetOnPutInInventoryFn(fn: any): any;
    SetSinks(should_sink: any): any;
    GetSlotNum(): any;
    GetContainer(): any;
    HibernateLivingItem(): any;
    WakeLivingItem(): any;
    OnPutInInventory(owner: any): any;
    OnRemoved(): any;
    OnDropped(randomdir: any, speedmult: any): any;
    DoDropPhysics(x: any, y: any, z: any, randomdir: any, speedmult: any): any;
    OnPickup(pickupguy: any, src_pos: any): any;
    IsHeld(): boolean;
    IsHeldBy(guy: any): boolean;
    ChangeImageName(newname: any): any;
    RemoveFromOwner(wholestack: any): any;
    OnRemoveEntity(): any;
    GetGrandOwner(): any;
    IsSheltered(): boolean;
    SetLanded(is_landed: any, should_poll_for_landing: any): any;
    ShouldSink(): any;
    TryToSink(): any;
    OnUpdate(dt: any): any;
  }

  interface InventoryItemMoisture {
    inst: any;
    dryingSpeed: number;
    dryingResistance: number;
    wetnessSpeed: number;
    wetnessResistance: number;
    wetnessThreshold: any;
    drynessThreshold: any;
    lastUpdate: any;
    _replica: any;
    moisture: number;
    iswet: boolean;
    owner: any;
    t: any;
    dt: any;
    targetMoisture: any;
    data: any;
    AttachReplica(replica: any): any;
    OnRemoveFromEntity(): any;
    OnRemoveEntity(): any;
    InheritMoisture(moisture: any, iswet: any): any;
    DiluteMoisture(item: any, count: any): any;
    DoDelta(delta: any): any;
    SetMoisture(moisture: any): any;
    GetTargetMoisture(): any;
    UpdateMoisture(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Key {
    inst: any;
    keytype: any;
    onused: any;
    onremoved: any;
    OnRemoveFromEntity(): any;
    SetOnUsedFn(fn: any): any;
    SetOnRemovedFn(fn: any): any;
    OnUsed(lock: any, doer: any): any;
    OnRemoved(lock: any, doer: any): any;
  }

  interface KlausSackKey {
    inst: any;
    OnRemoveFromEntity(): any;
    SetTrueKey(truekey: any): any;
  }

  interface KlausSackLock {
    inst: any;
    onusekeyfn: any;
    success: any;
    fail_msg: any;
    consumed: any;
    OnRemoveFromEntity(): any;
    SetOnUseKey(onusekeyfn: any): any;
    UseKey(key: any, doer: any): any;
  }

  interface KnownLocations {
    inst: any;
    locations: any;
    str: string;
    locs: any;
    data: any;
    GetDebugString(): any;
    SerializeLocations(): any;
    DeserializeLocations(data: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    RememberLocation(name: any, pos: any, dont_overwrite: any): any;
    GetLocation(name: any): any;
    ForgetLocation(name: any): any;
  }

  interface LavaArenaMobTracker {
    inst: any;
    ents: any;
    count: number;
    _onremovemob: any;
    ret: any;
    dists: any;
    StartTracking(ent: any): any;
    StopTracking(ent: any): any;
    GetNumMobs(): any;
    GetAllMobs(): any;
    FindMobs(
      x: any,
      y: any,
      z: any,
      r: any,
      musttags: any,
      canttags: any,
      mustoneoftags: any
    ): any;
    ForEachMob(cb: any, params: any): any;
  }

  interface Leader {
    inst: any;
    followers: any;
    numfollowers: number;
    _onfollowerdied: any;
    _onfollowerremoved: any;
    count: number;
    OnRemoveFromEntity(): any;
    IsFollower(guy: any): boolean;
    OnAttacked(attacker: any): any;
    CountFollowers(tag: any): any;
    OnNewTarget(target: any): any;
    RemoveFollower(follower: any, invalid: any): any;
    AddFollower(follower: any): any;
    RemoveFollowersByTag(tag: any, validateremovefn: any): any;
    RemoveAllFollowers(): any;
    RemoveAllFollowersOnDeath(): any;
    IsBeingFollowedBy(prefabName: any): boolean;
    OnSave(): any;
    LoadPostPass(newents: any, savedata: any): any;
    GetDebugString(): any;
  }

  interface Lighter {
    inst: any;
    onlight: any;
    OnRemoveFromEntity(): any;
    SetOnLightFn(fn: any): any;
    Light(target: any): any;
  }

  interface LightTweener {
    inst: any;
    light: any;
    i_falloff: any;
    i_intensity: any;
    i_radius: any;
    I_colour_r: any;
    i_colour_g: any;
    i_colour_b: any;
    t_falloff: any;
    t_intensity: any;
    t_radius: any;
    t_colour_r: any;
    t_colour_g: any;
    t_colour_b: any;
    callback: any;
    time: any;
    timepassed: number;
    tweening: boolean;
    i_colour: any;
    t: any;
    EndTween(): any;
    StartTween(
      light: any,
      rad: any,
      intensity: any,
      falloff: any,
      colour: any,
      time: any,
      callback: any
    ): any;
    OnUpdate(dt: any): any;
  }

  interface Lock {
    inst: any;
    onlocked: any;
    onunlocked: any;
    unlocktest: any;
    islocked: boolean;
    isstuck: boolean;
    key: any;
    locktype: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    SetOnUnlockedFn(fn: any): any;
    SetOnLockedFn(fn: any): any;
    CompatableKey(keytype: any): any;
    IsStuck(): boolean;
    IsLocked(): boolean;
    Unlock(key: any, doer: any): any;
    Lock(doer: any): any;
    SetKey(key: any): any;
    TestForUnlock(key: any): any;
    SetLocked(locked: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(newents: any, data: any): any;
  }

  interface Dest {
    IsValid(): boolean;
    __tostring(): any;
    GetPoint(): any;
  }

  interface LocoMotor {
    inst: any;
    ismastersim: any;
    dest: any;
    atdestfn: any;
    bufferedaction: any;
    arrive_step_dist: any;
    arrive_dist: any;
    walkspeed: any;
    runspeed: any;
    throttle: number;
    lastpos: any;
    slowmultiplier: number;
    fastmultiplier: number;
    groundspeedmultiplier: number;
    enablegroundspeedmultiplier: boolean;
    isrunning: boolean;
    _externalspeedmultipliers: any;
    externalspeedmultiplier: number;
    wasoncreep: boolean;
    triggerscreep: boolean;
    is_prediction_enabled: boolean;
    hop_distance: number;
    hopping: boolean;
    time_before_next_hop_is_allowed: number;
    isupdating: boolean;
    m: number;
    src_params: any;
    ground: any;
    x: any;
    y: any;
    z: any;
    oncreep: any;
    wantstomoveforward: boolean;
    wantstorun: boolean;
    path: any;
    action_pos: any;
    success: any;
    reason: any;
    extra_arrive_dist: any;
    lastdesttile: any;
    pathtile_x: any;
    pathtile_y: any;
    tile_x: any;
    tile_y: any;
    speed: any;
    allow_platform_hopping: any;
    pt_x: any;
    pt_z: any;
    platform: any;
    is_water: any;
    radius: any;
    edge_range: number;
    is_at_edge: any;
    is_first_hop_point: boolean;
    step_count: any;
    my_x: any;
    my_y: any;
    my_z: any;
    dir_x: any;
    dir_z: any;
    dir_length: any;
    can_hop: any;
    px: any;
    pz: any;
    found_platform: any;
    blocked: boolean;
    embarker: any;
    should_locomote: boolean;
    cur_speed: any;
    p0: any;
    p1: any;
    dist: any;
    StartUpdatingInternal(): any;
    StopUpdatingInternal(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnRemoveFromEntity(): any;
    StopMoving(): any;
    RecalculateExternalSpeedMultiplier(sources: any): any;
    SetExternalSpeedMultiplier(source: any, key: any, m: any): any;
    RemoveExternalSpeedMultiplier(source: any, key: any): any;
    GetExternalSpeedMultiplier(source: any, key: any): any;
    SetSlowMultiplier(m: any): any;
    SetTriggersCreep(triggers: any): any;
    EnableGroundSpeedMultiplier(enable: any): any;
    GetWalkSpeed(): any;
    GetRunSpeed(): any;
    UpdateGroundSpeedMultiplier(): any;
    PushTempGroundSpeedMultiplier(mult: any, tile: any): any;
    TempGroundSpeedMultiplier(): any;
    TempGroundTile(): any;
    WalkForward(direct: any): any;
    RunForward(direct: any): any;
    Clear(): any;
    ResetPath(): any;
    KillPathSearch(): any;
    SetReachDestinationCallback(fn: any): any;
    PreviewAction(bufferedaction: any, run: any, try_instant: any): any;
    PushAction(bufferedaction: any, run: any, try_instant: any): any;
    GoToEntity(target: any, bufferedaction: any, run: any): any;
    GoToPoint(pt: any, bufferedaction: any, run: any, overridedest: any): any;
    SetBufferedAction(act: any): any;
    Stop(sgparams: any): any;
    WalkInDirection(direction: any, should_run: any): any;
    RunInDirection(direction: any, throttle: any): any;
    GetDebugString(): any;
    HasDestination(): boolean;
    SetShouldRun(should_run: any): any;
    WantsToRun(): any;
    WantsToMoveForward(): any;
    WaitingForPathSearch(): any;
    UpdateHopping(dt: any): any;
    FinishHopping(): any;
    SetAllowPlatformHopping(enabled: any): any;
    CheckEdge(
      my_platform: any,
      map: any,
      my_x: any,
      my_z: any,
      dir_x: any,
      dir_z: any,
      radius: any
    ): any;
    IsAtEdge(
      my_platform: any,
      map: any,
      my_x: any,
      my_z: any,
      dir_x: any,
      dir_z: any
    ): boolean;
    ScanForPlatformInDir(
      my_platform: any,
      map: any,
      my_x: any,
      my_z: any,
      dir_x: any,
      dir_z: any,
      steps: any,
      step_size: any
    ): any;
    TestForBlocked(
      my_x: any,
      my_z: any,
      dir_x: any,
      dir_z: any,
      radius: any,
      test_length: any
    ): any;
    ScanForPlatform(my_platform: any, target_x: any, target_z: any): any;
    StartHopping(x: any, z: any, target_platform: any): any;
    OnUpdate(dt: any): any;
    FindPath(): any;
  }

  interface LootDropper {
    inst: any;
    numrandomloot: any;
    randomloot: any;
    chancerandomloot: any;
    totalrandomweight: any;
    chanceloot: any;
    ifnotchanceloot: any;
    droppingchanceloot: boolean;
    loot: any;
    chanceloottable: any;
    trappable: boolean;
    lootfn: any;
    flingtargetpos: any;
    flingtargetvariance: any;
    lootsetupfn: any;
    totalhauntedrandomweight: any;
    percent: number;
    loots: any;
    recipe: any;
    prefabs: any;
    SetChanceLootTable(name: any): any;
    SetLoot(loots: any): any;
    SetLootSetupFn(fn: any): any;
    AddRandomLoot(prefab: any, weight: any): any;
    AddRandomHauntedLoot(prefab: any, weight: any): any;
    AddChanceLoot(prefab: any, chance: any): any;
    AddIfNotChanceLoot(prefab: any): any;
    PickRandomLoot(): any;
    GetRecipeLoot(recipe: any): any;
    GenerateLoot(): any;
    SetFlingTarget(pos: any, variance: any): any;
    FlingItem(loot: any, pt: any, bouncedcb: any): any;
    SpawnLootPrefab(lootprefab: any, pt: any): any;
    DropLoot(pt: any): any;
  }

  interface Machine {
    inst: any;
    turnonfn: any;
    turnofffn: any;
    ison: boolean;
    cooldowntime: number;
    oncooldown: boolean;
    data: any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    TurnOn(): any;
    CanInteract(): boolean;
    TurnOff(): any;
    IsOn(): boolean;
    GetDebugString(): any;
  }

  interface MadScienceLab {
    inst: any;
    task: any;
    product: any;
    stages: any;
    str: string;
    OnRemoveFromEntity(): any;
    IsMakingScience(): boolean;
    SetStage(stage: any, time_override: any): any;
    StartMakingScience(product: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
    LongUpdate(dt: any): any;
  }

  interface Map {
    valid_tile: any;
    tile: any;
    valid_water_tile: any;
    min_spacing_sq: any;
    x: any;
    y: any;
    z: any;
    min_distance_from_boat: any;
    radius: any;
    entities: any;
    min_distance_from_land: any;
    mast_min_distance: number;
    is_valid_ground: boolean;
    test_increment: any;
    map: any;
    RegisterDeployExtraSpacing(spacing: any): any;
    RegisterTerraformExtraSpacing(spacing: any): any;
    RegisterGroundTargetBlocker(radius: any): any;
    IsPassableAtPoint(
      x: any,
      y: any,
      z: any,
      allow_water: any,
      exclude_boats: any
    ): boolean;
    IsPassableAtPointWithPlatformRadiusBias(
      x: any,
      y: any,
      z: any,
      allow_water: any,
      exclude_boats: any,
      platform_radius_bias: any,
      ignore_land_overhang: any
    ): boolean;
    IsAboveGroundAtPoint(x: any, y: any, z: any, allow_water: any): boolean;
    IsOceanTileAtPoint(x: any, y: any, z: any): boolean;
    IsValidTileAtPoint(x: any, y: any, z: any): boolean;
    CanTerraformAtPoint(x: any, y: any, z: any): boolean;
    CanPlaceTurfAtPoint(x: any, y: any, z: any): boolean;
    CanPlantAtPoint(x: any, y: any, z: any): boolean;
    IsPointNearHole(pt: any, range: any): boolean;
    IsGroundTargetBlocked(pt: any, range: any): boolean;
    IsDeployPointClear(
      pt: any,
      inst: any,
      min_spacing: any,
      min_spacing_sq_fn: any,
      near_other_fn: any
    ): boolean;
    CanDeployAtPoint(pt: any, inst: any, mouseover: any): boolean;
    CanDeployPlantAtPoint(pt: any, inst: any): boolean;
    CanDeployWallAtPoint(pt: any, inst: any): boolean;
    CanDeployAtPointInWater(
      pt: any,
      inst: any,
      mouseover: any,
      data: any
    ): boolean;
    CanDeployMastAtPoint(pt: any, inst: any, mouseover: any): boolean;
    CanPlacePrefabFilteredAtPoint(x: any, y: any, z: any, prefab: any): boolean;
    CanDeployRecipeAtPoint(pt: any, recipe: any, rot: any): boolean;
    IsSurroundedByWater(x: any, y: any, z: any, radius: any): boolean;
    GetNearestPointOnWater(x: any, z: any, radius: any, iterations: any): any;
    InternalIsPointOnWater(test_x: any, test_z: any): any;
    GetPlatformAtPoint(pos_x: any, pos_z: any): any;
    FindNodeAtPoint(x: any, y: any, z: any): any;
    IsFarmableSoilAtPoint(x: any, y: any, z: any): boolean;
    CanTillSoilAtPoint(pt: any): boolean;
  }

  interface MapRecorder {
    inst: any;
    mapdata: any;
    mapsession: any;
    maplocation: any;
    mapauthor: any;
    mapday: any;
    onteachfn: any;
    ondatachangedfn: any;
    MapExplorer: any;
    SetOnTeachFn(fn: any): any;
    SetOnDataChangedFn(fn: any): any;
    HasData(): boolean;
    IsCurrentWorld(): boolean;
    ClearMap(): any;
    RecordMap(target: any): any;
    TeachMap(target: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface MapRevealable {
    inst: any;
    refreshperiod: number;
    iconname: any;
    iconpriority: any;
    iconprefab: string;
    icon: any;
    task: any;
    revealsources: any;
    _onremovesource: any;
    restriction: any;
    toremove: any;
    SetIcon(iconname: any): any;
    SetIconPriority(priority: any): any;
    SetIconPrefab(prefab: any): any;
    AddRevealSource(source: any, restriction: any): any;
    RemoveRevealSource(source: any): any;
    RefreshRevealSources(): any;
    StartRevealing(restriction: any): any;
    StopRevealing(): any;
    Refresh(): any;
    Start(delay: any): any;
    Stop(): any;
    OnRemoveFromEntity(): any;
  }

  interface MapRevealer {
    inst: any;
    revealperiod: number;
    task: any;
    Start(delay: any): any;
    Stop(): any;
    RevealMapToPlayer(player: any): any;
  }

  interface Mast {
    inst: any;
    is_sail_raised: boolean;
    sail_force: any;
    has_speed: boolean;
    lowered_anchor_count: number;
    boat: any;
    rudder: any;
    max_velocity_mod: any;
    max_velocity: any;
    rudder_turn_drag: any;
    furlunits_max: number;
    furlunits: any;
    autounfurlunits: number;
    furlers: any;
    sinking: boolean;
    is_sail_transitioning: boolean;
    total_strength: number;
    mast_x: any;
    mast_y: any;
    mast_z: any;
    boat_physics: any;
    rudder_direction_x: any;
    rudder_direction_z: any;
    SetSailForce(set: any): any;
    SetVelocityMod(set: any): any;
    SetBoat(boat: any): any;
    SetRudder(obj: any): any;
    OnDeath(): any;
    AddSailFurler(doer: any, strength: any): any;
    RemoveSailFurler(doer: any): any;
    GetCurrentFurlUnits(): any;
    UnfurlSail(): any;
    SailFurled(): any;
    SailUnfurled(): any;
    GetFurled0to1(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
  }

  interface MaxHealer {
    inst: any;
    healamount: any;
    SetHealthAmount(health: any): any;
    Heal(target: any): any;
  }

  interface MaxLightSpawner {
    inst: any;
    lights: any;
    numlights: number;
    maxlights: number;
    angleoffset: number;
    radius: number;
    lightname: string;
    data: any;
    light: any;
    TakeOwnership(light: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(newents: any, savedata: any): any;
    SpawnLight(location: any): any;
    SpawnAllLights(): any;
  }

  interface MaxwellTalker {
    inst: any;
    speech: any;
    speeches: any;
    canskip: boolean;
    defaultvoice: string;
    inputhandlers: any;
    OnRemoveFromEntity(): any;
    OnCancel(): any;
    OnClick(): any;
    StopTalking(): any;
    Initialize(): any;
    IsTalking(): boolean;
    DoTalk(): any;
    SetSpeech(speech: any): any;
  }

  interface MeteorShower {
    inst: any;
    dt: any;
    spawn_mod: any;
    medium_remaining: any;
    large_remaining: any;
    retries_remaining: any;
    task: any;
    tasktotime: any;
    level: any;
    x: any;
    y: any;
    z: any;
    theta: any;
    radius: any;
    map: any;
    fan_offset: any;
    level_params: any;
    duration: any;
    rate: any;
    cooldown: any;
    IsShowering(): boolean;
    IsCoolingDown(): boolean;
    SpawnMeteor(mod: any): any;
    StartShower(level: any): any;
    StopShower(): any;
    StartCooldown(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Mine {
    inst: any;
    radius: any;
    onexplode: any;
    onreset: any;
    onsetsprung: any;
    testtimefn: any;
    target: any;
    inactive: boolean;
    issprung: boolean;
    testtask: any;
    alignment: string;
    ondeactivate: any;
    next_test_time: any;
    OnRemoveFromEntity(): any;
    SetRadius(radius: any): any;
    SetOnExplodeFn(fn: any): any;
    SetOnSprungFn(fn: any): any;
    SetOnResetFn(fn: any): any;
    SetOnDeactivateFn(fn: any): any;
    SetTestTimeFn(fn: any): any;
    SetAlignment(alignment: any): any;
    SetReusable(reusable: any): any;
    Reset(): any;
    StartTesting(): any;
    StopTesting(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    Deactivate(): any;
    Spring(): any;
    GetTarget(): any;
    Explode(target: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Minigame {
    inst: any;
    active: boolean;
    activate_fn: any;
    deactivate_fn: any;
    spectator_dist: number;
    participator_dist: number;
    active_pulse: any;
    x: any;
    y: any;
    z: any;
    spectators: any;
    participators: any;
    OnRemoveFromEntity(): any;
    SetOnActivatedFn(fn: any): any;
    SetOnDeactivatedFn(fn: any): any;
    IsActive(): boolean;
    Activate(): any;
    Deactivate(): any;
    DoActivePulse(): any;
    GetDebugString(): any;
  }

  interface MinigameParticipator {
    inst: any;
    minigame: any;
    updatecheck: any;
    onminigameover: any;
    OnRemoveFromEntity(): any;
    GetMinigame(): any;
    SetMinigame(minigame: any): any;
    GetDebugString(): any;
  }

  interface MinigameSpectator {
    inst: any;
    minigame: any;
    onminigameover: any;
    OnRemoveFromEntity(): any;
    SetWatchingMinigame(minigame: any): any;
    GetMinigame(): any;
    GetDebugString(): any;
  }

  interface MinionSpawner {
    inst: any;
    miniontype: string;
    maxminions: number;
    minionspawntime: any;
    minions: any;
    numminions: number;
    distancemodifier: number;
    onspawnminionfn: any;
    onlostminionfn: any;
    onminionattacked: any;
    onminionattack: any;
    spawninprogress: boolean;
    nextspawninfo: any;
    shouldspawn: boolean;
    minionpositions: any;
    validtiletypes: any;
    freepositions: any;
    _onminionattacked: any;
    _onminionattack: any;
    _onminiondeath: any;
    _onminionremoved: any;
    data: any;
    guidtable: any;
    x: any;
    y: any;
    z: any;
    ground: any;
    maxpositions: any;
    useablepositions: any;
    pos: any;
    task: any;
    GetDebugString(): any;
    RemovePosition(num: any): any;
    AddPosition(num: any, tbl: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(newents: any, savedata: any): any;
    TakeOwnership(minion: any): any;
    OnLostMinion(minion: any): any;
    MakeMinion(): any;
    CheckTileCompatibility(tile: any): any;
    MakeSpawnLocations(): any;
    GetSpawnLocation(num: any): any;
    GetNextSpawnTime(): any;
    KillAllMinions(): any;
    SpawnNewMinion(): any;
    MaxedMinions(): any;
    SetSpawnInfo(time: any): any;
    StartNextSpawn(): any;
    ResumeSpawn(time: any): any;
    LongUpdate(dt: any): any;
  }

  interface Moisture {
    inst: any;
    maxmoisture: number;
    moisture: number;
    numSegs: number;
    baseDryingRate: number;
    maxDryingRate: number;
    minDryingRate: number;
    maxPlayerTempDrying: number;
    minPlayerTempDrying: number;
    maxMoistureRate: number;
    minMoistureRate: number;
    inherentWaterproofness: number;
    waterproofnessmodifiers: any;
    waterproofinventory: boolean;
    optimalDryingTemp: number;
    rate: number;
    ratescale: any;
    wet: boolean;
    forceddrymodifiers: any;
    str: any;
    sleepingbagdryingrate: any;
    oldLevel: any;
    oldSegs: any;
    newSegs: any;
    delta: any;
    current: any;
    max: any;
    target: any;
    num: any;
    full: any;
    waterproofmult: any;
    heaterPower: any;
    ForceDry(force: any, source: any): any;
    GetDebugString(): any;
    AnnounceMoisture(oldSegs: any, newSegs: any): any;
    DoDelta(num: any, no_announce: any): any;
    SetMoistureLevel(num: any): any;
    IsWet(): boolean;
    GetMaxMoisture(): any;
    GetMoisture(): any;
    GetMoisturePercent(): any;
    GetWaterproofInventory(): any;
    SetWaterproofInventory(waterproof: any): any;
    SetPercent(per: any): any;
    SetInherentWaterproofness(waterproofness: any): any;
    GetSegs(): any;
    GetMoistureRate(): any;
    GetEquippedMoistureRate(dryingrate: any): any;
    GetDryingRate(moisturerate: any): any;
    GetSleepingBagDryingRate(): any;
    GetRate(): any;
    GetRateScale(): any;
    OnUpdate(dt: any): any;
    LongUpdate(dt: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Mood {
    inst: any;
    enabled: boolean;
    moodtimeindays: any;
    isinmood: boolean;
    daystomoodchange: any;
    onentermood: any;
    onleavemood: any;
    moodseasons: any;
    firstseasonadded: boolean;
    length: any;
    wait: any;
    active: boolean;
    season: any;
    GetDebugString(): any;
    Enable(enabled: any): any;
    SetMoodTimeInDays(length: any, wait: any): any;
    ValidateMood(): any;
    SetMoodSeason(activeseason: any): any;
    CheckForMoodChange(): any;
    SetInMoodFn(fn: any): any;
    SetLeaveMoodFn(fn: any): any;
    ResetMood(): any;
    SetIsInMood(inmood: any, entireseason: any): any;
    IsInMood(): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface MoonBeastSpawner {
    inst: any;
    started: boolean;
    range: number;
    period: number;
    maxspawns: number;
    task: any;
    cc: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    OnRemoveFromEntity(): any;
    ForcePetrify(): any;
    Start(): any;
    Stop(): any;
  }

  interface MoonRelic {
    inst: any;
  }

  interface MoonTrader {
    inst: any;
    canaccept: any;
    onaccept: any;
    SetCanAcceptFn(fn: any): any;
    SetOnAcceptFn(fn: any): any;
    AcceptOffering(giver: any, item: any): any;
  }

  interface Named {
    inst: any;
    possiblenames: any;
    nameformat: any;
    name: any;
    PickNewName(): any;
    SetName(name: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface NIS {
    inst: any;
    playing: boolean;
    skippable: boolean;
    data: any;
    name: string;
    inputhandlers: any;
    script: any;
    init: any;
    cancel: any;
    task: any;
    OnRemoveEntity(): any;
    SetName(name: any): any;
    SetScript(fn: any): any;
    SetInit(fn: any): any;
    SetCancel(fn: any): any;
    OnFinish(): any;
    Cancel(): any;
    OnClick(): any;
    Play(lines: any): any;
  }

  interface Oar {
    inst: any;
    fail_idx: number;
    fail_string_count: number;
    fail_wetness: number;
    doer_x: any;
    doer_y: any;
    doer_z: any;
    platform: any;
    boat_physics: any;
    row_dir_x: any;
    row_dir_z: any;
    ents: any;
    Row(doer: any, pos: any): any;
    RowFail(doer: any): any;
  }

  interface Oasis {
    inst: any;
    radius: number;
    distsq: any;
    maxradius: any;
    IsEntityInOasis(ent: any): boolean;
    GetProximityLevel(ent: any, range: any): any;
  }

  interface ObjectSpawner {
    inst: any;
    objects: any;
    onnewobjectfn: any;
    references: any;
    OnSave(): any;
    LoadPostPass(newents: any, data: any): any;
    TakeOwnership(obj: any): any;
    SpawnObject(obj: any): any;
  }

  interface Occupiable {
    inst: any;
    occupant: any;
    occupanttype: any;
    OnRemoveFromEntity(): any;
    IsOccupied(): boolean;
    GetOccupant(): any;
    CanOccupy(occupier: any): boolean;
    Occupy(occupier: any): any;
    Harvest(): any;
    OnSave(): any;
    OnLoad(data: any, newents: any): any;
  }

  interface Occupier {
    inst: any;
    owner: any;
    GetOwner(): any;
    SetOwner(owner: any): any;
  }

  interface Ocean {
    inst: any;
    currentAngle: number;
    currentSpeed: number;
    OnUpdate(dt: any): any;
    GetCurrentAngle(): any;
    GetCurrentSpeed(): any;
    GetCurrentVec3(): any;
  }

  interface OceanColor {
    inst: any;
    start_color: any;
    current_color: any;
    end_color: any;
    start_ocean_texture_blend: any;
    current_ocean_texture_blend: any;
    end_ocean_texture_blend: any;
    lerp: number;
    lerp_delay: number;
    blend_delay: any;
    blend_speed: any;
    map: any;
    target_color: any;
    Initialize(has_ocean: any): any;
    OnWallUpdate(dt: any): any;
    OnPhaseChanged(src: any, phase: any): any;
  }

  interface PeriodicSpawner {
    inst: any;
    basetime: number;
    randtime: number;
    prefab: any;
    range: any;
    density: any;
    spacing: any;
    onspawn: any;
    spawntest: any;
    spawnoffscreen: boolean;
    x: any;
    y: any;
    z: any;
    t: any;
    target_time: any;
    task: any;
    SetPrefab(prefab: any): any;
    SetRandomTimes(basetime: any, variance: any, no_reset: any): any;
    SetDensityInRange(range: any, density: any): any;
    SetMinimumSpacing(spacing: any): any;
    SetOnlySpawnOffscreen(offscreen: any): any;
    SetOnSpawnFn(fn: any): any;
    SetSpawnTestFn(fn: any): any;
    TrySpawn(prefab: any): any;
    Start(): any;
    Stop(): any;
    ForceNextSpawn(): any;
    LongUpdate(dt: any): any;
    GetDebugString(): any;
  }

  interface Perishable {
    inst: any;
    perishfn: any;
    perishtime: any;
    frozenfiremult: boolean;
    targettime: any;
    perishremainingtime: any;
    updatetask: any;
    dt: any;
    onperishreplacement: any;
    localPerishMultiplyer: number;
    percent: any;
    cur: any;
    OnRemoveFromEntity(): any;
    OnRemoveEntity(): any;
    IsFresh(): boolean;
    IsStale(): boolean;
    IsSpoiled(): boolean;
    Dilute(number: any, timeleft: any): any;
    SetPerishTime(time: any): any;
    SetLocalMultiplier(newMult: any): any;
    GetLocalMultiplier(): any;
    SetNewMaxPerishTime(newtime: any): any;
    SetOnPerishFn(fn: any): any;
    GetPercent(): any;
    SetPercent(percent: any): any;
    ReducePercent(amount: any): any;
    GetDebugString(): any;
    LongUpdate(dt: any): any;
    StartPerishing(): any;
    Perish(): any;
    StopPerishing(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface PetHealthBar {
    inst: any;
    ismastersim: any;
    _symbol: any;
    _status: any;
    _maxhealth: any;
    _healthpct: any;
    val: any;
    down: any;
    up: any;
    status: any;
    GetSymbol(): any;
    GetMaxHealth(): any;
    GetOverTime(): any;
    GetPercent(): any;
    SetSymbol(symbol: any): any;
    SetMaxHealth(max_health: any): any;
    SetPet(pet: any, symbol: any, maxhealth: any): any;
    OnUpdate(dt: any): any;
  }

  interface PetLeash {
    inst: any;
    petprefab: any;
    pets: any;
    maxpets: number;
    numpets: number;
    onspawnfn: any;
    ondespawnfn: any;
    _onremovepet: any;
    pet: any;
    toremove: any;
    SetPetPrefab(prefab: any): any;
    SetOnSpawnFn(fn: any): any;
    SetOnDespawnFn(fn: any): any;
    SetMaxPets(num: any): any;
    GetMaxPets(): any;
    GetNumPets(): any;
    IsFull(): boolean;
    HasPetWithTag(tag: any): boolean;
    GetPets(): any;
    IsPet(pet: any): boolean;
    SpawnPetAt(x: any, y: any, z: any, prefaboverride: any, skin: any): any;
    DespawnPet(pet: any): any;
    DespawnAllPets(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
  }

  interface Petrifiable {
    inst: any;
    onPetrifiedFn: any;
    petrified: boolean;
    _petrifytask: any;
    _waketask: any;
    OnRemoveFromEntity(): any;
    IsPetrified(): boolean;
    SetPetrifiedFn(fn: any): any;
    Petrify(immediate: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Pickable {
    inst: any;
    canbepicked: boolean;
    regentime: any;
    baseregentime: any;
    product: any;
    onregenfn: any;
    onpickedfn: any;
    makeemptyfn: any;
    makefullfn: any;
    cycles_left: number;
    max_cycles: any;
    transplanted: boolean;
    caninteractwith: boolean;
    numtoharvest: number;
    quickpick: boolean;
    jostlepick: boolean;
    wildfirestarter: boolean;
    droppicked: any;
    dropheight: any;
    paused: boolean;
    pause_time: number;
    targettime: any;
    protected_cycles: any;
    task: any;
    time: any;
    str: string;
    makebarrenfn: any;
    fertilize_cycles: number;
    data: any;
    wasempty: any;
    OnRemoveFromEntity(): any;
    LongUpdate(dt: any): any;
    IsWildfireStarter(): boolean;
    FinishGrowing(): any;
    Resume(): any;
    Pause(): any;
    GetDebugString(): any;
    SetUp(product: any, regen: any, number: any): any;
    SetOnPickedFn(fn: any): any;
    SetOnRegenFn(fn: any): any;
    SetMakeBarrenFn(fn: any): any;
    SetMakeEmptyFn(fn: any): any;
    CanBeFertilized(): boolean;
    ChangeProduct(newProduct: any): any;
    Fertilize(fertilizer: any, doer: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    IsBarren(): boolean;
    CanBePicked(): boolean;
    Regen(): any;
    MakeBarren(): any;
    OnTransplant(): any;
    MakeEmpty(): any;
    Pick(picker: any): any;
  }

  interface Pinnable {
    inst: any;
    canbepinned: boolean;
    stuck: boolean;
    wearofftime: any;
    wearofftask: any;
    attacks_since_pinned: number;
    last_unstuck_time: number;
    last_stuck_time: number;
    fxlevel: number;
    fxdata: any;
    ratio: any;
    index: any;
    fx: any;
    mintime: any;
    remaining: any;
    OnRemoveFromEntity(): any;
    SetDefaultWearOffTime(wearofftime: any): any;
    SpawnShatterFX(ratio: any): any;
    IsStuck(): boolean;
    IsValidPinTarget(): boolean;
    StartWearingOff(wearofftime: any): any;
    Stick(): any;
    UpdateStuckStatus(): any;
    RemainingRatio(): any;
    Unstick(): any;
  }

  interface Placer {
    inst: any;
    can_build: boolean;
    mouse_blocked: boolean;
    testfn: any;
    radius: number;
    selected_pos: any;
    onupdatetransform: any;
    oncanbuild: any;
    oncannotbuild: any;
    linked: any;
    offset: number;
    builder: any;
    recipe: any;
    invobject: any;
    x: any;
    y: any;
    z: any;
    SetBuilder(builder: any, recipe: any, invobject: any): any;
    LinkEntity(ent: any): any;
    GetDeployAction(): any;
    OnUpdate(dt: any): any;
    OnWallUpdate(dt: any): any;
  }

  interface Plantable {
    inst: any;
    growtime: number;
    product: any;
  }

  interface PlantRegrowth {
    inst: any;
    regrowthrate: any;
    product: any;
    searchtag: any;
    nextregrowth: number;
    area: any;
    x: any;
    y: any;
    z: any;
    spawnpoint: any;
    data: any;
    ResetGrowthTime(): any;
    SetRegrowthRate(rate: any): any;
    SetProduct(product: any): any;
    SetSearchTag(tag: any): any;
    OnRemoveFromEntity(): any;
    OnRemoveEntity(): any;
    TrySpawnNearby(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface PlayerActionPicker {
    inst: any;
    map: any;
    containers: any;
    leftclickoverride: any;
    rightclickoverride: any;
    pointspecialactionsfn: any;
    actionfilterstack: any;
    actionfilter: any;
    num: any;
    ret: any;
    actions: any;
    sorted_acts: any;
    player_pos: any;
    player_platform: any;
    target_platform: any;
    useitem: any;
    equipitem: any;
    ispassable: any;
    disable_right_click: boolean;
    steering_actions: any;
    isaoetargeting: boolean;
    wantsaoetargeting: boolean;
    lmb: any;
    rmb: any;
    RegisterContainer(container: any): any;
    UnregisterContainer(container: any): any;
    HasContainerWidgetAction(): boolean;
    OnUpdateActionFilterStack(): any;
    PushActionFilter(filterfn: any, priority: any): any;
    PopActionFilter(filterfn: any): any;
    SortActionList(actions: any, target: any, useitem: any): any;
    GetSceneActions(useitem: any, right: any): any;
    GetUseItemActions(target: any, useitem: any, right: any): any;
    GetSteeringActions(inst: any, pos: any, right: any): any;
    GetPointActions(pos: any, useitem: any, right: any): any;
    GetPointSpecialActions(pos: any, useitem: any, right: any): any;
    GetEquippedItemActions(target: any, useitem: any, right: any): any;
    GetInventoryActions(useitem: any, right: any): any;
    GetLeftClickActions(position: any, target: any): any;
    GetRightClickActions(position: any, target: any): any;
    DoGetMouseActions(position: any, target: any): any;
  }

  interface PlayerAvatarData {
    inst: any;
    allowemptyname: any;
    allowburnt: any;
    data: any;
    SetAllowEmptyName(allow: any): any;
    SetAllowBurnt(allow: any): any;
    AddNameData(save: any): any;
    AddBaseSkinData(save: any): any;
    AddClothingData(save: any): any;
    AddAgeData(save: any): any;
    AddEquipData(save: any): any;
    AddPlayerData(save: any): any;
    GetData(): any;
    SetData(client_obj: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface PlayerController {
    inst: any;
    map: any;
    ismastersim: any;
    locomotor: any;
    HasItemSlots: boolean;
    attack_buffer: any;
    controller_attack_override: any;
    remote_vector: any;
    remote_controls: any;
    bufferedcastaoe: any;
    dragwalking: boolean;
    directwalking: boolean;
    predictwalking: boolean;
    predictionsent: boolean;
    draggingonground: boolean;
    is_hopping: boolean;
    startdragtestpos: any;
    startdragtime: any;
    isclientcontrollerattached: boolean;
    mousetimeout: number;
    time_direct_walking: number;
    controller_target: any;
    controller_target_age: any;
    controller_attack_target: any;
    controller_attack_target_ally_cd: any;
    controller_targeting_modifier_down: boolean;
    controller_targeting_lock_timer: any;
    controller_targeting_lock_target: boolean;
    controller_targeting_targets: any;
    controller_targeting_target_index: any;
    reticule: any;
    terraformer: any;
    deploy_mode: any;
    deployplacer: any;
    placer: any;
    placer_recipe: any;
    placer_recipe_skin: any;
    placer_cached: any;
    LMBaction: any;
    RMBaction: any;
    handler: any;
    actionbuttonoverride: any;
    classified: any;
    ondetachclassified: any;
    code: number;
    bit: number;
    obj: any;
    act: any;
    lmb: any;
    isspecial: any;
    rotamount: number;
    testfn: any;
    item: any;
    combat: any;
    x: any;
    y: number;
    z: any;
    attackrange: any;
    rad: any;
    has_weapon: any;
    reach: any;
    nearby_ents: any;
    nearest_dist: any;
    force_attack: any;
    target: any;
    actioncode: any;
    action_mod_name: any;
    noforce: any;
    buffaction: any;
    isenabled: any;
    ishudblocking: any;
    isbusy: any;
    heading_angle: any;
    dirx: any;
    dirz: any;
    num_targets: any;
    my_x: any;
    my_y: any;
    my_z: any;
    target_x: any;
    target_y: number;
    target_z: any;
    platform_for_velocity_calculation: any;
    hop_dir_x: any;
    hop_dir_z: any;
    hop_distance_sq: any;
    target_velocity_rubber_band_distance: number;
    platform_velocity_x: number;
    platform_velocity_z: number;
    hop_rubber_band_distance: any;
    hop_rubber_band_distance_sq: any;
    pt: any;
    dir: any;
    ROT_REPEAT: number;
    ZOOM_REPEAT: number;
    time: any;
    currentbuffaction: any;
    equippable: any;
    platform: any;
    relative_x: any;
    relative_z: any;
    itempos: any;
    rmb: any;
    islocal: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    Activate(): any;
    Deactivate(): any;
    Enable(val: any): any;
    ToggleController(val: any): any;
    EnableMapControls(val: any): any;
    SetCanUseMap(val: any): any;
    IsEnabled(): boolean;
    IsMapControlsEnabled(): boolean;
    IsControlPressed(control: any): boolean;
    IsAnyOfControlsPressed(): boolean;
    CooldownRemoteController(dt: any): any;
    OnRemoteStopControl(control: any): any;
    OnRemoteStopAllControls(): any;
    RemoteStopControl(control: any): any;
    RemoteStopAllControls(): any;
    RemotePausePrediction(frames: any): any;
    OnControl(control: any, down: any): any;
    EncodeControlMods(): any;
    DecodeControlMods(code: any): any;
    ClearControlMods(): any;
    CanLocomote(): boolean;
    IsBusy(): boolean;
    GetCursorInventoryObject(): any;
    GetCursorInventorySlotAndContainer(): any;
    DoControllerActionButton(): any;
    OnRemoteControllerActionButton(
      actioncode: any,
      target: any,
      isreleased: any,
      noforce: any,
      mod_name: any
    ): any;
    OnRemoteControllerActionButtonPoint(
      actioncode: any,
      position: any,
      isreleased: any,
      noforce: any,
      mod_name: any
    ): any;
    OnRemoteControllerActionButtonDeploy(
      invobject: any,
      position: any,
      rotation: any,
      isreleased: any
    ): any;
    DoControllerAltActionButton(): any;
    OnRemoteControllerAltActionButton(
      actioncode: any,
      target: any,
      isreleased: any,
      noforce: any,
      mod_name: any
    ): any;
    OnRemoteControllerAltActionButtonPoint(
      actioncode: any,
      position: any,
      isreleased: any,
      noforce: any,
      isspecial: any,
      mod_name: any
    ): any;
    DoControllerAttackButton(target: any): any;
    OnRemoteControllerAttackButton(
      target: any,
      isreleased: any,
      noforce: any
    ): any;
    DoControllerDropItemFromInvTile(item: any, single: any): any;
    DoControllerInspectItemFromInvTile(item: any): any;
    DoControllerUseItemOnSelfFromInvTile(item: any): any;
    DoControllerUseItemOnSceneFromInvTile(item: any): any;
    RotLeft(): any;
    RotRight(): any;
    GetHoverTextOverride(): any;
    CancelPlacement(cache: any): any;
    CancelDeployPlacement(): any;
    StartBuildPlacementMode(recipe: any, skin: any): any;
    GetAOETargetingPos(): any;
    IsAOETargeting(): boolean;
    HasAOETargeting(): boolean;
    TryAOETargeting(): any;
    CancelAOETargeting(): any;
    EchoReticuleAt(x: any, y: any, z: any): any;
    RefreshReticule(): any;
    GetAttackTarget(force_attack: any, force_target: any, isretarget: any): any;
    DoAttackButton(retarget: any): any;
    OnRemoteAttackButton(target: any, force_attack: any, noforce: any): any;
    RemoteAttackButton(target: any, force_attack: any): any;
    IsDoingOrWorking(): boolean;
    GetActionButtonAction(force_target: any): any;
    DoActionButton(): any;
    OnRemoteActionButton(
      actioncode: any,
      target: any,
      isreleased: any,
      noforce: any,
      mod_name: any
    ): any;
    RemoteActionButton(action: any, isreleased: any): any;
    GetInspectButtonAction(target: any): any;
    DoInspectButton(): any;
    OnRemoteInspectButton(target: any): any;
    RemoteInspectButton(action: any): any;
    GetResurrectButtonAction(): any;
    DoResurrectButton(): any;
    OnRemoteResurrectButton(): any;
    RemoteResurrectButton(): any;
    UsingMouse(): any;
    OnUpdate(dt: any): any;
    UpdateControllerTargets(dt: any): any;
    GetControllerTarget(): any;
    GetControllerAttackTarget(): any;
    IsControllerTargetingModifierDown(): boolean;
    IsControllerTargetLockEnabled(): boolean;
    IsControllerTargetLocked(): boolean;
    ControllerTargetLock(enable: any): any;
    CycleControllerAttackTargetForward(): any;
    CycleControllerAttackTargetBack(): any;
    ResetRemoteController(): any;
    GetRemoteDirectVector(): any;
    GetRemoteDragPosition(): any;
    GetRemotePredictPosition(): any;
    OnRemoteDirectWalking(x: any, z: any): any;
    OnRemoteDragWalking(x: any, z: any): any;
    OnRemotePredictWalking(x: any, z: any, isdirectwalking: any): any;
    OnRemoteStartHop(x: any, z: any, platform: any): any;
    OnRemoteStopWalking(): any;
    OnRemoteStopHopping(): any;
    RemoteDirectWalking(x: any, z: any): any;
    RemoteDragWalking(x: any, z: any): any;
    RemotePredictWalking(x: any, z: any): any;
    RemoteStopWalking(): any;
    DoPredictHopping(dt: any): any;
    IsLocalOrRemoteHopping(): boolean;
    DoPredictWalking(dt: any): any;
    DoDragWalking(dt: any): any;
    DoBoatSteering(dt: any): any;
    DoDirectWalking(dt: any): any;
    DoCameraControl(): any;
    OnLeftUp(): any;
    DoAction(buffaction: any): any;
    DoActionAutoEquip(buffaction: any): any;
    OnLeftClick(down: any): any;
    OnRemoteLeftClick(
      actioncode: any,
      position: any,
      target: any,
      isreleased: any,
      controlmodscode: any,
      noforce: any,
      mod_name: any
    ): any;
    GetPlatformRelativePosition(absolute_x: any, absolute_z: any): any;
    OnRightClick(down: any): any;
    OnRemoteRightClick(
      actioncode: any,
      position: any,
      target: any,
      rotation: any,
      isreleased: any,
      controlmodscode: any,
      noforce: any,
      mod_name: any
    ): any;
    GetLeftMouseAction(): any;
    GetRightMouseAction(): any;
    GetItemSelfAction(item: any): any;
    GetSceneItemControllerAction(item: any): any;
    GetGroundUseAction(position: any): any;
    GetGroundUseSpecialAction(position: any, right: any): any;
    HasGroundUseSpecialAction(right: any): boolean;
    GetItemUseAction(active_item: any, target: any): any;
    RemoteUseItemFromInvTile(buffaction: any, item: any): any;
    RemoteControllerUseItemOnItemFromInvTile(
      buffaction: any,
      item: any,
      active_item: any
    ): any;
    RemoteControllerUseItemOnSelfFromInvTile(buffaction: any, item: any): any;
    RemoteControllerUseItemOnSceneFromInvTile(buffaction: any, item: any): any;
    RemoteInspectItemFromInvTile(item: any): any;
    RemoteDropItemFromInvTile(item: any, single: any): any;
    RemoteMakeRecipeFromMenu(recipe: any, skin: any): any;
    RemoteMakeRecipeAtPoint(recipe: any, pt: any, rot: any, skin: any): any;
    RemoteBufferedAction(buffaction: any): any;
    OnRemoteBufferedAction(): any;
  }

  interface PlayerHearing {
    inst: any;
    dsptables: any;
    GetDSPTables(): any;
    UpdateDSPTables(): any;
  }

  interface PlayerInspectable {
    inst: any;
  }

  interface PlayerLightningTarget {
    inst: any;
    hitchance: number;
    onstrikefn: any;
    SetHitChance(chance: any): any;
    GetHitChance(): any;
    SetOnStrikeFn(fn: any): any;
    DoStrike(): any;
  }

  interface PlayerMetrics {
    inst: any;
    OnRemoveFromEntity(): any;
  }

  interface PlayerProx {
    inst: any;
    near: number;
    far: number;
    isclose: boolean;
    period: any;
    onnear: any;
    onfar: any;
    task: any;
    target: any;
    losttargetfn: any;
    alivemode: any;
    _ontargetleft: any;
    targetmode: any;
    GetDebugString(): any;
    SetOnPlayerNear(fn: any): any;
    SetOnPlayerFar(fn: any): any;
    IsPlayerClose(): boolean;
    SetDist(near: any, far: any): any;
    SetLostTargetFn(func: any): any;
    SetPlayerAliveMode(alivemode: any): any;
    Schedule(): any;
    ForceUpdate(): any;
    Stop(): any;
    OnEntityWake(): any;
    OnEntitySleep(): any;
    SetTargetMode(mode: any, target: any, override: any): any;
    SetTarget(target: any): any;
  }

  interface PlayerTargetIndicator {
    inst: any;
    max_range: any;
    offScreenPlayers: any;
    onScreenPlayersLastTick: any;
    onplayerexited: any;
    checked: any;
    OnRemoveFromEntity(): any;
    ShouldShowIndicator(target: any): any;
    ShouldRemoveIndicator(target: any): any;
    OnUpdate(): any;
  }

  interface PlayerVision {
    inst: any;
    ghostvision: boolean;
    nightmarevision: boolean;
    nightvision: boolean;
    forcenightvision: boolean;
    gogglevision: boolean;
    forcegogglevision: boolean;
    overridecctable: any;
    currentcctable: any;
    currentccphasefn: any;
    cctable: any;
    ccphasefn: any;
    HasGhostVision(): boolean;
    HasNightmareVision(): boolean;
    HasNightVision(): boolean;
    HasGoggleVision(): boolean;
    GetCCPhaseFn(): any;
    GetCCTable(): any;
    UpdateCCTable(): any;
    SetGhostVision(enabled: any): any;
    SetNightmareVision(enabled: any): any;
    ForceNightVision(force: any): any;
    ForceGoggleVision(force: any): any;
    SetCustomCCTable(cctable: any): any;
  }

  interface PlayerVoter {
    inst: any;
    _refreshtask: any;
    classified: any;
    ondetachclassified: any;
    onvoteselectiondirty: any;
    OnRemoveFromEntity(): any;
    AttachClassified(classified: any): any;
    DetachClassified(): any;
    SubmitVote(sel: any): any;
    SetSelection(sel: any): any;
    GetSelection(): any;
    HasVoted(): boolean;
    CanVote(): boolean;
    SetSquelched(val: any): any;
    IsSquelched(): boolean;
  }

  interface Pollinator {
    inst: any;
    flowers: any;
    distance: number;
    maxdensity: number;
    collectcount: number;
    target: any;
    x: any;
    y: any;
    z: any;
    nearbyentities: any;
    OnRemoveFromEntity(): any;
    Pollinate(flower: any): any;
    CanPollinate(flower: any): boolean;
    HasCollectedEnough(): boolean;
    CreateFlower(): any;
    CheckFlowerDensity(): any;
    GetDebugString(): any;
  }

  interface PortableCookware {
    inst: any;
    ondismantlefn: any;
    SetOnDismantleFn(fn: any): any;
    Dismantle(doer: any): any;
  }

  interface PossessedAxe {
    inst: any;
    revert_prefab: string;
    revert_uses: any;
    revert_fx: any;
    revert_time: any;
    transform_fx: any;
    player: any;
    userid: any;
    currentowner: any;
    oncontainerpickedup: any;
    checkownertask: any;
    waittask: any;
    waittotime: any;
    onplayerdied: any;
    onplayerremoved: any;
    onplayerpossessedaxe: any;
    onplayerjoined: any;
    owner: any;
    axe: any;
    container: any;
    data: any;
    WaitForPlayer(userid: any, delay: any): any;
    StopWaitingForPlayer(): any;
    LinkToPlayer(player: any): any;
    Drop(): any;
    Revert(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Projectile {
    inst: any;
    owner: any;
    target: any;
    start: any;
    dest: any;
    cancatch: boolean;
    speed: any;
    hitdist: number;
    homing: boolean;
    range: any;
    onthrown: any;
    onhit: any;
    onmiss: any;
    oncaught: any;
    stimuli: any;
    _ondelaycancel: any;
    launchoffset: any;
    attacker: any;
    delaypos: any;
    weapon: any;
    pos: any;
    direction: any;
    angle: any;
    delaytask: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    SetSpeed(speed: any): any;
    SetStimuli(stimuli: any): any;
    SetRange(range: any): any;
    SetHitDist(dist: any): any;
    SetOnThrownFn(fn: any): any;
    SetOnHitFn(fn: any): any;
    SetOnCaughtFn(fn: any): any;
    SetOnMissFn(fn: any): any;
    SetCanCatch(cancatch: any): any;
    SetHoming(homing: any): any;
    SetLaunchOffset(offset: any): any;
    IsThrown(): boolean;
    Throw(owner: any, target: any, attacker: any): any;
    Catch(catcher: any): any;
    Miss(target: any): any;
    Stop(): any;
    Hit(target: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    OnSave(): any;
    RotateToTarget(dest: any): any;
    LoadPostPass(newents: any, savedata: any): any;
    DelayVisibility(duration: any): any;
  }

  interface Propagator {
    inst: any;
    flashpoint: number;
    currentheat: number;
    decayrate: number;
    propagaterange: number;
    heatoutput: number;
    damages: boolean;
    damagerange: number;
    pvp_damagemod: any;
    acceptsheat: boolean;
    spreading: boolean;
    delay: any;
    onflashpoint: any;
    source: any;
    tile: any;
    data: any;
    OnRemoveFromEntity(): any;
    SetOnFlashPoint(fn: any): any;
    Delay(time: any): any;
    StopUpdating(): any;
    StartUpdating(): any;
    StartSpreading(source: any): any;
    StopSpreading(reset: any, heatpct: any): any;
    GetHeatResistance(): any;
    AddHeat(amount: any): any;
    Flash(): any;
    OnUpdate(dt: any): any;
    GetDebugString(): any;
  }

  interface Prototyper {
    inst: any;
    trees: any;
    on: boolean;
    onturnon: any;
    onturnoff: any;
    doers: any;
    onremovedoer: any;
    OnRemoveFromEntity(): any;
    TurnOn(doer: any): any;
    TurnOff(doer: any): any;
    GetTechTrees(): any;
    Activate(doer: any, recipe: any): any;
  }

  interface RampingSpawner {
    inst: any;
    spawn_prefab: string;
    spawns: any;
    num_spawns: number;
    current_wave: number;
    wave_num: number;
    min_wave: number;
    max_wave: number;
    waves_to_max: number;
    wave_time: number;
    spawning_on: boolean;
    SpawnTask: any;
    _ondeathfn: any;
    _onremovefn: any;
    spawn: any;
    data: any;
    refs: any;
    OnRemoveFromEntity(): any;
    StopTrackingSpawn(spawn: any): any;
    OnSpawnDeath(spawn: any): any;
    TrackSpawn(spawn: any): any;
    GetCurrentWave(): any;
    GetWaveSize(): any;
    DoWave(): any;
    GetSpawnPos(): any;
    GetSpawnRot(): any;
    SpawnEntity(): any;
    IsActive(): boolean;
    Start(): any;
    Stop(): any;
    Reset(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(ents: any, data: any): any;
  }

  interface Reader {
    inst: any;
    OnRemoveFromEntity(): any;
    Read(book: any): any;
  }

  interface RecipeStockpile {
    inst: any;
    stock: any;
    data: any;
    str: string;
    OnRemoveFromEntity(data: any): any;
    SetupItem(data: any, start_restock_timer: any): any;
    RemoveAllStock(allow_restock: any): any;
    RemoveStock(recipe: any, allow_restock: any): any;
    FullyRestockItem(recipe: any): any;
    HasAnyStock(): boolean;
    OnItemCrafted(recipe: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Repairable {
    inst: any;
    repairmaterial: any;
    noannounce: any;
    checkmaterialfn: any;
    OnRemoveFromEntity(): any;
    NeedsRepairs(): any;
    Repair(doer: any, repair_item: any): any;
  }

  interface Repairer {
    inst: any;
    workrepairvalue: number;
    healthrepairvalue: number;
    healthrepairpercent: number;
    perishrepairpercent: number;
    repairmaterial: any;
    OnRemoveFromEntity(): any;
  }

  interface ResearchPointConverter {
    inst: any;
    val: number;
    active: boolean;
    level: number;
    on: boolean;
    TurnOn(): any;
    TurnOff(): any;
    Activate(): any;
  }

  interface Resistance {
    inst: any;
    tags: any;
    onresistdamage: any;
    shouldresistfn: any;
    str: any;
    AddResistance(tag: any): any;
    RemoveResistance(tag: any): any;
    HasResistance(attacker: any, weapon: any): boolean;
    HasResistanceToTag(tag: any): boolean;
    SetOnResistDamageFn(fn: any): any;
    SetShouldResistFn(fn: any): any;
    ShouldResistDamage(): any;
    ResistDamage(damage_amount: any): any;
    GetDebugString(): any;
  }

  interface Reticule {
    inst: any;
    targetpos: any;
    ease: boolean;
    smoothing: number;
    targetfn: any;
    mousetargetfn: any;
    updatepositionfn: any;
    reticuleprefab: string;
    reticule: any;
    validcolour: any;
    invalidcolour: any;
    currentcolour: any;
    mouseenabled: boolean;
    followhandler: any;
    fadealpha: number;
    blipalpha: number;
    pingprefab: any;
    _oncameraupdate: any;
    a: any;
    CreateReticule(): any;
    DestroyReticule(): any;
    PingReticuleAt(pos: any): any;
    Blip(): any;
    OnUpdate(dt: any): any;
    UpdateColour(): any;
    UpdatePosition(dt: any): any;
    OnCameraUpdate(dt: any): any;
  }

  interface RevivableCorpse {
    inst: any;
    ismastersim: any;
    canberevivedbyfn: any;
    mult: any;
    SetCanBeRevivedByFn(fn: any): any;
    CanBeRevivedBy(reviver: any): boolean;
    SetReviveSpeedMult(mult: any): any;
    SetReviveSpeedMultForTag(tag: any, mult: any): any;
    GetReviveSpeedMult(reviver: any): any;
    SetCorpse(corpse: any): any;
    Revive(reviver: any): any;
    SetReviveHealthPercent(percent: any): any;
    GetReviveHealthPercent(): any;
  }

  interface Rideable {
    inst: any;
    saddleable: boolean;
    canride: boolean;
    saddle: any;
    rider: any;
    requiredobedience: any;
    lastridetime: any;
    riddentask: any;
    _OnRiderDoAttackOtherCB: any;
    oldrider: any;
    data: any;
    OnRemoveFromEntity(): any;
    TimeSinceLastRide(): any;
    SetRequiredObedience(required: any): any;
    TestObedience(): any;
    SetSaddle(doer: any, newsaddle: any): any;
    SetSaddleable(saddleable: any): any;
    IsSaddled(): boolean;
    SetRider(rider: any): any;
    GetRider(): any;
    IsBeingRidden(): boolean;
    Buck(gentle: any): any;
    OnSaveDomesticatable(): any;
    OnLoadDomesticatable(data: any): any;
    GetDebugString(): any;
  }

  interface Rider {
    inst: any;
    mount: any;
    saddle: any;
    _mountannouncetask: any;
    _onSaddleChanged: any;
    rideable: any;
    saddler: any;
    x: any;
    y: any;
    z: any;
    tx: any;
    ty: any;
    tz: any;
    riding: boolean;
    canbepinned: boolean;
    ex_mount: any;
    data: any;
    OnRemoveFromEntity(): any;
    StartTracking(mount: any): any;
    StopTracking(mount: any): any;
    GetSaddle(): any;
    Mount(target: any, instant: any): any;
    Dismount(): any;
    ActualDismount(): any;
    IsRiding(): boolean;
    GetMount(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Saddler {
    inst: any;
    swapsymbol: any;
    swapbuild: any;
    bonusdamage: any;
    speedmult: any;
    discardedcb: any;
    SetSwaps(build: any, symbol: any): any;
    SetBonusDamage(damage: any): any;
    SetBonusSpeedMult(mult: any): any;
    GetBonusDamage(target: any): any;
    GetBonusSpeedMult(): any;
    SetDiscardedCallback(cb: any): any;
  }

  interface SaltLicker {
    inst: any;
    salted: boolean;
    saltedduration: any;
    uses_per_lick: any;
    _task: any;
    SetUp(uses_per_lick: any): any;
    Stop(): any;
    OnRemoveFromEntity(): any;
    SetSalted(salted: any): any;
    OnSave(): any;
    LoadPostPass(): any;
    GetDebugString(): any;
  }

  interface Sanity {
    inst: any;
    max: number;
    current: any;
    mode: any;
    rate: number;
    ratescale: any;
    rate_modifier: number;
    sane: boolean;
    fxtime: number;
    dapperness: number;
    externalmodifiers: any;
    inducedinsanity: any;
    inducedinsanity_sources: any;
    night_drain_mult: number;
    neg_aura_mult: number;
    neg_aura_absorb: number;
    dapperness_mult: number;
    penalty: number;
    sanity_penalties: any;
    ghost_drain_mult: number;
    custom_rate_fn: any;
    _oldissane: any;
    _oldpercent: any;
    target: any;
    delta: any;
    percent_ignoresinduced: any;
    total_dapperness: any;
    dapper_delta: any;
    moisture_delta: any;
    light_sanity_drain: any;
    light_delta: any;
    aura_delta: number;
    x: any;
    y: any;
    z: any;
    ents: any;
    mount: any;
    ghost_delta: any;
    IsSane(): boolean;
    IsInsane(): boolean;
    IsEnlightened(): boolean;
    IsCrazy(): boolean;
    SetSanityMode(mode: any): any;
    IsInsanityMode(): boolean;
    IsLunacyMode(): boolean;
    GetSanityMode(): any;
    AddSanityPenalty(key: any, mod: any): any;
    RemoveSanityPenalty(key: any): any;
    RecalculatePenalty(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetPenaltyPercent(): any;
    GetPercent(): any;
    GetPercentWithPenalty(): any;
    SetPercent(per: any, overtime: any): any;
    GetDebugString(): any;
    SetMax(amount: any): any;
    GetMaxWithPenalty(): any;
    GetRateScale(): any;
    SetInducedInsanity(src: any, val: any): any;
    DoDelta(delta: any, overtime: any): any;
    OnUpdate(dt: any): any;
    RecalcGhostDrain(): any;
    Recalc(dt: any): any;
  }

  interface SanityAura {
    inst: any;
    aura: number;
    aurafn: any;
    aura_val: number;
    distsq: any;
    OnRemoveFromEntity(): any;
    GetAura(observer: any): any;
  }

  interface SavedRotation {
    inst: any;
    rot: any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface SavedScale {
    inst: any;
    sx: any;
    sy: any;
    sz: any;
    data: any;
    scale: any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Scaler {
    inst: any;
    scale: number;
    ApplyScale(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    SetScale(scale: any): any;
  }

  interface ScenarioRunner {
    inst: any;
    scriptname: any;
    script: any;
    hasrunonce: boolean;
    data: any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetScript(name: any): any;
    Run(): any;
    ClearScenario(): any;
    Reset(): any;
  }

  interface SelfStacker {
    inst: any;
    searchradius: number;
    stackpartner: any;
    CanSelfStack(): boolean;
    FindItemToStackWith(): any;
    DoStack(): any;
    OnEntityWake(): any;
  }

  interface SentientAxe {
    inst: any;
    owner: any;
    convo_task: any;
    say_task: any;
    warnlevel: number;
    waslow: boolean;
    _onfinishedwork: any;
    _onbeavernessdelta: any;
    _onstartbeaver: any;
    _onstopbeaver: any;
    SetOwner(owner: any): any;
    OnFinishedWork(target: any, action: any): any;
    OnBeavernessDelta(old: any, _new: any): any;
    OnBecomeHuman(): any;
    OnBecomeBeaver(): any;
    Say(list: any, sound_override: any, delay: any): any;
    ShouldMakeConversation(): any;
    ScheduleConversation(delay: any): any;
    MakeConversation(): any;
  }

  interface Sewing {
    inst: any;
    repair_value: number;
    DoSewing(target: any, doer: any): any;
  }

  interface ShadowSubmissive {
    inst: any;
    forgetattackertime: number;
    OnRemoveFromEntity(): any;
    ShouldSubmitToTarget(target: any): any;
    TargetHasDominance(target: any): any;
  }

  interface ShatterFX {
    inst: any;
    level: any;
    levels: any;
    SetLevel(level: any): any;
  }

  interface Shaver {
    inst: any;
  }

  interface Shedder {
    inst: any;
    shedItemPrefab: any;
    shedHeight: number;
    shedTask: any;
    item: any;
    num: any;
    speed: number;
    StartShedding(interval: any): any;
    StopShedding(): any;
    DoSingleShed(): any;
    DoMultiShed(max: any, random: any): any;
  }

  interface Shelf {
    inst: any;
    cantakeitemfn: any;
    itemonshelf: any;
    onitemtakenfn: any;
    cantakeitem: boolean;
    onshelfitemfn: any;
    ontakeitemfn: any;
    OnRemoveFromEntity(): any;
    SetOnShelfItem(fn: any): any;
    SetOnTakeItem(fn: any): any;
    PutItemOnShelf(item: any): any;
    TakeItem(taker: any): any;
  }

  interface Sheltered {
    inst: any;
    stoptime: any;
    presheltered: boolean;
    sheltered: boolean;
    announcecooldown: number;
    waterproofness: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    OnRemoveFromEntity(): any;
    Start(): any;
    Stop(): any;
    SetSheltered(issheltered: any): any;
    OnUpdate(dt: any): any;
    GetDebugString(): any;
  }

  interface Shop {
    inst: any;
    tab: string;
    title: string;
    x: any;
    y: any;
    z: any;
    physcsPT: any;
    SetStartTab(tab: any): any;
    SetTitle(title: any): any;
    DeliverItems(items: any): any;
  }

  interface SinkholeSpawner {
    inst: any;
    targets: any;
    weighted_players: any;
    num_players: number;
    x: any;
    z: any;
    offset: any;
    data: any;
    towarn: any;
    toattack: any;
    s: any;
    StartSinkholes(): any;
    StopSinkholes(): any;
    UpdateTarget(targetinfo: any): any;
    DoTargetWarning(targetinfo: any): any;
    DoTargetAttack(targetinfo: any): any;
    SpawnSinkhole(spawnpt: any): any;
    PushRemoteTargets(): any;
    OnUpdate(dt: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface SizeTweener {
    inst: any;
    i_size: any;
    t_size: any;
    callback: any;
    time: any;
    timepassed: number;
    tweening: boolean;
    EndTween(): any;
    StartTween(size: any, time: any, callback: any): any;
    OnUpdate(dt: any): any;
  }

  interface Skinner {
    inst: any;
    skin_name: string;
    clothing: any;
    skintype: string;
    base_skin: string;
    skin_data: any;
    GetSkinMode(): any;
    SetSkinMode(skintype: any, default_build: any): any;
    SetupNonPlayerData(): any;
    SetSkinName(skin_name: any): any;
    SetClothing(name: any): any;
    GetClothing(): any;
    HideAllClothing(anim_state: any): any;
    ClearAllClothing(): any;
    ClearClothing(type: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Sleeper {
    inst: any;
    isasleep: boolean;
    testperiod: number;
    lasttransitiontime: any;
    lasttesttime: any;
    sleeptestfn: any;
    waketestfn: any;
    resistance: number;
    sleepiness: number;
    wearofftime: number;
    hibernate: boolean;
    extraresist: any;
    OnRemoveFromEntity(): any;
    SetDefaultTests(): any;
    StopTesting(): any;
    SetNocturnal(b: any): any;
    SetWakeTest(fn: any, time: any): any;
    SetSleepTest(fn: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    SetResistance(resist: any): any;
    StartTesting(time: any): any;
    IsAsleep(): boolean;
    IsHibernating(): boolean;
    IsInDeepSleep(): boolean;
    GetTimeAwake(): any;
    GetTimeAsleep(): any;
    GetDebugString(): any;
    AddSleepiness(sleepiness: any, sleeptime: any): any;
    SetExtraResist(resist: any): any;
    GetSleepTimeMultiplier(): any;
    GoToSleep(sleeptime: any): any;
    SetTest(fn: any, time: any): any;
    WakeUp(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface SleepingBag {
    inst: any;
    healthsleep: boolean;
    dryingrate: any;
    sleeper: any;
    onsleep: any;
    onwake: any;
    DoSleep(doer: any): any;
    DoWakeUp(nostatechange: any): any;
  }

  interface Smotherer {
    inst: any;
  }

  interface Soul {
    inst: any;
  }

  interface SoulEater {
    inst: any;
    oneatsoulfn: any;
    SetOnEatSoulFn(fn: any): any;
    EatSoul(soul: any): any;
  }

  interface Spawner {
    inst: any;
    child: any;
    delay: number;
    onoccupied: any;
    onvacate: any;
    spawnoffscreen: any;
    task: any;
    nextspawntime: any;
    queue_spawn: any;
    retry_period: any;
    _onchildkilled: any;
    spawn_in_water: any;
    spawn_on_boats: any;
    childname: any;
    data: any;
    refs: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    SetOnOccupiedFn(fn: any): any;
    SetOnVacateFn(fn: any): any;
    SetWaterSpawning(spawn_in_water: any, spawn_on_boats: any): any;
    SetOnlySpawnOffscreen(offscreen: any): any;
    Configure(childname: any, delay: any, startdelay: any): any;
    SpawnWithDelay(delay: any): any;
    IsSpawnPending(): boolean;
    SetQueueSpawning(queued: any, retryperiod: any): any;
    CancelSpawning(): any;
    OnSave(): any;
    OnLoad(data: any, newents: any): any;
    TakeOwnership(child: any): any;
    LoadPostPass(newents: any, savedata: any): any;
    IsOccupied(): boolean;
    ReleaseChild(): any;
    GoHome(child: any): any;
    OnChildKilled(child: any): any;
  }

  interface SpawnFader {
    inst: any;
    _fade: any;
    fadeval: number;
    updating: boolean;
    k: any;
    OnRemoveFromEntity(): any;
    FadeIn(): any;
    Cancel(): any;
    OnUpdate(dt: any): any;
  }

  interface SpectatorCorpse {
    inst: any;
    lasttarget: any;
    str: any;
    maxrange: number;
    startspeed: number;
    priority: number;
    active: boolean;
    updating: boolean;
    _isspectating: any;
    OnUpdate(): any;
  }

  interface Spell {
    inst: any;
    active: boolean;
    spellname: string;
    onstartfn: any;
    onfinishfn: any;
    ontargetfn: any;
    fn: any;
    resumefn: any;
    target: any;
    duration: number;
    lifetime: number;
    period: any;
    timer: any;
    removeonfinish: boolean;
    variables: any;
    data: any;
    OnStart(): any;
    OnFinish(): any;
    OnUpdate(dt: any): any;
    OnTarget(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(newents: any, data: any): any;
    StartSpell(): any;
    ResumeSpell(): any;
    SetVariables(variables: any): any;
    SetTarget(target: any): any;
  }

  interface SpellCaster {
    inst: any;
    onspellcast: any;
    canusefrominventory: boolean;
    canuseontargets: boolean;
    canonlyuseonrecipes: boolean;
    canonlyuseonlocomotors: boolean;
    canonlyuseonlocomotorspvp: boolean;
    canonlyuseonworkable: boolean;
    canonlyuseoncombat: boolean;
    canuseonpoint: boolean;
    canuseonpoint_water: boolean;
    spell: any;
    quickcast: boolean;
    OnRemoveFromEntity(): any;
    SetSpellFn(fn: any): any;
    SetOnSpellCastFn(fn: any): any;
    CastSpell(target: any, pos: any): any;
    CanCast(doer: any, target: any, pos: any): boolean;
  }

  interface Spooked {
    inst: any;
    spookedlevel: number;
    spookedthreshold: number;
    maxspookedlevel: number;
    maxspookdelta: number;
    maxspookage: any;
    lastspooktime: any;
    k: any;
    t: any;
    agefactor: any;
    stage: any;
    anim: any;
    ShouldSpook(): any;
    Spook(source: any): any;
    GetDebugString(): any;
  }

  interface SquadMember {
    inst: any;
    squad: string;
    others: any;
    _onotherjoined: any;
    _onotherleft: any;
    IsInSquad(): boolean;
    GetSquadName(): any;
    GetOtherMembers(): any;
    JoinSquad(squadname: any): any;
    LeaveSquad(): any;
    GetDebugString(): any;
  }

  interface Stackable {
    inst: any;
    stacksize: number;
    maxsize: any;
    ondestack: any;
    old_size: any;
    num_to_get: any;
    ret: any;
    IsStack(): boolean;
    StackSize(): any;
    IsFull(): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
    SetOnDeStack(fn: any): any;
    SetStackSize(sz: any): any;
    Get(num: any): any;
    RoomLeft(): any;
    Put(item: any, source_pos: any): any;
  }

  interface SteeringWheel {
    inst: any;
    onsailorremoved: any;
    onstartfn: any;
    onstopfn: any;
    sailor: any;
    SetOnStartSteeringFn(fn: any): any;
    SetOnStopSteeringFn(fn: any): any;
    StartSteering(sailor: any): any;
    StopSteering(sailor: any): any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
  }

  interface SteeringWheelUser {
    inst: any;
    should_play_left_turn_anim: boolean;
    wheel_remove_callback: any;
    onstopturning: any;
    onboatremoved: any;
    prev_steering_wheel: any;
    steering_wheel: any;
    boat: any;
    x: any;
    y: any;
    z: any;
    dir_x: any;
    dir_z: any;
    right_vec: any;
    player_pos_x: any;
    player_pos_y: any;
    player_pos_z: any;
    SetSteeringWheel(steering_wheel: any): any;
    Steer(pos_x: any, pos_z: any): any;
    SteerInDir(dir_x: any, dir_z: any): any;
    GetBoat(): any;
    OnUpdate(dt: any): any;
  }

  interface Stewer {
    inst: any;
    done: any;
    targettime: any;
    task: any;
    product: any;
    product_spoilage: any;
    spoiledproduct: string;
    spoiltime: any;
    cooktimemult: number;
    remainingtime: any;
    status: any;
    OnRemoveFromEntity(): any;
    IsDone(): boolean;
    IsSpoiling(): boolean;
    IsCooking(): boolean;
    GetTimeToCook(): any;
    GetTimeToSpoil(): any;
    CanCook(): boolean;
    GetRecipeForProduct(): any;
    StartCooking(): any;
    StopCooking(reason: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
    Harvest(harvester: any): any;
    LongUpdate(dt: any): any;
  }

  interface StormWatcher {
    inst: any;
    sandstormlevel: number;
    sandstormspeedmult: any;
    delay: any;
    level: any;
    ToggleSandstorms(active: any): any;
    SetSandstormSpeedMultiplier(mult: any): any;
    UpdateSandstormLevel(): any;
    UpdateSandstormWalkSpeed(): any;
    OnUpdate(dt: any): any;
  }

  interface Stretcher {
    inst: any;
    target: any;
    restinglength: number;
    widthratio: number;
    targetpos: any;
    mypos: any;
    diff: any;
    scale: any;
    widthscale: any;
    SetRestingLength(length: any): any;
    SetWidthRatio(ratio: any): any;
    SetStretchTarget(inst: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
  }

  interface Stunnable {
    inst: any;
    damage: any;
    stun_threshold: number;
    stun_period: number;
    stun_duration: number;
    stun_resist: number;
    stun_cooldown: number;
    valid_stun_time: number;
    totaldamage: number;
    toremove: any;
    Stun(): any;
    TakeDamage(damage: any): any;
    GetDamageInPeriod(): any;
  }

  interface Talkable {
    inst: any;
    conversation: any;
    conv_index: number;
  }

  interface Talker {
    inst: any;
    task: any;
    ignoring: any;
    mod_str_fn: any;
    offset: any;
    offset_fn: any;
    disablefollowtext: any;
    lines: any;
    SetOffsetFn(fn: any): any;
    MakeChatter(): any;
    Chatter(strtbl: any, strid: any, time: any, forcetext: any): any;
    OnRemoveFromEntity(): any;
    IgnoreAll(source: any): any;
    StopIgnoringAll(source: any): any;
    Say(
      script: any,
      time: any,
      noanim: any,
      force: any,
      nobroadcast: any,
      colour: any
    ): any;
    ShutUp(): any;
  }

  interface Teacher {
    inst: any;
    recipe: any;
    SetRecipe(recipe: any): any;
    Teach(target: any): any;
  }

  interface TeamAttacker {
    inst: any;
    inteam: boolean;
    teamleader: any;
    formationpos: any;
    order: any;
    searchradius: number;
    leashdistance: number;
    team_type: string;
    str: any;
    pt: any;
    ents: any;
    homePos: any;
    x: any;
    y: any;
    z: any;
    GetDebugString(): any;
    SearchForTeam(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    ShouldGoHome(): any;
    LeaveTeam(): any;
    OnUpdate(dt: any): any;
  }

  interface TeamLeader {
    inst: any;
    team_type: string;
    min_team_size: number;
    max_team_size: number;
    team: any;
    threat: any;
    searchradius: number;
    theta: number;
    thetaincrement: number;
    radius: number;
    reverse: boolean;
    timebetweenattacks: number;
    attackinterval: number;
    lifetime: number;
    attack_grp_size: any;
    chk_state: boolean;
    maxchasetime: number;
    chasetime: number;
    count: number;
    teamattacker: any;
    teams: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    oldestteam: number;
    sort: any;
    maxteam: number;
    updatedPos: any;
    validMembers: number;
    target: any;
    pt: any;
    steps: any;
    temp: any;
    successfulorders: number;
    GetTeamSize(): any;
    SetUp(target: any, first_member: any): any;
    OrganizeTeams(): any;
    IsTeamFull(): boolean;
    ValidMember(member: any): any;
    DisbandTeam(): any;
    TeamSizeControl(): any;
    NewTeammate(member: any): any;
    BroadcastDistress(member: any): any;
    OnLostTeammate(member: any): any;
    CanAttack(): boolean;
    CenterLeader(): any;
    GetFormationPositions(): any;
    GiveOrders(order: any, num: any): any;
    GiveOrdersToAllWithOrder(order: any, oldorder: any): any;
    AllInState(state: any): any;
    IsTeamEmpty(): boolean;
    SetNewThreat(threat: any): any;
    GetTheta(dt: any): any;
    SetAttackGrpSize(val: any): any;
    NumberToAttack(): any;
    ManageChase(dt: any): any;
    ValidateTeam(): any;
    OnUpdate(dt: any): any;
  }

  interface Teleporter {
    inst: any;
    targetTeleporter: any;
    onActivate: any;
    onActivateByOther: any;
    offset: number;
    enabled: boolean;
    numteleporting: number;
    teleportees: any;
    saveenabled: boolean;
    travelcameratime: number;
    travelarrivetime: number;
    _onremoveteleportee: any;
    OnRemoveFromEntity(): any;
    IsActive(): boolean;
    IsBusy(): boolean;
    IsTargetBusy(): boolean;
    RegisterTeleportee(doer: any): any;
    UnregisterTeleportee(doer: any): any;
    Activate(doer: any): any;
    Teleport(obj: any): any;
    PushDoneTeleporting(obj: any): any;
    ReceiveItem(item: any): any;
    ReceivePlayer(doer: any): any;
    Target(otherTeleporter: any): any;
    SetEnabled(enabled: any): any;
    OnSave(): any;
    LoadPostPass(newents: any, savedata: any): any;
    GetDebugString(): any;
  }

  interface Temperature {
    inst: any;
    settemp: any;
    current: any;
    maxtemp: any;
    mintemp: any;
    overheattemp: any;
    hurtrate: any;
    inherentinsulation: number;
    inherentsummerinsulation: number;
    shelterinsulation: any;
    bellytemperaturedelta: any;
    bellytime: any;
    bellytask: any;
    ignoreheatertags: any;
    usespawnlight: any;
    maxmoisturepenalty: any;
    totalmodifiers: number;
    externalheaterpower: number;
    delta: number;
    rate: number;
    sheltered: boolean;
    overheathurtrate: any;
    last: any;
    m: any;
    winterInsulation: any;
    summerInsulation: any;
    ambient_temperature: any;
    owner: any;
    SetFreezingHurtRate(rate: any): any;
    SetOverheatHurtRate(rate: any): any;
    DoDelta(delta: any): any;
    SetTemperatureInBelly(delta: any, duration: any): any;
    OnRemoveFromEntity(): any;
    GetCurrent(): any;
    GetMax(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    IgnoreTags(): any;
    SetTemp(temp: any): any;
    SetTemperature(value: any): any;
    GetDebugString(): any;
    IsFreezing(): boolean;
    IsOverheating(): boolean;
    SetModifier(name: any, value: any): any;
    RemoveModifier(name: any): any;
    GetInsulation(): any;
    GetMoisturePenalty(): any;
    OnUpdate(dt: any, applyhealthdelta: any): any;
  }

  interface Terraformer {
    inst: any;
    world: any;
    map: any;
    original_tile_type: any;
    x: any;
    y: any;
    Terraform(pt: any, spawnturf: any): any;
  }

  interface Thief {
    inst: any;
    stolenitems: any;
    onstolen: any;
    SetOnStolenFn(fn: any): any;
    StealItem(victim: any, itemtosteal: any, attack: any): any;
  }

  interface Timer {
    inst: any;
    timers: any;
    str: string;
    data: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    TimerExists(name: any): any;
    StartTimer(
      name: any,
      time: any,
      paused: any,
      initialtime_override: any
    ): any;
    StopTimer(name: any): any;
    IsPaused(name: any): boolean;
    PauseTimer(name: any): any;
    ResumeTimer(name: any): any;
    GetTimeLeft(name: any): any;
    SetTimeLeft(name: any, time: any): any;
    GetTimeElapsed(name: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LongUpdate(dt: any): any;
  }

  interface Tool {
    inst: any;
    actions: any;
    OnRemoveFromEntity(): any;
    GetEffectiveness(action: any): any;
    SetAction(action: any, effectiveness: any): any;
    CanDoAction(action: any): boolean;
  }

  interface TouchStoneTracker {
    inst: any;
    used: any;
    used_foreign: any;
    str: string;
    data: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    IsUsed(touchstone: any): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Tradable {
    inst: any;
    goldvalue: number;
  }

  interface Trader {
    inst: any;
    enabled: boolean;
    deleteitemonaccept: boolean;
    acceptnontradable: boolean;
    test: any;
    abletoaccepttest: any;
    act: any;
    OnRemoveFromEntity(): any;
    IsTryingToTradeWithMe(inst: any): boolean;
    Enable(): any;
    Disable(): any;
    SetAcceptTest(fn: any): any;
    SetAbleToAcceptTest(fn: any): any;
    AbleToAccept(item: any, giver: any): any;
    WantsToAccept(item: any, giver: any): any;
    AcceptGift(giver: any, item: any, count: any): any;
    GetDebugString(): any;
  }

  interface Transformer {
    inst: any;
    transformPrefab: string;
    objectData: any;
    transformEvent: any;
    transformEventTarget: any;
    revertEvent: any;
    revertEventTarget: any;
    onTransform: any;
    onRevert: any;
    transformed: boolean;
    transformOffScreen: boolean;
    queuedTransform: boolean;
    queuedRevert: boolean;
    c_data: any;
    p_data: any;
    onLoadCheck: any;
    sleepTransformEvent: any;
    sleepRevertEvent: any;
    data: any;
    refs: any;
    GetDebugString(): any;
    SetOnTransformFn(fn: any): any;
    SetOnRevertFn(fn: any): any;
    SetObjectData(data: any): any;
    GetObjectData(): any;
    RemoveSleepEvents(): any;
    SetRevertEvent(event: any, target: any): any;
    SetTransformEvent(event: any, target: any): any;
    SetRevertWorldEvent(event: any, value: any): any;
    SetTransformWorldEvent(event: any, value: any): any;
    SetOnLoadCheck(check: any): any;
    Transform(): any;
    TransformOnSleep(): any;
    StartTransform(): any;
    Revert(): any;
    RevertOnSleep(): any;
    StartRevert(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(ents: any, data: any): any;
  }

  interface TransparentOnSanity {
    inst: any;
    offset: any;
    osc_speed: any;
    osc_amp: number;
    alpha: number;
    most_alpha: number;
    target_alpha: any;
    player: any;
    OnUpdate(dt: any): any;
  }

  interface Trap {
    inst: any;
    bait: any;
    issprung: boolean;
    isset: boolean;
    range: number;
    targettag: string;
    checkperiod: number;
    onharvest: any;
    onbaited: any;
    onspring: any;
    task: any;
    str: any;
    souls: any;
    lootprefabs: any;
    numsouls: any;
    starvednumsouls: any;
    target: any;
    perishTime: any;
    starvedlootprefabs: any;
    OnRemoveFromEntity(): any;
    SetOnHarvestFn(fn: any): any;
    SetOnSpringFn(fn: any): any;
    GetDebugString(): any;
    SetOnBaitedFn(fn: any): any;
    IsFree(): boolean;
    IsBaited(): boolean;
    Reset(sprung: any): any;
    Set(): any;
    StopUpdating(): any;
    StartUpdate(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    OnTrappedStarve(): any;
    StartStarvation(): any;
    StopStarvation(): any;
    DoSpring(): any;
    IsSprung(): boolean;
    Harvest(doer: any): any;
    RemoveBait(): any;
    SetBait(bait: any): any;
    BaitTaken(eater: any): any;
    AcceptingBait(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    LoadPostPass(newents: any, savedata: any): any;
  }

  interface Tributable {
    inst: any;
    currenttributevalue: number;
    rewardattributevalue: number;
    numrewardsgiven: number;
    timegiventribute: any;
    decaycurrenttributetime: number;
    data: any;
    GetDebugString(): any;
    HasPendingReward(): boolean;
    OnGivenReward(): any;
    OnAccept(value: any, tributer: any): any;
    OnRefuse(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface UIAnim {
    inst: any;
    val: any;
    tint_t: number;
    tint_start: any;
    tint_dest: any;
    tint_duration: any;
    tint_whendone: any;
    sx: any;
    sy: any;
    sz: any;
    scale_t: number;
    scale_start: any;
    scale_dest: any;
    scale_duration: any;
    scale_whendone: any;
    pos_t: number;
    pos_whendone: any;
    pos_start: any;
    pos_dest: any;
    pos_duration: any;
    rot_t: number;
    rot_whendone: any;
    rot_start: any;
    rot_dest: any;
    rot_duration: any;
    rot_infinite: boolean;
    done: boolean;
    FinishCurrentTint(): any;
    TintTo(start: any, dest: any, duration: any, whendone: any): any;
    FinishCurrentScale(): any;
    ScaleTo(start: any, dest: any, duration: any, whendone: any): any;
    CancelMoveTo(run_complete_fn: any): any;
    MoveTo(start: any, dest: any, duration: any, whendone: any): any;
    CancelRotateTo(run_complete_fn: any): any;
    RotateTo(
      start: any,
      dest: any,
      duration: any,
      whendone: any,
      infinite: any
    ): any;
    OnWallUpdate(dt: any): any;
  }

  interface UnevenGround {
    inst: any;
    enabled: boolean;
    radius: number;
    detectradius: number;
    detectperiod: number;
    detecttask: any;
    Start(): any;
    Stop(): any;
    Enable(): any;
    Disable(): any;
    OnEntityWake(): any;
  }

  interface UniqueID {
    inst: any;
    id: any;
    task: any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface UniquePrefabIDs {
    inst: any;
    topprefabids: any;
    s: string;
    GetNextID(prefabname: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Unwrappable {
    inst: any;
    itemdata: any;
    canbeunwrapped: boolean;
    onwrappedfn: any;
    onunwrappedfn: any;
    origin: any;
    pos: any;
    SetOnWrappedFn(fn: any): any;
    SetOnUnwrappedFn(fn: any): any;
    WrapItems(items: any, doer: any): any;
    Unwrap(doer: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface UpdateLooper {
    inst: any;
    onupdatefns: any;
    longupdatefns: any;
    OnRemoveFromEntity(): any;
    AddOnUpdateFn(fn: any): any;
    RemoveOnUpdateFn(fn: any): any;
    AddLongUpdateFn(fn: any): any;
    RemoveLongUpdateFn(fn: any): any;
    OnUpdate(dt: any): any;
    LongUpdate(dt: any): any;
  }

  interface Upgradeable {
    inst: any;
    onstageadvancefn: any;
    onupgradefn: any;
    upgradetype: any;
    stage: number;
    numstages: number;
    upgradesperstage: number;
    numupgrades: number;
    data: any;
    SetStage(num: any): any;
    AdvanceStage(): any;
    CanUpgrade(): boolean;
    Upgrade(obj: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Upgrader {
    inst: any;
    upgradetype: any;
    upgradevalue: number;
    CanUpgrade(target: any, doer: any): boolean;
  }

  interface UseableItem {
    inst: any;
    onusefn: any;
    onstopusefn: any;
    inuse: boolean;
    stopuseevents: any;
    OnRemoveFromEntity(): any;
    SetOnUseFn(fn: any): any;
    SetOnStopUseFn(fn: any): any;
    CanInteract(): boolean;
    StartUsingItem(): any;
    StopUsingItem(): any;
  }

  interface Vase {
    inst: any;
    deleteitemonaccept: boolean;
    enabled: boolean;
    OnRemoveFromEntity(): any;
    Enable(): any;
    Disable(): any;
    Decorate(giver: any, item: any): any;
    GetDebugString(): any;
  }

  interface WalkablePlatform {
    inst: any;
    player_zoomed_out: boolean;
    player_zoom_task: any;
    player_zooms: any;
    previous_objects_on_platform: any;
    new_objects_on_platform: any;
    platform_radius: number;
    world_position_x: any;
    world_position_y: any;
    world_position_z: any;
    entities: any;
    filtered_entities: any;
    embark_distance_from_edge: number;
    embarkable_radius: any;
    my_x: any;
    my_y: any;
    my_z: any;
    embarkable_x: any;
    embarkable_y: any;
    embarkable_z: any;
    embark_x: any;
    embark_z: any;
    is_master_sim: any;
    delta_position_x: any;
    delta_position_z: any;
    should_update_pos: any;
    previous_position_x: any;
    previous_position_y: any;
    previous_position_z: any;
    platform_x: any;
    platform_z: any;
    bias: number;
    platform_radius_sq: any;
    OnUpdate(dt: any): any;
    CanBeWalkedOn(): boolean;
    DestroyObjectsOnPlatform(): any;
    GetEntitiesOnPlatform(must_have_tags: any, ignore_tags: any): any;
    GetEmbarkPosition(embarker_x: any, embarker_z: any): any;
    UpdatePositions(): any;
    CollectEntitiesOnPlatform(check_previous_objects: any): any;
    TriggerEvents(): any;
  }

  interface WalkablePlatformManager {
    inst: any;
    walkable_platforms: any;
    AddPlatform(platform: any): any;
    RemovePlatform(platform: any): any;
    PostUpdate(dt: any): any;
  }

  interface WalkingPlank {
    inst: any;
    doer: any;
    OnRemoveFromEntity(): any;
    Extend(): any;
    Retract(): any;
    MountPlank(doer: any): any;
    StopMounting(): any;
    AbandonShip(doer: any): any;
  }

  interface WalkingPlankUser {
    inst: any;
    current_plank: any;
    SetCurrentPlank(plank: any): any;
    Dismount(): any;
  }

  interface Wardrobe {
    inst: any;
    changers: any;
    enabled: boolean;
    canuseaction: boolean;
    canbeshared: any;
    canbedressed: any;
    range: number;
    changeindelay: number;
    onchangeinfn: any;
    ondressupfn: any;
    onopenfn: any;
    onclosefn: any;
    onclosewardrobe: any;
    toend: any;
    SetCanUseAction(canuseaction: any): any;
    SetCanBeDressed(canbedressed: any): any;
    Enable(enable: any): any;
    SetCanBeShared(canbeshared: any): any;
    SetRange(range: any): any;
    SetChangeInDelay(delay: any): any;
    CanBeginChanging(doer: any): boolean;
    BeginChanging(doer: any): any;
    EndChanging(doer: any): any;
    EndAllChanging(): any;
    ActivateChanging(doer: any, skins: any): any;
    ApplyTargetSkins(target: any, doer: any, skins: any): any;
    ApplySkins(doer: any, diff: any): any;
    OnUpdate(dt: any): any;
    OnRemoveFromEntity(): any;
  }

  interface WaterPhysics {
    inst: any;
    restitution: number;
  }

  interface WaterProofer {
    inst: any;
    effectiveness: number;
    OnRemoveFromEntity(): any;
    GetEffectiveness(): any;
    SetEffectiveness(val: any): any;
  }

  interface WateryProtection {
    inst: any;
    witherprotectiontime: number;
    temperaturereduction: number;
    addcoldness: number;
    addwetness: number;
    extinguish: boolean;
    extinguishheatpercent: number;
    ignoretags: any;
    ents: any;
    x: any;
    y: any;
    z: any;
    AddIgnoreTag(tag: any): any;
    SpreadProtectionAtPoint(
      x: any,
      y: any,
      z: any,
      dist: any,
      noextinguish: any
    ): any;
    SpreadProtection(inst: any, dist: any, noextinguish: any): any;
  }

  interface WaveManager {
    inst: any;
    shimmer: any;
    ripple_speed: number;
    ripple_per_sec: number;
    ripple_idle_time: number;
    ripple_spawn_rate: number;
    shimmer_per_sec_mod: number;
    ripple_per_sec_mod: number;
    camera_per_sec_mod: number;
    player: any;
    world: any;
    map: any;
    ocean: any;
    px: any;
    py: any;
    pz: any;
    mult: any;
    radius: any;
    OnUpdate(dt: any): any;
    SetWaveSettings(
      shimmer_per_sec: any,
      ripple_per_sec: any,
      camera_per_sec: any
    ): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Weapon {
    inst: any;
    damage: number;
    attackrange: any;
    hitrange: any;
    onattack: any;
    onprojectilelaunch: any;
    projectile: any;
    stimuli: string;
    overridestimulifn: any;
    OnRemoveFromEntity(): any;
    SetDamage(dmg: any): any;
    SetRange(attack: any, hit: any): any;
    SetOnAttack(fn: any): any;
    SetOnProjectileLaunch(fn: any): any;
    SetProjectile(projectile: any): any;
    SetElectric(): any;
    SetOverrideStimuliFn(fn: any): any;
    CanRangedAttack(): boolean;
    SetAttackCallback(fn: any): any;
    OnAttack(attacker: any, target: any, projectile: any): any;
    LaunchProjectile(attacker: any, target: any): any;
  }

  interface WereBeast {
    inst: any;
    onsetwerefn: any;
    onsetnormalfn: any;
    weretime: any;
    triggerlimit: any;
    triggeramount: any;
    _task: any;
    _reverttask: any;
    OnRemoveFromEntity(): any;
    SetOnWereFn(fn: any): any;
    SetOnNormalFn(fn: any): any;
    SetTriggerLimit(limit: any): any;
    TriggerDelta(amount: any): any;
    ResetTriggers(): any;
    SetWere(time: any): any;
    SetNormal(): any;
    IsInWereState(): boolean;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Winter_TreeSeed {
    inst: any;
    winter_tree: string;
    SetTree(tree: any): any;
  }

  interface WinterTreeGiftable {
    inst: any;
    previousgiftday: any;
    GetDaysSinceLastGift(): any;
    OnGiftGiven(): any;
    OnSave(): any;
    OnLoad(data: any): any;
  }

  interface Wisecracker {
    inst: any;
    time_in_lightstate: number;
    inlight: boolean;
    foodbuffname: any;
    foodbuffpriority: any;
    nightvision: any;
    is_talker_busy: boolean;
    OnUpdate(dt: any): any;
  }

  interface Witherable {
    inst: any;
    enabled: boolean;
    withered: boolean;
    wither_temp: any;
    rejuvenate_temp: any;
    delay_to_time: any;
    task_to_time: any;
    task: any;
    restore_cycles: any;
    is_watching_rain: any;
    protect_to_time: any;
    protect_task: any;
    t: any;
    data: any;
    s: any;
    OnRemoveFromEntity(): any;
    Enable(enable: any): any;
    IsWithered(): boolean;
    IsProtected(): boolean;
    CanWither(): boolean;
    CanRejuvenate(): boolean;
    ForceWither(): any;
    ForceRejuvenate(): any;
    DelayWither(delay: any): any;
    DelayRejuvenate(delay: any): any;
    Protect(duration: any): any;
    Start(): any;
    Stop(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface Workable {
    inst: any;
    onwork: any;
    onfinish: any;
    workleft: number;
    maxwork: any;
    action: any;
    savestate: boolean;
    workable: boolean;
    lastworktime: any;
    OnRemoveFromEntity(): any;
    GetDebugString(): any;
    SetWorkAction(act: any): any;
    GetWorkAction(): any;
    Destroy(destroyer: any): any;
    SetWorkable(able: any): any;
    SetWorkLeft(work: any): any;
    CanBeWorked(): boolean;
    SetOnLoadFn(fn: any): any;
    SetMaxWork(work: any): any;
    OnSave(): any;
    OnLoad(data: any): any;
    WorkedBy(worker: any, numworks: any): any;
    SetOnWorkCallback(fn: any): any;
    SetOnFinishCallback(fn: any): any;
  }

  interface Worker {
    inst: any;
    actions: any;
    GetEffectiveness(action: any): any;
    SetAction(action: any, effectiveness: any): any;
    CanDoAction(action: any): boolean;
  }

  interface WorkMultiplier {
    inst: any;
    actions: any;
    GetMultiplier(action: any): any;
    AddMultiplier(action: any, multiplier: any, source: any): any;
    RemoveMultiplier(action: any, source: any): any;
  }

  interface WorldDeciduousTreeUpdater {
    inst: any;
    update: any;
    updatetask: any;
  }

  interface WorldMigrator {
    inst: any;
    auto: boolean;
    enabled: boolean;
    _status: any;
    id: any;
    linkedWorld: any;
    receivedPortal: any;
    SetDestinationWorld(world: any, permanent: any): any;
    SetEnabled(t: any): any;
    SetReceivedPortal(fromworld: any, fromportal: any): any;
    GetStatusString(): any;
    ValidateAndPushEvents(): any;
    IsBound(): boolean;
    SetID(id: any): any;
    IsDestinationForPortal(otherWorld: any, otherPortal: any): boolean;
    IsAvailableForLinking(): boolean;
    IsLinked(): boolean;
    IsActive(): boolean;
    IsFull(): boolean;
    Activate(doer: any): any;
    ActivatedByOther(): any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetDebugString(): any;
  }

  interface WorldOverseer {
    inst: any;
    data: any;
    _seenplayers: any;
    _cycles: any;
    _daytime: any;
    _v2_seenplayers: any;
    last_heartbeat_poll_time: any;
    heartbeat_poll_counter: number;
    playerstats: any;
    time: any;
    current_skins: any;
    items: any;
    toremove: boolean;
    secondsplayed: number;
    total_worn_items: any;
    totaltime: number;
    total_crafted_items: any;
    results: any;
    toRemove: any;
    sendstats: any;
    jsonstats: any;
    age: any;
    worldAge: any;
    item: any;
    found: any;
    hosting: any;
    clients: any;
    clanid: any;
    time_now: any;
    client_table: any;
    current_players: any;
    resumed_from_suspend: any;
    OnCyclesChanged(cycles: any): any;
    OnClockTick(data: any): any;
    RecordPlayerJoined(player: any): any;
    RecordPlayerLeft(player: any): any;
    CalcIndividualPlayerStats(player: any): any;
    CalcPlayerStats(): any;
    DumpIndividualPlayerStats(stat: any, event: any): any;
    DumpPlayerStats(): any;
    OnPlayerDeath(player: any, data: any): any;
    OnPlayerChangedSkin(player: any, data: any): any;
    OnItemCrafted(player: any, data: any): any;
    OnEquipSkinnedItem(player: any, data: any): any;
    OnUnequipSkinnedItem(player: any, data: any): any;
    GetWorldRecipeItems(): any;
    DumpSessionStats(): any;
    OnPlayerJoined(src: any, player: any): any;
    OnPlayerLeft(src: any, player: any): any;
    Heartbeat(): any;
    HeartbeatPoll(): any;
    QuitAll(): any;
    SendClientJoin(userid: any, data: any): any;
    SendClientHeartBeat(userid: any, data: any): any;
    SendClientQuit(userid: any, data: any): any;
  }

  interface WorldWind {
    inst: any;
    velocity: number;
    angle: any;
    timeToWindChange: number;
    Start(): any;
    Stop(): any;
    GetWindAngle(): any;
    GetWindVelocity(): any;
    GetDebugString(): any;
    OnUpdate(dt: any): any;
  }

  interface Writeable {
    inst: any;
    text: any;
    writer: any;
    screen: any;
    onclosepopups: any;
    generatorfn: any;
    data: any;
    OnSave(): any;
    OnLoad(data: any): any;
    GetText(viewer: any): any;
    SetText(text: any): any;
    BeginWriting(doer: any): any;
    IsWritten(): boolean;
    IsBeingWritten(): boolean;
    Write(doer: any, text: any): any;
    EndWriting(): any;
    OnUpdate(dt: any): any;
    OnRemoveFromEntity(): any;
  }
}

declare interface Component {
  activatable: Component.Activatable;
  age: Component.Age;
  amorphous: Component.Amorphous;
  amphibiouscreature: Component.AmphibiousCreature;
  anchor: Component.Anchor;
  aoetargeting: Component.AOETargeting;
  areatrigger: Component.AreaTrigger;
  areaunlock: Component.AreaUnlock;
  areaaware: Component.AreaAware;
  armor: Component.Armor;
  attunable: Component.Attunable;
  attuner: Component.Attuner;
  aura: Component.Aura;
  bait: Component.Bait;
  balloonmaker: Component.BalloonMaker;
  bathbomb: Component.BathBomb;
  bathbombable: Component.BathBombable;
  batspawner: Component.BatSpawner;
  beard: Component.Beard;
  beaverness: Component.Beaverness;
  beefalometrics: Component.BeefaloMetrics;
  birdattractor: Component.BirdAttractor;
  blinkstaff: Component.BlinkStaff;
  bloomer: Component.Bloomer;
  blowinwind: Component.BlowInWind;
  boatai: Component.BoatAI;
  boatleak: Component.BoatLeak;
  boatpatch: Component.BoatPatch;
  boatphysics: Component.BoatPhysics;
  boattrail: Component.BoatTrail;
  boattrailmover: Component.BoatTrailMover;
  book: Component.Book;
  brush: Component.Brush;
  brushable: Component.Brushable;
  builder: Component.Builder;
  bundlemaker: Component.BundleMaker;
  bundler: Component.Bundler;
  burnable: Component.Burnable;
  carefulwalker: Component.CarefulWalker;
  catcher: Component.Catcher;
  channelable: Component.Channelable;
  childspawner: Component.ChildSpawner;
  circler: Component.Circler;
  circuitnode: Component.CircuitNode;
  colouradder: Component.ColourAdder;
  colourtweener: Component.ColourTweener;
  combat: Component.Combat;
  commander: Component.Commander;
  complexprojectile: Component.ComplexProjectile;
  constructionbuilder: Component.ConstructionBuilder;
  constructionbuilderuidata: Component.ConstructionBuilderUIData;
  constructionplans: Component.ConstructionPlans;
  constructionsite: Component.ConstructionSite;
  container: Component.Container;
  cookable: Component.Cookable;
  cooker: Component.Cooker;
  cooldown: Component.Cooldown;
  craftingstation: Component.CraftingStation;
  crittertraits: Component.CritterTraits;
  crop: Component.Crop;
  damagereflect: Component.DamageReflect;
  damagetracker: Component.DamageTracker;
  debuff: Component.Debuff;
  debuffable: Component.Debuffable;
  debugger: Component.Debugger;
  decay: Component.Decay;
  deciduoustreeupdater: Component.DeciduousTreeUpdater;
  deerherding: Component.DeerHerding;
  deployable: Component.Deployable;
  deployhelper: Component.DeployHelper;
  digester: Component.Digester;
  disappears: Component.Disappears;
  discoverable: Component.Discoverable;
  diseaseable: Component.Diseaseable;
  distancetracker: Component.DistanceTracker;
  domesticatable: Component.Domesticatable;
  drawable: Component.Drawable;
  drawingtool: Component.DrawingTool;
  drownable: Component.Drownable;
  dryable: Component.Dryable;
  dryer: Component.Dryer;
  eater: Component.Eater;
  edible: Component.Edible;
  electricattacks: Component.ElectricAttacks;
  embarker: Component.Embarker;
  emitter: Component.Emitter;
  entitytracker: Component.EntityTracker;
  epicscare: Component.EpicScare;
  equippable: Component.Equippable;
  explosive: Component.Explosive;
  explosiveresist: Component.ExplosiveResist;
  fader: Component.Fader;
  fan: Component.Fan;
  fertilizer: Component.Fertilizer;
  fillable: Component.Fillable;
  finiteuses: Component.FiniteUses;
  firebug: Component.Firebug;
  firedetector: Component.FireDetector;
  firefx: Component.FireFX;
  fishable: Component.Fishable;
  fishingnet: Component.FishingNet;
  fishingnetvisualizer: Component.FishingNetVisualizer;
  fishingrod: Component.FishingRod;
  fishschool: Component.FishSchool;
  floater: Component.Floater;
  focalpoint: Component.FocalPoint;
  follower: Component.Follower;
  foodmemory: Component.FoodMemory;
  freezable: Component.Freezable;
  frostybreather: Component.FrostyBreather;
  fuel: Component.Fuel;
  fueled: Component.Fueled;
  fuelmaster: Component.FuelMaster;
  giftreceiver: Component.GiftReceiver;
  grogginess: Component.Grogginess;
  groundpounder: Component.GroundPounder;
  groundshadowhandler: Component.GroundShadowHandler;
  grouptargeter: Component.GroupTargeter;
  growable: Component.Growable;
  grower: Component.Grower;
  grue: Component.Grue;
  guardian: Component.Guardian;
  harvestable: Component.Harvestable;
  hatchable: Component.Hatchable;
  hauntable: Component.Hauntable;
  healer: Component.Healer;
  health: Component.Health;
  healthbar: Component.HealthBar;
  healthsyncer: Component.HealthSyncer;
  healthtrigger: Component.HealthTrigger;
  heater: Component.Heater;
  heavyobstaclephysics: Component.HeavyObstaclePhysics;
  herd: Component.Herd;
  herdmember: Component.HerdMember;
  hideout: Component.Hideout;
  highlight: Component.Highlight;
  homeseeker: Component.HomeSeeker;
  hull: Component.Hull;
  hullhealth: Component.HullHealth;
  hunger: Component.Hunger;
  incrementalproducer: Component.IncrementalProducer;
  inspectable: Component.Inspectable;
  instrument: Component.Instrument;
  insulator: Component.Insulator;
  inventory: Component.Inventory;
  inventoryitem: Component.InventoryItem;
  inventoryitemmoisture: Component.InventoryItemMoisture;
  key: Component.Key;
  klaussackkey: Component.KlausSackKey;
  klaussacklock: Component.KlausSackLock;
  knownlocations: Component.KnownLocations;
  lavaarenamobtracker: Component.LavaArenaMobTracker;
  leader: Component.Leader;
  lighter: Component.Lighter;
  lighttweener: Component.LightTweener;
  lock: Component.Lock;
  dest: Component.Dest;
  locomotor: Component.LocoMotor;
  lootdropper: Component.LootDropper;
  machine: Component.Machine;
  madsciencelab: Component.MadScienceLab;
  map: Component.Map;
  maprecorder: Component.MapRecorder;
  maprevealable: Component.MapRevealable;
  maprevealer: Component.MapRevealer;
  mast: Component.Mast;
  maxhealer: Component.MaxHealer;
  maxlightspawner: Component.MaxLightSpawner;
  maxwelltalker: Component.MaxwellTalker;
  meteorshower: Component.MeteorShower;
  mine: Component.Mine;
  minigame: Component.Minigame;
  minigameparticipator: Component.MinigameParticipator;
  minigamespectator: Component.MinigameSpectator;
  minionspawner: Component.MinionSpawner;
  moisture: Component.Moisture;
  mood: Component.Mood;
  moonbeastspawner: Component.MoonBeastSpawner;
  moonrelic: Component.MoonRelic;
  moontrader: Component.MoonTrader;
  named: Component.Named;
  nis: Component.NIS;
  oar: Component.Oar;
  oasis: Component.Oasis;
  objectspawner: Component.ObjectSpawner;
  occupiable: Component.Occupiable;
  occupier: Component.Occupier;
  ocean: Component.Ocean;
  oceancolor: Component.OceanColor;
  periodicspawner: Component.PeriodicSpawner;
  perishable: Component.Perishable;
  pethealthbar: Component.PetHealthBar;
  petleash: Component.PetLeash;
  petrifiable: Component.Petrifiable;
  pickable: Component.Pickable;
  pinnable: Component.Pinnable;
  placer: Component.Placer;
  plantable: Component.Plantable;
  plantregrowth: Component.PlantRegrowth;
  playeractionpicker: Component.PlayerActionPicker;
  playeravatardata: Component.PlayerAvatarData;
  playercontroller: Component.PlayerController;
  playerhearing: Component.PlayerHearing;
  playerinspectable: Component.PlayerInspectable;
  playerlightningtarget: Component.PlayerLightningTarget;
  playermetrics: Component.PlayerMetrics;
  playerprox: Component.PlayerProx;
  playertargetindicator: Component.PlayerTargetIndicator;
  playervision: Component.PlayerVision;
  playervoter: Component.PlayerVoter;
  pollinator: Component.Pollinator;
  portablecookware: Component.PortableCookware;
  possessedaxe: Component.PossessedAxe;
  projectile: Component.Projectile;
  propagator: Component.Propagator;
  prototyper: Component.Prototyper;
  rampingspawner: Component.RampingSpawner;
  reader: Component.Reader;
  recipestockpile: Component.RecipeStockpile;
  repairable: Component.Repairable;
  repairer: Component.Repairer;
  researchpointconverter: Component.ResearchPointConverter;
  resistance: Component.Resistance;
  reticule: Component.Reticule;
  revivablecorpse: Component.RevivableCorpse;
  rideable: Component.Rideable;
  rider: Component.Rider;
  saddler: Component.Saddler;
  saltlicker: Component.SaltLicker;
  sanity: Component.Sanity;
  sanityaura: Component.SanityAura;
  savedrotation: Component.SavedRotation;
  savedscale: Component.SavedScale;
  scaler: Component.Scaler;
  scenariorunner: Component.ScenarioRunner;
  selfstacker: Component.SelfStacker;
  sentientaxe: Component.SentientAxe;
  sewing: Component.Sewing;
  shadowsubmissive: Component.ShadowSubmissive;
  shatterfx: Component.ShatterFX;
  shaver: Component.Shaver;
  shedder: Component.Shedder;
  shelf: Component.Shelf;
  sheltered: Component.Sheltered;
  shop: Component.Shop;
  sinkholespawner: Component.SinkholeSpawner;
  sizetweener: Component.SizeTweener;
  skinner: Component.Skinner;
  sleeper: Component.Sleeper;
  sleepingbag: Component.SleepingBag;
  smotherer: Component.Smotherer;
  soul: Component.Soul;
  souleater: Component.SoulEater;
  spawner: Component.Spawner;
  spawnfader: Component.SpawnFader;
  spectatorcorpse: Component.SpectatorCorpse;
  spell: Component.Spell;
  spellcaster: Component.SpellCaster;
  spooked: Component.Spooked;
  squadmember: Component.SquadMember;
  stackable: Component.Stackable;
  steeringwheel: Component.SteeringWheel;
  steeringwheeluser: Component.SteeringWheelUser;
  stewer: Component.Stewer;
  stormwatcher: Component.StormWatcher;
  stretcher: Component.Stretcher;
  stunnable: Component.Stunnable;
  talkable: Component.Talkable;
  talker: Component.Talker;
  teacher: Component.Teacher;
  teamattacker: Component.TeamAttacker;
  teamleader: Component.TeamLeader;
  teleporter: Component.Teleporter;
  temperature: Component.Temperature;
  terraformer: Component.Terraformer;
  thief: Component.Thief;
  timer: Component.Timer;
  tool: Component.Tool;
  touchstonetracker: Component.TouchStoneTracker;
  tradable: Component.Tradable;
  trader: Component.Trader;
  transformer: Component.Transformer;
  transparentonsanity: Component.TransparentOnSanity;
  trap: Component.Trap;
  tributable: Component.Tributable;
  uianim: Component.UIAnim;
  unevenground: Component.UnevenGround;
  uniqueid: Component.UniqueID;
  uniqueprefabids: Component.UniquePrefabIDs;
  unwrappable: Component.Unwrappable;
  updatelooper: Component.UpdateLooper;
  upgradeable: Component.Upgradeable;
  upgrader: Component.Upgrader;
  useableitem: Component.UseableItem;
  vase: Component.Vase;
  walkableplatform: Component.WalkablePlatform;
  walkableplatformmanager: Component.WalkablePlatformManager;
  walkingplank: Component.WalkingPlank;
  walkingplankuser: Component.WalkingPlankUser;
  wardrobe: Component.Wardrobe;
  waterphysics: Component.WaterPhysics;
  waterproofer: Component.WaterProofer;
  wateryprotection: Component.WateryProtection;
  wavemanager: Component.WaveManager;
  weapon: Component.Weapon;
  werebeast: Component.WereBeast;
  winter_treeseed: Component.Winter_TreeSeed;
  wintertreegiftable: Component.WinterTreeGiftable;
  wisecracker: Component.Wisecracker;
  witherable: Component.Witherable;
  workable: Component.Workable;
  worker: Component.Worker;
  workmultiplier: Component.WorkMultiplier;
  worlddeciduoustreeupdater: Component.WorldDeciduousTreeUpdater;
  worldmigrator: Component.WorldMigrator;
  worldoverseer: Component.WorldOverseer;
  worldwind: Component.WorldWind;
  writeable: Component.Writeable;
}
