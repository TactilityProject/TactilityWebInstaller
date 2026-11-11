/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/images/favicon.svg":
/*!***********************************!*\
  !*** ./assets/images/favicon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/favicon.svg";

/***/ }),

/***/ "./assets/images/toolbar-logo.svg":
/*!****************************************!*\
  !*** ./assets/images/toolbar-logo.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/toolbar-logo.svg";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    color-scheme: dark;
    --bg: #17181f;
    --surface: #21222b;
    --surface-raised: #2a2c37;
    --border: #363846;
    --text: #e8e9f0;
    --text-muted: #9a9db0;
    --primary: #33bbff;
    --primary-contrast: #06202e;
    --primary-soft: rgba(51, 187, 255, 0.14);
    --secondary: #ee81c3;
    --warning: #f5b84a;
    --warning-soft: rgba(245, 184, 74, 0.13);
    --radius: 14px;
    --radius-small: 9px;
    --shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
}

@media (prefers-color-scheme: light) {
    :root {
        color-scheme: light;
        --bg: #f3f4f8;
        --surface: #ffffff;
        --surface-raised: #f0f1f6;
        --border: #dcdee8;
        --text: #1c1d26;
        --text-muted: #62657a;
        --primary: #0b84c6;
        --primary-contrast: #ffffff;
        --primary-soft: rgba(11, 132, 198, 0.11);
        --secondary: #c2408f;
        --warning: #a86a00;
        --warning-soft: rgba(214, 144, 16, 0.14);
        --shadow: 0 10px 28px rgba(30, 34, 60, 0.08);
    }
}

*, *::before, *::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

a {
    color: var(--primary);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

button, input {
    font: inherit;
    color: inherit;
}

:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
}

[hidden] {
    display: none !important;
}

/* Top bar */

.topbar {
    border-bottom: 1px solid var(--border);
    background: var(--surface);
}

.topbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    max-width: 1080px;
    margin: 0 auto;
    padding: 12px 20px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text);
    font-weight: 650;
    font-size: 1.1rem;
}

.brand:hover {
    text-decoration: none;
}

.brand-sub {
    color: var(--text-muted);
    font-weight: 400;
}

.topbar-links {
    display: flex;
    gap: 20px;
    font-size: 0.92rem;
}

.topbar-links a {
    color: var(--text-muted);
}

.topbar-links a:hover {
    color: var(--text);
    text-decoration: none;
}

/* Page */

main {
    max-width: 1080px;
    margin: 0 auto;
    padding: 36px 20px 64px;
}

.intro {
    margin-bottom: 28px;
}

.intro h1 {
    margin: 0 0 6px;
    font-size: clamp(1.6rem, 3.5vw, 2.1rem);
    line-height: 1.2;
    letter-spacing: -0.02em;
}

.intro p {
    margin: 0;
    color: var(--text-muted);
}

.layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 20px;
    align-items: start;
}

.card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 22px;
}

#Details {
    position: sticky;
    top: 20px;
}

.card h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 18px;
    font-size: 1.05rem;
    font-weight: 600;
}

.step {
    display: inline-grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--primary-soft);
    color: var(--primary);
    font-size: 0.85rem;
    font-weight: 700;
}

/* Search */

.search {
    position: relative;
}

.search svg {
    position: absolute;
    top: 50%;
    left: 13px;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
    fill: none;
    stroke: var(--text-muted);
    stroke-width: 2;
    stroke-linecap: round;
    pointer-events: none;
}

.search input {
    width: 100%;
    padding: 11px 14px 11px 40px;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: var(--radius-small);
}

.search input::placeholder {
    color: var(--text-muted);
}

.search input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-soft);
}

.list-status {
    margin: 12px 2px 8px;
    color: var(--text-muted);
    font-size: 0.85rem;
}

/* Device list */

.device-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: min(56vh, 520px);
    margin: 0 -8px;
    padding: 0 8px;
    overflow-y: auto;
    list-style: none;
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
}

.device {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 6px 12px;
    background: none;
    border: 1px solid transparent;
    border-radius: var(--radius-small);
    text-align: left;
    cursor: pointer;
}

.device:hover {
    background: var(--surface-raised);
}

.device[aria-pressed="true"] {
    background: var(--primary-soft);
    border-color: var(--primary);
}

.device-text {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
}

.device-vendor {
    color: var(--text-muted);
    font-size: 0.76rem;
    line-height: 1.3;
}

.device-name {
    font-weight: 500;
    overflow-wrap: anywhere;
}

.badge {
    flex-shrink: 0;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 600;
    white-space: nowrap;
}

.badge-accent {
    background: color-mix(in srgb, var(--secondary) 16%, transparent);
    color: var(--secondary);
}

.badge-muted {
    background: var(--surface-raised);
    color: var(--text-muted);
}

.badge-warning {
    background: var(--warning-soft);
    color: var(--warning);
}

/* Details */

.empty {
    margin: 0;
    padding: 36px 0;
    color: var(--text-muted);
    text-align: center;
}

.selected-device {
    margin-bottom: 18px;
}

.selected-vendor {
    color: var(--text-muted);
    font-size: 0.85rem;
}

.selected-name {
    font-size: 1.35rem;
    font-weight: 650;
    line-height: 1.25;
    letter-spacing: -0.01em;
}

.segmented {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    padding: 4px;
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: var(--radius-small);
}

.segment {
    position: relative;
    cursor: pointer;
}

.segment input {
    position: absolute;
    inset: 0;
    margin: 0;
    opacity: 0;
    cursor: inherit;
}

.segment-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px 10px;
    border-radius: 6px;
}

.segment-title {
    font-weight: 600;
}

.segment-sub {
    color: var(--text-muted);
    font-size: 0.78rem;
}

.segment input:checked + .segment-body {
    background: var(--surface);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25), inset 0 0 0 1px var(--primary);
}

.segment input:checked + .segment-body .segment-title {
    color: var(--primary);
}

.segment input:focus-visible + .segment-body {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
}

.segment:has(input:disabled) {
    cursor: not-allowed;
    opacity: 0.45;
}

.build-details {
    min-height: 1.3em;
    margin: 10px 2px 16px;
    color: var(--text-muted);
    font-size: 0.82rem;
}

/* Notices */

.notice {
    margin-bottom: 12px;
    padding: 12px 14px;
    border-left: 3px solid var(--primary);
    border-radius: var(--radius-small);
    background: var(--primary-soft);
    font-size: 0.92rem;
}

.notice-warning {
    border-left-color: var(--warning);
    background: var(--warning-soft);
}

main > .notice {
    margin-bottom: 20px;
}

/* Buttons */

esp-web-install-button {
    display: block;
    margin-top: 18px;
}

.button-primary {
    width: 100%;
    padding: 12px 20px;
    background: var(--primary);
    border: 0;
    border-radius: var(--radius-small);
    color: var(--primary-contrast);
    font-weight: 650;
    cursor: pointer;
    transition: filter 0.15s, transform 0.05s;
}

.button-primary:hover {
    filter: brightness(1.08);
}

.button-primary:active {
    transform: translateY(1px);
}

.button-link {
    padding: 0;
    background: none;
    border: 0;
    color: var(--primary);
    cursor: pointer;
}

.button-link:hover {
    text-decoration: underline;
}

.install-fallback {
    display: block;
    color: var(--text-muted);
    font-size: 0.92rem;
    text-align: center;
}

