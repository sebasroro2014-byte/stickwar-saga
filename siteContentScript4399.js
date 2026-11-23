"use strict";
(() => {
  // src/4399-content-script.ts
  try {
    Object.defineProperty(window, "showBlockFlash", {
      value: () => {
      },
      writable: false
    });
  } catch (_e) {
  }
})();
