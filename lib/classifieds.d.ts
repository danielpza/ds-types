declare namespace Classified {
  interface attunable_classified {
    inst: any;
    source_guid: any;
    _parent: any;
    IsAttunableType: boolean;
    persists: boolean;
    AttachToPlayer: any;
  }

  interface constructionsite_classified {
    inst: any;
    _slotcounts: any;
    GetSlotCount: any;
    SetSlotCount: any;
    persists: boolean;
  }

  interface container_classified {
    inst: any;
    _refreshtask: any;
    _busy: boolean;
    _itemspreview: any;
    _items: any;
    _itemspool: any;
    _slottasks: any;
    InitializeSlots: any;
    SetSlotItem: any;
    persists: boolean;
  }

  interface inventory_classified {
    inst: any;
    _refreshtask: any;
    _busy: boolean;
    _activeitem: any;
    _returningitem: any;
    _returncontainer: any;
    _returnslot: any;
    _itemspreview: any;
    _equipspreview: any;
    visible: any;
    heavylifting: any;
    _active: any;
    _items: any;
    _equips: any;
    _slottasks: any;
    SetActiveItem: any;
    SetSlotItem: any;
    SetSlotEquip: any;
    persists: boolean;
  }

  interface inventoryitem_classified {
    inst: any;
    image: any;
    atlas: any;
    cangoincontainer: any;
    canonlygoinpocket: any;
    src_pos: any;
    percentused: any;
    perish: any;
    recharge: any;
    rechargetime: any;
    deploymode: any;
    deployspacing: any;
    deployrestrictedtag: any;
    usegridplacer: any;
    attackrange: any;
    walkspeedmult: any;
    equiprestrictedtag: any;
    moisture: any;
    persists: boolean;
    SerializePercentUsed: any;
    SerializePerish: any;
    ForcePerishDirty: any;
    SerializeRecharge: any;
    SerializeRechargeTime: any;
  }

  interface lucy_classified {
    inst: any;
    string_list: any;
    string_id: any;
    sound_override: any;
    enabled: boolean;
    GetTalkSound: any;
    Say: any;
    SetTarget: any;
    timeouttask: any;
    istarget: any;
    persists: boolean;
  }

  interface player_classified {
    inst: any;
    _oldhealthpercent: number;
    currenthealth: any;
    maxhealth: any;
    healthpenalty: any;
    istakingfiredamage: any;
    istakingfiredamagelow: any;
    issleephealing: any;
    ishealthpulseup: any;
    ishealthpulsedown: any;
    _oldhungerpercent: number;
    currenthunger: any;
    maxhunger: any;
    ishungerpulseup: any;
    ishungerpulsedown: any;
    _oldsanitypercent: number;
    currentsanity: any;
    maxsanity: any;
    sanitypenalty: any;
    sanityratescale: any;
    issanitypulseup: any;
    issanitypulsedown: any;
    issanityghostdrain: any;
    _oldbeavernesspercent: number;
    currentbeaverness: any;
    isbeavernesspulseup: any;
    isbeavernesspulsedown: any;
    _oldtemperature: any;
    currenttemperature: any;
    currenttemperaturedata: any;
    _oldmoisture: number;
    moisture: any;
    maxmoisture: any;
    moistureratescale: any;
    sandstormlevel: any;
    _pausepredictiontask: any;
    pausepredictionframes: any;
    iscontrollerenabled: any;
    voteselection: any;
    votesquelched: any;
    ishudvisible: any;
    ismapcontrolsvisible: any;
    isactionsvisible: any;
    cameradistance: any;
    iscamerazoomed: any;
    camerasnap: any;
    camerashakemode: any;
    camerashaketime: any;
    camerashakespeed: any;
    camerashakescale: any;
    isfadein: any;
    fadetime: any;
    screenflash: any;
    wormholetravelevent: any;
    houndwarningevent: any;
    buildevent: any;
    builderdamagedevent: any;
    learnrecipeevent: any;
    techtrees: any;
    sciencebonus: any;
    magicbonus: any;
    ancientbonus: any;
    shadowbonus: any;
    ingredientmod: any;
    isfreebuildmode: any;
    recipes: any;
    bufferedbuilds: any;
    learnmapevent: any;
    repairevent: any;
    iswardrobepopupvisible: any;
    wardrobetarget: any;
    hasgift: any;
    hasgiftmachine: any;
    isgiftitempopupvisible: any;
    lastcombattarget: any;
    canattack: any;
    minattackperiod: any;
    attackedpulseevent: any;
    isattackedbydanger: any;
    isattackredirected: any;
    makefriendevent: any;
    feedincontainerevent: any;
    ridermount: any;
    ridersaddle: any;
    isridermounthurt: any;
    riderrunspeed: any;
    riderfasteronroad: any;
    touchstonetrackerused: any;
    isperformactionsuccess: any;
    isghostmode: any;
    actionmeter: any;
    actionmetertime: any;
    runspeed: any;
    externalspeedmultiplier: any;
    iscarefulwalking: any;
    isdeathbypk: any;
    deathcause: any;
    SetValue: any;
    PushPausePredictionFrames: any;
    AddMorgueRecord: any;
    SetTemperature: any;
    SetUsedTouchStones: any;
    SetGhostMode: any;
    ShowActions: any;
    ShowHUD: any;
    ShowWardrobePopUp: any;
    ShowGiftItemPopUp: any;
    EnableMapControls: any;
    persists: boolean;
  }

  interface writeable_classified {
    inst: any;
    persists: boolean;
  }
}

declare interface Classified {
  attunable_classified: Classified.attunable_classified;
  constructionsite_classified: Classified.constructionsite_classified;
  container_classified: Classified.container_classified;
  inventory_classified: Classified.inventory_classified;
  inventoryitem_classified: Classified.inventoryitem_classified;
  lucy_classified: Classified.lucy_classified;
  player_classified: Classified.player_classified;
  writeable_classified: Classified.writeable_classified;
}
