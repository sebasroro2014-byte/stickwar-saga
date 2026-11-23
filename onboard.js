"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ../core/dist/js-polyfills.js
  function isNativeFunction(func) {
    const val = typeof Function.prototype.toString === "function" ? Function.prototype.toString() : null;
    if (typeof val === "string" && val.indexOf("[native code]") >= 0) {
      return Function.prototype.toString.call(func).indexOf("[native code]") >= 0;
    }
    return false;
  }
  var init_js_polyfills = __esm({
    "../core/dist/js-polyfills.js"() {
      "use strict";
      init_pristine_globals();
    }
  });

  // ../core/dist/pristine-globals.js
  function getFreshGlobals() {
    if (freshGlobals === null) {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.documentElement.append(iframe);
      const freshWindow = iframe.contentWindow;
      freshGlobals = {
        Map: freshWindow.Map
      };
      iframe.remove();
    }
    return freshGlobals;
  }
  function pristineGlobal(name, isPristine) {
    const value = globalThis[name];
    if (value !== void 0 && value !== null && isPristine(value) || // Without a document (e.g. in a worker), there's no fresh realm to use.
    typeof document === "undefined") {
      return value;
    }
    return getFreshGlobals()[name];
  }
  var freshGlobals, PristineMap;
  var init_pristine_globals = __esm({
    "../core/dist/pristine-globals.js"() {
      "use strict";
      init_js_polyfills();
      freshGlobals = null;
      PristineMap = pristineGlobal("Map", (map) => isNativeFunction(map) && ["get", "set", "has", "delete", "clear", "forEach"].every((method) => typeof map.prototype[method] === "function" && isNativeFunction(map.prototype[method])));
    }
  });

  // src/onboard.ts
  init_pristine_globals();

  // src/utils.ts
  init_pristine_globals();

  // ../core/dist/index.js
  init_pristine_globals();

  // ../core/dist/build-info.js
  init_pristine_globals();
  var buildInfo = {
    versionNumber: "0.9.0-nightly.2026.11.23",
    versionName: "0.9.0-nightly.2026.11.23",
    versionChannel: "nightly",
    buildDate: "2026-11-23T00:14:07.962Z",
    commitHash: "1719d7db87842dc16382215d3f85a3bb785e7111"
  };

  // ../core/dist/public/config/index.js
  var config_exports = {};
  __export(config_exports, {
    AutoPlay: () => AutoPlay,
    BackgroundExecutionMode: () => BackgroundExecutionMode,
    ContextMenu: () => ContextMenu,
    DEFAULT_CONFIG: () => DEFAULT_CONFIG,
    DeviceFontRenderer: () => DeviceFontRenderer,
    GamepadButton: () => GamepadButton,
    Letterbox: () => Letterbox,
    LogLevel: () => LogLevel,
    NetworkingAccessMode: () => NetworkingAccessMode,
    OpenURLMode: () => OpenURLMode,
    PlayerRuntime: () => PlayerRuntime,
    RenderBackend: () => RenderBackend,
    ScrollingBehavior: () => ScrollingBehavior,
    UnmuteOverlay: () => UnmuteOverlay,
    WindowMode: () => WindowMode
  });
  init_pristine_globals();

  // ../core/dist/public/config/default.js
  init_pristine_globals();

  // ../core/dist/public/config/load-options.js
  init_pristine_globals();
  var AutoPlay;
  (function(AutoPlay2) {
    AutoPlay2["On"] = "on";
    AutoPlay2["Off"] = "off";
    AutoPlay2["Auto"] = "auto";
  })(AutoPlay || (AutoPlay = {}));
  var Letterbox;
  (function(Letterbox2) {
    Letterbox2["Off"] = "off";
    Letterbox2["Fullscreen"] = "fullscreen";
    Letterbox2["On"] = "on";
  })(Letterbox || (Letterbox = {}));
  var UnmuteOverlay;
  (function(UnmuteOverlay2) {
    UnmuteOverlay2["Visible"] = "visible";
    UnmuteOverlay2["Hidden"] = "hidden";
  })(UnmuteOverlay || (UnmuteOverlay = {}));
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2["Error"] = "error";
    LogLevel2["Warn"] = "warn";
    LogLevel2["Info"] = "info";
    LogLevel2["Debug"] = "debug";
    LogLevel2["Trace"] = "trace";
  })(LogLevel || (LogLevel = {}));
  var WindowMode;
  (function(WindowMode2) {
    WindowMode2["Window"] = "window";
    WindowMode2["Opaque"] = "opaque";
    WindowMode2["Transparent"] = "transparent";
    WindowMode2["Direct"] = "direct";
    WindowMode2["Gpu"] = "gpu";
  })(WindowMode || (WindowMode = {}));
  var RenderBackend;
  (function(RenderBackend2) {
    RenderBackend2["WebGpu"] = "webgpu";
    RenderBackend2["WgpuWebgl"] = "wgpu-webgl";
    RenderBackend2["Webgl"] = "webgl";
    RenderBackend2["Canvas"] = "canvas";
  })(RenderBackend || (RenderBackend = {}));
  var ContextMenu;
  (function(ContextMenu2) {
    ContextMenu2["On"] = "on";
    ContextMenu2["RightClickOnly"] = "rightClickOnly";
    ContextMenu2["Off"] = "off";
  })(ContextMenu || (ContextMenu = {}));
  var PlayerRuntime;
  (function(PlayerRuntime2) {
    PlayerRuntime2["AIR"] = "air";
    PlayerRuntime2["FlashPlayer"] = "flashPlayer";
  })(PlayerRuntime || (PlayerRuntime = {}));
  var OpenURLMode;
  (function(OpenURLMode2) {
    OpenURLMode2["Allow"] = "allow";
    OpenURLMode2["Confirm"] = "confirm";
    OpenURLMode2["Deny"] = "deny";
  })(OpenURLMode || (OpenURLMode = {}));
  var NetworkingAccessMode;
  (function(NetworkingAccessMode2) {
    NetworkingAccessMode2["All"] = "all";
    NetworkingAccessMode2["Internal"] = "internal";
    NetworkingAccessMode2["None"] = "none";
  })(NetworkingAccessMode || (NetworkingAccessMode = {}));
  var ScrollingBehavior;
  (function(ScrollingBehavior2) {
    ScrollingBehavior2["Always"] = "always";
    ScrollingBehavior2["Never"] = "never";
    ScrollingBehavior2["Smart"] = "smart";
  })(ScrollingBehavior || (ScrollingBehavior = {}));
  var DeviceFontRenderer;
  (function(DeviceFontRenderer2) {
    DeviceFontRenderer2["Embedded"] = "embedded";
    DeviceFontRenderer2["Canvas"] = "canvas";
  })(DeviceFontRenderer || (DeviceFontRenderer = {}));
  var BackgroundExecutionMode;
  (function(BackgroundExecutionMode2) {
    BackgroundExecutionMode2["None"] = "none";
    BackgroundExecutionMode2["MainThread"] = "mainThread";
  })(BackgroundExecutionMode || (BackgroundExecutionMode = {}));
  var GamepadButton;
  (function(GamepadButton2) {
    GamepadButton2["South"] = "south";
    GamepadButton2["East"] = "east";
    GamepadButton2["North"] = "north";
    GamepadButton2["West"] = "west";
    GamepadButton2["LeftTrigger"] = "left-trigger";
    GamepadButton2["LeftTrigger2"] = "left-trigger-2";
    GamepadButton2["RightTrigger"] = "right-trigger";
    GamepadButton2["RightTrigger2"] = "right-trigger-2";
    GamepadButton2["Select"] = "select";
    GamepadButton2["Start"] = "start";
    GamepadButton2["DPadUp"] = "dpad-up";
    GamepadButton2["DPadDown"] = "dpad-down";
    GamepadButton2["DPadLeft"] = "dpad-left";
    GamepadButton2["DPadRight"] = "dpad-right";
  })(GamepadButton || (GamepadButton = {}));

  // ../core/dist/public/config/default.js
  var DEFAULT_CONFIG = {
    allowScriptAccess: false,
    parameters: {},
    autoplay: AutoPlay.Auto,
    backgroundColor: null,
    letterbox: Letterbox.Fullscreen,
    unmuteOverlay: UnmuteOverlay.Visible,
    upgradeToHttps: true,
    compatibilityRules: true,
    favorFlash: true,
    warnOnUnsupportedContent: true,
    logLevel: LogLevel.Error,
    showSwfDownload: false,
    contextMenu: ContextMenu.On,
    // Backwards-compatibility option
    preloader: true,
    splashScreen: true,
    maxExecutionDuration: 15,
    base: null,
    menu: true,
    allowFullscreen: false,
    salign: "",
    fullScreenAspectRatio: "",
    forceAlign: false,
    quality: null,
    scale: "showAll",
    forceScale: false,
    frameRate: null,
    wmode: WindowMode.Window,
    publicPath: null,
    polyfills: true,
    playerVersion: null,
    preferredRenderer: null,
    openUrlMode: OpenURLMode.Allow,
    allowNetworking: NetworkingAccessMode.All,
    openInNewTab: null,
    socketProxy: [],
    fontSources: [],
    defaultFonts: {},
    credentialAllowList: [],
    playerRuntime: PlayerRuntime.FlashPlayer,
    gamepadButtonMapping: {},
    urlRewriteRules: [],
    scrollingBehavior: ScrollingBehavior.Smart,
    deviceFontRenderer: DeviceFontRenderer.Embedded,
    backgroundExecutionMode: BackgroundExecutionMode.MainThread
  };

  // src/utils.ts
  var DEFAULT_OPTIONS = {
    ...config_exports.DEFAULT_CONFIG,
    ruffleEnable: true,
    ignoreOptout: false,
    autostart: false,
    showReloadButton: false,
    swfTakeover: true
  };
  function enableBrowserOnOutdatedChromium() {
    if (!globalThis.browser) {
      globalThis.browser = chrome;
    }
  }
  function setPageLanguage() {
    document.documentElement.lang = browser.i18n.getMessage("@@ui_locale").replace("_", "-");
  }

  // src/onboard.ts
  window.addEventListener("DOMContentLoaded", () => {
    enableBrowserOnOutdatedChromium();
    setPageLanguage();
    document.title = browser.i18n.getMessage("onboarding_page");
    {
      const vt = document.getElementById("version-text");
      vt.textContent = buildInfo.versionName;
    }
    {
      const pe = document.getElementById("permissions-explanation");
      pe.textContent = browser.i18n.getMessage("permissions_explanation");
      const gp = document.getElementById("grant-permissions");
      gp.textContent = browser.i18n.getMessage("permissions_grant");
      gp.addEventListener("click", async () => {
        const granted = await browser.permissions.request({
          origins: ["<all_urls>"]
        });
        if (granted) {
          window.close();
        } else {
          alert(browser.i18n.getMessage("permissions_not_granted"));
        }
      });
    }
  });
})();
