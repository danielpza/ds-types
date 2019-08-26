export interface Input {
  mouse_enabled: any;
  controllerid_cached: any;
  devices: any;
  hoverinst: any;
  hovervalid: boolean;
  x: any;
  y: any;
  z: any;
  enabledebugtoggle: any;
  entitiesundermouse: any;
  inst: any;
  mousethrough: any;
  keepnone: any;
  device: any;
  numInputs: any;
  input1: any;
  input2: any;
  input3: any;
  input4: any;
  intParam: any;
  inputs: any;
  text: any;
  localized: any;
  stringtable: any;
  DisableAllControllers(): any;
  EnableAllControllers(): any;
  IsControllerLoggedIn(controller: any): boolean;
  LogUserAsync(controller: any, cb: any): any;
  LogSecondaryUserAsync(controller: any, cb: any): any;
  EnableMouse(enable: any): any;
  ClearCachedController(): any;
  CacheController(): any;
  TryRecacheController(): any;
  GetControllerID(): any;
  ControllerAttached(): any;
  ControllerConnected(): any;
  GetInputDevices(): any;
  AddTextInputHandler(fn: any): any;
  AddKeyUpHandler(key: any, fn: any): any;
  AddKeyDownHandler(key: any, fn: any): any;
  AddKeyHandler(fn: any): any;
  AddMouseButtonHandler(fn: any): any;
  AddMoveHandler(fn: any): any;
  AddControlHandler(control: any, fn: any): any;
  AddGeneralControlHandler(fn: any): any;
  AddControlMappingHandler(fn: any): any;
  AddGestureHandler(gesture: any, fn: any): any;
  UpdatePosition(x: any, y: any): any;
  OnControl(control: any, digitalvalue: any, analogvalue: any): any;
  OnMouseMove(x: any, y: any): any;
  OnMouseButton(button: any, down: any, x: any, y: any): any;
  OnRawKey(key: any, down: any): any;
  OnText(text: any): any;
  OnGesture(gesture: any): any;
  OnControlMapped(
    deviceId: any,
    controlId: any,
    inputId: any,
    hasChanged: any
  ): any;
  OnFrameStart(): any;
  GetScreenPosition(): any;
  GetWorldPosition(): any;
  GetAllEntitiesUnderMouse(): any;
  GetWorldEntityUnderMouse(): any;
  EnableDebugToggle(enable: any): any;
  IsDebugToggleEnabled(): boolean;
  GetHUDEntityUnderMouse(): any;
  IsMouseDown(button: any): boolean;
  IsKeyDown(key: any): boolean;
  IsControlPressed(control: any): boolean;
  GetAnalogControlValue(control: any): any;
  IsPasteKey(key: any): boolean;
  UpdateEntitiesUnderMouse(): any;
  OnUpdate(): any;
  GetLocalizedControl(
    deviceId: any,
    controlId: any,
    use_default_mapping: any,
    use_control_mapper: any
  ): any;
  GetControlIsMouseWheel(controlId: any): any;
  GetStringIsButtonImage(str: any): any;
  PlatformUsesVirtualKeyboard(): any;
}
