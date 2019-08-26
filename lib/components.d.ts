export namespace Component {
  interface Activatable {
    OnActivate: any;
    inactive: boolean;
    inst: any;
    quickaction: boolean;
    standingaction: boolean;
    CanActivate(doer: any): boolean;
    DoActivate(doer: any): any;
    OnRemoveFromEntity(): any;
  }

  interface Age {
    inst: any;
    last_pause_time: any;
    paused_time: number;
    saved_age: number;
    spawntime: any;
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
    currentform: any;
    form: any;
    forms: any;
    inst: any;
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
    enterwaterfn: any;
    exitwaterfn: any;
    in_water: boolean;
    inst: any;
    is_on_land: any;
    land_bank: any;
    ocean_bank: any;
    ontilechangefn: any;
    onwaterchangefn: any;
    tile: any;
    tileinfo: any;
    x: any;
    y: any;
    z: any;
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
    autolowerunits: number;
    boat: any;
    bottomunits: number;
    currentraiseunits: number;
    data: any;
    depth: any;
    depthcategory: any;
    drag: any;
    ground: any;
    inst: any;
    is_anchor_lowered: boolean;
    is_anchor_transitioning: boolean;
    max_velocity_mod: any;
    numberofraisers: number;
    raisers: any;
    raiseunits: number;
    rasing: boolean;
    speed: any;
    tile: any;
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
    alwaysvalid: boolean;
    enabled: any;
    inst: any;
    range: number;
    reticule: any;
    targetprefab: any;
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
    retune: any;
    stories: any;
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
    checkpositiontask: any;
    current_area: any;
    current_area_data: any;
    inst: any;
    lastpt: any;
    node: any;
    s: any;
    updatedistsq: number;
    x: any;
    y: any;
    z: any;
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
    absorb_percent: any;
    condition: number;
    damage: number;
    indestructible: boolean;
    inst: any;
    maxcondition: number;
    tags: any;
    weakness: any;
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
    attunable_tag: any;
    attuned_players: any;
    attuned_userids: any;
    available_players: any;
    inst: any;
    onattunecostfn: any;
    onlinkfn: any;
    onplayerattuned: any;
    onplayerjoined: any;
    onplayerremoved: any;
    onunlinkfn: any;
    reason: any;
    str: string;
    success: any;
    toremove: any;
    userids: any;
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
    attuned: any;
    inst: any;
    ismastersim: any;
    str: string;
    GetAttunedTarget(tag: any): any;
    GetDebugString(): any;
    HasAttunement(tag: any): boolean;
    IsAttunedTo(target: any): boolean;
    RegisterAttunedSource(proxy: any): any;
    UnregisterAttunedSource(proxy: any): any;
  }

  interface Aura {
    active: boolean;
    applied: any;
    applying: boolean;
    auraexcludetags: any;
    auratestfn: any;
    inst: any;
    radius: number;
    str: any;
    task: any;
    tickperiod: number;
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
    balloon: any;
    inst: any;
    MakeBalloon(x: any, y: any, z: any): any;
  }

  interface BathBomb {
    inst: any;
    ApplyBathBomb(bathbombable_target: any): any;
    OnRemoveFromEntity(): any;
  }

  interface BathBombable {
    canbebathbombedfn: any;
    inst: any;
    onbathbombedfn: any;
    CanBeBathBombed(bathbomb_inst: any): boolean;
    OnBathBombed(bathbomb_inst: any): any;
    OnRemoveFromEntity(): any;
    SetCanBeBathBombed(can_be_bathbombed: any): any;
    SetCanBeBathBombedFn(new_fn: any): any;
    SetOnBathBombedFn(new_fn: any): any;
  }

  interface BatSpawner {
    batcap: number;
    bats: any;
    battypes: any;
    ground: any;
    inst: any;
    radius: any;
    result_offset: any;
    spawntime: any;
    theta: any;
    timetospawn: number;
    GetDebugString(): any;
    GetSpawnPoint(pt: any): any;
    SetMaxBats(max: any): any;
    SetSpawnTimes(times: any): any;
    StartTracking(inst: any): any;
  }

  interface Beard {
    bits: number;
    callbacks: any;
    daysgrowth: number;
    inst: any;
    insulation_factor: number;
    isgrowing: boolean;
    nextevent: any;
    onreset: any;
    pass: any;
    pause: any;
    prize: any;
    reason: any;
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
    current: number;
    inst: any;
    max: number;
    old: any;
    task: any;
    time_effect_multiplier: number;
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
    backfx: any;
    blinktask: any;
    frontfx: any;
    inst: any;
    onblinkfn: any;
    x: any;
    y: any;
    z: any;
    Blink(pt: any, caster: any): any;
    SetFX(front: any, back: any): any;
    SpawnEffect(inst: any): any;
  }

  interface Bloomer {
    bloom: any;
    bloomstack: any;
    children: any;
    fx: any;
    inst: any;
    oldfx: any;
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
    averageSpeed: any;
    curr_speed: any;
    currentAngle: number;
    currentVector: any;
    inst: any;
    maxSpeedMult: number;
    minSpeedMult: number;
    mult: any;
    soundName: any;
    soundParameter: any;
    soundspeed: any;
    speed: number;
    speedVarPeriod: any;
    speedVarTime: number;
    speedvar: any;
    velocMult: any;
    velocity: any;
    walkspeed: any;
    windAngle: number;
    windVector: any;
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
    entities: any;
    inst: any;
    my_position: any;
    OnUpdate(dt: any): any;
  }

  interface BoatLeak {
    anim_state: any;
    boat: any;
    current_state: any;
    has_leaks: boolean;
    inst: any;
    leak_build: string;
    patch_type: any;
    repair_state: string;
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
    MAX_ALLOWED_VELOCITY: number;
    TOLLERANCE: number;
    accel: any;
    anchor_cmps: any;
    boat_pos_x: any;
    boat_pos_y: any;
    boat_pos_z: any;
    damageable_velocity: number;
    data: any;
    drag: any;
    dragged_velocity_length: any;
    has_speed: boolean;
    inst: any;
    lastzoomtime: any;
    lastzoomwasout: boolean;
    mast_maxes: any;
    masts: any;
    max_vel: number;
    max_velocity: any;
    maxx: any;
    maxz: any;
    min_velocity: number;
    mult: number;
    new_speed_is_scary: any;
    newangle: any;
    p1_angle: any;
    p2_angle: any;
    raised_sail_count: number;
    rudder_direction_x: number;
    rudder_direction_z: number;
    rudder_turn_speed: any;
    sail_force: number;
    should_zoom_out: any;
    sinking: boolean;
    speed: number;
    stop: boolean;
    target_rudder_direction_x: number;
    target_rudder_direction_z: number;
    target_vel: any;
    time: any;
    total_anchor_drag: number;
    turn_acc: any;
    turn_vel: number;
    velocity_length: any;
    velocity_x: number;
    velocity_z: number;
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
    angle_apart: number;
    anim_idx: number;
    dir_x: any;
    dir_z: any;
    distance_traveled: any;
    effect_spawn_rate: number;
    fx: any;
    inst: any;
    last_dir_x: any;
    last_dir_z: any;
    last_x: any;
    last_z: any;
    radius: number;
    total_distance_traveled: number;
    x: any;
    y: any;
    z: any;
    OnUpdate(dt: any): any;
    SpawnEffectPrefab(x: any, y: any, z: any, dir_x: any, dir_z: any): any;
  }

  interface BoatTrailMover {
    acceleration: any;
    dir_x: any;
    dir_z: any;
    inst: any;
    rudder_angle: any;
    track_boat_time: number;
    velocity: any;
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
    brushable: boolean;
    cyclesperprize: number;
    elapsed: any;
    inst: any;
    lastbrushcycle: number;
    max: number;
    numprizes: number;
    onbrushfn: any;
    prize: any;
    Brush(doer: any, brush: any): any;
    CalculateNumPrizes(): any;
    GetDebugString(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetBrushable(brushable: any, reset: any): any;
    SetOnBrushed(fn: any): any;
  }

  interface Builder {
    ANCIENT: any;
    MAGIC: any;
    SCIENCE: any;
    SHADOW: any;
    accessible_tech_trees: any;
    ancient_bonus: number;
    bonus_tech_level: number;
    buffaction: any;
    buffered_builds: any;
    current: any;
    current_prototyper: any;
    ents: any;
    exclude_tags: any;
    freebuildmode: boolean;
    has_tech: boolean;
    hungrytime: any;
    ingredientmod: number;
    ingredients: any;
    inst: any;
    last_hungry_build: any;
    level: any;
    magic_bonus: number;
    materials: any;
    old_accessible_tech_trees: any;
    old_prototyper: any;
    old_station_recipes: any;
    penalty: any;
    pos: any;
    prod: any;
    prototyper_active: boolean;
    recipe: any;
    recipes: any;
    science_bonus: number;
    shadow_bonus: number;
    station_recipes: any;
    t: any;
    totalItems: number;
    totalWetness: number;
    trees_changed: boolean;
    wetlevel: any;
    wetness: any;
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
    bundledprefab: any;
    bundlingprefab: any;
    inst: any;
    onstartbundlingfn: any;
    OnStartBundling(doer: any): any;
    SetBundlingPrefabs(bundling: any, bundled: any): any;
    SetOnStartBundlingFn(fn: any): any;
  }

  interface Bundler {
    bundling: boolean;
    bundlinginst: any;
    currentbundling: any;
    currentitem: any;
    currentwrapped: any;
    data: any;
    inst: any;
    item: any;
    itemprefab: any;
    items: any;
    persists: boolean;
    pos: any;
    wrapped: any;
    wrappedprefab: any;
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
    burning: boolean;
    burntime: any;
    canlight: boolean;
    extinguishimmediately: boolean;
    flammability: number;
    follower: any;
    fxchildren: any;
    fxdata: any;
    fxlevel: number;
    fxoffset: any;
    fxprefab: any;
    inst: any;
    largestRadius: any;
    lightningimmune: boolean;
    onburnt: any;
    onextinguish: any;
    onignite: any;
    onsmoldering: any;
    onstopsmoldering: any;
    smoke: any;
    smolder_task: any;
    smoldering: boolean;
    smoldertimeremaining: any;
    task: any;
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
    careful: boolean;
    carefulwalkingspeedmult: number;
    checkcareful: any;
    data: any;
    inst: any;
    targets: any;
    toremove: any;
    x: any;
    y: any;
    z: any;
    IsCarefulWalking(): boolean;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetCarefulWalkingSpeedMultiplier(mult: any): any;
    ToggleCareful(careful: any): any;
    TrackTarget(target: any, radius: any, duration: any): any;
  }

  interface Catcher {
    actiondistance: number;
    canact: boolean;
    catchdistance: number;
    enabled: boolean;
    inst: any;
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
    channeler: any;
    enabled: boolean;
    inst: any;
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
    child: any;
    childname: string;
    childreninside: number;
    childrenoutside: any;
    data: any;
    dt: any;
    emergencychildname: any;
    emergencychildreninside: number;
    emergencychildrenoutside: any;
    emergencychildrenperplayer: number;
    emergencydetectionradius: number;
    ents: any;
    inst: any;
    maxchildren: number;
    maxemergencychildren: number;
    maxemergencycommit: number;
    missingchildren: any;
    missingemergencychildren: any;
    num_children: any;
    numchildrenoutside: number;
    numemergencychildrenoutside: number;
    offset: any;
    onaddchild: any;
    onchildkilledfn: any;
    ongohome: any;
    onoccupied: any;
    onspawned: any;
    onvacate: any;
    rarechild: any;
    rarechildchance: number;
    references: any;
    regening: boolean;
    regenperiod: number;
    regenvariance: number;
    spawning: boolean;
    spawnoffscreen: boolean;
    spawnperiod: number;
    spawnvariance: number;
    str: any;
    task: any;
    timetonextregen: number;
    timetonextspawn: number;
    vacantchildren: number;
    x: any;
    y: any;
    z: any;
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
    angleRad: any;
    circleTarget: any;
    direction: any;
    distance: any;
    facingAngle: any;
    inst: any;
    maxDist: number;
    maxScale: number;
    maxSpeed: number;
    minDist: number;
    minScale: number;
    minSpeed: number;
    numAccelerates: number;
    offset: any;
    onaccelerate: any;
    scale: number;
    sine: number;
    sineMod: any;
    speed: any;
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
    connectsacrossplatforms: boolean;
    inst: any;
    my_platform: any;
    nodes: any;
    numnodes: number;
    onconnectfn: any;
    ondisconnectfn: any;
    range: number;
    x: any;
    y: any;
    z: any;
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
    a: number;
    b: number;
    children: any;
    colour: any;
    colourstack: any;
    g: number;
    inst: any;
    r: number;
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
    callback: any;
    i_alpha: any;
    i_colour: any;
    i_colour_b: any;
    i_colour_g: any;
    i_colour_r: any;
    inst: any;
    t: any;
    t_alpha: any;
    t_colour_b: any;
    t_colour_g: any;
    t_colour_r: any;
    time: any;
    timepassed: number;
    tweening: boolean;
    EndTween(): any;
    IsTweening(): boolean;
    OnUpdate(dt: any): any;
    StartTween(colour: any, time: any, callback: any): any;
  }

  interface Combat {
    areahitcheck: any;
    areahitdamagepercent: any;
    areahitdisabled: any;
    areahitrange: any;
    atkrange: any;
    attackrange: number;
    basedamage: any;
    basemultiplier: any;
    battlecryenabled: boolean;
    blanktask: any;
    blocked: boolean;
    bonus: any;
    bonusdamagefn: any;
    canattack: boolean;
    cause: any;
    cry: any;
    damageredirecttarget: any;
    damageresolved: number;
    defaultdamage: number;
    dist: any;
    dmg: any;
    ents: any;
    externaldamagemultipliers: any;
    externaldamagetakenmultipliers: any;
    forcechange: any;
    forcefacing: boolean;
    hitcount: number;
    hiteffectsymbol: string;
    hitrange: number;
    hitsound: string;
    hurtsound: any;
    inst: any;
    is_attacking: any;
    item: any;
    keeptargetfn: any;
    keeptargettimeout: number;
    lastattacker: any;
    lastdoattacktime: any;
    laststartattacktime: number;
    lasttargetGUID: any;
    lastwasattackedtime: number;
    losetargetcallback: any;
    min_attack_period: number;
    mount: any;
    mult: any;
    newtarget: any;
    nextbattlecrytime: any;
    num_helpers: number;
    oldtarget: any;
    onhitfn: any;
    onhitotherfn: any;
    panic_thresh: any;
    playermultiplier: any;
    playerstunlock: any;
    projectile: any;
    pvpmultiplier: any;
    range: any;
    redirect_combat: any;
    reflect_list: any;
    reflected_dmg: number;
    retargetperiod: any;
    retargettask: any;
    saddle: any;
    str: any;
    strid: any;
    t: any;
    target: any;
    targetfn: any;
    targetpos: any;
    tgtinv: any;
    tgttype: any;
    weapon: any;
    weaponmod: any;
    x: any;
    y: any;
    z: any;
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
    k: any;
    numsoldiers: number;
    soldiers: any;
    trackingdist: number;
    trackingperiod: number;
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
    angle: any;
    angleA: any;
    angleB: any;
    attacker: any;
    attacker_platform: any;
    cosangleXspeed: any;
    discriminant: any;
    discriminantSqrt: any;
    dx: any;
    dy: any;
    dz: any;
    facing_angle: any;
    g: any;
    gXrange: any;
    gravity: any;
    horizontalSpeed: number;
    inst: any;
    launchoffset: any;
    offset: any;
    onhitfn: any;
    onlaunchfn: any;
    onmissfn: any;
    onupdatefn: any;
    owningweapon: any;
    pos: any;
    range: any;
    rangeSq: any;
    speedSq: any;
    targetoffset: any;
    usehigharc: boolean;
    velocity: any;
    vx: any;
    vy: any;
    vz: any;
    x: number;
    y: number;
    z: number;
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
    constructing: boolean;
    constructioninst: any;
    constructionsite: any;
    currentconstructing: any;
    currenttarget: any;
    inst: any;
    items: any;
    persists: boolean;
    pos: any;
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
    constructionprefab: any;
    inst: any;
    product: any;
    targetprefabs: any;
    AddTargetPrefab(prefab: any, constructionprefab: any): any;
    OnRemoveFromEntity(): any;
    RemoveTargetPrefab(prefab: any): any;
    StartConstruction(target: any): any;
  }

  interface ConstructionSite {
    builder: any;
    constructionprefab: any;
    delta: any;
    inst: any;
    material: any;
    materials: any;
    onconstructedfn: any;
    onstartconstructionfn: any;
    onstopconstructionfn: any;
    str: any;
    x: any;
    y: any;
    z: any;
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
    acceptsstacks: boolean;
    active_item: any;
    canbeopened: boolean;
    containers: any;
    data: any;
    dec: any;
    doer: any;
    halfstack: any;
    ignoresound: boolean;
    in_slot: any;
    inst: any;
    inventory: any;
    issidewidget: boolean;
    item: any;
    items: number;
    itemtestfn: any;
    leftovers: any;
    num: number;
    num_found: number;
    numslots: number;
    opener: any;
    other_item: any;
    pos: any;
    prevslot: any;
    references: any;
    refs: any;
    slots: any;
    targetslot: any;
    total_num_found: number;
    type: any;
    usespecificslotsforitems: boolean;
    widget: any;
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
    new_percent: any;
    oncooked: any;
    prod: any;
    product: any;
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
    charged: boolean;
    cooldown_deadline: any;
    cooldown_duration: any;
    inst: any;
    onchargedfn: any;
    startchargingfn: any;
    t: any;
    task: any;
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
    best_trait: any;
    data: any;
    dominant: any;
    dominanttrait: any;
    dominanttraitlocked: any;
    inst: any;
    metricsdata: any;
    owner: any;
    str: any;
    traitscore: any;
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
    cantgrowtime: number;
    dt: number;
    grower: any;
    growthpercent: number;
    inst: any;
    matured: boolean;
    onharvest: any;
    onmatured: any;
    onwithered: any;
    product: any;
    product_prefab: string;
    rate: number;
    shouldgrow: any;
    task: any;
    temp: any;
    temp_rate: any;
    x: any;
    y: any;
    z: any;
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
    defaultdamage: number;
    inst: any;
    reflectdamagefn: any;
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
    damage_done: number;
    damage_threshold: number;
    damage_threshold_fn: any;
    enabled: boolean;
    inst: any;
    old: any;
    OnHealthDelta(data: any): any;
    Start(): any;
    Stop(): any;
  }

  interface Debuff {
    inst: any;
    name: any;
    onattachedfn: any;
    ondetachedfn: any;
    onextendedfn: any;
    target: any;
    AttachTo(name: any, target: any, followsymbol: any, followoffset: any): any;
    Extend(followsymbol: any, followoffset: any): any;
    OnDetach(): any;
    SetAttachedFn(fn: any): any;
    SetDetachedFn(fn: any): any;
    SetExtendedFn(fn: any): any;
    Stop(): any;
  }

  interface Debuffable {
    data: any;
    debuff: any;
    debuffs: any;
    enable: boolean;
    ent: any;
    followoffset: any;
    followsymbol: string;
    inst: any;
    k: any;
    str: any;
    toremove: any;
    x: any;
    y: any;
    z: any;
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
    debugger: any;
    debuggerdraws: any;
    inst: any;
    z: number;
    OnUpdate(): any;
    SetAll(key: any, origin: any, tar: any, colour: any): any;
    SetColour(key: any, r: any, g: any, b: any, a: any): any;
    SetOrigin(key: any, x: any, y: any): any;
    SetTarget(key: any, x: any, y: any): any;
    SetZ(val: any): any;
  }

  interface Decay {
    currenthealth: number;
    decayrate: number;
    deltatask: any;
    inst: any;
    maxhealth: number;
    oldhealth: any;
    DoDelta(amount: any): any;
    SetTimeDelta(amount: any, pause: any, num: any): any;
  }

  interface DeciduousTreeUpdater {
    angle: any;
    drakespawntask: any;
    ignitedrakespawntask: any;
    ignitenumdrakes: any;
    inst: any;
    last_attack_time: number;
    last_monster_target: any;
    mdistsq: any;
    monster: boolean;
    monsterFreq: any;
    monsterTime: any;
    monster_duration: any;
    monster_start_task: any;
    monster_start_time: any;
    monster_stop_task: any;
    monster_target: any;
    mx: any;
    my: any;
    mz: any;
    num_passive_drakes: number;
    numdrakes: any;
    passdrake: any;
    passive_drakes_spawned: number;
    passoffset: any;
    pos: any;
    root: any;
    rootpos: any;
    sleeptask: any;
    spawneddrakes: boolean;
    starttask: any;
    targdist: any;
    targdistsq: any;
    time_to_passive_drake: number;
    x: any;
    y: any;
    z: any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    SpawnIgniteWave(): any;
    StartMonster(starttime: any): any;
    StopMonster(): any;
  }

  interface DeerHerding {
    activedeer: any;
    alerttargets: any;
    alldeer: any;
    center: any;
    closest: any;
    closest_dist: number;
    count: number;
    curtime: any;
    data: any;
    deflected: any;
    facing: number;
    grazetimer: any;
    grazing_time: any;
    herd_center: any;
    herdheading: number;
    herdhomelocation: any;
    herdlocation: any;
    herdspawner: any;
    inst: any;
    isgrazing: boolean;
    isspooked: any;
    keepheading: boolean;
    lastupdate: number;
    max_dist: number;
    result_angle: any;
    result_offset: any;
    roaming_time: any;
    s: string;
    spookdir: any;
    threats: any;
    valid_area_check: any;
    was_spooked: any;
    x: any;
    y: any;
    z: any;
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
    inventoryitem: any;
    isplant: any;
    mode: any;
    ondeploy: any;
    spacing: any;
    usegridplacer: boolean;
    x: any;
    y: any;
    z: any;
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
    delay: number;
    inst: any;
    onenablehelper: any;
    recipefilters: any;
    AddRecipeFilter(recipename: any): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(): any;
    StartHelper(recipename: any, placerinst: any): any;
    StopHelper(): any;
  }

  interface Digester {
    digesttime: number;
    helditems: any;
    inst: any;
    itemstodigestfn: any;
    rnd: any;
    task: any;
    TryDigest(): any;
  }

  interface Disappears {
    anim: string;
    canbepickedup: boolean;
    canbepickedupalive: boolean;
    delay: number;
    disappearsFn: any;
    disappeartask: any;
    inst: any;
    isdisappear: boolean;
    persists: boolean;
    sound: any;
    tasktotime: any;
    Disappear(): any;
    GetDebugString(): any;
    PrepareDisappear(): any;
    StopDisappear(): any;
  }

  interface Discoverable {
    data: any;
    discovered: boolean;
    discoveredIcon: any;
    inst: any;
    undiscoveredIcon: any;
    Discover(): any;
    Hide(): any;
    OnLoad(data: any): any;
    OnSave(data: any): any;
    SetIcons(undiscovered: any, discovered: any): any;
  }

  interface Diseaseable {
    diseased: boolean;
    ent: any;
    ents: any;
    inst: any;
    onDiseasedFn: any;
    x: any;
    y: any;
    z: any;
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
    distance: number;
    inst: any;
    mypos: any;
    previous_pos: any;
    OnUpdate(dt: any): any;
  }

  interface Domesticatable {
    decaytask: any;
    domesticated: boolean;
    domestication: number;
    domestication_latch: boolean;
    domestication_triggerfn: any;
    domesticationdecaypaused: boolean;
    inst: any;
    lastdomesticationgain: number;
    maxobedience: number;
    minobedience: number;
    obedience: number;
    s: any;
    tendencies: any;
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
    atlasname: any;
    bgatlasname: any;
    bgimagename: any;
    candraw: boolean;
    imagename: any;
    inst: any;
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
    atlas: any;
    bgatlas: any;
    bgimage: any;
    ent: any;
    image: any;
    inst: any;
    ondrawfn: any;
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
    angle: any;
    customtuningsfn: any;
    delta: any;
    dest_x: any;
    dest_y: any;
    dest_z: any;
    enabled: any;
    handitem: any;
    inst: any;
    inv: any;
    offset: any;
    ontakedrowningdamage: any;
    pt: any;
    radius: any;
    src_x: any;
    src_y: any;
    src_z: any;
    target_x: any;
    target_y: any;
    target_z: any;
    to_drop: any;
    tunings: any;
    x: any;
    y: any;
    z: any;
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
    buildfile: any;
    drytime: any;
    inst: any;
    product: any;
    GetBuildFile(): any;
    GetDryTime(): any;
    GetProduct(): any;
    OnRemoveFromEntity(): any;
    SetBuildFile(buildfile: any): any;
    SetDryTime(time: any): any;
    SetProduct(product: any): any;
  }

  interface Dryer {
    buildfile: any;
    foodtype: any;
    ingredient: any;
    ingredientperish: any;
    inst: any;
    loot: any;
    ondonedrying: any;
    onharvest: any;
    onstartdrying: any;
    product: any;
    protectedfromrain: any;
    remainingtime: any;
    task: any;
    tasktotime: any;
    watchingrain: any;
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
    base_mult: any;
    cacheedibletags: any;
    caneat: any;
    delta: any;
    eater: boolean;
    eatwholestack: boolean;
    healthabsorption: number;
    hungerabsorption: number;
    ignoresspoilage: boolean;
    inst: any;
    iswoodiness: boolean;
    lasteattime: any;
    oneatfn: any;
    owner: any;
    preferred: boolean;
    preferseating: any;
    preferseatingtags: any;
    sanityabsorption: number;
    stack_mult: any;
    strongstomach: boolean;
    tags: any;
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
    chill: number;
    degrades_with_spoilage: boolean;
    delta_multiplier: number;
    duration_multiplier: number;
    foodtype: any;
    gethealthfn: any;
    healthvalue: number;
    hungervalue: number;
    ignore_spoilage: any;
    inst: any;
    multiplier: number;
    oneaten: any;
    sanityvalue: number;
    spice: any;
    spice_source: any;
    spoiled_health: any;
    spoiled_hunger: any;
    stacksize: any;
    stale_health: any;
    stale_hunger: any;
    temperaturedelta: number;
    temperatureduration: number;
    woodiness: any;
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
    delta_dist: any;
    delta_x: any;
    delta_z: any;
    disembark_x: any;
    disembark_z: any;
    embark_speed: number;
    embark_x: any;
    embark_z: any;
    embarkable: any;
    hopping: boolean;
    inst: any;
    last_embark_x: any;
    last_embark_z: any;
    my_x: any;
    my_y: any;
    my_z: any;
    start_x: any;
    start_y: any;
    start_z: any;
    travel_dist: any;
    x: any;
    z: any;
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
    area_emitter: any;
    config: any;
    density_factor: number;
    desired_particles_per_second: any;
    effect: any;
    emit_fn: any;
    emitter: any;
    ground_height: number;
    inst: any;
    max_lifetime: number;
    num_particles_to_emit: number;
    particles_per_tick: number;
    tick_time: any;
    updateFunc: any;
    Emit(): any;
  }

  interface EntityTracker {
    entities: any;
    ents: any;
    inst: any;
    refs: any;
    str: string;
    ForgetEntity(name: any): any;
    GetDebugString(): any;
    GetEntity(name: any): any;
    LoadPostPass(ents: any, data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
    TrackEntity(name: any, inst: any): any;
  }

  interface EpicScare {
    defaultduration: number;
    ents: any;
    inst: any;
    range: number;
    scareexcludetags: any;
    scaremusttags: any;
    scareoneoftags: any;
    x: any;
    y: any;
    z: any;
    Scare(duration: any): any;
    SetDefaultDuration(duration: any): any;
    SetRange(range: any): any;
  }

  interface Equippable {
    dapperfn: any;
    dapperness: number;
    equippedmoisture: number;
    equipslot: any;
    equipstack: boolean;
    inst: any;
    insulated: boolean;
    inventoryitem: any;
    isequipped: boolean;
    maxequippedmoisture: number;
    onequipfn: any;
    onpocketfn: any;
    onunequipfn: any;
    walkspeedmult: any;
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
    buildingdamage: number;
    ents: any;
    explosivedamage: number;
    explosiverange: number;
    inst: any;
    lightonexplode: boolean;
    onexplodefn: any;
    stacksize: any;
    totaldamage: any;
    world: any;
    x: any;
    y: any;
    z: any;
    OnBurnt(): any;
    SetOnExplodeFn(fn: any): any;
  }

  interface ExplosiveResist {
    decaydelay: any;
    decaytime: any;
    delayremaining: number;
    inst: any;
    maxresistdamage: any;
    resistance: number;
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
    numvals: number;
    rate: any;
    values: any;
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
    canusefn: any;
    inst: any;
    onchannelingfn: any;
    onusefn: any;
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
    cost: number;
    fertilize_sound: string;
    fertilizervalue: number;
    inst: any;
    planthealth: any;
    soil_cycles: number;
    withered_cycles: number;
    Heal(target: any): any;
    OnRemoveFromEntity(): any;
    SetHealingAmount(health: any): any;
  }

  interface Fillable {
    container: any;
    filleditem: any;
    filledprefab: any;
    inst: any;
    item: any;
    owner: any;
    Fill(): any;
  }

  interface FiniteUses {
    consumption: any;
    current: number;
    inst: any;
    onfinished: any;
    total: number;
    uses: any;
    was_positive: any;
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
    enabled: boolean;
    inst: any;
    prefab: any;
    sanity_threshold: any;
    time_interval: number;
    time_to_fire: number;
    time_variance: number;
    Disable(): any;
    Enable(enable: any): any;
    GetDebugString(): any;
    OnUpdate(dt: any): any;
  }

  interface FireDetector {
    detectPeriod: any;
    detectTask: any;
    detectedItems: any;
    emergency: boolean;
    emergencyBurnt: any;
    emergencyLevel: number;
    emergencyLevelFireThreshold: any;
    emergencyLevelMax: any;
    emergencyResponsePeriod: any;
    emergencyShutdownPeriod: any;
    emergencyShutdownTask: any;
    emergencyShutdownTime: any;
    emergencyWatched: any;
    inst: any;
    onbeginemergency: any;
    onbeginwarning: any;
    onendemergency: any;
    onendwarning: any;
    onfindfire: any;
    onupdatewarning: any;
    range: any;
    t: any;
    warningStartTime: any;
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
    bigignitesoundthresh: number;
    current_radius: number;
    extinguishsound: any;
    flicker: any;
    highval_i: any;
    highval_r: any;
    inst: any;
    isday: any;
    level: any;
    levels: any;
    light: any;
    lightsound: any;
    lowval_i: any;
    lowval_r: number;
    old: any;
    params: any;
    percent: number;
    playignitesound: boolean;
    playingsound: any;
    playingsoundintensity: any;
    rad: any;
    should_play_extinguish: any;
    time: any;
    usedayparamforsound: boolean;
    val: any;
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
    fish: any;
    fishleft: number;
    fishprefab: any;
    fishrespawntime: any;
    frozen: boolean;
    getfishfn: any;
    hookedfish: any;
    inst: any;
    maxfish: number;
    respawntask: any;
    str: any;
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
    captured_entities: any;
    captured_entities_collect_distance: any;
    collect_radius: number;
    collect_velocity: number;
    delta_x: any;
    delta_z: any;
    dir_length: any;
    dir_x: any;
    dir_x_normalized: any;
    dir_z: any;
    dir_z_normalized: any;
    distance_remaining: number;
    distance_to_play_open_anim: number;
    distance_traveled: any;
    entities: any;
    has_played_throw_pst: boolean;
    idx: number;
    initial_delay: number;
    inst: any;
    last_dir_x: any;
    last_dir_z: any;
    max_captured_entity_collect_distance: number;
    my_x: any;
    my_y: any;
    my_z: any;
    retrieve_distance: number;
    retrieve_distance_traveled: number;
    retrieve_velocity: number;
    spawn_distance: number;
    target_x: any;
    target_z: any;
    thrower: any;
    thrower_x: any;
    thrower_y: any;
    thrower_z: any;
    time_between_drops: number;
    total_distance: any;
    travel_vec_x: any;
    travel_vec_z: any;
    velocity: number;
    x_intersect: any;
    y: any;
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
    caughtfish: any;
    fisherman: any;
    fishleft: any;
    fishtask: any;
    hookedfish: any;
    inst: any;
    loserodtime: any;
    maxstraintime: number;
    maxwaittime: number;
    minstraintime: number;
    minwaittime: number;
    nibbletime: any;
    offset: any;
    persists: boolean;
    roddurability: any;
    spawnPos: any;
    str: any;
    target: any;
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
    fish_level: number;
    fish_prefab_name: any;
    inst: any;
    max_fish_level: number;
    net_x: any;
    net_y: any;
    net_z: any;
    replenish_task: any;
    OnPreNet(net: any): any;
    Replenish(): any;
    SetNettedPrefab(fishing_net_prefab: any): any;
    StartReplenish(replenish_rate: any): any;
    StopReplenish(): any;
  }

  interface Floater {
    anim: any;
    back_fx: any;
    bank: any;
    bob_percent: number;
    do_bank_swap: boolean;
    float_index: number;
    front_fx: any;
    inst: any;
    my_x: any;
    my_y: any;
    my_z: any;
    pos_x: any;
    pos_y: any;
    pos_z: any;
    should_parent_effect: boolean;
    showing_effect: boolean;
    size: string;
    skin_build: any;
    swap_data: any;
    symbol: any;
    vert_offset: any;
    xscale: number;
    yscale: number;
    zscale: number;
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
    best_dist_sq: any;
    best_focus: any;
    best_priority: any;
    current_focus: any;
    fn: any;
    inst: any;
    params: any;
    parent: any;
    sourcetbl: any;
    str: any;
    targets: any;
    toremove: any;
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
    OnLeaderRemoved: any;
    canaccepttarget: boolean;
    currentTime: any;
    inst: any;
    keepleaderonattacked: boolean;
    leader: any;
    maxfollowtime: any;
    othercmp: any;
    porttask: any;
    str: any;
    targettime: any;
    task: any;
    time: any;
    timeLeft: any;
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
    count: any;
    duration: any;
    foods: any;
    inst: any;
    mults: any;
    rec: any;
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
    a: any;
    b: any;
    coldness: number;
    damagetobreak: number;
    damagetotal: number;
    diminishingtask: any;
    extraresist: any;
    fxdata: any;
    fxlevel: number;
    g: any;
    inst: any;
    percent: any;
    prevState: any;
    r: any;
    resistance: number;
    state: any;
    wearofftask: any;
    wearofftime: number;
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
    breath: any;
    breathevent: any;
    enabled: boolean;
    facing: any;
    inst: any;
    offset: any;
    offset_fn: any;
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
    fueltype: any;
    fuelvalue: number;
    inst: any;
    ontaken: any;
    OnRemoveFromEntity(): any;
    SetOnTakenFn(fn: any): any;
    Taken(taker: any): any;
  }

  interface Fueled {
    accepting: boolean;
    bonusmult: number;
    consuming: boolean;
    currentfuel: number;
    depleted: any;
    firstperiod: any;
    firstperioddt: any;
    firstperiodfull: any;
    fueltype: any;
    fuelvalue: number;
    inst: any;
    masterymult: any;
    maxfuel: number;
    newsection: any;
    no_sewing: any;
    oldsection: any;
    ontakefuelfn: any;
    period: number;
    rate: number;
    rate_modifiers: any;
    secondaryfueltype: any;
    section: any;
    sectionfn: any;
    sections: number;
    target: any;
    task: any;
    updatefn: any;
    wetmult: any;
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
    bonusfn: any;
    bonusmult: number;
    inst: any;
    GetBonusMult(item: any, target: any): any;
    SetBonusFn(fn: any): any;
    SetBonusMult(mult: any): any;
  }

  interface GiftReceiver {
    giftcount: number;
    giftmachine: any;
    inst: any;
    old: any;
    HasGift(): boolean;
    OnStartOpenGift(): any;
    OnStopOpenGift(usewardrobe: any): any;
    OpenNextGift(): any;
    RefreshGiftCount(): any;
    SetGiftMachine(inst: any): any;
  }

  interface Grogginess {
    cometotestfn: any;
    decayrate: any;
    grog_amount: number;
    inst: any;
    knockoutduration: number;
    knockouttestfn: any;
    knockouttime: number;
    onwearofffn: any;
    resistance: number;
    wearoffduration: any;
    wearofftime: number;
    whilegroggyfn: any;
    whilewearingofffn: any;
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
    breakobjectsRadius: any;
    breakobjectsRadiusSQ: any;
    burner: boolean;
    damageRings: number;
    delay: number;
    destroyer: boolean;
    destructionRings: number;
    dodamageRadius: any;
    ents: any;
    getEnts: any;
    groundpoundFn: any;
    groundpounddamagemult: number;
    groundpoundfx: string;
    groundpoundringfx: string;
    initialRadius: number;
    inst: any;
    map: any;
    noTags: any;
    numRings: number;
    platformEnts: any;
    platformPushRadius: any;
    platformPushingRings: number;
    pointDensity: number;
    points: any;
    radius: any;
    radiusStepDistance: number;
    ringDelay: number;
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
    ground_shadow: any;
    inst: any;
    max_lerp_height: number;
    max_scale: number;
    min_scale: number;
    original_height: any;
    original_width: any;
    percent: any;
    pos_x: any;
    pos_y: any;
    pos_z: any;
    scale: any;
    OnRemove(): any;
    OnUpdate(dt: any): any;
    SetSize(width: any, height: any): any;
  }

  interface GroupTargeter {
    chance_delta: number;
    current_chance: number;
    inst: any;
    loss: any;
    max_chance: number;
    min_chance: number;
    num_targets: number;
    selected_target: any;
    selection_weight: any;
    target: any;
    targetThreat: any;
    targets: any;
    totalWeight: number;
    total_weight: number;
    weight: number;
    weight_change: number;
    weighting: number;
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
    data: any;
    growonly: boolean;
    inst: any;
    loopstages: boolean;
    magicgrowable: boolean;
    pausedremaining: any;
    remainingtime: any;
    springgrowth: boolean;
    stage: number;
    stages: any;
    targettime: any;
    task: any;
    time: any;
    timeToGrow: number;
    time_from_now: any;
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
    croppoints: any;
    crops: any;
    cycles_left: number;
    data: any;
    growrate: number;
    inst: any;
    isempty: boolean;
    level: number;
    max_cycles_left: number;
    pos: any;
    prefab: any;
    was_fertile: any;
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
    immunity: any;
    inittask: any;
    inst: any;
    level: number;
    nextHitTime: any;
    nextSoundTime: any;
    resistance: any;
    soundattack: any;
    soundevent: any;
    soundwarn: any;
    warndelay: number;
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
    cause: any;
    data: any;
    decaytask: any;
    decaytime: number;
    guard: any;
    guardian: any;
    inst: any;
    old: any;
    onguardiandeathfn: any;
    onsummonfn: any;
    prefab: any;
    refs: any;
    summons: number;
    threshold: number;
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
    data: any;
    growtime: any;
    inst: any;
    maxproduce: number;
    ongrowfn: any;
    onharvestfn: any;
    pos: any;
    produce: number;
    product: any;
    str: any;
    targettime: any;
    task: any;
    time: any;
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
    cracktime: number;
    data: any;
    delay: boolean;
    discomfort: number;
    dt: any;
    has_heater: any;
    hatchfailtime: number;
    hatchtime: number;
    heater_prefs: any;
    inst: any;
    oldstate: any;
    onstatefn: any;
    progress: number;
    state: string;
    task: any;
    toocold: boolean;
    toohot: boolean;
    wants_heater: any;
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
    cooldown: any;
    cooldown_on_successful_haunt: boolean;
    cooldowntimer: number;
    flicker: string;
    haunted: boolean;
    hauntvalue: any;
    inst: any;
    no_wipe_value: boolean;
    onhaunt: any;
    onunhaunt: any;
    panic: boolean;
    panictimer: number;
    usefx: boolean;
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
    health: any;
    inst: any;
    Heal(target: any): any;
    SetHealthAmount(health: any): any;
  }

  interface Health {
    absorb: number;
    amount: any;
    canheal: boolean;
    canmurder: boolean;
    currenthealth: any;
    destroytime: any;
    externalabsorbmodifiers: any;
    externalfiredamagemultipliers: any;
    fire_damage_scale: number;
    fire_timestart: number;
    firedamagecaptimer: number;
    firedamageinlastsecond: number;
    haspenalty: any;
    inst: any;
    invincible: boolean;
    lastfiredamagetime: any;
    max_health: any;
    maxhealth: number;
    min_health: any;
    minhealth: number;
    mult: any;
    new_percent: any;
    nofadeout: boolean;
    old_health: any;
    old_percent: any;
    penalty: number;
    period: any;
    persists: boolean;
    playerabsorb: number;
    regen: any;
    s: any;
    takingfiredamage: boolean;
    takingfiredamagelow: boolean;
    takingfiredamagestarttime: any;
    takingfiredamagetime: number;
    task: any;
    time: any;
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
    bar_atlas: string;
    bar_border: number;
    bar_colour: any;
    bar_height: number;
    bar_image: string;
    bar_ui_offset: any;
    bar_width: number;
    bar_world_offset: any;
    bg_colour: any;
    enabled: boolean;
    hp: any;
    inst: any;
    label_ui_offset: any;
    newwidth: any;
    Enable(enable: any): any;
    SetValue(percent: any): any;
  }

  interface HealthSyncer {
    corrosives: any;
    down: any;
    hots: any;
    inst: any;
    status: any;
    up: any;
    val: any;
    GetOverTime(): any;
    GetPercent(): any;
    OnUpdate(dt: any): any;
  }

  interface HealthTrigger {
    inst: any;
    totrigger: any;
    triggers: any;
    AddTrigger(amount: any, fn: any): any;
    OnHealthDelta(data: any): any;
    OnRemoveFromEntity(): any;
  }

  interface Heater {
    carriedheat: any;
    carriedheatfn: any;
    carriedheatmultiplier: number;
    endothermic: boolean;
    equippedheat: any;
    equippedheatfn: any;
    exothermic: boolean;
    heat: any;
    heatfn: any;
    inst: any;
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
    currentradius: any;
    inst: any;
    ischaracterpassthrough: any;
    issmall: boolean;
    maxradius: any;
    onchangetoitemfn: any;
    onchangetoobstaclefn: any;
    onphysicsstatechangedfn: any;
    onstartfallingfn: any;
    onstopfallingfn: any;
    physicsstate: any;
    task: any;
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
    addmember: any;
    data: any;
    ents: any;
    gatherrange: any;
    herdPos: any;
    inst: any;
    maxsize: number;
    membercount: number;
    members: any;
    membertag: any;
    onempty: any;
    onfull: any;
    str: any;
    task: any;
    toremove: any;
    updatedPos: any;
    updatepos: boolean;
    updateposincombat: boolean;
    updaterange: any;
    validMembers: number;
    x: any;
    y: any;
    z: any;
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
    enabled: boolean;
    herd: any;
    herdprefab: string;
    inst: any;
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
    child: any;
    data: any;
    dt: any;
    inst: any;
    numstoredcreatures: number;
    offset: any;
    ongohome: any;
    onoccupied: any;
    onspawned: any;
    onvacate: any;
    pos: any;
    references: any;
    spawnoffscreen: boolean;
    spawnperiod: number;
    spawnvariance: number;
    storedcreatures: any;
    str: string;
    success: any;
    task: any;
    timetonextspawn: number;
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
    b: any;
    base_add_colour_blue: any;
    base_add_colour_green: any;
    base_add_colour_red: any;
    flash_val: any;
    flashadd: any;
    flashing: boolean;
    flashtimein: any;
    flashtimeout: any;
    g: any;
    goingin: boolean;
    highlight_add_colour_blue: any;
    highlight_add_colour_green: any;
    highlight_add_colour_red: any;
    highlit: boolean;
    inst: any;
    r: any;
    t: number;
    ApplyColour(): any;
    Flash(toadd: any, timein: any, timeout: any): any;
    Highlight(r: any, g: any, b: any): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetAddColour(col: any): any;
    UnHighlight(): any;
  }

  interface HomeSeeker {
    bufferedaction: any;
    home: any;
    inst: any;
    onhomeremoved: any;
    GetDebugString(): any;
    GetHomePos(): any;
    GoHome(shouldrun: any): any;
    HasHome(): boolean;
    SetHome(home: any): any;
  }

  interface Hull {
    boat_lip: any;
    inst: any;
    plank: any;
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
    angle: any;
    boat_physics: any;
    boat_to_hit_x: any;
    boat_to_hit_z: any;
    boat_x: any;
    boat_y: any;
    boat_z: any;
    damage: any;
    damage_applied: any;
    damage_bias: number;
    delta_angle: any;
    health_damage: any;
    hit_angle: any;
    hit_pos_x: any;
    hit_pos_z: any;
    hull_damage: number;
    hull_dmg: number;
    inst: any;
    leak_angle_variance: any;
    leak_damage: any;
    leak_dmg: any;
    leak_idx: number;
    leak_indicator: any;
    leak_indicators: any;
    leak_point_count: number;
    leak_radius: number;
    leak_radius_variance: number;
    leak_x: any;
    leak_z: any;
    leakdamagetest: any;
    leaks: any;
    max_health_damage: number;
    med_leak_dmg: number;
    pos_x: any;
    pos_z: any;
    small_leak_dmg: number;
    speed_damage_factor: any;
    GetLeakAngle(idx: any): any;
    GetLeakPosition(idx: any): any;
    OnCollide(data: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    RefreshLeakIndicator(leak_idx: any): any;
    UpdateHealth(): any;
  }

  interface Hunger {
    burning: boolean;
    burnrate: number;
    burnratemodifiers: any;
    current: any;
    hungerrate: number;
    hurtrate: number;
    inst: any;
    max: number;
    old: any;
    overridestarvefn: any;
    period: number;
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
    count: any;
    countfn: any;
    increment: number;
    incrementdelay: number;
    incrementfn: any;
    inst: any;
    lastproduction: number;
    maxcount: number;
    maxcountfn: any;
    producefn: any;
    toproduce: number;
    CanProduce(): boolean;
    DoProduce(): any;
    GetDebugString(): any;
    TryProduce(): any;
  }

  interface Inspectable {
    desc: any;
    description: any;
    getspecialdescription: any;
    inst: any;
    recordview: any;
    GetDescription(viewer: any): any;
    GetStatus(viewer: any): any;
    OnRemoveFromEntity(): any;
    RecordViews(state: any): any;
    SetDescription(desc: any): any;
  }

  interface Instrument {
    ents: any;
    inst: any;
    onheard: any;
    onplayed: any;
    range: number;
    x: any;
    y: any;
    z: any;
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
    absorbed_damage: any;
    absorbed_percent: number;
    absorbers: any;
    acceptcount: number;
    acceptsstacks: boolean;
    act: any;
    actions: any;
    active_item: any;
    activeitem: any;
    buffaction: any;
    can_use_suggested_slot: boolean;
    container: any;
    containers: any;
    count: number;
    data: any;
    dec: any;
    doerownsobject: any;
    dropondeath: boolean;
    dropped: any;
    empty: any;
    equipslots: any;
    eslot: any;
    halfstack: any;
    handitem: any;
    heavyitem: any;
    heavylifting: boolean;
    ignorefull: boolean;
    ignoreoverflow: boolean;
    ignorescangoincontainer: boolean;
    ignoresound: boolean;
    initialtargetowner: any;
    inst: any;
    inv: any;
    invitem: any;
    isloading: boolean;
    isopen: boolean;
    isvisible: boolean;
    item: any;
    itemInSlot: any;
    items: any;
    itemslots: any;
    leftover_damage: any;
    leftovers: any;
    max: number;
    maxslots: any;
    moisture: number;
    new_item: any;
    newitem: any;
    num: number;
    num_found: number;
    objectDestroyed: any;
    olditem: any;
    opencontainers: any;
    overflow: any;
    overflow_enough: any;
    overflow_found: any;
    overflow_items: any;
    owner: any;
    prefabname: any;
    prefabskinname: any;
    prevslot: any;
    rebuild_snapping: boolean;
    references: any;
    refs: any;
    s: string;
    silentfull: boolean;
    stack: any;
    stacksize: any;
    targetslot: any;
    total_absorption: number;
    total_num_found: number;
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
    angle: any;
    atlasname: any;
    canbepickedup: boolean;
    canbepickedupalive: boolean;
    cangoincontainer: boolean;
    canonlygoinpocket: boolean;
    ct: any;
    heavy: any;
    imagename: any;
    inst: any;
    is_landed: any;
    isnew: boolean;
    keepondeath: boolean;
    nobounce: boolean;
    onactiveitemfn: any;
    ondropfn: any;
    onpickupfn: any;
    onputininventoryfn: any;
    owner: any;
    pushlandedevents: boolean;
    px: any;
    pz: any;
    sinks: boolean;
    speed: any;
    trappable: boolean;
    vely: number;
    vx: any;
    vy: any;
    vz: any;
    x: any;
    y: any;
    z: any;
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
    data: any;
    dryingResistance: number;
    dryingSpeed: number;
    drynessThreshold: any;
    dt: any;
    inst: any;
    iswet: boolean;
    lastUpdate: any;
    moisture: number;
    owner: any;
    stacksize: any;
    t: any;
    targetMoisture: any;
    wetnessResistance: number;
    wetnessSpeed: number;
    wetnessThreshold: any;
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
    onremoved: any;
    onused: any;
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
    consumed: any;
    fail_msg: any;
    inst: any;
    onusekeyfn: any;
    success: any;
    OnRemoveFromEntity(): any;
    SetOnUseKey(onusekeyfn: any): any;
    UseKey(key: any, doer: any): any;
  }

  interface KnownLocations {
    data: any;
    inst: any;
    locations: any;
    locs: any;
    str: string;
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
    count: number;
    dists: any;
    ents: any;
    inst: any;
    ret: any;
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
    count: number;
    followers: any;
    inst: any;
    numfollowers: number;
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
    I_colour_r: any;
    callback: any;
    i_colour: any;
    i_colour_b: any;
    i_colour_g: any;
    i_colour_r: any;
    i_falloff: any;
    i_intensity: any;
    i_radius: any;
    inst: any;
    light: any;
    t: any;
    t_colour_b: any;
    t_colour_g: any;
    t_colour_r: any;
    t_falloff: any;
    t_intensity: any;
    t_radius: any;
    time: any;
    timepassed: number;
    tweening: boolean;
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
    islocked: boolean;
    isstuck: boolean;
    key: any;
    locktype: any;
    onlocked: any;
    onunlocked: any;
    unlocktest: any;
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
    ExternalSpeedMultiplier: any;
    FasterOnRoad: any;
    GetSpeedMultiplier: any;
    RunSpeed: any;
    act_pos: any;
    action_pos: any;
    allow_platform_hopping: any;
    angle: any;
    arrive_dist: any;
    arrive_step_dist: any;
    atdestfn: any;
    blocked: boolean;
    bufferedaction: any;
    can_hop: boolean;
    cur_speed: any;
    currentstep: number;
    desired_speed: any;
    dest: any;
    dest_dir_x: any;
    dest_dir_z: any;
    dest_dot_forward: number;
    destpos_x: any;
    destpos_y: any;
    destpos_z: any;
    desttile_x: any;
    desttile_y: any;
    dir_length: any;
    dir_x: any;
    dir_z: any;
    dist: any;
    dsq: any;
    edge_range: number;
    embarker: any;
    enablegroundspeedmultiplier: boolean;
    externalspeedmultiplier: number;
    extra_arrive_dist: any;
    facepos_x: any;
    facepos_y: any;
    facepos_z: any;
    fastmultiplier: number;
    forward_angle_span: number;
    forward_x: any;
    forward_z: any;
    found_platform: any;
    foundpath: any;
    ground: any;
    groundspeedmultiplier: number;
    handle: any;
    hop_distance: number;
    hop_x: any;
    hop_z: any;
    hopping: boolean;
    idle_anim: any;
    inst: any;
    invalid: any;
    is_at_edge: any;
    is_first_hop_point: boolean;
    is_moving: any;
    is_prediction_enabled: boolean;
    is_running: any;
    is_water: any;
    isle0: any;
    isle1: any;
    ismastersim: any;
    isrunning: boolean;
    isupdating: boolean;
    last_platform_visited: any;
    lastdesttile: any;
    lastpos: any;
    m: number;
    map: any;
    my_platform: any;
    my_x: any;
    my_y: any;
    my_z: any;
    mypos_x: any;
    mypos_y: any;
    mypos_z: any;
    oncreep: any;
    other_platform: any;
    p0: any;
    p1: any;
    p_length: any;
    path: any;
    path_x: any;
    path_z: any;
    pathstatus: any;
    pathtile_x: any;
    pathtile_y: any;
    platform: any;
    platform_dir_x: any;
    platform_dir_z: any;
    platform_x: any;
    platform_z: any;
    pos: any;
    pt_x: any;
    pt_z: any;
    px: any;
    pz: any;
    radius: any;
    reached_dest: any;
    reason: any;
    rotation: any;
    run_dist: any;
    runspeed: any;
    should_locomote: boolean;
    slowmultiplier: number;
    speed: any;
    speed_mult: any;
    src_params: any;
    step: any;
    step_count: any;
    step_distsq: any;
    steppos_x: any;
    steppos_y: any;
    steppos_z: any;
    steps: any;
    success: any;
    t: any;
    target_platform: any;
    temp_platform: any;
    temp_x: any;
    temp_z: any;
    tempgroundspeedmultiplier: any;
    tempgroundspeedmulttime: any;
    tempgroundtile: any;
    throttle: number;
    tile_x: any;
    tile_y: any;
    time_before_next_hop_is_allowed: number;
    too_early_top_hop: any;
    triggerscreep: boolean;
    tx: any;
    ty: any;
    walkspeed: any;
    wantstomoveforward: boolean;
    wantstorun: boolean;
    wasoncreep: boolean;
    x: any;
    y: any;
    z: any;
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
    angle: any;
    chanceloot: any;
    chanceloottable: any;
    chancerandomloot: any;
    cosangle: any;
    droppingchanceloot: boolean;
    flingtargetpos: any;
    flingtargetvariance: any;
    ifnotchanceloot: any;
    inst: any;
    isstructure: any;
    loot: any;
    loot_table: any;
    lootfn: any;
    loots: any;
    lootsetupfn: any;
    max_speed: any;
    min_speed: any;
    num_decor_loot: any;
    numrandomloot: any;
    percent: number;
    prefabname: any;
    prefabs: any;
    radius: any;
    randomhauntedloot: any;
    randomloot: any;
    recipe: any;
    recipeloot: any;
    rnd: any;
    sinangle: any;
    speed: any;
    totalhauntedrandomweight: number;
    totalrandomweight: number;
    trappable: boolean;
    y_speed: any;
    y_speed_variance: any;
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
    cooldowntime: number;
    data: any;
    inst: any;
    ison: boolean;
    oncooldown: boolean;
    turnofffn: any;
    turnonfn: any;
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
    product: any;
    result: any;
    stage: any;
    stages: any;
    str: string;
    task: any;
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
    entities: any;
    is_valid_ground: boolean;
    map: any;
    mast_min_distance: number;
    min_distance_from_boat: any;
    min_distance_from_land: any;
    min_spacing_sq: any;
    pt_x: any;
    pt_y: any;
    pt_z: any;
    radius: any;
    test_increment: any;
    tile: any;
    valid_tile: any;
    valid_water_tile: any;
    x: any;
    y: any;
    z: any;
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
    MapExplorer: any;
    dirty: boolean;
    inst: any;
    mapauthor: any;
    mapdata: any;
    mapday: any;
    maplocation: any;
    mapsession: any;
    ondatachangedfn: any;
    onteachfn: any;
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
    icon: any;
    iconname: any;
    iconprefab: string;
    iconpriority: any;
    inst: any;
    refreshperiod: number;
    restriction: any;
    revealsources: any;
    task: any;
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
    autounfurlunits: number;
    boat: any;
    boat_physics: any;
    furlers: any;
    furlunits: any;
    furlunits_max: number;
    has_speed: boolean;
    inst: any;
    is_sail_raised: boolean;
    is_sail_transitioning: boolean;
    lowered_anchor_count: number;
    mast_x: any;
    mast_y: any;
    mast_z: any;
    max_velocity: any;
    max_velocity_mod: any;
    rudder: any;
    rudder_direction_x: any;
    rudder_direction_z: any;
    rudder_turn_drag: any;
    sail_force: any;
    sinking: boolean;
    total_strength: number;
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
    healamount: any;
    inst: any;
    Heal(target: any): any;
    SetHealthAmount(health: any): any;
  }

  interface MaxLightSpawner {
    angleoffset: number;
    data: any;
    inst: any;
    light: any;
    lightname: string;
    lights: any;
    maxlights: number;
    numlights: number;
    pt: any;
    radius: number;
    theta: any;
    LoadPostPass(newents: any, savedata: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
    SpawnAllLights(): any;
    SpawnLight(location: any): any;
    TakeOwnership(light: any): any;
  }

  interface MaxwellTalker {
    canskip: boolean;
    defaultvoice: string;
    inputhandlers: any;
    inst: any;
    length: any;
    pt: any;
    speech: any;
    speeches: any;
    wilson: any;
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
    cooldown: any;
    cost: any;
    dt: any;
    duration: any;
    fan_offset: any;
    inst: any;
    large_remaining: any;
    level: any;
    level_params: any;
    map: any;
    medium_remaining: any;
    met: any;
    peripheral: any;
    radius: any;
    rand: any;
    rate: any;
    remaining_time: any;
    retries_remaining: any;
    spawn_mod: any;
    task: any;
    tasktotime: any;
    theta: any;
    x: any;
    y: any;
    z: any;
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
    alignment: string;
    inactive: boolean;
    inst: any;
    issprung: boolean;
    next_test_time: any;
    ondeactivate: any;
    onexplode: any;
    onreset: any;
    onsetsprung: any;
    radius: any;
    target: any;
    testtask: any;
    testtimefn: any;
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
    activate_fn: any;
    active: boolean;
    active_pulse: any;
    deactivate_fn: any;
    inst: any;
    participator_dist: number;
    participators: any;
    spectator_dist: number;
    spectators: any;
    x: any;
    y: any;
    z: any;
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
    expireytime: any;
    inst: any;
    minigame: any;
    onminigameover: any;
    updatecheck: any;
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
    data: any;
    distancemodifier: number;
    freepositions: any;
    ground: any;
    guidtable: any;
    inst: any;
    maxminions: number;
    maxpositions: any;
    minion: any;
    minionpositions: any;
    minions: any;
    minionspawntime: any;
    miniontype: string;
    nextspawninfo: any;
    num: any;
    numminions: number;
    onlostminionfn: any;
    onminionattack: any;
    onminionattacked: any;
    onspawnminionfn: any;
    pos: any;
    possiblespawns: any;
    shouldspawn: boolean;
    spawninprogress: boolean;
    task: any;
    useablepositions: any;
    validtiletypes: any;
    x: any;
    y: any;
    z: any;
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
    baseDryingRate: number;
    current: any;
    delta: any;
    dryingrate: any;
    equippedmoisturerate: any;
    forceddrymodifiers: any;
    full: any;
    heaterPower: any;
    inherentWaterproofness: number;
    inst: any;
    max: any;
    maxDryingRate: number;
    maxMoistureRate: number;
    maxPlayerTempDrying: number;
    maxmoisture: number;
    minDryingRate: number;
    minMoistureRate: number;
    minPlayerTempDrying: number;
    moisture: number;
    moisturerate: any;
    newSegs: any;
    num: any;
    numSegs: number;
    oldLevel: any;
    oldSegs: any;
    optimalDryingTemp: number;
    rate: number;
    ratescale: any;
    sleepingbagdryingrate: any;
    str: any;
    target: any;
    waterproofinventory: boolean;
    waterproofmult: any;
    waterproofnessmodifiers: any;
    wet: boolean;
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
    active: boolean;
    daystomoodchange: any;
    enabled: boolean;
    firstseasonadded: boolean;
    inst: any;
    isinmood: boolean;
    length: any;
    moodseasons: any;
    moodtimeindays: any;
    onentermood: any;
    onleavemood: any;
    season: any;
    seasonmood: boolean;
    wait: any;
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
    cc: any;
    ents: any;
    inst: any;
    maxspawns: number;
    period: number;
    range: number;
    started: boolean;
    task: any;
    x: any;
    y: any;
    z: any;
    ForcePetrify(): any;
    OnRemoveFromEntity(): any;
    Start(): any;
    Stop(): any;
  }

  interface MoonRelic {
    inst: any;
  }

  interface MoonTrader {
    canaccept: any;
    inst: any;
    onaccept: any;
    reason: any;
    success: any;
    AcceptOffering(giver: any, item: any): any;
    SetCanAcceptFn(fn: any): any;
    SetOnAcceptFn(fn: any): any;
  }

  interface Named {
    inst: any;
    name: any;
    nameformat: any;
    possiblenames: any;
    OnLoad(data: any): any;
    OnSave(): any;
    PickNewName(): any;
    SetName(name: any): any;
  }

  interface NIS {
    cancel: any;
    data: any;
    init: any;
    inputhandlers: any;
    inst: any;
    name: string;
    playing: boolean;
    script: any;
    skippable: boolean;
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
    boat_physics: any;
    boat_x: any;
    boat_y: any;
    boat_z: any;
    doer_x: any;
    doer_y: any;
    doer_z: any;
    ents: any;
    fail_idx: number;
    fail_string_count: number;
    fail_wetness: number;
    inst: any;
    platform: any;
    row_dir_x: any;
    row_dir_z: any;
    Row(doer: any, pos: any): any;
    RowFail(doer: any): any;
  }

  interface Oasis {
    distsq: any;
    inst: any;
    maxradius: any;
    radius: number;
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
    currentAngle: number;
    currentSpeed: number;
    inst: any;
    GetCurrentAngle(): any;
    GetCurrentSpeed(): any;
    GetCurrentVec3(): any;
    OnUpdate(dt: any): any;
  }

  interface OceanColor {
    blend_delay: any;
    blend_speed: any;
    current_color: any;
    current_ocean_texture_blend: any;
    end_color: any;
    end_ocean_texture_blend: any;
    inst: any;
    lerp: number;
    lerp_delay: number;
    map: any;
    start_color: any;
    start_ocean_texture_blend: any;
    target_color: any;
    Initialize(has_ocean: any): any;
    OnPhaseChanged(src: any, phase: any): any;
    OnWallUpdate(dt: any): any;
  }

  interface PeriodicSpawner {
    basetime: number;
    count: number;
    density: any;
    ents: any;
    inst: any;
    onspawn: any;
    prefab: any;
    randtime: number;
    range: any;
    spacing: any;
    spawnoffscreen: boolean;
    spawntest: any;
    t: any;
    target_time: any;
    task: any;
    time_to_wait: any;
    x: any;
    y: any;
    z: any;
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
    cur: any;
    dt: any;
    frozenfiremult: boolean;
    goop: any;
    holder: any;
    inst: any;
    localPerishMultiplyer: number;
    onperishreplacement: any;
    owner: any;
    percent: any;
    perishfn: any;
    perishremainingtime: any;
    perishtime: any;
    slot: any;
    targettime: any;
    updatetask: any;
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
    corrosives: any;
    down: any;
    hots: any;
    inst: any;
    ismastersim: any;
    k: any;
    pet: any;
    status: any;
    task: any;
    up: any;
    val: any;
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
    data: any;
    inst: any;
    maxpets: number;
    numpets: number;
    ondespawnfn: any;
    onspawnfn: any;
    pet: any;
    petprefab: any;
    pets: any;
    toremove: any;
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
    baseregentime: any;
    canbepicked: boolean;
    caninteractwith: boolean;
    cycles_left: number;
    data: any;
    dropheight: any;
    droppicked: any;
    fertilize_cycles: number;
    inst: any;
    jostlepick: boolean;
    loot: any;
    makebarrenfn: any;
    makeemptyfn: any;
    makefullfn: any;
    max_cycles: any;
    num: any;
    numtoharvest: number;
    onpickedfn: any;
    onregenfn: any;
    pause_time: number;
    paused: boolean;
    product: any;
    protected_cycles: any;
    pt: any;
    quickpick: boolean;
    regentime: any;
    str: string;
    targettime: any;
    task: any;
    time: any;
    time_to_pickable: any;
    transplanted: boolean;
    wasempty: any;
    wildfirestarter: boolean;
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
    attacks_since_pinned: number;
    canbepinned: boolean;
    fx: any;
    fxdata: any;
    fxlevel: number;
    index: any;
    inst: any;
    last_stuck_time: number;
    last_unstuck_time: number;
    mintime: any;
    prevState: any;
    ratio: any;
    remaining: any;
    stuck: boolean;
    wearofftask: any;
    wearofftime: any;
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
    action: any;
    builder: any;
    can_build: boolean;
    inst: any;
    invobject: any;
    linked: any;
    mouse_blocked: boolean;
    offset: number;
    oncanbuild: any;
    oncannotbuild: any;
    onupdatetransform: any;
    pt: any;
    radius: number;
    recipe: any;
    rot: any;
    selected_pos: any;
    testfn: any;
    x: any;
    y: any;
    z: any;
    GetDeployAction(): any;
    LinkEntity(ent: any): any;
    OnUpdate(dt: any): any;
    OnWallUpdate(dt: any): any;
    SetBuilder(builder: any, recipe: any, invobject: any): any;
  }

  interface Plantable {
    growtime: number;
    inst: any;
    product: any;
  }

  interface PlantRegrowth {
    area: any;
    data: any;
    ents: any;
    fiveradius: any;
    inst: any;
    nextregrowth: number;
    offspring: any;
    product: any;
    regrowthrate: any;
    searchtag: any;
    spawnpoint: any;
    targetradius: any;
    x: any;
    y: any;
    z: any;
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
    actionfilter: any;
    actionfilterstack: any;
    actions: any;
    cansee: any;
    containers: any;
    disable_right_click: boolean;
    equipitem: any;
    inst: any;
    isaoetargeting: boolean;
    ispassable: any;
    leftclickoverride: any;
    lmb: any;
    lmbs: any;
    map: any;
    num: any;
    player_platform: any;
    player_pos: any;
    pointspecialactionsfn: any;
    ret: any;
    rightclickoverride: any;
    rmb: any;
    rmbs: any;
    sorted_acts: any;
    steering_actions: any;
    target_platform: any;
    topfilter: any;
    usedefault: any;
    useitem: any;
    wantsaoetargeting: boolean;
    x: any;
    y: any;
    z: any;
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
    allowburnt: any;
    allowemptyname: any;
    base_skin: any;
    body_skin: any;
    data: any;
    equip: any;
    feet_skin: any;
    hand_skin: any;
    hasdata: boolean;
    inst: any;
    legs_skin: any;
    numbers: any;
    saveequip: any;
    savenumbers: any;
    saveskins: any;
    savestrings: any;
    skins: any;
    strings: any;
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
    HasItemSlots: any;
    LMBaction: any;
    RMBaction: any;
    ROT_REPEAT: number;
    ZOOM_REPEAT: number;
    act: any;
    action: any;
    action_mod_name: any;
    actionbuttonoverride: any;
    actioncode: any;
    attack_buffer: any;
    attack_control: boolean;
    attackrange: any;
    bit: number;
    buffaction: any;
    bufferedcastaoe: any;
    can_use_map: boolean;
    chainattack_cb: any;
    classified: any;
    client_obj: any;
    code: number;
    combat: any;
    container: any;
    controller_attack_override: any;
    controller_attack_target: any;
    controller_attack_target_ally_cd: any;
    controller_mode: any;
    controller_target: any;
    controller_target_age: number;
    controller_targeting_lock_target: boolean;
    controller_targeting_lock_timer: number;
    controller_targeting_modifier_down: boolean;
    controller_targeting_target_index: number;
    controller_targeting_targets: any;
    controlmods: any;
    currentbuffaction: any;
    deploy_mode: boolean;
    deployplacer: any;
    dir: any;
    directwalking: boolean;
    dirx: any;
    dirz: any;
    disembark_x: any;
    disembark_z: any;
    distancetotargetsq: any;
    draggingonground: boolean;
    dragwalking: boolean;
    embarker: any;
    entity_under_mouse: any;
    ents: any;
    equipitem: any;
    equippable: any;
    fn: any;
    force_attack: any;
    force_target_distsq: any;
    handler: any;
    has_weapon: any;
    heading_angle: any;
    hidespecialactionreticule: boolean;
    highlight_guy: any;
    hop_dir_dot_platform_velocity: any;
    hop_dir_x: any;
    hop_dir_z: any;
    hop_distance: any;
    hop_distance_sq: any;
    hop_rubber_band_distance: any;
    hop_rubber_band_distance_sq: any;
    inst: any;
    inv_obj: any;
    inventory: any;
    inventoryitem: any;
    is_hopping: boolean;
    is_map_enabled: boolean;
    isaoetargeting: any;
    isbusy: any;
    isclientcontrollerattached: boolean;
    isenabled: any;
    ishudblocking: any;
    isidle: any;
    islocal: any;
    ismastersim: any;
    isspecial: any;
    item: any;
    itempos: any;
    lastrottime: any;
    lastzoomtime: any;
    lmb: any;
    locomotor: any;
    map: any;
    mouseover: any;
    mousetimeout: number;
    my_x: any;
    my_y: any;
    my_z: any;
    nearby_ents: any;
    nearest_dist: any;
    new_highlight: any;
    new_highlight_guy: any;
    noforce: any;
    normalized_hop_dir_x: any;
    normalized_hop_dir_z: any;
    normalized_platform_velocity_x: any;
    normalized_platform_velocity_z: any;
    now: any;
    num_targets: any;
    obj: any;
    ondetachclassified: any;
    overridedest: any;
    pickup_tags: any;
    placer: any;
    placer_cached: any;
    placer_item: any;
    placer_name: any;
    placer_recipe: any;
    placer_recipe_skin: any;
    placer_skin: any;
    platform: any;
    platform_for_velocity_calculation: any;
    platform_physics: any;
    platform_velocity_x: number;
    platform_velocity_z: number;
    platform_x: any;
    platform_y: any;
    platform_z: any;
    pos_x: any;
    pos_z: any;
    position: any;
    predictionsent: boolean;
    predictwalking: boolean;
    pt: any;
    rad: any;
    reach: any;
    relative_x: any;
    relative_z: any;
    remote_controls: any;
    remote_vector: any;
    retarget: any;
    reticule: any;
    rider: any;
    rmb: any;
    rotamount: number;
    skin_index: any;
    slot: any;
    startdragtestpos: any;
    startdragtime: any;
    steeringwheeluser: any;
    stopdistancesq: number;
    t: any;
    target: any;
    target_platform: any;
    target_velocity_rubber_band_distance: number;
    target_x: any;
    target_y: number;
    target_z: any;
    terraform: boolean;
    terraformer: any;
    testfn: any;
    time: any;
    time_direct_walking: number;
    tool: any;
    usedefault: any;
    velocity: any;
    x: any;
    x0: any;
    y: number;
    y0: any;
    z: any;
    z0: any;
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
    dsptables: any;
    inst: any;
    GetDSPTables(): any;
    UpdateDSPTables(): any;
  }

  interface PlayerInspectable {
    inst: any;
  }

  interface PlayerLightningTarget {
    hitchance: number;
    inst: any;
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
    alivemode: any;
    far: number;
    inst: any;
    isclose: boolean;
    losttargetfn: any;
    near: number;
    onfar: any;
    onnear: any;
    originaltargetmode: any;
    period: any;
    target: any;
    targetmode: any;
    task: any;
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
    checked: any;
    inst: any;
    max_range: any;
    offScreenPlayers: any;
    onScreenPlayersLastTick: any;
    onplayerexited: any;
    OnRemoveFromEntity(): any;
    OnUpdate(): any;
    ShouldRemoveIndicator(target: any): any;
    ShouldShowIndicator(target: any): any;
  }

  interface PlayerVision {
    ccphasefn: any;
    cctable: any;
    currentccphasefn: any;
    currentcctable: any;
    forcegogglevision: boolean;
    forcenightvision: boolean;
    ghostvision: boolean;
    gogglevision: boolean;
    inst: any;
    nightmarevision: boolean;
    nightvision: boolean;
    overridecctable: any;
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
    classified: any;
    inst: any;
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
    collectcount: number;
    distance: number;
    flower: any;
    flowers: any;
    inst: any;
    maxdensity: number;
    nearbyentities: any;
    parentFlower: any;
    target: any;
    x: any;
    y: any;
    z: any;
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
    axe: any;
    checkownertask: any;
    container: any;
    currentowner: any;
    data: any;
    fx: any;
    inst: any;
    oncontainerpickedup: any;
    onplayerdied: any;
    onplayerjoined: any;
    onplayerpossessedaxe: any;
    onplayerremoved: any;
    owner: any;
    player: any;
    revert_fx: any;
    revert_prefab: string;
    revert_time: any;
    revert_uses: any;
    slot: any;
    transform_fx: any;
    userid: any;
    waittask: any;
    waittotime: any;
    x: any;
    y: any;
    z: any;
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
    angle: any;
    attacker: any;
    cancatch: boolean;
    delaypos: any;
    delaytask: any;
    dest: any;
    direction: any;
    dozeOffTask: any;
    facing_angle: any;
    hitdist: number;
    homing: boolean;
    inst: any;
    launchoffset: any;
    oncaught: any;
    onhit: any;
    onmiss: any;
    onthrown: any;
    owner: any;
    pos: any;
    range: any;
    rot: any;
    speed: any;
    start: any;
    stimuli: any;
    target: any;
    weapon: any;
    x: any;
    y: any;
    z: any;
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
    acceptsheat: boolean;
    currentheat: number;
    damagerange: number;
    damages: boolean;
    data: any;
    decayrate: number;
    delay: any;
    dmg_range: any;
    dmg_range_sq: any;
    dt: number;
    ents: any;
    flashpoint: number;
    heatoutput: number;
    inst: any;
    isendothermic: any;
    onflashpoint: any;
    pauseheating: boolean;
    pos: any;
    prop_range: any;
    prop_range_sq: any;
    propagaterange: number;
    pvp_damagemod: any;
    source: any;
    spreading: boolean;
    task: any;
    tile: any;
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
    doers: any;
    inst: any;
    on: boolean;
    onremovedoer: any;
    onturnoff: any;
    onturnon: any;
    trees: any;
    Activate(doer: any, recipe: any): any;
    GetTechTrees(): any;
    OnRemoveFromEntity(): any;
    TurnOff(doer: any): any;
    TurnOn(doer: any): any;
  }

  interface RampingSpawner {
    SpawnTask: any;
    current_wave: number;
    data: any;
    inst: any;
    max_wave: number;
    min_wave: number;
    num_spawns: number;
    refs: any;
    spawn: any;
    spawn_prefab: string;
    spawning_on: boolean;
    spawns: any;
    wave_num: number;
    wave_time: number;
    waves_to_max: number;
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
    data: any;
    inst: any;
    stock: any;
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
    checkmaterialfn: any;
    inst: any;
    noannounce: any;
    reason: any;
    repairmaterial: any;
    success: any;
    NeedsRepairs(): any;
    OnRemoveFromEntity(): any;
    Repair(doer: any, repair_item: any): any;
  }

  interface Repairer {
    healthrepairpercent: number;
    healthrepairvalue: number;
    inst: any;
    perishrepairpercent: number;
    repairmaterial: any;
    workrepairvalue: number;
    OnRemoveFromEntity(): any;
  }

  interface ResearchPointConverter {
    active: boolean;
    inst: any;
    level: number;
    on: boolean;
    val: number;
    Activate(): any;
    TurnOff(): any;
    TurnOn(): any;
  }

  interface Resistance {
    inst: any;
    onresistdamage: any;
    shouldresistfn: any;
    str: any;
    tags: any;
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
    a: any;
    blipalpha: number;
    currentcolour: any;
    ease: boolean;
    fadealpha: number;
    followhandler: any;
    inst: any;
    invalidcolour: any;
    mouseenabled: boolean;
    mousetargetfn: any;
    ping: any;
    pingprefab: any;
    pos: any;
    reticule: any;
    reticuleprefab: string;
    smoothing: number;
    targetfn: any;
    targetpos: any;
    updatepositionfn: any;
    validcolour: any;
    x: any;
    x0: any;
    y: any;
    y0: any;
    z: any;
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
    canberevivedbyfn: any;
    inst: any;
    ismastersim: any;
    mult: any;
    revive_health_percet: number;
    revivespeedmult: number;
    tagmults: any;
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
    canride: boolean;
    data: any;
    inst: any;
    lastridetime: any;
    oldrider: any;
    pt: any;
    requiredobedience: any;
    riddentask: any;
    rider: any;
    saddle: any;
    saddleable: boolean;
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
    canbepinned: boolean;
    data: any;
    ex_mount: any;
    inst: any;
    mount: any;
    redirectdamagefn: any;
    rideable: any;
    riding: boolean;
    saddle: any;
    saddler: any;
    tx: any;
    ty: any;
    tz: any;
    x: any;
    y: any;
    z: any;
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
    bonusdamage: any;
    discardedcb: any;
    inst: any;
    speedmult: any;
    swapbuild: any;
    swapsymbol: any;
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
    aura_delta: number;
    aura_val: any;
    current: any;
    custom_rate_fn: any;
    dapper_delta: any;
    dapperness: number;
    dapperness_mult: number;
    delta: any;
    ents: any;
    externalmodifiers: any;
    fxtime: number;
    ghost_delta: any;
    ghost_drain_mult: number;
    group_resist: any;
    inducedinsanity: any;
    inducedinsanity_sources: any;
    inst: any;
    light_delta: any;
    light_sanity_drain: any;
    lightval: any;
    max: number;
    mode: any;
    moisture_delta: any;
    mount: any;
    neg_aura_absorb: number;
    neg_aura_mult: number;
    night_drain_mult: number;
    num_alive: any;
    num_ghosts: any;
    penalty: number;
    percent_ignoresinduced: any;
    rate: number;
    rate_modifier: number;
    ratescale: any;
    sane: boolean;
    sanity_penalties: any;
    target: any;
    total_dapperness: any;
    x: any;
    y: any;
    z: any;
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
    aura: number;
    aura_val: number;
    aurafn: any;
    distsq: any;
    inst: any;
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
    data: any;
    inst: any;
    scale: any;
    sx: any;
    sy: any;
    sz: any;
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
    data: any;
    hasrunonce: boolean;
    inst: any;
    script: any;
    scriptname: any;
    ClearScenario(): any;
    OnLoad(data: any): any;
    OnSave(): any;
    Reset(): any;
    Run(): any;
    SetScript(name: any): any;
  }

  interface SelfStacker {
    inst: any;
    num: any;
    searchradius: number;
    stackpartner: any;
    to_combine: any;
    CanSelfStack(): boolean;
    DoStack(): any;
    FindItemToStackWith(): any;
    OnEntityWake(): any;
  }

  interface SentientAxe {
    convo_task: any;
    inst: any;
    owner: any;
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
    forgetattackertime: number;
    inst: any;
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
    item: any;
    num: any;
    shedHeight: number;
    shedItemPrefab: any;
    shedTask: any;
    speed: number;
    x: any;
    y: any;
    z: any;
    DoMultiShed(max: any, random: any): any;
    DoSingleShed(): any;
    StartShedding(interval: any): any;
    StopShedding(): any;
  }

  interface Shelf {
    cantakeitem: boolean;
    cantakeitemfn: any;
    inst: any;
    itemonshelf: any;
    onitemtakenfn: any;
    onshelfitemfn: any;
    ontakeitemfn: any;
    prevcontainer: any;
    prevslot: any;
    OnRemoveFromEntity(): any;
    PutItemOnShelf(item: any): any;
    SetOnShelfItem(fn: any): any;
    SetOnTakeItem(fn: any): any;
    TakeItem(taker: any): any;
  }

  interface Sheltered {
    announcecooldown: number;
    ents: any;
    inst: any;
    presheltered: boolean;
    sheltered: boolean;
    stoptime: any;
    waterproofness: any;
    x: any;
    y: any;
    z: any;
    GetDebugString(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    SetSheltered(issheltered: any): any;
    Start(): any;
    Stop(): any;
  }

  interface Shop {
    inst: any;
    physcsPT: any;
    tab: string;
    title: string;
    x: any;
    y: any;
    z: any;
    DeliverItems(items: any): any;
    SetStartTab(tab: any): any;
    SetTitle(title: any): any;
  }

  interface SinkholeSpawner {
    base_num_attacks: any;
    data: any;
    inst: any;
    num_players: number;
    offset: any;
    s: any;
    sinkhole: any;
    target_players: any;
    targets: any;
    toattack: any;
    towarn: any;
    weighted_players: any;
    x: any;
    year_length: any;
    z: any;
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
    callback: any;
    cb: any;
    i_size: any;
    inst: any;
    s: any;
    t_size: any;
    time: any;
    timepassed: number;
    tweening: boolean;
    EndTween(): any;
    OnUpdate(dt: any): any;
    StartTween(size: any, time: any, callback: any): any;
  }

  interface Skinner {
    base_skin: string;
    clothing: any;
    inst: any;
    skin_data: any;
    skin_name: string;
    skin_prefab: any;
    skintype: string;
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
    diminishingtask: any;
    extraresist: any;
    hibernate: boolean;
    inst: any;
    isasleep: boolean;
    lasttesttime: any;
    lasttransitiontime: any;
    resistance: number;
    sleepiness: number;
    sleeptestfn: any;
    testperiod: number;
    testtask: any;
    testtime: any;
    waketestfn: any;
    wasasleep: any;
    wearofftask: any;
    wearofftime: number;
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
    dryingrate: any;
    healthsleep: boolean;
    inst: any;
    onsleep: any;
    onwake: any;
    sleeper: any;
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
    child: any;
    childname: any;
    data: any;
    delay: number;
    inst: any;
    nextspawntime: any;
    offset: any;
    onoccupied: any;
    onvacate: any;
    queue_spawn: boolean;
    rad: any;
    refs: any;
    retry_period: any;
    retryperiod: any;
    spawn_in_water: any;
    spawn_on_boats: any;
    spawnoffscreen: boolean;
    start_angle: any;
    task: any;
    x: any;
    y: any;
    z: any;
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
    fadeval: number;
    inst: any;
    k: any;
    updating: boolean;
    Cancel(): any;
    FadeIn(): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
  }

  interface SpectatorCorpse {
    active: boolean;
    inst: any;
    lasttarget: any;
    maxrange: number;
    priority: number;
    rangesq: any;
    startspeed: number;
    str: any;
    target: any;
    updating: boolean;
    x: any;
    y: any;
    z: any;
    OnUpdate(): any;
  }

  interface Spell {
    active: boolean;
    data: any;
    duration: number;
    fn: any;
    inst: any;
    lifetime: number;
    onfinishfn: any;
    onstartfn: any;
    ontargetfn: any;
    period: any;
    removeonfinish: boolean;
    resumefn: any;
    spellname: string;
    target: any;
    timeleft: any;
    timer: any;
    variables: any;
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
    canonlyuseoncombat: boolean;
    canonlyuseonlocomotors: boolean;
    canonlyuseonlocomotorspvp: boolean;
    canonlyuseonrecipes: boolean;
    canonlyuseonworkable: boolean;
    canusefrominventory: boolean;
    canuseonpoint: boolean;
    canuseonpoint_water: boolean;
    canuseontargets: boolean;
    inst: any;
    onspellcast: any;
    px: any;
    py: any;
    pz: any;
    quickcast: boolean;
    spell: any;
    CanCast(doer: any, target: any, pos: any): boolean;
    CastSpell(target: any, pos: any): any;
    OnRemoveFromEntity(): any;
    SetOnSpellCastFn(fn: any): any;
    SetSpellFn(fn: any): any;
  }

  interface Spooked {
    agefactor: any;
    anim: any;
    fx: any;
    inst: any;
    k: any;
    lastspooktime: any;
    maxspookage: any;
    maxspookdelta: number;
    maxspookedlevel: number;
    spookedlevel: number;
    spookedthreshold: number;
    stage: any;
    t: any;
    x: any;
    y: any;
    z: any;
    GetDebugString(): any;
    ShouldSpook(): any;
    Spook(source: any): any;
  }

  interface SquadMember {
    inst: any;
    k: any;
    others: any;
    squad: string;
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
    instance: any;
    maxsize: any;
    newsize: any;
    newtotal: any;
    num_to_add: any;
    num_to_get: any;
    numberadded: any;
    old_size: any;
    oldsize: any;
    ondestack: any;
    ret: any;
    stacksize: number;
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
    boat: any;
    dir_x: any;
    dir_z: any;
    inst: any;
    onboatremoved: any;
    onstopturning: any;
    player_pos_x: any;
    player_pos_y: any;
    player_pos_z: any;
    prev_steering_wheel: any;
    right_vec: any;
    should_play_left_turn_anim: boolean;
    steering_wheel: any;
    wheel_remove_callback: any;
    x: any;
    y: any;
    z: any;
    GetBoat(): any;
    OnUpdate(dt: any): any;
    SetSteeringWheel(steering_wheel: any): any;
    Steer(pos_x: any, pos_z: any): any;
    SteerInDir(dir_x: any, dir_z: any): any;
  }

  interface Stewer {
    canbeopened: boolean;
    cooktime: number;
    cooktimemult: number;
    done: any;
    ings: any;
    inst: any;
    loot: any;
    prod: any;
    product: any;
    product_spoilage: any;
    productperishtime: any;
    recipe: any;
    remainingtime: any;
    spoilage_n: number;
    spoilage_total: number;
    spoiledproduct: string;
    spoilpercent: any;
    spoiltime: any;
    stacksize: any;
    status: any;
    targettime: any;
    task: any;
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
    delay: any;
    inst: any;
    level: any;
    sandstormlevel: number;
    sandstormspeedmult: number;
    OnUpdate(dt: any): any;
    SetSandstormSpeedMultiplier(mult: any): any;
    ToggleSandstorms(active: any): any;
    UpdateSandstormLevel(): any;
    UpdateSandstormWalkSpeed(): any;
  }

  interface Stretcher {
    diff: any;
    inst: any;
    mypos: any;
    restinglength: number;
    scale: any;
    target: any;
    targetpos: any;
    widthratio: number;
    widthscale: any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    SetRestingLength(length: any): any;
    SetStretchTarget(inst: any): any;
    SetWidthRatio(ratio: any): any;
  }

  interface Stunnable {
    damage: any;
    inst: any;
    stun_cooldown: number;
    stun_duration: number;
    stun_period: number;
    stun_resist: number;
    stun_threshold: number;
    toremove: any;
    totaldamage: number;
    valid_stun_time: number;
    GetDamageInPeriod(): any;
    Stun(): any;
    TakeDamage(damage: any): any;
  }

  interface Talkable {
    conv_index: number;
    conversation: any;
    inst: any;
  }

  interface Talker {
    chatter: any;
    disablefollowtext: any;
    health: any;
    ignoring: any;
    inst: any;
    lines: any;
    mod_str_fn: any;
    offset: any;
    offset_fn: any;
    task: any;
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
    destpos: any;
    ents: any;
    formationpos: any;
    homePos: any;
    inst: any;
    inteam: boolean;
    leashdistance: number;
    mypos: any;
    order: any;
    orders: any;
    pt: any;
    searchradius: number;
    str: any;
    target: any;
    team_type: string;
    teamleader: any;
    x: any;
    y: any;
    z: any;
    GetDebugString(): any;
    LeaveTeam(): any;
    OnEntitySleep(): any;
    OnEntityWake(): any;
    OnUpdate(dt: any): any;
    SearchForTeam(): any;
    ShouldGoHome(): any;
  }

  interface TeamLeader {
    attack_grp_size: any;
    attackinterval: number;
    chasetime: number;
    chk_state: boolean;
    count: number;
    ents: any;
    inst: any;
    lifetime: number;
    max_team_size: number;
    maxchasetime: number;
    maxteam: number;
    min_team_size: number;
    oldestteam: number;
    pt: any;
    radius: number;
    reverse: boolean;
    searchradius: number;
    sort: any;
    steps: any;
    successfulorders: number;
    target: any;
    team: any;
    team_type: string;
    teamattacker: any;
    teamcount: number;
    teams: any;
    temp: any;
    theta: number;
    thetaincrement: number;
    threat: any;
    timebetweenattacks: number;
    updatedPos: any;
    validMembers: number;
    x: any;
    y: any;
    z: any;
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
    angle: any;
    enabled: boolean;
    inst: any;
    numteleporting: number;
    offset: number;
    onActivate: any;
    onActivateByOther: any;
    pt: any;
    saveenabled: boolean;
    targEnt: any;
    targetTeleporter: any;
    target_x: any;
    target_y: any;
    target_z: any;
    teleportees: any;
    travelarrivetime: number;
    travelcameratime: number;
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
    ambient_temperature: any;
    bellytask: any;
    bellytemperaturedelta: any;
    bellytime: any;
    current: any;
    delta: number;
    ents: any;
    externalheaterpower: number;
    hurtrate: any;
    ignoreheatertags: any;
    inherentinsulation: number;
    inherentsummerinsulation: number;
    inst: any;
    last: any;
    m: any;
    maxmoisturepenalty: any;
    maxtemp: any;
    mintemp: any;
    overflow: any;
    overheathurtrate: any;
    overheattemp: any;
    owner: any;
    rate: number;
    settemp: any;
    sheltered: boolean;
    shelterinsulation: any;
    summerInsulation: any;
    temperature_modifiers: any;
    totalmodifiers: number;
    usespawnlight: any;
    winterInsulation: any;
    world_temp: any;
    x: any;
    y: any;
    z: any;
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
    angle: any;
    inst: any;
    loot: any;
    map: any;
    original_tile_type: any;
    world: any;
    x: any;
    y: any;
    Terraform(pt: any, spawnturf: any): any;
  }

  interface Thief {
    direction: any;
    inst: any;
    item: any;
    onstolen: any;
    stolenitems: any;
    SetOnStolenFn(fn: any): any;
    StealItem(victim: any, itemtosteal: any, attack: any): any;
  }

  interface Timer {
    data: any;
    inst: any;
    str: string;
    timers: any;
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
    actions: any;
    inst: any;
    CanDoAction(action: any): boolean;
    GetEffectiveness(action: any): any;
    OnRemoveFromEntity(): any;
    SetAction(action: any, effectiveness: any): any;
  }

  interface TouchStoneTracker {
    data: any;
    inst: any;
    str: string;
    used: any;
    used_foreign: any;
    GetDebugString(): any;
    IsUsed(touchstone: any): boolean;
    OnLoad(data: any): any;
    OnRemoveFromEntity(): any;
    OnSave(): any;
  }

  interface Tradable {
    goldvalue: number;
    inst: any;
  }

  interface Trader {
    abletoaccepttest: any;
    acceptnontradable: boolean;
    act: any;
    deleteitemonaccept: boolean;
    enabled: boolean;
    inst: any;
    test: any;
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
    c_data: any;
    data: any;
    inst: any;
    objectData: any;
    onLoadCheck: any;
    onRevert: any;
    onTransform: any;
    p_data: any;
    queuedRevert: boolean;
    queuedTransform: boolean;
    refs: any;
    revertEvent: any;
    revertEventTarget: any;
    sleepRevertEvent: any;
    sleepTransformEvent: any;
    tar: any;
    transformEvent: any;
    transformEventTarget: any;
    transformOffScreen: boolean;
    transformPrefab: string;
    transformed: boolean;
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
    alpha: number;
    inst: any;
    most_alpha: number;
    offset: any;
    osc_amp: number;
    osc_speed: any;
    player: any;
    target_alpha: number;
    OnUpdate(dt: any): any;
  }

  interface Trap {
    bait: any;
    checkperiod: number;
    ents: any;
    guy: any;
    inst: any;
    inventory: any;
    ismole: any;
    isset: boolean;
    issprung: boolean;
    lootprefabs: any;
    numsouls: any;
    onbaited: any;
    onharvest: any;
    onspring: any;
    perishTime: any;
    pos: any;
    range: number;
    souls: any;
    starvedlootprefabs: any;
    starvednumsouls: any;
    str: any;
    target: any;
    targettag: string;
    task: any;
    timeintrap: any;
    trap: any;
    x: any;
    y: any;
    z: any;
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
    currenttributevalue: number;
    data: any;
    decaycurrenttributetime: number;
    decaytask: any;
    inst: any;
    numrewardsgiven: number;
    rewardattributevalue: number;
    timegiventribute: any;
    GetDebugString(): any;
    HasPendingReward(): boolean;
    OnAccept(value: any, tributer: any): any;
    OnGivenReward(): any;
    OnLoad(data: any): any;
    OnRefuse(): any;
    OnSave(): any;
  }

  interface UIAnim {
    a: any;
    b: any;
    done: boolean;
    g: any;
    inst: any;
    pos_dest: any;
    pos_duration: any;
    pos_start: any;
    pos_t: number;
    pos_whendone: any;
    pos_whendonefn: any;
    r: any;
    rot: any;
    rot_dest: any;
    rot_duration: any;
    rot_infinite: boolean;
    rot_start: any;
    rot_t: number;
    rot_whendone: any;
    rot_whendonefn: any;
    scale_dest: any;
    scale_duration: any;
    scale_start: any;
    scale_t: number;
    scale_whendone: any;
    sx: any;
    sy: any;
    sz: any;
    tint_dest: any;
    tint_duration: any;
    tint_start: any;
    tint_t: number;
    tint_whendone: any;
    val: number;
    valx: any;
    valy: any;
    valz: any;
    whendone: any;
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
    detectperiod: number;
    detectradius: number;
    detecttask: any;
    enabled: boolean;
    inst: any;
    radius: number;
    Disable(): any;
    Enable(): any;
    OnEntityWake(): any;
    Start(): any;
    Stop(): any;
  }

  interface UniqueID {
    id: any;
    inst: any;
    task: any;
    GetDebugString(): any;
    OnLoad(data: any): any;
    OnSave(): any;
  }

  interface UniquePrefabIDs {
    inst: any;
    s: string;
    topprefabids: any;
    GetDebugString(): any;
    GetNextID(prefabname: any): any;
    OnLoad(data: any): any;
    OnSave(): any;
  }

  interface Unsaddler {}

  interface Unwrappable {
    canbeunwrapped: boolean;
    creator: any;
    doerpos: any;
    inst: any;
    itemdata: any;
    offset: any;
    onunwrappedfn: any;
    onwrappedfn: any;
    origin: any;
    pos: any;
    OnLoad(data: any): any;
    OnSave(): any;
    SetOnUnwrappedFn(fn: any): any;
    SetOnWrappedFn(fn: any): any;
    Unwrap(doer: any): any;
    WrapItems(items: any, doer: any): any;
  }

  interface UpdateLooper {
    inst: any;
    longupdatefns: any;
    onupdatefns: any;
    AddLongUpdateFn(fn: any): any;
    AddOnUpdateFn(fn: any): any;
    LongUpdate(dt: any): any;
    OnRemoveFromEntity(): any;
    OnUpdate(dt: any): any;
    RemoveLongUpdateFn(fn: any): any;
    RemoveOnUpdateFn(fn: any): any;
  }

  interface Upgradeable {
    data: any;
    inst: any;
    numstages: number;
    numupgrades: number;
    onstageadvancefn: any;
    onupgradefn: any;
    stage: number;
    upgradesperstage: number;
    upgradetype: any;
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
    inuse: boolean;
    onstopusefn: any;
    onusefn: any;
    stopuseevents: any;
    CanInteract(): boolean;
    OnRemoveFromEntity(): any;
    SetOnStopUseFn(fn: any): any;
    SetOnUseFn(fn: any): any;
    StartUsingItem(): any;
    StopUsingItem(): any;
  }

  interface Vase {
    deleteitemonaccept: boolean;
    enabled: boolean;
    inst: any;
    Decorate(giver: any, item: any): any;
    Disable(): any;
    Enable(): any;
    GetDebugString(): any;
    OnRemoveFromEntity(): any;
  }

  interface VaseDecoration {}

  interface WalkablePlatform {
    bias: number;
    delta_position_x: any;
    delta_position_z: any;
    embark_distance_from_edge: number;
    embark_x: any;
    embark_z: any;
    embarkable_radius: any;
    embarkable_x: any;
    embarkable_y: any;
    embarkable_z: any;
    entities: any;
    filtered_entities: any;
    inst: any;
    is_master_sim: any;
    my_x: any;
    my_y: any;
    my_z: any;
    new_objects_on_platform: any;
    platform_radius: number;
    platform_radius_sq: any;
    platform_x: any;
    platform_z: any;
    player_zoom_task: any;
    player_zoomed_out: boolean;
    player_zooms: any;
    previous_objects_on_platform: any;
    previous_position_x: any;
    previous_position_y: any;
    previous_position_z: any;
    should_update_pos: any;
    world_position_x: any;
    world_position_y: any;
    world_position_z: any;
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
    doer: any;
    inst: any;
    AbandonShip(doer: any): any;
    Extend(): any;
    MountPlank(doer: any): any;
    OnRemoveFromEntity(): any;
    Retract(): any;
    StopMounting(): any;
  }

  interface WalkingPlankUser {
    current_plank: any;
    inst: any;
    Dismount(): any;
    SetCurrentPlank(plank: any): any;
  }

  interface Wardrobe {
    canbedressed: any;
    canbeshared: any;
    canuseaction: boolean;
    changeindelay: number;
    changers: any;
    enabled: boolean;
    inst: any;
    onchangeinfn: any;
    onclosefn: any;
    onclosewardrobe: any;
    ondressupfn: any;
    onopenfn: any;
    range: number;
    toend: any;
    wasclosed: any;
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
    effectiveness: number;
    inst: any;
    GetEffectiveness(): any;
    OnRemoveFromEntity(): any;
    SetEffectiveness(val: any): any;
  }

  interface WateryProtection {
    addcoldness: number;
    addwetness: number;
    ents: any;
    extinguish: boolean;
    extinguishheatpercent: number;
    ignoretags: any;
    inst: any;
    temperaturereduction: number;
    witherprotectiontime: number;
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
    camera_per_sec_mod: number;
    col_radius: any;
    inst: any;
    map: any;
    mult: any;
    ocean: any;
    player: any;
    px: any;
    py: any;
    pz: any;
    radius: any;
    ripple_idle_time: number;
    ripple_per_sec: number;
    ripple_per_sec_mod: number;
    ripple_spawn_rate: number;
    ripple_speed: number;
    row_radius: any;
    shimmer: any;
    shimmer_per_sec_mod: number;
    world: any;
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
    attackrange: any;
    damage: number;
    hitrange: any;
    inst: any;
    onattack: any;
    onprojectilelaunch: any;
    overridestimulifn: any;
    proj: any;
    projectile: any;
    stimuli: string;
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
    onsetnormalfn: any;
    onsetwerefn: any;
    remaining: any;
    triggeramount: any;
    triggerlimit: any;
    weretime: any;
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
    foodbuffname: any;
    foodbuffpriority: any;
    inlight: boolean;
    inst: any;
    is_talker_busy: boolean;
    nightvision: any;
    soultoofew_time: number;
    soultoomany_time: number;
    time_in_lightstate: number;
    OnUpdate(dt: any): any;
  }

  interface Witherable {
    data: any;
    delay_to_time: any;
    enabled: boolean;
    inst: any;
    is_watching_rain: any;
    protect_task: any;
    protect_to_time: any;
    rejuvenate_temp: any;
    restore_cycles: any;
    s: any;
    t: any;
    task: any;
    task_to_time: any;
    wither_temp: any;
    withered: boolean;
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
    action: any;
    inst: any;
    isplant: any;
    lastworktime: any;
    maxwork: any;
    onfinish: any;
    onloadfn: any;
    onwork: any;
    pos: any;
    savestate: boolean;
    workable: boolean;
    workleft: number;
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
    actions: any;
    inst: any;
    CanDoAction(action: any): boolean;
    GetEffectiveness(action: any): any;
    SetAction(action: any, effectiveness: any): any;
  }

  interface WorkMultiplier {
    actions: any;
    inst: any;
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
    auto: boolean;
    enabled: boolean;
    id: any;
    inst: any;
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
    age: any;
    clanid: any;
    client_table: any;
    clients: any;
    current_players: any;
    current_skins: any;
    data: any;
    found: any;
    heartbeat_poll_counter: number;
    hosting: any;
    initial_clothing: any;
    inst: any;
    item: any;
    items: any;
    jsonstats: any;
    last_heartbeat_poll_time: any;
    playerstats: any;
    results: any;
    resumed_from_suspend: any;
    secondsplayed: number;
    sendstats: any;
    time: any;
    time_now: any;
    toRemove: any;
    toremove: boolean;
    total_crafted_items: any;
    total_worn_items: any;
    totaltime: number;
    worldAge: any;
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
    angle: any;
    inst: any;
    timeToWindChange: number;
    velocity: number;
    GetDebugString(): any;
    GetWindAngle(): any;
    GetWindVelocity(): any;
    OnUpdate(dt: any): any;
    Start(): any;
    Stop(): any;
  }

  interface Writeable {
    ClientObjs: any;
    data: any;
    generatorfn: any;
    getspecialdescription: any;
    inst: any;
    netid: any;
    onclosepopups: any;
    screen: any;
    text: any;
    writer: any;
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
