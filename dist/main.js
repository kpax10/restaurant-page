/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../dist/assets/restaurant-background.jpg */ "./dist/assets/restaurant-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Montserrat:wght@400;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/*----------------------------------------- \n             Custom properties \n-------------------------------------------*/\n\n:root {\n  --ff-primary: 'Montserrat', sans-serif;\n  --ff-accent: 'Monsieur La Doulaise', cursive;\n\n  --clr-bg-100: hsl(0, 0%, 100%);\n  --clr-bg-opa-900: hsla(21, 27%, 10%, 0.6);\n  --clr-font-900: hsl(0, 0%, 0%);\n  --clr-font-100: hsl(0, 0%, 100%);\n  --clr-accent-500: hsl(47, 77%, 47%);\n\n  --fs-100: 0.8rem;\n  --fs-200: 1rem;\n  --fs-300: 1.3rem;\n  --fs-400: 2rem;\n  --fs-500: 3rem;\n  --fs-600: 3.5rem;\n  --fs-700: 4.5rem;\n  --fs-800: 5rem;\n\n  --fw-400: 400;\n  --fw-600: 600;\n\n}\n\n\n\nbody {\n  min-height: 100vh;\n  font-family: var(--ff-primary);\n  color: var(--clr-bg-100);\n}\n\n.bg-gradient {\n  background: radial-gradient(transparent 30%, hsl(0, 0%, 0%)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: right 35% bottom 65%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 180px;\n}\n\n#content {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nnav {\n  height: 10vh;\n  border-bottom: 2px solid rgb(211 171 28);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--clr-bg-opa-900);\n\n}\n\nnav ul {\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  width: 23rem;\n}\n\nnav li {\n  font-size: var(--fs-200);\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.2rem;\n}\n\nnav li:hover {\n  margin-bottom: -2px;\n  border-bottom: 2px solid rgb(211 171 28);\n  cursor: pointer;\n}\n\n.main-content {\n  height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n  padding: 5% 0;\n}\n\n.welcome {\n  font-family: var(--ff-accent);\n  font-size: var(--fs-800);\n  margin: 0;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n  color: var(--clr-accent-500);\n}\n\nh2 {\n  font-size: var(--fs-500);\n  margin-top: -3.4rem;\n  color: var(--clr-font-100);\n  text-shadow: 0 0 0.1emm black, 0 0 0.1em black, 0 0 0.1em black;\n  letter-spacing: 0;\n  font-weight: 600;\n}\n\n.menu-blurb {\n  margin-top: 1rem;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n\n  background-color: rgb(255, 255, 255);\n}\n\n.menu-heading {\n  font-family: var(--ff-accent);\n  font-size: var(--fs-800);\n  padding-top: 1rem;\n  color: var(--clr-accent-500);\n}\n\n.menu-content h2 {\n  color: var(--clr-font-900);\n  text-shadow: none;\n}\n\n.menu-content hr {\n  border: 1px solid rgb(211 171 28);\n  margin: 0 auto;\n  width: 30%;\n}\n\n.menu-content hr:first-of-type {\n  width: 50%;\n  border: 2px solid rgb(211 171 28);\n}\n\n.menu-item {\n  font-size: var(--fs-300);\n  color: var(--clr-accent-500);\n  margin-top: 2rem;\n  font-weight: 600;\n}\n\n.menu-item-text {\n  margin: 0 auto;\n  text-align: center;\n  color: var(--clr-font-900);\n  width: 70%;\n}\n\n.menu-content p {\n  margin-top: 0.5rem;\n}\n\n.menu-price {\n  font-size: var(--fs-200);\n  font-weight: 600;\n  color: var(--clr-accent-500);\n  margin-bottom: 1rem;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  min-height: 80vh;\n  padding-top: -4rem;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.about-us {\n  font-family: var(--ff-accent);\n  font-size: var(--fs-800);\n  color: var(--clr-accent-500);\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.about-content p {\n  padding-top: 1rem;\n  text-align: center;\n  margin: 0 5vw;\n  max-width: 50rem;\n}\n\nfooter {\n  height: 10vh;\n  width: 100%;\n  border-top: 2px solid rgb(211 171 28);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--clr-bg-opa-900);\n  color: var(--clr-accent-500);\n}\n\n@media (max-width: 600px) {\n\n  .welcome {\n    font-size: var(--fs-700);\n  }\n\n  h2 {\n    font-size: var(--fs-400);\n    margin-top: -2.4rem;\n  }\n\n  .menu-heading {\n    font-size: var(--fs-600);\n  }\n\n  .menu-item-text {\n    font-size: var(--fs-100);\n  }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Montserrat:wght@400;600&display=swap');\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/*----------------------------------------- \n             Custom properties \n-------------------------------------------*/\n\n:root {\n  --ff-primary: 'Montserrat', sans-serif;\n  --ff-accent: 'Monsieur La Doulaise', cursive;\n\n  --clr-bg-100: hsl(0, 0%, 100%);\n  --clr-bg-opa-900: hsla(21, 27%, 10%, 0.6);\n  --clr-font-900: hsl(0, 0%, 0%);\n  --clr-font-100: hsl(0, 0%, 100%);\n  --clr-accent-500: hsl(47, 77%, 47%);\n\n  --fs-100: 0.8rem;\n  --fs-200: 1rem;\n  --fs-300: 1.3rem;\n  --fs-400: 2rem;\n  --fs-500: 3rem;\n  --fs-600: 3.5rem;\n  --fs-700: 4.5rem;\n  --fs-800: 5rem;\n\n  --fw-400: 400;\n  --fw-600: 600;\n\n}\n\n\n\nbody {\n  min-height: 100vh;\n  font-family: var(--ff-primary);\n  color: var(--clr-bg-100);\n}\n\n.bg-gradient {\n  background: radial-gradient(transparent 30%, hsl(0, 0%, 0%)), url(/dist/assets/restaurant-background.jpg);\n  background-position: right 35% bottom 65%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 180px;\n}\n\n#content {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nnav {\n  height: 10vh;\n  border-bottom: 2px solid rgb(211 171 28);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--clr-bg-opa-900);\n\n}\n\nnav ul {\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  width: 23rem;\n}\n\nnav li {\n  font-size: var(--fs-200);\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.2rem;\n}\n\nnav li:hover {\n  margin-bottom: -2px;\n  border-bottom: 2px solid rgb(211 171 28);\n  cursor: pointer;\n}\n\n.main-content {\n  height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n  padding: 5% 0;\n}\n\n.welcome {\n  font-family: var(--ff-accent);\n  font-size: var(--fs-800);\n  margin: 0;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n  color: var(--clr-accent-500);\n}\n\nh2 {\n  font-size: var(--fs-500);\n  margin-top: -3.4rem;\n  color: var(--clr-font-100);\n  text-shadow: 0 0 0.1emm black, 0 0 0.1em black, 0 0 0.1em black;\n  letter-spacing: 0;\n  font-weight: 600;\n}\n\n.menu-blurb {\n  margin-top: 1rem;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n\n  background-color: rgb(255, 255, 255);\n}\n\n.menu-heading {\n  font-family: var(--ff-accent);\n  font-size: var(--fs-800);\n  padding-top: 1rem;\n  color: var(--clr-accent-500);\n}\n\n.menu-content h2 {\n  color: var(--clr-font-900);\n  text-shadow: none;\n}\n\n.menu-content hr {\n  border: 1px solid rgb(211 171 28);\n  margin: 0 auto;\n  width: 30%;\n}\n\n.menu-content hr:first-of-type {\n  width: 50%;\n  border: 2px solid rgb(211 171 28);\n}\n\n.menu-item {\n  font-size: var(--fs-300);\n  color: var(--clr-accent-500);\n  margin-top: 2rem;\n  font-weight: 600;\n}\n\n.menu-item-text {\n  margin: 0 auto;\n  text-align: center;\n  color: var(--clr-font-900);\n  width: 70%;\n}\n\n.menu-content p {\n  margin-top: 0.5rem;\n}\n\n.menu-price {\n  font-size: var(--fs-200);\n  font-weight: 600;\n  color: var(--clr-accent-500);\n  margin-bottom: 1rem;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  min-height: 80vh;\n  padding-top: -4rem;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.about-us {\n  font-family: var(--ff-accent);\n  font-size: var(--fs-800);\n  color: var(--clr-accent-500);\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.about-content p {\n  padding-top: 1rem;\n  text-align: center;\n  margin: 0 5vw;\n  max-width: 50rem;\n}\n\nfooter {\n  height: 10vh;\n  width: 100%;\n  border-top: 2px solid rgb(211 171 28);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--clr-bg-opa-900);\n  color: var(--clr-accent-500);\n}\n\n@media (max-width: 600px) {\n\n  .welcome {\n    font-size: var(--fs-700);\n  }\n\n  h2 {\n    font-size: var(--fs-400);\n    margin-top: -2.4rem;\n  }\n\n  .menu-heading {\n    font-size: var(--fs-600);\n  }\n\n  .menu-item-text {\n    font-size: var(--fs-100);\n  }\n\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAbout)
/* harmony export */ });
function createAbout() {
  const element = document.createElement('div');
  element.classList.add('about-content');

  const aboutUs = document.createElement('p');
  aboutUs.textContent = 'About Us';
  aboutUs.classList.add('about-us');
  element.appendChild(aboutUs);

  const h2 = document.createElement('h2');
  h2.textContent = `ODIN'S LOUNGE`;
  element.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = `We like to think of Odin's Lounge as more than just a wonderful place to eat or be entertained. We make it our responsibility to make sure your experiences with us are memorable ones. Our promise to you is that we will always strive to reach and surpass your dining and entertainment expectations, and leave you with wonderful memories of the important days you decide to share with us. Welcome to Odin's Lounge.`;
  element.appendChild(p);

  return element;
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = 'Developed by Kyle Paxton';
  footer.appendChild(p);

  return footer
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomePage)
/* harmony export */ });
function createHomePage() {
  const element = document.createElement('div');
  element.classList.add('home-content')

  const welcome = document.createElement('p');
  welcome.textContent = 'Welcome to';
  welcome.classList.add('welcome');
  element.appendChild(welcome);

  const h2 = document.createElement('h2');
  h2.textContent = `ODIN'S LOUNGE`;
  element.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = 'Come experience the best';
  p.classList.add('menu-blurb');
  element.appendChild(p);

  return element
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
  const element = document.createElement('div');
  element.classList.add('menu-content');

  const menu = document.createElement('p');
  menu.textContent = 'Menu';
  menu.classList.add('menu-heading');
  element.appendChild(menu);

  const h2 = document.createElement('h2');
  h2.textContent = `ODIN'S LOUNGE`;
  element.appendChild(h2);

  const hr = document.createElement('hr');
  element.appendChild(hr);

  const menuList = [
    {
      item: 'Pesto Shrimp Pasta',
      text: 'linguine pasta with pesto cream sauce, sundried tomatoes, and mushrooms',
      price: '$22.95',
    },
    {
      item: 'Ruby Rare Ahi',
      text: 'sesame seed crusted ahi, ginger, wasabi, soy beurre blanc, with sugar snap peas and ginger white rice',
      price: '$32.95',
    },
    {
      item: 'Seafood Cioppino',
      text: 'clam and tomato broth with mussels, clams, shrimp, fish, calamari & red chili flakes, with garlic cheese bread ',
      price: '$32.95',
    },
  ]

  // Loop over menu to create and populate DOM

  for (let i = 0; i < 3; i++) {
    let newItemTitle = document.createElement('h3');
    newItemTitle.textContent = menuList[i].item;
    newItemTitle.classList.add('menu-item');
    element.appendChild(newItemTitle);

    let newItemText = document.createElement('p');
    newItemText.textContent = menuList[i].text;
    newItemText.classList.add('menu-item-text');
    element.appendChild(newItemText);

    let newPrice = document.createElement('span');
    newPrice.textContent = menuList[i].price;
    newPrice.classList.add('menu-price');
    element.appendChild(newPrice);

    let newLineBreak = document.createElement('hr');
    element.appendChild(newLineBreak);
  }

  return element
}

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNavBar)
/* harmony export */ });
function createNavBar() {
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');
  navBar.appendChild(ul);

  const home = document.createElement('li');
  home.textContent = 'home';
  home.id = 'home';
  home.classList.add('navTabs');
  ul.appendChild(home);

  const menu = document.createElement('li')
  menu.textContent = 'menu';
  menu.id = 'menu';
  menu.classList.add('navTabs');
  ul.appendChild(menu);

  const about = document.createElement('li');
  about.textContent = 'about';
  about.id = 'about';
  about.classList.add('navTabs');
  ul.appendChild(about);

  return navBar
}

