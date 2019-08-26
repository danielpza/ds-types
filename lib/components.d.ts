export namespace Component {
  interface Activatable {
    inst: any;
    OnActivate: any;
    inactive: boolean;
    standingaction: boolean;
    quickaction: boolean;
    CanActivate(doer: any): boolean;
    DoActivate(doer: any): any;
    OnRemoveFromEntity(): any;
  }

  interface Age {
    inst: any;
    saved_age: number;
    paused_time: number;
    spawntime: any;
    last_pause_time: any;
    CancelPeriodicSync(): any;
    GetAge(): any;
    GetAgeInDays(): any;
    GetDebugString(): any;
    GetDisplayAgeInDays(): any;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    PauseAging(): any;
    RestartPeriodicSync(): any;
    ResumeAging(): any;
  }

  interface Amorphous {
    inst: any;
    forms: any;
    currentform: any;
    form: any;
    numforms: any;
    AddForm(form: any): any;
    CheckForMorph(): any;
    FindForm(name: any): any;
    GetCurrentForm(): any;
    LoadPostPass(): any;
    MorphToForm(form: any, instant: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
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
    x: any;
    y: any;
    z: any;
    is_on_land: any;
    enterwaterfn: any;
    exitwaterfn: any;
    OnEnterOcean(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnExitOcean(): any;
    OnUpdate(dt: any): any;
    SetBanks(land: any, ocean: any): any;
    SetEnterWaterFn(fn: any): any;
    SetExitWaterFn(fn: any): any;
    SetOnTileChangeFn(fn: any): any;
    SetOnWaterChangeFn(fn: any): any;
    ShouldTransition(x: any, z: any): any;
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
    tile: any;
    depthcategory: any;
    boat: any;
    is_anchor_transitioning: boolean;
    rasing: boolean;
    speed: any;
    AddAnchorRaiser(doer: any): any;
    AnchorLowered(): any;
    AnchorRaised(): any;
    GetBoat(): any;
    GetCurrentDepth(): any;
    GetDrag(): any;
    GetVelocityMod(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    RemoveAnchorRaiser(doer: any): any;
    SetIsAnchorLowered(is_lowered: any): any;
    SetVelocityMod(set: any): any;
    StartLoweringAnchor(): any;
    StartRaisingAnchor(): any;
  }

  interface AOETargeting {
    inst: any;
    reticule: any;
    targetprefab: any;
    alwaysvalid: boolean;
    range: number;
    enabled: any;
    GetRange(): any;
    IsEnabled(): boolean;
    SetAlwaysValid(val: any): any;
    SetEnabled(enabled: any): any;
    SetRange(range: any): any;
    SetTargetFX(prefab: any): any;
    StartTargeting(): any;
    StopTargeting(): any;
  }

  interface AreaTrigger {
    inst: any;
    stories: any;
    retune: any;
    CheckTrigger(area: any): any;
    DoOverride(overrides: any): any;
    RegisterTriggers(stories: any): any;
  }

  interface AreaUnlock {
    inst: any;
    stories: any;
    unlocked: any;
    CheckUnlock(area: any): any;
    GetUnlocked(): any;
    RegisterStory(story: any): any;
  }

  interface AreaAware {
    inst: any;
    current_area: any;
    current_area_data: any;
    lastpt: any;
    updatedistsq: number;
    x: any;
    z: any;
    y: any;
    node: any;
    s: any;
    checkpositiontask: any;
    CurrentlyInTag(tag: any): any;
    GetCurrentArea(): any;
    GetDebugString(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetUpdateDist(dist: any): any;
    StartCheckingPosition(checkinterval: any): any;
    UpdatePosition(x: any, y: any, z: any): any;
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
    AddWeakness(tag: any, bonus_damage: any): any;
    CanResist(attacker: any, weapon: any): boolean;
    GetAbsorption(attacker: any, weapon: any): any;
    GetBonusDamage(attacker: any, weapon: any): any;
    GetPercent(amount: any): any;
    InitCondition(amount: any, absorb_percent: any): any;
    InitIndestructible(absorb_percent: any): any;
    IsIndestructible(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    RemoveWeakness(tag: any): any;
    SetAbsorption(absorb_percent: any): any;
    SetCondition(amount: any): any;
    SetPercent(amount: any): any;
    SetTags(tags: any): any;
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
    success: any;
    reason: any;
    userids: any;
    available_players: any;
    str: string;
    CanAttune(player: any): boolean;
    GetAttunableTag(): any;
    GetDebugString(): any;
    IsAttuned(player: any): boolean;
    LinkToPlayer(player: any, isloading: any): any;
    OnLoad(data: any): any;
    OnRemoveEntity(): any;
    OnSave(): any;
    SetAttunableTag(tag: any): any;
    SetOnAttuneCostFn(fn: any): any;
    SetOnLinkFn(fn: any): any;
    SetOnUnlinkFn(fn: any): any;
    UnlinkFromPlayer(player: any, isloading: any): any;
  }

  interface Attuner {
    inst: any;
    ismastersim: any;
    attuned: any;
    str: string;
    GetAttunedTarget(tag: any): any;
    GetDebugString(): any;
    HasAttunement(tag: any): boolean;
    IsAttunedTo(target: any): boolean;
    RegisterAttunedSource(proxy: any): any;
    UnregisterAttunedSource(proxy: any): any;
  }

  interface Aura {
    inst: any;
    radius: number;
    tickperiod: number;
    active: boolean;
    applying: boolean;
    auratestfn: any;
    auraexcludetags: any;
    str: any;
    task: any;
    applied: any;
    Enable(val: any): any;
    GetDebugString(): any;
    OnTick(): any;
  }

  interface Bait {
    inst: any;
    trap: any;
    GetDebugString(): any;
    IsFree(): boolean;
    OnRemoveFromEntity(): any;
  }

  interface BalloonMaker {
    inst: any;
    balloon: any;
    MakeBalloon(x: any, y: any, z: any): any;
  }

  interface BathBomb {
    inst: any;
    ApplyBathBomb(bathbombable_target: any): any;
    OnRemoveFromEntity(): any;
  }

  interface BathBombable {
    inst: any;
    onbathbombedfn: any;
    canbebathbombedfn: any;
    CanBeBathBombed(bathbomb_inst: any): boolean;
    OnBathBombed(bathbomb_inst: any): any;
    OnRemoveFromEntity(): any;
    SetCanBeBathBombed(can_be_bathbombed: any): any;
    SetCanBeBathBombedFn(new_fn: any): any;
    SetOnBathBombedFn(new_fn: any): any;
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
    GetSpawnPoint(pt: any): any;
    SetMaxBats(max: any): any;
    SetSpawnTimes(times: any): any;
    StartTracking(inst: any): any;
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
    isgrowing: boolean;
    pass: any;
    reason: any;
    nextevent: any;
    AddCallback(day: any, cb: any): any;
    EnableGrowth(enable: any): any;
    GetDebugString(): any;
    GetInsulation(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    Reset(): any;
    Shave(who: any, withwhat: any): any;
    ShouldTryToShave(who: any, whithwhat: any): any;
  }

  interface Beaverness {
    inst: any;
    max: number;
    current: number;
    time_effect_multiplier: number;
    task: any;
    old: any;
    DoDelta(delta: any, overtime: any): any;
    GetDebugString(): any;
    GetPercent(): any;
    IsStarving(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    SetPercent(percent: any, overtime: any): any;
    SetTimeEffectMultiplier(multiplier: any): any;
    StartTimeEffect(dt: any, delta_b: any): any;
    StopTimeEffect(): any;
  }

  interface BeefaloMetrics {
    inst: any;
    lastdomesticator: any;
    lastdomesticator_id: any;
    player: any;
    GetLastDomesticator(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetLastDomesticator(player: any): any;
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
    Blink(pt: any, caster: any): any;
    SetFX(front: any, back: any): any;
    SpawnEffect(inst: any): any;
  }

  interface Bloomer {
    inst: any;
    bloomstack: any;
    children: any;
    fx: any;
    oldfx: any;
    bloom: any;
    str: string;
    AttachChild(child: any): any;
    DetachChild(child: any): any;
    GetCurrentFX(): any;
    GetDebugString(): any;
    OnClearBloomEffectHandle(): any;
    OnRemoveFromEntity(): any;
    OnSetBloomEffectHandle(fx: any): any;
    PopBloom(source: any): any;
    PushBloom(source: any, fx: any, priority: any): any;
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
    velocMult: any;
    curr_speed: any;
    speedvar: any;
    mult: any;
    soundspeed: any;
    walkspeed: any;
    ChangeDirection(ang: any, vel: any): any;
    GetDebugString(): any;
    GetSpeed(): any;
    GetVelocity(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    SetAverageSpeed(spd: any): any;
    SetMaxSpeedMult(spd: any): any;
    SetMinSpeedMult(spd: any): any;
    Start(ang: any, vel: any): any;
    StartSoundLoop(): any;
    Stop(): any;
    StopSoundLoop(): any;
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
    ChangeToRepaired(repair_build_name: any): any;
    Repair(doer: any, patch_item: any): any;
    SetBoat(boat: any): any;
    SetState(state: any): any;
  }

  interface BoatPatch {
    inst: any;
    patch_type: any;
    GetPatchType(): any;
    OnRemoveFromEntity(): any;
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
    newangle: any;
    TOLLERANCE: number;
    raised_sail_count: number;
    sail_force: number;
    accel: any;
    min_velocity: number;
    drag: any;
    dragged_velocity_length: any;
    MAX_ALLOWED_VELOCITY: number;
    maxx: any;
    maxz: any;
    new_speed_is_scary: any;
    time: any;
    should_zoom_out: any;
    AddAnchorCmp(anchor_cmp: any): any;
    AddMast(mast: any): any;
    ApplyForce(dir_x: any, dir_z: any, force: any): any;
    GetMaxVelocity(): any;
    GetRudderDirection(): any;
    GetRudderTurnSpeed(): any;
    GetTargetRudderDirection(): any;
    GetTotalAnchorDrag(): any;
    GetVelocity(): any;
    OnDeath(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    RemoveAnchorCmp(anchor_cmp: any): any;
    RemoveMast(mast: any): any;
    SetTargetRudderDirection(dir_x: any, dir_z: any): any;
  }

  interface BoatTrail {
    inst: any;
    anim_idx: number;
    fx: any;
    radius: number;
    total_distance_traveled: number;
    x: any;
    y: any;
    z: any;
    last_x: any;
    last_z: any;
    effect_spawn_rate: number;
    dir_x: any;
    dir_z: any;
    distance_traveled: any;
    angle_apart: number;
    last_dir_x: any;
    last_dir_z: any;
    OnUpdate(dt: any): any;
    SpawnEffectPrefab(x: any, y: any, z: any, dir_x: any, dir_z: any): any;
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
    OnUpdate(dt: any): any;
    Setup(dir_x: any, dir_z: any, velocity: any, acceleration: any): any;
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
    Brush(doer: any, brush: any): any;
    CalculateNumPrizes(): any;
    GetDebugString(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetBrushable(brushable: any, reset: any): any;
    SetOnBrushed(fn: any): any;
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
    last_hungry_build: any;
    pos: any;
    ents: any;
    old_accessible_tech_trees: any;
    old_station_recipes: any;
    old_prototyper: any;
    prototyper_active: boolean;
    SCIENCE: any;
    MAGIC: any;
    ANCIENT: any;
    SHADOW: any;
    trees_changed: boolean;
    recipe: any;
    wetness: any;
    totalWetness: number;
    totalItems: number;
    ingredients: any;
    current: any;
    penalty: any;
    level: any;
    buffaction: any;
    wetlevel: any;
    materials: any;
    t: any;
    prod: any;
    has_tech: boolean;
    ActivateCurrentResearchMachine(recipe: any): any;
    AddRecipe(recname: any): any;
    BufferBuild(recname: any): any;
    CanBuild(recname: any): boolean;
    CanLearn(recname: any): boolean;
    DoBuild(recname: any, pt: any, rotation: any, skin: any): any;
    EvaluateTechTrees(): any;
    GetIngredientWetness(ingredients: any): any;
    GetIngredients(recname: any): any;
    GiveAllRecipes(): any;
    HasCharacterIngredient(ingredient: any): boolean;
    HasTechIngredient(ingredient: any): boolean;
    IsBuildBuffered(recname: any): boolean;
    KnowsRecipe(recname: any): boolean;
    LongUpdate(dt: any): any;
    MakeRecipe(recipe: any, pt: any, rot: any, skin: any, onsuccess: any): any;
    MakeRecipeAtPoint(recipe: any, pt: any, rot: any, skin: any): any;
    MakeRecipeFromMenu(recipe: any, skin: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUpdate(): any;
    RemoveIngredients(ingredients: any, recname: any): any;
    UnlockRecipe(recname: any): any;
    UnlockRecipesForTech(tech: any): any;
  }

  interface BundleMaker {
    inst: any;
    bundlingprefab: any;
    bundledprefab: any;
    onstartbundlingfn: any;
    OnStartBundling(doer: any): any;
    SetBundlingPrefabs(bundling: any, bundled: any): any;
    SetOnStartBundlingFn(fn: any): any;
  }

  interface Bundler {
    inst: any;
    bundlinginst: any;
    itemprefab: any;
    wrappedprefab: any;
    persists: boolean;
    bundling: boolean;
    pos: any;
    item: any;
    wrapped: any;
    items: any;
    data: any;
    currentitem: any;
    currentwrapped: any;
    currentbundling: any;
    CanStartBundling(): boolean;
    FinishBundling(): any;
    IsBundling(bundlinginst: any): boolean;
    OnFinishBundling(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    StartBundling(item: any): any;
    StopBundling(): any;
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
    smoke: any;
    follower: any;
    xoffs: any;
    yoffs: any;
    zoffs: any;
    AddBurnFX(
      prefab: any,
      offset: any,
      followsymbol: any,
      followaschild: any
    ): any;
    ExtendBurning(): any;
    Extinguish(resetpropagator: any, heatpct: any, smotherer: any): any;
    FixFX(): any;
    GetDebugString(): any;
    GetLargestLightRadius(): any;
    HasEndothermicHeat(): boolean;
    HasExothermicHeat(): boolean;
    Ignite(immediate: any, source: any, doer: any): any;
    IsBurning(): boolean;
    IsSmoldering(): boolean;
    KillFX(): any;
    LongUpdate(dt: any): any;
    OnRemoveEntity(): any;
    OnRemoveFromEntity(): any;
    OverrideBurnFXBuild(build: any): any;
    OverrideBurnFXFinalOffset(offs: any): any;
    OverrideBurnFXRadius(radius_levels: any): any;
    SetBurnTime(time: any): any;
    SetBurningFX(name: any): any;
    SetFXLevel(level: any, percent: any): any;
    SetFXOffset(x: any, y: any, z: any): any;
    SetOnBurntFn(fn: any): any;
    SetOnExtinguishFn(fn: any): any;
    SetOnIgniteFn(fn: any): any;
    SetOnSmolderingFn(fn: any): any;
    SetOnStopSmolderingFn(fn: any): any;
    SmotherSmolder(smotherer: any): any;
    SpawnFX(immediate: any): any;
    StartWildfire(): any;
    StopSmoldering(heatpct: any): any;
  }

  interface CarefulWalker {
    inst: any;
    careful: boolean;
    carefulwalkingspeedmult: number;
    targets: any;
    data: any;
    x: any;
    y: any;
    z: any;
    checkcareful: any;
    toremove: any;
    IsCarefulWalking(): boolean;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetCarefulWalkingSpeedMultiplier(mult: any): any;
    ToggleCareful(careful: any): any;
    TrackTarget(target: any, radius: any, duration: any): any;
  }

  interface Catcher {
    inst: any;
    enabled: boolean;
    actiondistance: number;
    catchdistance: number;
    canact: boolean;
    watchlist: any;
    CanCatch(): boolean;
    OnRemoveFromEntity(): any;
    OnUpdate(): any;
    SetActionDistance(dist: any): any;
    SetCatchDistance(dist: any): any;
    SetEnabled(enable: any): any;
    StartWatching(projectile: any): any;
    StopWatching(projectile: any): any;
  }

  interface Channelable {
    inst: any;
    enabled: boolean;
    channeler: any;
    onchannelingfn: any;
    onstopchannelingfn: any;
    stopchanneling: boolean;
    GetDebugString(): any;
    IsChanneling(): boolean;
    OnUpdate(dt: any): any;
    SetChannelingFn(startfn: any, stopfn: any): any;
    SetEnabled(enabled: any): any;
    StartChanneling(channeler: any): any;
    StopChanneling(aborted: any): any;
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
    missingchildren: any;
    missingemergencychildren: any;
    dt: any;
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
    AddChildrenInside(count: any): any;
    AddEmergencyChildrenInside(count: any): any;
    CanEmergencySpawn(): boolean;
    CanSpawn(): boolean;
    CountChildrenOutside(fn: any): any;
    DoSpawnChild(target: any, prefab: any, radius: any): any;
    DoTakeOwnership(child: any): any;
    GetDebugString(): any;
    GoHome(child: any): any;
    IsFull(): boolean;
    LoadPostPass(newents: any, savedata: any): any;
    LongUpdate(dt: any): any;
    NumChildren(): any;
    OnChildKilled(child: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    ReleaseAllChildren(target: any, prefab: any): any;
    SetEmergencyRadius(rad: any): any;
    SetGoHomeFn(fn: any): any;
    SetMaxChildren(max: any): any;
    SetMaxEmergencyChildren(max: any): any;
    SetOccupiedFn(fn: any): any;
    SetOnAddChildFn(fn: any): any;
    SetOnChildKilledFn(fn: any): any;
    SetRareChild(childname: any, chance: any): any;
    SetRegenPeriod(period: any, variance: any): any;
    SetSpawnPeriod(period: any, variance: any): any;
    SetSpawnedFn(fn: any): any;
    SetVacateFn(fn: any): any;
    SpawnChild(target: any, prefab: any, radius: any): any;
    SpawnEmergencyChild(target: any, prefab: any, radius: any): any;
    StartRegen(): any;
    StartSpawning(): any;
    StartUpdate(dt: any): any;
    StopRegen(): any;
    StopSpawning(): any;
    TakeEmergencyOwnership(child: any): any;
    TakeOwnership(child: any): any;
    TrySpawnEmergencyChild(): any;
    UpdateMaxEmergencyCommit(): any;
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
    GetDebugString(): any;
    GetMaxScale(): any;
    GetMaxSpeed(): any;
    GetMinScale(): any;
    GetMinSpeed(): any;
    GetSpeed(dt: any): any;
    OnUpdate(dt: any): any;
    SetCircleTarget(tar: any): any;
    Start(): any;
    Stop(): any;
  }

  interface CircuitNode {
    inst: any;
    range: number;
    numnodes: number;
    connectsacrossplatforms: boolean;
    ondisconnectfn: any;
    nodes: any;
    x: any;
    y: any;
    z: any;
    my_platform: any;
    onconnectfn: any;
    AddNode(node: any): any;
    ConnectTo(tag: any): any;
    Disconnect(): any;
    ForEachNode(fn: any): any;
    IsConnected(): boolean;
    IsEnabled(): boolean;
    NumConnectedNodes(): any;
    OnRemoveEntity(): any;
    RemoveNode(node: any): any;
    SetOnConnectFn(fn: any): any;
    SetOnDisconnectFn(fn: any): any;
    SetRange(range: any): any;
  }

  interface ColourAdder {
    inst: any;
    colourstack: any;
    children: any;
    colour: any;
    r: number;
    g: number;
    b: number;
    a: number;
    str: any;
    AttachChild(child: any): any;
    CalculateCurrentColour(): any;
    DetachChild(child: any): any;
    GetCurrentColour(): any;
    GetDebugString(): any;
    OnRemoveFromEntity(): any;
    OnSetColour(r: any, g: any, b: any, a: any): any;
    PopColour(source: any): any;
    PushColour(source: any, r: any, g: any, b: any, a: any): any;
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
    EndTween(): any;
    IsTweening(): boolean;
    OnUpdate(dt: any): any;
    StartTween(colour: any, time: any, callback: any): any;
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
    newtarget: any;
    forcechange: any;
    targetfn: any;
    retargetperiod: any;
    retargettask: any;
    losetargetcallback: any;
    oldtarget: any;
    str: any;
    dist: any;
    atkrange: any;
    strid: any;
    t: any;
    cry: any;
    hurtsound: any;
    blocked: boolean;
    damageredirecttarget: any;
    damageresolved: number;
    lastattacker: any;
    cause: any;
    redirect_combat: any;
    hitsound: string;
    weaponmod: any;
    tgtinv: any;
    tgttype: any;
    is_attacking: any;
    item: any;
    basedamage: any;
    basemultiplier: any;
    bonus: any;
    playermultiplier: any;
    pvpmultiplier: any;
    mount: any;
    saddle: any;
    weapon: any;
    range: any;
    targetpos: any;
    projectile: any;
    reflected_dmg: number;
    reflect_list: any;
    mult: any;
    dmg: any;
    lastdoattacktime: any;
    hitcount: number;
    BattleCry(): any;
    BlankOutAttacks(fortime: any): any;
    CalcAttackRangeSq(target: any): any;
    CalcDamage(target: any, weapon: any, multiplier: any): any;
    CalcHitRangeSq(target: any): any;
    CalcReflectedDamage(
      targ: any,
      dmg: any,
      weapon: any,
      stimuli: any,
      reflect_list: any
    ): any;
    CanAttack(target: any): boolean;
    CanBeAttacked(attacker: any): boolean;
    CanExtinguishTarget(target: any, weapon: any): boolean;
    CanHitTarget(target: any, weapon: any): boolean;
    CanLightTarget(target: any, weapon: any): boolean;
    CanTarget(target: any): boolean;
    CancelAttack(): any;
    DoAreaAttack(
      target: any,
      range: any,
      weapon: any,
      validfn: any,
      stimuli: any,
      excludetags: any
    ): any;
    DoAttack(
      targ: any,
      weapon: any,
      projectile: any,
      stimuli: any,
      instancemult: any
    ): any;
    DropTarget(hasnexttarget: any): any;
    EnableAreaDamage(enable: any): any;
    EngageTarget(target: any): any;
    ForceAttack(): any;
    GetAttackRange(): any;
    GetAttacked(attacker: any, damage: any, weapon: any, stimuli: any): any;
    GetBattleCryString(target: any): any;
    GetCooldown(): any;
    GetDamageReflect(target: any, damage: any, weapon: any, stimuli: any): any;
    GetDebugString(): any;
    GetGiveUpString(target: any): any;
    GetHitRange(): any;
    GetImpactSound(target: any, weapon: any): any;
    GetLastAttackedTime(): any;
    GetWeapon(): any;
    GiveUp(): any;
    HasTarget(): boolean;
    InCooldown(): any;
    IsAlly(guy: any): boolean;
    IsRecentTarget(target: any): boolean;
    IsValidTarget(target: any): boolean;
    LoadPostPass(newents: any, data: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    ResetBattleCryCooldown(t: any): any;
    ResetCooldown(): any;
    RestartCooldown(): any;
    SetAreaDamage(range: any, percent: any, areahitcheck: any): any;
    SetAttackPeriod(period: any): any;
    SetDefaultDamage(damage: any): any;
    SetHurtSound(sound: any): any;
    SetKeepTargetFunction(fn: any): any;
    SetLastTarget(target: any): any;
    SetOnHit(fn: any): any;
    SetPlayerStunlock(stunlock: any): any;
    SetRange(attack: any, hit: any): any;
    SetRetargetFunction(period: any, fn: any): any;
    SetTarget(target: any): any;
    ShareTarget(
      target: any,
      range: any,
      fn: any,
      maxnum: any,
      musttags: any
    ): any;
    StartAttack(): any;
    StartTrackingTarget(target: any): any;
    StopTrackingTarget(target: any): any;
    SuggestTarget(target: any): any;
    TargetIs(target: any): any;
    TryAttack(target: any): any;
    TryRetarget(): any;
    ValidateTarget(): any;
  }

  interface Commander {
    inst: any;
    soldiers: any;
    numsoldiers: number;
    trackingdist: number;
    trackingperiod: number;
    k: any;
    AddSoldier(ent: any): any;
    AlertAllSoldiers(): any;
    DropAllSoldierTargets(): any;
    GetAllSoldiers(): any;
    GetDebugString(): any;
    GetNumSoldiers(): any;
    IsAnySoldierNotAlert(): boolean;
    IsSoldier(ent: any): boolean;
    OnRemoveFromEntity(): any;
    PushEventToAllSoldiers(ev: any, data: any): any;
    RemoveSoldier(ent: any): any;
    SetTrackingDistance(dist: any): any;
    ShareTargetToAllSoldiers(target: any): any;
    StartTrackingDistance(): any;
    StopTrackingDistance(): any;
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
    discriminantSqrt: any;
    gXrange: any;
    angleA: any;
    angleB: any;
    cosangleXspeed: any;
    x: number;
    z: number;
    y: number;
    pos: any;
    offset: any;
    facing_angle: any;
    attacker_platform: any;
    vx: any;
    vy: any;
    vz: any;
    CalculateTrajectory(startPos: any, endPos: any, speed: any): any;
    GetDebugString(): any;
    Hit(target: any): any;
    Launch(targetPos: any, attacker: any, owningweapon: any): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetGravity(g: any): any;
    SetHorizontalSpeed(speed: any): any;
    SetLaunchOffset(offset: any): any;
    SetOnHit(fn: any): any;
    SetOnLaunch(fn: any): any;
    SetOnUpdate(fn: any): any;
    SetTargetOffset(offset: any): any;
  }

  interface ConstructionBuilder {
    inst: any;
    constructioninst: any;
    constructionsite: any;
    persists: boolean;
    constructing: boolean;
    pos: any;
    items: any;
    currentconstructing: any;
    currenttarget: any;
    CanStartConstruction(): boolean;
    FinishConstruction(): any;
    IsConstructing(constructioninst: any): boolean;
    IsConstructingAny(): boolean;
    OnFinishConstruction(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    StartConstruction(target: any): any;
    StopConstruction(): any;
  }

  interface ConstructionBuilderUIData {
    inst: any;
    GetConstructionSite(): any;
    GetContainer(): any;
    GetIngredientForSlot(slot: any): any;
    GetSlotForIngredient(prefab: any): any;
    GetTarget(): any;
    SetContainer(containerinst: any): any;
    SetTarget(targetinst: any): any;
  }

  interface ConstructionPlans {
    inst: any;
    targetprefabs: any;
    constructionprefab: any;
    product: any;
    AddTargetPrefab(prefab: any, constructionprefab: any): any;
    OnRemoveFromEntity(): any;
    RemoveTargetPrefab(prefab: any): any;
    StartConstruction(target: any): any;
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
    delta: any;
    str: any;
    AddMaterial(prefab: any, num: any): any;
    GetDebugString(): any;
    GetMaterialCount(prefab: any): any;
    GetSlotCount(slot: any): any;
    HasBuilder(): boolean;
    IsBuilder(guy: any): boolean;
    OnConstruct(doer: any, items: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnStartConstruction(doer: any): any;
    OnStopConstruction(doer: any): any;
    SetConstructionPrefab(prefab: any): any;
    SetOnConstructedFn(fn: any): any;
    SetOnStartConstructionFn(fn: any): any;
    SetOnStopConstructionFn(fn: any): any;
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
    pos: any;
    other_item: any;
    in_slot: any;
    inventory: any;
    doer: any;
    num_found: number;
    total_num_found: number;
    data: any;
    references: any;
    refs: any;
    prevslot: any;
    dec: any;
    active_item: any;
    halfstack: any;
    leftovers: any;
    targetslot: any;
    AcceptsStacks(): boolean;
    AddAllOfActiveItemToSlot(slot: any): any;
    AddOneOfActiveItemToSlot(slot: any): any;
    CanTakeItemInSlot(item: any, slot: any): boolean;
    Close(): any;
    ConsumeByName(item: any, amount: any): any;
    DestroyContents(): any;
    DropEverything(): any;
    DropEverythingWithTag(tag: any): any;
    DropItem(itemtodrop: any): any;
    DropItemBySlot(slot: any): any;
    FindItem(fn: any): any;
    FindItems(fn: any): any;
    GetItemByName(item: any, amount: any): any;
    GetItemInSlot(slot: any): any;
    GetItemSlot(item: any): any;
    GetNumSlots(): any;
    GetSpecificSlotForItem(item: any): any;
    GetWidget(): any;
    GiveItem(item: any, slot: any, src_pos: any, drop_on_fail: any): any;
    Has(item: any, amount: any): boolean;
    IsEmpty(): boolean;
    IsFull(): boolean;
    IsHolding(item: any, checkcontainer: any): boolean;
    IsOpen(): boolean;
    IsOpenedBy(guy: any): boolean;
    IsSideWidget(): boolean;
    MoveItemFromAllOfSlot(slot: any, container: any): any;
    MoveItemFromHalfOfSlot(slot: any, container: any): any;
    NumItems(): any;
    OnLoad(data: any, newents: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    Open(doer: any): any;
    PutAllOfActiveItemInSlot(slot: any): any;
    PutOneOfActiveItemInSlot(slot: any): any;
    ReferenceAllItems(): any;
    RemoveItem(item: any, wholestack: any): any;
    RemoveItemBySlot(slot: any): any;
    SetNumSlots(numslots: any): any;
    SwapActiveItemWithSlot(slot: any): any;
    TakeActiveItemFromAllOfSlot(slot: any): any;
    TakeActiveItemFromHalfOfSlot(slot: any): any;
    WidgetSetup(prefab: any, data: any): any;
  }

  interface Cookable {
    inst: any;
    product: any;
    oncooked: any;
    prod: any;
    new_percent: any;
    Cook(cooker: any, chef: any): any;
    OnRemoveFromEntity(): any;
    SetOnCookedFn(fn: any): any;
  }

  interface Cooker {
    inst: any;
    newitem: any;
    sound_inst: any;
    CanCook(item: any, chef: any): boolean;
    CookItem(item: any, chef: any): any;
    OnRemoveFromEntity(): any;
  }

  interface Cooldown {
    inst: any;
    charged: boolean;
    cooldown_duration: any;
    startchargingfn: any;
    onchargedfn: any;
    task: any;
    cooldown_deadline: any;
    t: any;
    FinishCharging(): any;
    GetDebugString(): any;
    GetTimeToCharged(): any;
    IsCharged(): boolean;
    IsCharging(): boolean;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    StartCharging(time: any): any;
  }

  interface CraftingStation {
    inst: any;
    items: any;
    recipes: any;
    ForgetAllItems(): any;
    ForgetItem(itemname: any): any;
    GetItems(): any;
    GetRecipes(): any;
    KnowsItem(itemname: any): boolean;
    LearnItem(itemname: any, recipetouse: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
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
    dominant: any;
    str: any;
    DecayTraits(): any;
    GetDebugString(): any;
    IncTracker(name: any, multiplier: any): any;
    IsDominantTrait(trait: any): boolean;
    OnLoad(data: any): any;
    OnPet(petter: any): any;
    OnSave(): any;
    RefreshDominantTrait(): any;
    SetDominantTrait(trait: any): any;
    StartTracking(): any;
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
    shouldgrow: any;
    x: any;
    y: any;
    z: any;
    temp_rate: any;
    dt: number;
    grower: any;
    product: any;
    temp: any;
    DoGrow(dt: any, nowither: any): any;
    Fertilize(fertilizer: any, doer: any): any;
    GetDebugString(): any;
    Harvest(harvester: any): any;
    IsReadyForHarvest(): boolean;
    LoadPostPass(): any;
    LongUpdate(dt: any): any;
    MakeWithered(): any;
    Mature(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    Resume(): any;
    SetOnHarvestFn(fn: any): any;
    SetOnMatureFn(fn: any): any;
    SetOnWitheredFn(fn: any): any;
    StartGrowing(prod: any, grow_time: any, grower: any, percent: any): any;
  }

  interface DamageReflect {
    inst: any;
    reflectdamagefn: any;
    defaultdamage: number;
    GetReflectedDamage(
      attacker: any,
      damage: any,
      weapon: any,
      stimuli: any
    ): any;
    SetDefaultDamage(value: any): any;
    SetReflectDamageFn(fn: any): any;
  }

  interface DamageTracker {
    inst: any;
    damage_done: number;
    damage_threshold: number;
    damage_threshold_fn: any;
    enabled: boolean;
    old: any;
    OnHealthDelta(data: any): any;
    Start(): any;
    Stop(): any;
  }

  interface Debuff {
    inst: any;
    name: any;
    target: any;
    onattachedfn: any;
    ondetachedfn: any;
    onextendedfn: any;
    AttachTo(name: any, target: any, followsymbol: any, followoffset: any): any;
    Extend(followsymbol: any, followoffset: any): any;
    OnDetach(): any;
    SetAttachedFn(fn: any): any;
    SetDetachedFn(fn: any): any;
    SetExtendedFn(fn: any): any;
    Stop(): any;
  }

  interface Debuffable {
    inst: any;
    enable: boolean;
    followsymbol: string;
    followoffset: any;
    debuffs: any;
    k: any;
    toremove: any;
    x: any;
    y: any;
    z: any;
    debuff: any;
    ent: any;
    data: any;
    str: any;
    AddDebuff(name: any, prefab: any): any;
    Enable(enable: any): any;
    GetDebuff(name: any): any;
    GetDebugString(): any;
    HasDebuff(name: any): boolean;
    IsEnabled(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    RemoveDebuff(name: any): any;
    RemoveOnDespawn(): any;
    SetFollowSymbol(symbol: any, x: any, y: any, z: any): any;
  }

  interface Debugger {
    inst: any;
    debugger: any;
    z: number;
    debuggerdraws: any;
    OnUpdate(): any;
    SetAll(key: any, origin: any, tar: any, colour: any): any;
    SetColour(key: any, r: any, g: any, b: any, a: any): any;
    SetOrigin(key: any, x: any, y: any): any;
    SetTarget(key: any, x: any, y: any): any;
    SetZ(val: any): any;
  }

  interface Decay {
    inst: any;
    maxhealth: number;
    decayrate: number;
    currenthealth: number;
    oldhealth: any;
    deltatask: any;
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
    time_to_passive_drake: number;
    num_passive_drakes: number;
    monster_start_time: any;
    monster_duration: any;
    monsterFreq: any;
    monsterTime: any;
    spawneddrakes: boolean;
    monster_stop_task: any;
    monster_start_task: any;
    passive_drakes_spawned: number;
    passdrake: any;
    pos: any;
    passoffset: any;
    targdist: any;
    x: any;
    y: any;
    z: any;
    mx: any;
    my: any;
    mz: any;
    mdistsq: any;
    targdistsq: any;
    rootpos: any;
    angle: any;
    numdrakes: any;
    ignitenumdrakes: any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    SpawnIgniteWave(): any;
    StartMonster(starttime: any): any;
    StopMonster(): any;
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
    keepheading: boolean;
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
    x: any;
    y: any;
    z: any;
    threats: any;
    spookdir: any;
    closest: any;
    closest_dist: number;
    data: any;
    s: string;
    CalcHerdCenterPoint(detailedinfo: any): any;
    CalcIsHerdSpooked(): any;
    GetClosestHerdAlertTarget(deer: any): any;
    GetDebugString(): any;
    HerdHasAlertTarget(): any;
    Init(startingpt: any, herdspawner: any): any;
    IsAHerdAlertTarget(target: any): boolean;
    IsActiveInHerd(deer: any): boolean;
    IsAnyEntityAsleep(): boolean;
    IsGrazing(): boolean;
    LoadPostPass(newents: any, data: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    SetHerdAlertTarget(deer: any, target: any): any;
    SetValidAareaCheckFn(fn: any): any;
    UpdateDeerHerdingStatus(): any;
    UpdateHerdLocation(radius: any): any;
  }

  interface Deployable {
    inst: any;
    mode: any;
    spacing: any;
    usegridplacer: boolean;
    ondeploy: any;
    inventoryitem: any;
    x: any;
    y: any;
    z: any;
    isplant: any;
    CanDeploy(pt: any, mouseover: any, deployer: any): boolean;
    Deploy(pt: any, deployer: any, rot: any): any;
    DeploySpacingRadius(): any;
    IsDeployable(deployer: any): boolean;
    OnRemoveFromEntity(): any;
    SetDeployMode(mode: any): any;
    SetDeploySpacing(spacing: any): any;
    SetUseGridPlacer(usegridplacer: any): any;
  }

  interface DeployHelper {
    inst: any;
    onenablehelper: any;
    recipefilters: any;
    delay: number;
    AddRecipeFilter(recipename: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(): any;
    StartHelper(recipename: any, placerinst: any): any;
    StopHelper(): any;
  }

  interface Digester {
    inst: any;
    digesttime: number;
    itemstodigestfn: any;
    task: any;
    helditems: any;
    rnd: any;
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
    canbepickedup: boolean;
    canbepickedupalive: boolean;
    Disappear(): any;
    GetDebugString(): any;
    PrepareDisappear(): any;
    StopDisappear(): any;
  }

  interface Discoverable {
    inst: any;
    discovered: boolean;
    undiscoveredIcon: any;
    discoveredIcon: any;
    data: any;
    Discover(): any;
    Hide(): any;
    OnLoad(data: any): any;
    OnSave(data: any): any;
    SetIcons(undiscovered: any, discovered: any): any;
  }

  interface Diseaseable {
    inst: any;
    onDiseasedFn: any;
    diseased: boolean;
    ent: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    Disease(): any;
    GetDebugString(): any;
    IsBecomingDiseased(): boolean;
    IsDiseased(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    RestartNearbySpread(): any;
    SetDiseasedFn(fn: any): any;
    Spread(): any;
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
    BecomeDomesticated(): any;
    CancelTask(): any;
    CheckAndStartTask(): any;
    CheckForChanges(): any;
    DeltaDomestication(delta: any): any;
    DeltaObedience(delta: any): any;
    DeltaTendency(tendency: any, delta: any): any;
    GetDebugString(): any;
    GetDomestication(): any;
    GetObedience(): any;
    IsDomesticated(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    PauseDomesticationDecay(pause: any): any;
    SetDomesticated(domesticated: any): any;
    SetDomesticationTrigger(fn: any): any;
    SetMinObedience(min: any): any;
    TryBecomeDomesticated(): any;
    Validate(): any;
  }

  interface Drawable {
    inst: any;
    candraw: boolean;
    imagename: any;
    atlasname: any;
    bgimagename: any;
    bgatlasname: any;
    ondrawnfn: any;
    CanDraw(): boolean;
    GetAtlas(): any;
    GetBGAtlas(): any;
    GetBGImage(): any;
    GetImage(): any;
    OnDrawn(
      imagename: any,
      imagesource: any,
      atlasname: any,
      bgimagename: any,
      bgatlasname: any
    ): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetCanDraw(candraw: any): any;
    SetOnDrawnFn(fn: any): any;
  }

  interface DrawingTool {
    inst: any;
    ondrawfn: any;
    ent: any;
    atlas: any;
    bgimage: any;
    bgatlas: any;
    image: any;
    Draw(
      target: any,
      image: any,
      src: any,
      atlas: any,
      bgimage: any,
      bgatlas: any
    ): any;
    GetImageToDraw(target: any): any;
    SetOnDrawFn(fn: any): any;
  }

  interface Drownable {
    inst: any;
    enabled: any;
    ontakedrowningdamage: any;
    customtuningsfn: any;
    x: any;
    y: any;
    z: any;
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
    handitem: any;
    tunings: any;
    delta: any;
    to_drop: any;
    DropInventory(): any;
    GiveupAndDrown(): any;
    OnFallInOcean(shore_x: any, shore_y: any, shore_z: any): any;
    SetCustomTuningsFn(fn: any): any;
    SetOnTakeDrowningDamageFn(fn: any): any;
    ShouldDrown(): any;
    TakeDrowningDamage(): any;
    Teleport(): any;
    WashAshore(): any;
  }

  interface Dryable {
    inst: any;
    product: any;
    drytime: any;
    buildfile: any;
    GetBuildFile(): any;
    GetDryTime(): any;
    GetProduct(): any;
    OnRemoveFromEntity(): any;
    SetBuildFile(buildfile: any): any;
    SetDryTime(time: any): any;
    SetProduct(product: any): any;
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
    CanDry(dryable: any): boolean;
    DropItem(): any;
    GetDebugString(): any;
    GetTimeToDry(): any;
    GetTimeToSpoil(): any;
    Harvest(harvester: any): any;
    IsDone(): boolean;
    IsDrying(): boolean;
    IsPaused(): boolean;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    Pause(): any;
    Resume(): any;
    SetDoneDryingFn(fn: any): any;
    SetOnHarvestFn(fn: any): any;
    SetStartDryingFn(fn: any): any;
    StartDrying(dryable: any): any;
    StopDrying(reason: any): any;
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
    preferseatingtags: any;
    tags: any;
    cacheedibletags: any;
    stack_mult: any;
    iswoodiness: boolean;
    delta: any;
    base_mult: any;
    owner: any;
    preferred: boolean;
    CanEat(inst: any): boolean;
    DoFoodEffects(food: any): any;
    Eat(food: any, feeder: any): any;
    GetEdibleTags(): any;
    HasBeen(time: any): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    PrefersToEat(inst: any): any;
    SetAbsorptionModifiers(health: any, hunger: any, sanity: any): any;
    SetCanEatGears(): any;
    SetCanEatHorrible(): any;
    SetCanEatRaw(): any;
    SetDiet(caneat: any, preferseating: any): any;
    SetOnEatFn(fn: any): any;
    SetPrefersEatingTag(tag: any): any;
    TestFood(food: any, testvalues: any): any;
    TimeSinceLastEating(): any;
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
    stacksize: any;
    AddChill(delta: any): any;
    DiluteChill(item: any, count: any): any;
    GetDebugString(): any;
    GetHealth(eater: any): any;
    GetHunger(eater: any): any;
    GetSanity(eater: any): any;
    GetWoodiness(eater: any): any;
    OnEaten(eater: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetGetHealthFn(fn: any): any;
    SetOnEatenFn(fn: any): any;
  }

  interface ElectricAttacks {
    inst: any;
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
    x: any;
    z: any;
    hopping: boolean;
    Cancel(): any;
    Embark(): any;
    GetEmbarkPosition(): any;
    HasDestination(): boolean;
    OnWallUpdate(dt: any): any;
    SetDisembarkActionPos(pos_x: any, pos_z: any): any;
    SetDisembarkPos(pos_x: any, pos_z: any): any;
    SetEmbarkable(embarkable: any): any;
    StartMoving(): any;
    UpdateEmbarkingPos(dt: any): any;
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
    ForgetEntity(name: any): any;
    GetDebugString(): any;
    GetEntity(name: any): any;
    LoadPostPass(ents: any, data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    TrackEntity(name: any, inst: any): any;
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
    Scare(duration: any): any;
    SetDefaultDuration(duration: any): any;
    SetRange(range: any): any;
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
    Equip(owner: any): any;
    GetDapperness(owner: any): any;
    GetEquippedMoisture(): any;
    GetWalkSpeedMult(): any;
    IsEquipped(): boolean;
    IsInsulated(): boolean;
    IsRestricted(target: any): boolean;
    OnRemoveFromEntity(): any;
    SetOnEquip(fn: any): any;
    SetOnPocket(fn: any): any;
    SetOnUnequip(fn: any): any;
    ToPocket(owner: any): any;
    Unequip(owner: any): any;
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
    OnBurnt(): any;
    SetOnExplodeFn(fn: any): any;
  }

  interface ExplosiveResist {
    inst: any;
    resistance: number;
    maxresistdamage: any;
    decaytime: any;
    decaydelay: any;
    delayremaining: number;
    DoDelta(delta: any): any;
    GetDebugString(): any;
    GetResistance(): any;
    OnExplosiveDamage(damage: any, src: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    SetResistance(resistance: any): any;
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
    OnUpdate(dt: any): any;
    StopAll(): any;
  }

  interface Fan {
    inst: any;
    canusefn: any;
    onusefn: any;
    onchannelingfn: any;
    overridesymbol: any;
    Channel(target: any): any;
    Fan(target: any): any;
    IsChanneling(): boolean;
    OnRemoveFromEntity(): any;
    SetCanUseFn(fn: any): any;
    SetOnChannelingFn(fn: any): any;
    SetOnUseFn(fn: any): any;
    SetOverrideSymbol(symbol: any): any;
  }

  interface Fertilizer {
    inst: any;
    fertilizervalue: number;
    soil_cycles: number;
    withered_cycles: number;
    fertilize_sound: string;
    planthealth: any;
    cost: number;
    Heal(target: any): any;
    OnRemoveFromEntity(): any;
    SetHealingAmount(health: any): any;
  }

  interface Fillable {
    inst: any;
    filledprefab: any;
    filleditem: any;
    owner: any;
    container: any;
    item: any;
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
    GetDebugString(): any;
    GetPercent(): any;
    GetUses(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUsedAsItem(action: any): any;
    SetConsumption(action: any, uses: any): any;
    SetMaxUses(val: any): any;
    SetOnFinished(fn: any): any;
    SetPercent(amount: any): any;
    SetUses(val: any): any;
    Use(num: any): any;
  }

  interface Firebug {
    inst: any;
    time_to_fire: number;
    time_interval: number;
    time_variance: number;
    sanity_threshold: any;
    prefab: any;
    enabled: boolean;
    Disable(): any;
    Enable(enable: any): any;
    GetDebugString(): any;
    OnUpdate(dt: any): any;
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
    t: any;
    Activate(randomizedStartTime: any): any;
    ActivateEmergencyMode(randomizedStartTime: any): any;
    Deactivate(): any;
    DetectFire(): any;
    GetDebugString(): any;
    GetEmergencyLevel(): any;
    GetMaxEmergencyLevel(): any;
    IsEmergency(): boolean;
    LowerEmergencyLevel(numlevels: any): any;
    OnRemoveFromEntity(): any;
    RaiseEmergencyLevel(numlevels: any): any;
    ResetEmergencyCooldown(): any;
    SetOnBeginEmergencyFn(fn: any): any;
    SetOnBeginWarningFn(fn: any): any;
    SetOnEndEmergencyFn(fn: any): any;
    SetOnEndWarningFn(fn: any): any;
    SetOnFindFireFn(fn: any): any;
    SetOnUpdateWarningFn(fn: any): any;
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
    old: any;
    time: any;
    isday: any;
    highval_r: any;
    lowval_r: number;
    lowval_i: any;
    highval_i: any;
    params: any;
    flicker: any;
    rad: any;
    val: any;
    should_play_extinguish: any;
    AttachLightTo(target: any): any;
    Extinguish(): any;
    GetLevelRadius(level: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnRemoveEntity(): any;
    OnUpdate(dt: any): any;
    SetLevel(lev: any, immediate: any): any;
    SetPercentInLevel(percent: any): any;
    UpdateRadius(): any;
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
    AddFish(prefab: any): any;
    Freeze(): any;
    GetDebugString(): any;
    GetFishPercent(): any;
    HookFish(): any;
    IsFrozenOver(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    RefreshFish(): any;
    ReleaseFish(fish: any): any;
    RemoveFish(fish: any): any;
    SetGetFishFn(fn: any): any;
    SetRespawnTime(time: any): any;
    Unfreeze(): any;
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
    distance_remaining: number;
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
    last_dir_x: any;
    last_dir_z: any;
    BeginCast(thrower: any, target_x: any, target_z: any): any;
    BeginFinalPickup(): any;
    BeginOpening(): any;
    BeginRetrieving(): any;
    CalculateY(x: any, x_span: any, scale: any): any;
    DropItem(item: any, last_dir_x: any, last_dir_z: any, idx: any): any;
    UpdateWhenMovingToTarget(dt: any): any;
    UpdateWhenOpening(dt: any): any;
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
    fishleft: any;
    nibbletime: any;
    roddurability: any;
    loserodtime: any;
    spawnPos: any;
    offset: any;
    persists: boolean;
    CancelFishTask(): any;
    Collect(): any;
    FishIsBiting(): any;
    GetDebugString(): any;
    HasCaughtFish(): boolean;
    HasHookedFish(): boolean;
    Hook(): any;
    IsFishing(): boolean;
    OnUpdate(dt: any): any;
    Reel(): any;
    Release(): any;
    SetStrainTimes(min: any, max: any): any;
    SetWaitTimes(min: any, max: any): any;
    StartFishing(target: any, fisherman: any): any;
    StopFishing(): any;
    WaitForFish(): any;
  }

  interface FishSchool {
    inst: any;
    max_fish_level: number;
    fish_level: number;
    fish_prefab_name: any;
    replenish_task: any;
    net_x: any;
    net_y: any;
    net_z: any;
    OnPreNet(net: any): any;
    Replenish(): any;
    SetNettedPrefab(fishing_net_prefab: any): any;
    StartReplenish(replenish_rate: any): any;
    StopReplenish(): any;
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
    pos_x: any;
    pos_y: any;
    pos_z: any;
    my_x: any;
    my_y: any;
    my_z: any;
    symbol: any;
    skin_build: any;
    front_fx: any;
    back_fx: any;
    bank: any;
    anim: any;
    AttachEffect(effect: any): any;
    IsFloating(): boolean;
    OnLandedClient(): any;
    OnLandedServer(): any;
    OnNoLongerLandedClient(): any;
    OnNoLongerLandedServer(): any;
    SetBankSwapOnFloat(
      should_bank_swap: any,
      float_index: any,
      swap_data: any
    ): any;
    SetScale(scale: any): any;
    SetSize(size: any): any;
    SetVerticalOffset(offset: any): any;
    ShouldShowEffect(): any;
  }

  interface FocalPoint {
    inst: any;
    targets: any;
    current_focus: any;
    sourcetbl: any;
    params: any;
    parent: any;
    best_focus: any;
    best_dist_sq: any;
    best_priority: any;
    toremove: any;
    fn: any;
    str: any;
    CameraUpdate(dt: any): any;
    GetDebugString(): any;
    PushTempFocus(
      target: any,
      minrange: any,
      maxrange: any,
      priority: any
    ): any;
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
  }

  interface Follower {
    inst: any;
    leader: any;
    targettime: any;
    maxfollowtime: any;
    canaccepttarget: boolean;
    OnLeaderRemoved: any;
    str: any;
    porttask: any;
    task: any;
    timeLeft: any;
    currentTime: any;
    time: any;
    othercmp: any;
    keepleaderonattacked: boolean;
    time_left: any;
    AddLoyaltyTime(time: any): any;
    GetDebugString(): any;
    GetLeader(): any;
    GetLoyaltyPercent(): any;
    IsLeaderSame(otherfollower: any): boolean;
    IsNearLeader(dist: any): boolean;
    KeepLeaderOnAttacked(): any;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetLeader(inst: any): any;
    StartLeashing(): any;
    StopFollowing(): any;
    StopLeashing(): any;
  }

  interface FoodMemory {
    inst: any;
    duration: any;
    foods: any;
    mults: any;
    rec: any;
    count: any;
    GetBaseFood(prefab: any): any;
    GetFoodMultiplier(prefab: any): any;
    GetMemoryCount(prefab: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    RememberFood(prefab: any): any;
    SetDuration(duration: any): any;
    SetMultipliers(mults: any): any;
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
    r: any;
    g: any;
    b: any;
    a: any;
    percent: any;
    extraresist: any;
    diminishingtask: any;
    prevState: any;
    AddColdness(coldness: any, freezetime: any, nofreeze: any): any;
    AddShatterFX(prefab: any, offset: any, followsymbol: any): any;
    Freeze(freezetime: any): any;
    GetDebugString(): any;
    IsFrozen(): boolean;
    IsThawing(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    Reset(): any;
    ResolveResistance(): any;
    ResolveWearOffTime(t: any): any;
    SetDefaultWearOffTime(wearofftime: any): any;
    SetExtraResist(resist: any): any;
    SetResistance(resist: any): any;
    SetShatterFXLevel(level: any, percent: any): any;
    SpawnShatterFX(): any;
    StartWearingOff(wearofftime: any): any;
    Thaw(thawtime: any): any;
    Unfreeze(): any;
    UpdateTint(): any;
  }

  interface FrostyBreather {
    inst: any;
    breath: any;
    offset: any;
    offset_fn: any;
    enabled: boolean;
    breathevent: any;
    facing: any;
    x: any;
    y: any;
    z: any;
    Disable(): any;
    EmitOnce(): any;
    Enable(): any;
    GetOffset(): any;
    OnRemoveFromEntity(): any;
    OnTemperatureChanged(temperature: any): any;
    SetOffset(x: any, y: any, z: any): any;
    SetOffsetFn(fn: any): any;
    StartBreath(): any;
    StopBreath(): any;
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
    oldsection: any;
    wetmult: any;
    masterymult: any;
    fuelvalue: number;
    updatefn: any;
    section: any;
    target: any;
    firstperiod: any;
    firstperiodfull: any;
    task: any;
    firstperioddt: any;
    newsection: any;
    AddThreshold(percent: any, fn: any): any;
    CanAcceptFuelItem(item: any): boolean;
    ChangeSection(amount: any): any;
    DoDelta(amount: any, doer: any): any;
    DoUpdate(dt: any): any;
    GetCurrentSection(): any;
    GetDebugString(): any;
    GetPercent(): any;
    GetSectionPercent(): any;
    InitializeFuelLevel(fuel: any): any;
    IsEmpty(): boolean;
    MakeEmpty(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnWallUpdate(dt: any): any;
    SetDepletedFn(fn: any): any;
    SetFirstPeriod(firstperiod: any, firstperiodfull: any): any;
    SetPercent(amount: any): any;
    SetSectionCallback(fn: any): any;
    SetSections(num: any): any;
    SetTakeFuelFn(fn: any): any;
    SetUpdateFn(fn: any): any;
    StartConsuming(): any;
    StopConsuming(): any;
    TakeFuelItem(item: any, doer: any): any;
  }

  interface FuelMaster {
    inst: any;
    bonusmult: number;
    bonusfn: any;
    GetBonusMult(item: any, target: any): any;
    SetBonusFn(fn: any): any;
    SetBonusMult(mult: any): any;
  }

  interface GiftReceiver {
    inst: any;
    giftcount: number;
    giftmachine: any;
    old: any;
    HasGift(): boolean;
    OnStartOpenGift(): any;
    OnStopOpenGift(usewardrobe: any): any;
    OpenNextGift(): any;
    RefreshGiftCount(): any;
    SetGiftMachine(inst: any): any;
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
    AddGrogginess(grogginess: any, knockoutduration: any): any;
    ComeTo(): any;
    ExtendKnockout(knockoutduration: any): any;
    GetDebugString(): any;
    HasGrogginess(): boolean;
    IsGroggy(): boolean;
    IsKnockedOut(): boolean;
    KnockOut(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetComeToTest(fn: any): any;
    SetDecayRate(rate: any): any;
    SetDefaultTests(): any;
    SetKnockOutTest(fn: any): any;
    SetResistance(resist: any): any;
    SetWearOffDuration(duration: any): any;
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
    platformPushRadius: any;
    platformEnts: any;
    DestroyPoints(
      points: any,
      breakobjects: any,
      dodamage: any,
      pushplatforms: any
    ): any;
    GetDebugString(): any;
    GetPoints(pt: any): any;
    GroundPound(pt: any): any;
    GroundPound_Offscreen(position: any): any;
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
    OnRemove(): any;
    OnUpdate(dt: any): any;
    SetSize(width: any, height: any): any;
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
    totalWeight: number;
    loss: any;
    weighting: number;
    targetThreat: any;
    target: any;
    selection_weight: any;
    selected_target: any;
    weight: number;
    AddTarget(target: any): any;
    GetTargets(): any;
    GetTotalWeight(): any;
    IsTargeting(target: any): boolean;
    OnPickTarget(target: any): any;
    OnRemoveFromEntity(): any;
    RemoveTarget(target: any): any;
    SelectTarget(): any;
    StartTracking(target: any): any;
    StopTracking(target: any): any;
    TryGetNewTarget(): any;
  }

  interface Growable {
    inst: any;
    stages: any;
    stage: number;
    loopstages: boolean;
    growonly: boolean;
    springgrowth: boolean;
    magicgrowable: boolean;
    timeToGrow: number;
    targettime: any;
    task: any;
    pausedremaining: any;
    remainingtime: any;
    data: any;
    time_from_now: any;
    time: any;
    DoGrowth(): any;
    ExtendGrowTime(extra_time: any): any;
    GetCurrentStageData(): any;
    GetDebugString(): any;
    GetNextStage(): any;
    GetStage(): any;
    LongUpdate(dt: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    Pause(): any;
    Resume(): any;
    SetStage(stage: any): any;
    StartGrowing(time: any): any;
    StopGrowing(): any;
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
    Fertilize(obj: any, doer: any): any;
    GetDebugString(): any;
    GetFertilePercent(): any;
    IsEmpty(): boolean;
    IsFertile(): boolean;
    IsFullFertile(): boolean;
    OnLoad(data: any, newents: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    PlantItem(item: any, doer: any): any;
    RemoveCrop(crop: any): any;
    Reset(reason: any): any;
  }

  interface Grue {
    inst: any;
    soundevent: any;
    warndelay: number;
    level: number;
    immunity: any;
    inittask: any;
    nextHitTime: any;
    nextSoundTime: any;
    soundwarn: any;
    soundattack: any;
    resistance: any;
    AddImmunity(source: any): any;
    CheckForStart(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    RemoveImmunity(source: any): any;
    SetResistance(resistance: any): any;
    SetSleeping(asleep: any): any;
    SetSounds(warn: any, attack: any): any;
    Start(): any;
    Stop(): any;
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
    old: any;
    guard: any;
    cause: any;
    data: any;
    refs: any;
    Call(d: any): any;
    Decay(d: any): any;
    DismissGuardian(): any;
    DoDelta(d: any): any;
    HasGuardian(): boolean;
    LoadPostPass(ents: any, data: any): any;
    OnGuardianDeath(data: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetGuardian(guardian: any): any;
    StartDecay(): any;
    SummonGuardian(override: any): any;
    SummonsAtMax(): any;
    SummonsAtMin(): any;
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
    task: any;
    targettime: any;
    pos: any;
    CanBeHarvested(): boolean;
    GetDebugString(): any;
    Grow(): any;
    Harvest(picker: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetGrowTime(time: any): any;
    SetOnGrowFn(fn: any): any;
    SetOnHarvestFn(fn: any): any;
    SetProduct(product: any, max: any): any;
    SetUp(product: any, max: any, time: any, onharvest: any, ongrow: any): any;
    StartGrowing(time: any): any;
    StopGrowing(): any;
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
    task: any;
    dt: any;
    has_heater: any;
    wants_heater: any;
    toohot: boolean;
    toocold: boolean;
    oldstate: any;
    data: any;
    Delay(time: any): any;
    GetDebugString(): any;
    GetHeaterPref(phase: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnState(state: any): any;
    OnUpdate(dt: any): any;
    SetCrackTime(t: any): any;
    SetHatchFailTime(t: any): any;
    SetHatchTime(t: any): any;
    SetHeaterPrefs(day: any, dusk: any, night: any): any;
    SetOnState(fn: any): any;
    StartUpdating(): any;
    StopUpdating(): any;
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
    AdvanceFlickerState(): any;
    DoHaunt(doer: any): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    Panic(panictime: any): any;
    SetHauntValue(val: any): any;
    SetOnHauntFn(fn: any): any;
    SetOnUnHauntFn(fn: any): any;
    StartFX(noflicker: any): any;
    StartShaderFx(): any;
    StopFX(): any;
    StopShaderFX(): any;
  }

  interface Healer {
    inst: any;
    health: any;
    Heal(target: any): any;
    SetHealthAmount(health: any): any;
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
    takingfiredamagestarttime: any;
    takingfiredamagelow: boolean;
    lastfiredamagetime: any;
    regen: any;
    amount: any;
    period: any;
    task: any;
    s: any;
    old_health: any;
    max_health: any;
    min_health: any;
    persists: boolean;
    old_percent: any;
    new_percent: any;
    DeltaPenalty(delta: any): any;
    DoDelta(
      amount: any,
      overtime: any,
      cause: any,
      ignore_invincible: any,
      afflicter: any,
      ignore_absorb: any
    ): any;
    DoFireDamage(amount: any, doer: any, instant: any): any;
    ForceUpdateHUD(overtime: any): any;
    GetDebugString(): any;
    GetFireDamageScale(): any;
    GetMaxWithPenalty(): any;
    GetPenaltyPercent(): any;
    GetPercent(): any;
    IsDead(): boolean;
    IsHurt(): boolean;
    IsInvincible(): boolean;
    Kill(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    RecalculatePenalty(): any;
    SetAbsorptionAmount(amount: any): any;
    SetAbsorptionAmountFromPlayer(amount: any): any;
    SetCurrentHealth(amount: any): any;
    SetInvincible(val: any): any;
    SetMaxHealth(amount: any): any;
    SetMinHealth(amount: any): any;
    SetPenalty(penalty: any): any;
    SetPercent(percent: any, overtime: any, cause: any): any;
    SetVal(val: any, cause: any, afflicter: any): any;
    StartRegen(amount: any, period: any, interruptcurrentregen: any): any;
    StopRegen(): any;
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
    newwidth: any;
    hp: any;
    Enable(enable: any): any;
    SetValue(percent: any): any;
  }

  interface HealthSyncer {
    inst: any;
    corrosives: any;
    hots: any;
    val: any;
    down: any;
    up: any;
    status: any;
    GetOverTime(): any;
    GetPercent(): any;
    OnUpdate(dt: any): any;
  }

  interface HealthTrigger {
    inst: any;
    triggers: any;
    totrigger: any;
    AddTrigger(amount: any, fn: any): any;
    OnHealthDelta(data: any): any;
    OnRemoveFromEntity(): any;
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
    GetCarriedHeat(observer: any): any;
    GetDebugString(): any;
    GetEquippedHeat(observer: any): any;
    GetHeat(observer: any): any;
    IsEndothermic(): boolean;
    IsExothermic(): boolean;
    OnRemoveFromEntity(): any;
    SetThermics(exo: any, endo: any): any;
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
    AddFallingStates(): any;
    GetPhysicsState(): any;
    IsFalling(): boolean;
    IsItem(): boolean;
    IsObstacle(): boolean;
    MakeSmallObstacle(): any;
    OnRemoveFromEntity(): any;
    SetOnChangeToItemFn(fn: any): any;
    SetOnChangeToObstacleFn(fn: any): any;
    SetOnPhysicsStateChangedFn(fn: any): any;
    SetOnStartFallingFn(fn: any): any;
    SetOnStopFallingFn(fn: any): any;
    SetRadius(radius: any): any;
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
    x: any;
    y: any;
    z: any;
    ents: any;
    str: any;
    updatedPos: any;
    validMembers: number;
    toremove: any;
    herdPos: any;
    data: any;
    AddMember(inst: any): any;
    GatherNearbyMembers(): any;
    GetDebugString(): any;
    IsFull(): boolean;
    LoadPostPass(newents: any, savedata: any): any;
    MergeNearbyHerds(): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnUpdate(): any;
    RemoveMember(inst: any): any;
    SetAddMemberFn(fn: any): any;
    SetGatherRange(range: any): any;
    SetMaxSize(size: any): any;
    SetMemberTag(tag: any): any;
    SetOnEmptyFn(fn: any): any;
    SetOnFullFn(fn: any): any;
    SetUpdateRange(range: any): any;
  }

  interface HerdMember {
    inst: any;
    enabled: boolean;
    herd: any;
    herdprefab: string;
    task: any;
    CreateHerd(): any;
    Enable(enabled: any): any;
    GetDebugString(): any;
    GetHerd(): any;
    OnRemoveFromEntity(): any;
    SetHerd(herd: any): any;
    SetHerdPrefab(prefab: any): any;
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
    dt: any;
    references: any;
    data: any;
    pos: any;
    offset: any;
    child: any;
    success: any;
    str: string;
    CanRelease(): boolean;
    DoReleaseChild(target: any, child: any, radius: any): any;
    GetDebugString(): any;
    GoHome(child: any): any;
    LoadPostPass(newents: any, data: any): any;
    LongUpdate(dt: any): any;
    OnLoad(data: any, newents: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    ReleaseAllChildren(target: any, prefab: any): any;
    ReleaseChild(target: any, prefab: any, radius: any): any;
    SetGoHomeFn(fn: any): any;
    SetOccupiedFn(fn: any): any;
    SetSpawnPeriod(period: any, variance: any): any;
    SetSpawnedFn(fn: any): any;
    SetVacateFn(fn: any): any;
    StartSpawning(): any;
    StartUpdate(): any;
    StopSpawning(): any;
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
    flash_val: any;
    r: any;
    g: any;
    b: any;
    highlit: boolean;
    highlight_add_colour_red: any;
    highlight_add_colour_green: any;
    highlight_add_colour_blue: any;
    ApplyColour(): any;
    Flash(toadd: any, timein: any, timeout: any): any;
    Highlight(r: any, g: any, b: any): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetAddColour(col: any): any;
    UnHighlight(): any;
  }

  interface HomeSeeker {
    inst: any;
    onhomeremoved: any;
    home: any;
    bufferedaction: any;
    GetDebugString(): any;
    GetHomePos(): any;
    GoHome(shouldrun: any): any;
    HasHome(): boolean;
    SetHome(home: any): any;
  }

  interface Hull {
    inst: any;
    plank: any;
    boat_lip: any;
    radius: any;
    AttachEntityToBoat(
      obj: any,
      offset_x: any,
      offset_z: any,
      parent_to_boat: any
    ): any;
    FinishRemovingEntity(entity: any): any;
    OnDeployed(): any;
    SetBoatLip(obj: any): any;
    SetPlank(obj: any): any;
    SetRadius(radius: any): any;
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
    leak_indicator: any;
    leak_x: any;
    leak_z: any;
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
    boat_physics: any;
    leakdamagetest: any;
    leak_dmg: any;
    damage_applied: any;
    max_health_damage: number;
    health_damage: any;
    leaks: any;
    GetLeakAngle(idx: any): any;
    GetLeakPosition(idx: any): any;
    OnCollide(data: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    RefreshLeakIndicator(leak_idx: any): any;
    UpdateHealth(): any;
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
    DoDec(dt: any, ignore_damage: any): any;
    DoDelta(delta: any, overtime: any, ignore_invincible: any): any;
    GetDebugString(): any;
    GetPercent(): any;
    IsPaused(): boolean;
    IsStarving(): boolean;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    Pause(): any;
    Resume(): any;
    SetKillRate(rate: any): any;
    SetMax(amount: any): any;
    SetOverrideStarveFn(fn: any): any;
    SetPercent(p: any, overtime: any): any;
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
    DoProduce(): any;
    GetDebugString(): any;
    TryProduce(): any;
  }

  interface Inspectable {
    inst: any;
    description: any;
    getspecialdescription: any;
    recordview: any;
    desc: any;
    GetDescription(viewer: any): any;
    GetStatus(viewer: any): any;
    OnRemoveFromEntity(): any;
    RecordViews(state: any): any;
    SetDescription(desc: any): any;
  }

  interface Instrument {
    inst: any;
    range: number;
    onheard: any;
    onplayed: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    Play(musician: any): any;
    SetOnHeardFn(fn: any): any;
    SetOnPlayedFn(fn: any): any;
  }

  interface Insulator {
    inst: any;
    insulation: number;
    type: any;
    GetInsulation(): any;
    GetType(): any;
    IsType(type: any): boolean;
    SetInsulation(val: any): any;
    SetSummer(): any;
    SetWinter(): any;
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
    item: any;
    active_item: any;
    doerownsobject: any;
    initialtargetowner: any;
    absorbers: any;
    absorbed_percent: number;
    total_absorption: number;
    absorbed_damage: any;
    leftover_damage: any;
    olditem: any;
    newitem: any;
    invitem: any;
    handitem: any;
    leftovers: any;
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
    itemInSlot: any;
    heavyitem: any;
    prevslot: any;
    dec: any;
    num_found: number;
    overflow_enough: any;
    overflow_found: any;
    total_num_found: number;
    overflow_items: any;
    containers: any;
    s: string;
    count: number;
    rebuild_snapping: boolean;
    halfstack: any;
    owner: any;
    actions: any;
    act: any;
    buffaction: any;
    stack: any;
    targetslot: any;
    moisture: number;
    max: number;
    waterproofness: number;
    AcceptsStacks(): boolean;
    AddAllOfActiveItemToSlot(slot: any): any;
    AddOneOfActiveItemToSlot(slot: any): any;
    ApplyDamage(damage: any, attacker: any, weapon: any): any;
    ArmorHasTag(tag: any): any;
    BurnNonpotatableInContainer(container: any): any;
    CanAcceptCount(item: any, maxcount: any): boolean;
    CanAccessItem(item: any): boolean;
    CanTakeItemInSlot(item: any, slot: any): boolean;
    Close(keepactiveitem: any): any;
    CombineActiveStackWithSlot(slot: any, stack_mod: any): any;
    ConsumeByName(item: any, amount: any): any;
    ControllerUseItemOnItemFromInvTile(
      item: any,
      active_item: any,
      actioncode: any,
      mod_name: any
    ): any;
    ControllerUseItemOnSceneFromInvTile(
      item: any,
      target: any,
      actioncode: any,
      mod_name: any
    ): any;
    ControllerUseItemOnSelfFromInvTile(
      item: any,
      actioncode: any,
      mod_name: any
    ): any;
    DisableDropOnDeath(): any;
    DropActiveItem(): any;
    DropEquipped(keepBackpack: any): any;
    DropEverything(ondeath: any, keepequip: any): any;
    DropEverythingWithTag(tag: any): any;
    DropItem(item: any, wholestack: any, randomdir: any, pos: any): any;
    DropItemFromInvTile(item: any, single: any): any;
    EnableDropOnDeath(): any;
    Equip(item: any, old_to_active: any): any;
    EquipActionItem(item: any): any;
    EquipActiveItem(): any;
    EquipHasTag(tag: any): any;
    FindItem(fn: any): any;
    FindItems(fn: any): any;
    GetActiveItem(): any;
    GetDebugString(): any;
    GetEquippedItem(eslot: any): any;
    GetEquippedMoistureRate(slot: any): any;
    GetItemByName(item: any, amount: any): any;
    GetItemInSlot(slot: any): any;
    GetItemSlot(item: any): any;
    GetNextAvailableSlot(item: any): any;
    GetNumSlots(): any;
    GetOverflowContainer(): any;
    GetWaterproofness(slot: any): any;
    GiveActiveItem(inst: any): any;
    GiveItem(inst: any, slot: any, src_pos: any): any;
    Has(item: any, amount: any): boolean;
    Hide(): any;
    IgnoresCanGoInContainer(): any;
    InspectItemFromInvTile(item: any): any;
    IsFull(): boolean;
    IsHeavyLifting(): boolean;
    IsHolding(item: any, checkcontainer: any): boolean;
    IsInsulated(): boolean;
    IsItemEquipped(item: any): boolean;
    IsOpenedBy(guy: any): boolean;
    IsWaterproof(): boolean;
    IsWearingArmor(): boolean;
    MoveItemFromAllOfSlot(slot: any, container: any): any;
    MoveItemFromHalfOfSlot(slot: any, container: any): any;
    NumItems(): any;
    OnLoad(data: any, newents: any): any;
    OnSave(): any;
    Open(): any;
    PutAllOfActiveItemInSlot(slot: any): any;
    PutOneOfActiveItemInSlot(slot: any): any;
    ReferenceAllItems(): any;
    RemoveItem(item: any, wholestack: any): any;
    RemoveItemBySlot(slot: any): any;
    ReturnActiveActionItem(item: any): any;
    ReturnActiveItem(slot: any, stack_mod: any): any;
    SelectActiveItemFromEquipSlot(slot: any): any;
    SelectActiveItemFromSlot(slot: any): any;
    SetActiveItem(item: any): any;
    Show(): any;
    SwapActiveItemWithSlot(slot: any): any;
    SwapEquipWithActiveItem(): any;
    TakeActiveItemFromAllOfSlot(slot: any): any;
    TakeActiveItemFromEquipSlot(eslot: any): any;
    TakeActiveItemFromEquipSlotID(eslotid: any): any;
    TakeActiveItemFromHalfOfSlot(slot: any): any;
    TransferInventory(receiver: any): any;
    Unequip(equipslot: any, slip: any): any;
    UseItemFromInvTile(item: any, actioncode: any, mod_name: any): any;
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
    ct: any;
    x: any;
    y: any;
    z: any;
    heavy: any;
    speed: any;
    angle: any;
    is_landed: any;
    px: any;
    pz: any;
    vely: number;
    vx: any;
    vy: any;
    vz: any;
    AddMoisture(delta: any): any;
    ChangeImageName(newname: any): any;
    ClearOwner(owner: any): any;
    DiluteMoisture(item: any, count: any): any;
    DoDropPhysics(x: any, y: any, z: any, randomdir: any, speedmult: any): any;
    EnableMoisture(enable: any): any;
    GetContainer(): any;
    GetGrandOwner(): any;
    GetMoisture(): any;
    GetSlotNum(): any;
    HibernateLivingItem(): any;
    InheritMoisture(moisture: any, iswet: any): any;
    IsHeld(): boolean;
    IsHeldBy(guy: any): boolean;
    IsSheltered(): boolean;
    IsWet(): boolean;
    OnDropped(randomdir: any, speedmult: any): any;
    OnPickup(pickupguy: any, src_pos: any): any;
    OnPutInInventory(owner: any): any;
    OnRemoveEntity(): any;
    OnRemoveFromEntity(): any;
    OnRemoved(): any;
    OnUpdate(dt: any): any;
    RemoveFromOwner(wholestack: any): any;
    SetLanded(is_landed: any, should_poll_for_landing: any): any;
    SetOnActiveItemFn(fn: any): any;
    SetOnDroppedFn(fn: any): any;
    SetOnPickupFn(fn: any): any;
    SetOnPutInInventoryFn(fn: any): any;
    SetOwner(owner: any): any;
    SetSinks(should_sink: any): any;
    ShouldSink(): any;
    TryToSink(): any;
    WakeLivingItem(): any;
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
    moisture: number;
    iswet: boolean;
    stacksize: any;
    owner: any;
    t: any;
    dt: any;
    targetMoisture: any;
    data: any;
    AttachReplica(replica: any): any;
    DiluteMoisture(item: any, count: any): any;
    DoDelta(delta: any): any;
    GetDebugString(): any;
    GetTargetMoisture(): any;
    InheritMoisture(moisture: any, iswet: any): any;
    OnLoad(data: any): any;
    OnRemoveEntity(): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetMoisture(moisture: any): any;
    UpdateMoisture(): any;
  }

  interface Key {
    inst: any;
    keytype: any;
    onused: any;
    onremoved: any;
    OnRemoveFromEntity(): any;
    OnRemoved(lock: any, doer: any): any;
    OnUsed(lock: any, doer: any): any;
    SetOnRemovedFn(fn: any): any;
    SetOnUsedFn(fn: any): any;
  }

  interface KlausSackKey {
    inst: any;
    task: any;
    truekey: boolean;
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
    DeserializeLocations(data: any): any;
    ForgetLocation(name: any): any;
    GetDebugString(): any;
    GetLocation(name: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    RememberLocation(name: any, pos: any, dont_overwrite: any): any;
    SerializeLocations(): any;
  }

  interface LavaArenaMobTracker {
    inst: any;
    ents: any;
    count: number;
    ret: any;
    dists: any;
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
    GetAllMobs(): any;
    GetNumMobs(): any;
    StartTracking(ent: any): any;
    StopTracking(ent: any): any;
  }

  interface Leader {
    inst: any;
    followers: any;
    numfollowers: number;
    count: number;
    AddFollower(follower: any): any;
    CountFollowers(tag: any): any;
    GetDebugString(): any;
    IsBeingFollowedBy(prefabName: any): boolean;
    IsFollower(guy: any): boolean;
    LoadPostPass(newents: any, savedata: any): any;
    OnAttacked(attacker: any): any;
    OnNewTarget(target: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    RemoveAllFollowers(): any;
    RemoveAllFollowersOnDeath(): any;
    RemoveFollower(follower: any, invalid: any): any;
    RemoveFollowersByTag(tag: any, validateremovefn: any): any;
  }

  interface Lighter {
    inst: any;
    onlight: any;
    Light(target: any): any;
    OnRemoveFromEntity(): any;
    SetOnLightFn(fn: any): any;
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
    i_colour_r: any;
    t: any;
    EndTween(): any;
    OnUpdate(dt: any): any;
    StartTween(
      light: any,
      rad: any,
      intensity: any,
      falloff: any,
      colour: any,
      time: any,
      callback: any
    ): any;
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
    CompatableKey(keytype: any): any;
    GetDebugString(): any;
    IsLocked(): boolean;
    IsStuck(): boolean;
    LoadPostPass(newents: any, data: any): any;
    Lock(doer: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetKey(key: any): any;
    SetLocked(locked: any): any;
    SetOnLockedFn(fn: any): any;
    SetOnUnlockedFn(fn: any): any;
    TestForUnlock(key: any): any;
    Unlock(key: any, doer: any): any;
  }

  interface Dest {
    act_pos: any;
    GetPoint(): any;
    IsValid(): boolean;
  }

  interface LocoMotor {
    inst: any;
    ismastersim: any;
    RunSpeed: any;
    FasterOnRoad: any;
    ExternalSpeedMultiplier: any;
    GetSpeedMultiplier: any;
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
    tempgroundspeedmultiplier: any;
    tempgroundspeedmulttime: any;
    tempgroundtile: any;
    ground: any;
    x: any;
    y: any;
    z: any;
    oncreep: any;
    t: any;
    wantstomoveforward: boolean;
    wantstorun: boolean;
    path: any;
    action_pos: any;
    idle_anim: any;
    success: any;
    reason: any;
    pos: any;
    extra_arrive_dist: any;
    last_platform_visited: any;
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
    can_hop: boolean;
    px: any;
    pz: any;
    found_platform: any;
    blocked: boolean;
    path_x: any;
    path_z: any;
    p_length: any;
    platform_dir_x: any;
    platform_dir_z: any;
    platform_x: any;
    platform_z: any;
    embarker: any;
    tx: any;
    ty: any;
    destpos_x: any;
    destpos_y: any;
    destpos_z: any;
    mypos_x: any;
    mypos_y: any;
    mypos_z: any;
    reached_dest: any;
    invalid: any;
    dsq: any;
    run_dist: any;
    act_pos: any;
    pathstatus: any;
    foundpath: any;
    steps: any;
    currentstep: number;
    handle: any;
    facepos_x: any;
    facepos_y: any;
    facepos_z: any;
    step: any;
    steppos_x: any;
    steppos_y: any;
    steppos_z: any;
    step_distsq: any;
    angle: any;
    should_locomote: boolean;
    is_moving: any;
    is_running: any;
    cur_speed: any;
    rotation: any;
    forward_x: any;
    forward_z: any;
    dest_dot_forward: number;
    map: any;
    my_platform: any;
    dest_dir_x: any;
    dest_dir_z: any;
    dist: any;
    other_platform: any;
    forward_angle_span: number;
    hop_x: any;
    hop_z: any;
    target_platform: any;
    too_early_top_hop: any;
    temp_x: any;
    temp_z: any;
    temp_platform: any;
    speed_mult: any;
    desired_speed: any;
    p0: any;
    p1: any;
    desttile_x: any;
    desttile_y: any;
    isle0: any;
    isle1: any;
    CheckEdge(
      my_platform: any,
      map: any,
      my_x: any,
      my_z: any,
      dir_x: any,
      dir_z: any,
      radius: any
    ): any;
    Clear(): any;
    EnableGroundSpeedMultiplier(enable: any): any;
    FindPath(): any;
    FinishHopping(): any;
    GetDebugString(): any;
    GetExternalSpeedMultiplier(source: any, key: any): any;
    GetRunSpeed(): any;
    GetWalkSpeed(): any;
    GoToEntity(target: any, bufferedaction: any, run: any): any;
    GoToPoint(pt: any, bufferedaction: any, run: any, overridedest: any): any;
    HasDestination(): boolean;
    IsAtEdge(
      my_platform: any,
      map: any,
      my_x: any,
      my_z: any,
      dir_x: any,
      dir_z: any
    ): boolean;
    KillPathSearch(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    PreviewAction(bufferedaction: any, run: any, try_instant: any): any;
    PushAction(bufferedaction: any, run: any, try_instant: any): any;
    PushTempGroundSpeedMultiplier(mult: any, tile: any): any;
    RecalculateExternalSpeedMultiplier(sources: any): any;
    RemoveExternalSpeedMultiplier(source: any, key: any): any;
    ResetPath(): any;
    RunForward(direct: any): any;
    RunInDirection(direction: any, throttle: any): any;
    ScanForPlatform(my_platform: any, target_x: any, target_z: any): any;
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
    SetAllowPlatformHopping(enabled: any): any;
    SetBufferedAction(act: any): any;
    SetExternalSpeedMultiplier(source: any, key: any, m: any): any;
    SetReachDestinationCallback(fn: any): any;
    SetShouldRun(should_run: any): any;
    SetSlowMultiplier(m: any): any;
    SetTriggersCreep(triggers: any): any;
    StartHopping(x: any, z: any, target_platform: any): any;
    StartUpdatingInternal(): any;
    Stop(sgparams: any): any;
    StopMoving(): any;
    StopUpdatingInternal(): any;
    TempGroundSpeedMultiplier(): any;
    TempGroundTile(): any;
    TestForBlocked(
      my_x: any,
      my_z: any,
      dir_x: any,
      dir_z: any,
      radius: any,
      test_length: any
    ): any;
    UpdateGroundSpeedMultiplier(): any;
    UpdateHopping(dt: any): any;
    WaitingForPathSearch(): any;
    WalkForward(direct: any): any;
    WalkInDirection(direction: any, should_run: any): any;
    WantsToMoveForward(): any;
    WantsToRun(): any;
  }

  interface LootDropper {
    inst: any;
    numrandomloot: any;
    randomloot: any;
    chancerandomloot: any;
    totalrandomweight: number;
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
    randomhauntedloot: any;
    totalhauntedrandomweight: number;
    rnd: any;
    percent: number;
    loots: any;
    loot_table: any;
    recipe: any;
    recipeloot: any;
    min_speed: any;
    max_speed: any;
    y_speed: any;
    y_speed_variance: any;
    angle: any;
    speed: any;
    radius: any;
    sinangle: any;
    cosangle: any;
    prefabs: any;
    isstructure: any;
    prefabname: any;
    num_decor_loot: any;
    AddChanceLoot(prefab: any, chance: any): any;
    AddIfNotChanceLoot(prefab: any): any;
    AddRandomHauntedLoot(prefab: any, weight: any): any;
    AddRandomLoot(prefab: any, weight: any): any;
    DropLoot(pt: any): any;
    FlingItem(loot: any, pt: any, bouncedcb: any): any;
    GenerateLoot(): any;
    GetRecipeLoot(recipe: any): any;
    PickRandomLoot(): any;
    SetChanceLootTable(name: any): any;
    SetFlingTarget(pos: any, variance: any): any;
    SetLoot(loots: any): any;
    SetLootSetupFn(fn: any): any;
    SpawnLootPrefab(lootprefab: any, pt: any): any;
  }

  interface Machine {
    inst: any;
    turnonfn: any;
    turnofffn: any;
    ison: boolean;
    cooldowntime: number;
    oncooldown: boolean;
    data: any;
    CanInteract(): boolean;
    GetDebugString(): any;
    IsOn(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    TurnOff(): any;
    TurnOn(): any;
  }

  interface MadScienceLab {
    inst: any;
    task: any;
    product: any;
    stages: any;
    result: any;
    stage: any;
    str: string;
    GetDebugString(): any;
    IsMakingScience(): boolean;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetStage(stage: any, time_override: any): any;
    StartMakingScience(product: any): any;
  }

  interface Map {
    valid_tile: any;
    entities: any;
    tile: any;
    valid_water_tile: any;
    min_spacing_sq: any;
    x: any;
    y: any;
    z: any;
    min_distance_from_boat: any;
    radius: any;
    min_distance_from_land: any;
    mast_min_distance: number;
    is_valid_ground: boolean;
    pt_x: any;
    pt_y: any;
    pt_z: any;
    test_increment: any;
    map: any;
    CanDeployAtPoint(pt: any, inst: any, mouseover: any): boolean;
    CanDeployAtPointInWater(
      pt: any,
      inst: any,
      mouseover: any,
      data: any
    ): boolean;
    CanDeployMastAtPoint(pt: any, inst: any, mouseover: any): boolean;
    CanDeployPlantAtPoint(pt: any, inst: any): boolean;
    CanDeployRecipeAtPoint(pt: any, recipe: any, rot: any): boolean;
    CanDeployWallAtPoint(pt: any, inst: any): boolean;
    CanPlacePrefabFilteredAtPoint(x: any, y: any, z: any, prefab: any): boolean;
    CanPlaceTurfAtPoint(x: any, y: any, z: any): boolean;
    CanPlantAtPoint(x: any, y: any, z: any): boolean;
    CanTerraformAtPoint(x: any, y: any, z: any): boolean;
    CanTillSoilAtPoint(pt: any): boolean;
    FindNodeAtPoint(x: any, y: any, z: any): any;
    GetNearestPointOnWater(x: any, z: any, radius: any, iterations: any): any;
    GetPlatformAtPoint(pos_x: any, pos_z: any): any;
    InternalIsPointOnWater(test_x: any, test_z: any): any;
    IsAboveGroundAtPoint(x: any, y: any, z: any, allow_water: any): boolean;
    IsDeployPointClear(
      pt: any,
      inst: any,
      min_spacing: any,
      min_spacing_sq_fn: any,
      near_other_fn: any
    ): boolean;
    IsFarmableSoilAtPoint(x: any, y: any, z: any): boolean;
    IsGroundTargetBlocked(pt: any, range: any): boolean;
    IsOceanTileAtPoint(x: any, y: any, z: any): boolean;
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
    IsPointNearHole(pt: any, range: any): boolean;
    IsSurroundedByWater(x: any, y: any, z: any, radius: any): boolean;
    IsValidTileAtPoint(x: any, y: any, z: any): boolean;
    RegisterDeployExtraSpacing(spacing: any): any;
    RegisterGroundTargetBlocker(radius: any): any;
    RegisterTerraformExtraSpacing(spacing: any): any;
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
    dirty: boolean;
    ClearMap(): any;
    HasData(): boolean;
    IsCurrentWorld(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    RecordMap(target: any): any;
    SetOnDataChangedFn(fn: any): any;
    SetOnTeachFn(fn: any): any;
    TeachMap(target: any): any;
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
    restriction: any;
    toremove: any;
    AddRevealSource(source: any, restriction: any): any;
    OnRemoveFromEntity(): any;
    Refresh(): any;
    RefreshRevealSources(): any;
    RemoveRevealSource(source: any): any;
    SetIcon(iconname: any): any;
    SetIconPrefab(prefab: any): any;
    SetIconPriority(priority: any): any;
    Start(delay: any): any;
    StartRevealing(restriction: any): any;
    Stop(): any;
    StopRevealing(): any;
  }

  interface MapRevealer {
    inst: any;
    revealperiod: number;
    task: any;
    RevealMapToPlayer(player: any): any;
    Start(delay: any): any;
    Stop(): any;
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
    AddSailFurler(doer: any, strength: any): any;
    GetCurrentFurlUnits(): any;
    GetFurled0to1(): any;
    OnDeath(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    RemoveSailFurler(doer: any): any;
    SailFurled(): any;
    SailUnfurled(): any;
    SetBoat(boat: any): any;
    SetRudder(obj: any): any;
    SetSailForce(set: any): any;
    SetVelocityMod(set: any): any;
    UnfurlSail(): any;
  }

  interface MaxHealer {
    inst: any;
    healamount: any;
    Heal(target: any): any;
    SetHealthAmount(health: any): any;
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
    pt: any;
    theta: any;
    LoadPostPass(newents: any, savedata: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    SpawnAllLights(): any;
    SpawnLight(location: any): any;
    TakeOwnership(light: any): any;
  }

  interface MaxwellTalker {
    inst: any;
    speech: any;
    speeches: any;
    canskip: boolean;
    defaultvoice: string;
    inputhandlers: any;
    wilson: any;
    pt: any;
    length: any;
    DoTalk(): any;
    Initialize(): any;
    IsTalking(): boolean;
    OnCancel(): any;
    OnClick(): any;
    OnRemoveFromEntity(): any;
    SetSpeech(speech: any): any;
    StopTalking(): any;
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
    met: any;
    peripheral: any;
    rand: any;
    cost: any;
    level_params: any;
    duration: any;
    rate: any;
    cooldown: any;
    remaining_time: any;
    GetDebugString(): any;
    IsCoolingDown(): boolean;
    IsShowering(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    SpawnMeteor(mod: any): any;
    StartCooldown(): any;
    StartShower(level: any): any;
    StopShower(): any;
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
    Deactivate(): any;
    Explode(target: any): any;
    GetTarget(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    Reset(): any;
    SetAlignment(alignment: any): any;
    SetOnDeactivateFn(fn: any): any;
    SetOnExplodeFn(fn: any): any;
    SetOnResetFn(fn: any): any;
    SetOnSprungFn(fn: any): any;
    SetRadius(radius: any): any;
    SetReusable(reusable: any): any;
    SetTestTimeFn(fn: any): any;
    Spring(): any;
    StartTesting(): any;
    StopTesting(): any;
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
    Activate(): any;
    Deactivate(): any;
    DoActivePulse(): any;
    GetDebugString(): any;
    IsActive(): boolean;
    OnRemoveFromEntity(): any;
    SetOnActivatedFn(fn: any): any;
    SetOnDeactivatedFn(fn: any): any;
  }

  interface MinigameParticipator {
    inst: any;
    minigame: any;
    updatecheck: any;
    onminigameover: any;
    expireytime: any;
    GetDebugString(): any;
    GetMinigame(): any;
    OnRemoveFromEntity(): any;
    SetMinigame(minigame: any): any;
  }

  interface MinigameSpectator {
    inst: any;
    minigame: any;
    onminigameover: any;
    GetDebugString(): any;
    GetMinigame(): any;
    OnRemoveFromEntity(): any;
    SetWatchingMinigame(minigame: any): any;
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
    data: any;
    guidtable: any;
    x: any;
    y: any;
    z: any;
    ground: any;
    maxpositions: any;
    useablepositions: any;
    pos: any;
    num: any;
    minion: any;
    task: any;
    possiblespawns: any;
    AddPosition(num: any, tbl: any): any;
    CheckTileCompatibility(tile: any): any;
    GetDebugString(): any;
    GetNextSpawnTime(): any;
    GetSpawnLocation(num: any): any;
    KillAllMinions(): any;
    LoadPostPass(newents: any, savedata: any): any;
    LongUpdate(dt: any): any;
    MakeMinion(): any;
    MakeSpawnLocations(): any;
    MaxedMinions(): any;
    OnLoad(data: any): any;
    OnLostMinion(minion: any): any;
    OnSave(): any;
    RemovePosition(num: any): any;
    ResumeSpawn(time: any): any;
    SetSpawnInfo(time: any): any;
    SpawnNewMinion(): any;
    StartNextSpawn(): any;
    TakeOwnership(minion: any): any;
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
    moisturerate: any;
    dryingrate: any;
    equippedmoisturerate: any;
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
    AnnounceMoisture(oldSegs: any, newSegs: any): any;
    DoDelta(num: any, no_announce: any): any;
    ForceDry(force: any, source: any): any;
    GetDebugString(): any;
    GetDryingRate(moisturerate: any): any;
    GetEquippedMoistureRate(dryingrate: any): any;
    GetMaxMoisture(): any;
    GetMoisture(): any;
    GetMoisturePercent(): any;
    GetMoistureRate(): any;
    GetRate(): any;
    GetRateScale(): any;
    GetSegs(): any;
    GetSleepingBagDryingRate(): any;
    GetWaterproofInventory(): any;
    IsWet(): boolean;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    SetInherentWaterproofness(waterproofness: any): any;
    SetMoistureLevel(num: any): any;
    SetPercent(per: any): any;
    SetWaterproofInventory(waterproof: any): any;
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
    seasonmood: boolean;
    active: boolean;
    season: any;
    CheckForMoodChange(): any;
    Enable(enabled: any): any;
    GetDebugString(): any;
    IsInMood(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    ResetMood(): any;
    SetInMoodFn(fn: any): any;
    SetIsInMood(inmood: any, entireseason: any): any;
    SetLeaveMoodFn(fn: any): any;
    SetMoodSeason(activeseason: any): any;
    SetMoodTimeInDays(length: any, wait: any): any;
    ValidateMood(): any;
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
    ForcePetrify(): any;
    OnRemoveFromEntity(): any;
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
    success: any;
    reason: any;
    AcceptOffering(giver: any, item: any): any;
    SetCanAcceptFn(fn: any): any;
    SetOnAcceptFn(fn: any): any;
  }

  interface Named {
    inst: any;
    possiblenames: any;
    nameformat: any;
    name: any;
    OnLoad(data: any): any;
    OnSave(): any;
    PickNewName(): any;
    SetName(name: any): any;
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
    Cancel(): any;
    OnClick(): any;
    OnFinish(): any;
    OnRemoveEntity(): any;
    Play(lines: any): any;
    SetCancel(fn: any): any;
    SetInit(fn: any): any;
    SetName(name: any): any;
    SetScript(fn: any): any;
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
    boat_x: any;
    boat_y: any;
    boat_z: any;
    ents: any;
    Row(doer: any, pos: any): any;
    RowFail(doer: any): any;
  }

  interface Oasis {
    inst: any;
    radius: number;
    distsq: any;
    maxradius: any;
    GetProximityLevel(ent: any, range: any): any;
    IsEntityInOasis(ent: any): boolean;
  }

  interface ObjectSpawner {
    inst: any;
    objects: any;
    onnewobjectfn: any;
    references: any;
    LoadPostPass(newents: any, data: any): any;
    OnSave(): any;
    SpawnObject(obj: any): any;
    TakeOwnership(obj: any): any;
  }

  interface Occupiable {
    inst: any;
    occupant: any;
    occupanttype: any;
    persists: boolean;
    CanOccupy(occupier: any): boolean;
    GetOccupant(): any;
    Harvest(): any;
    IsOccupied(): boolean;
    Occupy(occupier: any): any;
    OnLoad(data: any, newents: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
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
    GetCurrentAngle(): any;
    GetCurrentSpeed(): any;
    GetCurrentVec3(): any;
    OnUpdate(dt: any): any;
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
    OnPhaseChanged(src: any, phase: any): any;
    OnWallUpdate(dt: any): any;
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
    ents: any;
    count: number;
    t: any;
    target_time: any;
    task: any;
    time_to_wait: any;
    ForceNextSpawn(): any;
    GetDebugString(): any;
    LongUpdate(dt: any): any;
    SetDensityInRange(range: any, density: any): any;
    SetMinimumSpacing(spacing: any): any;
    SetOnSpawnFn(fn: any): any;
    SetOnlySpawnOffscreen(offscreen: any): any;
    SetPrefab(prefab: any): any;
    SetRandomTimes(basetime: any, variance: any, no_reset: any): any;
    SetSpawnTestFn(fn: any): any;
    Start(): any;
    Stop(): any;
    TrySpawn(prefab: any): any;
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
    goop: any;
    owner: any;
    holder: any;
    slot: any;
    x: any;
    y: any;
    z: any;
    Dilute(number: any, timeleft: any): any;
    GetDebugString(): any;
    GetLocalMultiplier(): any;
    GetPercent(): any;
    IsFresh(): boolean;
    IsSpoiled(): boolean;
    IsStale(): boolean;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnRemoveEntity(): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    Perish(): any;
    ReducePercent(amount: any): any;
    SetLocalMultiplier(newMult: any): any;
    SetNewMaxPerishTime(newtime: any): any;
    SetOnPerishFn(fn: any): any;
    SetPercent(percent: any): any;
    SetPerishTime(time: any): any;
    StartPerishing(): any;
    StopPerishing(): any;
  }

  interface PetHealthBar {
    inst: any;
    ismastersim: any;
    corrosives: any;
    hots: any;
    val: any;
    k: any;
    pet: any;
    task: any;
    down: any;
    up: any;
    status: any;
    GetMaxHealth(): any;
    GetOverTime(): any;
    GetPercent(): any;
    GetSymbol(): any;
    OnUpdate(dt: any): any;
    SetMaxHealth(max_health: any): any;
    SetPet(pet: any, symbol: any, maxhealth: any): any;
    SetSymbol(symbol: any): any;
  }

  interface PetLeash {
    inst: any;
    petprefab: any;
    pets: any;
    maxpets: number;
    numpets: number;
    onspawnfn: any;
    ondespawnfn: any;
    pet: any;
    toremove: any;
    data: any;
    DespawnAllPets(): any;
    DespawnPet(pet: any): any;
    GetMaxPets(): any;
    GetNumPets(): any;
    GetPets(): any;
    HasPetWithTag(tag: any): boolean;
    IsFull(): boolean;
    IsPet(pet: any): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetMaxPets(num: any): any;
    SetOnDespawnFn(fn: any): any;
    SetOnSpawnFn(fn: any): any;
    SetPetPrefab(prefab: any): any;
    SpawnPetAt(x: any, y: any, z: any, prefaboverride: any, skin: any): any;
  }

  interface Petrifiable {
    inst: any;
    onPetrifiedFn: any;
    petrified: boolean;
    GetDebugString(): any;
    IsPetrified(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    Petrify(immediate: any): any;
    SetPetrifiedFn(fn: any): any;
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
    time_to_pickable: any;
    str: string;
    makebarrenfn: any;
    fertilize_cycles: number;
    data: any;
    wasempty: any;
    loot: any;
    num: any;
    pt: any;
    CanBeFertilized(): boolean;
    CanBePicked(): boolean;
    ChangeProduct(newProduct: any): any;
    Fertilize(fertilizer: any, doer: any): any;
    FinishGrowing(): any;
    GetDebugString(): any;
    IsBarren(): boolean;
    IsWildfireStarter(): boolean;
    LongUpdate(dt: any): any;
    MakeBarren(): any;
    MakeEmpty(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnTransplant(): any;
    Pause(): any;
    Pick(picker: any): any;
    Regen(): any;
    Resume(): any;
    SetMakeBarrenFn(fn: any): any;
    SetMakeEmptyFn(fn: any): any;
    SetOnPickedFn(fn: any): any;
    SetOnRegenFn(fn: any): any;
    SetUp(product: any, regen: any, number: any): any;
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
    prevState: any;
    remaining: any;
    IsStuck(): boolean;
    IsValidPinTarget(): boolean;
    OnRemoveFromEntity(): any;
    RemainingRatio(): any;
    SetDefaultWearOffTime(wearofftime: any): any;
    SpawnShatterFX(ratio: any): any;
    StartWearingOff(wearofftime: any): any;
    Stick(): any;
    Unstick(): any;
    UpdateStuckStatus(): any;
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
    action: any;
    pt: any;
    x: any;
    y: any;
    z: any;
    rot: any;
    GetDeployAction(): any;
    LinkEntity(ent: any): any;
    OnUpdate(dt: any): any;
    OnWallUpdate(dt: any): any;
    SetBuilder(builder: any, recipe: any, invobject: any): any;
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
    fiveradius: any;
    spawnpoint: any;
    targetradius: any;
    ents: any;
    offspring: any;
    data: any;
    GetDebugString(): any;
    OnLoad(data: any): any;
    OnRemoveEntity(): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    ResetGrowthTime(): any;
    SetProduct(product: any): any;
    SetRegrowthRate(rate: any): any;
    SetSearchTag(tag: any): any;
    TrySpawnNearby(): any;
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
    topfilter: any;
    ret: any;
    actions: any;
    sorted_acts: any;
    player_pos: any;
    player_platform: any;
    target_platform: any;
    usedefault: any;
    useitem: any;
    equipitem: any;
    ispassable: any;
    disable_right_click: boolean;
    steering_actions: any;
    isaoetargeting: boolean;
    wantsaoetargeting: boolean;
    cansee: any;
    x: any;
    y: any;
    z: any;
    lmb: any;
    rmb: any;
    lmbs: any;
    rmbs: any;
    DoGetMouseActions(position: any, target: any): any;
    GetEquippedItemActions(target: any, useitem: any, right: any): any;
    GetInventoryActions(useitem: any, right: any): any;
    GetLeftClickActions(position: any, target: any): any;
    GetPointActions(pos: any, useitem: any, right: any): any;
    GetPointSpecialActions(pos: any, useitem: any, right: any): any;
    GetRightClickActions(position: any, target: any): any;
    GetSceneActions(useitem: any, right: any): any;
    GetSteeringActions(inst: any, pos: any, right: any): any;
    GetUseItemActions(target: any, useitem: any, right: any): any;
    HasContainerWidgetAction(): boolean;
    OnUpdateActionFilterStack(): any;
    PopActionFilter(filterfn: any): any;
    PushActionFilter(filterfn: any, priority: any): any;
    RegisterContainer(container: any): any;
    SortActionList(actions: any, target: any, useitem: any): any;
    UnregisterContainer(container: any): any;
  }

  interface PlayerAvatarData {
    inst: any;
    allowemptyname: any;
    allowburnt: any;
    hasdata: boolean;
    savestrings: any;
    strings: any;
    saveskins: any;
    skins: any;
    base_skin: any;
    body_skin: any;
    hand_skin: any;
    legs_skin: any;
    feet_skin: any;
    savenumbers: any;
    numbers: any;
    saveequip: any;
    equip: any;
    data: any;
    temp: any;
    AddAgeData(save: any): any;
    AddBaseSkinData(save: any): any;
    AddClothingData(save: any): any;
    AddEquipData(save: any): any;
    AddNameData(save: any): any;
    AddPlayerData(save: any): any;
    GetData(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetAllowBurnt(allow: any): any;
    SetAllowEmptyName(allow: any): any;
    SetData(client_obj: any): any;
  }

  interface PlayerController {
    inst: any;
    map: any;
    ismastersim: any;
    locomotor: any;
    HasItemSlots: any;
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
    controller_target_age: number;
    controller_attack_target: any;
    controller_attack_target_ally_cd: any;
    controller_targeting_modifier_down: boolean;
    controller_targeting_lock_timer: number;
    controller_targeting_lock_target: boolean;
    controller_targeting_targets: any;
    controller_targeting_target_index: number;
    reticule: any;
    terraformer: any;
    deploy_mode: boolean;
    deployplacer: any;
    placer: any;
    placer_recipe: any;
    placer_recipe_skin: any;
    placer_cached: any;
    LMBaction: any;
    RMBaction: any;
    handler: any;
    actionbuttonoverride: any;
    is_map_enabled: boolean;
    can_use_map: boolean;
    classified: any;
    ondetachclassified: any;
    inv_obj: any;
    code: number;
    bit: number;
    item: any;
    obj: any;
    act: any;
    lmb: any;
    rmb: any;
    isspecial: any;
    rider: any;
    chainattack_cb: any;
    overridedest: any;
    slot: any;
    container: any;
    rotamount: number;
    testfn: any;
    combat: any;
    x: any;
    y: number;
    z: any;
    attackrange: any;
    rad: any;
    has_weapon: any;
    inventory: any;
    tool: any;
    inventoryitem: any;
    reach: any;
    nearby_ents: any;
    nearest_dist: any;
    force_attack: any;
    target: any;
    buffaction: any;
    usedefault: any;
    force_target_distsq: any;
    pickup_tags: any;
    ents: any;
    action: any;
    actioncode: any;
    action_mod_name: any;
    noforce: any;
    client_obj: any;
    isenabled: any;
    ishudblocking: any;
    highlight_guy: any;
    controller_mode: any;
    new_highlight: any;
    new_highlight_guy: any;
    placer_item: any;
    placer_name: any;
    placer_skin: any;
    terraform: boolean;
    hidespecialactionreticule: boolean;
    now: any;
    isbusy: any;
    isidle: any;
    fn: any;
    attack_control: boolean;
    retarget: any;
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
    platform_physics: any;
    hop_distance: any;
    normalized_hop_dir_x: any;
    normalized_hop_dir_z: any;
    velocity: any;
    normalized_platform_velocity_x: any;
    normalized_platform_velocity_z: any;
    hop_dir_dot_platform_velocity: any;
    hop_rubber_band_distance: any;
    hop_rubber_band_distance_sq: any;
    platform: any;
    pos_x: any;
    pos_z: any;
    embarker: any;
    disembark_x: any;
    disembark_z: any;
    target_platform: any;
    pt: any;
    x0: any;
    y0: any;
    z0: any;
    distancetotargetsq: any;
    stopdistancesq: number;
    dir: any;
    steeringwheeluser: any;
    t: any;
    ROT_REPEAT: number;
    ZOOM_REPEAT: number;
    time: any;
    lastrottime: any;
    lastzoomtime: any;
    currentbuffaction: any;
    equippable: any;
    entity_under_mouse: any;
    mouseover: any;
    position: any;
    controlmods: any;
    relative_x: any;
    relative_z: any;
    platform_x: any;
    platform_y: any;
    platform_z: any;
    itempos: any;
    islocal: any;
    equipitem: any;
    isaoetargeting: any;
    skin_index: any;
    Activate(): any;
    AttachClassified(classified: any): any;
    CanLocomote(): boolean;
    CancelAOETargeting(): any;
    CancelDeployPlacement(): any;
    CancelPlacement(cache: any): any;
    ClearControlMods(): any;
    ControllerTargetLock(enable: any): any;
    CooldownRemoteController(dt: any): any;
    CycleControllerAttackTargetBack(): any;
    CycleControllerAttackTargetForward(): any;
    Deactivate(): any;
    DecodeControlMods(code: any): any;
    DetachClassified(): any;
    DoAction(buffaction: any): any;
    DoActionAutoEquip(buffaction: any): any;
    DoActionButton(): any;
    DoAttackButton(retarget: any): any;
    DoBoatSteering(dt: any): any;
    DoCameraControl(): any;
    DoControllerActionButton(): any;
    DoControllerAltActionButton(): any;
    DoControllerAttackButton(target: any): any;
    DoControllerDropItemFromInvTile(item: any, single: any): any;
    DoControllerInspectItemFromInvTile(item: any): any;
    DoControllerUseItemOnSceneFromInvTile(item: any): any;
    DoControllerUseItemOnSelfFromInvTile(item: any): any;
    DoDirectWalking(dt: any): any;
    DoDragWalking(dt: any): any;
    DoInspectButton(): any;
    DoPredictHopping(dt: any): any;
    DoPredictWalking(dt: any): any;
    DoResurrectButton(): any;
    EchoReticuleAt(x: any, y: any, z: any): any;
    Enable(val: any): any;
    EnableMapControls(val: any): any;
    EncodeControlMods(): any;
    GetAOETargetingPos(): any;
    GetActionButtonAction(force_target: any): any;
    GetAttackTarget(force_attack: any, force_target: any, isretarget: any): any;
    GetControllerAttackTarget(): any;
    GetControllerTarget(): any;
    GetCursorInventoryObject(): any;
    GetCursorInventorySlotAndContainer(): any;
    GetGroundUseAction(position: any): any;
    GetGroundUseSpecialAction(position: any, right: any): any;
    GetHoverTextOverride(): any;
    GetInspectButtonAction(target: any): any;
    GetItemSelfAction(item: any): any;
    GetItemUseAction(active_item: any, target: any): any;
    GetLeftMouseAction(): any;
    GetPlatformRelativePosition(absolute_x: any, absolute_z: any): any;
    GetRemoteDirectVector(): any;
    GetRemoteDragPosition(): any;
    GetRemotePredictPosition(): any;
    GetResurrectButtonAction(): any;
    GetRightMouseAction(): any;
    GetSceneItemControllerAction(item: any): any;
    HasAOETargeting(): boolean;
    HasGroundUseSpecialAction(right: any): boolean;
    IsAOETargeting(): boolean;
    IsAnyOfControlsPressed(): boolean;
    IsBusy(): boolean;
    IsControlPressed(control: any): boolean;
    IsControllerTargetLockEnabled(): boolean;
    IsControllerTargetLocked(): boolean;
    IsControllerTargetingModifierDown(): boolean;
    IsDoingOrWorking(): boolean;
    IsEnabled(): boolean;
    IsLocalOrRemoteHopping(): boolean;
    IsMapControlsEnabled(): boolean;
    OnControl(control: any, down: any): any;
    OnLeftClick(down: any): any;
    OnLeftUp(): any;
    OnRemoteActionButton(
      actioncode: any,
      target: any,
      isreleased: any,
      noforce: any,
      mod_name: any
    ): any;
    OnRemoteAttackButton(target: any, force_attack: any, noforce: any): any;
    OnRemoteBufferedAction(): any;
    OnRemoteControllerActionButton(
      actioncode: any,
      target: any,
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
    OnRemoteControllerActionButtonPoint(
      actioncode: any,
      position: any,
      isreleased: any,
      noforce: any,
      mod_name: any
    ): any;
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
    OnRemoteControllerAttackButton(
      target: any,
      isreleased: any,
      noforce: any
    ): any;
    OnRemoteDirectWalking(x: any, z: any): any;
    OnRemoteDragWalking(x: any, z: any): any;
    OnRemoteInspectButton(target: any): any;
    OnRemoteLeftClick(
      actioncode: any,
      position: any,
      target: any,
      isreleased: any,
      controlmodscode: any,
      noforce: any,
      mod_name: any
    ): any;
    OnRemotePredictWalking(x: any, z: any, isdirectwalking: any): any;
    OnRemoteResurrectButton(): any;
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
    OnRemoteStartHop(x: any, z: any, platform: any): any;
    OnRemoteStopAllControls(): any;
    OnRemoteStopControl(control: any): any;
    OnRemoteStopHopping(): any;
    OnRemoteStopWalking(): any;
    OnRemoveFromEntity(): any;
    OnRightClick(down: any): any;
    OnUpdate(dt: any): any;
    RefreshReticule(): any;
    RemoteActionButton(action: any, isreleased: any): any;
    RemoteAttackButton(target: any, force_attack: any): any;
    RemoteBufferedAction(buffaction: any): any;
    RemoteControllerUseItemOnItemFromInvTile(
      buffaction: any,
      item: any,
      active_item: any
    ): any;
    RemoteControllerUseItemOnSceneFromInvTile(buffaction: any, item: any): any;
    RemoteControllerUseItemOnSelfFromInvTile(buffaction: any, item: any): any;
    RemoteDirectWalking(x: any, z: any): any;
    RemoteDragWalking(x: any, z: any): any;
    RemoteDropItemFromInvTile(item: any, single: any): any;
    RemoteInspectButton(action: any): any;
    RemoteInspectItemFromInvTile(item: any): any;
    RemoteMakeRecipeAtPoint(recipe: any, pt: any, rot: any, skin: any): any;
    RemoteMakeRecipeFromMenu(recipe: any, skin: any): any;
    RemotePausePrediction(frames: any): any;
    RemotePredictWalking(x: any, z: any): any;
    RemoteResurrectButton(): any;
    RemoteStopAllControls(): any;
    RemoteStopControl(control: any): any;
    RemoteStopWalking(): any;
    RemoteUseItemFromInvTile(buffaction: any, item: any): any;
    ResetRemoteController(): any;
    RotLeft(): any;
    RotRight(): any;
    SetCanUseMap(val: any): any;
    StartBuildPlacementMode(recipe: any, skin: any): any;
    ToggleController(val: any): any;
    TryAOETargeting(): any;
    UpdateControllerTargets(dt: any): any;
    UsingMouse(): any;
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
    DoStrike(): any;
    GetHitChance(): any;
    SetHitChance(chance: any): any;
    SetOnStrikeFn(fn: any): any;
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
    originaltargetmode: any;
    targetmode: any;
    ForceUpdate(): any;
    GetDebugString(): any;
    IsPlayerClose(): boolean;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    Schedule(): any;
    SetDist(near: any, far: any): any;
    SetLostTargetFn(func: any): any;
    SetOnPlayerFar(fn: any): any;
    SetOnPlayerNear(fn: any): any;
    SetPlayerAliveMode(alivemode: any): any;
    SetTarget(target: any): any;
    SetTargetMode(mode: any, target: any, override: any): any;
    Stop(): any;
  }

  interface PlayerTargetIndicator {
    inst: any;
    max_range: any;
    offScreenPlayers: any;
    onScreenPlayersLastTick: any;
    onplayerexited: any;
    checked: any;
    OnRemoveFromEntity(): any;
    OnUpdate(): any;
    ShouldRemoveIndicator(target: any): any;
    ShouldShowIndicator(target: any): any;
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
    ForceGoggleVision(force: any): any;
    ForceNightVision(force: any): any;
    GetCCPhaseFn(): any;
    GetCCTable(): any;
    HasGhostVision(): boolean;
    HasGoggleVision(): boolean;
    HasNightVision(): boolean;
    HasNightmareVision(): boolean;
    SetCustomCCTable(cctable: any): any;
    SetGhostVision(enabled: any): any;
    SetNightmareVision(enabled: any): any;
    UpdateCCTable(): any;
  }

  interface PlayerVoter {
    inst: any;
    classified: any;
    ondetachclassified: any;
    onvoteselectiondirty: any;
    AttachClassified(classified: any): any;
    CanVote(): boolean;
    DetachClassified(): any;
    GetSelection(): any;
    HasVoted(): boolean;
    IsSquelched(): boolean;
    OnRemoveFromEntity(): any;
    SetSelection(sel: any): any;
    SetSquelched(val: any): any;
    SubmitVote(sel: any): any;
  }

  interface Pollinator {
    inst: any;
    flowers: any;
    distance: number;
    maxdensity: number;
    collectcount: number;
    target: any;
    parentFlower: any;
    flower: any;
    x: any;
    y: any;
    z: any;
    nearbyentities: any;
    CanPollinate(flower: any): boolean;
    CheckFlowerDensity(): any;
    CreateFlower(): any;
    GetDebugString(): any;
    HasCollectedEnough(): boolean;
    OnRemoveFromEntity(): any;
    Pollinate(flower: any): any;
  }

  interface PortableCookware {
    inst: any;
    ondismantlefn: any;
    Dismantle(doer: any): any;
    SetOnDismantleFn(fn: any): any;
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
    x: any;
    y: any;
    z: any;
    fx: any;
    slot: any;
    data: any;
    Drop(): any;
    GetDebugString(): any;
    LinkToPlayer(player: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    Revert(): any;
    StopWaitingForPlayer(): any;
    WaitForPlayer(userid: any, delay: any): any;
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
    dozeOffTask: any;
    delaytask: any;
    launchoffset: any;
    x: any;
    y: any;
    z: any;
    facing_angle: any;
    attacker: any;
    delaypos: any;
    weapon: any;
    pos: any;
    rot: any;
    direction: any;
    angle: any;
    Catch(catcher: any): any;
    DelayVisibility(duration: any): any;
    GetDebugString(): any;
    Hit(target: any): any;
    IsThrown(): boolean;
    LoadPostPass(newents: any, savedata: any): any;
    Miss(target: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    RotateToTarget(dest: any): any;
    SetCanCatch(cancatch: any): any;
    SetHitDist(dist: any): any;
    SetHoming(homing: any): any;
    SetLaunchOffset(offset: any): any;
    SetOnCaughtFn(fn: any): any;
    SetOnHitFn(fn: any): any;
    SetOnMissFn(fn: any): any;
    SetOnThrownFn(fn: any): any;
    SetRange(range: any): any;
    SetSpeed(speed: any): any;
    SetStimuli(stimuli: any): any;
    Stop(): any;
    Throw(owner: any, target: any, attacker: any): any;
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
    task: any;
    dt: number;
    source: any;
    pauseheating: boolean;
    tile: any;
    data: any;
    pos: any;
    prop_range: any;
    ents: any;
    dmg_range: any;
    dmg_range_sq: any;
    prop_range_sq: any;
    isendothermic: any;
    x: any;
    y: any;
    z: any;
    AddHeat(amount: any): any;
    Delay(time: any): any;
    Flash(): any;
    GetDebugString(): any;
    GetHeatResistance(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetOnFlashPoint(fn: any): any;
    StartSpreading(source: any): any;
    StartUpdating(): any;
    StopSpreading(reset: any, heatpct: any): any;
    StopUpdating(): any;
  }

  interface Prototyper {
    inst: any;
    trees: any;
    on: boolean;
    onturnon: any;
    onturnoff: any;
    doers: any;
    onremovedoer: any;
    Activate(doer: any, recipe: any): any;
    GetTechTrees(): any;
    OnRemoveFromEntity(): any;
    TurnOff(doer: any): any;
    TurnOn(doer: any): any;
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
    spawn: any;
    data: any;
    refs: any;
    DoWave(): any;
    GetCurrentWave(): any;
    GetSpawnPos(): any;
    GetSpawnRot(): any;
    GetWaveSize(): any;
    IsActive(): boolean;
    LoadPostPass(ents: any, data: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnSpawnDeath(spawn: any): any;
    Reset(): any;
    SpawnEntity(): any;
    Start(): any;
    Stop(): any;
    StopTrackingSpawn(spawn: any): any;
    TrackSpawn(spawn: any): any;
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
    FullyRestockItem(recipe: any): any;
    GetDebugString(): any;
    HasAnyStock(): boolean;
    OnItemCrafted(recipe: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(data: any): any;
    OnSave(): any;
    RemoveAllStock(allow_restock: any): any;
    RemoveStock(recipe: any, allow_restock: any): any;
    SetupItem(data: any, start_restock_timer: any): any;
  }

  interface Repairable {
    inst: any;
    repairmaterial: any;
    noannounce: any;
    checkmaterialfn: any;
    success: any;
    reason: any;
    NeedsRepairs(): any;
    OnRemoveFromEntity(): any;
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
    Activate(): any;
    TurnOff(): any;
    TurnOn(): any;
  }

  interface Resistance {
    inst: any;
    tags: any;
    onresistdamage: any;
    shouldresistfn: any;
    str: any;
    AddResistance(tag: any): any;
    GetDebugString(): any;
    HasResistance(attacker: any, weapon: any): boolean;
    HasResistanceToTag(tag: any): boolean;
    RemoveResistance(tag: any): any;
    ResistDamage(damage_amount: any): any;
    SetOnResistDamageFn(fn: any): any;
    SetShouldResistFn(fn: any): any;
    ShouldResistDamage(): any;
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
    pos: any;
    ping: any;
    a: any;
    x: any;
    y: any;
    z: any;
    x0: any;
    y0: any;
    z0: any;
    Blip(): any;
    CreateReticule(): any;
    DestroyReticule(): any;
    OnCameraUpdate(dt: any): any;
    OnUpdate(dt: any): any;
    PingReticuleAt(pos: any): any;
    UpdateColour(): any;
    UpdatePosition(dt: any): any;
  }

  interface RevivableCorpse {
    inst: any;
    ismastersim: any;
    revive_health_percet: number;
    revivespeedmult: number;
    canberevivedbyfn: any;
    tagmults: any;
    mult: any;
    CanBeRevivedBy(reviver: any): boolean;
    GetReviveHealthPercent(): any;
    GetReviveSpeedMult(reviver: any): any;
    Revive(reviver: any): any;
    SetCanBeRevivedByFn(fn: any): any;
    SetCorpse(corpse: any): any;
    SetReviveHealthPercent(percent: any): any;
    SetReviveSpeedMult(mult: any): any;
    SetReviveSpeedMultForTag(tag: any, mult: any): any;
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
    pt: any;
    oldrider: any;
    data: any;
    Buck(gentle: any): any;
    GetDebugString(): any;
    GetRider(): any;
    IsBeingRidden(): boolean;
    IsSaddled(): boolean;
    OnLoadDomesticatable(data: any): any;
    OnRemoveFromEntity(): any;
    OnSaveDomesticatable(): any;
    SetRequiredObedience(required: any): any;
    SetRider(rider: any): any;
    SetSaddle(doer: any, newsaddle: any): any;
    SetSaddleable(saddleable: any): any;
    TestObedience(): any;
    TimeSinceLastRide(): any;
  }

  interface Rider {
    inst: any;
    mount: any;
    saddle: any;
    rideable: any;
    saddler: any;
    x: any;
    y: any;
    z: any;
    tx: any;
    ty: any;
    tz: any;
    riding: boolean;
    redirectdamagefn: any;
    canbepinned: boolean;
    ex_mount: any;
    data: any;
    ActualDismount(): any;
    Dismount(): any;
    GetMount(): any;
    GetSaddle(): any;
    IsRiding(): boolean;
    Mount(target: any, instant: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    StartTracking(mount: any): any;
    StopTracking(mount: any): any;
  }

  interface Saddler {
    inst: any;
    swapsymbol: any;
    swapbuild: any;
    bonusdamage: any;
    speedmult: any;
    discardedcb: any;
    GetBonusDamage(target: any): any;
    GetBonusSpeedMult(): any;
    SetBonusDamage(damage: any): any;
    SetBonusSpeedMult(mult: any): any;
    SetDiscardedCallback(cb: any): any;
    SetSwaps(build: any, symbol: any): any;
  }

  interface SaltLicker {
    inst: any;
    salted: boolean;
    saltedduration: any;
    uses_per_lick: any;
    GetDebugString(): any;
    LoadPostPass(): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetSalted(salted: any): any;
    SetUp(uses_per_lick: any): any;
    Stop(): any;
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
    target: any;
    delta: any;
    percent_ignoresinduced: any;
    num_ghosts: any;
    num_alive: any;
    group_resist: any;
    total_dapperness: any;
    dapper_delta: any;
    moisture_delta: any;
    light_sanity_drain: any;
    light_delta: any;
    lightval: any;
    aura_delta: number;
    x: any;
    y: any;
    z: any;
    ents: any;
    mount: any;
    aura_val: any;
    ghost_delta: any;
    AddSanityPenalty(key: any, mod: any): any;
    DoDelta(delta: any, overtime: any): any;
    GetDebugString(): any;
    GetMaxWithPenalty(): any;
    GetPenaltyPercent(): any;
    GetPercent(): any;
    GetPercentWithPenalty(): any;
    GetRateScale(): any;
    GetSanityMode(): any;
    IsCrazy(): boolean;
    IsEnlightened(): boolean;
    IsInsane(): boolean;
    IsInsanityMode(): boolean;
    IsLunacyMode(): boolean;
    IsSane(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    Recalc(dt: any): any;
    RecalcGhostDrain(): any;
    RecalculatePenalty(): any;
    RemoveSanityPenalty(key: any): any;
    SetInducedInsanity(src: any, val: any): any;
    SetMax(amount: any): any;
    SetPercent(per: any, overtime: any): any;
    SetSanityMode(mode: any): any;
  }

  interface SanityAura {
    inst: any;
    aura: number;
    aurafn: any;
    aura_val: number;
    distsq: any;
    GetAura(observer: any): any;
    OnRemoveFromEntity(): any;
  }

  interface SavedRotation {
    inst: any;
    rot: any;
    OnLoad(data: any): any;
    OnSave(): any;
  }

  interface SavedScale {
    inst: any;
    sx: any;
    sy: any;
    sz: any;
    data: any;
    scale: any;
    OnLoad(data: any): any;
    OnSave(): any;
  }

  interface Scaler {
    inst: any;
    scale: number;
    ApplyScale(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetScale(scale: any): any;
  }

  interface ScenarioRunner {
    inst: any;
    scriptname: any;
    script: any;
    hasrunonce: boolean;
    data: any;
    ClearScenario(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    Reset(): any;
    Run(): any;
    SetScript(name: any): any;
  }

  interface SelfStacker {
    inst: any;
    searchradius: number;
    stackpartner: any;
    num: any;
    to_combine: any;
    CanSelfStack(): boolean;
    DoStack(): any;
    FindItemToStackWith(): any;
    OnEntityWake(): any;
  }

  interface SentientAxe {
    inst: any;
    owner: any;
    convo_task: any;
    say_task: any;
    warnlevel: number;
    waslow: boolean;
    MakeConversation(): any;
    OnBeavernessDelta(old: any, _new: any): any;
    OnBecomeBeaver(): any;
    OnBecomeHuman(): any;
    OnFinishedWork(target: any, action: any): any;
    Say(list: any, sound_override: any, delay: any): any;
    ScheduleConversation(delay: any): any;
    SetOwner(owner: any): any;
    ShouldMakeConversation(): any;
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
    x: any;
    y: any;
    z: any;
    num: any;
    speed: number;
    DoMultiShed(max: any, random: any): any;
    DoSingleShed(): any;
    StartShedding(interval: any): any;
    StopShedding(): any;
  }

  interface Shelf {
    inst: any;
    cantakeitemfn: any;
    itemonshelf: any;
    onitemtakenfn: any;
    cantakeitem: boolean;
    onshelfitemfn: any;
    ontakeitemfn: any;
    prevslot: any;
    prevcontainer: any;
    OnRemoveFromEntity(): any;
    PutItemOnShelf(item: any): any;
    SetOnShelfItem(fn: any): any;
    SetOnTakeItem(fn: any): any;
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
    GetDebugString(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetSheltered(issheltered: any): any;
    Start(): any;
    Stop(): any;
  }

  interface Shop {
    inst: any;
    tab: string;
    title: string;
    x: any;
    y: any;
    z: any;
    physcsPT: any;
    DeliverItems(items: any): any;
    SetStartTab(tab: any): any;
    SetTitle(title: any): any;
  }

  interface SinkholeSpawner {
    inst: any;
    targets: any;
    weighted_players: any;
    num_players: number;
    target_players: any;
    year_length: any;
    base_num_attacks: any;
    x: any;
    z: any;
    offset: any;
    sinkhole: any;
    data: any;
    towarn: any;
    toattack: any;
    s: any;
    DoTargetAttack(targetinfo: any): any;
    DoTargetWarning(targetinfo: any): any;
    GetDebugString(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    PushRemoteTargets(): any;
    SpawnSinkhole(spawnpt: any): any;
    StartSinkholes(): any;
    StopSinkholes(): any;
    UpdateTarget(targetinfo: any): any;
  }

  interface SizeTweener {
    inst: any;
    i_size: any;
    t_size: any;
    callback: any;
    time: any;
    timepassed: number;
    tweening: boolean;
    cb: any;
    s: any;
    EndTween(): any;
    OnUpdate(dt: any): any;
    StartTween(size: any, time: any, callback: any): any;
  }

  interface Skinner {
    inst: any;
    skin_name: string;
    clothing: any;
    skintype: string;
    base_skin: string;
    skin_data: any;
    skin_prefab: any;
    ClearAllClothing(): any;
    ClearClothing(type: any): any;
    GetClothing(): any;
    GetSkinMode(): any;
    HideAllClothing(anim_state: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetClothing(name: any): any;
    SetSkinMode(skintype: any, default_build: any): any;
    SetSkinName(skin_name: any): any;
    SetupNonPlayerData(): any;
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
    testtask: any;
    wearofftask: any;
    extraresist: any;
    diminishingtask: any;
    wasasleep: any;
    testtime: any;
    AddSleepiness(sleepiness: any, sleeptime: any): any;
    GetDebugString(): any;
    GetSleepTimeMultiplier(): any;
    GetTimeAsleep(): any;
    GetTimeAwake(): any;
    GoToSleep(sleeptime: any): any;
    IsAsleep(): boolean;
    IsHibernating(): boolean;
    IsInDeepSleep(): boolean;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetDefaultTests(): any;
    SetExtraResist(resist: any): any;
    SetNocturnal(b: any): any;
    SetResistance(resist: any): any;
    SetSleepTest(fn: any): any;
    SetTest(fn: any, time: any): any;
    SetWakeTest(fn: any, time: any): any;
    StartTesting(time: any): any;
    StopTesting(): any;
    WakeUp(): any;
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
    EatSoul(soul: any): any;
    SetOnEatSoulFn(fn: any): any;
  }

  interface Spawner {
    inst: any;
    child: any;
    delay: number;
    onoccupied: any;
    onvacate: any;
    spawnoffscreen: boolean;
    task: any;
    nextspawntime: any;
    queue_spawn: boolean;
    retry_period: any;
    spawn_in_water: any;
    spawn_on_boats: any;
    childname: any;
    retryperiod: any;
    data: any;
    refs: any;
    rad: any;
    x: any;
    y: any;
    z: any;
    start_angle: any;
    offset: any;
    CancelSpawning(): any;
    Configure(childname: any, delay: any, startdelay: any): any;
    GetDebugString(): any;
    GoHome(child: any): any;
    IsOccupied(): boolean;
    IsSpawnPending(): boolean;
    LoadPostPass(newents: any, savedata: any): any;
    OnChildKilled(child: any): any;
    OnLoad(data: any, newents: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    ReleaseChild(): any;
    SetOnOccupiedFn(fn: any): any;
    SetOnVacateFn(fn: any): any;
    SetOnlySpawnOffscreen(offscreen: any): any;
    SetQueueSpawning(queued: any, retryperiod: any): any;
    SetWaterSpawning(spawn_in_water: any, spawn_on_boats: any): any;
    SpawnWithDelay(delay: any): any;
    TakeOwnership(child: any): any;
  }

  interface SpawnFader {
    inst: any;
    fadeval: number;
    updating: boolean;
    k: any;
    Cancel(): any;
    FadeIn(): any;
    OnRemoveFromEntity(): any;
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
    x: any;
    y: any;
    z: any;
    rangesq: any;
    target: any;
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
    timeleft: any;
    LoadPostPass(newents: any, data: any): any;
    OnFinish(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnStart(): any;
    OnTarget(): any;
    OnUpdate(dt: any): any;
    ResumeSpell(): any;
    SetTarget(target: any): any;
    SetVariables(variables: any): any;
    StartSpell(): any;
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
    px: any;
    py: any;
    pz: any;
    CanCast(doer: any, target: any, pos: any): boolean;
    CastSpell(target: any, pos: any): any;
    OnRemoveFromEntity(): any;
    SetOnSpellCastFn(fn: any): any;
    SetSpellFn(fn: any): any;
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
    x: any;
    y: any;
    z: any;
    fx: any;
    GetDebugString(): any;
    ShouldSpook(): any;
    Spook(source: any): any;
  }

  interface SquadMember {
    inst: any;
    squad: string;
    others: any;
    k: any;
    str: any;
    GetDebugString(): any;
    GetOtherMembers(): any;
    GetSquadName(): any;
    IsInSquad(): boolean;
    JoinSquad(squadname: any): any;
    LeaveSquad(): any;
  }

  interface Stackable {
    inst: any;
    stacksize: number;
    maxsize: any;
    ondestack: any;
    old_size: any;
    num_to_get: any;
    instance: any;
    ret: any;
    num_to_add: any;
    newtotal: any;
    oldsize: any;
    newsize: any;
    numberadded: any;
    Get(num: any): any;
    IsFull(): boolean;
    IsStack(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    Put(item: any, source_pos: any): any;
    RoomLeft(): any;
    SetOnDeStack(fn: any): any;
    SetStackSize(sz: any): any;
    StackSize(): any;
  }

  interface SteeringWheel {
    inst: any;
    onsailorremoved: any;
    onstartfn: any;
    onstopfn: any;
    sailor: any;
    GetDebugString(): any;
    OnRemoveFromEntity(): any;
    SetOnStartSteeringFn(fn: any): any;
    SetOnStopSteeringFn(fn: any): any;
    StartSteering(sailor: any): any;
    StopSteering(sailor: any): any;
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
    dir_x: any;
    dir_z: any;
    x: any;
    y: any;
    z: any;
    right_vec: any;
    player_pos_x: any;
    player_pos_y: any;
    player_pos_z: any;
    GetBoat(): any;
    OnUpdate(dt: any): any;
    SetSteeringWheel(steering_wheel: any): any;
    Steer(pos_x: any, pos_z: any): any;
    SteerInDir(dir_x: any, dir_z: any): any;
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
    ings: any;
    cooktime: number;
    productperishtime: any;
    spoilage_total: number;
    spoilage_n: number;
    canbeopened: boolean;
    prod: any;
    remainingtime: any;
    status: any;
    loot: any;
    recipe: any;
    stacksize: any;
    spoilpercent: any;
    CanCook(): boolean;
    GetDebugString(): any;
    GetRecipeForProduct(): any;
    GetTimeToCook(): any;
    GetTimeToSpoil(): any;
    Harvest(harvester: any): any;
    IsCooking(): boolean;
    IsDone(): boolean;
    IsSpoiling(): boolean;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    StartCooking(): any;
    StopCooking(reason: any): any;
  }

  interface StormWatcher {
    inst: any;
    sandstormlevel: number;
    sandstormspeedmult: number;
    delay: any;
    level: any;
    OnUpdate(dt: any): any;
    SetSandstormSpeedMultiplier(mult: any): any;
    ToggleSandstorms(active: any): any;
    UpdateSandstormLevel(): any;
    UpdateSandstormWalkSpeed(): any;
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
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    SetRestingLength(length: any): any;
    SetStretchTarget(inst: any): any;
    SetWidthRatio(ratio: any): any;
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
    GetDamageInPeriod(): any;
    Stun(): any;
    TakeDamage(damage: any): any;
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
    chatter: any;
    health: any;
    lines: any;
    Chatter(strtbl: any, strid: any, time: any, forcetext: any): any;
    IgnoreAll(source: any): any;
    MakeChatter(): any;
    OnRemoveFromEntity(): any;
    Say(
      script: any,
      time: any,
      noanim: any,
      force: any,
      nobroadcast: any,
      colour: any
    ): any;
    SetOffsetFn(fn: any): any;
    ShutUp(): any;
    StopIgnoringAll(source: any): any;
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
    target: any;
    destpos: any;
    mypos: any;
    orders: any;
    GetDebugString(): any;
    LeaveTeam(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    SearchForTeam(): any;
    ShouldGoHome(): any;
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
    teamcount: number;
    updatedPos: any;
    validMembers: number;
    target: any;
    pt: any;
    steps: any;
    temp: any;
    successfulorders: number;
    AllInState(state: any): any;
    BroadcastDistress(member: any): any;
    CanAttack(): boolean;
    CenterLeader(): any;
    DisbandTeam(): any;
    GetFormationPositions(): any;
    GetTeamSize(): any;
    GetTheta(dt: any): any;
    GiveOrders(order: any, num: any): any;
    GiveOrdersToAllWithOrder(order: any, oldorder: any): any;
    IsTeamEmpty(): boolean;
    IsTeamFull(): boolean;
    ManageChase(dt: any): any;
    NewTeammate(member: any): any;
    NumberToAttack(): any;
    OnLostTeammate(member: any): any;
    OnUpdate(dt: any): any;
    OrganizeTeams(): any;
    SetAttackGrpSize(val: any): any;
    SetNewThreat(threat: any): any;
    SetUp(target: any, first_member: any): any;
    TeamSizeControl(): any;
    ValidMember(member: any): any;
    ValidateTeam(): any;
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
    target_x: any;
    target_y: any;
    target_z: any;
    pt: any;
    angle: any;
    targEnt: any;
    Activate(doer: any): any;
    GetDebugString(): any;
    IsActive(): boolean;
    IsBusy(): boolean;
    IsTargetBusy(): boolean;
    LoadPostPass(newents: any, savedata: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    PushDoneTeleporting(obj: any): any;
    ReceiveItem(item: any): any;
    ReceivePlayer(doer: any): any;
    RegisterTeleportee(doer: any): any;
    SetEnabled(enabled: any): any;
    Target(otherTeleporter: any): any;
    Teleport(obj: any): any;
    UnregisterTeleportee(doer: any): any;
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
    world_temp: any;
    last: any;
    temperature_modifiers: any;
    m: any;
    winterInsulation: any;
    summerInsulation: any;
    ambient_temperature: any;
    owner: any;
    x: any;
    y: any;
    z: any;
    ents: any;
    overflow: any;
    DoDelta(delta: any): any;
    GetCurrent(): any;
    GetDebugString(): any;
    GetInsulation(): any;
    GetMax(): any;
    GetMoisturePenalty(): any;
    IgnoreTags(): any;
    IsFreezing(): boolean;
    IsOverheating(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnUpdate(dt: any, applyhealthdelta: any): any;
    RemoveModifier(name: any): any;
    SetFreezingHurtRate(rate: any): any;
    SetModifier(name: any, value: any): any;
    SetOverheatHurtRate(rate: any): any;
    SetTemp(temp: any): any;
    SetTemperature(value: any): any;
    SetTemperatureInBelly(delta: any, duration: any): any;
  }

  interface Terraformer {
    inst: any;
    world: any;
    map: any;
    original_tile_type: any;
    x: any;
    y: any;
    loot: any;
    angle: any;
    Terraform(pt: any, spawnturf: any): any;
  }

  interface Thief {
    inst: any;
    stolenitems: any;
    onstolen: any;
    item: any;
    direction: any;
    SetOnStolenFn(fn: any): any;
    StealItem(victim: any, itemtosteal: any, attack: any): any;
  }

  interface Timer {
    inst: any;
    timers: any;
    str: string;
    data: any;
    GetDebugString(): any;
    GetTimeElapsed(name: any): any;
    GetTimeLeft(name: any): any;
    IsPaused(name: any): boolean;
    LongUpdate(dt: any): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    PauseTimer(name: any): any;
    ResumeTimer(name: any): any;
    SetTimeLeft(name: any, time: any): any;
    StartTimer(
      name: any,
      time: any,
      paused: any,
      initialtime_override: any
    ): any;
    StopTimer(name: any): any;
    TimerExists(name: any): any;
  }

  interface Tool {
    inst: any;
    actions: any;
    CanDoAction(action: any): boolean;
    GetEffectiveness(action: any): any;
    OnRemoveFromEntity(): any;
    SetAction(action: any, effectiveness: any): any;
  }

  interface TouchStoneTracker {
    inst: any;
    used: any;
    used_foreign: any;
    str: string;
    data: any;
    GetDebugString(): any;
    IsUsed(touchstone: any): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
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
    AbleToAccept(item: any, giver: any): any;
    AcceptGift(giver: any, item: any, count: any): any;
    Disable(): any;
    Enable(): any;
    GetDebugString(): any;
    IsTryingToTradeWithMe(inst: any): boolean;
    OnRemoveFromEntity(): any;
    SetAbleToAcceptTest(fn: any): any;
    SetAcceptTest(fn: any): any;
    WantsToAccept(item: any, giver: any): any;
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
    sleepRevertEvent: any;
    sleepTransformEvent: any;
    onLoadCheck: any;
    data: any;
    refs: any;
    tar: any;
    GetDebugString(): any;
    GetObjectData(): any;
    LoadPostPass(ents: any, data: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    RemoveSleepEvents(): any;
    Revert(): any;
    RevertOnSleep(): any;
    SetObjectData(data: any): any;
    SetOnLoadCheck(check: any): any;
    SetOnRevertFn(fn: any): any;
    SetOnTransformFn(fn: any): any;
    SetRevertEvent(event: any, target: any): any;
    SetRevertWorldEvent(event: any, value: any): any;
    SetTransformEvent(event: any, target: any): any;
    SetTransformWorldEvent(event: any, value: any): any;
    StartRevert(): any;
    StartTransform(): any;
    Transform(): any;
    TransformOnSleep(): any;
  }

  interface TransparentOnSanity {
    inst: any;
    offset: any;
    osc_speed: any;
    osc_amp: number;
    alpha: number;
    most_alpha: number;
    target_alpha: number;
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
    guy: any;
    timeintrap: any;
    x: any;
    y: any;
    z: any;
    perishTime: any;
    starvedlootprefabs: any;
    ismole: any;
    ents: any;
    pos: any;
    inventory: any;
    trap: any;
    AcceptingBait(): any;
    BaitTaken(eater: any): any;
    DoSpring(): any;
    GetDebugString(): any;
    Harvest(doer: any): any;
    IsBaited(): boolean;
    IsFree(): boolean;
    IsSprung(): boolean;
    LoadPostPass(newents: any, savedata: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnTrappedStarve(): any;
    OnUpdate(dt: any): any;
    RemoveBait(): any;
    Reset(sprung: any): any;
    Set(): any;
    SetBait(bait: any): any;
    SetOnBaitedFn(fn: any): any;
    SetOnHarvestFn(fn: any): any;
    SetOnSpringFn(fn: any): any;
    StartStarvation(): any;
    StartUpdate(): any;
    StopStarvation(): any;
    StopUpdating(): any;
  }

  interface Tributable {
    inst: any;
    currenttributevalue: number;
    rewardattributevalue: number;
    numrewardsgiven: number;
    timegiventribute: any;
    decaycurrenttributetime: number;
    decaytask: any;
    data: any;
    GetDebugString(): any;
    HasPendingReward(): boolean;
    OnAccept(value: any, tributer: any): any;
    OnGivenReward(): any;
    OnLoad(data: any): any;
    OnRefuse(): any;
    OnSave(): any;
  }

  interface UIAnim {
    inst: any;
    val: number;
    tint_t: number;
    whendone: any;
    tint_whendone: any;
    tint_start: any;
    tint_dest: any;
    tint_duration: any;
    sx: any;
    sy: any;
    sz: any;
    scale_t: number;
    scale_whendone: any;
    scale_start: any;
    scale_dest: any;
    scale_duration: any;
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
    valx: any;
    valy: any;
    valz: any;
    pos_whendonefn: any;
    r: any;
    g: any;
    b: any;
    a: any;
    rot: any;
    rot_whendonefn: any;
    CancelMoveTo(run_complete_fn: any): any;
    CancelRotateTo(run_complete_fn: any): any;
    FinishCurrentScale(): any;
    FinishCurrentTint(): any;
    MoveTo(start: any, dest: any, duration: any, whendone: any): any;
    OnWallUpdate(dt: any): any;
    RotateTo(
      start: any,
      dest: any,
      duration: any,
      whendone: any,
      infinite: any
    ): any;
    ScaleTo(start: any, dest: any, duration: any, whendone: any): any;
    TintTo(start: any, dest: any, duration: any, whendone: any): any;
  }

  interface UnevenGround {
    inst: any;
    enabled: boolean;
    radius: number;
    detectradius: number;
    detectperiod: number;
    detecttask: any;
    Disable(): any;
    Enable(): any;
    OnEntityWake(): any;
    Start(): any;
    Stop(): any;
  }

  interface UniqueID {
    inst: any;
    id: any;
    task: any;
    GetDebugString(): any;
    OnLoad(data: any): any;
    OnSave(): any;
  }

  interface UniquePrefabIDs {
    inst: any;
    topprefabids: any;
    s: string;
    GetDebugString(): any;
    GetNextID(prefabname: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
  }

  interface Unsaddler {}

  interface Unwrappable {
    inst: any;
    itemdata: any;
    canbeunwrapped: boolean;
    onwrappedfn: any;
    onunwrappedfn: any;
    origin: any;
    pos: any;
    doerpos: any;
    offset: any;
    creator: any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetOnUnwrappedFn(fn: any): any;
    SetOnWrappedFn(fn: any): any;
    Unwrap(doer: any): any;
    WrapItems(items: any, doer: any): any;
  }

  interface UpdateLooper {
    inst: any;
    onupdatefns: any;
    longupdatefns: any;
    AddLongUpdateFn(fn: any): any;
    AddOnUpdateFn(fn: any): any;
    LongUpdate(dt: any): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    RemoveLongUpdateFn(fn: any): any;
    RemoveOnUpdateFn(fn: any): any;
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
    AdvanceStage(): any;
    CanUpgrade(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    SetStage(num: any): any;
    Upgrade(obj: any): any;
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
    CanInteract(): boolean;
    OnRemoveFromEntity(): any;
    SetOnStopUseFn(fn: any): any;
    SetOnUseFn(fn: any): any;
    StartUsingItem(): any;
    StopUsingItem(): any;
  }

  interface Vase {
    inst: any;
    deleteitemonaccept: boolean;
    enabled: boolean;
    Decorate(giver: any, item: any): any;
    Disable(): any;
    Enable(): any;
    GetDebugString(): any;
    OnRemoveFromEntity(): any;
  }

  interface VaseDecoration {}

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
    previous_position_x: any;
    previous_position_y: any;
    previous_position_z: any;
    is_master_sim: any;
    delta_position_x: any;
    delta_position_z: any;
    should_update_pos: any;
    platform_x: any;
    platform_z: any;
    bias: number;
    platform_radius_sq: any;
    CanBeWalkedOn(): boolean;
    CollectEntitiesOnPlatform(check_previous_objects: any): any;
    DestroyObjectsOnPlatform(): any;
    GetEmbarkPosition(embarker_x: any, embarker_z: any): any;
    GetEntitiesOnPlatform(must_have_tags: any, ignore_tags: any): any;
    OnUpdate(dt: any): any;
    TriggerEvents(): any;
    UpdatePositions(): any;
  }

  interface WalkablePlatformManager {
    inst: any;
    walkable_platforms: any;
    AddPlatform(platform: any): any;
    PostUpdate(dt: any): any;
    RemovePlatform(platform: any): any;
  }

  interface WalkingPlank {
    inst: any;
    doer: any;
    AbandonShip(doer: any): any;
    Extend(): any;
    MountPlank(doer: any): any;
    OnRemoveFromEntity(): any;
    Retract(): any;
    StopMounting(): any;
  }

  interface WalkingPlankUser {
    inst: any;
    current_plank: any;
    Dismount(): any;
    SetCurrentPlank(plank: any): any;
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
    wasclosed: any;
    toend: any;
    ActivateChanging(doer: any, skins: any): any;
    ApplySkins(doer: any, diff: any): any;
    ApplyTargetSkins(target: any, doer: any, skins: any): any;
    BeginChanging(doer: any): any;
    CanBeginChanging(doer: any): boolean;
    Enable(enable: any): any;
    EndAllChanging(): any;
    EndChanging(doer: any): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetCanBeDressed(canbedressed: any): any;
    SetCanBeShared(canbeshared: any): any;
    SetCanUseAction(canuseaction: any): any;
    SetChangeInDelay(delay: any): any;
    SetRange(range: any): any;
  }

  interface WaterPhysics {
    inst: any;
    restitution: number;
  }

  interface WaterProofer {
    inst: any;
    effectiveness: number;
    GetEffectiveness(): any;
    OnRemoveFromEntity(): any;
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
    SpreadProtection(inst: any, dist: any, noextinguish: any): any;
    SpreadProtectionAtPoint(
      x: any,
      y: any,
      z: any,
      dist: any,
      noextinguish: any
    ): any;
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
    row_radius: any;
    col_radius: any;
    radius: any;
    OnLoad(data: any): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    SetWaveSettings(
      shimmer_per_sec: any,
      ripple_per_sec: any,
      camera_per_sec: any
    ): any;
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
    proj: any;
    CanRangedAttack(): boolean;
    LaunchProjectile(attacker: any, target: any): any;
    OnAttack(attacker: any, target: any, projectile: any): any;
    OnRemoveFromEntity(): any;
    SetAttackCallback(fn: any): any;
    SetDamage(dmg: any): any;
    SetElectric(): any;
    SetOnAttack(fn: any): any;
    SetOnProjectileLaunch(fn: any): any;
    SetOverrideStimuliFn(fn: any): any;
    SetProjectile(projectile: any): any;
    SetRange(attack: any, hit: any): any;
  }

  interface WereBeast {
    inst: any;
    onsetwerefn: any;
    onsetnormalfn: any;
    weretime: any;
    triggerlimit: any;
    triggeramount: any;
    remaining: any;
    GetDebugString(): any;
    IsInWereState(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    ResetTriggers(): any;
    SetNormal(): any;
    SetOnNormalFn(fn: any): any;
    SetOnWereFn(fn: any): any;
    SetTriggerLimit(limit: any): any;
    SetWere(time: any): any;
    TriggerDelta(amount: any): any;
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
    OnLoad(data: any): any;
    OnSave(): any;
  }

  interface Wisecracker {
    inst: any;
    time_in_lightstate: number;
    inlight: boolean;
    foodbuffname: any;
    foodbuffpriority: any;
    soultoofew_time: number;
    soultoomany_time: number;
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
    CanRejuvenate(): boolean;
    CanWither(): boolean;
    DelayRejuvenate(delay: any): any;
    DelayWither(delay: any): any;
    Enable(enable: any): any;
    ForceRejuvenate(): any;
    ForceWither(): any;
    GetDebugString(): any;
    IsProtected(): boolean;
    IsWithered(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    Protect(duration: any): any;
    Start(): any;
    Stop(): any;
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
    onloadfn: any;
    lastworktime: any;
    isplant: any;
    pos: any;
    CanBeWorked(): boolean;
    Destroy(destroyer: any): any;
    GetDebugString(): any;
    GetWorkAction(): any;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    SetMaxWork(work: any): any;
    SetOnFinishCallback(fn: any): any;
    SetOnLoadFn(fn: any): any;
    SetOnWorkCallback(fn: any): any;
    SetWorkAction(act: any): any;
    SetWorkLeft(work: any): any;
    SetWorkable(able: any): any;
    WorkedBy(worker: any, numworks: any): any;
  }

  interface Worker {
    inst: any;
    actions: any;
    CanDoAction(action: any): boolean;
    GetEffectiveness(action: any): any;
    SetAction(action: any, effectiveness: any): any;
  }

  interface WorkMultiplier {
    inst: any;
    actions: any;
    AddMultiplier(action: any, multiplier: any, source: any): any;
    GetMultiplier(action: any): any;
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
    id: any;
    linkedWorld: any;
    receivedPortal: any;
    Activate(doer: any): any;
    ActivatedByOther(): any;
    GetDebugString(): any;
    GetStatusString(): any;
    IsActive(): boolean;
    IsAvailableForLinking(): boolean;
    IsBound(): boolean;
    IsDestinationForPortal(otherWorld: any, otherPortal: any): boolean;
    IsFull(): boolean;
    IsLinked(): boolean;
    OnLoad(data: any): any;
    OnSave(): any;
    SetDestinationWorld(world: any, permanent: any): any;
    SetEnabled(t: any): any;
    SetID(id: any): any;
    SetReceivedPortal(fromworld: any, fromportal: any): any;
    ValidateAndPushEvents(): any;
  }

  interface WorldOverseer {
    inst: any;
    data: any;
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
    initial_clothing: any;
    time_now: any;
    client_table: any;
    current_players: any;
    resumed_from_suspend: any;
    CalcIndividualPlayerStats(player: any): any;
    CalcPlayerStats(): any;
    DumpIndividualPlayerStats(stat: any, event: any): any;
    DumpPlayerStats(): any;
    DumpSessionStats(): any;
    GetWorldRecipeItems(): any;
    Heartbeat(): any;
    HeartbeatPoll(): any;
    OnClockTick(data: any): any;
    OnCyclesChanged(cycles: any): any;
    OnEquipSkinnedItem(player: any, data: any): any;
    OnItemCrafted(player: any, data: any): any;
    OnPlayerChangedSkin(player: any, data: any): any;
    OnPlayerDeath(player: any, data: any): any;
    OnPlayerJoined(src: any, player: any): any;
    OnPlayerLeft(src: any, player: any): any;
    OnUnequipSkinnedItem(player: any, data: any): any;
    QuitAll(): any;
    RecordPlayerJoined(player: any): any;
    RecordPlayerLeft(player: any): any;
    SendClientHeartBeat(userid: any, data: any): any;
    SendClientJoin(userid: any, data: any): any;
    SendClientQuit(userid: any, data: any): any;
  }

  interface WorldWind {
    inst: any;
    velocity: number;
    angle: any;
    timeToWindChange: number;
    GetDebugString(): any;
    GetWindAngle(): any;
    GetWindVelocity(): any;
    OnUpdate(dt: any): any;
    Start(): any;
    Stop(): any;
  }

  interface Writeable {
    inst: any;
    text: any;
    writer: any;
    screen: any;
    onclosepopups: any;
    generatorfn: any;
    data: any;
    netid: any;
    ClientObjs: any;
    getspecialdescription: any;
    BeginWriting(doer: any): any;
    EndWriting(): any;
    GetText(viewer: any): any;
    IsBeingWritten(): boolean;
    IsWritten(): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    OnUpdate(dt: any): any;
    SetText(text: any): any;
    Write(doer: any, text: any): any;
  }
}

export interface Component {
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
  unsaddler: Component.Unsaddler;
  unwrappable: Component.Unwrappable;
  updatelooper: Component.UpdateLooper;
  upgradeable: Component.Upgradeable;
  upgrader: Component.Upgrader;
  useableitem: Component.UseableItem;
  vase: Component.Vase;
  vasedecoration: Component.VaseDecoration;
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
