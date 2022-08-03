"use strict";
(self["webpackChunkjavascript_group_capstone"] = self["webpackChunkjavascript_group_capstone"] || []).push([["main"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/wll.jpg */ "./src/images/wll.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable declaration-block-semicolon-newline-after */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins';\n  color: rgb(180, 228, 91);\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-attachment: fixed;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  position: fixed;\n  padding: 4px 10%;\n  gap: 28vw;\n  align-items: center;\n}\n\n.title {\n  color: rgb(180, 228, 91);\n  font-size: 2.5vw;\n  font-weight: 700;\n}\n\n.nav {\n  list-style-type: none;\n  color: rgb(180, 228, 91);\n  display: flex;\n  gap: 1.2vw;\n  align-items: center;\n}\n\nhr {\n  height: 20px;\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.tab a {\n  text-decoration: none;\n  transition: all .2s ease-in-out;\n}\n\n.tab a:hover {\n  color: rgb(215, 235, 178);\n  transform: scale(1.1);\n}\n\n.tab:hover {\n  border-bottom: 1px solid rgb(180, 228, 91);\n}\n\n.main {\n  padding-top: 10vw;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 6px;\n  justify-content: center;\n  margin: 2px 9%;\n}\n\n.serie {\n  background-color: rgba(15, 13, 10, 0.795);\n  padding: 20px;\n  font-size: 1.3vw;\n  color: rgb(180, 228, 91);\n  transition: all .2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.serie:hover {\n  transform: scale(1.1);\n}\n\n.pic {\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.fa {\n  transition-duration: 0.4s;\n  -webkit-transition-duration: 0.4s;\n}\n\n.fa:hover {\n  transition-duration: 0.1s;\n  color: #ffdfdf;\n  transform: scale(1.2);\n}\n\n.fa::after {\n  content: \"\";\n  border-radius: 4em;\n  left: 0;\n  top:0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: scale(1.2);\n}\n.fa:active::after {\n  box-shadow: 0 0 0 0 rgb(180, 228, 91);\n  position: absolute;\n  border-radius: 4em;\n  left: 0;\n  top:0;\n  opacity: 1;\n  transition: 0s;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n}\n\n.comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 4px;\n  width: 10vw;\n  height: 2vw;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal-content {\n  margin: auto;\n  width: 80%;\n}\n\n.modalContent {\n  background-color: rgba(32, 18, 18, 0.8);\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.part1 {\n  width: 60%;\n}\n\n.part2 {\n  width: 35%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n}\n\n.original {\n  width: 100%;\n  border: 1px solid rgba(180, 228, 91, 0.726);\n  border-radius: 8px;\n}\n\n.text {\n  padding: 20px 40px 20px 0;\n}\n\n.text-title {\n  color: #fff;\n}\n\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment-title {\n  color: #fff;\n  font-size: 1.3vw;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.close {\n  color: rgb(180, 228, 91);\n  float: right;\n  font-size: 44px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover,\n.close:focus {\n  color: rgba(180, 228, 91, 0.493);\n  text-decoration: none;\n}\n\n.comment-list {\n  width: 100%;\n  height: 30%;\n}\n\ninput {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 8px 8px 8px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #ffaa4d;\n  margin-bottom: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  height: 5vw;\n  border: 1px solid #ffaa4d;\n  margin: 24px 0 12px 0;\n}\n\ntextarea:focus {\n  outline: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,oEAAoE;AACpE,gEAAgE;AAChE;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,yDAAyC;EACzC,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,WAAW;EACX,yCAAyC;EACzC,eAAe;EACf,gBAAgB;EAChB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,aAAa;EACb,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,0CAA0C;EAC1C,QAAQ;EACR,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb,gBAAgB;EAChB,wBAAwB;EACxB,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,yBAAyB;EACzB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,OAAO;EACP,KAAK;EACL,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;AACvB;AACA;EACE,qCAAqC;EACrC,kBAAkB;EAClB,kBAAkB;EAClB,OAAO;EACP,KAAK;EACL,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,mCAAmC;EACnC,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,WAAW;EACX,4BAA4B;EAC5B,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,uCAAuC;EACvC,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;EACf,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;;EAEE,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,cAAc;EACd,YAAY;EACZ,WAAW;EACX,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,2BAA2B;EAC3B,cAAc;EACd,YAAY;EACZ,WAAW;EACX,WAAW;EACX,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf","sourcesContent":["/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable declaration-block-semicolon-newline-after */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins';\n  color: rgb(180, 228, 91);\n}\n\nbody {\n  background-image: url('./images/wll.jpg');\n  background-size: contain;\n  background-attachment: fixed;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  position: fixed;\n  padding: 4px 10%;\n  gap: 28vw;\n  align-items: center;\n}\n\n.title {\n  color: rgb(180, 228, 91);\n  font-size: 2.5vw;\n  font-weight: 700;\n}\n\n.nav {\n  list-style-type: none;\n  color: rgb(180, 228, 91);\n  display: flex;\n  gap: 1.2vw;\n  align-items: center;\n}\n\nhr {\n  height: 20px;\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.tab a {\n  text-decoration: none;\n  transition: all .2s ease-in-out;\n}\n\n.tab a:hover {\n  color: rgb(215, 235, 178);\n  transform: scale(1.1);\n}\n\n.tab:hover {\n  border-bottom: 1px solid rgb(180, 228, 91);\n}\n\n.main {\n  padding-top: 10vw;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 6px;\n  justify-content: center;\n  margin: 2px 9%;\n}\n\n.serie {\n  background-color: rgba(15, 13, 10, 0.795);\n  padding: 20px;\n  font-size: 1.3vw;\n  color: rgb(180, 228, 91);\n  transition: all .2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.serie:hover {\n  transform: scale(1.1);\n}\n\n.pic {\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.fa {\n  transition-duration: 0.4s;\n  -webkit-transition-duration: 0.4s;\n}\n\n.fa:hover {\n  transition-duration: 0.1s;\n  color: #ffdfdf;\n  transform: scale(1.2);\n}\n\n.fa::after {\n  content: \"\";\n  border-radius: 4em;\n  left: 0;\n  top:0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: scale(1.2);\n}\n.fa:active::after {\n  box-shadow: 0 0 0 0 rgb(180, 228, 91);\n  position: absolute;\n  border-radius: 4em;\n  left: 0;\n  top:0;\n  opacity: 1;\n  transition: 0s;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n}\n\n.comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 4px;\n  width: 10vw;\n  height: 2vw;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal-content {\n  margin: auto;\n  width: 80%;\n}\n\n.modalContent {\n  background-color: rgba(32, 18, 18, 0.8);\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.part1 {\n  width: 60%;\n}\n\n.part2 {\n  width: 35%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n}\n\n.original {\n  width: 100%;\n  border: 1px solid rgba(180, 228, 91, 0.726);\n  border-radius: 8px;\n}\n\n.text {\n  padding: 20px 40px 20px 0;\n}\n\n.text-title {\n  color: #fff;\n}\n\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment-title {\n  color: #fff;\n  font-size: 1.3vw;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.close {\n  color: rgb(180, 228, 91);\n  float: right;\n  font-size: 44px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover,\n.close:focus {\n  color: rgba(180, 228, 91, 0.493);\n  text-decoration: none;\n}\n\n.comment-list {\n  width: 100%;\n  height: 30%;\n}\n\ninput {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 8px 8px 8px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #ffaa4d;\n  margin-bottom: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  height: 5vw;\n  border: 1px solid #ffaa4d;\n  margin: 24px 0 12px 0;\n}\n\ntextarea:focus {\n  outline: none;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const body = document.querySelector('body');
const modalContent = document.querySelector('.content');
const modal = document.getElementById('myModal');

const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/1/episodes');
  const series = await response.json();
  return series;
};

const showSeries = async () => {
  const series = await getSeries();
  const list = document.querySelector('.main');
  series.forEach((series) => {
    const episodes = document.createElement('div');
    episodes.classList.add('serie');
    episodes.innerHTML = `
      <img class="pic" src="${series.image.medium}" alt="${series.name}">
      <p class="name">${series.name}  <i class="fa fa-heart"></i></P>
      <button type="submit" class="comment" id="${series.id}">Comment</button>
      `;
    list.appendChild(episodes);
  });
};

document.addEventListener('DOMContentLoaded', showSeries);

const getDataFromApi = (id) => {
  // getCommentItems(id);
  getSeries().then((data) => {
    data.forEach((series) => {
      if (series.id.toString() === id.toString()) {
        modalContent.innerHTML = `
            <div class="modalContent">
                <div class="part1">
                    <img class="original" src="${series.image.original}" alt="">
                    <div class="text">
                      <h1 class="text-title">${series.name}</h1>
                      <p class="language">${series.summary}</p>
                    </div>
                </div>
                <div class="part2">
                  <div class="comment-top">
                    <p class="comment-title">Comments</p>
                    <span class="close">&times;</span>
                  </div>
                  <div class="comment-section">
                    <input type="text" name="name" id="name" placeholder="Name">
                    <input type="e-mail" name="name" id="email" placeholder="E-mail">
                    <textarea type="text" name="commentText" id="commentText" placeholder="Comments..."></textarea>
                    <button class="comment">Add Comments</button>
                  </div>
                  <div class="comment-list"></div>
                </div>
                  
              </div>
            `;
      }
    });
  });
};

body.addEventListener('click', (e) => {
  if (e.target.className === 'comment') {
    modal.style.display = 'block';
    getDataFromApi(e.target.id);
  }
  if (e.target.className === 'close') {
    modal.style.display = 'none';
  }
  if (e.target === modal) {
    modal.style.display = 'none';
  }
  // if (e.target.className === 'far fa-heart likes') {
  //   addLikes(e.target.id);
  // }
  // if (e.target.className === 'add-comments') {
  //   const value = { name: document.querySelector('#name').value, text: document.querySelector('#commentText').value, id: document.querySelector('#id').value };
  //   postItem(value);
  // }
});


/***/ }),

/***/ "./src/images/wll.jpg":
/*!****************************!*\
  !*** ./src/images/wll.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5534e490de2741d90460.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2ZxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0JBQW9CLFNBQVMsWUFBWTtBQUN2RSx3QkFBd0IsY0FBYztBQUN0QyxrREFBa0QsVUFBVTtBQUM1RDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsc0JBQXNCO0FBQ3ZFO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0QsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy93bGwuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgZm9udC1mYW1pbHktbm8tbWlzc2luZy1nZW5lcmljLWZhbWlseS1rZXl3b3JkICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmxvY2stc2VtaWNvbG9uLW5ld2xpbmUtYWZ0ZXIgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxMywgMTAsIDAuOTE1KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmc6IDRweCAxMCU7XFxuICBnYXA6IDI4dnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgZm9udC1zaXplOiAyLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5uYXYge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS4ydnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuLnRhYiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YWIgYTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIxNSwgMjM1LCAxNzgpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZy10b3A6IDEwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgZ2FwOiA2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnB4IDklO1xcbn1cXG5cXG4uc2VyaWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTMsIDEwLCAwLjc5NSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjN2dztcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLnNlcmllOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnBpYyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuLmZhIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5mYTpob3ZlciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgY29sb3I6ICNmZmRmZGY7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5mYTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItcmFkaXVzOiA0ZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOjA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4uZmE6YWN0aXZlOjphZnRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYigxODAsIDIyOCwgOTEpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDowO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IDBzO1xcbn1cXG5cXG4ubmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDEwdnc7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5tb2RhbENvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMTgsIDE4LCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5wYXJ0MSB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ucGFydDIge1xcbiAgd2lkdGg6IDM1JTtcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3JpZ2luYWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4MCwgMjI4LCA5MSwgMC43MjYpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4udGV4dCB7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCAwO1xcbn1cXG5cXG4udGV4dC10aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbW1lbnQtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudC10aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS4zdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDQ0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogcmdiYSgxODAsIDIyOCwgOTEsIDAuNDkzKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmFhNGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1dnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZhYTRkO1xcbiAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9FQUFvRTtBQUNwRSxnRUFBZ0U7QUFDaEU7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5REFBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsS0FBSztFQUNMLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLEtBQUs7RUFDTCxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlIGZvbnQtZmFtaWx5LW5vLW1pc3NpbmctZ2VuZXJpYy1mYW1pbHkta2V5d29yZCAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJsb2NrLXNlbWljb2xvbi1uZXdsaW5lLWFmdGVyICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3dsbC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDZ2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEzLCAxMCwgMC45MTUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZzogNHB4IDEwJTtcXG4gIGdhcDogMjh2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjJ2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG4udGFiIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhYiBhOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjE1LCAyMzUsIDE3OCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nLXRvcDogMTB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICBnYXA6IDZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAycHggOSU7XFxufVxcblxcbi5zZXJpZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxMywgMTAsIDAuNzk1KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDEuM3Z3O1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2VyaWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucGljIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG4uZmEge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLmZhOmhvdmVyIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICBjb2xvcjogI2ZmZGZkZjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmZhOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6MDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi5mYTphY3RpdmU6OmFmdGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA0ZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOjA7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogMHM7XFxufVxcblxcbi5uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb21tZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogMnZ3O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAxOCwgMTgsIDAuOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnBhcnQxIHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5wYXJ0MiB7XFxuICB3aWR0aDogMzUlO1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcmlnaW5hbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTgwLCAyMjgsIDkxLCAwLjcyNik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50ZXh0IHtcXG4gIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDA7XFxufVxcblxcbi50ZXh0LXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29tbWVudC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjN2dztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiByZ2JhKDE4MCwgMjI4LCA5MSwgMC40OTMpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29tbWVudC1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMCU7XFxufVxcblxcbmlucHV0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYWE0ZDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDV2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmFhNGQ7XFxuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG5cbmNvbnN0IGdldFNlcmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8xL2VwaXNvZGVzJyk7XG4gIGNvbnN0IHNlcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHNlcmllcztcbn07XG5cbmNvbnN0IHNob3dTZXJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNlcmllcyA9IGF3YWl0IGdldFNlcmllcygpO1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgc2VyaWVzLmZvckVhY2goKHNlcmllcykgPT4ge1xuICAgIGNvbnN0IGVwaXNvZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXBpc29kZXMuY2xhc3NMaXN0LmFkZCgnc2VyaWUnKTtcbiAgICBlcGlzb2Rlcy5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIGNsYXNzPVwicGljXCIgc3JjPVwiJHtzZXJpZXMuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIiR7c2VyaWVzLm5hbWV9XCI+XG4gICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke3Nlcmllcy5uYW1lfSAgPGkgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48L1A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImNvbW1lbnRcIiBpZD1cIiR7c2VyaWVzLmlkfVwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgIGA7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChlcGlzb2Rlcyk7XG4gIH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNob3dTZXJpZXMpO1xuXG5jb25zdCBnZXREYXRhRnJvbUFwaSA9IChpZCkgPT4ge1xuICAvLyBnZXRDb21tZW50SXRlbXMoaWQpO1xuICBnZXRTZXJpZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChzZXJpZXMpID0+IHtcbiAgICAgIGlmIChzZXJpZXMuaWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKSkge1xuICAgICAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsQ29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0MVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwib3JpZ2luYWxcIiBzcmM9XCIke3Nlcmllcy5pbWFnZS5vcmlnaW5hbH1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXRpdGxlXCI+JHtzZXJpZXMubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFuZ3VhZ2VcIj4ke3Nlcmllcy5zdW1tYXJ5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnQyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXRpdGxlXCI+Q29tbWVudHM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZS1tYWlsXCIgbmFtZT1cIm5hbWVcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFLW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvbW1lbnRUZXh0XCIgaWQ9XCJjb21tZW50VGV4dFwiIHBsYWNlaG9sZGVyPVwiQ29tbWVudHMuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudFwiPkFkZCBDb21tZW50czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1saXN0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tbWVudCcpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBnZXREYXRhRnJvbUFwaShlLnRhcmdldC5pZCk7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nsb3NlJykge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgLy8gaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ZhciBmYS1oZWFydCBsaWtlcycpIHtcbiAgLy8gICBhZGRMaWtlcyhlLnRhcmdldC5pZCk7XG4gIC8vIH1cbiAgLy8gaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FkZC1jb21tZW50cycpIHtcbiAgLy8gICBjb25zdCB2YWx1ZSA9IHsgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZSwgdGV4dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRUZXh0JykudmFsdWUsIGlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWQnKS52YWx1ZSB9O1xuICAvLyAgIHBvc3RJdGVtKHZhbHVlKTtcbiAgLy8gfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=