@media (max-width: 820px) {
    .layout {
        grid-template-columns: minmax(0, 1fr);
    }

    #Details {
        position: static;
    }

    .device-list {
        max-height: 44vh;
    }

    .topbar-links a:first-child {
        display: none;
    }
}
`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    color-scheme: dark;\n    --bg: #17181f;\n    --surface: #21222b;\n    --surface-raised: #2a2c37;\n    --border: #363846;\n    --text: #e8e9f0;\n    --text-muted: #9a9db0;\n    --primary: #33bbff;\n    --primary-contrast: #06202e;\n    --primary-soft: rgba(51, 187, 255, 0.14);\n    --secondary: #ee81c3;\n    --warning: #f5b84a;\n    --warning-soft: rgba(245, 184, 74, 0.13);\n    --radius: 14px;\n    --radius-small: 9px;\n    --shadow: 0 12px 32px rgba(0, 0, 0, 0.28);\n}\n\n@media (prefers-color-scheme: light) {\n    :root {\n        color-scheme: light;\n        --bg: #f3f4f8;\n        --surface: #ffffff;\n        --surface-raised: #f0f1f6;\n        --border: #dcdee8;\n        --text: #1c1d26;\n        --text-muted: #62657a;\n        --primary: #0b84c6;\n        --primary-contrast: #ffffff;\n        --primary-soft: rgba(11, 132, 198, 0.11);\n        --secondary: #c2408f;\n        --warning: #a86a00;\n        --warning-soft: rgba(214, 144, 16, 0.14);\n        --shadow: 0 10px 28px rgba(30, 34, 60, 0.08);\n    }\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    background: var(--bg);\n    color: var(--text);\n    font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\na {\n    color: var(--primary);\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\nbutton, input {\n    font: inherit;\n    color: inherit;\n}\n\n:focus-visible {\n    outline: 2px solid var(--primary);\n    outline-offset: 2px;\n}\n\n[hidden] {\n    display: none !important;\n}\n\n/* Top bar */\n\n.topbar {\n    border-bottom: 1px solid var(--border);\n    background: var(--surface);\n}\n\n.topbar-inner {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n    max-width: 1080px;\n    margin: 0 auto;\n    padding: 12px 20px;\n}\n\n.brand {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color: var(--text);\n    font-weight: 650;\n    font-size: 1.1rem;\n}\n\n.brand:hover {\n    text-decoration: none;\n}\n\n.brand-sub {\n    color: var(--text-muted);\n    font-weight: 400;\n}\n\n.topbar-links {\n    display: flex;\n    gap: 20px;\n    font-size: 0.92rem;\n}\n\n.topbar-links a {\n    color: var(--text-muted);\n}\n\n.topbar-links a:hover {\n    color: var(--text);\n    text-decoration: none;\n}\n\n/* Page */\n\nmain {\n    max-width: 1080px;\n    margin: 0 auto;\n    padding: 36px 20px 64px;\n}\n\n.intro {\n    margin-bottom: 28px;\n}\n\n.intro h1 {\n    margin: 0 0 6px;\n    font-size: clamp(1.6rem, 3.5vw, 2.1rem);\n    line-height: 1.2;\n    letter-spacing: -0.02em;\n}\n\n.intro p {\n    margin: 0;\n    color: var(--text-muted);\n}\n\n.layout {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    gap: 20px;\n    align-items: start;\n}\n\n.card {\n    background: var(--surface);\n    border: 1px solid var(--border);\n    border-radius: var(--radius);\n    box-shadow: var(--shadow);\n    padding: 22px;\n}\n\n#Details {\n    position: sticky;\n    top: 20px;\n}\n\n.card h2 {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 0 0 18px;\n    font-size: 1.05rem;\n    font-weight: 600;\n}\n\n.step {\n    display: inline-grid;\n    place-items: center;\n    width: 26px;\n    height: 26px;\n    border-radius: 50%;\n    background: var(--primary-soft);\n    color: var(--primary);\n    font-size: 0.85rem;\n    font-weight: 700;\n}\n\n/* Search */\n\n.search {\n    position: relative;\n}\n\n.search svg {\n    position: absolute;\n    top: 50%;\n    left: 13px;\n    width: 18px;\n    height: 18px;\n    transform: translateY(-50%);\n    fill: none;\n    stroke: var(--text-muted);\n    stroke-width: 2;\n    stroke-linecap: round;\n    pointer-events: none;\n}\n\n.search input {\n    width: 100%;\n    padding: 11px 14px 11px 40px;\n    background: var(--surface-raised);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-small);\n}\n\n.search input::placeholder {\n    color: var(--text-muted);\n}\n\n.search input:focus {\n    outline: none;\n    border-color: var(--primary);\n    box-shadow: 0 0 0 3px var(--primary-soft);\n}\n\n.list-status {\n    margin: 12px 2px 8px;\n    color: var(--text-muted);\n    font-size: 0.85rem;\n}\n\n/* Device list */\n\n.device-list {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    max-height: min(56vh, 520px);\n    margin: 0 -8px;\n    padding: 0 8px;\n    overflow-y: auto;\n    list-style: none;\n    scrollbar-width: thin;\n    scrollbar-color: var(--border) transparent;\n}\n\n.device {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    width: 100%;\n    padding: 6px 12px;\n    background: none;\n    border: 1px solid transparent;\n    border-radius: var(--radius-small);\n    text-align: left;\n    cursor: pointer;\n}\n\n.device:hover {\n    background: var(--surface-raised);\n}\n\n.device[aria-pressed=\"true\"] {\n    background: var(--primary-soft);\n    border-color: var(--primary);\n}\n\n.device-text {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-width: 0;\n}\n\n.device-vendor {\n    color: var(--text-muted);\n    font-size: 0.76rem;\n    line-height: 1.3;\n}\n\n.device-name {\n    font-weight: 500;\n    overflow-wrap: anywhere;\n}\n\n.badge {\n    flex-shrink: 0;\n    padding: 2px 8px;\n    border-radius: 999px;\n    font-size: 0.7rem;\n    font-weight: 600;\n    white-space: nowrap;\n}\n\n.badge-accent {\n    background: color-mix(in srgb, var(--secondary) 16%, transparent);\n    color: var(--secondary);\n}\n\n.badge-muted {\n    background: var(--surface-raised);\n    color: var(--text-muted);\n}\n\n.badge-warning {\n    background: var(--warning-soft);\n    color: var(--warning);\n}\n\n/* Details */\n\n.empty {\n    margin: 0;\n    padding: 36px 0;\n    color: var(--text-muted);\n    text-align: center;\n}\n\n.selected-device {\n    margin-bottom: 18px;\n}\n\n.selected-vendor {\n    color: var(--text-muted);\n    font-size: 0.85rem;\n}\n\n.selected-name {\n    font-size: 1.35rem;\n    font-weight: 650;\n    line-height: 1.25;\n    letter-spacing: -0.01em;\n}\n\n.segmented {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 4px;\n    padding: 4px;\n    background: var(--surface-raised);\n    border: 1px solid var(--border);\n    border-radius: var(--radius-small);\n}\n\n.segment {\n    position: relative;\n    cursor: pointer;\n}\n\n.segment input {\n    position: absolute;\n    inset: 0;\n    margin: 0;\n    opacity: 0;\n    cursor: inherit;\n}\n\n.segment-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 7px 10px;\n    border-radius: 6px;\n}\n\n.segment-title {\n    font-weight: 600;\n}\n\n.segment-sub {\n    color: var(--text-muted);\n    font-size: 0.78rem;\n}\n\n.segment input:checked + .segment-body {\n    background: var(--surface);\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25), inset 0 0 0 1px var(--primary);\n}\n\n.segment input:checked + .segment-body .segment-title {\n    color: var(--primary);\n}\n\n.segment input:focus-visible + .segment-body {\n    outline: 2px solid var(--primary);\n    outline-offset: 2px;\n}\n\n.segment:has(input:disabled) {\n    cursor: not-allowed;\n    opacity: 0.45;\n}\n\n.build-details {\n    min-height: 1.3em;\n    margin: 10px 2px 16px;\n    color: var(--text-muted);\n    font-size: 0.82rem;\n}\n\n/* Notices */\n\n.notice {\n    margin-bottom: 12px;\n    padding: 12px 14px;\n    border-left: 3px solid var(--primary);\n    border-radius: var(--radius-small);\n    background: var(--primary-soft);\n    font-size: 0.92rem;\n}\n\n.notice-warning {\n    border-left-color: var(--warning);\n    background: var(--warning-soft);\n}\n\nmain > .notice {\n    margin-bottom: 20px;\n}\n\n/* Buttons */\n\nesp-web-install-button {\n    display: block;\n    margin-top: 18px;\n}\n\n.button-primary {\n    width: 100%;\n    padding: 12px 20px;\n    background: var(--primary);\n    border: 0;\n    border-radius: var(--radius-small);\n    color: var(--primary-contrast);\n    font-weight: 650;\n    cursor: pointer;\n    transition: filter 0.15s, transform 0.05s;\n}\n\n.button-primary:hover {\n    filter: brightness(1.08);\n}\n\n.button-primary:active {\n    transform: translateY(1px);\n}\n\n.button-link {\n    padding: 0;\n    background: none;\n    border: 0;\n    color: var(--primary);\n    cursor: pointer;\n}\n\n.button-link:hover {\n    text-decoration: underline;\n}\n\n.install-fallback {\n    display: block;\n    color: var(--text-muted);\n    font-size: 0.92rem;\n    text-align: center;\n}\n\n@media (max-width: 820px) {\n    .layout {\n        grid-template-columns: minmax(0, 1fr);\n    }\n\n    #Details {\n        position: static;\n    }\n\n    .device-list {\n        max-height: 44vh;\n    }\n\n    .topbar-links a:first-child {\n        display: none;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/esp-web-tools/dist/connect.js":
/*!****************************************************!*\
  !*** ./node_modules/esp-web-tools/dist/connect.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connect: () => (/* binding */ connect)
/* harmony export */ });
const connect = async (button) => {
    Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_esp-web-tools_dist_components_ew-dialog_js-node_modules_esp-web-tools_di-de8f3a"), __webpack_require__.e("vendors-node_modules_esp-web-tools_dist_install-dialog_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./install-dialog.js */ "./node_modules/esp-web-tools/dist/install-dialog.js"));
    let port;
    try {
        port = await navigator.serial.requestPort();
    }
    catch (err) {
        if (err.name === "NotFoundError") {
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_esp-web-tools_dist_components_ew-dialog_js-node_modules_esp-web-tools_di-de8f3a"), __webpack_require__.e("node_modules_esp-web-tools_dist_no-port-picked_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./no-port-picked/index */ "./node_modules/esp-web-tools/dist/no-port-picked/index.js")).then((mod) => mod.openNoPortPickedDialog(() => connect(button)));
            return;
        }
        alert(`Error: ${err.message}`);
        return;
    }
    if (!port) {
        return;
    }
    try {
        await port.open({ baudRate: 115200, bufferSize: 8192 });
    }
    catch (err) {
        alert(err.message);
        return;
    }
    const el = document.createElement("ewt-install-dialog");
    el.port = port;
    el.manifestPath = button.manifest || button.getAttribute("manifest");
    el.overrides = button.overrides;
    el.addEventListener("closed", () => {
        port.close();
    }, { once: true });
    document.body.appendChild(el);
};


/***/ }),

/***/ "./node_modules/esp-web-tools/dist/install-button.js":
/*!***********************************************************!*\
  !*** ./node_modules/esp-web-tools/dist/install-button.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallButton: () => (/* binding */ InstallButton)
/* harmony export */ });
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect */ "./node_modules/esp-web-tools/dist/connect.js");

class InstallButton extends HTMLElement {
    connectedCallback() {
        if (this.renderRoot) {
            return;
        }
        this.renderRoot = this.attachShadow({ mode: "open" });
        if (!InstallButton.isSupported || !InstallButton.isAllowed) {
            this.toggleAttribute("install-unsupported", true);
            this.renderRoot.innerHTML = !InstallButton.isAllowed
                ? "<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>"
                : "<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Google Chrome or Microsoft Edge.</slot>";
            return;
        }
        this.toggleAttribute("install-supported", true);
        const slot = document.createElement("slot");
        slot.addEventListener("click", async (ev) => {
            ev.preventDefault();
            (0,_connect__WEBPACK_IMPORTED_MODULE_0__.connect)(this);
        });
        slot.name = "activate";
        const button = document.createElement("button");
        button.innerText = "Connect";
        slot.append(button);
        if ("adoptedStyleSheets" in Document.prototype &&
            "replaceSync" in CSSStyleSheet.prototype) {
            const sheet = new CSSStyleSheet();
            sheet.replaceSync(InstallButton.style);
            this.renderRoot.adoptedStyleSheets = [sheet];
        }
        else {
            const styleSheet = document.createElement("style");
            styleSheet.innerText = InstallButton.style;
            this.renderRoot.append(styleSheet);
        }
        this.renderRoot.append(slot);
    }
}
InstallButton.isSupported = "serial" in navigator;
InstallButton.isAllowed = window.isSecureContext;
InstallButton.style = `
  button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 24px;
    color: var(--esp-tools-button-text-color, #fff);
    background-color: var(--esp-tools-button-color, #03a9f4);
    border: none;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button:hover::before {
    background-color: rgba(255,255,255,.8);
  }
  button:focus {
    outline: none;
  }
  button:focus::before {
    background-color: white;
  }
  button:active::before {
    background-color: grey;
  }
  :host([active]) button {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: unset;
    pointer-events: none;
  }
  .hidden {
    display: none;
  }`;
customElements.define("esp-web-install-button", InstallButton);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "Tactility Web Installer:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkTactility_Web_Installer"] = self["webpackChunkTactility_Web_Installer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var esp_web_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esp-web-tools */ "./node_modules/esp-web-tools/dist/install-button.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _assets_images_toolbar_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/toolbar-logo.svg */ "./assets/images/toolbar-logo.svg");
/* harmony import */ var _assets_images_favicon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/favicon.svg */ "./assets/images/favicon.svg");






const VERSIONS = ['stable', 'unstable'];

const $ = (id) => document.getElementById(id);

const state = {
    /** version name -> index.json content, or null when it failed to load */
    indexes: {},
    /** merged devices: { id, vendor, name, label, haystack, words, builds: { stable?, unstable? } } */
    devices: [],
    selectedId: null,
    preferredVersion: 'unstable',
    query: '',
};

function getCdnUrl(version, path) {
    const directory = version === 'unstable' ? 'snapshot' : version;
    return `https://cdn.tactilityproject.org/firmware/${directory}/${path}`;
}

/** Lowercase and strip punctuation, so "tdeck" matches "T-Deck". */
function squash(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function fetchIndex(version) {
    return fetch(getCdnUrl(version, 'index.json')).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
    });
}

