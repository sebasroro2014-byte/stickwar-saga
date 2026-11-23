"use strict";
(() => {
  // ../core/dist/flash-identifiers.js
  var FLASH_MIMETYPE = "application/x-shockwave-flash";
  var FUTURESPLASH_MIMETYPE = "application/futuresplash";
  var FLASH7_AND_8_MIMETYPE = "application/x-shockwave-flash2-preview";
  var FLASH_MOVIE_MIMETYPE = "application/vnd.adobe.flash.movie";

  // ../core/dist/plugin-polyfill.js
  var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _RuffleMimeTypeArray_mimeTypes;
  var _RuffleMimeTypeArray_namedMimeTypes;
  var _RuffleMimeType_mimeType;
  var _RufflePlugin_name;
  var _RufflePlugin_description;
  var _RufflePlugin_filename;
  var _RufflePluginArray_plugins;
  var _RufflePluginArray_namedPlugins;
  var RuffleMimeTypeArray = class {
    constructor(mimeTypes) {
      _RuffleMimeTypeArray_mimeTypes.set(this, void 0);
      _RuffleMimeTypeArray_namedMimeTypes.set(this, void 0);
      __classPrivateFieldSet(this, _RuffleMimeTypeArray_mimeTypes, [], "f");
      __classPrivateFieldSet(this, _RuffleMimeTypeArray_namedMimeTypes, {}, "f");
      if (mimeTypes) {
        for (let i = 0; i < mimeTypes.length; i++) {
          this.install(mimeTypes[i]);
        }
      }
    }
    /**
     * Install a MIME Type into the array.
     *
     * @param mimeType The mime type to install
     */
    install(mimeType) {
      const wrapper = new RuffleMimeType(mimeType);
      const index = __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, "f").length;
      __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, "f").push(wrapper);
      __classPrivateFieldGet(this, _RuffleMimeTypeArray_namedMimeTypes, "f")[mimeType.type] = wrapper;
      Object.defineProperty(this, wrapper.type, {
        configurable: true,
        enumerable: false,
        value: wrapper
      });
      this[index] = wrapper;
    }
    item(index) {
      return __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, "f")[index >>> 0];
    }
    namedItem(name) {
      return __classPrivateFieldGet(this, _RuffleMimeTypeArray_namedMimeTypes, "f")[name];
    }
    get length() {
      return __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, "f").length;
    }
    [(_RuffleMimeTypeArray_mimeTypes = /* @__PURE__ */ new WeakMap(), _RuffleMimeTypeArray_namedMimeTypes = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
      return __classPrivateFieldGet(this, _RuffleMimeTypeArray_mimeTypes, "f")[Symbol.iterator]();
    }
    get [Symbol.toStringTag]() {
      return "MimeTypeArray";
    }
  };
  var RuffleMimeType = class {
    constructor(mimeType) {
      _RuffleMimeType_mimeType.set(this, void 0);
      __classPrivateFieldSet(this, _RuffleMimeType_mimeType, mimeType, "f");
    }
    get type() {
      return __classPrivateFieldGet(this, _RuffleMimeType_mimeType, "f").type;
    }
    get description() {
      return __classPrivateFieldGet(this, _RuffleMimeType_mimeType, "f").description;
    }
    get suffixes() {
      return __classPrivateFieldGet(this, _RuffleMimeType_mimeType, "f").suffixes;
    }
    get enabledPlugin() {
      return __classPrivateFieldGet(this, _RuffleMimeType_mimeType, "f").enabledPlugin;
    }
    get [(_RuffleMimeType_mimeType = /* @__PURE__ */ new WeakMap(), Symbol.toStringTag)]() {
      return "MimeType";
    }
  };
  var RufflePlugin = class extends RuffleMimeTypeArray {
    constructor(name, description, filename) {
      super();
      _RufflePlugin_name.set(this, void 0);
      _RufflePlugin_description.set(this, void 0);
      _RufflePlugin_filename.set(this, void 0);
      __classPrivateFieldSet(this, _RufflePlugin_name, name, "f");
      __classPrivateFieldSet(this, _RufflePlugin_description, description, "f");
      __classPrivateFieldSet(this, _RufflePlugin_filename, filename, "f");
    }
    get name() {
      return __classPrivateFieldGet(this, _RufflePlugin_name, "f");
    }
    get description() {
      return __classPrivateFieldGet(this, _RufflePlugin_description, "f");
    }
    get filename() {
      return __classPrivateFieldGet(this, _RufflePlugin_filename, "f");
    }
    get [(_RufflePlugin_name = /* @__PURE__ */ new WeakMap(), _RufflePlugin_description = /* @__PURE__ */ new WeakMap(), _RufflePlugin_filename = /* @__PURE__ */ new WeakMap(), Symbol.toStringTag)]() {
      return "Plugin";
    }
  };
  var RufflePluginArray = class {
    constructor(plugins) {
      _RufflePluginArray_plugins.set(this, void 0);
      _RufflePluginArray_namedPlugins.set(this, void 0);
      __classPrivateFieldSet(this, _RufflePluginArray_plugins, [], "f");
      __classPrivateFieldSet(this, _RufflePluginArray_namedPlugins, {}, "f");
      for (let i = 0; i < plugins.length; i++) {
        this.install(plugins[i]);
      }
    }
    install(plugin) {
      const index = __classPrivateFieldGet(this, _RufflePluginArray_plugins, "f").length;
      __classPrivateFieldGet(this, _RufflePluginArray_plugins, "f").push(plugin);
      __classPrivateFieldGet(this, _RufflePluginArray_namedPlugins, "f")[plugin.name] = plugin;
      Object.defineProperty(this, plugin.name, {
        configurable: true,
        enumerable: false,
        value: plugin
      });
      this[index] = plugin;
    }
    item(index) {
      return __classPrivateFieldGet(this, _RufflePluginArray_plugins, "f")[index >>> 0];
    }
    namedItem(name) {
      return __classPrivateFieldGet(this, _RufflePluginArray_namedPlugins, "f")[name];
    }
    refresh() {
    }
    [(_RufflePluginArray_plugins = /* @__PURE__ */ new WeakMap(), _RufflePluginArray_namedPlugins = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
      return __classPrivateFieldGet(this, _RufflePluginArray_plugins, "f")[Symbol.iterator]();
    }
    get [Symbol.toStringTag]() {
      return "PluginArray";
    }
    get length() {
      return __classPrivateFieldGet(this, _RufflePluginArray_plugins, "f").length;
    }
  };
  var FLASH_PLUGIN = new RufflePlugin("Shockwave Flash", "Shockwave Flash 32.0 r0", "ruffle.js");
  FLASH_PLUGIN.install({
    type: FUTURESPLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "spl",
    enabledPlugin: FLASH_PLUGIN
  });
  FLASH_PLUGIN.install({
    type: FLASH_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN
  });
  FLASH_PLUGIN.install({
    type: FLASH7_AND_8_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN
  });
  FLASH_PLUGIN.install({
    type: FLASH_MOVIE_MIMETYPE,
    description: "Shockwave Flash",
    suffixes: "swf",
    enabledPlugin: FLASH_PLUGIN
  });
  function installPlugin(plugin) {
    if (navigator.plugins.namedItem("Shockwave Flash")) {
      return;
    }
    if (!("install" in navigator.plugins) || !navigator.plugins["install"]) {
      Object.defineProperty(window, "PluginArray", {
        value: RufflePluginArray,
        configurable: true
      });
      Object.defineProperty(navigator, "plugins", {
        value: new RufflePluginArray(navigator.plugins),
        writable: false,
        configurable: true
      });
    }
    const plugins = navigator.plugins;
    plugins.install(plugin);
    if (plugin.length > 0 && (!("install" in navigator.mimeTypes) || !navigator.mimeTypes["install"])) {
      Object.defineProperty(window, "MimeTypeArray", {
        value: RuffleMimeTypeArray,
        configurable: true
      });
      Object.defineProperty(window, "MimeType", {
        value: RuffleMimeType,
        configurable: true
      });
      Object.defineProperty(navigator, "mimeTypes", {
        value: new RuffleMimeTypeArray(navigator.mimeTypes),
        writable: false,
        configurable: true
      });
    }
    const mimeTypes = navigator.mimeTypes;
    for (let i = 0; i < plugin.length; i += 1) {
      mimeTypes.install(plugin[i]);
    }
  }

  // src/plugin-polyfill-ignore-optout.ts
  installPlugin(FLASH_PLUGIN);
})();
