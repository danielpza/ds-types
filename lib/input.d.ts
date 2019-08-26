export interface Input {
  controllerid_cached: any;
  device: any;
  devices: any;
  enabledebugtoggle: any;
  entitiesundermouse: any;
  hoverinst: any;
  hovervalid: boolean;
  input1: any;
  input2: any;
  input3: any;
  input4: any;
  inputs: any;
  inst: any;
  intParam: any;
  keepnone: any;
  localized: any;
  mouse_enabled: any;
  mousethrough: any;
  numInputs: any;
  stringtable: any;
  text: any;
  x: any;
  y: any;
  z: any;
  AddControlHandler(control: any, fn: any): any;
  AddControlMappingHandler(fn: any): any;
  AddGeneralControlHandler(fn: any): any;
  AddGestureHandler(gesture: any, fn: any): any;
  AddKeyDownHandler(key: any, fn: any): any;
  AddKeyHandler(fn: any): any;
  AddKeyUpHandler(key: any, fn: any): any;
  AddMouseButtonHandler(fn: any): any;
  AddMoveHandler(fn: any): any;
  AddTextInputHandler(fn: any): any;
  CacheController(): any;
  ClearCachedController(): any;
  ControllerAttached(): any;
  ControllerConnected(): any;
  DisableAllControllers(): any;
  EnableAllControllers(): any;
  EnableDebugToggle(enable: any): any;
  EnableMouse(enable: any): any;
  GetAllEntitiesUnderMouse(): any;
  GetAnalogControlValue(control: any): any;
  GetControlIsMouseWheel(controlId: any): any;
  GetControllerID(): any;
  GetHUDEntityUnderMouse(): any;
  GetInputDevices(): any;
  GetLocalizedControl(
    deviceId: any,
    controlId: any,
    use_default_mapping: any,
    use_control_mapper: any
  ): any;
  GetScreenPosition(): any;
  GetStringIsButtonImage(str: any): any;
  GetWorldEntityUnderMouse(): any;
  GetWorldPosition(): any;
  IsControlPressed(control: any): boolean;
  IsControllerLoggedIn(controller: any): boolean;
  IsDebugToggleEnabled(): boolean;
  IsKeyDown(key: any): boolean;
  IsMouseDown(button: any): boolean;
  IsPasteKey(key: any): boolean;
  LogSecondaryUserAsync(controller: any, cb: any): any;
  LogUserAsync(controller: any, cb: any): any;
  OnControl(control: any, digitalvalue: any, analogvalue: any): any;
  OnControlMapped(
    deviceId: any,
    controlId: any,
    inputId: any,
    hasChanged: any
  ): any;
  OnFrameStart(): any;
  OnGesture(gesture: any): any;
  OnMouseButton(button: any, down: any, x: any, y: any): any;
  OnMouseMove(x: any, y: any): any;
  OnRawKey(key: any, down: any): any;
  OnText(text: any): any;
  OnUpdate(): any;
  PlatformUsesVirtualKeyboard(): any;
  TryRecacheController(): any;
  UpdateEntitiesUnderMouse(): any;
  UpdatePosition(x: any, y: any): any;
}