function mergeDevices() {
    const byId = new Map();
    for (const version of VERSIONS) {
        const index = state.indexes[version];
        if (!index) continue;
        for (const build of index.devices) {
            let device = byId.get(build.id);
            if (!device) {
                device = { id: build.id, builds: {} };
                byId.set(build.id, device);
            }
            device.builds[version] = build;
            // Later versions win, so naming follows the newest build
            device.vendor = build.vendor;
            device.name = build.name;
        }
    }

    state.devices = [...byId.values()];
    for (const device of state.devices) {
        device.showVendor = device.vendor !== device.name;
        device.label = device.showVendor ? `${device.vendor} ${device.name}` : device.name;
        const text = `${device.label} ${device.id}`;
        device.haystack = `${text.toLowerCase()} ${squash(text)}`;
        device.words = device.label.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    }
    state.devices.sort((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base', numeric: true }));
}

/**
 * Whether the token can be split into pieces that are each the start of a word, in word order.
 * Makes "m5paper" match "M5Stack PaperS3" and "tdeck" match "T-Deck".
 */
function matchesWordStarts(token, words, firstWord = 0) {
    if (token === '') {
        return true;
    }
    for (let i = firstWord; i < words.length; i++) {
        const word = words[i];
        // Pieces of a single character only count when they are the entire word, to limit noise
        const minLength = Math.min(2, word.length);
        for (let length = Math.min(word.length, token.length); length >= minLength; length--) {
            if (word.startsWith(token.slice(0, length)) && matchesWordStarts(token.slice(length), words, i + 1)) {
                return true;
            }
        }
    }
    return false;
}

function matchesToken(device, token) {
    if (device.haystack.includes(token)) {
        return true;
    }
    const squashed = squash(token);
    return squashed !== '' && (device.haystack.includes(squashed) || matchesWordStarts(squashed, device.words));
}

function getFilteredDevices() {
    const tokens = state.query.toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) {
        return state.devices;
    }
    return state.devices.filter((device) => tokens.every((token) => matchesToken(device, token)));
}

function getSelectedDevice() {
    return state.devices.find((device) => device.id === state.selectedId) || null;
}

/** The version to show for a device: the preferred one, or whichever is available. */
function getActiveVersion(device) {
    if (device.builds[state.preferredVersion]) {
        return state.preferredVersion;
    }
    return VERSIONS.find((version) => device.builds[version]);
}

function createBadge(text, kind) {
    const badge = document.createElement('span');
    badge.className = `badge badge-${kind}`;
    badge.textContent = text;
    return badge;
}

function renderDeviceList() {
    const list = $('DeviceList');
    const status = $('ListStatus');
    const devices = getFilteredDevices();
    list.replaceChildren();

    for (const device of devices) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'device';
        button.dataset.id = device.id;
        button.setAttribute('aria-pressed', String(device.id === state.selectedId));

        const text = document.createElement('span');
        text.className = 'device-text';
        if (device.showVendor) {
            const vendor = document.createElement('span');
            vendor.className = 'device-vendor';
            vendor.textContent = device.vendor;
            text.append(vendor);
        }
        const name = document.createElement('span');
        name.className = 'device-name';
        name.textContent = device.name;
        text.append(name);
        button.append(text);

        if (!device.builds.stable) {
            button.append(createBadge('Unstable only', 'accent'));
        } else if (!device.builds.unstable) {
            button.append(createBadge('Stable only', 'muted'));
        }
        if (device.builds[getActiveVersion(device)].incubating) {
            button.append(createBadge('Incubating', 'warning'));
        }

        const item = document.createElement('li');
        item.append(button);
        list.append(item);
    }

    if (state.devices.length === 0) {
        return; // Loading or error state owns the status text
    }
    if (devices.length === 0) {
        status.textContent = `No devices match “${state.query.trim()}”.`;
    } else if (devices.length === state.devices.length) {
        status.textContent = `${devices.length} supported devices`;
    } else {
        status.textContent = `${devices.length} of ${state.devices.length} devices`;
    }
}

function createNotice(html, kind) {
    const notice = document.createElement('div');
    notice.className = `notice notice-${kind}`;
    // Messages come from our own CDN and contain markup such as <br/>
    notice.innerHTML = html;
    return notice;
}

function renderVersionLabels() {
    for (const version of VERSIONS) {
        const index = state.indexes[version];
        document.querySelector(`[data-version-label="${version}"]`).textContent = index ? index.version : 'Unavailable';
    }
}

function renderDetails() {
    const device = getSelectedDevice();
    $('DetailsEmpty').hidden = device !== null;
    $('DetailsContent').hidden = device === null;
    if (device === null) {
        return;
    }

    const version = getActiveVersion(device);
    const build = device.builds[version];
    const index = state.indexes[version];

    $('SelectedVendor').textContent = device.showVendor ? device.vendor : '';
    $('SelectedName').textContent = device.name;

    for (const input of document.querySelectorAll('input[name="version"]')) {
        const available = Boolean(device.builds[input.value]);
        input.disabled = !available;
        input.checked = input.value === version;
        input.closest('.segment').title = available ? '' : `No ${input.value} build for this device`;
    }

    const details = $('VersionDetails');
    details.replaceChildren();
    if (index.created && index.gitCommit) {
        const link = document.createElement('a');
        link.href = `https://github.com/ByteWelder/Tactility/commit/${index.gitCommit}`;
        link.textContent = index.gitCommit.substring(0, 7);
        details.append(`Built on ${new Date(index.created).toLocaleString()} from commit `, link);
    }

    const info = $('DeviceInfo');
    info.replaceChildren();
    if (build.incubating) {
        info.append(createNotice('This device is incubating. It is not fully implemented!', 'warning'));
    }
    if (build.warningMessage) {
        info.append(createNotice(build.warningMessage, 'warning'));
    }
    if (build.infoMessage) {
        info.append(createNotice(build.infoMessage, 'info'));
    }

    $('Installer').manifest = getCdnUrl(version, `${device.id}.json`);
}

function selectDevice(id) {
    state.selectedId = id;
    for (const button of document.querySelectorAll('.device')) {
        button.setAttribute('aria-pressed', String(button.dataset.id === id));
    }
    renderDetails();
    if (getHashDeviceId() !== id) {
        // Replace rather than push, so browsing devices doesn't fill up the history
        history.replaceState(null, '', `#${encodeURIComponent(id)}`);
    }
}

function getHashDeviceId() {
    try {
        return decodeURIComponent(location.hash.slice(1));
    } catch (error) {
        return '';
    }
}

/** Select the device from the URL, e.g. https://install.tactilityproject.org/#lilygo-tdeck */
function selectDeviceFromHash() {
    const id = getHashDeviceId();
    if (id === state.selectedId || !state.devices.some((device) => device.id === id)) {
        return;
    }
    if (!getFilteredDevices().some((device) => device.id === id)) {
        // Don't leave the linked device hidden behind a search query
        state.query = '';
        $('Search').value = '';
        renderDeviceList();
    }
    selectDevice(id);
    const button = document.querySelector('.device[aria-pressed="true"]');
    if (button) {
        button.scrollIntoView({ block: 'nearest' });
    }
}

function showLoadError() {
    const status = $('ListStatus');
    status.textContent = 'Failed to fetch device info. ';
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'button-link';
    retry.textContent = 'Try again';
    retry.addEventListener('click', load);
    status.append(retry);
}

