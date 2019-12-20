declare module "widgets/animbutton" {
  interface AnimButton {
    Disable(): any;
    Enable(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
  }
  function AnimButton(...params: any[]): AnimButton;
  export = AnimButton;
}
declare module "widgets/animspinner" {
  interface AnimSpinner {
    anim: any;
    arrow_scale: any;
    bank: any;
    build: any;
    newSelection: any;
    new_anim: any;
    new_indicator: any;
    oldSelection: any;
    old_symbol: any;
    selectedIndex: any;
    selected_colour: any;
    selected_text: any;
    skin: any;
    symbol: any;
    updating: boolean;
    GetSelectedSymbol(): any;
    GoToEnd(): any;
    Next(noclicksound: any): any;
    Prev(noclicksound: any): any;
    SetAnim(
      build: any,
      bank: any,
      anim: any,
      old_symbol: any,
      skin: any,
      new_anim: any
    ): any;
    SetArrowScale(scale: any): any;
    SetSelectedIndex(idx: any): any;
  }
  function AnimSpinner(...params: any[]): AnimSpinner;
  export = AnimSpinner;
}
declare module "widgets/announcementwidget" {
  interface AnnouncementWidget {
    alpha_fade: any;
    announce_type: any;
    announcement: any;
    colour: any;
    current_colour: any;
    fadetime: any;
    font: any;
    icon_info: any;
    lifetime: any;
    size: any;
    time_past_expiring: any;
    w: any;
    ClearText(): any;
    CopyInfo(announcement_info: any): any;
    GetAlpha(): any;
    GetText(): any;
    OnUpdate(dt: any): any;
    SetAlpha(alpha: any): any;
    SetAnnouncement(
      announcement: any,
      announce_type: any,
      colour: any,
      lifetime: any,
      fadetime: any
    ): any;
    SetFont(font: any): any;
    SetIcon(announce_type: any): any;
    SetSize(size: any): any;
    SetText(string: any): any;
    SetTextColour(r: any, g: any, b: any, a: any): any;
    UpdateIconPosition(): any;
  }
  function AnnouncementWidget(...params: any[]): AnnouncementWidget;
  export = AnnouncementWidget;
}
declare module "widgets/badge" {
  interface Badge {
    percent: any;
    warningdelaytask: any;
    warningstarted: boolean;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    PulseGreen(): any;
    PulseRed(): any;
    SetPercent(val: any, max: any): any;
    StartWarning(r: any, g: any, b: any, a: any): any;
    StopWarning(): any;
  }
  function Badge(...params: any[]): Badge;
  export = Badge;
}
declare module "widgets/playerdetailspopup" {
  interface PlayerDetailsPopup {
    controller_id: any;
    t: any;
    GetHelpText(): any;
    OnControl(control: any, down: any): any;
  }
  function PlayerDetailsPopup(...params: any[]): PlayerDetailsPopup;
  export = PlayerDetailsPopup;
}
declare module "widgets/bantab" {
  interface BanTab {
    allEmpties: boolean;
    ban_page_row_root: any;
    ban_page_scroll_root: any;
    banned_player_widgets: any;
    clear_button: any;
    controller_id: any;
    entry: any;
    list: any;
    name: any;
    player_list_rows: any;
    player_scroll_list: any;
    popup: any;
    t: any;
    tocreate: any;
    ClearPlayers(): any;
    DeletePlayer(selected_player: any): any;
    GetHelpText(): any;
    MakeMenuButtons(): any;
    MakePlayerList(): any;
    MakePlayerPanel(): any;
    OnControl(control: any, down: any): any;
    PromptDeletePlayer(selected_player: any): any;
    RefreshPlayers(): any;
    ShowNetProfile(selected_player: any): any;
    ShowPlayerDetails(selected_player: any): any;
  }
  function BanTab(...params: any[]): BanTab;
  export = BanTab;
}
declare module "widgets/batover" {
  interface BatOver {
    scale: any;
    scrnh: any;
    scrnw: any;
    sounddelay: number;
    soundlevel: number;
    volume: any;
    OnUpdate(dt: any): any;
    TriggerBats(): any;
    UpdateScale(): any;
  }
  function BatOver(...params: any[]): BatOver;
  export = BatOver;
}
declare module "widgets/beaverbadge" {
  interface BeaverBadge {
    anim: any;
    arrowdir: any;
    val: any;
    SetPercent(val: any, max: any): any;
    UpdateArrow(): any;
  }
  function BeaverBadge(...params: any[]): BeaverBadge;
  export = BeaverBadge;
}
declare module "widgets/beefbloodover" {
  interface BeefBloodOver {
    base_level: number;
    delta: any;
    k: number;
    level: number;
    rider: any;
    time_since_pulse: number;
    Flash(): any;
    OnUpdate(dt: any): any;
    TurnOff(): any;
    TurnOn(): any;
    UpdateState(): any;
  }
  function BeefBloodOver(...params: any[]): BeefBloodOver;
  export = BeefBloodOver;
}
declare module "widgets/bloodover" {
  interface BloodOver {
    base_level: number;
    delta: any;
    k: number;
    level: number;
    time_since_pulse: number;
    Flash(): any;
    OnUpdate(dt: any): any;
    TurnOff(): any;
    TurnOn(): any;
    UpdateState(): any;
  }
  function BloodOver(...params: any[]): BloodOver;
  export = BloodOver;
}
declare module "widgets/boatmeter" {
  interface BoatMeter {
    boat: any;
    is_leaking: any;
    new_health_percent: any;
    pct: any;
    previous_health_percent: any;
    pulsetask: any;
    Disable(platform: any): any;
    Enable(platform: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnUpdate(dt: any): any;
    PulseRed(): any;
    RefreshHealth(): any;
    UpdateLeak(): any;
  }
  function BoatMeter(...params: any[]): BoatMeter;
  export = BoatMeter;
}
declare module "widgets/button" {
  interface Button {
    control: any;
    controller_id: any;
    down: boolean;
    font: any;
    fontdisabled: any;
    help_message: any;
    name: any;
    o_pos: any;
    offset: any;
    onclick: any;
    ondown: any;
    onselect: any;
    onunselect: any;
    selected: boolean;
    size: any;
    t: any;
    text_shadow: any;
    textcolour: any;
    textdisabledcolour: any;
    textfocuscolour: any;
    textselectedcolour: any;
    whiledown: any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    GetHelpText(): any;
    GetText(): any;
    IsSelected(): boolean;
    OnControl(control: any, down: any): any;
    OnDisable(): any;
    OnEnable(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnSelect(): any;
    OnUnselect(): any;
    OnUpdate(dt: any): any;
    ResetPreClickPosition(): any;
    Select(): any;
    SetControl(ctrl: any): any;
    SetDisabledFont(font: any): any;
    SetFont(font: any): any;
    SetHelpTextMessage(str: any): any;
    SetOnClick(fn: any): any;
    SetOnDown(fn: any): any;
    SetOnSelect(fn: any): any;
    SetOnUnSelect(fn: any): any;
    SetText(msg: any, dropShadow: any, dropShadowOffset: any): any;
    SetTextColour(r: any, g: any, b: any, a: any): any;
    SetTextDisabledColour(r: any, g: any, b: any, a: any): any;
    SetTextFocusColour(r: any, g: any, b: any, a: any): any;
    SetTextSelectedColour(r: any, g: any, b: any, a: any): any;
    SetTextSize(sz: any): any;
    SetWhileDown(fn: any): any;
    Unselect(): any;
  }
  function Button(...params: any[]): Button;
  export = Button;
}
declare module "widgets/canceltipwidget" {
  interface CancelTipWidget {
    cached_fade_level: number;
    cancel_tip_widget: any;
    controller_id: any;
    forceShowNextFrame: boolean;
    initialized: boolean;
    is_enabled: boolean;
    just_initialized: boolean;
    local_cancel_tip_widget: any;
    KeepAlive(auto_increment: any): any;
    OnUpdate(): any;
    SetEnabled(enabled: any): any;
    ShowNextFrame(): any;
  }
  function CancelTipWidget(...params: any[]): CancelTipWidget;
  export = CancelTipWidget;
}
declare module "widgets/characterselect" {
  interface CharacterSelect {
    characterIdx: number;
    characters: any;
    focus_scale: any;
    herocharacter: any;
    heroportrait: any;
    left_arrow: any;
    leftcharacter: any;
    leftportrait: any;
    leftsmallcharacter: any;
    leftsmallportrait: any;
    new_index: any;
    repeat_time: any;
    right_arrow: any;
    rightcharacter: any;
    rightportrait: any;
    rightsmallcharacter: any;
    rightsmallportrait: any;
    skin: string;
    BuildCharactersList(additionalCharacters: any): any;
    GetCharacter(): any;
    OnUpdate(dt: any): any;
    Scroll(dir: any): any;
    SelectRandomCharacter(): any;
    SetPortrait(): any;
    WrapIndex(index: any): any;
  }
  function CharacterSelect(...params: any[]): CharacterSelect;
  export = CharacterSelect;
}
declare module "widgets/chatqueue" {
  interface ChatQueue {
    current_time: any;
    is_chat_open: any;
    DisplayEmoteMessage(
      name: any,
      prefab: any,
      message: any,
      colour: any,
      whisper: any
    ): any;
    DisplaySystemMessage(message: any): any;
    GetDisplayName(name: any, prefab: any): any;
    OnMessageReceived(
      name: any,
      prefab: any,
      message: any,
      colour: any,
      whisper: any,
      profileflair: any
    ): any;
    OnUpdate(): any;
    PushMessage(
      username: any,
      message: any,
      colour: any,
      whisper: any,
      nolabel: any,
      profileflair: any
    ): any;
    RefreshWidgets(): any;
  }
  function ChatQueue(...params: any[]): ChatQueue;
  export = ChatQueue;
}
declare module "widgets/containerwidget" {
  interface ContainerWidget {
    button: any;
    constructionmats: any;
    constructionsite: any;
    container: any;
    dest_pos: any;
    im: any;
    inv: any;
    isopen: boolean;
    items: any;
    onitemgetfn: any;
    onitemlosefn: any;
    onrefreshfn: any;
    tile: any;
    tileslot: any;
    widget: any;
    Close(): any;
    OnItemGet(data: any): any;
    OnItemLose(data: any): any;
    Open(container: any, doer: any): any;
    Refresh(): any;
  }
  function ContainerWidget(...params: any[]): ContainerWidget;
  export = ContainerWidget;
}
declare module "widgets/controllercrafting" {
  interface ControllerCrafting {
    accept_down: boolean;
    control_held: any;
    control_held_time: number;
    idx: any;
    k: any;
    last_recipe: any;
    old_recipe: any;
    oldslot: any;
    recipepopup: any;
    repeat_time: number;
    selected_recipe: any;
    selected_slot: any;
    skin: any;
    slot: any;
    slot_idx: any;
    tab: any;
    tab_index: any;
    tabidx: any;
    use_idx: boolean;
    CanScroll(): boolean;
    Close(fn: any): any;
    GetTabs(): any;
    OnControl(control: any, down: any): any;
    OnUpdate(dt: any): any;
    Open(fn: any): any;
    OpenRecipeTab(idx: any): any;
    Refresh(): any;
    Resize(num_recipes: any): any;
    SelectNextRecipe(): any;
    SelectPrevRecipe(): any;
    SelectRecipe(recipe: any): any;
    UpdateIdx(): any;
  }
  function ControllerCrafting(...params: any[]): ControllerCrafting;
  export = ControllerCrafting;
}
declare module "widgets/controls" {
  interface Controls {
    a_l: any;
    a_r: any;
    adjective: any;
    aoetargeting: any;
    attack_shown: boolean;
    bottom_root: any;
    bottomright_root: any;
    cmds: any;
    cmdsoffset: any;
    commandlines: any;
    controller_attack_target: any;
    controller_id: any;
    controller_mode: any;
    controller_target: any;
    craftingandinventoryshown: boolean;
    d: any;
    dismounthintdelay: number;
    followerWidget: any;
    ground_cmds: any;
    ground_l: any;
    ground_r: any;
    h1: any;
    h2: any;
    isplacing: any;
    itemInActions: boolean;
    itemlines: any;
    l: any;
    left_root: any;
    offsetx: any;
    offsety: any;
    p_l: any;
    p_r: any;
    placer: any;
    r: any;
    right_root: any;
    scale: any;
    scrnh: any;
    scrnw: any;
    sep: any;
    shownItemIndex: any;
    str: any;
    target: any;
    textblock: any;
    top_root: any;
    topleft_root: any;
    topright_over_root: any;
    topright_root: any;
    w1: any;
    w2: any;
    x1: any;
    x2: any;
    y1: any;
    y2: any;
    HideCraftingAndInventory(): any;
    HideMap(): any;
    HideStatusNumbers(): any;
    HighlightActionItem(itemIndex: any, itemInActions: any): any;
    MakeScalingNodes(): any;
    OnUpdate(dt: any): any;
    SetDark(val: any): any;
    SetHUDSize(): any;
    ShowCraftingAndInventory(): any;
    ShowMap(): any;
    ShowStatusNumbers(): any;
    ToggleMap(): any;
  }
  function Controls(...params: any[]): Controls;
  export = Controls;
}
declare module "widgets/countdown" {
  interface Countdown {
    build_time: any;
    build_update_diff: any;
    days_since: any;
    days_until: any;
    days_until_string: any;
    now: any;
    should_show: boolean;
    update_time: any;
    SetDisplay(days_until: any, days_since: any, build_update_diff: any): any;
    ShouldShowCountdown(date: any): any;
  }
  function Countdown(...params: any[]): Countdown;
  export = Countdown;
}
declare module "widgets/countdownbeta" {
  interface CountdownBeta {
    days_until: any;
    now: any;
    time_until: any;
    update_time: any;
    SetCountdownDate(date: any): any;
  }
  function CountdownBeta(...params: any[]): CountdownBeta;
  export = CountdownBeta;
}
declare module "widgets/crafting" {
  interface Crafting {
    canscroll: any;
    current_slots: any;
    dy: any;
    end_padding: number;
    filter: any;
    h: any;
    horizontal: any;
    idx: any;
    new_filter: any;
    num: any;
    num_recipes: any;
    o_pos: any;
    oldidx: any;
    open: boolean;
    sepim: any;
    shown_num: number;
    slot_h: any;
    slot_w: any;
    use_idx: any;
    valid_recipes: any;
    w: any;
    x: any;
    y: any;
    CanScroll(): boolean;
    Close(fn: any): any;
    OnControl(control: any, down: any): any;
    Open(fn: any): any;
    Resize(num_recipes: any): any;
    ScrollDown(): any;
    ScrollUp(): any;
    SetFilter(filter: any): any;
    SetOrientation(horizontal: any): any;
    UpdateIdx(): any;
    UpdateRecipes(): any;
    UpdateScrollButtons(): any;
  }
  function Crafting(...params: any[]): Crafting;
  export = Crafting;
}
declare module "widgets/craftslot" {
  interface CraftSlot {
    buffered: any;
    canbuild: boolean;
    do_pulse: any;
    hud_atlas: any;
    knows: any;
    locked: boolean;
    open: boolean;
    recipe: any;
    recipe_skins: any;
    recipename: any;
    recipepopup: any;
    right_level: any;
    s: number;
    show_highlight: boolean;
    skin: any;
    Clear(): any;
    Close(): any;
    EnablePopup(): any;
    GetSize(): any;
    HideRecipe(): any;
    LockOpen(): any;
    OnControl(control: any, down: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    Open(): any;
    Refresh(recipename: any): any;
    SetRecipe(recipename: any): any;
    ShowRecipe(): any;
  }
  function CraftSlot(...params: any[]): CraftSlot;
  export = CraftSlot;
}
declare module "widgets/craftslots" {
  interface CraftSlots {
    Clear(): any;
    CloseAll(): any;
    EnablePopups(): any;
    HideAll(): any;
    LockOpen(idx: any): any;
    Open(idx: any): any;
    Refresh(): any;
    SetNumSlots(num: any): any;
    ShowAll(): any;
  }
  function CraftSlots(...params: any[]): CraftSlots;
  export = CraftSlots;
}
declare module "widgets/crafttabs" {
  interface CraftTabs {
    builder: any;
    controllercraftingopen: boolean;
    current_open: any;
    current_research_level: any;
    h: any;
    hint_update_check: any;
    idx: any;
    max_x: any;
    needtoupdate: boolean;
    repeat_time: any;
    res_scale: any;
    selected: any;
    shown: boolean;
    tab: any;
    tabs_to_alt_highlight: any;
    tabs_to_highlight: any;
    tabs_to_overlay: any;
    to_select: any;
    valid_tabs: any;
    w: any;
    x: any;
    Close(): any;
    CloseControllerCrafting(): any;
    DoUpdateRecipes(): any;
    GetCurrentIdx(): any;
    GetFirstIdx(): any;
    GetNextIdx(): any;
    GetPrevIdx(): any;
    IsCraftingOpen(): boolean;
    OnControl(control: any, down: any): any;
    OnUpdate(dt: any): any;
    OpenControllerCrafting(): any;
    OpenTab(idx: any): any;
    UpdateRecipes(): any;
  }
  function CraftTabs(...params: any[]): CraftTabs;
  export = CraftTabs;
}
declare module "widgets/customizationlist" {
  interface CustomizationList {
    allowEdit: any;
    bg: any;
    h: any;
    i: number;
    lastgroup: any;
    option: any;
    optionwidgets: any;
    presetvalues: any;
    scroll_list: any;
    text: any;
    title: any;
    titleParent: any;
    value: any;
    w: any;
    MakeOptionSpinners(): any;
    SetBGForSpinner(spinner: any): any;
    SetEditable(editable: any): any;
    SetPresetValues(values: any): any;
    SetTitle(title: any): any;
    SetValueForOption(option: any, value: any): any;
  }
  function CustomizationList(...params: any[]): CustomizationList;
  export = CustomizationList;
}
declare module "widgets/customizationtab" {
  interface CustomizationTab {
    allowEdit: boolean;
    autumn: any;
    bg: any;
    clean: any;
    current_level_locations: any;
    current_option_settings: any;
    currentmultilevel: number;
    customizationlist: any;
    last_focus: any;
    level_type: any;
    leveldata: any;
    leveltype: any;
    location: any;
    locationid: any;
    locationname: any;
    menuitems: any;
    modal: any;
    numTweaks: number;
    options: any;
    presetdata: any;
    presetnum: any;
    presets: any;
    prev_option_settings: any;
    previouslevel: any;
    ret: any;
    size: any;
    slot: any;
    specialevent: any;
    spinner_options: any;
    spring: any;
    summer: any;
    tosaveslots: any;
    winter: any;
    AddMultiLevel(level: any): any;
    CollectOptions(): any;
    GetLocationForLevel(level: any): any;
    GetLocationStringID(level: any): any;
    GetNumberOfTweaks(levelonly: any): any;
    GetValueForOption(level: any, option: any): any;
    HookupFocusMoves(): any;
    IsLevelEnabled(level: any): boolean;
    LoadPreset(level: any, preset: any): any;
    OnChangeGameMode(gamemode: any): any;
    OnChangeLevelLocations(level_locations: any): any;
    Refresh(): any;
    RemoveMultiLevel(level: any): any;
    RevertChanges(): any;
    SavePreset(): any;
    SelectMultilevel(level: any): any;
    SetTweak(level: any, option: any, value: any): any;
    UpdateMultilevelUI(): any;
    UpdatePresetInfo(level: any): any;
    UpdatePresetList(): any;
    UpdateSlot(slotnum: any, prevslot: any, _delete: any): any;
    VerifyValidSeasonSettings(): any;
  }
  function CustomizationTab(...params: any[]): CustomizationTab;
  export = CustomizationTab;
}
declare module "widgets/demotimer" {
  interface DemoTimer {
    time: any;
    time_left: any;
    OnUpdate(): any;
    Purchase(): any;
  }
  function DemoTimer(...params: any[]): DemoTimer;
  export = DemoTimer;
}
declare module "widgets/desync" {
  interface Desync {
    client: any;
    client_objs: any;
    perfscore: any;
    state: any;
    statedirty: boolean;
    OnUpdate(dt: any): any;
    RefreshPerf(): any;
    SetPerf(perf: any): any;
    SetState(state: any): any;
    ShowHostPerf(show: any): any;
  }
  function Desync(...params: any[]): Desync;
  export = Desync;
}
declare module "widgets/dressupavatarpopup" {
  interface DressupAvatarPopup {
    avatardata: any;
    body_image: any;
    body_offset: number;
    close_button: any;
    currentcharacter: any;
    dressed: any;
    feet_image: any;
    frame: any;
    frame_bg: any;
    hand_image: any;
    horizontal_line1: any;
    horizontal_line2: any;
    horizontal_line3: any;
    horizontal_line4: any;
    legs_image: any;
    line_offset: any;
    line_scale: number;
    line_x_offset: number;
    name: any;
    player_name: any;
    title: any;
    title2: any;
    widget_height: number;
    Layout(data: any): any;
    OnUpdate(dt: any): any;
    UpdateData(data: any): any;
    UpdateDisplayName(): any;
  }
  function DressupAvatarPopup(...params: any[]): DressupAvatarPopup;
  export = DressupAvatarPopup;
}
declare module "widgets/dressuppanel" {
  interface DressupPanel {
    all_chars: any;
    arrow_scale: number;
    base: any;
    base_skin_build: any;
    body: any;
    body_offset: number;
    clothing_names: any;
    clothing_options: any;
    colour: any;
    currentcharacter: any;
    currentcharacter_skins: any;
    default_build: any;
    default_focus: any;
    dressup_timestamp: any;
    feet: any;
    focus_forward: any;
    hand: any;
    legs: any;
    mid_horizontal_line0: any;
    mid_horizontal_line1: any;
    mid_horizontal_line2: any;
    mid_horizontal_line3: any;
    mid_horizontal_line4: any;
    mid_horizontal_line5: any;
    new_tag_offset: number;
    new_tag_scale: number;
    new_tag_x_offset: any;
    option_height: number;
    previous_skins: any;
    puppet: any;
    puppet_group: any;
    random_avatar: any;
    random_base: any;
    random_body: any;
    random_feet: any;
    random_hand: any;
    random_legs: any;
    recent_item_type: any;
    repeat_time: any;
    savedSkinsForCharacter: any;
    shadow: any;
    skin_data: any;
    skin_item_name: any;
    skin_options: any;
    skin_options_items: any;
    skins: any;
    skins_list: any;
    spinner_group: any;
    spinner_height: number;
    spinner_offset: number;
    spinner_width: number;
    t_h: number;
    t_w: number;
    templist: any;
    textures: any;
    timestamp: number;
    title_height: number;
    underlines: any;
    AllSpinnersToEnd(): any;
    DisableSpinners(): any;
    DoFocusHookups(): any;
    EnableSpinners(): any;
    GetBaseSkin(): any;
    GetClothingOptions(): any;
    GetSkinOptionsForRandom(): any;
    GetSkinOptionsForSlot(slot: any): any;
    GetSkinsForGameStart(): any;
    GetSkinsList(): any;
    MakeSpinner(slot: any): any;
    OnClose(): any;
    OnUpdate(dt: any): any;
    Reset(set_spinner_to_new_item: any): any;
    ReverseFocus(): any;
    ScrollBack(control: any): any;
    ScrollFwd(control: any): any;
    SeparateAvatar(): any;
    SetCurrentCharacter(character: any): any;
    SetDefaultSkinsForBase(): any;
    SetPuppetSkins(skip_change_emote: any): any;
    UpdatePuppet(skip_change_emote: any): any;
    UpdateSpinners(): any;
  }
  function DressupPanel(...params: any[]): DressupPanel;
  export = DressupPanel;
}
declare module "widgets/dropdown" {
  interface DropDown {
    isopen: boolean;
    widget: any;
    BuildListWidget(text: any, size_x: any, size_y: any): any;
    ClearAllSelections(): any;
    ClearSelection(text: any): any;
    Close(): any;
    Open(): any;
    SetPosition(x: any, y: any, z: any): any;
    SetScale(value: any): any;
    SetSelection(text: any): any;
  }
  function DropDown(...params: any[]): DropDown;
  export = DropDown;
}
declare module "widgets/equipslot" {
  interface EquipSlot {
    active_item: any;
    inventory: any;
    Click(): any;
    OnControl(control: any, down: any): any;
  }
  function EquipSlot(...params: any[]): EquipSlot;
  export = EquipSlot;
}
declare module "widgets/eventannouncer" {
  interface EventAnnouncer {
    index: any;
    DoShuffleUp(i: any): any;
    OnUpdate(): any;
    ShowNewAnnouncement(
      announcement: any,
      colour: any,
      announce_type: any
    ): any;
    ShowSkinAnnouncement(user_name: any, user_colour: any, skin_name: any): any;
  }
  function EventAnnouncer(...params: any[]): EventAnnouncer;
  export = EventAnnouncer;
}
declare module "widgets/fireover" {
  interface FireOver {
    alpha: number;
    alphamult: any;
    alphamultdir: number;
    ease_time: number;
    startalpha: number;
    t: number;
    targetalpha: number;
    OnChangeLevel(low: any): any;
    OnUpdate(dt: any): any;
    TurnOff(): any;
    TurnOn(low: any): any;
  }
  function FireOver(...params: any[]): FireOver;
  export = FireOver;
}
declare module "widgets/flareover" {
  interface FlareOver {
    delta: any;
    OnUpdate(dt: any): any;
    StartFlare(): any;
  }
  function FlareOver(...params: any[]): FlareOver;
  export = FlareOver;
}
declare module "widgets/followtext" {
  interface FollowText {
    hashud: boolean;
    offset: any;
    target: any;
    x: any;
    y: any;
    GetScreenOffset(): any;
    OnUpdate(dt: any): any;
    SetHUD(hud: any): any;
    SetOffset(offset: any): any;
    SetScreenOffset(x: any, y: any): any;
    SetTarget(target: any): any;
  }
  function FollowText(...params: any[]): FollowText;
  export = FollowText;
}
declare module "widgets/partytab" {
  interface PartyTab {
    OnTextEntered: any;
    btn: any;
    chatbar: any;
    chathistory: any;
    chathistory2: any;
    checkediting: boolean;
    delay: number;
    dirty: any;
    h: any;
    invite: any;
    numchatlines: number;
    oldstr: any;
    party: any;
    str: any;
    w: any;
    OnHide(): any;
    OnShow(): any;
    OnUpdate(dt: any): any;
    ReceiveInvite(inviter: any, partyid: any): any;
    ReceivePartyChat(chatline: any): any;
    Refresh(): any;
    SetPartyTable(party: any): any;
  }
  function PartyTab(...params: any[]): PartyTab;
  export = PartyTab;
}
declare module "widgets/friendstab" {
  interface FriendsTab {
    delay: number;
    dirty: boolean;
    friends: any;
    str: string;
    OnHide(): any;
    OnShow(): any;
    OnUpdate(dt: any): any;
    Refresh(): any;
    SetFriendsList(friends: any): any;
  }
  function FriendsTab(...params: any[]): FriendsTab;
  export = FriendsTab;
}
declare module "widgets/friendsmanager" {
  interface FriendsManager {
    rootx: any;
    rooty: any;
    tab: string;
    Kill(): any;
    OnHide(): any;
    OnShow(): any;
    ReceiveInvite(inviter: any, partyid: any): any;
    ReceivePartyChat(chatline: any): any;
    RefreshFriendsTab(): any;
    RefreshPartyTab(): any;
    SetHAnchor(anchor: any): any;
    SetVAnchor(anchor: any): any;
    SwitchToFriendsTab(): any;
    SwitchToPartyTab(): any;
  }
  function FriendsManager(...params: any[]): FriendsManager;
  export = FriendsManager;
}
declare module "widgets/fumeover" {
  interface FumeOver {
    delta: any;
    DoUpdate(layer: any, dt: any): any;
    OnUpdate(dt: any): any;
    TurnOff(layer: any): any;
    TurnOn(layer: any, intensity: any): any;
  }
  function FumeOver(...params: any[]): FumeOver;
  export = FumeOver;
}
declare module "widgets/giftitemtoast" {
  interface GiftItemToast {
    controller_help: any;
    controller_hide: any;
    craft_hide: any;
    current_pos: any;
    enabled: boolean;
    from: any;
    hud_focus: any;
    numitems: any;
    opened: boolean;
    time: any;
    to: any;
    CheckControl(control: any, down: any): any;
    DisableClick(): any;
    DoOpenGift(): any;
    EnableClick(): any;
    OnClickEnabled(): any;
    OnToast(num: any): any;
    OnUpdate(): any;
    ToggleController(hide: any): any;
    ToggleCrafting(hide: any): any;
    ToggleHUDFocus(focus: any): any;
    UpdateControllerHelp(): any;
    UpdateElements(): any;
  }
  function GiftItemToast(...params: any[]): GiftItemToast;
  export = GiftItemToast;
}
declare module "widgets/gogglesover" {
  interface GogglesOver {
    ToggleGoggles(show: any): any;
  }
  function GogglesOver(...params: any[]): GogglesOver;
  export = GogglesOver;
}
declare module "widgets/grid" {
  interface Grid {
    c: any;
    col_on_screen: any;
    cols: any;
    h_loop: any;
    h_offset: any;
    item: any;
    items_by_coords: any;
    layout_left_to_right_top_to_bottom: boolean;
    num_rows: any;
    old_item: any;
    r: any;
    row_on_screen: any;
    rows: any;
    v_loop: any;
    v_offset: any;
    AddItem(widget: any, c: any, r: any): any;
    AddList(widget_list: any, initial_row: any, initial_col: any): any;
    Clear(): any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    DoFocusHookups(): any;
    FillGrid(num_columns: any, coffset: any, roffset: any, items: any): any;
    FindItemSlot(compare_fn: any): any;
    GetItemInSlot(c: any, r: any): any;
    GetRowsInCol(c: any): any;
    InitSize(c: any, r: any, coffset: any, roffset: any): any;
    SetFocus(c: any, r: any): any;
    SetLooping(h: any, v: any): any;
    UseNaturalLayout(): any;
  }
  function Grid(...params: any[]): Grid;
  export = Grid;
}
declare module "widgets/healthbadge" {
  interface HealthBadge {
    anim: any;
    arrowdir: any;
    down: any;
    effigy: boolean;
    task: any;
    up: any;
    HideEffigy(): any;
    OnUpdate(dt: any): any;
    SetPercent(val: any, max: any, penaltypercent: any): any;
    ShowEffigy(): any;
  }
  function HealthBadge(...params: any[]): HealthBadge;
  export = HealthBadge;
}
declare module "widgets/heatover" {
  interface HeatOver {
    all_up_thresh: any;
    alpha_min: any;
    alpha_min_target: number;
    alpha_mins: any;
    distortion_frequency: any;
    distortion_size: any;
    distortion_speed: any;
    down_thresh: any;
    effectFrequency: any;
    effectFrequency_target: any;
    effectSize: any;
    effectSize_target: any;
    effectSpeed: any;
    effectTime: any;
    heat_sounds: any;
    heat_sounds_names: any;
    isup: boolean;
    lspeed: any;
    num_steps: number;
    temp: any;
    up_thresh: any;
    OnHeatChange(): any;
    OnUpdate(dt: any): any;
  }
  function HeatOver(...params: any[]): HeatOver;
  export = HeatOver;
}
declare module "widgets/hovertext" {
  interface HoverText {
    adjective: any;
    aoetargeting: any;
    changed: any;
    colour: any;
    followhandler: any;
    h: number;
    h0: any;
    h1: any;
    lastStr: any;
    lmb: any;
    name: any;
    overriden: any;
    pos: any;
    rmb: any;
    scale: any;
    scr_h: any;
    scr_w: any;
    secondarystr: any;
    str: any;
    strFrames: any;
    w: number;
    w0: any;
    w1: any;
    FollowMouseConstrained(): any;
    OnUpdate(): any;
    UpdatePosition(x: any, y: any): any;
  }
  function HoverText(...params: any[]): HoverText;
  export = HoverText;
}
declare module "widgets/hudcompass" {
  interface HudCompass {
    currentheading: number;
    delta: any;
    displayheading: number;
    easein: number;
    fullmoon_offset: any;
    fullmoon_t: any;
    headingvel: number;
    isopen: boolean;
    istransitioning: boolean;
    offsetheading: number;
    sanity: any;
    sanity_offset: any;
    sanity_t: any;
    t: any;
    wantstoclose: boolean;
    wobble_offset: any;
    CloseCompass(): any;
    CopyMasterNeedle(): any;
    GetCompassHeading(): any;
    OnUpdate(dt: any): any;
    OpenCompass(): any;
    SetMaster(): any;
  }
  function HudCompass(...params: any[]): HudCompass;
  export = HudCompass;
}
declare module "widgets/hungerbadge" {
  interface HungerBadge {
    anim: any;
    arrowdir: any;
    OnUpdate(dt: any): any;
  }
  function HungerBadge(...params: any[]): HungerBadge;
  export = HungerBadge;
}
declare module "widgets/iceover" {
  interface IceOver {
    all_up_thresh: any;
    alpha_min: any;
    alpha_min_target: number;
    alpha_mins: any;
    freeze_sounds: any;
    isup: boolean;
    lspeed: any;
    num_steps: number;
    temp: any;
    OnIceChange(): any;
    OnUpdate(dt: any): any;
  }
  function IceOver(...params: any[]): IceOver;
  export = IceOver;
}
declare module "widgets/image" {
  interface Image {
    atlas: any;
    disabledtex: any;
    h: any;
    h0: any;
    mouseovertex: any;
    scalex: any;
    scaley: any;
    texture: any;
    tint: any;
    w: any;
    w0: any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    EnableEffectParams(enabled: any): any;
    GetSize(): any;
    OnDisable(): any;
    OnEnable(): any;
    OnMouseOut(): any;
    OnMouseOver(): any;
    ScaleToSize(w: any, h: any): any;
    SetAlphaRange(min: any, max: any): any;
    SetBlendMode(mode: any): any;
    SetDisabledTexture(atlas: any, tex: any): any;
    SetEffect(filename: any): any;
    SetEffectParams(param1: any, param2: any, param3: any, param4: any): any;
    SetFadeAlpha(a: any, skipChildren: any): any;
    SetHRegPoint(anchor: any): any;
    SetMouseOverTexture(atlas: any, tex: any): any;
    SetSize(w: any, h: any): any;
    SetTexture(atlas: any, tex: any, default_tex: any): any;
    SetTint(r: any, g: any, b: any, a: any): any;
    SetUVScale(xScale: any, yScale: any): any;
    SetVRegPoint(anchor: any): any;
  }
  function Image(...params: any[]): Image;
  export = Image;
}
declare module "widgets/imagebutton" {
  interface ImageButton {
    atlas: any;
    default_textures: boolean;
    down: boolean;
    focus_scale: any;
    focus_sound: any;
    has_image_down: any;
    hover_overlay: any;
    image_disabled: any;
    image_down: any;
    image_focus: any;
    image_normal: any;
    image_offset: any;
    image_scale: any;
    image_selected: any;
    imagedisabledcolour: any;
    imagefocuscolour: any;
    imagenormalcolour: any;
    imageselectedcolour: any;
    normal_scale: any;
    o_pos: any;
    offset: any;
    scale: any;
    size_x: any;
    size_y: any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    ForceImageSize(x: any, y: any): any;
    GetSize(): any;
    OnControl(control: any, down: any): any;
    OnDisable(): any;
    OnEnable(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnSelect(): any;
    OnUnselect(): any;
    SetFocusScale(scaleX: any, scaleY: any, scaleZ: any): any;
    SetFocusSound(sound: any): any;
    SetImageDisabledColour(r: any, g: any, b: any, a: any): any;
    SetImageFocusColour(r: any, g: any, b: any, a: any): any;
    SetImageNormalColour(r: any, g: any, b: any, a: any): any;
    SetImageSelectedColour(r: any, g: any, b: any, a: any): any;
    SetNormalScale(scaleX: any, scaleY: any, scaleZ: any): any;
    SetTextures(
      atlas: any,
      normal: any,
      focus: any,
      disabled: any,
      down: any,
      selected: any,
      image_scale: any,
      image_offset: any
    ): any;
    UseFocusOverlay(focus_selected_texture: any): any;
  }
  function ImageButton(...params: any[]): ImageButton;
  export = ImageButton;
}
declare module "widgets/intentionpicker" {
  interface IntentionPicker {
    cb: any;
    next_focus: any;
    SetCallback(cb: any): any;
    SetFocus(direction: any): any;
    SetSelected(intention: any): any;
  }
  function IntentionPicker(...params: any[]): IntentionPicker;
  export = IntentionPicker;
}
declare module "widgets/inv" {
  interface Inv {
    actionstringtime: any;
    active_item: any;
    active_slot: any;
    activeitem: any;
    adjective: any;
    backpackinv: any;
    bg: any;
    bottomrow: any;
    bp: any;
    can_take_active_item: any;
    closest: any;
    closest_list: any;
    closest_score: any;
    controller_build: any;
    controller_id: any;
    current_list: any;
    cursor: any;
    cursortile: any;
    dest_pos: any;
    do_integrated_backpack: any;
    do_self_inspect: any;
    equip: any;
    equips: any;
    force_single_drop: boolean;
    h0: any;
    h1: any;
    hint_update_check: any;
    hovertile: any;
    idx: any;
    im: any;
    inv: any;
    inv_item: any;
    inventory: any;
    is_equip_slot: any;
    isactivetile: boolean;
    itemname: any;
    items: any;
    list: any;
    lists: any;
    new_string: any;
    old_string: any;
    open: boolean;
    overflow: any;
    rebuild_pending: boolean;
    rebuild_snapping: any;
    repeat_time: number;
    reps: number;
    scene_action: any;
    self_action: any;
    slot: any;
    start_idx: any;
    str: any;
    tile: any;
    toprow: any;
    use_action: any;
    w0: any;
    w1: any;
    was_force_single_drop: any;
    was_shown: any;
    wmax: any;
    xscale: any;
    yscale: any;
    zscale: any;
    AddEquipSlot(slot: any, atlas: any, image: any, sortkey: any): any;
    Cancel(): any;
    CloseControllerInventory(): any;
    CursorDown(): any;
    CursorLeft(): any;
    CursorNav(dir: any, same_container_only: any): any;
    CursorRight(): any;
    CursorUp(): any;
    GetClosestWidget(lists: any, pos: any, dir: any): any;
    GetCursorItem(): any;
    GetCursorSlot(): any;
    GetDescriptionString(item: any): any;
    GetInventoryLists(same_container_only: any): any;
    OffsetCursor(
      offset: any,
      val: any,
      minval: any,
      maxval: any,
      slot_is_valid_fn: any
    ): any;
    OnBuild(): any;
    OnControl(control: any, down: any): any;
    OnDisable(): any;
    OnEnable(): any;
    OnItemEquip(item: any, slot: any): any;
    OnItemGet(
      item: any,
      slot: any,
      source_pos: any,
      ignore_stacksize_anim: any
    ): any;
    OnItemLose(slot: any): any;
    OnItemUnequip(item: any, slot: any): any;
    OnNewActiveItem(item: any): any;
    OnUpdate(dt: any): any;
    OpenControllerInventory(): any;
    Rebuild(): any;
    Refresh(): any;
    SelectDefaultSlot(): any;
    SelectSlot(slot: any): any;
    SetTooltipColour(r: any, g: any, b: any, a: any): any;
    UpdateCursor(): any;
    UpdateCursorText(): any;
    UpdatePosition(): any;
  }
  function Inv(...params: any[]): Inv;
  export = Inv;
}
declare module "widgets/invslot" {
  interface InvSlot {
    active_item: any;
    backpack: any;
    base_scale: number;
    character: any;
    container: any;
    container_item: any;
    dest_inst: any;
    exclude_containers: any;
    highlight_scale: number;
    inventory: any;
    item: any;
    opencontainers: any;
    overflow: any;
    playercontainers: any;
    slot_number: any;
    CanTradeItem(): boolean;
    Click(stack_mod: any): any;
    ConvertToConstructionSlot(ingredient: any, amount: any): any;
    Inspect(): any;
    OnControl(control: any, down: any): any;
    TradeItem(stack_mod: any): any;
    UseItem(): any;
  }
  function InvSlot(...params: any[]): InvSlot;
  export = InvSlot;
}
declare module "widgets/itemimage" {
  interface ItemImage {
    clicked: boolean;
    collection_timestamp: any;
    disable_selecting: boolean;
    item_id: any;
    name: any;
    rarity: string;
    type: any;
    warning: any;
    ClearFrame(): any;
    DisableSelecting(): any;
    Embiggen(): any;
    Mark(value: any): any;
    OnControl(control: any, down: any): any;
    OnDisable(): any;
    OnEnable(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    PlayDefaultAnim(): any;
    PlaySpecialAnimation(name: any, pushdefault: any): any;
    Select(): any;
    SetItem(type: any, name: any, item_id: any, timestamp: any): any;
    SetItemRarity(rarity: any): any;
    Shrink(): any;
    Unselect(): any;
  }
  function ItemImage(...params: any[]): ItemImage;
  export = ItemImage;
}
declare module "widgets/itemselector" {
  interface ItemSelector {
    count: number;
    full_skins_list: any;
    inventory_list: any;
    k: number;
    list_widgets: any;
    scroll_list: any;
    show_hover_text: boolean;
    skins_list: any;
    BuildInventoryList(): any;
    Close(): any;
    DisableInput(): any;
    EnableInput(): any;
    GetNumFilteredItems(): any;
    NumItemsLikeThis(item_name: any): any;
    OnItemSelect(type: any, item: any, item_id: any, itemimage: any): any;
    UpdateData(selections: any, filters_list: any): any;
  }
  function ItemSelector(...params: any[]): ItemSelector;
  export = ItemSelector;
}
declare module "widgets/itemslot" {
  interface ItemSlot {
    bgimage2: any;
    big: boolean;
    highlight: boolean;
    label: any;
    ontilechangedfn: any;
    tile: any;
    DeHighlight(): any;
    Highlight(): any;
    LockHighlight(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    SetBGImage2(atlas: any, img: any, tint: any): any;
    SetLabel(msg: any, colour: any): any;
    SetOnTileChangedFn(fn: any): any;
    SetTile(tile: any): any;
    UnlockHighlight(): any;
  }
  function ItemSlot(...params: any[]): ItemSlot;
  export = ItemSlot;
}
declare module "widgets/itemtile" {
  interface ItemTile {
    actionpicker: any;
    actions: any;
    active_item: any;
    adjective: any;
    basescale: any;
    hasspoilage: boolean;
    ignore_stacksize_anim: any;
    ispreviewing: boolean;
    onquantitychangedfn: any;
    percent: any;
    player: any;
    quantity: any;
    rechargepct: any;
    rechargetime: any;
    str: string;
    val_to_show: any;
    GetDescriptionString(): any;
    HasSpoilage(): boolean;
    OnControl(control: any, down: any): any;
    OnGainFocus(): any;
    OnUpdate(dt: any): any;
    Refresh(): any;
    SetBaseScale(sc: any): any;
    SetChargePercent(percent: any): any;
    SetChargeTime(t: any): any;
    SetOnQuantityChangedFn(fn: any): any;
    SetPercent(percent: any): any;
    SetPerishPercent(percent: any): any;
    SetQuantity(quantity: any): any;
    StartDrag(): any;
    UpdateTooltip(): any;
  }
  function ItemTile(...params: any[]): ItemTile;
  export = ItemTile;
}
declare module "widgets/listcursor" {
  interface ListCursor {
    controller_id: any;
    down: boolean;
    scroll_list: any;
    selected: boolean;
    t: any;
    Disable(): any;
    Enable(): any;
    GetHelpText(): any;
    GetSize(): any;
    OnControl(control: any, down: any): any;
    OnFocusMove(dir: any, down: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    SetParentList(list: any): any;
    SetSelected(selected: any): any;
  }
  function ListCursor(...params: any[]): ListCursor;
  export = ListCursor;
}
declare module "widgets/loadingwidget" {
  interface LoadingWidget {
    NEXT_STATE: number;
    cached_fade_level: number;
    elipse_state: number;
    fade_sq: any;
    forceShowNextFrame: boolean;
    is_enabled: boolean;
    step_time: any;
    time: any;
    time_delta: any;
    KeepAlive(auto_increment: any): any;
    OnUpdate(): any;
    SetEnabled(enabled: any): any;
    ShowNextFrame(): any;
  }
  function LoadingWidget(...params: any[]): LoadingWidget;
  export = LoadingWidget;
}
declare module "widgets/lobbychatqueue" {
  interface LobbyChatQueue {
    controller_id: any;
    default_focus: any;
    list_widgets: any;
    scroll_list: any;
    startidx: any;
    t: any;
    DoFocusHookups(): any;
    GetChatAlpha(current_time: any, chat_time: any): any;
    GetDisplayName(name: any, prefab: any): any;
    GetHelpText(): any;
    OnControl(control: any, down: any): any;
    OnMessageReceived(name: any, prefab: any, message: any, colour: any): any;
    OnUpdate(): any;
    ScrollToEnd(): any;
  }
  function LobbyChatQueue(...params: any[]): LobbyChatQueue;
  export = LobbyChatQueue;
}
declare module "widgets/magicskincollector" {
  interface MagicSkinCollector {
    display_text_time: number;
    exit_callback: any;
    intro_done: boolean;
    last_speech_time: any;
    sound_started: boolean;
    str: any;
    talking: boolean;
    text_string: any;
    Appear(): any;
    ClearSpeech(): any;
    Disappear(callbackfn: any): any;
    OnUpdate(dt: any): any;
    QuitTalking(): any;
    Say(text: any, rarity: any, name: any, number: any): any;
    Snap(): any;
  }
  function MagicSkinCollector(...params: any[]): MagicSkinCollector;
  export = MagicSkinCollector;
}
declare module "widgets/mapcontrols" {
  interface MapControls {
    controller_id: any;
    HideMapButton(): any;
    RefreshTooltips(): any;
    Show(): any;
    ShowMapButton(): any;
  }
  function MapControls(...params: any[]): MapControls;
  export = MapControls;
}
declare module "widgets/mapwidget" {
  interface MapWidget {
    dx: any;
    dy: any;
    handle: any;
    lastpos: any;
    pos: any;
    scale: number;
    MapPosToWorldPos(x: any, y: any, z: any): any;
    Offset(dx: any, dy: any): any;
    OnHide(): any;
    OnShow(): any;
    OnUpdate(dt: any): any;
    OnZoomIn(): any;
    OnZoomOut(): any;
    SetTextureHandle(handle: any): any;
    UpdateTexture(): any;
    WorldPosToMapPos(x: any, y: any, z: any): any;
  }
  function MapWidget(...params: any[]): MapWidget;
  export = MapWidget;
}
declare module "widgets/menu" {
  interface Menu {
    back: any;
    button: any;
    found: boolean;
    fwd: any;
    h: any;
    height: any;
    i: any;
    items: any;
    last_focused_index: any;
    pos: any;
    scale: number;
    str: any;
    textSize: any;
    w: any;
    x: number;
    AddCustomItem(widget: any, offset: any): any;
    AddItem(
      text: any,
      cb: any,
      offset: any,
      style: any,
      size: any,
      control: any
    ): any;
    AutoSpaceByText(spacing: any): any;
    Clear(): any;
    DisableItem(num: any): any;
    DoFocusHookups(): any;
    EditItem(num: any, text: any, text_size: any, cb: any): any;
    EnableItem(num: any): any;
    GetNumberOfItems(): any;
    GetSize(): any;
    RestoreFocusTo(last_focus_widget: any): any;
    SetFocus(index: any): any;
    SetHRegPoint(halign: any): any;
    SetMenuIndex(index: any): any;
    SetTextSize(size: any): any;
    SetVRegPoint(valign: any): any;
    UnselectAll(): any;
  }
  function Menu(...params: any[]): Menu;
  export = Menu;
}
declare module "widgets/mindcontrolover" {
  interface MindControlOver {
    dlevel: any;
    level: number;
    targetlevel: any;
    task: any;
    OnUpdate(dt: any): any;
    PushLevel(level: any): any;
  }
  function MindControlOver(...params: any[]): MindControlOver;
  export = MindControlOver;
}
declare module "widgets/minigametile" {
  interface MiniGameTile {
    clicked: boolean;
    tile_type: string;
    view_state: string;
    ClearTile(): any;
    Embiggen(): any;
    HideTile(): any;
    OnControl(control: any, down: any): any;
    OnDisable(): any;
    OnEnable(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    Select(): any;
    SetTileTypeHidden(tile_type: any): any;
    SetTileTypeUnHidden(tile_type: any): any;
    ShowTile(): any;
    Shrink(): any;
    UnhideTileType(): any;
    Unselect(): any;
  }
  function MiniGameTile(...params: any[]): MiniGameTile;
  export = MiniGameTile;
}
declare module "widgets/modstab" {
  interface ModsTab {
    client_mod_type: any;
    curr_modnames_client: any;
    curr_modnames_client_dl: any;
    curr_modnames_server: any;
    curr_modnames_server_dl: any;
    currentmodname: any;
    currentmodtype: any;
    detailauthor: any;
    detailcompatibility: any;
    detaildesc: any;
    detailimage: any;
    detailpanel: any;
    detailtitle: any;
    detailtitle2: any;
    detailwarning: any;
    enabled: any;
    h: any;
    idx: number;
    infoprefabs: any;
    is_updating: boolean;
    last_client_modname: any;
    last_server_modname: any;
    link_fn: any;
    modStatus: any;
    modWidget: any;
    mod_index: number;
    mod_warning: any;
    modconfigable: boolean;
    modinfo: any;
    modname: any;
    modnames_client: any;
    modnames_client_dl: any;
    modnames_server: any;
    modnames_server_dl: any;
    modnames_versions: any;
    modupdateable: boolean;
    nameLines: any;
    need_to_udpate: any;
    newprefabs: any;
    no_mods: any;
    num_mods: number;
    oldprefabs: any;
    options_scroll_list_client: any;
    options_scroll_list_server: any;
    optionwidgets_client: any;
    optionwidgets_server: any;
    out_of_date_mods: number;
    outofdate: any;
    slotnum: any;
    tocancelorsaveslots: any;
    tocreate: any;
    top_mods_panel: any;
    tosaveslots: any;
    updateallenabled: boolean;
    updatetask: any;
    w: any;
    widgetTable: any;
    workshop_prefix: string;
    Apply(): any;
    Cancel(): any;
    CleanAllButton(): any;
    ConfigureSelectedMod(): any;
    CreateDetailPanel(): any;
    DisableConfigButton(modWidget: any): any;
    DisableUpdateButton(mode: any): any;
    DoFocusHookups(): any;
    EnableConfigButton(modWidget: any): any;
    EnableCurrent(idx: any): any;
    EnableUpdateButton(): any;
    GetBestModStatus(modname: any): any;
    GetNumberOfModsEnabled(): any;
    GetOutOfDateEnabledMods(): any;
    LoadModInfoPrefabs(prefabtable: any): any;
    ModLinkCurrent(): any;
    MoreMods(): any;
    MoreWorkshopMods(): any;
    OnBecomeActive(): any;
    OnConfirmEnable(restart: any, modname: any): any;
    OnDestroy(): any;
    ReloadModInfoPrefabs(): any;
    SetModsList(listtype: any): any;
    SetSaveSlot(slotnum: any, fromDelete: any): any;
    SetTopModsPanel(panel: any): any;
    ShowModDetails(idx: any, client_mod: any): any;
    StartWorkshopUpdate(): any;
    UnloadModInfoPrefabs(prefabtable: any): any;
    UpdateAllButton(force: any): any;
    UpdateForWorkshop(force_refresh: any): any;
    UpdateSelectedMod(): any;
  }
  function ModsTab(...params: any[]): ModsTab;
  export = ModsTab;
}
declare module "widgets/moisturemeter" {
  interface MoistureMeter {
    active: boolean;
    anim: string;
    animtime: number;
    arrowdir: any;
    curframe: any;
    Activate(): any;
    Deactivate(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnUpdate(dt: any): any;
    SetValue(moisture: any, max: any, ratescale: any): any;
  }
  function MoistureMeter(...params: any[]): MoistureMeter;
  export = MoistureMeter;
}
declare module "widgets/mousetracker" {
  interface MouseTracker {
    joystickmover: any;
    started_ever: boolean;
    GetAnim(angle: any): any;
    Start(): any;
    Stop(): any;
  }
  function MouseTracker(...params: any[]): MouseTracker;
  export = MouseTracker;
}
declare module "widgets/mvploadingwidget" {
  interface MVPLoadingWidget {
    card_anims: any;
    mvp_cards: any;
    mvp_widgets: any;
    offset: any;
    rot_offset: any;
    rot_spacing: number;
    space: number;
    y_offset: number;
    PopulateData(): any;
    SetAlpha(a: any): any;
  }
  function MVPLoadingWidget(...params: any[]): MVPLoadingWidget;
  export = MVPLoadingWidget;
}
declare module "widgets/newhostpicker" {
  interface NewHostPicker {
    cb: any;
    next_focus: any;
    SetCallback(cb: any): any;
    SetFocus(direction: any): any;
    SetSelected(intention: any): any;
  }
  function NewHostPicker(...params: any[]): NewHostPicker;
  export = NewHostPicker;
}
declare module "widgets/nineslice" {
  interface NineSlice {
    crown: any;
    tail: any;
    AddCrown(
      image: any,
      hanchor: any,
      vanchor: any,
      offsetX: any,
      offsetY: any
    ): any;
    AddTail(
      image: any,
      hanchor: any,
      vanchor: any,
      offsetX: any,
      offsetY: any
    ): any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    GetSize(): any;
    SetScale(w: any, h: any): any;
    SetSize(w: any, h: any): any;
    SetTint(r: any, g: any, b: any, a: any): any;
    UpdateTail(hanchor: any, vanchor: any, offsetX: any, offsetY: any): any;
  }
  function NineSlice(...params: any[]): NineSlice;
  export = NineSlice;
}
declare module "widgets/numericspinner" {
  interface NumericSpinner {
    input: any;
    selectedIndex: any;
    GetSelected(): any;
    GetSelectedData(): any;
    GetSelectedIndex(): any;
    GetSelectedText(): any;
    MaxIndex(): any;
    MinIndex(): any;
    OnKeyDown(key: any): any;
    OnTextInput(text: any): any;
  }
  function NumericSpinner(...params: any[]): NumericSpinner;
  export = NumericSpinner;
}
declare module "widgets/onlinestatus" {
  interface OnlineStatus {
    OnUpdate(): any;
  }
  function OnlineStatus(...params: any[]): OnlineStatus;
  export = OnlineStatus;
}
declare module "widgets/pagedlist" {
  interface PagedList {
    controller_id: any;
    items: any;
    num_pages: any;
    page_number: number;
    repeat_time: any;
    start_index: any;
    t: any;
    ChangePage(dir: any): any;
    EvaluateArrows(): any;
    GetHelpText(): any;
    OnControl(control: any, down: any): any;
    OnUpdate(dt: any): any;
    RefreshView(): any;
    SetItemsData(items: any): any;
    SetPage(page: any): any;
  }
  function PagedList(...params: any[]): PagedList;
  export = PagedList;
}
declare module "widgets/ping" {
  interface Ping {
    lastPingVal: any;
    pingVal: any;
    OnUpdate(): any;
  }
  function Ping(...params: any[]): Ping;
  export = Ping;
}
declare module "widgets/playeravatarpopup" {
  interface PlayerAvatarPopup {
    age: any;
    anchorpos: any;
    anchortime: any;
    atlas: string;
    base_image: any;
    bg: any;
    body_equip_image: any;
    body_image: any;
    body_offset: number;
    build: any;
    character: any;
    character_name: any;
    client_obj: any;
    close_button: any;
    current_speed: number;
    currentcharacter: any;
    default: any;
    equip_offset: number;
    feet_image: any;
    frame: any;
    frame_bg: any;
    h: any;
    hand_equip_image: any;
    hand_image: any;
    head_equip_image: any;
    horizontal_line1: any;
    horizontal_line2: any;
    horizontal_line3: any;
    horizontal_line4: any;
    image_group: any;
    in_pos: any;
    left_column: any;
    legs_image: any;
    line_offset: any;
    line_scale: number;
    moved: any;
    name: any;
    namestr: any;
    netprofilebutton: any;
    out_pos: any;
    player_name: any;
    portrait: any;
    portrait_height: number;
    pos: any;
    puppet: any;
    right_column: number;
    skin_build: any;
    started: boolean;
    target: any;
    text: any;
    time_to_refresh: any;
    title: any;
    userid: any;
    vertical_line: any;
    w: any;
    widget_height: number;
    Close(): any;
    CreateEquipWidgetForSlot(): any;
    CreateSkinWidgetForSlot(): any;
    GetDisplayName(player_name: any, character: any): any;
    GetHelpText(): any;
    Layout(data: any, show_net_profile: any): any;
    OnControl(control: any, down: any): any;
    OnUpdate(dt: any): any;
    ResolveCharacter(data: any): any;
    SetButtonTextSize(size: any): any;
    SetPlayer(player_name: any, data: any, show_net_profile: any): any;
    SetTitleTextSize(size: any): any;
    Start(): any;
    UpdateData(data: any): any;
    UpdateDisplayName(): any;
    UpdateEquipWidgetForSlot(image_group: any, slot: any, equipdata: any): any;
    UpdateSkinWidgetForSlot(image_group: any, slot: any, skin_name: any): any;
  }
  function PlayerAvatarPopup(...params: any[]): PlayerAvatarPopup;
  export = PlayerAvatarPopup;
}
declare module "widgets/playerbadge" {
  interface PlayerBadge {
    dirty: boolean;
    ending: any;
    is_mod_character: boolean;
    ishost: any;
    location: any;
    prefabname: string;
    starting: any;
    userflags: any;
    GetAvatar(): any;
    GetAvatarAtlas(): any;
    GetBG(): any;
    IsAFK(): boolean;
    IsCharacterState1(): boolean;
    IsCharacterState2(): boolean;
    IsCharacterState3(): boolean;
    IsGhost(): boolean;
    IsLoading(): boolean;
    Set(prefab: any, colour: any, ishost: any, userflags: any): any;
  }
  function PlayerBadge(...params: any[]): PlayerBadge;
  export = PlayerBadge;
}
declare module "widgets/playerlist" {
  interface PlayerList {
    ClientObjs: any;
    bg: any;
    left_line: any;
    list_root: any;
    lower_horizontal_line: any;
    maxPlayers: any;
    numPlayers: any;
    player_list: any;
    player_widgets: any;
    players: any;
    players_number: any;
    right_line: any;
    row_root: any;
    scroll_list: any;
    title: any;
    upper_horizontal_line: any;
    BuildPlayerList(players: any, nextWidgets: any): any;
    GetDisplayName(clientrecord: any): any;
    GetPlayerTable(): any;
    Refresh(next_widgets: any): any;
  }
  function PlayerList(...params: any[]): PlayerList;
  export = PlayerList;
}
declare module "widgets/popupnumber" {
  interface PopupNumber {
    k: any;
    progress: any;
    s: any;
    xoffs2: any;
    yoffs2: any;
    OnUpdate(dt: any): any;
  }
  function PopupNumber(...params: any[]): PopupNumber;
  export = PopupNumber;
}
declare module "widgets/notificationwidget" {
  interface NotificationWidget {
    bg: any;
    bg_w: any;
    coin: any;
    coin_w: any;
    is_image_loaded: boolean;
    is_new: boolean;
    line_past: number;
    line_w: any;
    max_w: any;
    params: any;
    root: any;
    scale: number;
    str: any;
    str_w: any;
    underline: any;
    x: number;
    BuildPopupWidget(data: any): any;
    OnControl(control: any, down: any): any;
    OnRecipeAppraised(data: any): any;
    OnRecipeMade(data: any): any;
  }
  function NotificationWidget(...params: any[]): NotificationWidget;
  export = NotificationWidget;
}
declare module "widgets/recipepopup" {
  interface RecipePopup {
    amulet: any;
    bg: any;
    buffered: any;
    builder: any;
    button: any;
    buttonstr: any;
    can_build: any;
    contents: any;
    desc: any;
    desc_backing: any;
    div: number;
    equippedBody: any;
    half_div: any;
    has_enough: any;
    hint_tech_ingredient: any;
    hint_text: any;
    hud_atlas: any;
    img: any;
    ing: any;
    ingredient: any;
    ingredient_backing: any;
    inventory: any;
    knows: any;
    last_skin: any;
    light_box: any;
    line_under_desc: any;
    line_under_spinner: any;
    lines: any;
    name: any;
    num: number;
    num_found: any;
    num_ingredients: any;
    offset: number;
    owner: any;
    recipe: any;
    recipe_timestamp: any;
    should_hint: any;
    showamulet: any;
    skin_options: any;
    skins_list: any;
    skins_options: any;
    skins_spinner: any;
    spinner_bg: any;
    spinner_empty: boolean;
    spinner_group: any;
    spinner_height: number;
    spinner_width: number;
    str: any;
    teaser: any;
    tech_level: any;
    textures: any;
    timestamp: any;
    w: number;
    y_offset: number;
    BuildNoSpinner(): any;
    BuildWithSpinner(horizontal: any): any;
    GetIndexForSkin(skin: any): any;
    GetSkinAtIndex(idx: any): any;
    GetSkinOptions(): any;
    GetSkinsList(): any;
    MakeSpinner(): any;
    OnControl(control: any, down: any): any;
    Refresh(): any;
    SetRecipe(recipe: any, owner: any): any;
  }
  function RecipePopup(...params: any[]): RecipePopup;
  export = RecipePopup;
}
declare module "widgets/radiobuttons" {
  interface RadioButtons {
    currentdata: any;
    onchangedfn: any;
    origfocus: any;
    origlosefocus: any;
    prevenabled: any;
    radiosz_x: any;
    radiosz_y: any;
    selectedIndex: any;
    wdg: any;
    DisableAllButtons(): any;
    DisableButton(data: any): any;
    EnableAllButtons(): any;
    EnableButton(data: any): any;
    GetSelectedData(): any;
    MakeRadioButton(): any;
    OnChanged(): any;
    SetOnChangedFn(fn: any): any;
    SetSelected(data: any): any;
    SetSelectedIndex(i: any): any;
    UpdateButtons(): any;
  }
  function RadioButtons(...params: any[]): RadioButtons;
  export = RadioButtons;
}
declare module "widgets/recipelist" {
  interface RecipeList {
    colour: any;
    controller_id: any;
    data: any;
    days: any;
    days_remaining: any;
    days_text: any;
    maxwidth: number;
    next_hint: any;
    num_days: any;
    num_hours: any;
    num_needed: any;
    options: any;
    prev_hint: any;
    recipe_data: any;
    recipes_spinner: any;
    res_data: any;
    satisfied_restrictions: any;
    selectedRecipe: any;
    show_icon: boolean;
    specials: any;
    specials_root: any;
    str: string;
    t: any;
    tag: any;
    tags: string;
    temp: any;
    BuildString(data: any): any;
    DisplayData(recipe_data: any): any;
    DoInit(): any;
    GetHelpText(): any;
    GetRecipeIndex(): any;
    GetRecipeName(): any;
    OnControl(control: any, down: any): any;
    SetData(recipes: any): any;
    SetHintStrings(prev: any, next: any): any;
    UpdateSelectedIngredients(selected_items: any): any;
  }
  function RecipeList(...params: any[]): RecipeList;
  export = RecipeList;
}
declare module "widgets/recipetile" {
  interface RecipeTile {
    image: any;
    recipe: any;
    SetCanBuild(canbuild: any): any;
    SetRecipe(recipe: any): any;
  }
  function RecipeTile(...params: any[]): RecipeTile;
  export = RecipeTile;
}
declare module "widgets/resurrectbutton" {
  interface ResurrectButton {
    hud_focus: any;
    CheckControl(control: any, down: any): any;
    DoResurrect(): any;
    OnShow(): any;
    SetScale(pos: any, y: any, z: any): any;
    ToggleHUDFocus(focus: any): any;
  }
  function ResurrectButton(...params: any[]): ResurrectButton;
  export = ResurrectButton;
}
declare module "widgets/ringmeter" {
  interface RingMeter {
    duration: any;
    fade: any;
    fadetime: any;
    flash: any;
    flashtime: any;
    k: any;
    pos: any;
    scale: any;
    scaletime: any;
    t: any;
    FadeOut(duration: any): any;
    FlashOut(duration: any): any;
    OnUpdate(dt: any): any;
    SetWorldPosition(pos: any): any;
    StartTimer(duration: any, starttime: any): any;
  }
  function RingMeter(...params: any[]): RingMeter;
  export = RingMeter;
}
declare module "widgets/sandover" {
  interface SandOver {
    alpha: any;
    blind: any;
    blindto: any;
    brightness: any;
    c: any;
    dirty: boolean;
    f: any;
    fade: any;
    fadeto: any;
    k: any;
    s: number;
    ApplyLevels(): any;
    BlindTo(blindto: any, instant: any): any;
    FadeTo(fadeto: any, instant: any): any;
    OnUpdate(dt: any): any;
  }
  function SandOver(...params: any[]): SandOver;
  export = SandOver;
}
declare module "widgets/sanitybadge" {
  interface SanityBadge {
    anim: string;
    arrowdir: any;
    fx: any;
    ghost: boolean;
    max: any;
    new_sanity_mode: any;
    penaltypercent: any;
    ratescale: any;
    sanity: any;
    sanitymode: any;
    transition_task: any;
    val: any;
    DoTransition(): any;
    OnUpdate(dt: any): any;
    PulseGreen(): any;
    PulseRed(): any;
    SetPercent(val: any, max: any, penaltypercent: any): any;
    SpawnTransitionFX(anim: any): any;
  }
  function SanityBadge(...params: any[]): SanityBadge;
  export = SanityBadge;
}
declare module "widgets/savingindicator" {
  interface SavingIndicator {
    EndSave(): any;
    SetScale(pos: any, y: any, z: any): any;
    StartSave(): any;
  }
  function SavingIndicator(...params: any[]): SavingIndicator;
  export = SavingIndicator;
}
declare module "widgets/screen" {
  interface Screen {
    handlers: any;
    last_focus: any;
    AddEventHandler(event: any, fn: any): any;
    GetHelpText(): any;
    HandleEvent(type: any): any;
    OnBecomeActive(): any;
    OnBecomeInactive(): any;
    OnCreate(): any;
    OnDestroy(): any;
    OnUpdate(dt: any): any;
    RemoveEventHandler(event: any, fn: any): any;
    SetDefaultFocus(): any;
  }
  function Screen(...params: any[]): Screen;
  export = Screen;
}
declare module "widgets/scripterrorwidget" {
  interface ScriptErrorWidget {
    entitiesundermouse: any;
    hover_inst: any;
    timeout: any;
    x: any;
    y: any;
    OnControl(control: any, down: any): any;
    OnUpdate(dt: any): any;
  }
  function ScriptErrorWidget(...params: any[]): ScriptErrorWidget;
  export = ScriptErrorWidget;
}
declare module "widgets/scrollablelist" {
  interface ScrollableList {
    click_y: any;
    controller_id: any;
    curr_step: any;
    didScrolling: any;
    focus_children: any;
    focused_index: number;
    focused_widget: any;
    index: any;
    item_height: any;
    item_padding: any;
    items: any;
    marker: any;
    max_step: any;
    newY: any;
    nextYPos: any;
    numShown: number;
    parent: any;
    pos: any;
    prev: any;
    prev_step: any;
    rel_focus_index: any;
    scaleX: any;
    scaleY: any;
    scaleZ: any;
    scaledArrowHeight: any;
    scaledHalflength: any;
    showing: boolean;
    step_size: any;
    t: any;
    view_offset: number;
    widgets_per_view: any;
    y: any;
    yInitial: any;
    AddItem(item: any, before_widget: any): any;
    Clear(): any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    DoDragScroll(): any;
    DoFocusHookups(): any;
    GetHelpText(): any;
    GetHierarchicalScale(): any;
    GetNearestStep(): any;
    GetNumberOfItems(): any;
    LayOutStaticWidgets(yInitial: any, skipFixUp: any, focusChildren: any): any;
    MoveMarkerToNearestStep(): any;
    OnControl(control: any, down: any, force: any): any;
    OnFocusMove(dir: any, down: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    RecalculateStepSize(): any;
    RefreshView(movemarker: any): any;
    RemoveItem(item: any): any;
    Scroll(amt: any, movemarker: any): any;
    ScrollToEnd(): any;
    SetFocus(): any;
    SetList(
      list: any,
      keepitems: any,
      scrollto: any,
      keeprelativefocusindex: any
    ): any;
    SetListItemHeight(ht: any): any;
    SetListItemPadding(pad: any): any;
    SetScrollPerClick(amt: any): any;
    SetScrollPerPage(amt: any): any;
  }
  function ScrollableList(...params: any[]): ScrollableList;
  export = ScrollableList;
}
declare module "widgets/serversettingstab" {
  interface ServerSettingsTab {
    claninfo: any;
    data: any;
    default_focus: any;
    encode_user_path: boolean;
    focus_forward: any;
    move_on_click: boolean;
    newhost_overlay: any;
    online: any;
    pvp: boolean;
    scale_on_focus: boolean;
    selected: any;
    server_data: any;
    DisplayClanControls(show: any): any;
    GetClanInfo(): any;
    GetEncodeUserPath(): any;
    GetGameMode(): any;
    GetMaxPlayers(): any;
    GetOnlineMode(): any;
    GetPVP(): any;
    GetPassword(): any;
    GetPrivacyType(): any;
    GetServerData(): any;
    GetServerDescription(): any;
    GetServerIntention(): any;
    GetServerName(): any;
    GetUseClusterPath(): any;
    OnControl(control: any, down: any): any;
    RefreshIntentionsButton(): any;
    RefreshPrivacyButtons(): any;
    SavePrevSlot(prevslot: any): any;
    SetEditingTextboxes(edit: any): any;
    SetOnlineWidgets(online: any): any;
    SetServerIntention(intention: any): any;
    ShowNewHostPicker(show: any): any;
    ShowServerIntention(show: any): any;
    UpdateDetails(slotnum: any, prevslot: any, fromDelete: any): any;
    UpdateModeSpinner(slotnum: any): any;
    VerifyValidClanSettings(): any;
    VerifyValidNewHostType(): any;
    VerifyValidServerIntention(): any;
    VerifyValidServerName(): any;
  }
  function ServerSettingsTab(...params: any[]): ServerSettingsTab;
  export = ServerSettingsTab;
}
declare module "widgets/skinannouncement" {
  interface SkinAnnouncement {
    alpha_fade: any;
    fadetime: any;
    general_alpha: any;
    h1: any;
    h2: any;
    lifetime: any;
    msg_colour: any;
    msg_txt: any;
    pos: any;
    skin_colour: any;
    skin_name: any;
    skin_txt: any;
    time_past_expiring: any;
    user_colour: any;
    user_name: any;
    w: any;
    w1: any;
    w2: any;
    ClearText(): any;
    CopyInfo(source: any): any;
    GetText(): any;
    GetTotalRegionSize(): any;
    OnDisable(): any;
    OnEnable(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnUpdate(dt: any): any;
    SetGeneralAlpha(alpha: any): any;
    SetGeneralFont(font: any): any;
    SetGeneralSize(size: any): any;
    SetMessageText(text: any): any;
    SetSkinAnnouncementInfo(
      user_name: any,
      user_colour: any,
      skin_name: any,
      alpha: any,
      lifetime: any,
      fadetime: any
    ): any;
    SetSkinText(text: any): any;
    SetSkinTextColour(r: any, g: any, b: any, a: any): any;
    UpdateSkinTextPosition(): any;
  }
  function SkinAnnouncement(...params: any[]): SkinAnnouncement;
  export = SkinAnnouncement;
}
declare module "widgets/skincollector" {
  interface SkinCollector {
    display_text_time: number;
    exit_callback: any;
    intro_done: boolean;
    last_speech_time: any;
    sleeped: boolean;
    sound_started: boolean;
    str: any;
    talking: boolean;
    text_string: any;
    Appear(): any;
    ClearSpeech(): any;
    Disappear(callbackfn: any): any;
    OnUpdate(dt: any): any;
    QuitTalking(): any;
    Say(text: any, rarity: any, name: any, number: any): any;
    Sleep(): any;
    Snap(): any;
    Wake(): any;
  }
  function SkinCollector(...params: any[]): SkinCollector;
  export = SkinCollector;
}
declare module "widgets/skinsandequipmentpuppet" {
  interface SkinsAndEquipmentPuppet {
    base: any;
    character: any;
    clothing: any;
    has_base: any;
    has_body: any;
    name: any;
    prefabOk: any;
    timetonewanim: any;
    DoInit(colour: any): any;
    InitSkins(player_data: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnUpdate(dt: any): any;
    SetHat(hat: any): any;
    SetTool(tool: any): any;
    SetTorso(torso: any): any;
    StartAnimUpdate(): any;
  }
  function SkinsAndEquipmentPuppet(...params: any[]): SkinsAndEquipmentPuppet;
  export = SkinsAndEquipmentPuppet;
}
declare module "widgets/skinspuppet" {
  interface SkinsPuppet {
    base_build: any;
    base_skin: any;
    body: any;
    current_idle_anim: any;
    currentanimbank: any;
    feet: any;
    hand: any;
    legs: any;
    looping: boolean;
    play_non_idle_emotes: any;
    prefabname: any;
    previousbank: any;
    queued_change_slot: string;
    r: any;
    scarecrow_pose: any;
    shadow: any;
    skindata: any;
    skindata_skins: any;
    time_to_change_emote: number;
    time_to_idle_emote: any;
    AddShadow(): any;
    DoChangeEmote(): any;
    DoEmote(emote: any, loop: any, force: any): any;
    DoIdleEmote(): any;
    EmoteUpdate(dt: any): any;
    SetCharacter(character: any): any;
    SetSkins(
      prefabname: any,
      base_item: any,
      clothing_names: any,
      skip_change_emote: any,
      skinmode: any
    ): any;
  }
  function SkinsPuppet(...params: any[]): SkinsPuppet;
  export = SkinsPuppet;
}
declare module "widgets/snapshottab" {
  interface SnapshotTab {
    OnControl: any;
    day_text: any;
    has_more: any;
    has_scrollbar: any;
    header: any;
    multi_level: any;
    online_mode: any;
    popup: any;
    save_slot: any;
    server_data: any;
    session_id: any;
    snapshot_infos: any;
    snapshot_page_row_root: any;
    snapshot_page_scroll_root: any;
    snapshot_scroll_list: any;
    snapshot_widgets: any;
    snapshots: any;
    tile_scale_x: any;
    tile_w: number;
    use_cluster_path: any;
    widgets_per_view: any;
    ListSnapshots(force: any): any;
    MakeSnapshotsMenu(): any;
    OnClickSnapshot(snapshot_num: any): any;
    RefreshSnapshots(): any;
    SetSaveSlot(save_slot: any, prev_slot: any, fromDelete: any): any;
  }
  function SnapshotTab(...params: any[]): SnapshotTab;
  export = SnapshotTab;
}
declare module "widgets/speechbubble" {
  interface SpeechBubble {
    cb: any;
    cg: any;
    cr: any;
    face_y: any;
    h: any;
    max_x: any;
    max_y: any;
    min_d: any;
    min_x: any;
    min_y: any;
    raw_size_x: any;
    raw_size_y: any;
    raw_x: any;
    raw_y: any;
    root_x: any;
    root_y: any;
    screenHeight: any;
    screenWidth: any;
    screen_scale_x: any;
    screen_scale_y: any;
    size_x: any;
    size_y: any;
    symbol: any;
    tail_hAnchor: any;
    tail_xOffset: number;
    tail_xScale: number;
    tail_yOffset: any;
    tail_yScale: number;
    target: any;
    w: any;
    x: any;
    y: any;
    OnHide(): any;
    OnShow(): any;
    OnUpdate(): any;
    SetFaceImage(atlas: any, tex: any): any;
    SetTarget(target: any, symbol: any): any;
    SetText(text: any): any;
    SetTint(r: any, g: any, b: any, a: any): any;
  }
  function SpeechBubble(...params: any[]): SpeechBubble;
  export = SpeechBubble;
}
declare module "widgets/spinner" {
  interface Spinner {
    DebugPickers: any;
    SetHasModification: any;
    changed_image: any;
    changing: boolean;
    chars: any;
    controller_id: any;
    enableWrap: any;
    hints_enabled: boolean;
    left_hint: any;
    newSelection: any;
    oldSelection: any;
    onchangedfn: any;
    onclick: any;
    options: any;
    right_hint: any;
    selectedIndex: any;
    selected_colour: any;
    selected_image: any;
    selected_text: any;
    t: any;
    textcolour: any;
    updating: boolean;
    w: any;
    width: any;
    AddControllerHints(): any;
    Changed(oldSelection: any): any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    Disable(): any;
    Enable(): any;
    EnablePendingModificationBackground(): any;
    GetHelpText(): any;
    GetSelected(): any;
    GetSelectedData(): any;
    GetSelectedImage(): any;
    GetSelectedIndex(): any;
    GetSelectedText(): any;
    GetText(): any;
    GetWidth(): any;
    Layout(): any;
    MaxIndex(): any;
    MinIndex(): any;
    Next(noclicksound: any): any;
    OnChanged(selected: any, old: any): any;
    OnControl(control: any, down: any): any;
    OnFocusMove(dir: any, down: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnNext(): any;
    OnPrev(): any;
    Prev(noclicksound: any): any;
    SetFont(font: any): any;
    SetOnChangedFn(fn: any): any;
    SetOnClick(fn: any): any;
    SetOptions(options: any): any;
    SetSelected(data: any): any;
    SetSelectedIndex(idx: any): any;
    SetTextColour(r: any, g: any, b: any, a: any): any;
    SetTextHAlign(align: any): any;
    SetTextSize(sz: any): any;
    SetTextVAlign(align: any): any;
    SetWrapEnabled(enable: any): any;
    UpdateBG(): any;
    UpdateState(): any;
    UpdateText(msg: any): any;
  }
  function Spinner(...params: any[]): Spinner;
  export = Spinner;
}
declare module "widgets/statusdisplays" {
  interface StatusDisplays {
    arrow: any;
    arrowdir: any;
    craft_hide: any;
    health: any;
    healthmax: any;
    healthpenalty: any;
    isghostmode: boolean;
    max: any;
    modetask: any;
    oldpenalty: any;
    onwerenessdelta: any;
    percent: any;
    pet_heart: any;
    pethealthbar: any;
    queuedhealthmax: any;
    rezbuttontask: any;
    symbol: any;
    visiblemode: any;
    wereness: any;
    AddBeaverness(): any;
    AddPet(): any;
    AddWereness(): any;
    BeavernessDelta(): any;
    EnableResurrect(enable: any): any;
    GetResurrectButton(): any;
    HealthDelta(data: any): any;
    HideStatusNumbers(): any;
    HungerDelta(data: any): any;
    Layout(): any;
    MoistureDelta(data: any): any;
    OnUpdate(dt: any): any;
    RefreshPetHealth(): any;
    RemoveBeaverness(): any;
    RemoveWereness(): any;
    SanityDelta(data: any): any;
    SetBeaverMode(): any;
    SetBeavernessPercent(): any;
    SetGhostMode(ghostmode: any): any;
    SetHealthPercent(pct: any): any;
    SetHungerPercent(pct: any): any;
    SetMoisturePercent(pct: any): any;
    SetSanityPercent(pct: any): any;
    SetWereMode(weremode: any, nofx: any): any;
    SetWerenessPercent(pct: any): any;
    ShowStatusNumbers(): any;
    ToggleCrafting(hide: any): any;
    UpdateMode(): any;
    WerenessDelta(data: any): any;
  }
  function StatusDisplays(...params: any[]): StatusDisplays;
  export = StatusDisplays;
}
declare module "widgets/cravingsstatus" {
  interface CravingsStatus {
    blink: any;
    level: any;
    meter: any;
    nextlevel: any;
    nextmouthlevel: any;
    Blink(val: any): any;
    OnUpdate(dt: any): any;
    SetLevel(level: any): any;
    SetMeter(percent: any): any;
    SetMouth(mouthlevel: any): any;
    ShakeScreen(level: any): any;
  }
  function CravingsStatus(...params: any[]): CravingsStatus;
  export = CravingsStatus;
}
declare module "widgets/tab" {
  interface Tab {
    alternatehighlighted: boolean;
    applychange: any;
    change_scale: any;
    change_texture: any;
    delay: any;
    highlighted: boolean;
    highlightnum: any;
    overlayshow: boolean;
    selected: boolean;
    AlternateHighlight(num: any, instant: any): any;
    Deselect(): any;
    HideOverlay(): any;
    Highlight(num: any, instant: any, alt: any): any;
    OnControl(control: any, down: any): any;
    Overlay(): any;
    Select(): any;
    UnHighlight(instant: any): any;
  }
  function Tab(...params: any[]): Tab;
  export = Tab;
}
declare module "widgets/tabgroup" {
  interface TabGroup {
    idx: any;
    numtabs: number;
    offset: any;
    scalar: any;
    selected: any;
    tab: any;
    AddTab(
      name: any,
      atlas: any,
      icon_atlas: any,
      icon: any,
      imnorm: any,
      imselected: any,
      imhighlight: any,
      imalthighlight: any,
      imoverlay: any,
      onselect: any,
      ondeselect: any,
      collapsed: any
    ): any;
    DeselectAll(): any;
    GetCurrentIdx(): any;
    GetFirstIdx(): any;
    GetLastIdx(): any;
    GetNextIdx(): any;
    GetNumTabs(): any;
    GetPrevIdx(): any;
    HideTab(tab: any): any;
    OnTabsChanged(): any;
    OpenTab(idx: any): any;
    ShowTab(tab: any): any;
  }
  function TabGroup(...params: any[]): TabGroup;
  export = TabGroup;
}
declare module "widgets/targetindicator" {
  interface TargetIndicator {
    alpha: any;
    angle: any;
    angleToTarget: any;
    dist: any;
    downAngle: any;
    downVector: any;
    ending: any;
    h: number;
    h0: any;
    h1: any;
    indicatorAngle: any;
    isCharacterState1: any;
    isCharacterState2: any;
    isCharacterState3: any;
    isGhost: any;
    location: any;
    scale: any;
    screenHeight: any;
    screenWidth: any;
    starting: any;
    userflags: any;
    w: number;
    w0: any;
    w1: any;
    x: any;
    y: any;
    z: any;
    GetAvatar(): any;
    GetAvatarAtlas(): any;
    GetTarget(): any;
    GetTargetIndicatorAlpha(dist: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnUpdate(): any;
    PositionArrow(): any;
    PositionLabel(): any;
    UpdatePosition(targX: any, targZ: any): any;
  }
  function TargetIndicator(...params: any[]): TargetIndicator;
  export = TargetIndicator;
}
declare module "widgets/teammatehealthbadge" {
  interface TeammateHealthBadge {
    arrowdir: number;
    percent: any;
    pet_heart: any;
    pethealthbar: any;
    player: any;
    symbol: any;
    userid: any;
    warning: any;
    AddPet(): any;
    IsShowingPet(): boolean;
    RefreshPetHealth(): any;
    RefreshStatus(): any;
    RemovePetHealth(): any;
    SetPercent(val: any): any;
    SetPlayer(player: any): any;
  }
  function TeammateHealthBadge(...params: any[]): TeammateHealthBadge;
  export = TeammateHealthBadge;
}
declare module "widgets/teamstatusbars" {
  interface TeamStatusBars {
    num_pets: number;
    pet_spacing: any;
    player_listing: any;
    prev_num_bars: any;
    respositioning: boolean;
    spacing: any;
    x: number;
    y: any;
    HideStatusNumbers(): any;
    OnUpdate(dt: any): any;
    RespostionBars(): any;
    SetPercent(val: any, max: any, penaltypercent: any): any;
    ShowStatusNumbers(): any;
  }
  function TeamStatusBars(...params: any[]): TeamStatusBars;
  export = TeamStatusBars;
}
declare module "widgets/text" {
  interface Text {
    DebugPickers: any;
    colour: any;
    first: any;
    font: any;
    found_white: boolean;
    line: any;
    original_size: any;
    scale: any;
    shrink_in_progress: boolean;
    size: any;
    string: any;
    target_font_size: any;
    tempmaxwidth: any;
    w: any;
    words: any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    EnableWhitespaceWrap(enable: any): any;
    EnableWordWrap(enable: any): any;
    GetColour(): any;
    GetRegionSize(): any;
    GetSize(): any;
    GetString(): any;
    RemoveAutoSizing(): any;
    ResetRegionSize(): any;
    SetAlpha(a: any): any;
    SetAutoSizingString(str: any, max_width: any, allow_scaling_up: any): any;
    SetColour(r: any, g: any, b: any, a: any): any;
    SetFadeAlpha(a: any, skipChildren: any): any;
    SetFont(font: any): any;
    SetHAlign(anchor: any): any;
    SetHorizontalSqueeze(squeeze: any): any;
    SetMultilineTruncatedString(
      str: any,
      maxlines: any,
      maxwidth: any,
      maxcharsperline: any,
      ellipses: any,
      shrink_to_fit: any
    ): any;
    SetRegionSize(w: any, h: any): any;
    SetSize(sz: any): any;
    SetString(str: any): any;
    SetTruncatedString(
      str: any,
      maxwidth: any,
      maxchars: any,
      ellipses: any
    ): any;
    SetVAlign(anchor: any): any;
  }
  function Text(...params: any[]): Text;
  export = Text;
}
declare module "widgets/textbutton" {
  interface TextButton {
    GetSize(): any;
    SetColour(r: any, g: any, b: any, a: any): any;
    SetOverColour(r: any, g: any, b: any, a: any): any;
    SetText(msg: any): any;
  }
  function TextButton(...params: any[]): TextButton;
  export = TextButton;
}
declare module "widgets/textedit" {
  interface TextEdit {
    activetex: any;
    allow_newline: any;
    apply_helptext: any;
    atlas: any;
    cancel_helptext: any;
    clipboard: any;
    controller_id: any;
    cursor_pos: any;
    edit_helptext: any;
    edit_text_color: any;
    editing: boolean;
    editing_enter_down: boolean;
    enable_accept_control: any;
    focusedtex: any;
    focusimage: any;
    force_edit: any;
    format: any;
    idle_text_color: any;
    invalidchars: any;
    limit: any;
    new_str: any;
    nextTextEditWidget: any;
    nextWidg: any;
    overflow: any;
    pad_y: any;
    pasting: boolean;
    prediction_widget: any;
    prompt: any;
    regionlimit: any;
    res: string;
    sx: any;
    sy: any;
    t: any;
    unfocusedtex: any;
    unformatted: any;
    validchars: any;
    AddWordPredictionDictionary(dictionary: any): any;
    ApplyWordPrediction(prediction_index: any): any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    DoHoverImage(): any;
    DoIdleImage(): any;
    DoSelectedImage(): any;
    EnableRegionSizeLimit(enable: any): any;
    EnableScrollEditWindow(enable: any): any;
    EnableWordPrediction(layout: any, dictionary: any): any;
    FormatString(str: any): any;
    GetHelpText(): any;
    GetLineEditString(): any;
    HasExclusiveHelpText(): boolean;
    OnControl(control: any, down: any): any;
    OnDestroy(): any;
    OnFocusMove(dir: any, down: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnMouseButton(button: any, down: any, x: any, y: any): any;
    OnProcess(): any;
    OnRawKey(key: any, down: any): any;
    OnStopForceProcessTextInput(): any;
    OnTextInput(text: any): any;
    SetAllowNewline(allow_newline: any): any;
    SetCharacterFilter(validchars: any): any;
    SetEditCursorColour(r: any, g: any, b: any, a: any): any;
    SetEditTextColour(r: any, g: any, b: any, a: any): any;
    SetEditing(editing: any): any;
    SetFocusedImage(
      widget: any,
      atlas: any,
      unfocused: any,
      hovered: any,
      active: any
    ): any;
    SetForceEdit(force: any): any;
    SetForceUpperCase(to: any): any;
    SetFormat(format: any): any;
    SetHelpTextApply(str: any): any;
    SetHelpTextCancel(str: any): any;
    SetHelpTextEdit(str: any): any;
    SetIdleTextColour(r: any, g: any, b: any, a: any): any;
    SetInvalidCharacterFilter(invalidchars: any): any;
    SetOnTabGoToTextEditWidget(texteditwidget: any): any;
    SetPassControlToScreen(control: any, pass: any): any;
    SetPassword(to: any): any;
    SetString(str: any): any;
    SetTextConversion(in_char: any, out_char: any): any;
    SetTextLengthLimit(limit: any): any;
    SetTextPrompt(prompt_text: any, colour: any): any;
    ValidateChar(text: any): any;
    ValidatedString(str: any): any;
  }
  function TextEdit(...params: any[]): TextEdit;
  export = TextEdit;
}
declare module "widgets/texteditlinked" {
  interface TextEditLinked {
    clipboard: any;
    last_text_edit: any;
    next_text_edit: any;
    pasting: boolean;
    str: any;
    OnRawKey(key: any, down: any): any;
    OnTextInput(text: any): any;
    SetLastTextEdit(last_te: any): any;
    SetNextTextEdit(next_te: any): any;
  }
  function TextEditLinked(...params: any[]): TextEditLinked;
  export = TextEditLinked;
}
declare module "widgets/threeslice" {
  interface ThreeSlice {
    atlas: any;
    dist: any;
    end_cap_d: any;
    end_cap_size: any;
    endcaph: any;
    endcapw: any;
    fill_dist: any;
    filler: any;
    filler_scale: any;
    filler_size: any;
    fillerh: any;
    fillerw: any;
    flip_end_cap: any;
    num_filler: any;
    parts: any;
    start_cap_d: any;
    start_cap_size: any;
    startcaph: any;
    startcapw: any;
    Flow(width: any, height: any, horizontal: any): any;
    ManualFlow(num_filler: any, horizontal: any): any;
    RemoveParts(): any;
    SetImages(atlas: any, cap: any, filler: any, end_cap: any): any;
  }
  function ThreeSlice(...params: any[]): ThreeSlice;
  export = ThreeSlice;
}
declare module "widgets/tilebg" {
  interface TileBG {
    bgs: any;
    end1: any;
    end2: any;
    end_h: number;
    end_w: number;
    h: any;
    length: any;
    numtiles: any;
    sep_h: number;
    sep_w: number;
    seps: any;
    stepsize: any;
    tile_h: number;
    tile_w: number;
    w: any;
    GetSepSize(): any;
    GetSize(): any;
    GetSlotPos(k: any): any;
    GetSlotSize(): any;
    SetNumTiles(numtiles: any): any;
  }
  function TileBG(...params: any[]): TileBG;
  export = TileBG;
}
declare module "widgets/quagmiretilebg" {
  interface QuagmireTileBG {
    seps: any;
    SetNumTiles(numtiles: any): any;
  }
  function QuagmireTileBG(...params: any[]): QuagmireTileBG;
  export = QuagmireTileBG;
}
declare module "widgets/topmodspanel" {
  interface TopModsPanel {
    current_speed: number;
    current_x_pos: any;
    h: any;
    jsonresult: any;
    mods_tab: any;
    picks: any;
    pos: any;
    randomPicks: any;
    settled: boolean;
    start_x_pos: any;
    started: boolean;
    status: any;
    target_x_pos: any;
    title: any;
    url: any;
    w: any;
    DoFocusHookups(): any;
    GenerateRandomPicks(num: any, numrange: any): any;
    HidePanel(): any;
    MoreWorkshopMods(): any;
    OnStatsQueried(result: any, isSuccessful: any, resultCode: any): any;
    OnUpdate(dt: any): any;
    SetModsTab(tab: any): any;
    ShowPanel(): any;
  }
  function TopModsPanel(...params: any[]): TopModsPanel;
  export = TopModsPanel;
}
declare module "widgets/truescrolllist" {
  interface TrueScrollList {
    DRAG_SCROLL_X_THRESHOLD: number;
    OnLoseFocus: any;
    blend_weight: number;
    can_scroll_more: any;
    controller_id: any;
    current_scroll_pos: number;
    did_parent_move: any;
    displayed_start_index: any;
    down_button: any;
    end_pos: number;
    end_y: any;
    focused_item_index: any;
    force_reposition: boolean;
    image: any;
    is_past_first_row: any;
    items: any;
    last_scroll_pos: any;
    line_height: any;
    marker: any;
    move_on_click: boolean;
    nudge_y: any;
    position_marker: any;
    prev_focus: any;
    row_num: any;
    row_offset: any;
    scale_on_focus: boolean;
    scroll_amount: any;
    scroll_bar: any;
    scroll_bar_container: any;
    scroll_bar_line: any;
    scroll_value: any;
    show_stuff: boolean;
    start_index: any;
    start_y: any;
    t: any;
    target: any;
    target_scroll_pos: number;
    total_rows: any;
    up_button: any;
    BuildScrollBar(): any;
    CanScroll(): boolean;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    DoDragScroll(): any;
    GetHelpText(): any;
    GetIndexOfFirstVisibleWidget(): any;
    GetListWidgets(): any;
    GetPositionScale(): any;
    GetSlideRange(): any;
    GetSlideStart(): any;
    OnControl(control: any, down: any): any;
    OnFocusMove(dir: any, down: any): any;
    OnUpdate(dt: any): any;
    OnWidgetFocus(focused_widget: any): any;
    RefreshView(): any;
    ResetScroll(): any;
    Scroll(scroll_step: any): any;
    ScrollToDataIndex(index: any): any;
    ScrollToWidgetIndex(index: any): any;
    SetItemsData(items: any): any;
  }
  function TrueScrollList(...params: any[]): TrueScrollList;
  export = TrueScrollList;
}
declare module "widgets/uianim" {
  interface UIAnim {
    DebugDraw_AddSection(dbui: any, panel: any): any;
    GetAnimState(): any;
    SetFacing(dir: any): any;
  }
  function UIAnim(...params: any[]): UIAnim;
  export = UIAnim;
}
declare module "widgets/uianimbutton" {
  interface UIAnimButton {
    disabledanimation: any;
    down: boolean;
    downanimation: any;
    focusanimation: any;
    idleanimation: any;
    onfocus: any;
    selectedanimation: any;
    OnControl(control: any, down: any): any;
    OnDisable(): any;
    OnEnable(): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnSelect(): any;
    OnUnselect(): any;
    PushIdleAnim(idle_anim: any): any;
    SetAnimations(
      idle_anim: any,
      focus_anim: any,
      disabled_anim: any,
      down_anim: any,
      selected_anim: any,
      loop: any
    ): any;
    SetDisabledAnim(disabled_anim: any, loop: any): any;
    SetDownAnim(down_anim: any, loop: any): any;
    SetFocusAnim(focus_anim: any, loop: any): any;
    SetIdleAnim(idle_anim: any, loop: any): any;
    SetLoop(animation_name: any, loop: any): any;
    SetOnFocus(fn: any): any;
    SetSelectedAnim(selected_anim: any, loop: any): any;
  }
  function UIAnimButton(...params: any[]): UIAnimButton;
  export = UIAnimButton;
}
declare module "widgets/uiclock" {
  interface UIClock {
    cycles_lived: any;
    dark: boolean;
    day: any;
    day_text: any;
    dusk: any;
    grow_time: any;
    k: any;
    moon_syms: any;
    nextseg: any;
    night: any;
    prevseg: any;
    scale: any;
    shrink_time: any;
    wait_time: any;
    CloseCaveClock(): any;
    IsCaveClock(): boolean;
    OnClockSegsChanged(data: any): any;
    OnClockTick(data: any): any;
    OnCyclesChanged(cycles: any): any;
    OnGainFocus(): any;
    OnLoseFocus(): any;
    OnMoonPhaseChanged2(data: any): any;
    OnPhaseChanged(phase: any): any;
    OnUpdate(dt: any): any;
    OpenCaveClock(): any;
    ShowMoon(): any;
    UpdateCaveClock(owner: any): any;
    UpdateDayString(): any;
    UpdateWorldString(): any;
  }
  function UIClock(...params: any[]): UIClock;
  export = UIClock;
}
declare module "widgets/video" {
  interface Video {
    h: any;
    h0: any;
    scalex: any;
    scaley: any;
    tint: any;
    w: any;
    w0: any;
    GetSize(): any;
    IsDone(): boolean;
    Load(filename: any): any;
    Pause(): any;
    Play(): any;
    ScaleToSize(w: any, h: any): any;
    SetHRegPoint(anchor: any): any;
    SetSize(w: any, h: any): any;
    SetTint(r: any, g: any, b: any, a: any): any;
    SetVRegPoint(anchor: any): any;
    Stop(): any;
  }
  function Video(...params: any[]): Video;
  export = Video;
}
declare module "widgets/votedialog" {
  interface VoteDialog {
    canvote: boolean;
    controller_hint_delay: any;
    controllerscaling: any;
    controllerselection: any;
    controllervotescreen: any;
    current_root_y_pos: any;
    current_speed: number;
    fill_dist: any;
    num_options: any;
    old_num_options: any;
    options: any;
    settled: boolean;
    start_root_y_pos: any;
    started: boolean;
    startername: any;
    target_root_y_pos: any;
    titlefmt: any;
    CheckControl(control: any, down: any): any;
    CloseControllerVoteScreen(): any;
    GetDisplayName(clientrecord: any): any;
    HideDialog(): any;
    IsControllerVoteScreenOpen(): boolean;
    IsOpen(): boolean;
    OnCloseControllerVoteScreen(selection: any): any;
    OnOpenControllerVoteScreen(): any;
    OnUpdate(dt: any): any;
    RefreshController(): any;
    RefreshLayout(): any;
    SetControllerInstruction(): any;
    ShowDialog(option_data: any): any;
    UpdateOptions(option_data: any, norefresh: any): any;
    UpdateSelection(selected_index: any, canvote: any): any;
    UpdateTimer(remaining: any): any;
  }
  function VoteDialog(...params: any[]): VoteDialog;
  export = VoteDialog;
}
declare module "widgets/waitingforplayers" {
  interface WaitingForPlayers {
    ClientObjs: any;
    controller_id: any;
    local_user_id: any;
    players: any;
    prev_num_players: any;
    str: any;
    t: any;
    timeout_task: any;
    GetHelpText(): any;
    GetPlayerTable(): any;
    IsServerFull(): boolean;
    OnControl(control: any, down: any): any;
    Refresh(force: any): any;
    RefreshPlayersReady(): any;
  }
  function WaitingForPlayers(...params: any[]): WaitingForPlayers;
  export = WaitingForPlayers;
}
declare module "widgets/werebadge" {
  interface WereBadge {
    anim: string;
    arrowdir: any;
    mode: any;
    rate: any;
    val: any;
    OnHide(): any;
    OnShow(): any;
    OnUpdate(dt: any): any;
    SetPercent(val: any): any;
    SpawnNewFX(): any;
    SpawnShatterFX(): any;
    UpdateArrow(): any;
  }
  function WereBadge(...params: any[]): WereBadge;
  export = WereBadge;
}
declare module "widgets/widget" {
  interface Widget {
    ImageButton: any;
    Text: any;
    callbacks: any;
    can_fade_alpha: boolean;
    children: any;
    dest: any;
    enabled: boolean;
    focus: boolean;
    focus_flow: any;
    focus_flow_args: any;
    focus_target: boolean;
    followhandler: any;
    h: any;
    hover: any;
    hover_parent: any;
    hovertext: any;
    hovertext_bg: any;
    hovertext_root: any;
    indent_str: any;
    inst: any;
    n_pos: any;
    name: any;
    next_in_tab_order: any;
    o_pos: any;
    ongainfocusfn: any;
    onlosefocusfn: any;
    parent_scroll_list: any;
    scale: any;
    shown: boolean;
    str: any;
    sx: any;
    sy: any;
    sz: any;
    tooltip: any;
    tooltip_pos: any;
    tooltipcolour: any;
    w: any;
    widg: any;
    widget: any;
    AddChild(child: any): any;
    CancelMoveTo(run_complete_fn: any): any;
    CancelRotateTo(run_complete_fn: any): any;
    ClearFocus(): any;
    ClearFocusDirs(): any;
    ClearHoverText(): any;
    DebugDraw_AddSection(dbui: any, panel: any): any;
    Disable(): any;
    Enable(): any;
    FollowMouse(): any;
    ForceStartWallUpdating(): any;
    ForceStopWallUpdating(): any;
    GetChildren(): any;
    GetDeepestFocus(): any;
    GetFocusChild(): any;
    GetLocalPosition(): any;
    GetLooseScale(): any;
    GetParent(): any;
    GetPosition(): any;
    GetScale(): any;
    GetStr(indent: any): any;
    GetTooltip(): any;
    GetTooltipColour(): any;
    GetTooltipPos(): any;
    GetWorldPosition(): any;
    GetWorldScale(): any;
    Hide(): any;
    HookCallback(event: any, fn: any): any;
    IsDeepestFocus(): boolean;
    IsEditing(): boolean;
    IsEnabled(): boolean;
    IsVisible(): boolean;
    Kill(): any;
    KillAllChildren(): any;
    MoveTo(from: any, to: any, time: any, fn: any): any;
    MoveToBack(): any;
    MoveToFront(): any;
    Nudge(offset: any): any;
    OnControl(control: any, down: any): any;
    OnDisable(): any;
    OnEnable(): any;
    OnFocusMove(dir: any, down: any): any;
    OnGainFocus(): any;
    OnHide(): any;
    OnLoseFocus(): any;
    OnMouseButton(button: any, down: any, x: any, y: any): any;
    OnRawKey(key: any, down: any): any;
    OnShow(): any;
    OnStopForceProcessTextInput(): any;
    OnTextInput(text: any): any;
    RemoveChild(child: any): any;
    RotateTo(from: any, to: any, time: any, fn: any, infinite: any): any;
    ScaleTo(from: any, to: any, time: any, fn: any): any;
    SetCanFadeAlpha(fade: any, skipChildren: any): any;
    SetClickable(val: any): any;
    SetFadeAlpha(alpha: any, skipChildren: any): any;
    SetFocus(): any;
    SetFocusChangeDir(dir: any, widget: any): any;
    SetFocusFromChild(from_child: any): any;
    SetHAnchor(anchor: any): any;
    SetHoverText(text: any, params: any): any;
    SetMaxPropUpscale(val: any): any;
    SetOnGainFocus(fn: any): any;
    SetOnLoseFocus(fn: any): any;
    SetParentScrollList(list: any): any;
    SetPosition(pos: any, y: any, z: any): any;
    SetRotation(angle: any): any;
    SetScale(pos: any, y: any, z: any): any;
    SetScaleMode(mode: any): any;
    SetScissor(x: any, y: any, w: any, h: any): any;
    SetTooltip(str: any): any;
    SetTooltipColour(r: any, g: any, b: any, a: any): any;
    SetTooltipPos(pos: any, pos_y: any, pos_z: any): any;
    SetVAnchor(anchor: any): any;
    Show(): any;
    StartUpdating(): any;
    StopFollowMouse(): any;
    StopUpdating(): any;
    TintTo(from: any, to: any, time: any, fn: any): any;
    UpdatePosition(x: any, y: any): any;
  }
  function Widget(...params: any[]): Widget;
  export = Widget;
}
declare module "widgets/wordpredictionwidget" {
  interface WordPredictionWidget {
    active_prediction_btn: any;
    offset: any;
    prediction: any;
    prediction_btns: any;
    prev_active_prediction: any;
    Dismiss(): any;
    IsMouseOnly(): boolean;
    OnControl(control: any, down: any): any;
    OnRawKey(key: any, down: any): any;
    OnTextInput(text: any): any;
    RefreshPredictions(): any;
    ResolvePrediction(prediction_index: any): any;
  }
  function WordPredictionWidget(...params: any[]): WordPredictionWidget;
  export = WordPredictionWidget;
}
declare module "widgets/worldresettimer" {
  interface WorldResetTimer {
    age: any;
    controller_id: any;
    default_focus: any;
    reset_button: any;
    reset_hold_time: number;
    reset_text: any;
    started: boolean;
    y_pos: any;
    OnHide(): any;
    OnShow(): any;
    OnUpdate(dt: any): any;
    RefreshButtons(): any;
    RefreshLayout(): any;
    Reset(): any;
    StartTimer(): any;
    StopTimer(): any;
    UpdateCountdown(time: any): any;
    UpdateCycles(cycles: any): any;
  }
  function WorldResetTimer(...params: any[]): WorldResetTimer;
  export = WorldResetTimer;
}
declare module "widgets/writeablewidget" {
  interface WriteableWidget {
    isopen: boolean;
    writeable: any;
    Close(): any;
    GetText(): any;
    OnBecomeActive(): any;
    OnControl(control: any, down: any): any;
    OverrideText(text: any): any;
    SetValidChars(chars: any): any;
  }
  function WriteableWidget(...params: any[]): WriteableWidget;
  export = WriteableWidget;
}
