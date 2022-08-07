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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable declaration-block-semicolon-newline-after */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins';\n  color: rgb(180, 228, 91);\n  scroll-behavior: smooth;\n  transition: all 0.5s ease-in-out;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-attachment: fixed;\n  overflow-x: hidden;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  padding: 4px 10%;\n  gap: 37vw;\n  align-items: center;\n}\n\n.title {\n  color: rgb(180, 228, 91);\n  font-size: 2.5vw;\n  font-weight: 700;\n}\n\n.nav {\n  list-style-type: none;\n  color: rgb(180, 228, 91);\n  display: flex;\n  gap: 1.2vw;\n  align-items: center;\n}\n\nhr {\n  height: 20px;\n  border: 1px solid rgb(180, 228, 91);\n}\n\nfooter a {\n  font-weight: bold;\n}\n\n.tab a {\n  text-decoration: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.tab a:hover {\n  color: rgb(215, 235, 178);\n  transform: scale(1.1);\n}\n\n.tab:hover {\n  border-bottom: 1px solid rgb(180, 228, 91);\n}\n\n.main {\n  padding: 3vw;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 6px;\n  justify-content: center;\n  margin: 2px 9%;\n  min-height: 40vw;\n}\n\n.serie {\n  background-color: rgba(15, 13, 10, 0.795);\n  padding: 20px;\n  font-size: 1.3vw;\n  color: rgb(180, 228, 91);\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.serie:hover {\n  transform: scale(1.1);\n}\n\n.pic {\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.fa {\n  transition-duration: 0.4s;\n  -webkit-transition-duration: 0.4s;\n}\n\n.fa:hover {\n  transition-duration: 0.1s;\n  color: #ffdfdf;\n  transform: scale(1.2);\n}\n\n.fa::after {\n  content: \"\";\n  border-radius: 4em;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: scale(1.2);\n}\n\n.fa:active::after {\n  box-shadow: 0 0 0 0 rgb(180, 228, 91);\n  position: absolute;\n  border-radius: 4em;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: 0s;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 4px;\n  width: 10vw;\n  height: 2vw;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all 0.2s ease-in-out;\n}\n\n.add-comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 3px;\n  width: 6vw;\n  height: 2vw;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.add-comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all 0.2s ease-in-out;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal-content {\n  margin: auto;\n  width: 80%;\n}\n\n.modalContent {\n  background-color: rgba(32, 18, 18, 0.8);\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.part1 {\n  width: 60%;\n}\n\n.part2 {\n  width: 35%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n}\n\n.original {\n  width: 100%;\n  border: 1px solid rgba(180, 228, 91, 0.726);\n  border-radius: 8px;\n}\n\n.text {\n  padding: 20px 40px 20px 0;\n}\n\n.text-title {\n  color: #fff;\n}\n\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment-title {\n  color: #fff;\n  font-size: 1.3vw;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.comments-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none;\n  gap: 8px;\n  overflow-y: auto;\n  scrollbar-width: none;\n  max-height: 200px;\n  padding: 12px;\n}\n\n.all-commented {\n  margin: 6px;\n  color: rgb(180, 228, 91);\n  font-size: small;\n}\n\n.date {\n  font-style: italic;\n  font-size: smaller;\n}\n\n.commented {\n  color: #fff;\n  font-size: small;\n}\n\n.close {\n  color: rgb(180, 228, 91);\n  float: right;\n  font-size: 44px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover,\n.close:focus {\n  color: rgba(180, 228, 91, 0.493);\n  text-decoration: none;\n}\n\n.comment-list {\n  width: 100%;\n  height: 30%;\n}\n\ninput {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 8px 8px 8px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #ffaa4d;\n  margin-bottom: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  height: 5vw;\n  border: 1px solid #ffaa4d;\n  margin: 24px 0 12px 0;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.likes {\n  color: #fff;\n  font-size: 14px;\n  margin-right: 12px;\n}\n\n.serie-name {\n  font-weight: bolder;\n}\n\nfooter {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  position: relative;\n  padding: 4px 20%;\n  gap: 28vw;\n  align-items: center;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable declaration-block-semicolon-newline-after */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins';\n  color: rgb(180, 228, 91);\n  scroll-behavior: smooth;\n  transition: all 0.5s ease-in-out;\n}\n\nbody {\n  background-image: url('./images/wll.jpg');\n  background-size: contain;\n  background-attachment: fixed;\n  overflow-x: hidden;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  padding: 4px 10%;\n  gap: 37vw;\n  align-items: center;\n}\n\n.title {\n  color: rgb(180, 228, 91);\n  font-size: 2.5vw;\n  font-weight: 700;\n}\n\n.nav {\n  list-style-type: none;\n  color: rgb(180, 228, 91);\n  display: flex;\n  gap: 1.2vw;\n  align-items: center;\n}\n\nhr {\n  height: 20px;\n  border: 1px solid rgb(180, 228, 91);\n}\n\nfooter a {\n  font-weight: bold;\n}\n\n.tab a {\n  text-decoration: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.tab a:hover {\n  color: rgb(215, 235, 178);\n  transform: scale(1.1);\n}\n\n.tab:hover {\n  border-bottom: 1px solid rgb(180, 228, 91);\n}\n\n.main {\n  padding: 3vw;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 6px;\n  justify-content: center;\n  margin: 2px 9%;\n  min-height: 40vw;\n}\n\n.serie {\n  background-color: rgba(15, 13, 10, 0.795);\n  padding: 20px;\n  font-size: 1.3vw;\n  color: rgb(180, 228, 91);\n  transition: all 0.2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.serie:hover {\n  transform: scale(1.1);\n}\n\n.pic {\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.fa {\n  transition-duration: 0.4s;\n  -webkit-transition-duration: 0.4s;\n}\n\n.fa:hover {\n  transition-duration: 0.1s;\n  color: #ffdfdf;\n  transform: scale(1.2);\n}\n\n.fa::after {\n  content: \"\";\n  border-radius: 4em;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: scale(1.2);\n}\n\n.fa:active::after {\n  box-shadow: 0 0 0 0 rgb(180, 228, 91);\n  position: absolute;\n  border-radius: 4em;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: 0s;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 4px;\n  width: 10vw;\n  height: 2vw;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all 0.2s ease-in-out;\n}\n\n.add-comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 3px;\n  width: 6vw;\n  height: 2vw;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.add-comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all 0.2s ease-in-out;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal-content {\n  margin: auto;\n  width: 80%;\n}\n\n.modalContent {\n  background-color: rgba(32, 18, 18, 0.8);\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.part1 {\n  width: 60%;\n}\n\n.part2 {\n  width: 35%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n}\n\n.original {\n  width: 100%;\n  border: 1px solid rgba(180, 228, 91, 0.726);\n  border-radius: 8px;\n}\n\n.text {\n  padding: 20px 40px 20px 0;\n}\n\n.text-title {\n  color: #fff;\n}\n\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment-title {\n  color: #fff;\n  font-size: 1.3vw;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.comments-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none;\n  gap: 8px;\n  overflow-y: auto;\n  scrollbar-width: none;\n  max-height: 200px;\n  padding: 12px;\n}\n\n.all-commented {\n  margin: 6px;\n  color: rgb(180, 228, 91);\n  font-size: small;\n}\n\n.date {\n  font-style: italic;\n  font-size: smaller;\n}\n\n.commented {\n  color: #fff;\n  font-size: small;\n}\n\n.close {\n  color: rgb(180, 228, 91);\n  float: right;\n  font-size: 44px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover,\n.close:focus {\n  color: rgba(180, 228, 91, 0.493);\n  text-decoration: none;\n}\n\n.comment-list {\n  width: 100%;\n  height: 30%;\n}\n\ninput {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 8px 8px 8px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #ffaa4d;\n  margin-bottom: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  height: 5vw;\n  border: 1px solid #ffaa4d;\n  margin: 24px 0 12px 0;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.likes {\n  color: #fff;\n  font-size: 14px;\n  margin-right: 12px;\n}\n\n.serie-name {\n  font-weight: bolder;\n}\n\nfooter {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  position: relative;\n  padding: 4px 20%;\n  gap: 28vw;\n  align-items: center;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_fetchseries_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchseries.js */ "./src/modules/fetchseries.js");
/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likes.js */ "./src/modules/likes.js");




const all = document.querySelector('body');
const modal = document.getElementById('myModal');

all.addEventListener('click', (e) => {
  if (e.target.className === 'comment') {
    modal.style.display = 'block';
    (0,_modules_fetchseries_js__WEBPACK_IMPORTED_MODULE_1__.fetchData)(e.target.id);
  }
  if (e.target.className === 'close') {
    modal.style.display = 'none';
  }
  if (e.target === modal) {
    modal.style.display = 'none';
  }
  if (e.target.className === 'fa fa-heart') {
    (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target.id);
  }
});


/***/ }),

/***/ "./src/modules/addcomment.js":
/*!***********************************!*\
  !*** ./src/modules/addcomment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComments.js */ "./src/modules/fetchComments.js");