async function load() {
    $('ListStatus').textContent = 'Loading devices…';
    const results = await Promise.allSettled(VERSIONS.map(fetchIndex));
    results.forEach((result, i) => {
        state.indexes[VERSIONS[i]] = result.status === 'fulfilled' ? result.value : null;
        if (result.status === 'rejected') {
            console.warn(`Failed to fetch ${VERSIONS[i]} index`, result.reason);
        }
    });

    mergeDevices();
    renderVersionLabels();
    if (state.devices.length === 0) {
        showLoadError();
    }
    renderDeviceList();
    renderDetails();
    selectDeviceFromHash();
}

$('NavbarImage').src = _assets_images_toolbar_logo_svg__WEBPACK_IMPORTED_MODULE_2__;
$('UnsupportedNotice').hidden = 'serial' in navigator;

$('Search').addEventListener('input', (event) => {
    state.query = event.target.value;
    renderDeviceList();
});

$('Search').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const first = getFilteredDevices()[0];
        if (first) {
            selectDevice(first.id);
        }
    }
});

$('DeviceList').addEventListener('click', (event) => {
    const button = event.target.closest('.device');
    if (button) {
        selectDevice(button.dataset.id);
    }
});

$('VersionOptions').addEventListener('change', (event) => {
    state.preferredVersion = event.target.value;
    renderDeviceList();
    renderDetails();
});

window.addEventListener('hashchange', selectDeviceFromHash);

