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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/*----------------------------------------- \n             Custom properties \n-------------------------------------------*/\n\n:root {\n  --ff-primary: 'Montserrat', sans-serif;\n  --ff-accent: 'Monsieur La Doulaise', cursive;\n}\n\n\n\nbody {\n  min-height: 100vh;\n  font-family: var(--ff-primary);\n  color: white;\n}\n\n.bg-gradient {\n  background: radial-gradient(transparent 30%, hsl(0, 0%, 0%)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: right 35% bottom 65%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 180px;\n}\n\n#content {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nnav {\n  height: 10vh;\n  border-bottom: 2px solid rgb(211 171 28);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(33, 24, 19, 0.6);\n\n}\n\nnav ul {\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  width: 23rem;\n}\n\nnav li {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.2rem;\n}\n\nnav li:hover {\n  margin-bottom: -2px;\n  border-bottom: 2px solid rgb(211 171 28);\n  cursor: pointer;\n}\n\n.main-content {\n  height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n  padding: 5% 0;\n}\n\n.welcome {\n  font-family: var(--ff-accent);\n  font-size: 5rem;\n  margin: 0;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n  color: rgb(211 171 28);\n}\n\nh2 {\n  font-size: 3rem;\n  margin-top: -3.4rem;\n  color: rgb(255, 255, 255);\n  text-shadow: 0 0 0.1emm black, 0 0 0.1em black, 0 0 0.1em black;\n  letter-spacing: 0;\n  font-weight: 600;\n}\n\n.menu-blurb {\n  margin-top: 1rem;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n\n  background-color: rgb(255, 255, 255);\n}\n\n.menu-heading {\n  font-family: var(--ff-accent);\n  font-size: 5rem;\n  padding-top: 1rem;\n  color: rgb(211 171 28);\n}\n\n.menu-content h2 {\n  color: rgb(0, 0, 0);\n  text-shadow: none;\n}\n\n.menu-content hr {\n  border: 1px solid rgb(211 171 28);\n  margin: 0 auto;\n  width: 30%;\n}\n\n.menu-content hr:first-of-type {\n  width: 50%;\n  border: 2px solid rgb(211 171 28);\n}\n\n.menu-item {\n  font-size: 1.3rem;\n  color: rgb(211 171 28);\n  margin-top: 2rem;\n  font-weight: 600;\n}\n\n.menu-item-text {\n  margin: 0 auto;\n  text-align: center;\n  color: black;\n  width: 70%;\n}\n\n.menu-content p {\n  margin-top: 0.5rem;\n}\n\n.menu-price {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(211 171 28);\n  margin-bottom: 1rem;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  min-height: 80vh;\n  padding-top: -4rem;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.about-us {\n  font-family: var(--ff-accent);\n  font-size: 5rem;\n  color: rgb(211 171 28);\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.about-content p {\n  padding-top: 1rem;\n  text-align: center;\n  margin: 0 5vw;\n  max-width: 50rem;\n}\n\nfooter {\n  height: 10vh;\n  width: 100%;\n  border-top: 2px solid rgb(211 171 28);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(33, 24, 19, 0.6);\n  color: rgb(211 171 28);\n}\n\n@media (max-width: 600px) {\n\n  .welcome {\n    font-size: 4.5rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n    margin-top: -2.4rem;\n  }\n\n  .menu-heading {\n    font-size: 3.5rem;\n  }\n\n  .menu-item-text {\n    font-size: 0.8rem;\n  }\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Montserrat:wght@400;600&display=swap');\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml,\nbody {\n  height: 100%;\n}\n\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\n/*\n  6. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  7. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/*\n  8. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n\n/*----------------------------------------- \n             Custom properties \n-------------------------------------------*/\n\n:root {\n  --ff-primary: 'Montserrat', sans-serif;\n  --ff-accent: 'Monsieur La Doulaise', cursive;\n}\n\n\n\nbody {\n  min-height: 100vh;\n  font-family: var(--ff-primary);\n  color: white;\n}\n\n.bg-gradient {\n  background: radial-gradient(transparent 30%, hsl(0, 0%, 0%)), url(/dist/assets/restaurant-background.jpg);\n  background-position: right 35% bottom 65%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 180px;\n}\n\n#content {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nnav {\n  height: 10vh;\n  border-bottom: 2px solid rgb(211 171 28);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(33, 24, 19, 0.6);\n\n}\n\nnav ul {\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  width: 23rem;\n}\n\nnav li {\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.2rem;\n}\n\nnav li:hover {\n  margin-bottom: -2px;\n  border-bottom: 2px solid rgb(211 171 28);\n  cursor: pointer;\n}\n\n.main-content {\n  height: 80vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 80vh;\n  padding: 5% 0;\n}\n\n.welcome {\n  font-family: var(--ff-accent);\n  font-size: 5rem;\n  margin: 0;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n  color: rgb(211 171 28);\n}\n\nh2 {\n  font-size: 3rem;\n  margin-top: -3.4rem;\n  color: rgb(255, 255, 255);\n  text-shadow: 0 0 0.1emm black, 0 0 0.1em black, 0 0 0.1em black;\n  letter-spacing: 0;\n  font-weight: 600;\n}\n\n.menu-blurb {\n  margin-top: 1rem;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n\n  background-color: rgb(255, 255, 255);\n}\n\n.menu-heading {\n  font-family: var(--ff-accent);\n  font-size: 5rem;\n  padding-top: 1rem;\n  color: rgb(211 171 28);\n}\n\n.menu-content h2 {\n  color: rgb(0, 0, 0);\n  text-shadow: none;\n}\n\n.menu-content hr {\n  border: 1px solid rgb(211 171 28);\n  margin: 0 auto;\n  width: 30%;\n}\n\n.menu-content hr:first-of-type {\n  width: 50%;\n  border: 2px solid rgb(211 171 28);\n}\n\n.menu-item {\n  font-size: 1.3rem;\n  color: rgb(211 171 28);\n  margin-top: 2rem;\n  font-weight: 600;\n}\n\n.menu-item-text {\n  margin: 0 auto;\n  text-align: center;\n  color: black;\n  width: 70%;\n}\n\n.menu-content p {\n  margin-top: 0.5rem;\n}\n\n.menu-price {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgb(211 171 28);\n  margin-bottom: 1rem;\n}\n\n.about-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  min-height: 80vh;\n  padding-top: -4rem;\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.about-us {\n  font-family: var(--ff-accent);\n  font-size: 5rem;\n  color: rgb(211 171 28);\n  text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;\n}\n\n.about-content p {\n  padding-top: 1rem;\n  text-align: center;\n  margin: 0 5vw;\n  max-width: 50rem;\n}\n\nfooter {\n  height: 10vh;\n  width: 100%;\n  border-top: 2px solid rgb(211 171 28);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(33, 24, 19, 0.6);\n  color: rgb(211 171 28);\n}\n\n@media (max-width: 600px) {\n\n  .welcome {\n    font-size: 4.5rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n    margin-top: -2.4rem;\n  }\n\n  .menu-heading {\n    font-size: 3.5rem;\n  }\n\n  .menu-item-text {\n    font-size: 0.8rem;\n  }\n\n}"],"sourceRoot":""}]);
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
  p.textContent = 'Developed with care by Kyle Paxton';
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

  // const menuItem1 = document.createElement('h3');
  // menuItem1.classList.add('menu-item');
  // menuItem1.textContent = 'Pesto Shrimp Pasta';
  // element.appendChild(menuItem1);

  // const menuDescription1 = document.createElement('p');
  // menuDescription1.classList.add('menu-item-description');
  // menuDescription1.textContent = 'Linguine pasta with pesto cream sauce, sundried tomatoes, and mushrooms';
  // element.appendChild(menuDescription1);

  // const menuPrice1 = document.createElement('span');
  // menuPrice1.classList.add('menu-price');
  // menuPrice1.textContent = '$22.95';
  // element.appendChild(menuPrice1);

  // element.appendChild(document.createElement('hr'));

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

// Need to change back to Home Page
document.querySelector('.main-content').appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_5__["default"])())

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2U7QUFDQTtBQUNBO0FBQ0Y7QUFDRjs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbURBQVk7QUFDaEM7QUFDQSxvQkFBb0IsbURBQVk7O0FBRWhDO0FBQ0Esb0RBQW9ELGlEQUFVOztBQUU5RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixpREFBYztBQUM1QztBQUNBO0FBQ0EsOEJBQThCLGlEQUFVO0FBQ3hDO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQVc7QUFDekM7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL2Rpc3QvYXNzZXRzL3Jlc3RhdXJhbnQtYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnNpZXVyK0xhK0RvdWxhaXNlJmZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwuXFxuKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKlxcbiAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLypcXG4gIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXG4qL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qXFxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi8qXFxuICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxuKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKlxcbiAgNy4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4qL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG4gIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuKi9cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qXFxuICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxcbiAgICAgICAgICAgICBDdXN0b20gcHJvcGVydGllcyBcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG46cm9vdCB7XFxuICAtLWZmLXByaW1hcnk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG4gIC0tZmYtYWNjZW50OiAnTW9uc2lldXIgTGEgRG91bGFpc2UnLCBjdXJzaXZlO1xcbn1cXG5cXG5cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYmctZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50IDMwJSwgaHNsKDAsIDAlLCAwJSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMzUlIGJvdHRvbSA2NSU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGhlaWdodDogMTgwcHg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbm5hdiB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIxMSAxNzEgMjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDI0LCAxOSwgMC42KTtcXG5cXG59XFxuXFxubmF2IHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB3aWR0aDogMjNyZW07XFxufVxcblxcbm5hdiBsaSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogNSUgMDtcXG59XFxuXFxuLndlbGNvbWUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaztcXG4gIGNvbG9yOiByZ2IoMjExIDE3MSAyOCk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbi10b3A6IC0zLjRyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjFlbW0gYmxhY2ssIDAgMCAwLjFlbSBibGFjaywgMCAwIDAuMWVtIGJsYWNrO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWVudS1ibHVyYiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjA1ZW0gYmxhY2ssIDAgMCAwLjA1ZW0gYmxhY2ssIDAgMCAwLjA1ZW0gYmxhY2s7XFxufVxcblxcbi5tZW51LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5tZW51LWhlYWRpbmcge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGNvbG9yOiByZ2IoMjExIDE3MSAyOCk7XFxufVxcblxcbi5tZW51LWNvbnRlbnQgaDIge1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IGhyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuXFxuLm1lbnUtY29udGVudCBocjpmaXJzdC1vZi10eXBlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjExIDE3MSAyOCk7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogcmdiKDIxMSAxNzEgMjgpO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tZW51LWl0ZW0tdGV4dCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5tZW51LWNvbnRlbnQgcCB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi5tZW51LXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogcmdiKDIxMSAxNzEgMjgpO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nLXRvcDogLTRyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaztcXG59XFxuXFxuLmFib3V0LXVzIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHJnYigyMTEgMTcxIDI4KTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCBwIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDV2dztcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjExIDE3MSAyOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMjQsIDE5LCAwLjYpO1xcbiAgY29sb3I6IHJnYigyMTEgMTcxIDI4KTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuXFxuICAud2VsY29tZSB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbi10b3A6IC0yLjRyZW07XFxuICB9XFxuXFxuICAubWVudS1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxuXFxuICAubWVudS1pdGVtLXRleHQge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7Q0FFQztBQUNEOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0NBRUM7QUFDRDtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7Q0FFQztBQUNEOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7OztDQUlDO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUVBOztDQUVDO0FBQ0Q7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7O0NBRUM7QUFDRDs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTs7Q0FFQztBQUNEOzs7Ozs7O0VBT0UseUJBQXlCO0FBQzNCOztBQUVBOztDQUVDO0FBQ0Q7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBOzs0Q0FFNEM7O0FBRTVDO0VBQ0Usc0NBQXNDO0VBQ3RDLDRDQUE0QztBQUM5Qzs7OztBQUlBO0VBQ0UsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxR0FBeUc7RUFDekcseUNBQXlDO0VBQ3pDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVDQUF1Qzs7QUFFekM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsU0FBUztFQUNULGlFQUFpRTtFQUNqRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwrREFBK0Q7RUFDL0QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjs7RUFFbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlFQUFpRTtBQUNuRTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUU7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnNpZXVyK0xhK0RvdWxhaXNlJmZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qXFxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4qL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKlxcbiAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxcbiovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLypcXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gIDQuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICA1LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLypcXG4gIDYuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4qL1xcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qXFxuICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbiAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4qL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLypcXG4gIDkuIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiovXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXFxuICAgICAgICAgICAgIEN1c3RvbSBwcm9wZXJ0aWVzIFxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbjpyb290IHtcXG4gIC0tZmYtcHJpbWFyeTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcbiAgLS1mZi1hY2NlbnQ6ICdNb25zaWV1ciBMYSBEb3VsYWlzZScsIGN1cnNpdmU7XFxufVxcblxcblxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5iZy1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQgMzAlLCBoc2woMCwgMCUsIDAlKSksIHVybCgvZGlzdC9hc3NldHMvcmVzdGF1cmFudC1iYWNrZ3JvdW5kLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAzNSUgYm90dG9tIDY1JTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgaGVpZ2h0OiAxODBweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubmF2IHtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjExIDE3MSAyOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMjQsIDE5LCAwLjYpO1xcblxcbn1cXG5cXG5uYXYgdWwge1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHdpZHRoOiAyM3JlbTtcXG59XFxuXFxubmF2IGxpIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXG59XFxuXFxubmF2IGxpOmhvdmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIxMSAxNzEgMjgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gIGhlaWdodDogODB2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nOiA1JSAwO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrO1xcbiAgY29sb3I6IHJnYigyMTEgMTcxIDI4KTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luLXRvcDogLTMuNHJlbTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuMWVtbSBibGFjaywgMCAwIDAuMWVtIGJsYWNrLCAwIDAgMC4xZW0gYmxhY2s7XFxuICBsZXR0ZXItc3BhY2luZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tZW51LWJsdXJiIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaywgMCAwIDAuMDVlbSBibGFjaztcXG59XFxuXFxuLm1lbnUtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm1lbnUtaGVhZGluZyB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgY29sb3I6IHJnYigyMTEgMTcxIDI4KTtcXG59XFxuXFxuLm1lbnUtY29udGVudCBoMiB7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5tZW51LWNvbnRlbnQgaHIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMSAxNzEgMjgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4ubWVudS1jb250ZW50IGhyOmZpcnN0LW9mLXR5cGUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiByZ2IoMjExIDE3MSAyOCk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1lbnUtaXRlbS10ZXh0IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLm1lbnUtY29udGVudCBwIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLm1lbnUtcHJpY2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiByZ2IoMjExIDE3MSAyOCk7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogODB2aDtcXG4gIHBhZGRpbmctdG9wOiAtNHJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrLCAwIDAgMC4wNWVtIGJsYWNrO1xcbn1cXG5cXG4uYWJvdXQtdXMge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogcmdiKDIxMSAxNzEgMjgpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjA1ZW0gYmxhY2ssIDAgMCAwLjA1ZW0gYmxhY2ssIDAgMCAwLjA1ZW0gYmxhY2s7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHAge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgNXZ3O1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyMTEgMTcxIDI4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAyNCwgMTksIDAuNik7XFxuICBjb2xvcjogcmdiKDIxMSAxNzEgMjgpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG5cXG4gIC53ZWxjb21lIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTIuNHJlbTtcXG4gIH1cXG5cXG4gIC5tZW51LWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gIH1cXG5cXG4gIC5tZW51LWl0ZW0tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50Jyk7XG5cbiAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXRVcy50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdXMnKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChhYm91dFVzKTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gYE9ESU4nUyBMT1VOR0VgO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gYFdlIGxpa2UgdG8gdGhpbmsgb2YgT2RpbidzIExvdW5nZSBhcyBtb3JlIHRoYW4ganVzdCBhIHdvbmRlcmZ1bCBwbGFjZSB0byBlYXQgb3IgYmUgZW50ZXJ0YWluZWQuIFdlIG1ha2UgaXQgb3VyIHJlc3BvbnNpYmlsaXR5IHRvIG1ha2Ugc3VyZSB5b3VyIGV4cGVyaWVuY2VzIHdpdGggdXMgYXJlIG1lbW9yYWJsZSBvbmVzLiBPdXIgcHJvbWlzZSB0byB5b3UgaXMgdGhhdCB3ZSB3aWxsIGFsd2F5cyBzdHJpdmUgdG8gcmVhY2ggYW5kIHN1cnBhc3MgeW91ciBkaW5pbmcgYW5kIGVudGVydGFpbm1lbnQgZXhwZWN0YXRpb25zLCBhbmQgbGVhdmUgeW91IHdpdGggd29uZGVyZnVsIG1lbW9yaWVzIG9mIHRoZSBpbXBvcnRhbnQgZGF5cyB5b3UgZGVjaWRlIHRvIHNoYXJlIHdpdGggdXMuIFdlbGNvbWUgdG8gT2RpbidzIExvdW5nZS5gO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHApO1xuXG4gIHJldHVybiBlbGVtZW50O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnRGV2ZWxvcGVkIHdpdGggY2FyZSBieSBLeWxlIFBheHRvbic7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwKTtcblxuICByZXR1cm4gZm9vdGVyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob21lLWNvbnRlbnQnKVxuXG4gIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlbGNvbWUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byc7XG4gIHdlbGNvbWUuY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSBgT0RJTidTIExPVU5HRWA7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSAnQ29tZSBleHBlcmllbmNlIHRoZSBiZXN0JztcbiAgcC5jbGFzc0xpc3QuYWRkKCdtZW51LWJsdXJiJyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XG5cbiAgcmV0dXJuIGVsZW1lbnRcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50Jyk7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChtZW51KTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gYE9ESU4nUyBMT1VOR0VgO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaHIpO1xuXG4gIC8vIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIC8vIG1lbnVJdGVtMS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgLy8gbWVudUl0ZW0xLnRleHRDb250ZW50ID0gJ1Blc3RvIFNocmltcCBQYXN0YSc7XG4gIC8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcblxuICAvLyBjb25zdCBtZW51RGVzY3JpcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyBtZW51RGVzY3JpcHRpb24xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbicpO1xuICAvLyBtZW51RGVzY3JpcHRpb24xLnRleHRDb250ZW50ID0gJ0xpbmd1aW5lIHBhc3RhIHdpdGggcGVzdG8gY3JlYW0gc2F1Y2UsIHN1bmRyaWVkIHRvbWF0b2VzLCBhbmQgbXVzaHJvb21zJztcbiAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24xKTtcblxuICAvLyBjb25zdCBtZW51UHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAvLyBtZW51UHJpY2UxLmNsYXNzTGlzdC5hZGQoJ21lbnUtcHJpY2UnKTtcbiAgLy8gbWVudVByaWNlMS50ZXh0Q29udGVudCA9ICckMjIuOTUnO1xuICAvLyBlbGVtZW50LmFwcGVuZENoaWxkKG1lbnVQcmljZTEpO1xuXG4gIC8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG5cbiAgY29uc3QgbWVudUxpc3QgPSBbXG4gICAge1xuICAgICAgaXRlbTogJ1Blc3RvIFNocmltcCBQYXN0YScsXG4gICAgICB0ZXh0OiAnbGluZ3VpbmUgcGFzdGEgd2l0aCBwZXN0byBjcmVhbSBzYXVjZSwgc3VuZHJpZWQgdG9tYXRvZXMsIGFuZCBtdXNocm9vbXMnLFxuICAgICAgcHJpY2U6ICckMjIuOTUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaXRlbTogJ1J1YnkgUmFyZSBBaGknLFxuICAgICAgdGV4dDogJ3Nlc2FtZSBzZWVkIGNydXN0ZWQgYWhpLCBnaW5nZXIsIHdhc2FiaSwgc295IGJldXJyZSBibGFuYywgd2l0aCBzdWdhciBzbmFwIHBlYXMgYW5kIGdpbmdlciB3aGl0ZSByaWNlJyxcbiAgICAgIHByaWNlOiAnJDMyLjk1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGl0ZW06ICdTZWFmb29kIENpb3BwaW5vJyxcbiAgICAgIHRleHQ6ICdjbGFtIGFuZCB0b21hdG8gYnJvdGggd2l0aCBtdXNzZWxzLCBjbGFtcywgc2hyaW1wLCBmaXNoLCBjYWxhbWFyaSAmIHJlZCBjaGlsaSBmbGFrZXMsIHdpdGggZ2FybGljIGNoZWVzZSBicmVhZCAnLFxuICAgICAgcHJpY2U6ICckMzIuOTUnLFxuICAgIH0sXG4gIF1cblxuICAvLyBMb29wIG92ZXIgbWVudSB0byBjcmVhdGUgYW5kIHBvcHVsYXRlIERPTVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgbGV0IG5ld0l0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbmV3SXRlbVRpdGxlLnRleHRDb250ZW50ID0gbWVudUxpc3RbaV0uaXRlbTtcbiAgICBuZXdJdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdJdGVtVGl0bGUpO1xuXG4gICAgbGV0IG5ld0l0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5ld0l0ZW1UZXh0LnRleHRDb250ZW50ID0gbWVudUxpc3RbaV0udGV4dDtcbiAgICBuZXdJdGVtVGV4dC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGV4dCcpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3SXRlbVRleHQpO1xuXG4gICAgbGV0IG5ld1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5ld1ByaWNlLnRleHRDb250ZW50ID0gbWVudUxpc3RbaV0ucHJpY2U7XG4gICAgbmV3UHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudS1wcmljZScpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3UHJpY2UpO1xuXG4gICAgbGV0IG5ld0xpbmVCcmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChuZXdMaW5lQnJlYWspO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvbWUudGV4dENvbnRlbnQgPSAnaG9tZSc7XG4gIGhvbWUuaWQgPSAnaG9tZSc7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2VGFicycpO1xuICB1bC5hcHBlbmRDaGlsZChob21lKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICBtZW51LnRleHRDb250ZW50ID0gJ21lbnUnO1xuICBtZW51LmlkID0gJ21lbnUnO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ25hdlRhYnMnKTtcbiAgdWwuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBhYm91dC50ZXh0Q29udGVudCA9ICdhYm91dCc7XG4gIGFib3V0LmlkID0gJ2Fib3V0JztcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2VGFicycpO1xuICB1bC5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgcmV0dXJuIG5hdkJhclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlTmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuXG5mdW5jdGlvbiBjcmVhdGVCYWNrZ3JvdW5kKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JnLWdyYWRpZW50Jyk7XG5cbiAgcmV0dXJuIGJvZHlcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG5cbiAgcmV0dXJuIG1haW5Db250ZW50O1xufVxuXG5jcmVhdGVCYWNrZ3JvdW5kKClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluQ29udGVudCgpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4vLyBOZWVkIHRvIGNoYW5nZSBiYWNrIHRvIEhvbWUgUGFnZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSlcblxuLy8gTmF2IEV2ZW50IExpc3RlbmVyc1xuY29uc3QgbmF2VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZUYWJzJyk7XG5cbm5hdlRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5maXJzdENoaWxkKTtcblxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2hvbWUnKSB7XG4gICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lUGFnZSgpKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnbWVudScpIHtcbiAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2Fib3V0Jykge1xuICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXQoKSk7XG4gICAgfVxuICB9KVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=