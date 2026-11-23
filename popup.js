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

  // src/popup.ts
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
  function promisify(func) {
    return new Promise((resolve, reject) => {
      func((result) => {
        const error = browser.runtime.lastError;
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  var openOptionsPage = () => browser.runtime.openOptionsPage();
  var openPlayerPage = () => promisify(
    (cb) => browser.tabs.create({ url: "/player.html" }, cb)
  );
  async function getOptions() {
    const options = await browser.storage.sync.get();
    return { ...DEFAULT_OPTIONS, ...options };
  }
  var hasAllUrlsPermission = async () => {
    const allPermissions = await browser.permissions.getAll();
    return allPermissions.origins?.includes("<all_urls>") ?? false;
  };
  async function hasHostPermissionForSpecifiedTab(origin) {
    try {
      return origin ? await browser.permissions.contains({
        origins: [origin]
      }) : await hasAllUrlsPermission();
    } catch {
      return false;
    }
  }
  async function hasHostPermissionForActiveTab() {
    const [activeTab2] = await browser.tabs.query({
      active: true,
      currentWindow: true
    });
    return await hasHostPermissionForSpecifiedTab(activeTab2?.url);
  }
  function setPageLanguage() {
    document.documentElement.lang = browser.i18n.getMessage("@@ui_locale").replace("_", "-");
  }

  // src/common.ts
  init_pristine_globals();
  var CheckboxOption = class {
    constructor(checkbox, label) {
      this.checkbox = checkbox;
      this.label = label;
    }
    get input() {
      return this.checkbox;
    }
    get value() {
      return this.checkbox.checked;
    }
    set value(value) {
      this.checkbox.checked = value;
    }
  };
  var NumberOption = class {
    constructor(numberInput, label) {
      this.numberInput = numberInput;
      this.label = label;
      this.numberInput.addEventListener("input", () => {
        this.numberInput.reportValidity();
      });
    }
    get input() {
      return this.numberInput;
    }
    get value() {
      const ni = this.numberInput;
      const num = ni.valueAsNumber;
      if (Number.isNaN(num)) {
        return null;
      }
      if (ni.min) {
        const min = Number(ni.min);
        if (min > num) {
          return min;
        }
      }
      if (ni.max) {
        const max = Number(ni.max);
        if (num > max) {
          return max;
        }
      }
      return num;
    }
    set value(value) {
      this.numberInput.value = value?.toString() ?? "";
    }
  };
  var SelectOption = class {
    constructor(select, label) {
      this.select = select;
      this.label = label;
      Array.prototype.forEach.call(select.options, (option) => {
        if (option.hasAttribute("id")) {
          const message = browser.i18n.getMessage(
            `settings_${option.id}`
          );
          if (message) {
            option.textContent = message;
          }
        }
      });
    }
    get input() {
      return this.select;
    }
    get value() {
      const index = this.select.selectedIndex;
      const option = this.select.options[index];
      return option.value || null;
    }
    set value(value) {
      value ??= "";
      const options = Array.from(this.select.options);
      this.select.selectedIndex = options.findIndex(
        (option) => option.value === value
      );
    }
  };
  function getElement(option) {
    const label = option.getElementsByTagName("label")[0];
    const [input] = option.getElementsByTagName("input");
    if (input) {
      if (input.type === "checkbox") {
        return new CheckboxOption(input, label);
      }
      if (input.type === "number") {
        return new NumberOption(input, label);
      }
    }
    const [select] = option.getElementsByTagName("select");
    if (select) {
      return new SelectOption(select, label);
    }
    throw new Error("Unknown option element");
  }
  function findOptionElements() {
    const camelize = (s) => s.replace(/[^a-z\d](.)/gi, (_, char) => char.toUpperCase());
    const elements = new PristineMap();
    for (const option of document.getElementsByClassName("option")) {
      const element = getElement(option);
      const key = camelize(element.input.id);
      elements.set(key, element);
    }
    return elements;
  }
  async function bindOptions(onChange) {
    const elements = findOptionElements();
    const options = await getOptions();
    for (const [key, element] of elements.entries()) {
      element.value = options[key];
      element.label.classList.add("notransition");
      element.label.offsetHeight;
      element.label.classList.remove("notransition");
      const message = browser.i18n.getMessage(`settings_${element.input.id}`);
      if (message) {
        element.label.textContent = message;
      }
      element.input.addEventListener("change", () => {
        const value = element.value;
        options[key] = value;
        browser.storage.sync.set({ [key]: value });
      });
    }
    browser.storage.onChanged.addListener((changes, namespace) => {
      if (namespace !== "sync") {
        return;
      }
      for (const [key, option] of Object.entries(changes)) {
        const element = elements.get(key);
        if (!element) {
          continue;
        }
        element.value = option.newValue;
        options[key] = option.newValue;
      }
      if (onChange) {
        onChange(options);
      }
    });
    if (onChange) {
      onChange(options);
    }
  }

  // src/popup.ts
  var activeTab;
  var savedOptions;
  var tabOptions;
  var statusIndicator;
  var statusText;
  var reloadButton;
  var STATUS_COLORS = {
    "status_init": "gray",
    "status_message_init": "gray",
    "status_no_tabs": "red",
    "status_result_disabled": "gray",
    "status_result_error": "red",
    "status_result_optout": "gray",
    "status_result_protected": "gray",
    "status_result_running": "green",
    "status_result_running_protected": "green",
    "status_tabs_error": "red"
  };
  async function queryTabStatus(listener) {
    listener("status_init");
    let tabs;
    try {
      tabs = await browser.tabs.query({
        currentWindow: true,
        active: true
      });
      if (tabs.length < 1) {
        listener("status_no_tabs");
        return;
      }
      if (tabs.length > 1) {
        throw new Error(
          `Got ${tabs.length} tabs in response to active tab query.`
        );
      }
    } catch (_e) {
      listener("status_tabs_error");
      return;
    }
    activeTab = tabs[0];
    const url = activeTab.url ? new URL(activeTab.url) : null;
    if (url && url.origin === window.location.origin && url.pathname === "/player.html") {
      listener("status_result_running_protected");
      return;
    }
    listener("status_message_init");
    let response;
    try {
      response = await browser.tabs.sendMessage(activeTab.id, {
        type: "ping"
      });
    } catch (_e) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      try {
        response = await browser.tabs.sendMessage(activeTab.id, {
          type: "ping"
        });
      } catch (_e2) {
        listener("status_result_protected");
        reloadButton.disabled = true;
        return;
      }
    }
    if (!response) {
      listener("status_result_error");
      return;
    }
    tabOptions = response.tabOptions;
    if (response.loaded) {
      listener("status_result_running");
    } else if (tabOptions.ruffleEnable) {
      listener("status_result_optout");
    } else {
      listener("status_result_disabled");
    }
    optionsChanged();
  }
  function deepEqual(x, y) {
    if (typeof x === "object" && typeof y === "object" && x !== null && y !== null) {
      for (const [key, value] of Object.entries(x)) {
        if (!deepEqual(value, y[key])) {
          return false;
        }
      }
      for (const [key, value] of Object.entries(y)) {
        if (!deepEqual(value, x[key])) {
          return false;
        }
      }
      return true;
    } else {
      return x === y;
    }
  }
  function optionsChanged() {
    if (!tabOptions) {
      return;
    }
    const showReloadButton = tabOptions.showReloadButton;
    const notDifferent = deepEqual(savedOptions, tabOptions);
    reloadButton.disabled = notDifferent && !showReloadButton;
  }
  async function displayTabStatus() {
    await queryTabStatus((status) => {
      statusIndicator.style.setProperty("--color", STATUS_COLORS[status]);
      statusText.textContent = browser.i18n.getMessage(status);
    });
  }
  window.addEventListener("DOMContentLoaded", async () => {
    enableBrowserOnOutdatedChromium();
    setPageLanguage();
    const data = await browser.storage.sync.get({
      responseHeadersUnsupported: false
    });
    if (data["responseHeadersUnsupported"]) {
      document.getElementById("swf_takeover").parentElement.classList.add("hidden");
    }
    bindOptions((options) => {
      savedOptions = options;
      optionsChanged();
    });
    statusIndicator = document.getElementById(
      "status-indicator"
    );
    statusText = document.getElementById("status-text");
    const versionText = document.getElementById(
      "version-text"
    );
    versionText.textContent = buildInfo.versionName;
    const optionsButton = document.getElementById(
      "options-button"
    );
    optionsButton.addEventListener("click", async () => {
      await openOptionsPage();
      window.close();
    });
    const playerButton = document.getElementById(
      "player-button"
    );
    playerButton.textContent = browser.i18n.getMessage("open_player_page");
    playerButton.addEventListener("click", async () => {
      await openPlayerPage();
      window.close();
    });
    reloadButton = document.getElementById(
      "reload-button"
    );
    reloadButton.textContent = browser.i18n.getMessage("action_reload");
    reloadButton.addEventListener("click", async () => {
      await browser.tabs.reload(activeTab.id);
      window.close();
    });
    await displayTabStatus();
    const permissionsButton = document.getElementById(
      "permissions-button"
    );
    permissionsButton.textContent = browser.i18n.getMessage(
      "grant_single_site_permission"
    );
    const url = activeTab?.url ? new URL(activeTab.url) : null;
    if (url && ["https:", "http:"].includes(url.protocol) && !await hasHostPermissionForActiveTab()) {
      permissionsButton.classList.remove("hidden");
      permissionsButton.addEventListener("click", () => {
        browser.permissions.request({
          origins: [url.toString()]
        });
        window.close();
      });
    }
  });
})();