load();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw4RUFBOEUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxnQkFBZ0I7QUFDdEY7QUFDQSxtQ0FBbUMsMENBQTBDO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9ELFVBQVU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1QkFBdUI7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsYUFBYTtBQUN6RDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qiw0REFBVztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovL1RhY3RpbGl0eSBXZWIgSW5zdGFsbGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RhY3RpbGl0eSBXZWIgSW5zdGFsbGVyLy4vbm9kZV9tb2R1bGVzL2VzcC13ZWItdG9vbHMvZGlzdC9jb25uZWN0LmpzIiwid2VicGFjazovL1RhY3RpbGl0eSBXZWIgSW5zdGFsbGVyLy4vbm9kZV9tb2R1bGVzL2VzcC13ZWItdG9vbHMvZGlzdC9pbnN0YWxsLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVGFjdGlsaXR5IFdlYiBJbnN0YWxsZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVGFjdGlsaXR5IFdlYiBJbnN0YWxsZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVGFjdGlsaXR5IFdlYiBJbnN0YWxsZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RhY3RpbGl0eSBXZWIgSW5zdGFsbGVyLy4vc3JjL2FwcC5jc3M/YTY3MiIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVGFjdGlsaXR5IFdlYiBJbnN0YWxsZXIvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vVGFjdGlsaXR5IFdlYiBJbnN0YWxsZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RhY3RpbGl0eSBXZWIgSW5zdGFsbGVyL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RhY3RpbGl0eSBXZWIgSW5zdGFsbGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL1RhY3RpbGl0eSBXZWIgSW5zdGFsbGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL1RhY3RpbGl0eSBXZWIgSW5zdGFsbGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9UYWN0aWxpdHkgV2ViIEluc3RhbGxlci8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIC0tYmc6ICMxNzE4MWY7XG4gICAgLS1zdXJmYWNlOiAjMjEyMjJiO1xuICAgIC0tc3VyZmFjZS1yYWlzZWQ6ICMyYTJjMzc7XG4gICAgLS1ib3JkZXI6ICMzNjM4NDY7XG4gICAgLS10ZXh0OiAjZThlOWYwO1xuICAgIC0tdGV4dC1tdXRlZDogIzlhOWRiMDtcbiAgICAtLXByaW1hcnk6ICMzM2JiZmY7XG4gICAgLS1wcmltYXJ5LWNvbnRyYXN0OiAjMDYyMDJlO1xuICAgIC0tcHJpbWFyeS1zb2Z0OiByZ2JhKDUxLCAxODcsIDI1NSwgMC4xNCk7XG4gICAgLS1zZWNvbmRhcnk6ICNlZTgxYzM7XG4gICAgLS13YXJuaW5nOiAjZjViODRhO1xuICAgIC0td2FybmluZy1zb2Z0OiByZ2JhKDI0NSwgMTg0LCA3NCwgMC4xMyk7XG4gICAgLS1yYWRpdXM6IDE0cHg7XG4gICAgLS1yYWRpdXMtc21hbGw6IDlweDtcbiAgICAtLXNoYWRvdzogMCAxMnB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgICA6cm9vdCB7XG4gICAgICAgIGNvbG9yLXNjaGVtZTogbGlnaHQ7XG4gICAgICAgIC0tYmc6ICNmM2Y0Zjg7XG4gICAgICAgIC0tc3VyZmFjZTogI2ZmZmZmZjtcbiAgICAgICAgLS1zdXJmYWNlLXJhaXNlZDogI2YwZjFmNjtcbiAgICAgICAgLS1ib3JkZXI6ICNkY2RlZTg7XG4gICAgICAgIC0tdGV4dDogIzFjMWQyNjtcbiAgICAgICAgLS10ZXh0LW11dGVkOiAjNjI2NTdhO1xuICAgICAgICAtLXByaW1hcnk6ICMwYjg0YzY7XG4gICAgICAgIC0tcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAgICAgLS1wcmltYXJ5LXNvZnQ6IHJnYmEoMTEsIDEzMiwgMTk4LCAwLjExKTtcbiAgICAgICAgLS1zZWNvbmRhcnk6ICNjMjQwOGY7XG4gICAgICAgIC0td2FybmluZzogI2E4NmEwMDtcbiAgICAgICAgLS13YXJuaW5nLXNvZnQ6IHJnYmEoMjE0LCAxNDQsIDE2LCAwLjE0KTtcbiAgICAgICAgLS1zaGFkb3c6IDAgMTBweCAyOHB4IHJnYmEoMzAsIDM0LCA2MCwgMC4wOCk7XG4gICAgfVxufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuYSB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmJ1dHRvbiwgaW5wdXQge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogVG9wIGJhciAqL1xuXG4udG9wYmFyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbn1cblxuLnRvcGJhci1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xufVxuXG4uYnJhbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5icmFuZDpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnJhbmQtc3ViIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRvcGJhci1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjkycmVtO1xufVxuXG4udG9wYmFyLWxpbmtzIGEge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLnRvcGJhci1saW5rcyBhOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBQYWdlICovXG5cbm1haW4ge1xuICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDM2cHggMjBweCA2NHB4O1xufVxuXG4uaW50cm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5cbi5pbnRybyBoMSB7XG4gICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS42cmVtLCAzLjV2dywgMi4xcmVtKTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4uaW50cm8gcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLmxheW91dCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgICBwYWRkaW5nOiAyMnB4O1xufVxuXG4jRGV0YWlscyB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDIwcHg7XG59XG5cbi5jYXJkIGgyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbjogMCAwIDE4cHg7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdGVwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi8qIFNlYXJjaCAqL1xuXG4uc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2ggc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMTNweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMXB4IDE0cHggMTFweCA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbWFsbCk7XG59XG5cbi5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tcHJpbWFyeS1zb2Z0KTtcbn1cblxuLmxpc3Qtc3RhdHVzIHtcbiAgICBtYXJnaW46IDEycHggMnB4IDhweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuXG4vKiBEZXZpY2UgbGlzdCAqL1xuXG4uZGV2aWNlLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbiAgICBtYXgtaGVpZ2h0OiBtaW4oNTZ2aCwgNTIwcHgpO1xuICAgIG1hcmdpbjogMCAtOHB4O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1ib3JkZXIpIHRyYW5zcGFyZW50O1xufVxuXG4uZGV2aWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc21hbGwpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGV2aWNlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXJhaXNlZCk7XG59XG5cbi5kZXZpY2VbYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1zb2Z0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uZGV2aWNlLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbn1cblxuLmRldmljZS12ZW5kb3Ige1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDAuNzZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLmRldmljZS1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4uYmFkZ2Uge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYmFkZ2UtYWNjZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5KSAxNiUsIHRyYW5zcGFyZW50KTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLmJhZGdlLW11dGVkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLXJhaXNlZCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uYmFkZ2Utd2FybmluZyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2FybmluZy1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG59XG5cbi8qIERldGFpbHMgKi9cblxuLmVtcHR5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMzZweCAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxlY3RlZC1kZXZpY2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5zZWxlY3RlZC12ZW5kb3Ige1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5zZWxlY3RlZC1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbn1cblxuLnNlZ21lbnRlZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbWFsbCk7XG59XG5cbi5zZWdtZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VnbWVudCBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogaW5oZXJpdDtcbn1cblxuLnNlZ21lbnQtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uc2VnbWVudC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlZ21lbnQtc3ViIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xufVxuXG4uc2VnbWVudCBpbnB1dDpjaGVja2VkICsgLnNlZ21lbnQtYm9keSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIGluc2V0IDAgMCAwIDFweCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlZ21lbnQgaW5wdXQ6Y2hlY2tlZCArIC5zZWdtZW50LWJvZHkgLnNlZ21lbnQtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLnNlZ21lbnQgaW5wdXQ6Zm9jdXMtdmlzaWJsZSArIC5zZWdtZW50LWJvZHkge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uc2VnbWVudDpoYXMoaW5wdXQ6ZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IDAuNDU7XG59XG5cbi5idWlsZC1kZXRhaWxzIHtcbiAgICBtaW4taGVpZ2h0OiAxLjNlbTtcbiAgICBtYXJnaW46IDEwcHggMnB4IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbn1cblxuLyogTm90aWNlcyAqL1xuXG4ubm90aWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbWFsbCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1zb2Z0KTtcbiAgICBmb250LXNpemU6IDAuOTJyZW07XG59XG5cbi5ub3RpY2Utd2FybmluZyB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctc29mdCk7XG59XG5cbm1haW4gPiAubm90aWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4vKiBCdXR0b25zICovXG5cbmVzcC13ZWItaW5zdGFsbC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cbi5idXR0b24tcHJpbWFyeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc21hbGwpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICBmb250LXdlaWdodDogNjUwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4xNXMsIHRyYW5zZm9ybSAwLjA1cztcbn1cblxuLmJ1dHRvbi1wcmltYXJ5OmhvdmVyIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wOCk7XG59XG5cbi5idXR0b24tcHJpbWFyeTphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uYnV0dG9uLWxpbmsge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbi1saW5rOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmluc3RhbGwtZmFsbGJhY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXNpemU6IDAuOTJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICAubGF5b3V0IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcbiAgICB9XG5cbiAgICAjRGV0YWlscyB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgfVxuXG4gICAgLmRldmljZS1saXN0IHtcbiAgICAgICAgbWF4LWhlaWdodDogNDR2aDtcbiAgICB9XG5cbiAgICAudG9wYmFyLWxpbmtzIGE6Zmlyc3QtY2hpbGQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsMkJBQTJCO1FB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SSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICAgIC0tYmc6ICMxNzE4MWY7XFxuICAgIC0tc3VyZmFjZTogIzIxMjIyYjtcXG4gICAgLS1zdXJmYWNlLXJhaXNlZDogIzJhMmMzNztcXG4gICAgLS1ib3JkZXI6ICMzNjM4NDY7XFxuICAgIC0tdGV4dDogI2U4ZTlmMDtcXG4gICAgLS10ZXh0LW11dGVkOiAjOWE5ZGIwO1xcbiAgICAtLXByaW1hcnk6ICMzM2JiZmY7XFxuICAgIC0tcHJpbWFyeS1jb250cmFzdDogIzA2MjAyZTtcXG4gICAgLS1wcmltYXJ5LXNvZnQ6IHJnYmEoNTEsIDE4NywgMjU1LCAwLjE0KTtcXG4gICAgLS1zZWNvbmRhcnk6ICNlZTgxYzM7XFxuICAgIC0td2FybmluZzogI2Y1Yjg0YTtcXG4gICAgLS13YXJuaW5nLXNvZnQ6IHJnYmEoMjQ1LCAxODQsIDc0LCAwLjEzKTtcXG4gICAgLS1yYWRpdXM6IDE0cHg7XFxuICAgIC0tcmFkaXVzLXNtYWxsOiA5cHg7XFxuICAgIC0tc2hhZG93OiAwIDEycHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICBjb2xvci1zY2hlbWU6IGxpZ2h0O1xcbiAgICAgICAgLS1iZzogI2YzZjRmODtcXG4gICAgICAgIC0tc3VyZmFjZTogI2ZmZmZmZjtcXG4gICAgICAgIC0tc3VyZmFjZS1yYWlzZWQ6ICNmMGYxZjY7XFxuICAgICAgICAtLWJvcmRlcjogI2RjZGVlODtcXG4gICAgICAgIC0tdGV4dDogIzFjMWQyNjtcXG4gICAgICAgIC0tdGV4dC1tdXRlZDogIzYyNjU3YTtcXG4gICAgICAgIC0tcHJpbWFyeTogIzBiODRjNjtcXG4gICAgICAgIC0tcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcXG4gICAgICAgIC0tcHJpbWFyeS1zb2Z0OiByZ2JhKDExLCAxMzIsIDE5OCwgMC4xMSk7XFxuICAgICAgICAtLXNlY29uZGFyeTogI2MyNDA4ZjtcXG4gICAgICAgIC0td2FybmluZzogI2E4NmEwMDtcXG4gICAgICAgIC0td2FybmluZy1zb2Z0OiByZ2JhKDIxNCwgMTQ0LCAxNiwgMC4xNCk7XFxuICAgICAgICAtLXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgzMCwgMzQsIDYwLCAwLjA4KTtcXG4gICAgfVxcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5idXR0b24sIGlucHV0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyogVG9wIGJhciAqL1xcblxcbi50b3BiYXIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XFxufVxcblxcbi50b3BiYXItaW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMTZweDtcXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxufVxcblxcbi5icmFuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICBmb250LXdlaWdodDogNjUwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmJyYW5kOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYnJhbmQtc3ViIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udG9wYmFyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDAuOTJyZW07XFxufVxcblxcbi50b3BiYXItbGlua3MgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcXG59XFxuXFxuLnRvcGJhci1saW5rcyBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIFBhZ2UgKi9cXG5cXG5tYWluIHtcXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAzNnB4IDIwcHggNjRweDtcXG59XFxuXFxuLmludHJvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcXG59XFxuXFxuLmludHJvIGgxIHtcXG4gICAgbWFyZ2luOiAwIDAgNnB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNnJlbSwgMy41dncsIDIuMXJlbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xcbn1cXG5cXG4uaW50cm8gcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xcbn1cXG5cXG4ubGF5b3V0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICAgIHBhZGRpbmc6IDIycHg7XFxufVxcblxcbiNEZXRhaWxzIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAyMHB4O1xcbn1cXG5cXG4uY2FyZCBoMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luOiAwIDAgMThweDtcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc3RlcCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktc29mdCk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBTZWFyY2ggKi9cXG5cXG4uc2VhcmNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VhcmNoIHN2ZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDEzcHg7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB2YXIoLS10ZXh0LW11dGVkKTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDExcHggMTRweCAxMXB4IDQwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtYWxsKTtcXG59XFxuXFxuLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxufVxcblxcbi5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tcHJpbWFyeS1zb2Z0KTtcXG59XFxuXFxuLmxpc3Qtc3RhdHVzIHtcXG4gICAgbWFyZ2luOiAxMnB4IDJweCA4cHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbn1cXG5cXG4vKiBEZXZpY2UgbGlzdCAqL1xcblxcbi5kZXZpY2UtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbiAgICBtYXgtaGVpZ2h0OiBtaW4oNTZ2aCwgNTIwcHgpO1xcbiAgICBtYXJnaW46IDAgLThweDtcXG4gICAgcGFkZGluZzogMCA4cHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1ib3JkZXIpIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGV2aWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbWFsbCk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRldmljZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcXG59XFxuXFxuLmRldmljZVthcmlhLXByZXNzZWQ9XFxcInRydWVcXFwiXSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktc29mdCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5kZXZpY2UtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi13aWR0aDogMDtcXG59XFxuXFxuLmRldmljZS12ZW5kb3Ige1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIGZvbnQtc2l6ZTogMC43NnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuLmRldmljZS1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi5iYWRnZSB7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBwYWRkaW5nOiAycHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5iYWRnZS1hY2NlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2Vjb25kYXJ5KSAxNiUsIHRyYW5zcGFyZW50KTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5iYWRnZS1tdXRlZCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtcmFpc2VkKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xcbn1cXG5cXG4uYmFkZ2Utd2FybmluZyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmctc29mdCk7XFxuICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcXG59XFxuXFxuLyogRGV0YWlscyAqL1xcblxcbi5lbXB0eSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMzZweCAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkLWRldmljZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbi5zZWxlY3RlZC12ZW5kb3Ige1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG59XFxuXFxuLnNlbGVjdGVkLW5hbWUge1xcbiAgICBmb250LXNpemU6IDEuMzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcXG59XFxuXFxuLnNlZ21lbnRlZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1yYWlzZWQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc21hbGwpO1xcbn1cXG5cXG4uc2VnbWVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VnbWVudCBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2VnbWVudC1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnNlZ21lbnQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc2VnbWVudC1zdWIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcXG59XFxuXFxuLnNlZ21lbnQgaW5wdXQ6Y2hlY2tlZCArIC5zZWdtZW50LWJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIGluc2V0IDAgMCAwIDFweCB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnNlZ21lbnQgaW5wdXQ6Y2hlY2tlZCArIC5zZWdtZW50LWJvZHkgLnNlZ21lbnQtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5zZWdtZW50IGlucHV0OmZvY3VzLXZpc2libGUgKyAuc2VnbWVudC1ib2R5IHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4uc2VnbWVudDpoYXMoaW5wdXQ6ZGlzYWJsZWQpIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgb3BhY2l0eTogMC40NTtcXG59XFxuXFxuLmJ1aWxkLWRldGFpbHMge1xcbiAgICBtaW4taGVpZ2h0OiAxLjNlbTtcXG4gICAgbWFyZ2luOiAxMHB4IDJweCAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcXG59XFxuXFxuLyogTm90aWNlcyAqL1xcblxcbi5ub3RpY2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbWFsbCk7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktc29mdCk7XFxuICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcXG59XFxuXFxuLm5vdGljZS13YXJuaW5nIHtcXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuaW5nLXNvZnQpO1xcbn1cXG5cXG5tYWluID4gLm5vdGljZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG5cXG5lc3Atd2ViLWluc3RhbGwtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDE4cHg7XFxufVxcblxcbi5idXR0b24tcHJpbWFyeSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbWFsbCk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbnRyYXN0KTtcXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4xNXMsIHRyYW5zZm9ybSAwLjA1cztcXG59XFxuXFxuLmJ1dHRvbi1wcmltYXJ5OmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDgpO1xcbn1cXG5cXG4uYnV0dG9uLXByaW1hcnk6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbi5idXR0b24tbGluayB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b24tbGluazpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaW5zdGFsbC1mYWxsYmFjayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcXG4gICAgLmxheW91dCB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpO1xcbiAgICB9XFxuXFxuICAgICNEZXRhaWxzIHtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIH1cXG5cXG4gICAgLmRldmljZS1saXN0IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQ0dmg7XFxuICAgIH1cXG5cXG4gICAgLnRvcGJhci1saW5rcyBhOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgY29uc3QgY29ubmVjdCA9IGFzeW5jIChidXR0b24pID0+IHtcbiAgICBpbXBvcnQoXCIuL2luc3RhbGwtZGlhbG9nLmpzXCIpO1xuICAgIGxldCBwb3J0O1xuICAgIHRyeSB7XG4gICAgICAgIHBvcnQgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VyaWFsLnJlcXVlc3RQb3J0KCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5uYW1lID09PSBcIk5vdEZvdW5kRXJyb3JcIikge1xuICAgICAgICAgICAgaW1wb3J0KFwiLi9uby1wb3J0LXBpY2tlZC9pbmRleFwiKS50aGVuKChtb2QpID0+IG1vZC5vcGVuTm9Qb3J0UGlja2VkRGlhbG9nKCgpID0+IGNvbm5lY3QoYnV0dG9uKSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFsZXJ0KGBFcnJvcjogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwb3J0Lm9wZW4oeyBiYXVkUmF0ZTogMTE1MjAwLCBidWZmZXJTaXplOiA4MTkyIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJld3QtaW5zdGFsbC1kaWFsb2dcIik7XG4gICAgZWwucG9ydCA9IHBvcnQ7XG4gICAgZWwubWFuaWZlc3RQYXRoID0gYnV0dG9uLm1hbmlmZXN0IHx8IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJtYW5pZmVzdFwiKTtcbiAgICBlbC5vdmVycmlkZXMgPSBidXR0b24ub3ZlcnJpZGVzO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZWRcIiwgKCkgPT4ge1xuICAgICAgICBwb3J0LmNsb3NlKCk7XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiLi9jb25uZWN0XCI7XG5leHBvcnQgY2xhc3MgSW5zdGFsbEJ1dHRvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyUm9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgIGlmICghSW5zdGFsbEJ1dHRvbi5pc1N1cHBvcnRlZCB8fCAhSW5zdGFsbEJ1dHRvbi5pc0FsbG93ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKFwiaW5zdGFsbC11bnN1cHBvcnRlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdC5pbm5lckhUTUwgPSAhSW5zdGFsbEJ1dHRvbi5pc0FsbG93ZWRcbiAgICAgICAgICAgICAgICA/IFwiPHNsb3QgbmFtZT0nbm90LWFsbG93ZWQnPllvdSBjYW4gb25seSBpbnN0YWxsIEVTUCBkZXZpY2VzIG9uIEhUVFBTIHdlYnNpdGVzIG9yIG9uIHRoZSBsb2NhbGhvc3QuPC9zbG90PlwiXG4gICAgICAgICAgICAgICAgOiBcIjxzbG90IG5hbWU9J3Vuc3VwcG9ydGVkJz5Zb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbnN0YWxsaW5nIHRoaW5ncyBvbiBFU1AgZGV2aWNlcy4gVXNlIEdvb2dsZSBDaHJvbWUgb3IgTWljcm9zb2Z0IEVkZ2UuPC9zbG90PlwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKFwiaW5zdGFsbC1zdXBwb3J0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2xvdFwiKTtcbiAgICAgICAgc2xvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGV2KSA9PiB7XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29ubmVjdCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsb3QubmFtZSA9IFwiYWN0aXZhdGVcIjtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiQ29ubmVjdFwiO1xuICAgICAgICBzbG90LmFwcGVuZChidXR0b24pO1xuICAgICAgICBpZiAoXCJhZG9wdGVkU3R5bGVTaGVldHNcIiBpbiBEb2N1bWVudC5wcm90b3R5cGUgJiZcbiAgICAgICAgICAgIFwicmVwbGFjZVN5bmNcIiBpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMoSW5zdGFsbEJ1dHRvbi5zdHlsZSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gW3NoZWV0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgICBzdHlsZVNoZWV0LmlubmVyVGV4dCA9IEluc3RhbGxCdXR0b24uc3R5bGU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QuYXBwZW5kKHN0eWxlU2hlZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyUm9vdC5hcHBlbmQoc2xvdCk7XG4gICAgfVxufVxuSW5zdGFsbEJ1dHRvbi5pc1N1cHBvcnRlZCA9IFwic2VyaWFsXCIgaW4gbmF2aWdhdG9yO1xuSW5zdGFsbEJ1dHRvbi5pc0FsbG93ZWQgPSB3aW5kb3cuaXNTZWN1cmVDb250ZXh0O1xuSW5zdGFsbEJ1dHRvbi5zdHlsZSA9IGBcbiAgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICBjb2xvcjogdmFyKC0tZXNwLXRvb2xzLWJ1dHRvbi10ZXh0LWNvbG9yLCAjZmZmKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lc3AtdG9vbHMtYnV0dG9uLWNvbG9yLCAjMDNhOWY0KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tZXNwLXRvb2xzLWJ1dHRvbi1ib3JkZXItcmFkaXVzLCA5OTk5cHgpO1xuICB9XG4gIGJ1dHRvbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1lc3AtdG9vbHMtYnV0dG9uLWJvcmRlci1yYWRpdXMsIDk5OTlweCk7XG4gIH1cbiAgYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjgpO1xuICB9XG4gIGJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgYnV0dG9uOmFjdGl2ZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICB9XG4gIDpob3N0KFthY3RpdmVdKSBidXR0b24ge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjdXJzb3I6IHVuc2V0O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1gO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZXNwLXdlYi1pbnN0YWxsLWJ1dHRvblwiLCBJbnN0YWxsQnV0dG9uKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiVGFjdGlsaXR5IFdlYiBJbnN0YWxsZXI6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rVGFjdGlsaXR5X1dlYl9JbnN0YWxsZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rVGFjdGlsaXR5X1dlYl9JbnN0YWxsZXJcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICdlc3Atd2ViLXRvb2xzJztcbmltcG9ydCAnLi9hcHAuY3NzJztcblxuaW1wb3J0IHRvb2xiYXJMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdG9vbGJhci1sb2dvLnN2Zyc7XG5pbXBvcnQgJy4uL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5zdmcnO1xuXG5jb25zdCBWRVJTSU9OUyA9IFsnc3RhYmxlJywgJ3Vuc3RhYmxlJ107XG5cbmNvbnN0ICQgPSAoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuY29uc3Qgc3RhdGUgPSB7XG4gICAgLyoqIHZlcnNpb24gbmFtZSAtPiBpbmRleC5qc29uIGNvbnRlbnQsIG9yIG51bGwgd2hlbiBpdCBmYWlsZWQgdG8gbG9hZCAqL1xuICAgIGluZGV4ZXM6IHt9LFxuICAgIC8qKiBtZXJnZWQgZGV2aWNlczogeyBpZCwgdmVuZG9yLCBuYW1lLCBsYWJlbCwgaGF5c3RhY2ssIHdvcmRzLCBidWlsZHM6IHsgc3RhYmxlPywgdW5zdGFibGU/IH0gfSAqL1xuICAgIGRldmljZXM6IFtdLFxuICAgIHNlbGVjdGVkSWQ6IG51bGwsXG4gICAgcHJlZmVycmVkVmVyc2lvbjogJ3Vuc3RhYmxlJyxcbiAgICBxdWVyeTogJycsXG59O1xuXG5mdW5jdGlvbiBnZXRDZG5VcmwodmVyc2lvbiwgcGF0aCkge1xuICAgIGNvbnN0IGRpcmVjdG9yeSA9IHZlcnNpb24gPT09ICd1bnN0YWJsZScgPyAnc25hcHNob3QnIDogdmVyc2lvbjtcbiAgICByZXR1cm4gYGh0dHBzOi8vY2RuLnRhY3RpbGl0eXByb2plY3Qub3JnL2Zpcm13YXJlLyR7ZGlyZWN0b3J5fS8ke3BhdGh9YDtcbn1cblxuLyoqIExvd2VyY2FzZSBhbmQgc3RyaXAgcHVuY3R1YXRpb24sIHNvIFwidGRlY2tcIiBtYXRjaGVzIFwiVC1EZWNrXCIuICovXG5mdW5jdGlvbiBzcXVhc2godGV4dCkge1xuICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldKy9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGZldGNoSW5kZXgodmVyc2lvbikge1xuICAgIHJldHVybiBmZXRjaChnZXRDZG5VcmwodmVyc2lvbiwgJ2luZGV4Lmpzb24nKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlRGV2aWNlcygpIHtcbiAgICBjb25zdCBieUlkID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgdmVyc2lvbiBvZiBWRVJTSU9OUykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4ZXNbdmVyc2lvbl07XG4gICAgICAgIGlmICghaW5kZXgpIGNvbnRpbnVlO1xuICAgICAgICBmb3IgKGNvbnN0IGJ1aWxkIG9mIGluZGV4LmRldmljZXMpIHtcbiAgICAgICAgICAgIGxldCBkZXZpY2UgPSBieUlkLmdldChidWlsZC5pZCk7XG4gICAgICAgICAgICBpZiAoIWRldmljZSkge1xuICAgICAgICAgICAgICAgIGRldmljZSA9IHsgaWQ6IGJ1aWxkLmlkLCBidWlsZHM6IHt9IH07XG4gICAgICAgICAgICAgICAgYnlJZC5zZXQoYnVpbGQuaWQsIGRldmljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXZpY2UuYnVpbGRzW3ZlcnNpb25dID0gYnVpbGQ7XG4gICAgICAgICAgICAvLyBMYXRlciB2ZXJzaW9ucyB3aW4sIHNvIG5hbWluZyBmb2xsb3dzIHRoZSBuZXdlc3QgYnVpbGRcbiAgICAgICAgICAgIGRldmljZS52ZW5kb3IgPSBidWlsZC52ZW5kb3I7XG4gICAgICAgICAgICBkZXZpY2UubmFtZSA9IGJ1aWxkLm5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5kZXZpY2VzID0gWy4uLmJ5SWQudmFsdWVzKCldO1xuICAgIGZvciAoY29uc3QgZGV2aWNlIG9mIHN0YXRlLmRldmljZXMpIHtcbiAgICAgICAgZGV2aWNlLnNob3dWZW5kb3IgPSBkZXZpY2UudmVuZG9yICE9PSBkZXZpY2UubmFtZTtcbiAgICAgICAgZGV2aWNlLmxhYmVsID0gZGV2aWNlLnNob3dWZW5kb3IgPyBgJHtkZXZpY2UudmVuZG9yfSAke2RldmljZS5uYW1lfWAgOiBkZXZpY2UubmFtZTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGAke2RldmljZS5sYWJlbH0gJHtkZXZpY2UuaWR9YDtcbiAgICAgICAgZGV2aWNlLmhheXN0YWNrID0gYCR7dGV4dC50b0xvd2VyQ2FzZSgpfSAke3NxdWFzaCh0ZXh0KX1gO1xuICAgICAgICBkZXZpY2Uud29yZHMgPSBkZXZpY2UubGFiZWwudG9Mb3dlckNhc2UoKS5zcGxpdCgvW15hLXowLTldKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgc3RhdGUuZGV2aWNlcy5zb3J0KChhLCBiKSA9PiBhLmxhYmVsLmxvY2FsZUNvbXBhcmUoYi5sYWJlbCwgdW5kZWZpbmVkLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScsIG51bWVyaWM6IHRydWUgfSkpO1xufVxuXG4vKipcbiAqIFdoZXRoZXIgdGhlIHRva2VuIGNhbiBiZSBzcGxpdCBpbnRvIHBpZWNlcyB0aGF0IGFyZSBlYWNoIHRoZSBzdGFydCBvZiBhIHdvcmQsIGluIHdvcmQgb3JkZXIuXG4gKiBNYWtlcyBcIm01cGFwZXJcIiBtYXRjaCBcIk01U3RhY2sgUGFwZXJTM1wiIGFuZCBcInRkZWNrXCIgbWF0Y2ggXCJULURlY2tcIi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1dvcmRTdGFydHModG9rZW4sIHdvcmRzLCBmaXJzdFdvcmQgPSAwKSB7XG4gICAgaWYgKHRva2VuID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGZpcnN0V29yZDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpXTtcbiAgICAgICAgLy8gUGllY2VzIG9mIGEgc2luZ2xlIGNoYXJhY3RlciBvbmx5IGNvdW50IHdoZW4gdGhleSBhcmUgdGhlIGVudGlyZSB3b3JkLCB0byBsaW1pdCBub2lzZVxuICAgICAgICBjb25zdCBtaW5MZW5ndGggPSBNYXRoLm1pbigyLCB3b3JkLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGxlbmd0aCA9IE1hdGgubWluKHdvcmQubGVuZ3RoLCB0b2tlbi5sZW5ndGgpOyBsZW5ndGggPj0gbWluTGVuZ3RoOyBsZW5ndGgtLSkge1xuICAgICAgICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aCh0b2tlbi5zbGljZSgwLCBsZW5ndGgpKSAmJiBtYXRjaGVzV29yZFN0YXJ0cyh0b2tlbi5zbGljZShsZW5ndGgpLCB3b3JkcywgaSArIDEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzVG9rZW4oZGV2aWNlLCB0b2tlbikge1xuICAgIGlmIChkZXZpY2UuaGF5c3RhY2suaW5jbHVkZXModG9rZW4pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBzcXVhc2hlZCA9IHNxdWFzaCh0b2tlbik7XG4gICAgcmV0dXJuIHNxdWFzaGVkICE9PSAnJyAmJiAoZGV2aWNlLmhheXN0YWNrLmluY2x1ZGVzKHNxdWFzaGVkKSB8fCBtYXRjaGVzV29yZFN0YXJ0cyhzcXVhc2hlZCwgZGV2aWNlLndvcmRzKSk7XG59XG5cbmZ1bmN0aW9uIGdldEZpbHRlcmVkRGV2aWNlcygpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBzdGF0ZS5xdWVyeS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5kZXZpY2VzO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUuZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT4gdG9rZW5zLmV2ZXJ5KCh0b2tlbikgPT4gbWF0Y2hlc1Rva2VuKGRldmljZSwgdG9rZW4pKSk7XG59XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGVkRGV2aWNlKCkge1xuICAgIHJldHVybiBzdGF0ZS5kZXZpY2VzLmZpbmQoKGRldmljZSkgPT4gZGV2aWNlLmlkID09PSBzdGF0ZS5zZWxlY3RlZElkKSB8fCBudWxsO1xufVxuXG4vKiogVGhlIHZlcnNpb24gdG8gc2hvdyBmb3IgYSBkZXZpY2U6IHRoZSBwcmVmZXJyZWQgb25lLCBvciB3aGljaGV2ZXIgaXMgYXZhaWxhYmxlLiAqL1xuZnVuY3Rpb24gZ2V0QWN0aXZlVmVyc2lvbihkZXZpY2UpIHtcbiAgICBpZiAoZGV2aWNlLmJ1aWxkc1tzdGF0ZS5wcmVmZXJyZWRWZXJzaW9uXSkge1xuICAgICAgICByZXR1cm4gc3RhdGUucHJlZmVycmVkVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIFZFUlNJT05TLmZpbmQoKHZlcnNpb24pID0+IGRldmljZS5idWlsZHNbdmVyc2lvbl0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCYWRnZSh0ZXh0LCBraW5kKSB7XG4gICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYmFkZ2UuY2xhc3NOYW1lID0gYGJhZGdlIGJhZGdlLSR7a2luZH1gO1xuICAgIGJhZGdlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gYmFkZ2U7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRldmljZUxpc3QoKSB7XG4gICAgY29uc3QgbGlzdCA9ICQoJ0RldmljZUxpc3QnKTtcbiAgICBjb25zdCBzdGF0dXMgPSAkKCdMaXN0U3RhdHVzJyk7XG4gICAgY29uc3QgZGV2aWNlcyA9IGdldEZpbHRlcmVkRGV2aWNlcygpO1xuICAgIGxpc3QucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBmb3IgKGNvbnN0IGRldmljZSBvZiBkZXZpY2VzKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2RldmljZSc7XG4gICAgICAgIGJ1dHRvbi5kYXRhc2V0LmlkID0gZGV2aWNlLmlkO1xuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCBTdHJpbmcoZGV2aWNlLmlkID09PSBzdGF0ZS5zZWxlY3RlZElkKSk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGV4dC5jbGFzc05hbWUgPSAnZGV2aWNlLXRleHQnO1xuICAgICAgICBpZiAoZGV2aWNlLnNob3dWZW5kb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHZlbmRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHZlbmRvci5jbGFzc05hbWUgPSAnZGV2aWNlLXZlbmRvcic7XG4gICAgICAgICAgICB2ZW5kb3IudGV4dENvbnRlbnQgPSBkZXZpY2UudmVuZG9yO1xuICAgICAgICAgICAgdGV4dC5hcHBlbmQodmVuZG9yKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuYW1lLmNsYXNzTmFtZSA9ICdkZXZpY2UtbmFtZSc7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkZXZpY2UubmFtZTtcbiAgICAgICAgdGV4dC5hcHBlbmQobmFtZSk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmQodGV4dCk7XG5cbiAgICAgICAgaWYgKCFkZXZpY2UuYnVpbGRzLnN0YWJsZSkge1xuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZChjcmVhdGVCYWRnZSgnVW5zdGFibGUgb25seScsICdhY2NlbnQnKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWRldmljZS5idWlsZHMudW5zdGFibGUpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmQoY3JlYXRlQmFkZ2UoJ1N0YWJsZSBvbmx5JywgJ211dGVkJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZXZpY2UuYnVpbGRzW2dldEFjdGl2ZVZlcnNpb24oZGV2aWNlKV0uaW5jdWJhdGluZykge1xuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZChjcmVhdGVCYWRnZSgnSW5jdWJhdGluZycsICd3YXJuaW5nJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGl0ZW0uYXBwZW5kKGJ1dHRvbik7XG4gICAgICAgIGxpc3QuYXBwZW5kKGl0ZW0pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kZXZpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIExvYWRpbmcgb3IgZXJyb3Igc3RhdGUgb3ducyB0aGUgc3RhdHVzIHRleHRcbiAgICB9XG4gICAgaWYgKGRldmljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGBObyBkZXZpY2VzIG1hdGNoIOKAnCR7c3RhdGUucXVlcnkudHJpbSgpfeKAnS5gO1xuICAgIH0gZWxzZSBpZiAoZGV2aWNlcy5sZW5ndGggPT09IHN0YXRlLmRldmljZXMubGVuZ3RoKSB7XG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGAke2RldmljZXMubGVuZ3RofSBzdXBwb3J0ZWQgZGV2aWNlc2A7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gYCR7ZGV2aWNlcy5sZW5ndGh9IG9mICR7c3RhdGUuZGV2aWNlcy5sZW5ndGh9IGRldmljZXNgO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90aWNlKGh0bWwsIGtpbmQpIHtcbiAgICBjb25zdCBub3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpY2UuY2xhc3NOYW1lID0gYG5vdGljZSBub3RpY2UtJHtraW5kfWA7XG4gICAgLy8gTWVzc2FnZXMgY29tZSBmcm9tIG91ciBvd24gQ0ROIGFuZCBjb250YWluIG1hcmt1cCBzdWNoIGFzIDxici8+XG4gICAgbm90aWNlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIG5vdGljZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVmVyc2lvbkxhYmVscygpIHtcbiAgICBmb3IgKGNvbnN0IHZlcnNpb24gb2YgVkVSU0lPTlMpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleGVzW3ZlcnNpb25dO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS12ZXJzaW9uLWxhYmVsPVwiJHt2ZXJzaW9ufVwiXWApLnRleHRDb250ZW50ID0gaW5kZXggPyBpbmRleC52ZXJzaW9uIDogJ1VuYXZhaWxhYmxlJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRldGFpbHMoKSB7XG4gICAgY29uc3QgZGV2aWNlID0gZ2V0U2VsZWN0ZWREZXZpY2UoKTtcbiAgICAkKCdEZXRhaWxzRW1wdHknKS5oaWRkZW4gPSBkZXZpY2UgIT09IG51bGw7XG4gICAgJCgnRGV0YWlsc0NvbnRlbnQnKS5oaWRkZW4gPSBkZXZpY2UgPT09IG51bGw7XG4gICAgaWYgKGRldmljZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmVyc2lvbiA9IGdldEFjdGl2ZVZlcnNpb24oZGV2aWNlKTtcbiAgICBjb25zdCBidWlsZCA9IGRldmljZS5idWlsZHNbdmVyc2lvbl07XG4gICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleGVzW3ZlcnNpb25dO1xuXG4gICAgJCgnU2VsZWN0ZWRWZW5kb3InKS50ZXh0Q29udGVudCA9IGRldmljZS5zaG93VmVuZG9yID8gZGV2aWNlLnZlbmRvciA6ICcnO1xuICAgICQoJ1NlbGVjdGVkTmFtZScpLnRleHRDb250ZW50ID0gZGV2aWNlLm5hbWU7XG5cbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJ2ZXJzaW9uXCJdJykpIHtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gQm9vbGVhbihkZXZpY2UuYnVpbGRzW2lucHV0LnZhbHVlXSk7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gIWF2YWlsYWJsZTtcbiAgICAgICAgaW5wdXQuY2hlY2tlZCA9IGlucHV0LnZhbHVlID09PSB2ZXJzaW9uO1xuICAgICAgICBpbnB1dC5jbG9zZXN0KCcuc2VnbWVudCcpLnRpdGxlID0gYXZhaWxhYmxlID8gJycgOiBgTm8gJHtpbnB1dC52YWx1ZX0gYnVpbGQgZm9yIHRoaXMgZGV2aWNlYDtcbiAgICB9XG5cbiAgICBjb25zdCBkZXRhaWxzID0gJCgnVmVyc2lvbkRldGFpbHMnKTtcbiAgICBkZXRhaWxzLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGlmIChpbmRleC5jcmVhdGVkICYmIGluZGV4LmdpdENvbW1pdCkge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBsaW5rLmhyZWYgPSBgaHR0cHM6Ly9naXRodWIuY29tL0J5dGVXZWxkZXIvVGFjdGlsaXR5L2NvbW1pdC8ke2luZGV4LmdpdENvbW1pdH1gO1xuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gaW5kZXguZ2l0Q29tbWl0LnN1YnN0cmluZygwLCA3KTtcbiAgICAgICAgZGV0YWlscy5hcHBlbmQoYEJ1aWx0IG9uICR7bmV3IERhdGUoaW5kZXguY3JlYXRlZCkudG9Mb2NhbGVTdHJpbmcoKX0gZnJvbSBjb21taXQgYCwgbGluayk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9ICQoJ0RldmljZUluZm8nKTtcbiAgICBpbmZvLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGlmIChidWlsZC5pbmN1YmF0aW5nKSB7XG4gICAgICAgIGluZm8uYXBwZW5kKGNyZWF0ZU5vdGljZSgnVGhpcyBkZXZpY2UgaXMgaW5jdWJhdGluZy4gSXQgaXMgbm90IGZ1bGx5IGltcGxlbWVudGVkIScsICd3YXJuaW5nJykpO1xuICAgIH1cbiAgICBpZiAoYnVpbGQud2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgaW5mby5hcHBlbmQoY3JlYXRlTm90aWNlKGJ1aWxkLndhcm5pbmdNZXNzYWdlLCAnd2FybmluZycpKTtcbiAgICB9XG4gICAgaWYgKGJ1aWxkLmluZm9NZXNzYWdlKSB7XG4gICAgICAgIGluZm8uYXBwZW5kKGNyZWF0ZU5vdGljZShidWlsZC5pbmZvTWVzc2FnZSwgJ2luZm8nKSk7XG4gICAgfVxuXG4gICAgJCgnSW5zdGFsbGVyJykubWFuaWZlc3QgPSBnZXRDZG5VcmwodmVyc2lvbiwgYCR7ZGV2aWNlLmlkfS5qc29uYCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdERldmljZShpZCkge1xuICAgIHN0YXRlLnNlbGVjdGVkSWQgPSBpZDtcbiAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGV2aWNlJykpIHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgU3RyaW5nKGJ1dHRvbi5kYXRhc2V0LmlkID09PSBpZCkpO1xuICAgIH1cbiAgICByZW5kZXJEZXRhaWxzKCk7XG4gICAgaWYgKGdldEhhc2hEZXZpY2VJZCgpICE9PSBpZCkge1xuICAgICAgICAvLyBSZXBsYWNlIHJhdGhlciB0aGFuIHB1c2gsIHNvIGJyb3dzaW5nIGRldmljZXMgZG9lc24ndCBmaWxsIHVwIHRoZSBoaXN0b3J5XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsICcnLCBgIyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEhhc2hEZXZpY2VJZCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG5cbi8qKiBTZWxlY3QgdGhlIGRldmljZSBmcm9tIHRoZSBVUkwsIGUuZy4gaHR0cHM6Ly9pbnN0YWxsLnRhY3RpbGl0eXByb2plY3Qub3JnLyNsaWx5Z28tdGRlY2sgKi9cbmZ1bmN0aW9uIHNlbGVjdERldmljZUZyb21IYXNoKCkge1xuICAgIGNvbnN0IGlkID0gZ2V0SGFzaERldmljZUlkKCk7XG4gICAgaWYgKGlkID09PSBzdGF0ZS5zZWxlY3RlZElkIHx8ICFzdGF0ZS5kZXZpY2VzLnNvbWUoKGRldmljZSkgPT4gZGV2aWNlLmlkID09PSBpZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWdldEZpbHRlcmVkRGV2aWNlcygpLnNvbWUoKGRldmljZSkgPT4gZGV2aWNlLmlkID09PSBpZCkpIHtcbiAgICAgICAgLy8gRG9uJ3QgbGVhdmUgdGhlIGxpbmtlZCBkZXZpY2UgaGlkZGVuIGJlaGluZCBhIHNlYXJjaCBxdWVyeVxuICAgICAgICBzdGF0ZS5xdWVyeSA9ICcnO1xuICAgICAgICAkKCdTZWFyY2gnKS52YWx1ZSA9ICcnO1xuICAgICAgICByZW5kZXJEZXZpY2VMaXN0KCk7XG4gICAgfVxuICAgIHNlbGVjdERldmljZShpZCk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldmljZVthcmlhLXByZXNzZWQ9XCJ0cnVlXCJdJyk7XG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogJ25lYXJlc3QnIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0xvYWRFcnJvcigpIHtcbiAgICBjb25zdCBzdGF0dXMgPSAkKCdMaXN0U3RhdHVzJyk7XG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ0ZhaWxlZCB0byBmZXRjaCBkZXZpY2UgaW5mby4gJztcbiAgICBjb25zdCByZXRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJldHJ5LnR5cGUgPSAnYnV0dG9uJztcbiAgICByZXRyeS5jbGFzc05hbWUgPSAnYnV0dG9uLWxpbmsnO1xuICAgIHJldHJ5LnRleHRDb250ZW50ID0gJ1RyeSBhZ2Fpbic7XG4gICAgcmV0cnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkKTtcbiAgICBzdGF0dXMuYXBwZW5kKHJldHJ5KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAkKCdMaXN0U3RhdHVzJykudGV4dENvbnRlbnQgPSAnTG9hZGluZyBkZXZpY2Vz4oCmJztcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFZFUlNJT05TLm1hcChmZXRjaEluZGV4KSk7XG4gICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQsIGkpID0+IHtcbiAgICAgICAgc3RhdGUuaW5kZXhlc1tWRVJTSU9OU1tpXV0gPSByZXN1bHQuc3RhdHVzID09PSAnZnVsZmlsbGVkJyA/IHJlc3VsdC52YWx1ZSA6IG51bGw7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAncmVqZWN0ZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBmZXRjaCAke1ZFUlNJT05TW2ldfSBpbmRleGAsIHJlc3VsdC5yZWFzb24pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBtZXJnZURldmljZXMoKTtcbiAgICByZW5kZXJWZXJzaW9uTGFiZWxzKCk7XG4gICAgaWYgKHN0YXRlLmRldmljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHNob3dMb2FkRXJyb3IoKTtcbiAgICB9XG4gICAgcmVuZGVyRGV2aWNlTGlzdCgpO1xuICAgIHJlbmRlckRldGFpbHMoKTtcbiAgICBzZWxlY3REZXZpY2VGcm9tSGFzaCgpO1xufVxuXG4kKCdOYXZiYXJJbWFnZScpLnNyYyA9IHRvb2xiYXJMb2dvO1xuJCgnVW5zdXBwb3J0ZWROb3RpY2UnKS5oaWRkZW4gPSAnc2VyaWFsJyBpbiBuYXZpZ2F0b3I7XG5cbiQoJ1NlYXJjaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgc3RhdGUucXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgcmVuZGVyRGV2aWNlTGlzdCgpO1xufSk7XG5cbiQoJ1NlYXJjaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gZ2V0RmlsdGVyZWREZXZpY2VzKClbMF07XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgc2VsZWN0RGV2aWNlKGZpcnN0LmlkKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4kKCdEZXZpY2VMaXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRldmljZScpO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgc2VsZWN0RGV2aWNlKGJ1dHRvbi5kYXRhc2V0LmlkKTtcbiAgICB9XG59KTtcblxuJCgnVmVyc2lvbk9wdGlvbnMnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBzdGF0ZS5wcmVmZXJyZWRWZXJzaW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHJlbmRlckRldmljZUxpc3QoKTtcbiAgICByZW5kZXJEZXRhaWxzKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBzZWxlY3REZXZpY2VGcm9tSGFzaCk7XG5cbmxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==