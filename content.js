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

  // src/content.ts
  init_pristine_globals();

  // src/utils.ts
  init_pristine_globals();

  // ../core/dist/index.js
  init_pristine_globals();

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
  async function getOptions() {
    const options = await browser.storage.sync.get();
    return { ...DEFAULT_OPTIONS, ...options };
  }
  async function getExplicitOptions() {
    const options = await getOptions();
    const defaultOptions = DEFAULT_OPTIONS;
    for (const key in defaultOptions) {
      if (key in options && defaultOptions[key] === options[key]) {
        delete options[key];
      }
    }
    if ("responseHeadersUnsupported" in options) {
      delete options["responseHeadersUnsupported"];
    }
    return options;
  }

  // src/messages.ts
  init_pristine_globals();
  function isMessage(object) {
    return object.type !== void 0;
  }

  // src/content.ts
  var pendingMessages = [];
  var ID = Math.floor(Math.random() * 1e11);
  function sendMessageToPage(data) {
    const message = {
      to: "ruffle_page",
      index: pendingMessages.length,
      id: ID,
      data
    };
    window.postMessage(message, "*");
    return new Promise((resolve, reject) => {
      pendingMessages.push({ resolve, reject });
    });
  }
  function injectScriptRaw(src) {
    const script = document.createElement("script");
    script.textContent = src;
    (document.head || document.documentElement).append(script);
    script.remove();
  }
  function injectScriptURL(url) {
    const script = document.createElement("script");
    const promise = new Promise((resolve, reject) => {
      script.addEventListener("load", function() {
        resolve();
        this.remove();
      });
      script.addEventListener("error", (e) => reject(e));
    });
    script.charset = "utf-8";
    script.src = url;
    (document.head || document.documentElement).append(script);
    return promise;
  }
  function checkPageOptout() {
    if (document.documentElement.hasAttribute("data-ruffle-optout")) {
      return true;
    }
    try {
      if (window.top && window.top.document && window.top.document.documentElement && window.top.document.documentElement.hasAttribute(
        "data-ruffle-optout"
      )) {
        return true;
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      console.warn(`Unable to check top-level optout: ${message}`);
    }
    return false;
  }
  function isXMLDocument() {
    return document.createElement("foo").tagName !== "FOO";
  }
  (async () => {
    enableBrowserOnOutdatedChromium();
    await browser.storage.sync.set({
      ["showReloadButton"]: false
    });
    const options = await getOptions();
    const explicitOptions = await getExplicitOptions();
    const pageOptout = checkPageOptout();
    const shouldLoad = !isXMLDocument() && options.ruffleEnable && (options.ignoreOptout || !pageOptout);
    browser.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      if (shouldLoad) {
        sendMessageToPage(message).then((response) => {
          sendResponse({
            loaded: true,
            tabOptions: options,
            optout: pageOptout,
            data: response
          });
        });
        return true;
      } else {
        sendResponse({
          loaded: false,
          tabOptions: options,
          optout: pageOptout
        });
        return false;
      }
    });
    if (!shouldLoad) {
      return;
    }
    if (navigator.wrappedJSObject && navigator.wrappedJSObject.plugins.namedItem("Shockwave Flash")?.filename !== "ruffle.js") {
      injectScriptRaw("\"use strict\";\n(() => {\n  // ../core/dist/flash-identifiers.js\n  var FLASH_MIMETYPE = \"application/x-shockwave-flash\";\n  var FUTURESPLASH_MIMETYPE = \"application/futuresplash\";\n  var FLASH7_AND_8_MIMETYPE = \"application/x-shockwave-flash2-preview\";\n  var FLASH_MOVIE_MIMETYPE = \"application/vnd.adobe.flash.movie\";\n\n  // ../core/dist/plugin-polyfill.js\n  var __classPrivateFieldSet = function(receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;\n  };\n  var __classPrivateFieldGet = function(receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n  };\n  var _RuffleMimeTypeArray_mimeTypes;\n  var _RuffleMimeTypeArray_namedMimeTypes;\n  var _RuffleMimeType_mimeType;\n  var _RufflePlugin_name;\n  var _RufflePlugin_description;\n  var _RufflePlugin_filename;\n  var _RufflePluginArray_plugins;\n  var _RufflePluginArray_namedPlugins;\n  var RuffleMimeTypeArray = class {\n    constructor(mimeTypes) {\n      _RuffleMimeTypeArray_mimeTypes.set(this, void 0);\n      _RuffleMimeTypeArray_namedMimeTypes.set(this, void 0);\n      __classPrivateFieldSet(this, _RuffleMimeTypeArray_mimeTypes, [], \"f\");\n      __classPrivateFieldSet(this, _RuffleMimeTypeArray_namedMimeTypes, {}, \"f\");\n      if (mimeTypes) {\n        for (let i = 0; i < mimeTypes.length; i++) {\n          this.install(mimeTypes[i]);\n        }\n      }\n    }\n    /**\n     * Install a MIME Type into the array.\n     *\n     * @param mimeType The mime type to install\n     */\n    install(mimeType) {\n      const wrapper = new RuffleMimeType(mimeType);\n      const index = __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, \"f\").length;\n      __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, \"f\").push(wrapper);\n      __classPrivateFieldGet(this, _RuffleMimeTypeArray_namedMimeTypes, \"f\")[mimeType.type] = wrapper;\n      Object.defineProperty(this, wrapper.type, {\n        configurable: true,\n        enumerable: false,\n        value: wrapper\n      });\n      this[index] = wrapper;\n    }\n    item(index) {\n      return __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, \"f\")[index >>> 0];\n    }\n    namedItem(name) {\n      return __classPrivateFieldGet(this, _RuffleMimeTypeArray_namedMimeTypes, \"f\")[name];\n    }\n    get length() {\n      return __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, \"f\").length;\n    }\n    [(_RuffleMimeTypeArray_mimeTypes = /* @__PURE__ */ new WeakMap(), _RuffleMimeTypeArray_namedMimeTypes = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {\n      return __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, \"f\")[Symbol.iterator]();\n    }\n    get [Symbol.toStringTag]() {\n      return \"MimeTypeArray\";\n    }\n  };\n  var RuffleMimeType = class {\n    constructor(mimeType) {\n      _RuffleMimeType_mimeType.set(this, void 0);\n      __classPrivateFieldSet(this, _RuffleMimeType_mimeType, mimeType, \"f\");\n    }\n    get type() {\n      return __classPrivateFieldGet(this, _RuffleMimeType_mimeType, \"f\").type;\n    }\n    get description() {\n      return __classPrivateFieldGet(this, _RuffleMimeType_mimeType, \"f\").description;\n    }\n    get suffixes() {\n      return __classPrivateFieldGet(this, _RuffleMimeType_mimeType, \"f\").suffixes;\n    }\n    get enabledPlugin() {\n      return __classPrivateFieldGet(this, _RuffleMimeType_mimeType, \"f\").enabledPlugin;\n    }\n    get [(_RuffleMimeType_mimeType = /* @__PURE__ */ new WeakMap(), Symbol.toStringTag)]() {\n      return \"MimeType\";\n    }\n  };\n  var RufflePlugin = class extends RuffleMimeTypeArray {\n    constructor(name, description, filename) {\n      super();\n      _RufflePlugin_name.set(this, void 0);\n      _RufflePlugin_description.set(this, void 0);\n      _RufflePlugin_filename.set(this, void 0);\n      __classPrivateFieldSet(this, _RufflePlugin_name, name, \"f\");\n      __classPrivateFieldSet(this, _RufflePlugin_description, description, \"f\");\n      __classPrivateFieldSet(this, _RufflePlugin_filename, filename, \"f\");\n    }\n    get name() {\n      return __classPrivateFieldGet(this, _RufflePlugin_name, \"f\");\n    }\n    get description() {\n      return __classPrivateFieldGet(this, _RufflePlugin_description, \"f\");\n    }\n    get filename() {\n      return __classPrivateFieldGet(this, _RufflePlugin_filename, \"f\");\n    }\n    get [(_RufflePlugin_name = /* @__PURE__ */ new WeakMap(), _RufflePlugin_description = /* @__PURE__ */ new WeakMap(), _RufflePlugin_filename = /* @__PURE__ */ new WeakMap(), Symbol.toStringTag)]() {\n      return \"Plugin\";\n    }\n  };\n  var RufflePluginArray = class {\n    constructor(plugins) {\n      _RufflePluginArray_plugins.set(this, void 0);\n      _RufflePluginArray_namedPlugins.set(this, void 0);\n      __classPrivateFieldSet(this, _RufflePluginArray_plugins, [], \"f\");\n      __classPrivateFieldSet(this, _RufflePluginArray_namedPlugins, {}, \"f\");\n      for (let i = 0; i < plugins.length; i++) {\n        this.install(plugins[i]);\n      }\n    }\n    install(plugin) {\n      const index = __classPrivateFieldGet(this, _RufflePluginArray_plugins, \"f\").length;\n      __classPrivateFieldGet(this, _RufflePluginArray_plugins, \"f\").push(plugin);\n      __classPrivateFieldGet(this, _RufflePluginArray_namedPlugins, \"f\")[plugin.name] = plugin;\n      Object.defineProperty(this, plugin.name, {\n        configurable: true,\n        enumerable: false,\n        value: plugin\n      });\n      this[index] = plugin;\n    }\n    item(index) {\n      return __classPrivateFieldGet(this, _RufflePluginArray_plugins, \"f\")[index >>> 0];\n    }\n    namedItem(name) {\n      return __classPrivateFieldGet(this, _RufflePluginArray_namedPlugins, \"f\")[name];\n    }\n    refresh() {\n    }\n    [(_RufflePluginArray_plugins = /* @__PURE__ */ new WeakMap(), _RufflePluginArray_namedPlugins = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {\n      return __classPrivateFieldGet(this, _RufflePluginArray_plugins, \"f\")[Symbol.iterator]();\n    }\n    get [Symbol.toStringTag]() {\n      return \"PluginArray\";\n    }\n    get length() {\n      return __classPrivateFieldGet(this, _RufflePluginArray_plugins, \"f\").length;\n    }\n  };\n  var FLASH_PLUGIN = new RufflePlugin(\"Shockwave Flash\", \"Shockwave Flash 32.0 r0\", \"ruffle.js\");\n  FLASH_PLUGIN.install({\n    type: FUTURESPLASH_MIMETYPE,\n    description: \"Shockwave Flash\",\n    suffixes: \"spl\",\n    enabledPlugin: FLASH_PLUGIN\n  });\n  FLASH_PLUGIN.install({\n    type: FLASH_MIMETYPE,\n    description: \"Shockwave Flash\",\n    suffixes: \"swf\",\n    enabledPlugin: FLASH_PLUGIN\n  });\n  FLASH_PLUGIN.install({\n    type: FLASH7_AND_8_MIMETYPE,\n    description: \"Shockwave Flash\",\n    suffixes: \"swf\",\n    enabledPlugin: FLASH_PLUGIN\n  });\n  FLASH_PLUGIN.install({\n    type: FLASH_MOVIE_MIMETYPE,\n    description: \"Shockwave Flash\",\n    suffixes: \"swf\",\n    enabledPlugin: FLASH_PLUGIN\n  });\n  function installPlugin(plugin) {\n    if (navigator.plugins.namedItem(\"Shockwave Flash\")) {\n      return;\n    }\n    if (!(\"install\" in navigator.plugins) || !navigator.plugins[\"install\"]) {\n      Object.defineProperty(window, \"PluginArray\", {\n        value: RufflePluginArray,\n        configurable: true\n      });\n      Object.defineProperty(navigator, \"plugins\", {\n        value: new RufflePluginArray(navigator.plugins),\n        writable: false,\n        configurable: true\n      });\n    }\n    const plugins = navigator.plugins;\n    plugins.install(plugin);\n    if (plugin.length > 0 && (!(\"install\" in navigator.mimeTypes) || !navigator.mimeTypes[\"install\"])) {\n      Object.defineProperty(window, \"MimeTypeArray\", {\n        value: RuffleMimeTypeArray,\n        configurable: true\n      });\n      Object.defineProperty(window, \"MimeType\", {\n        value: RuffleMimeType,\n        configurable: true\n      });\n      Object.defineProperty(navigator, \"mimeTypes\", {\n        value: new RuffleMimeTypeArray(navigator.mimeTypes),\n        writable: false,\n        configurable: true\n      });\n    }\n    const mimeTypes = navigator.mimeTypes;\n    for (let i = 0; i < plugin.length; i += 1) {\n      mimeTypes.install(plugin[i]);\n    }\n  }\n\n  // src/plugin-polyfill-ignore-optout.ts\n  installPlugin(FLASH_PLUGIN);\n})();\n");
      await injectScriptURL(browser.runtime.getURL("dist/ruffle.js"));
    }
    window.addEventListener("message", (event) => {
      if (event.source !== window || !event.data) {
        return;
      }
      const { to, index, data, id } = event.data;
      if (to === "ruffle_content" && id === ID) {
        const request = index !== null ? pendingMessages[index] : null;
        if (request) {
          pendingMessages[index] = null;
          request.resolve(data);
        } else if (isMessage(data)) {
          switch (data.type) {
            case "open_url_in_player":
              browser.runtime.sendMessage({
                type: "open_url_in_player",
                url: data.url
              });
              break;
            default:
          }
        }
      }
    });
    await sendMessageToPage({
      type: "load",
      config: {
        ...explicitOptions,
        autoplay: options.autostart ? "on" : "auto",
        unmuteOverlay: options.autostart ? "hidden" : "visible",
        splashScreen: !options.autostart
      },
      publicPath: browser.runtime.getURL("/dist/")
    });
  })();
})();