/***/ }),

/***/ "./dist/assets/restaurant-background.jpg":
/*!***********************************************!*\
  !*** ./dist/assets/restaurant-background.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6728251ec9c5f754bab.jpg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ "./src/menu.js");







function createBackground() {
  const body = document.querySelector('body');
  body.classList.add('bg-gradient');

  return body
}

function createMainContent() {
  const mainContent = document.createElement('div')
  mainContent.classList.add('main-content');

  return mainContent;
}

createBackground()
content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])());
content.appendChild(createMainContent());
content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());

document.querySelector('.main-content').appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])())

// Nav Event Listeners
const navTabs = document.querySelectorAll('.navTabs');

navTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {

    const mainContent = document.querySelector('.main-content');
    mainContent.removeChild(mainContent.firstChild);

    if (e.target.id === 'home') {
      mainContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
    }
    if (e.target.id === 'menu') {
      mainContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_5__["default"])());
    }
    if (e.target.id === 'about') {
      mainContent.appendChild((0,_about__WEBPACK_IMPORTED_MODULE_4__["default"])());
    }
  })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLFFBQVEsTUFBTSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxVQUFVLFdBQVcsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxL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QUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9kaXN0L2Fzc2V0cy9yZXN0YXVyYW50LWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb25zaWV1citMYStEb3VsYWlzZSZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLypcXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxcbiovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qXFxuICAzLiBBbGxvdyBwZXJjZW50YWdlLWJhc2VkIGhlaWdodHMgaW4gdGhlIGFwcGxpY2F0aW9uXFxuKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKlxcbiAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcbiAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXG4gIDUuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXG4qL1xcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4vKlxcbiAgNi4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiovXFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLypcXG4gIDcuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxuKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuICA4LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiovXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4vKlxcbiAgOS4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxuKi9cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcXG4gICAgICAgICAgICAgQ3VzdG9tIHByb3BlcnRpZXMgXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuOnJvb3Qge1xcbiAgLS1mZi1wcmltYXJ5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuICAtLWZmLWFjY2VudDogJ01vbnNpZXVyIExhIERvdWxhaXNlJywgY3Vyc2l2ZTtcXG5cXG4gIC0tY2xyLWJnLTEwMDogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIC0tY2xyLWJnLW9wYS05MDA6IGhzbGEoMjEsIDI3JSwgMTAlLCAwLjYpO1xcbiAgLS1jbHItZm9udC05MDA6IGhzbCgwLCAwJSwgMCUpO1xcbiAgLS1jbHItZm9udC0xMDA6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNsci1hY2NlbnQtNTAwOiBoc2woNDcsIDc3JSwgNDclKTtcXG5cXG4gIC0tZnMtMTAwOiAwLjhyZW07XFxuICAtLWZzLTIwMDogMXJlbTtcXG4gIC0tZnMtMzAwOiAxLjNyZW07XFxuICAtLWZzLTQwMDogMnJlbTtcXG4gIC0tZnMtNTAwOiAzcmVtO1xcbiAgLS1mcy02MDA6IDMuNXJlbTtcXG4gIC0tZnMtNzAwOiA0LjVyZW07XFxuICAtLWZzLTgwMDogNXJlbTtcXG5cXG4gIC0tZnctNDAwOiA0MDA7XFxuICAtLWZ3LTYwMDogNjAwO1xcblxcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci1iZy0xMDApO1xcbn1cXG5cXG4uYmctZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDMwJSwgaHNsKDAsIDAlLCAwJSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMzUlIGJvdHRvbSA2NSU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGhlaWdodDogMTgwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm5hdiB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIxMSAxNzEgMjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1iZy1vcGEtOTAwKTtcXG5cXG59XFxuXFxubmF2IHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogMjNyZW07XFxufVxcblxcbm5hdiBsaSB7XFxuICBmb250LXNpemU6IHZhcigtLWZzLTIwMCk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogNSUgMDtcXG59XFxuXFxuLndlbGNvbWUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxuICBmb250LXNpemU6IHZhcigtLWZzLTgwMCk7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaztcXG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LTUwMCk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtNTAwKTtcXG4gIG1hcmdpbi10b3A6IC0zLjRyZW07XFxuICBjb2xvcjogdmFyKC0tY2xyLWZvbnQtMTAwKTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC4xZW1tIGJsYWNrLCAwIDAgMC4xZW0gYmxhY2ssIDAgMCAwLjFlbSBibGFjaztcXG4gIGxldHRlci1zcGFjaW5nOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1lbnUtYmx1cmIge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4ubWVudS1oZWFkaW5nIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy04MDApO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IGgyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZm9udC05MDApO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5tZW51LWNvbnRlbnQgaHIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMSAxNzEgMjgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IGhyOmZpcnN0LW9mLXR5cGUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBmb250LXNpemU6IHZhcigtLWZzLTMwMCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tZW51LWl0ZW0tdGV4dCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jbHItZm9udC05MDApO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLm1lbnUtY29udGVudCBwIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUtcHJpY2Uge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy0yMDApO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LTUwMCk7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIHBhZGRpbmctdG9wOiAtNHJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrO1xcbn1cXG5cXG4uYWJvdXQtdXMge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxuICBmb250LXNpemU6IHZhcigtLWZzLTgwMCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjA1ZW0gYmxhY2ssIDAgMCAwLjA1ZW0gYmxhY2ssIDAgMCAwLjA1ZW0gYmxhY2s7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHAge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNXZ3O1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmctb3BhLTkwMCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXG4gIC53ZWxjb21lIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy03MDApO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTQwMCk7XFxuICAgIG1hcmdpbi10b3A6IC0yLjRyZW07XFxuICB9XFxuXFxuICAubWVudS1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy02MDApO1xcbiAgfVxcblxcbiAgLm1lbnUtaXRlbS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0xMDApO1xcbiAgfVxcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztDQUVDO0FBQ0Q7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Q0FFQztBQUNEO0VBQ0UsU0FBUztBQUNYOztBQUVBOztDQUVDO0FBQ0Q7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7O0NBSUM7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7O0NBRUM7QUFDRDs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7Q0FFQztBQUNEOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBOztDQUVDO0FBQ0Q7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0NBRUM7QUFDRDs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7OzRDQUU0Qzs7QUFFNUM7RUFDRSxzQ0FBc0M7RUFDdEMsNENBQTRDOztFQUU1Qyw4QkFBOEI7RUFDOUIseUNBQXlDO0VBQ3pDLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsbUNBQW1DOztFQUVuQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxhQUFhO0VBQ2IsYUFBYTs7QUFFZjs7OztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxR0FBeUc7RUFDekcseUNBQXlDO0VBQ3pDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVDQUF1Qzs7QUFFekM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsU0FBUztFQUNULGlFQUFpRTtFQUNqRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQiwrREFBK0Q7RUFDL0QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjs7RUFFbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUU7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnNpZXVyK0xhK0RvdWxhaXNlJmZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qXFxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlxcbiAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxcbiovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLypcXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gIDQuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICA1LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLypcXG4gIDYuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4qL1xcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qXFxuICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbiAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4qL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLypcXG4gIDkuIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiovXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXFxuICAgICAgICAgICAgIEN1c3RvbSBwcm9wZXJ0aWVzIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbjpyb290IHtcXG4gIC0tZmYtcHJpbWFyeTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgLS1mZi1hY2NlbnQ6ICdNb25zaWV1ciBMYSBEb3VsYWlzZScsIGN1cnNpdmU7XFxuXFxuICAtLWNsci1iZy0xMDA6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWNsci1iZy1vcGEtOTAwOiBoc2xhKDIxLCAyNyUsIDEwJSwgMC42KTtcXG4gIC0tY2xyLWZvbnQtOTAwOiBoc2woMCwgMCUsIDAlKTtcXG4gIC0tY2xyLWZvbnQtMTAwOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgLS1jbHItYWNjZW50LTUwMDogaHNsKDQ3LCA3NyUsIDQ3JSk7XFxuXFxuICAtLWZzLTEwMDogMC44cmVtO1xcbiAgLS1mcy0yMDA6IDFyZW07XFxuICAtLWZzLTMwMDogMS4zcmVtO1xcbiAgLS1mcy00MDA6IDJyZW07XFxuICAtLWZzLTUwMDogM3JlbTtcXG4gIC0tZnMtNjAwOiAzLjVyZW07XFxuICAtLWZzLTcwMDogNC41cmVtO1xcbiAgLS1mcy04MDA6IDVyZW07XFxuXFxuICAtLWZ3LTQwMDogNDAwO1xcbiAgLS1mdy02MDA6IDYwMDtcXG5cXG59XFxuXFxuXFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItYmctMTAwKTtcXG59XFxuXFxuLmJnLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCAzMCUsIGhzbCgwLCAwJSwgMCUpKSwgdXJsKC9kaXN0L2Fzc2V0cy9yZXN0YXVyYW50LWJhY2tncm91bmQuanBnKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDM1JSBib3R0b20gNjUlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5uYXYge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYmctb3BhLTkwMCk7XFxuXFxufVxcblxcbm5hdiB1bCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgd2lkdGg6IDIzcmVtO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy0yMDApO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcbn1cXG5cXG5uYXYgbGk6aG92ZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjExIDE3MSAyOCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIHBhZGRpbmc6IDUlIDA7XFxufVxcblxcbi53ZWxjb21lIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy04MDApO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjA1ZW0gYmxhY2ssIDAgMCAwLjA1ZW0gYmxhY2ssIDAgMCAwLjA1ZW0gYmxhY2s7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IHZhcigtLWZzLTUwMCk7XFxuICBtYXJnaW4tdG9wOiAtMy40cmVtO1xcbiAgY29sb3I6IHZhcigtLWNsci1mb250LTEwMCk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuMWVtbSBibGFjaywgMCAwIDAuMWVtIGJsYWNrLCAwIDAgMC4xZW0gYmxhY2s7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tZW51LWJsdXJiIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaztcXG59XFxuXFxuLm1lbnUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm1lbnUtaGVhZGluZyB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtODAwKTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtNTAwKTtcXG59XFxuXFxuLm1lbnUtY29udGVudCBoMiB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWZvbnQtOTAwKTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IGhyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLm1lbnUtY29udGVudCBocjpmaXJzdC1vZi10eXBlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjExIDE3MSAyOCk7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy0zMDApO1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtNTAwKTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWVudS1pdGVtLXRleHQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tY2xyLWZvbnQtOTAwKTtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5tZW51LWNvbnRlbnQgcCB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi5tZW51LXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtMjAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nLXRvcDogLTRyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaztcXG59XFxuXFxuLmFib3V0LXVzIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mcy04MDApO1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtNTAwKTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCBwIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDV2dztcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjExIDE3MSAyOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJnLW9wYS05MDApO1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtNTAwKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFxuICAud2VsY29tZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtNzAwKTtcXG4gIH1cXG5cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy00MDApO1xcbiAgICBtYXJnaW4tdG9wOiAtMi40cmVtO1xcbiAgfVxcblxcbiAgLm1lbnUtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtNjAwKTtcXG4gIH1cXG5cXG4gIC5tZW51LWl0ZW0tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtMTAwKTtcXG4gIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudCcpO1xuXG4gIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFib3V0VXMudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICBhYm91dFVzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXVzJyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYWJvdXRVcyk7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9IGBPRElOJ1MgTE9VTkdFYDtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9IGBXZSBsaWtlIHRvIHRoaW5rIG9mIE9kaW4ncyBMb3VuZ2UgYXMgbW9yZSB0aGFuIGp1c3QgYSB3b25kZXJmdWwgcGxhY2UgdG8gZWF0IG9yIGJlIGVudGVydGFpbmVkLiBXZSBtYWtlIGl0IG91ciByZXNwb25zaWJpbGl0eSB0byBtYWtlIHN1cmUgeW91ciBleHBlcmllbmNlcyB3aXRoIHVzIGFyZSBtZW1vcmFibGUgb25lcy4gT3VyIHByb21pc2UgdG8geW91IGlzIHRoYXQgd2Ugd2lsbCBhbHdheXMgc3RyaXZlIHRvIHJlYWNoIGFuZCBzdXJwYXNzIHlvdXIgZGluaW5nIGFuZCBlbnRlcnRhaW5tZW50IGV4cGVjdGF0aW9ucywgYW5kIGxlYXZlIHlvdSB3aXRoIHdvbmRlcmZ1bCBtZW1vcmllcyBvZiB0aGUgaW1wb3J0YW50IGRheXMgeW91IGRlY2lkZSB0byBzaGFyZSB3aXRoIHVzLiBXZWxjb21lIHRvIE9kaW4ncyBMb3VuZ2UuYDtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChwKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gJ0RldmVsb3BlZCBieSBLeWxlIFBheHRvbic7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcblxuICByZXR1cm4gZm9vdGVyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKVxuXG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byc7XG4gIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSBgT0RJTidTIExPVU5HRWA7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnQ29tZSBleHBlcmllbmNlIHRoZSBiZXN0JztcbiAgcC5jbGFzc0xpc3QuYWRkKCdtZW51LWJsdXJiJyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XG5cbiAgcmV0dXJuIGVsZW1lbnRcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50Jyk7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChtZW51KTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gYE9ESU4nUyBMT1VOR0VgO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaHIpO1xuXG4gIGNvbnN0IG1lbnVMaXN0ID0gW1xuICAgIHtcbiAgICAgIGl0ZW06ICdQZXN0byBTaHJpbXAgUGFzdGEnLFxuICAgICAgdGV4dDogJ2xpbmd1aW5lIHBhc3RhIHdpdGggcGVzdG8gY3JlYW0gc2F1Y2UsIHN1bmRyaWVkIHRvbWF0b2VzLCBhbmQgbXVzaHJvb21zJyxcbiAgICAgIHByaWNlOiAnJDIyLjk1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGl0ZW06ICdSdWJ5IFJhcmUgQWhpJyxcbiAgICAgIHRleHQ6ICdzZXNhbWUgc2VlZCBjcnVzdGVkIGFoaSwgZ2luZ2VyLCB3YXNhYmksIHNveSBiZXVycmUgYmxhbmMsIHdpdGggc3VnYXIgc25hcCBwZWFzIGFuZCBnaW5nZXIgd2hpdGUgcmljZScsXG4gICAgICBwcmljZTogJyQzMi45NScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpdGVtOiAnU2VhZm9vZCBDaW9wcGlubycsXG4gICAgICB0ZXh0OiAnY2xhbSBhbmQgdG9tYXRvIGJyb3RoIHdpdGggbXVzc2VscywgY2xhbXMsIHNocmltcCwgZmlzaCwgY2FsYW1hcmkgJiByZWQgY2hpbGkgZmxha2VzLCB3aXRoIGdhcmxpYyBjaGVlc2UgYnJlYWQgJyxcbiAgICAgIHByaWNlOiAnJDMyLjk1JyxcbiAgICB9LFxuICBdXG5cbiAgLy8gTG9vcCBvdmVyIG1lbnUgdG8gY3JlYXRlIGFuZCBwb3B1bGF0ZSBET01cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGxldCBuZXdJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG5ld0l0ZW1UaXRsZS50ZXh0Q29udGVudCA9IG1lbnVMaXN0W2ldLml0ZW07XG4gICAgbmV3SXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3SXRlbVRpdGxlKTtcblxuICAgIGxldCBuZXdJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuZXdJdGVtVGV4dC50ZXh0Q29udGVudCA9IG1lbnVMaXN0W2ldLnRleHQ7XG4gICAgbmV3SXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRleHQnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld0l0ZW1UZXh0KTtcblxuICAgIGxldCBuZXdQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBuZXdQcmljZS50ZXh0Q29udGVudCA9IG1lbnVMaXN0W2ldLnByaWNlO1xuICAgIG5ld1ByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtcHJpY2UnKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5ld1ByaWNlKTtcblxuICAgIGxldCBuZXdMaW5lQnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3TGluZUJyZWFrKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob21lLnRleHRDb250ZW50ID0gJ2hvbWUnO1xuICBob21lLmlkID0gJ2hvbWUnO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdlRhYnMnKTtcbiAgdWwuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgbWVudS50ZXh0Q29udGVudCA9ICdtZW51JztcbiAgbWVudS5pZCA9ICdtZW51JztcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCduYXZUYWJzJyk7XG4gIHVsLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSAnYWJvdXQnO1xuICBhYm91dC5pZCA9ICdhYm91dCc7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoJ25hdlRhYnMnKTtcbiAgdWwuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gIHJldHVybiBuYXZCYXJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZU5hdkJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSAnLi9ob21lJztcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51JztcblxuZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdiZy1ncmFkaWVudCcpO1xuXG4gIHJldHVybiBib2R5XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuXG4gIHJldHVybiBtYWluQ29udGVudDtcbn1cblxuY3JlYXRlQmFja2dyb3VuZCgpXG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVQYWdlKCkpXG5cbi8vIE5hdiBFdmVudCBMaXN0ZW5lcnNcbmNvbnN0IG5hdlRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2VGFicycpO1xuXG5uYXZUYWJzLmZvckVhY2goKHRhYikgPT4ge1xuICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCk7XG5cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdob21lJykge1xuICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVBhZ2UoKSk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ21lbnUnKSB7XG4gICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdhYm91dCcpIHtcbiAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0KCkpO1xuICAgIH1cbiAgfSlcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9