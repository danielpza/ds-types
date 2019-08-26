export interface FrontEnd {
  active_screen: any;
  alpha: number;
  cancel_cb: any;
  cb: any;
  consolestr: any;
  delayovercb: any;
  entitiesundermouse: any;
  fade_delay_time: any;
  fade_progress: any;
  fade_time: number;
  fade_title_alpha: any;
  fade_title_in: boolean;
  fade_title_out: boolean;
  fade_title_time: number;
  fade_type: any;
  fadecb: any;
  fadedir: any;
  focus_locked: boolean;
  forceProcessText: boolean;
  h: any;
  hover_inst: any;
  intermediate_widgets: any;
  lastx: any;
  lasty: any;
  max_scale: number;
  min_scale: number;
  nextWidget: any;
  num_pending_saves: any;
  offline: any;
  old_head: any;
  phase_1: number;
  popup: any;
  progress: number;
  repeat_time: number;
  res_scale: any;
  res_scale_x: any;
  res_scale_y: any;
  save_indicator_fade: string;
  save_indicator_fade_time: any;
  save_indicator_time_left: number;
  screen: any;
  scroll_repeat_time: any;
  size: any;
  spinner_repeat_time: any;
  str: any;
  t: any;
  text: any;
  textProcessorWidget: any;
  topFadeHidden: boolean;
  total_fade_time: any;
  tracking_mouse: boolean;
  updating_widgets_alt: any;
  w: any;
  widget: any;
  widgs: any;
  ClearFocus(): any;
  ClearScreens(): any;
  DoFadeIn(time_to_take: any): any;
  DoFadingUpdate(dt: any): any;
  DoHoverFocusUpdate(manual_update: any): any;
  DoTitleFade(dt: any): any;
  EnableEntityDebugging(): any;
  EnableWidgetDebugging(): any;
  Fade(
    in_or_out: any,
    time_to_take: any,
    cb: any,
    fade_delay_time: any,
    delayovercb: any,
    fadeType: any
  ): any;
  FadeBack(
    fade_complete_cb: any,
    fade_type: any,
    fade_out_complete_cb: any
  ): any;
  FadeToScreen(
    existing_screen: any,
    new_screen_fn: any,
    fade_complete_cp: any,
    fade_type: any
  ): any;
  GetAccountManager(): any;
  GetActiveScreen(): any;
  GetFadeLevel(): any;
  GetFocusWidget(): any;
  GetGraphicsOptions(): any;
  GetHUDScale(): any;
  GetHelpText(): any;
  GetIntermediateFocusWidgets(): any;
  GetIsOfflineMode(): any;
  GetOpenScreenOfType(screenname: any): any;
  GetScreenStackSize(): any;
  GetSound(): any;
  GetTwitchOptions(): any;
  HideConsoleLog(): any;
  HideSavingIndicator(): any;
  HideTitle(): any;
  HideTopFade(): any;
  InsertScreenUnderTop(screen: any): any;
  IsControlsDisabled(): boolean;
  IsScreenInStack(screen: any): boolean;
  LockFocus(lock: any): any;
  OnControl(control: any, down: any): any;
  OnFocusMove(dir: any, down: any): any;
  OnMouseButton(button: any, down: any, x: any, y: any): any;
  OnMouseMove(x: any, y: any): any;
  OnRawKey(key: any, down: any): any;
  OnSaveLoadError(operation: any, filename: any, status: any): any;
  OnTextInput(text: any): any;
  PopScreen(screen: any): any;
  PushScreen(screen: any): any;
  SendScreenEvent(type: any, message: any): any;
  SetFadeLevel(alpha: any, time: any, time_total: any): any;
  SetForceProcessTextInput(takeText: any, widget: any): any;
  SetOfflineMode(isOffline: any): any;
  SetWidgetDebuggingTarget(widget: any): any;
  ShowConsoleLog(): any;
  ShowSavingIndicator(): any;
  ShowScreen(screen: any): any;
  ShowTitle(text: any, subtext: any): any;
  ShowTopFade(): any;
  StartTileFadeIn(): any;
  StartTileFadeOut(): any;
  StartUpdatingWidget(w: any): any;
  StopTrackingMouse(autofocus: any): any;
  StopUpdatingWidget(w: any): any;
  Update(dt: any): any;
  UpdateConsoleOutput(): any;
}