const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/comments';

const postComment = async (e) => {
  e.preventDefault();
  const movieID = e.target;

  const name = document.getElementById('name').value.trim();
  const addComment = document.getElementById('added-comment').value.trim();
  const commentForm = document.querySelector('.comment-form');

  if (name && addComment) {
    const result = await fetch(commentURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        item_id: `${movieID.id}`,
        username: `${name}`,
        comment: `${addComment}`,
      }),
    });
    commentForm.reset();
    await result.text();
    (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieID.id);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);

/***/ }),

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addComment = (comments) => {
  const totalcomments = document.querySelector('.count-commments');
  totalcomments.innerHTML = `(${comments.length})`;
  const commentList = document.querySelector('.comments-container');
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    commentList.innerHTML += `<li class="all-commented"><span class="date">${comment.creation_date}</span> ${comment.username}: <span class="commented">${comment.comment}</span></li>`;
  });
};

const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/comments';

const fetchComments = async (id) => {
  const request = new Request(`${commentURL}?item_id=${id}`);
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('No comments added for this movie');
  }
  const getComment = await response.json();
  addComment(getComment);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);

/***/ }),

/***/ "./src/modules/fetchseries.js":
/*!************************************!*\
  !*** ./src/modules/fetchseries.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": () => (/* binding */ fetchData),
