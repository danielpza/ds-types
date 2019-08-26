export interface Entity {
  record: any;
  x: any;
  y: any;
  z: any;
  references: any;
  inlimbo: boolean;
  inherentactions: any;
  updatecomponents: any;
  cmpname: any;
  num: number;
  wallupdatecomponents: any;
  lower_name: any;
  cmp: any;
  loadedcmp: any;
  postinitfns: any;
  name: any;
  equippable: any;
  eslot: any;
  name_extention: any;
  replica: any;
  skin_build_name: any;
  prefab: any;
  nameoverride: any;
  deploy_extra_spacing: any;
  terraform_extra_spacing: any;
  ground_target_blocker_radius: any;
  inst: any;
  children: any;
  str: any;
  cmpkeys: any;
  fn: any;
  brain: any;
  brainfn: any;
  sg: any;
  event_listening: any;
  event_listeners: any;
  worldstatewatching: any;
  listeners: any;
  tocall: any;
  physicsradiusoverride: any;
  x1: any;
  y1: any;
  z1: any;
  p1: any;
  p2: any;
  offset: any;
  p1x: any;
  p1y: any;
  p1z: any;
  p2x: any;
  p2y: any;
  p2z: any;
  player: any;
  distsq: any;
  pendingtasks: any;
  per: any;
  taskinfo: any;
  timeleft: any;
  task: any;
  bufferedaction: any;
  ispreviewing: boolean;
  success: any;
  reason: any;
  persists: boolean;
  parent: any;
  inventory: any;
  item: any;
  platform: any;
  map: any;
  ptx: any;
  pty: any;
  ptz: any;
  tilecenter_x: any;
  tilecenter_y: any;
  tilecenter_z: any;
  tx: any;
  ty: any;
  actual_tile: any;
  xpercent: any;
  ypercent: any;
  x_min: any;
  x_max: any;
  y_min: any;
  y_max: any;
  x_off: number;
  y_off: number;
  dest: any;
  data: any;
  refs: any;
  inherentsceneaction: any;
  inherentscenealtaction: any;
  GetSaveRecord(): any;
  Hide(): any;
  Show(): any;
  IsInLimbo(): boolean;
  RemoveFromScene(): any;
  ReturnToScene(): any;
  AddInherentAction(act: any): any;
  RemoveInherentAction(act: any): any;
  GetTimeAlive(): any;
  StartUpdatingComponent(cmp: any): any;
  StopUpdatingComponent(cmp: any): any;
  StopUpdatingComponent_Deferred(cmp: any): any;
  StartWallUpdatingComponent(cmp: any): any;
  StopWallUpdatingComponent(cmp: any): any;
  GetComponentName(cmp: any): any;
  AddTag(tag: any): any;
  RemoveTag(tag: any): any;
  HasTag(tag: any): boolean;
  AddComponent(name: any): any;
  RemoveComponent(name: any): any;
  GetBasicDisplayName(): any;
  GetAdjectivedName(): any;
  GetDisplayName(): any;
  GetIsWet(): any;
  GetSkinBuild(): any;
  GetSkinName(): any;
  SetPrefabName(name: any): any;
  SetPrefabNameOverride(nameoverride: any): any;
  SetDeployExtraSpacing(spacing: any): any;
  SetTerraformExtraSpacing(spacing: any): any;
  SetGroundTargetBlockerRadius(radius: any): any;
  SpawnChild(name: any): any;
  RemoveChild(child: any): any;
  AddChild(child: any): any;
  GetBrainString(): any;
  GetDebugString(): any;
  KillTasks(): any;
  StartThread(fn: any): any;
  RunScript(name: any): any;
  RestartBrain(): any;
  StopBrain(): any;
  SetBrain(brainfn: any): any;
  SetStateGraph(name: any): any;
  ClearStateGraph(): any;
  ListenForEvent(event: any, fn: any, source: any): any;
  RemoveEventCallback(event: any, fn: any, source: any): any;
  RemoveAllEventCallbacks(): any;
  WatchWorldState(_var: any, fn: any): any;
  StopWatchingWorldState(_var: any, fn: any): any;
  StopAllWatchingWorldStates(): any;
  PushEvent(event: any, data: any): any;
  SetPhysicsRadiusOverride(radius: any): any;
  GetPhysicsRadius(_default: any): any;
  GetPosition(): any;
  GetRotation(): any;
  GetAngleToPoint(x: any, y: any, z: any): any;
  GetPositionAdjacentTo(target: any, distance: any): any;
  ForceFacePoint(x: any, y: any, z: any): any;
  FacePoint(x: any, y: any, z: any): any;
  GetDistanceSqToInst(inst: any): any;
  IsNear(otherinst: any, dist: any): boolean;
  GetDistanceSqToPoint(x: any, y: any, z: any): any;
  IsNearPlayer(range: any, isalive: any): boolean;
  GetNearestPlayer(isalive: any): any;
  GetDistanceSqToClosestPlayer(isalive: any): any;
  FaceAwayFromPoint(dest: any, force: any): any;
  IsAsleep(): boolean;
  CancelAllPendingTasks(): any;
  DoPeriodicTask(time: any, fn: any, initialdelay: any): any;
  DoTaskInTime(time: any, fn: any): any;
  GetTaskInfo(time: any): any;
  TimeRemainingInTask(taskinfo: any): any;
  ResumeTask(time: any, fn: any): any;
  ClearBufferedAction(): any;
  PreviewBufferedAction(bufferedaction: any): any;
  PerformPreviewBufferedAction(): any;
  PushBufferedAction(bufferedaction: any): any;
  PerformBufferedAction(): any;
  GetBufferedAction(): any;
  OnBuilt(builder: any): any;
  Remove(): any;
  IsValid(): boolean;
  CanInteractWith(inst: any): boolean;
  OnUsedAsItem(action: any): any;
  CanDoAction(action: any): boolean;
  IsOnValidGround(): boolean;
  IsOnPassablePoint(
    include_water: any,
    floating_platforms_are_not_passable: any
  ): boolean;
  GetCurrentPlatform(): any;
  GetCurrentTileType(): any;
  PutBackOnGround(): any;
  GetPersistData(): any;
  LoadPostPass(newents: any, savedata: any): any;
  SetPersistData(data: any, newents: any): any;
  GetAdjective(): any;
  SetInherentSceneAction(action: any): any;
  SetInherentSceneAltAction(action: any): any;
  LongUpdate(dt: any): any;
}
