export interface FrontEnd {
  save_indicator_time_left: number;
  save_indicator_fade_time: any;
  save_indicator_fade: string;
  num_pending_saves: any;
  topFadeHidden: boolean;
  widgs: any;
  nextWidget: any;
  t: any;
  widget: any;
  active_screen: any;
  str: any;
  intermediate_widgets: any;
  tracking_mouse: boolean;
  screen: any;
  fade_title_time: number;
  fade_title_alpha: any;
  fade_title_in: boolean;
  fade_title_out: boolean;
  focus_locked: boolean;
  alpha: number;
  progress: number;
  phase_1: number;
  fade_progress: any;
  fade_delay_time: any;
  delayovercb: any;
  fade_time: number;
  fadedir: any;
  cb: any;
  fadecb: any;
  consolestr: any;
  spinner_repeat_time: any;
  scroll_repeat_time: any;
  repeat_time: number;
  updating_widgets_alt: any;
  entitiesundermouse: any;
  hover_inst: any;
  total_fade_time: any;
  fade_type: any;
  old_head: any;
  textProcessorWidget: any;
  forceProcessText: boolean;
  size: any;
  min_scale: number;
  max_scale: number;
  w: any;
  h: any;
  res_scale_x: any;
  res_scale_y: any;
  res_scale: any;
  lastx: any;
  lasty: any;
  cancel_cb: any;
  popup: any;
  text: any;
  offline: any;
  ShowSavingIndicator(): any;
  HideSavingIndicator(): any;
  HideTopFade(): any;
  ShowTopFade(): any;
  GetFocusWidget(): any;
  GetIntermediateFocusWidgets(): any;
  GetHelpText(): any;
  StopTrackingMouse(autofocus: any): any;
  IsControlsDisabled(): boolean;
  OnFocusMove(dir: any, down: any): any;
  OnControl(control: any, down: any): any;
  ShowTitle(text: any, subtext: any): any;
  DoTitleFade(dt: any): any;
  StartTileFadeIn(): any;
  StartTileFadeOut(): any;
  HideTitle(): any;
  LockFocus(lock: any): any;
  SendScreenEvent(type: any, message: any): any;
  GetSound(): any;
  GetGraphicsOptions(): any;
  GetTwitchOptions(): any;
  GetAccountManager(): any;
  SetFadeLevel(alpha: any, time: any, time_total: any): any;
  GetFadeLevel(): any;
  DoFadingUpdate(dt: any): any;
  UpdateConsoleOutput(): any;
  Update(dt: any): any;
  DoHoverFocusUpdate(manual_update: any): any;
  StartUpdatingWidget(w: any): any;
  StopUpdatingWidget(w: any): any;
  InsertScreenUnderTop(screen: any): any;
  PushScreen(screen: any): any;
  ClearScreens(): any;
  ShowConsoleLog(): any;
  HideConsoleLog(): any;
  DoFadeIn(time_to_take: any): any;
  Fade(
    in_or_out: any,
    time_to_take: any,
    cb: any,
    fade_delay_time: any,
    delayovercb: any,
    fadeType: any
  ): any;
  FadeToScreen(
    existing_screen: any,
    new_screen_fn: any,
    fade_complete_cp: any,
    fade_type: any
  ): any;
  FadeBack(
    fade_complete_cb: any,
    fade_type: any,
    fade_out_complete_cb: any
  ): any;
  PopScreen(screen: any): any;
  ClearFocus(): any;
  GetActiveScreen(): any;
  GetOpenScreenOfType(screenname: any): any;
  GetScreenStackSize(): any;
  ShowScreen(screen: any): any;
  SetForceProcessTextInput(takeText: any, widget: any): any;
  OnRawKey(key: any, down: any): any;
  OnTextInput(text: any): any;
  GetHUDScale(): any;
  OnMouseButton(button: any, down: any, x: any, y: any): any;
  OnMouseMove(x: any, y: any): any;
  OnSaveLoadError(operation: any, filename: any, status: any): any;
  IsScreenInStack(screen: any): boolean;
  SetOfflineMode(isOffline: any): any;
  GetIsOfflineMode(): any;
  EnableWidgetDebugging(): any;
  EnableEntityDebugging(): any;
  SetWidgetDebuggingTarget(widget: any): any;
}