/* harmony export */   "getSeries": () => (/* binding */ getSeries)
/* harmony export */ });
/* harmony import */ var _addcomment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcomment.js */ "./src/modules/addcomment.js");
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComments.js */ "./src/modules/fetchComments.js");



const modalContent = document.querySelector('.content');

const getSeries = async () => {
  const response = await fetch('https://api.tvmaze.com/shows/1/episodes');
  const series = await response.json();
  return series;
};

const showSeries = async () => {
  const series = await getSeries();
  const totalmovies = document.querySelector('.title');
  totalmovies.insertAdjacentHTML('beforeend', `(${series.length})`);
  const list = document.querySelector('.main');
  series.forEach((series) => {
    const episodes = document.createElement('div');
    episodes.classList.add('serie');
    episodes.innerHTML = `
        <img class="pic" src="${series.image.medium}" alt="${series.name}">
        <div class="name"><p class="serie-name">${series.name}</p> 
            <p> <span id="${series.id}" class="likes">0</span><i id="${series.id}" class="fa fa-heart"></i></p>
        </div>
        <button type="submit" class="comment" id="${series.id}">Comment</button>
        `;
    list.appendChild(episodes);
  });
};

document.addEventListener('DOMContentLoaded', showSeries);

const fetchData = (id) => {
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
                      <p class="comment-title">Comments <span class="count-commments"></span></p>
                      <span class="close">&times;</span>
                    </div>
                    <ul class="comments-container">
                    </ul>
                    <form class="form-group form-control p-4 comment-form">
                      <input type="text" placeholder="Your name" class="form-group form-control" id="name">
                      <textarea class="form-control form-group" placeholder="Your Comment" style="height: 120px;" id="added-comment"></textarea>
                      <button type="button" class="add-comment" id=${id}>Comment</button>
                    </form>
                  </div>
                </div>
              </div>`;
        (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
        const submitButton = document.querySelector('.add-comment');
        submitButton.addEventListener('click', _addcomment_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      }
    });
  });
};



/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchseries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchseries.js */ "./src/modules/fetchseries.js");


const newLike = async (id) => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/likes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return data;
};

const getData = async (call) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/likes';
  const data = await fetch(url);
  const content = await data.json();
  call(content);
};

const addLikes = (id) => {
  (0,_fetchseries_js__WEBPACK_IMPORTED_MODULE_0__.getSeries)().then((data) => {
    data.forEach((series) => {
      if (series.id.toString() === id.toString()) {
        newLike(id).then(() => {
          getData((data) => {
            data.forEach((e) => {
              if (e.item_id.toString() === id.toString()) {
                const element = document.getElementById(id.toString());
                element.parentElement.textContent = e.likes;
              }
            });
          });
        });
      }
    });
  });
};

window.addEventListener('load', () => {
  getData((data) => {
    data.forEach((element) => {
      const likesCount = document.querySelectorAll('.likes');
      likesCount.forEach((e) => {
        if (e.id.toString() === element.item_id.toString()) {
          e.textContent = element.likes;
        }
      });
    });
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwwREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hZGRjb21tZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9mZXRjaENvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9mZXRjaHNlcmllcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3dsbC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBmb250LWZhbWlseS1uby1taXNzaW5nLWdlbmVyaWMtZmFtaWx5LWtleXdvcmQgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1ibG9jay1zZW1pY29sb24tbmV3bGluZS1hZnRlciAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxMywgMTAsIDAuOTE1KTtcXG4gIHBhZGRpbmc6IDRweCAxMCU7XFxuICBnYXA6IDM3dnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgZm9udC1zaXplOiAyLjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5uYXYge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS4ydnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YWIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhYiBhOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjE1LCAyMzUsIDE3OCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nOiAzdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgZ2FwOiA2cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnB4IDklO1xcbiAgbWluLWhlaWdodDogNDB2dztcXG59XFxuXFxuLnNlcmllIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEzLCAxMCwgMC43OTUpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4zdnc7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2VyaWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucGljIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG4uZmEge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLmZhOmhvdmVyIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICBjb2xvcjogI2ZmZGZkZjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmZhOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uZmE6YWN0aXZlOjphZnRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYigxODAsIDIyOCwgOTEpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiAwcztcXG59XFxuXFxuLm5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogMnZ3O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb21tZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGNvbG9yOiByZ2IoMzMsIDM0LCAzMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB3aWR0aDogNnZ3O1xcbiAgaGVpZ2h0OiAydnc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1jb21tZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGNvbG9yOiByZ2IoMzMsIDM0LCAzMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5tb2RhbENvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMTgsIDE4LCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5wYXJ0MSB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ucGFydDIge1xcbiAgd2lkdGg6IDM1JTtcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3JpZ2luYWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4MCwgMjI4LCA5MSwgMC43MjYpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4udGV4dCB7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCAwO1xcbn1cXG5cXG4udGV4dC10aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbW1lbnQtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudC10aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS4zdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5jb21tZW50cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDhweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5hbGwtY29tbWVudGVkIHtcXG4gIG1hcmdpbjogNnB4O1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuLmRhdGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG4uY29tbWVudGVkIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiByZ2JhKDE4MCwgMjI4LCA5MSwgMC40OTMpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29tbWVudC1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMCU7XFxufVxcblxcbmlucHV0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYWE0ZDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDV2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmFhNGQ7XFxuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5saWtlcyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuXFxuLnNlcmllLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNnZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTMsIDEwLCAwLjkxNSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA0cHggMjAlO1xcbiAgZ2FwOiAyOHZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvRUFBb0U7QUFDcEUsZ0VBQWdFO0FBQ2hFO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5REFBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Us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LHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVsaW50LWRpc2FibGUgZm9udC1mYW1pbHktbm8tbWlzc2luZy1nZW5lcmljLWZhbWlseS1rZXl3b3JkICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmxvY2stc2VtaWNvbG9uLW5ld2xpbmUtYWZ0ZXIgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3dsbC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDZ2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEzLCAxMCwgMC45MTUpO1xcbiAgcGFkZGluZzogNHB4IDEwJTtcXG4gIGdhcDogMzd2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjJ2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhYiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFiIGE6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMTUsIDIzNSwgMTc4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhYjpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE4MCwgMjI4LCA5MSk7XFxufVxcblxcbi5tYWluIHtcXG4gIHBhZGRpbmc6IDN2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICBnYXA6IDZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAycHggOSU7XFxuICBtaW4taGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4uc2VyaWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTMsIDEwLCAwLjc5NSk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjN2dztcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5zZXJpZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5waWMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMjI4LCA5MSk7XFxufVxcblxcbi5mYSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4uZmE6aG92ZXIge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gIGNvbG9yOiAjZmZkZmRmO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uZmE6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5mYTphY3RpdmU6OmFmdGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA0ZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IDBzO1xcbn1cXG5cXG4ubmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHdpZHRoOiAxMHZ3O1xcbiAgaGVpZ2h0OiAydnc7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNvbW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY29sb3I6IHJnYigzMywgMzQsIDMwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiA2dnc7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY29sb3I6IHJnYigzMywgMzQsIDMwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAxOCwgMTgsIDAuOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnBhcnQxIHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5wYXJ0MiB7XFxuICB3aWR0aDogMzUlO1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcmlnaW5hbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTgwLCAyMjgsIDkxLCAwLjcyNik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50ZXh0IHtcXG4gIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDA7XFxufVxcblxcbi50ZXh0LXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29tbWVudC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjN2dztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogOHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLmFsbC1jb21tZW50ZWQge1xcbiAgbWFyZ2luOiA2cHg7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbi5jb21tZW50ZWQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiA0NHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IHJnYmEoMTgwLCAyMjgsIDkxLCAwLjQ5Myk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb21tZW50LWxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwJTtcXG59XFxuXFxuaW5wdXQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogOHB4IDhweCA4cHggNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZhYTRkO1xcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXZ3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWE0ZDtcXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uc2VyaWUtbmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxMywgMTAsIDAuOTE1KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDRweCAyMCU7XFxuICBnYXA6IDI4dnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL21vZHVsZXMvZmV0Y2hzZXJpZXMuanMnO1xuaW1wb3J0IGFkZExpa2VzIGZyb20gJy4vbW9kdWxlcy9saWtlcy5qcyc7XG5cbmNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcblxuYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZmV0Y2hEYXRhKGUudGFyZ2V0LmlkKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY2xvc2UnKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnZmEgZmEtaGVhcnQnKSB7XG4gICAgYWRkTGlrZXMoZS50YXJnZXQuaWQpO1xuICB9XG59KTtcbiIsImltcG9ydCBmZXRjaENvbW1lbnRzIGZyb20gJy4vZmV0Y2hDb21tZW50cy5qcyc7XG5cbmNvbnN0IGNvbW1lbnRVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVERURzNzeG43alkwbWZKSGdHOWEvY29tbWVudHMnO1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbW92aWVJRCA9IGUudGFyZ2V0O1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgYWRkQ29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRlZC1jb21tZW50JykudmFsdWUudHJpbSgpO1xuICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWZvcm0nKTtcblxuICBpZiAobmFtZSAmJiBhZGRDb21tZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goY29tbWVudFVSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBgJHttb3ZpZUlELmlkfWAsXG4gICAgICAgIHVzZXJuYW1lOiBgJHtuYW1lfWAsXG4gICAgICAgIGNvbW1lbnQ6IGAke2FkZENvbW1lbnR9YCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbW1lbnRGb3JtLnJlc2V0KCk7XG4gICAgYXdhaXQgcmVzdWx0LnRleHQoKTtcbiAgICBmZXRjaENvbW1lbnRzKG1vdmllSUQuaWQpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Q29tbWVudDsiLCJjb25zdCBhZGRDb21tZW50ID0gKGNvbW1lbnRzKSA9PiB7XG4gIGNvbnN0IHRvdGFsY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQtY29tbW1lbnRzJyk7XG4gIHRvdGFsY29tbWVudHMuaW5uZXJIVE1MID0gYCgke2NvbW1lbnRzLmxlbmd0aH0pYDtcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtY29udGFpbmVyJyk7XG4gIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgY29tbWVudExpc3QuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJhbGwtY29tbWVudGVkXCI+PHNwYW4gY2xhc3M9XCJkYXRlXCI+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPiAke2NvbW1lbnQudXNlcm5hbWV9OiA8c3BhbiBjbGFzcz1cImNvbW1lbnRlZFwiPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj48L2xpPmA7XG4gIH0pO1xufTtcblxuY29uc3QgY29tbWVudFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9URFRHM3N4bjdqWTBtZkpIZ0c5YS9jb21tZW50cyc7XG5cbmNvbnN0IGZldGNoQ29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGAke2NvbW1lbnRVUkx9P2l0ZW1faWQ9JHtpZH1gKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tbWVudHMgYWRkZWQgZm9yIHRoaXMgbW92aWUnKTtcbiAgfVxuICBjb25zdCBnZXRDb21tZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBhZGRDb21tZW50KGdldENvbW1lbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hDb21tZW50czsiLCJpbXBvcnQgcG9zdENvbW1lbnQgZnJvbSAnLi9hZGRjb21tZW50LmpzJztcbmltcG9ydCBmZXRjaENvbW1lbnRzIGZyb20gJy4vZmV0Y2hDb21tZW50cy5qcyc7XG5cbmNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmNvbnN0IGdldFNlcmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8xL2VwaXNvZGVzJyk7XG4gIGNvbnN0IHNlcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHNlcmllcztcbn07XG5cbmNvbnN0IHNob3dTZXJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNlcmllcyA9IGF3YWl0IGdldFNlcmllcygpO1xuICBjb25zdCB0b3RhbG1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICB0b3RhbG1vdmllcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGAoJHtzZXJpZXMubGVuZ3RofSlgKTtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIHNlcmllcy5mb3JFYWNoKChzZXJpZXMpID0+IHtcbiAgICBjb25zdCBlcGlzb2RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVwaXNvZGVzLmNsYXNzTGlzdC5hZGQoJ3NlcmllJyk7XG4gICAgZXBpc29kZXMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIGNsYXNzPVwicGljXCIgc3JjPVwiJHtzZXJpZXMuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIiR7c2VyaWVzLm5hbWV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+PHAgY2xhc3M9XCJzZXJpZS1uYW1lXCI+JHtzZXJpZXMubmFtZX08L3A+IFxuICAgICAgICAgICAgPHA+IDxzcGFuIGlkPVwiJHtzZXJpZXMuaWR9XCIgY2xhc3M9XCJsaWtlc1wiPjA8L3NwYW4+PGkgaWQ9XCIke3Nlcmllcy5pZH1cIiBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY29tbWVudFwiIGlkPVwiJHtzZXJpZXMuaWR9XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZXBpc29kZXMpO1xuICB9KTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzaG93U2VyaWVzKTtcblxuY29uc3QgZmV0Y2hEYXRhID0gKGlkKSA9PiB7XG4gIGdldFNlcmllcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKHNlcmllcykgPT4ge1xuICAgICAgaWYgKHNlcmllcy5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpKSB7XG4gICAgICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJvcmlnaW5hbFwiIHNyYz1cIiR7c2VyaWVzLmltYWdlLm9yaWdpbmFsfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXRpdGxlXCI+JHtzZXJpZXMubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYW5ndWFnZVwiPiR7c2VyaWVzLnN1bW1hcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydDJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXRpdGxlXCI+Q29tbWVudHMgPHNwYW4gY2xhc3M9XCJjb3VudC1jb21tbWVudHNcIj48L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNvbnRyb2wgcC00IGNvbW1lbnQtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgY2xhc3M9XCJmb3JtLWdyb3VwIGZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWdyb3VwXCIgcGxhY2Vob2xkZXI9XCJZb3VyIENvbW1lbnRcIiBzdHlsZT1cImhlaWdodDogMTIwcHg7XCIgaWQ9XCJhZGRlZC1jb21tZW50XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZC1jb21tZW50XCIgaWQ9JHtpZH0+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgZmV0Y2hDb21tZW50cyhpZCk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtY29tbWVudCcpO1xuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwb3N0Q29tbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZmV0Y2hEYXRhLCBnZXRTZXJpZXMgfTsiLCJpbXBvcnQgeyBnZXRTZXJpZXMgfSBmcm9tICcuL2ZldGNoc2VyaWVzLmpzJztcblxuY29uc3QgbmV3TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1REVEczc3huN2pZMG1mSkhnRzlhL2xpa2VzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQgfSksXG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoY2FsbCkgPT4ge1xuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVERURzNzeG43alkwbWZKSGdHOWEvbGlrZXMnO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBjYWxsKGNvbnRlbnQpO1xufTtcblxuY29uc3QgYWRkTGlrZXMgPSAoaWQpID0+IHtcbiAgZ2V0U2VyaWVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGRhdGEuZm9yRWFjaCgoc2VyaWVzKSA9PiB7XG4gICAgICBpZiAoc2VyaWVzLmlkLnRvU3RyaW5nKCkgPT09IGlkLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgbmV3TGlrZShpZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgZ2V0RGF0YSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLml0ZW1faWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQgPSBlLmxpa2VzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGdldERhdGEoKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGxpa2VzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgICAgIGxpa2VzQ291bnQuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5pZC50b1N0cmluZygpID09PSBlbGVtZW50Lml0ZW1faWQudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGUudGV4dENvbnRlbnQgPSBlbGVtZW50Lmxpa2VzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9