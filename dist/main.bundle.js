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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable declaration-block-semicolon-newline-after */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins';\n  color: rgb(180, 228, 91);\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-attachment: fixed;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  position: fixed;\n  padding: 4px 10%;\n  gap: 28vw;\n  align-items: center;\n}\n\n.title {\n  color: rgb(180, 228, 91);\n  font-size: 2.5vw;\n  font-weight: 700;\n}\n\n.nav {\n  list-style-type: none;\n  color: rgb(180, 228, 91);\n  display: flex;\n  gap: 1.2vw;\n  align-items: center;\n}\n\nhr {\n  height: 20px;\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.tab a {\n  text-decoration: none;\n  transition: all .2s ease-in-out;\n}\n\n.tab a:hover {\n  color: rgb(215, 235, 178);\n  transform: scale(1.1);\n}\n\n.tab:hover {\n  border-bottom: 1px solid rgb(180, 228, 91);\n}\n\n.main {\n  padding-top: 10vw;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 6px;\n  justify-content: center;\n  margin: 2px 9%;\n}\n\n.serie {\n  background-color: rgba(15, 13, 10, 0.795);\n  padding: 20px;\n  font-size: 1.3vw;\n  color: rgb(180, 228, 91);\n  transition: all .2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.serie:hover {\n  transform: scale(1.1);\n}\n\n.pic {\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.fa {\n  transition-duration: 0.4s;\n  -webkit-transition-duration: 0.4s;\n}\n\n.fa:hover {\n  transition-duration: 0.1s;\n  color: #ffdfdf;\n  transform: scale(1.2);\n}\n\n.fa::after {\n  content: \"\";\n  border-radius: 4em;\n  left: 0;\n  top:0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: scale(1.2);\n}\n.fa:active::after {\n  box-shadow: 0 0 0 0 rgb(180, 228, 91);\n  position: absolute;\n  border-radius: 4em;\n  left: 0;\n  top:0;\n  opacity: 1;\n  transition: 0s;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 4px;\n  width: 10vw;\n  height: 2vw;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  transition: all .2s ease-in-out;\n}\n\n.comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all .2s ease-in-out;\n}\n\n.add-comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 3px;\n  width: 6vw;\n  height: 2vw;\n  cursor: pointer;\n  transition: all .2s ease-in-out;\n}\n\n.add-comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all .2s ease-in-out;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal-content {\n  margin: auto;\n  width: 80%;\n}\n\n.modalContent {\n  background-color: rgba(32, 18, 18, 0.8);\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.part1 {\n  width: 60%;\n}\n\n.part2 {\n  width: 35%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n}\n\n.original {\n  width: 100%;\n  border: 1px solid rgba(180, 228, 91, 0.726);\n  border-radius: 8px;\n}\n\n.text {\n  padding: 20px 40px 20px 0;\n}\n\n.text-title {\n  color: #fff;\n}\n\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment-title {\n  color: #fff;\n  font-size: 1.3vw;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.comments-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none;\n  gap: 8px;\n  overflow-y: auto;\n  max-height: 200px;\n}\n\n.close {\n  color: rgb(180, 228, 91);\n  float: right;\n  font-size: 44px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover,\n.close:focus {\n  color: rgba(180, 228, 91, 0.493);\n  text-decoration: none;\n}\n\n.comment-list {\n  width: 100%;\n  height: 30%;\n}\n\ninput {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 8px 8px 8px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #ffaa4d;\n  margin-bottom: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  height: 5vw;\n  border: 1px solid #ffaa4d;\n  margin: 24px 0 12px 0;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.likes {\n  color: #fff;\n  font-size: 14px;\n  margin-right: 12px;\n}\n\n.serie-name {\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable declaration-block-semicolon-newline-after */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins';\n  color: rgb(180, 228, 91);\n}\n\nbody {\n  background-image: url('./images/wll.jpg');\n  background-size: contain;\n  background-attachment: fixed;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  position: fixed;\n  padding: 4px 10%;\n  gap: 28vw;\n  align-items: center;\n}\n\n.title {\n  color: rgb(180, 228, 91);\n  font-size: 2.5vw;\n  font-weight: 700;\n}\n\n.nav {\n  list-style-type: none;\n  color: rgb(180, 228, 91);\n  display: flex;\n  gap: 1.2vw;\n  align-items: center;\n}\n\nhr {\n  height: 20px;\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.tab a {\n  text-decoration: none;\n  transition: all .2s ease-in-out;\n}\n\n.tab a:hover {\n  color: rgb(215, 235, 178);\n  transform: scale(1.1);\n}\n\n.tab:hover {\n  border-bottom: 1px solid rgb(180, 228, 91);\n}\n\n.main {\n  padding-top: 10vw;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 6px;\n  justify-content: center;\n  margin: 2px 9%;\n}\n\n.serie {\n  background-color: rgba(15, 13, 10, 0.795);\n  padding: 20px;\n  font-size: 1.3vw;\n  color: rgb(180, 228, 91);\n  transition: all .2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.serie:hover {\n  transform: scale(1.1);\n}\n\n.pic {\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.fa {\n  transition-duration: 0.4s;\n  -webkit-transition-duration: 0.4s;\n}\n\n.fa:hover {\n  transition-duration: 0.1s;\n  color: #ffdfdf;\n  transform: scale(1.2);\n}\n\n.fa::after {\n  content: \"\";\n  border-radius: 4em;\n  left: 0;\n  top:0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: scale(1.2);\n}\n.fa:active::after {\n  box-shadow: 0 0 0 0 rgb(180, 228, 91);\n  position: absolute;\n  border-radius: 4em;\n  left: 0;\n  top:0;\n  opacity: 1;\n  transition: 0s;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 4px;\n  width: 10vw;\n  height: 2vw;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  transition: all .2s ease-in-out;\n}\n\n.comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all .2s ease-in-out;\n}\n\n.add-comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 3px;\n  width: 6vw;\n  height: 2vw;\n  cursor: pointer;\n  transition: all .2s ease-in-out;\n}\n\n.add-comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all .2s ease-in-out;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal-content {\n  margin: auto;\n  width: 80%;\n}\n\n.modalContent {\n  background-color: rgba(32, 18, 18, 0.8);\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.part1 {\n  width: 60%;\n}\n\n.part2 {\n  width: 35%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n}\n\n.original {\n  width: 100%;\n  border: 1px solid rgba(180, 228, 91, 0.726);\n  border-radius: 8px;\n}\n\n.text {\n  padding: 20px 40px 20px 0;\n}\n\n.text-title {\n  color: #fff;\n}\n\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment-title {\n  color: #fff;\n  font-size: 1.3vw;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.comments-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none;\n  gap: 8px;\n  overflow-y: auto;\n  max-height: 200px;\n}\n\n.close {\n  color: rgb(180, 228, 91);\n  float: right;\n  font-size: 44px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover,\n.close:focus {\n  color: rgba(180, 228, 91, 0.493);\n  text-decoration: none;\n}\n\n.comment-list {\n  width: 100%;\n  height: 30%;\n}\n\ninput {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 8px 8px 8px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #ffaa4d;\n  margin-bottom: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  height: 5vw;\n  border: 1px solid #ffaa4d;\n  margin: 24px 0 12px 0;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.likes {\n  color: #fff;\n  font-size: 14px;\n  margin-right: 12px;\n}\n\n.serie-name {\n  font-weight: bolder;\n}\n"],"sourceRoot":""}]);
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
    (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(movieID.id);
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
/* harmony export */   "fetchComments": () => (/* binding */ fetchComments),
/* harmony export */   "totalComments": () => (/* binding */ totalComments)
/* harmony export */ });
const addCommentToDom = (comments) => {
  const commentList = document.querySelector('.comments-container');
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
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

  addCommentToDom(getComment);
};

const totalComments = async (arr) => arr.length;



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
                      <p class="comment-title">Comments (${data.length})</p>
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
        (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__.fetchComments)(id);
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

const getData = async (collaback) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TDTG3sxn7jY0mfJHgG9a/likes';
  const data = await fetch(url);
  const content = await data.json();
  collaback(content);
};

const addLikes = (id) => {
  (0,_fetchseries_js__WEBPACK_IMPORTED_MODULE_0__.getSeries)().then((data) => {
    data.forEach((series) => {
      if (series.id.toString() === id.toString()) {
        newLike(id).then((data) => {
          if (data.status === 201) {
            getData((data) => {
              data.forEach((val) => {
                if (val.item_id.toString() === id.toString()) {
                  const elem = document.getElementById(id.toString());
                  elem.parentElement.lastElementChild.firstElementChild.textContent = val.likes;
                }
              });
            });
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLHVGQUF1RixhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFh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QUFDQTtBQUNBLDJEQUEyRCxZQUFZO0FBQ3ZFLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0hBQWdIO0FBQ2hILHFFQUFxRSxHQUFHO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBYTtBQUNyQjtBQUNBLCtDQUErQyxzREFBVztBQUMxRDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEU2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixhQUFhO0FBQ3hDLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVELGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FkZGNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2ZldGNoQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2ZldGNoc2VyaWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvd2xsLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIGZvbnQtZmFtaWx5LW5vLW1pc3NpbmctZ2VuZXJpYy1mYW1pbHkta2V5d29yZCAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJsb2NrLXNlbWljb2xvbi1uZXdsaW5lLWFmdGVyICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNnZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTMsIDEwLCAwLjkxNSk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBwYWRkaW5nOiA0cHggMTAlO1xcbiAgZ2FwOiAyOHZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGZvbnQtc2l6ZTogMi41dnc7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuMnZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMjI4LCA5MSk7XFxufVxcblxcbi50YWIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFiIGE6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyMTUsIDIzNSwgMTc4KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRhYjpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE4MCwgMjI4LCA5MSk7XFxufVxcblxcbi5tYWluIHtcXG4gIHBhZGRpbmctdG9wOiAxMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIGdhcDogNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDJweCA5JTtcXG59XFxuXFxuLnNlcmllIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEzLCAxMCwgMC43OTUpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4zdnc7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5zZXJpZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5waWMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMjI4LCA5MSk7XFxufVxcblxcbi5mYSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4uZmE6aG92ZXIge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gIGNvbG9yOiAjZmZkZmRmO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uZmE6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNGVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDowO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuLmZhOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6MDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiAwcztcXG59XFxuXFxuLm5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogMnZ3O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNvbW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY29sb3I6IHJnYigzMywgMzQsIDMwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hZGQtY29tbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgd2lkdGg6IDZ2dztcXG4gIGhlaWdodDogMnZ3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmFkZC1jb21tZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGNvbG9yOiByZ2IoMzMsIDM0LCAzMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1vZGFsQ29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAxOCwgMTgsIDAuOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxuLnBhcnQxIHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5wYXJ0MiB7XFxuICB3aWR0aDogMzUlO1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcmlnaW5hbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTgwLCAyMjgsIDkxLCAwLjcyNik7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50ZXh0IHtcXG4gIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDA7XFxufVxcblxcbi50ZXh0LXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29tbWVudC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50LXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjN2dztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogOHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiA0NHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IHJnYmEoMTgwLCAyMjgsIDkxLCAwLjQ5Myk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb21tZW50LWxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwJTtcXG59XFxuXFxuaW5wdXQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogOHB4IDhweCA4cHggNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZhYTRkO1xcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXZ3O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWE0ZDtcXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxpa2VzIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbn1cXG5cXG4uc2VyaWUtbmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG9FQUFvRTtBQUNwRSxnRUFBZ0U7QUFDaEU7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5REFBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNY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Z0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHN0eWxlbGludC1kaXNhYmxlIGZvbnQtZmFtaWx5LW5vLW1pc3NpbmctZ2VuZXJpYy1mYW1pbHkta2V5d29yZCAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJsb2NrLXNlbWljb2xvbi1uZXdsaW5lLWFmdGVyICovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3dsbC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDZ2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEzLCAxMCwgMC45MTUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZzogNHB4IDEwJTtcXG4gIGdhcDogMjh2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm5hdiB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjJ2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG4udGFiIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhYiBhOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMjE1LCAyMzUsIDE3OCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50YWI6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBwYWRkaW5nLXRvcDogMTB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICBnYXA6IDZweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAycHggOSU7XFxufVxcblxcbi5zZXJpZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxMywgMTAsIDAuNzk1KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDEuM3Z3O1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uc2VyaWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucGljIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDIyOCwgOTEpO1xcbn1cXG5cXG4uZmEge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuLmZhOmhvdmVyIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICBjb2xvcjogI2ZmZGZkZjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmZhOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6MDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi5mYTphY3RpdmU6OmFmdGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA0ZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOjA7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogMHM7XFxufVxcblxcbi5uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDEwdnc7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb21tZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGNvbG9yOiByZ2IoMzMsIDM0LCAzMCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiA2dnc7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hZGQtY29tbWVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBjb2xvcjogcmdiKDMzLCAzNCwgMzApO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5tb2RhbENvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMTgsIDE4LCAwLjgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5wYXJ0MSB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ucGFydDIge1xcbiAgd2lkdGg6IDM1JTtcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3JpZ2luYWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4MCwgMjI4LCA5MSwgMC43MjYpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4udGV4dCB7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHggMjBweCAwO1xcbn1cXG5cXG4udGV4dC10aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbW1lbnQtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudC10aXRsZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS4zdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5jb21tZW50cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDhweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogNDRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiByZ2JhKDE4MCwgMjI4LCA5MSwgMC40OTMpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29tbWVudC1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMCU7XFxufVxcblxcbmlucHV0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmYWE0ZDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDV2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmFhNGQ7XFxuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5saWtlcyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG59XFxuXFxuLnNlcmllLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2ZldGNoc2VyaWVzLmpzJztcbmltcG9ydCBhZGRMaWtlcyBmcm9tICcuL21vZHVsZXMvbGlrZXMuanMnO1xuXG5jb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG5cbmFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21tZW50Jykge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGZldGNoRGF0YShlLnRhcmdldC5pZCk7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nsb3NlJykge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ZhIGZhLWhlYXJ0Jykge1xuICAgIGFkZExpa2VzKGUudGFyZ2V0LmlkKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBmZXRjaENvbW1lbnRzIH0gZnJvbSAnLi9mZXRjaENvbW1lbnRzLmpzJztcblxuY29uc3QgY29tbWVudFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9URFRHM3N4bjdqWTBtZkpIZ0c5YS9jb21tZW50cyc7XG5cbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBtb3ZpZUlEID0gZS50YXJnZXQ7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWUudHJpbSgpO1xuICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGVkLWNvbW1lbnQnKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtZm9ybScpO1xuXG4gIGlmIChuYW1lICYmIGFkZENvbW1lbnQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChjb21tZW50VVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGAke21vdmllSUQuaWR9YCxcbiAgICAgICAgdXNlcm5hbWU6IGAke25hbWV9YCxcbiAgICAgICAgY29tbWVudDogYCR7YWRkQ29tbWVudH1gLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29tbWVudEZvcm0ucmVzZXQoKTtcbiAgICBhd2FpdCByZXN1bHQudGV4dCgpO1xuICAgIGZldGNoQ29tbWVudHMobW92aWVJRC5pZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50OyIsImNvbnN0IGFkZENvbW1lbnRUb0RvbSA9IChjb21tZW50cykgPT4ge1xuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1jb250YWluZXInKTtcbiAgY29tbWVudExpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX06ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvbGk+YDtcbiAgfSk7XG59O1xuXG5jb25zdCBjb21tZW50VVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1REVEczc3huN2pZMG1mSkhnRzlhL2NvbW1lbnRzJztcblxuY29uc3QgZmV0Y2hDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoYCR7Y29tbWVudFVSTH0/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21tZW50cyBhZGRlZCBmb3IgdGhpcyBtb3ZpZScpO1xuICB9XG4gIGNvbnN0IGdldENvbW1lbnQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgYWRkQ29tbWVudFRvRG9tKGdldENvbW1lbnQpO1xufTtcblxuY29uc3QgdG90YWxDb21tZW50cyA9IGFzeW5jIChhcnIpID0+IGFyci5sZW5ndGg7XG5cbmV4cG9ydCB7IGZldGNoQ29tbWVudHMsIHRvdGFsQ29tbWVudHMgfTsiLCJpbXBvcnQgcG9zdENvbW1lbnQgZnJvbSAnLi9hZGRjb21tZW50LmpzJztcbmltcG9ydCB7IGZldGNoQ29tbWVudHMgfSBmcm9tICcuL2ZldGNoQ29tbWVudHMuanMnO1xuXG5jb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5jb25zdCBnZXRTZXJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvMS9lcGlzb2RlcycpO1xuICBjb25zdCBzZXJpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBzZXJpZXM7XG59O1xuXG5jb25zdCBzaG93U2VyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzZXJpZXMgPSBhd2FpdCBnZXRTZXJpZXMoKTtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIHNlcmllcy5mb3JFYWNoKChzZXJpZXMpID0+IHtcbiAgICBjb25zdCBlcGlzb2RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVwaXNvZGVzLmNsYXNzTGlzdC5hZGQoJ3NlcmllJyk7XG4gICAgZXBpc29kZXMuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIGNsYXNzPVwicGljXCIgc3JjPVwiJHtzZXJpZXMuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIiR7c2VyaWVzLm5hbWV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+PHAgY2xhc3M9XCJzZXJpZS1uYW1lXCI+JHtzZXJpZXMubmFtZX08L3A+IFxuICAgICAgICAgICAgPHA+IDxzcGFuIGlkPVwiJHtzZXJpZXMuaWR9XCIgY2xhc3M9XCJsaWtlc1wiPjA8L3NwYW4+PGkgaWQ9XCIke3Nlcmllcy5pZH1cIiBjbGFzcz1cImZhIGZhLWhlYXJ0XCI+PC9pPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiY29tbWVudFwiIGlkPVwiJHtzZXJpZXMuaWR9XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoZXBpc29kZXMpO1xuICB9KTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzaG93U2VyaWVzKTtcblxuY29uc3QgZmV0Y2hEYXRhID0gKGlkKSA9PiB7XG4gIGdldFNlcmllcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKHNlcmllcykgPT4ge1xuICAgICAgaWYgKHNlcmllcy5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpKSB7XG4gICAgICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJvcmlnaW5hbFwiIHNyYz1cIiR7c2VyaWVzLmltYWdlLm9yaWdpbmFsfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXRpdGxlXCI+JHtzZXJpZXMubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsYW5ndWFnZVwiPiR7c2VyaWVzLnN1bW1hcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydDJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXRpdGxlXCI+Q29tbWVudHMgKCR7ZGF0YS5sZW5ndGh9KTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tZ3JvdXAgZm9ybS1jb250cm9sIHAtNCBjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiWW91ciBDb21tZW50XCIgc3R5bGU9XCJoZWlnaHQ6IDEyMHB4O1wiIGlkPVwiYWRkZWQtY29tbWVudFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtY29tbWVudFwiIGlkPSR7aWR9PkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIGZldGNoQ29tbWVudHMoaWQpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWNvbW1lbnQnKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9zdENvbW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZldGNoRGF0YSwgZ2V0U2VyaWVzIH07IiwiaW1wb3J0IHsgZ2V0U2VyaWVzIH0gZnJvbSAnLi9mZXRjaHNlcmllcy5qcyc7XG5cbmNvbnN0IG5ld0xpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9URFRHM3N4bjdqWTBtZkpIZ0c5YS9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGNvbGxhYmFjaykgPT4ge1xuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVERURzNzeG43alkwbWZKSGdHOWEvbGlrZXMnO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBjb2xsYWJhY2soY29udGVudCk7XG59O1xuXG5jb25zdCBhZGRMaWtlcyA9IChpZCkgPT4ge1xuICBnZXRTZXJpZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChzZXJpZXMpID0+IHtcbiAgICAgIGlmIChzZXJpZXMuaWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKSkge1xuICAgICAgICBuZXdMaWtlKGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgIGdldERhdGEoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsLml0ZW1faWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSB2YWwubGlrZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGdldERhdGEoKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGxpa2VzQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgICAgIGxpa2VzQ291bnQuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5pZC50b1N0cmluZygpID09PSBlbGVtZW50Lml0ZW1faWQudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGUudGV4dENvbnRlbnQgPSBlbGVtZW50Lmxpa2VzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9