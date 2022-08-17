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
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable declaration-block-semicolon-newline-after */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins';\n  color: rgb(180, 228, 91);\n  scroll-behavior: smooth;\n  transition: all 0.5s ease-in-out;\n}\n\nbody {\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-attachment: fixed;\n  overflow-x: hidden;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  height: 4vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  padding: 1vh 10%;\n  gap: 41vw;\n  align-items: center;\n}\n\n.title {\n  color: rgb(180, 228, 91);\n  font-size: 2.5vw;\n  font-weight: 700;\n}\n\n.nav {\n  list-style-type: none;\n  color: rgb(180, 228, 91);\n  display: flex;\n  gap: 1.2vw;\n  align-items: center;\n}\n\nhr {\n  height: 20px;\n  border: 1px solid rgb(180, 228, 91);\n}\n\nfooter a {\n  font-weight: bold;\n}\n\n.tab a {\n  text-decoration: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.tab a:hover {\n  color: rgb(215, 235, 178);\n  transform: scale(1.1);\n}\n\n.tab:hover {\n  border-bottom: 1px solid rgb(180, 228, 91);\n}\n\n.main {\n  padding: 3vw;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 1vw;\n  justify-content: center;\n  margin: 1vh 9%;\n  min-height: 40vw;\n}\n\n.serie {\n  background-color: rgba(15, 13, 10, 0.795);\n  padding: 1vw;\n  font-size: 1.3vw;\n  color: rgb(180, 228, 91);\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  gap: 1vw;\n  width: 18vw;\n}\n\n.serie:hover {\n  transform: scale(1.1);\n}\n\n.pic {\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.fa {\n  transition-duration: 0.4s;\n  -webkit-transition-duration: 0.4s;\n}\n\n.fa:hover {\n  transition-duration: 0.1s;\n  color: #ffdfdf;\n  transform: scale(1.2);\n}\n\n.fa::after {\n  content: \"\";\n  border-radius: 4em;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: scale(1.2);\n}\n\n.fa:active::after {\n  box-shadow: 0 0 0 0 rgb(180, 228, 91);\n  position: absolute;\n  border-radius: 4em;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: 0s;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 0.2vw;\n  width: 10vw;\n  height: 2vw;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  font-size: 1vw;\n}\n\n.comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all 0.2s ease-in-out;\n}\n\n.add-comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 3px;\n  width: 6vw;\n  height: 2vw;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  font-size: 1vw;\n}\n\n.add-comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all 0.2s ease-in-out;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal-content {\n  margin: auto;\n  width: 80%;\n}\n\n.modalContent {\n  background-color: rgba(32, 18, 18, 0.8);\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.part1 {\n  width: 60%;\n}\n\n.part2 {\n  width: 35%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n}\n\n.original {\n  width: 100%;\n  border: 1px solid rgba(180, 228, 91, 0.726);\n  border-radius: 8px;\n}\n\n.text {\n  padding: 20px 40px 20px 0;\n}\n\n.text-title {\n  color: #fff;\n}\n\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment-title {\n  color: #fff;\n  font-size: 1.3vw;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.comments-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none;\n  gap: 8px;\n  overflow-y: auto;\n  scrollbar-width: none;\n  max-height: 200px;\n  padding: 12px;\n}\n\n.all-commented {\n  margin: 6px;\n  color: rgb(180, 228, 91);\n  font-size: small;\n}\n\n.date {\n  font-style: italic;\n  font-size: smaller;\n}\n\n.commented {\n  color: #fff;\n  font-size: small;\n}\n\n.close {\n  color: rgb(180, 228, 91);\n  float: right;\n  font-size: 44px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover,\n.close:focus {\n  color: rgba(180, 228, 91, 0.493);\n  text-decoration: none;\n}\n\n.comment-list {\n  width: 100%;\n  height: 30%;\n}\n\ninput {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 8px 8px 8px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #ffaa4d;\n  margin-bottom: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  height: 5vw;\n  border: 1px solid #ffaa4d;\n  margin: 24px 0 12px 0;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.likes {\n  color: #fff;\n  font-size: 14px;\n  margin-right: 12px;\n}\n\n.serie-name {\n  font-weight: bolder;\n}\n\nfooter {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  position: relative;\n  padding: 4px 20%;\n  gap: 28vw;\n  align-items: center;\n  text-align: center;\n}\n\n@media only screen and (max-width: 768px) {\n  header {\n    width: 90vw;\n    display: flex;\n    height: 6vw;\n    background-color: rgba(15, 13, 10, 0.915);\n    padding: 1vh 8%;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .title {\n    color: rgb(180, 228, 91);\n    font-size: 4vw;\n    font-weight: 700;\n  }\n\n  .nav {\n    display: none;\n  }\n\n  .main {\n    padding: 3vw;\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 1vw;\n    justify-content: center;\n    margin: 1vh 10%;\n  }\n\n  .serie {\n    padding: 2vw;\n    font-size: 3vw;\n    gap: 1vw;\n    width: 40vw;\n  }\n\n  .serie:hover {\n    transform: scale(1.1);\n  }\n\n  .comment {\n    padding: 0.6vw;\n    width: 20vw;\n    height: 4vw;\n    font-size: 2vw;\n  }\n\n  .add-comment {\n    padding: 0.6vw;\n    width: 20vw;\n    height: 4vw;\n    font-size: 2vw;\n  }\n\n  .modal {\n    padding-top: 20vw;\n    overflow: auto;\n  }\n\n  .modalContent {\n    display: flex;\n    flex-direction: column;\n    padding: 3vw;\n    margin-top: -10vw;\n  }\n\n  .part1 {\n    width: 100%;\n    margin-bottom: 4vw;\n  }\n\n  .part2 {\n    width: 95%;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .text {\n    padding: 10px 0 0 0;\n    font-size: 2.5vw;\n  }\n\n  .text-title {\n    color: #fff;\n    font-size: 4vw;\n  }\n\n  .comment-top {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .comment-title {\n    color: #fff;\n    font-size: 3vw;\n    font-weight: bold;\n    margin-top: 0;\n  }\n\n  .comments-container {\n    display: none;\n  }\n\n  .comment-list {\n    width: 100%;\n    height: 30%;\n  }\n\n  footer {\n    width: 70%;\n    height: 9vw;\n    gap: 28vw;\n    text-align: center;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* stylelint-disable font-family-no-missing-generic-family-keyword */\n/* stylelint-disable declaration-block-semicolon-newline-after */\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins';\n  color: rgb(180, 228, 91);\n  scroll-behavior: smooth;\n  transition: all 0.5s ease-in-out;\n}\n\nbody {\n  width: 100vw;\n  background-image: url('./images/wll.jpg');\n  background-size: contain;\n  background-attachment: fixed;\n  overflow-x: hidden;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  height: 4vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  padding: 1vh 10%;\n  gap: 41vw;\n  align-items: center;\n}\n\n.title {\n  color: rgb(180, 228, 91);\n  font-size: 2.5vw;\n  font-weight: 700;\n}\n\n.nav {\n  list-style-type: none;\n  color: rgb(180, 228, 91);\n  display: flex;\n  gap: 1.2vw;\n  align-items: center;\n}\n\nhr {\n  height: 20px;\n  border: 1px solid rgb(180, 228, 91);\n}\n\nfooter a {\n  font-weight: bold;\n}\n\n.tab a {\n  text-decoration: none;\n  transition: all 0.2s ease-in-out;\n}\n\n.tab a:hover {\n  color: rgb(215, 235, 178);\n  transform: scale(1.1);\n}\n\n.tab:hover {\n  border-bottom: 1px solid rgb(180, 228, 91);\n}\n\n.main {\n  padding: 3vw;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 1vw;\n  justify-content: center;\n  margin: 1vh 9%;\n  min-height: 40vw;\n}\n\n.serie {\n  background-color: rgba(15, 13, 10, 0.795);\n  padding: 1vw;\n  font-size: 1.3vw;\n  color: rgb(180, 228, 91);\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  gap: 1vw;\n  width: 18vw;\n}\n\n.serie:hover {\n  transform: scale(1.1);\n}\n\n.pic {\n  border: 1px solid rgb(180, 228, 91);\n}\n\n.fa {\n  transition-duration: 0.4s;\n  -webkit-transition-duration: 0.4s;\n}\n\n.fa:hover {\n  transition-duration: 0.1s;\n  color: #ffdfdf;\n  transform: scale(1.2);\n}\n\n.fa::after {\n  content: \"\";\n  border-radius: 4em;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  transform: scale(1.2);\n}\n\n.fa:active::after {\n  box-shadow: 0 0 0 0 rgb(180, 228, 91);\n  position: absolute;\n  border-radius: 4em;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: 0s;\n}\n\n.name {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 0.2vw;\n  width: 10vw;\n  height: 2vw;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  font-size: 1vw;\n}\n\n.comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all 0.2s ease-in-out;\n}\n\n.add-comment {\n  background-color: rgb(180, 228, 91);\n  align-self: center;\n  color: black;\n  font-weight: bold;\n  border: none;\n  padding: 3px;\n  width: 6vw;\n  height: 2vw;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  font-size: 1vw;\n}\n\n.add-comment:hover {\n  background-color: rgb(255, 255, 255);\n  color: rgb(33, 34, 30);\n  transition: all 0.2s ease-in-out;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.modal-content {\n  margin: auto;\n  width: 80%;\n}\n\n.modalContent {\n  background-color: rgba(32, 18, 18, 0.8);\n  display: flex;\n  height: auto;\n  justify-content: space-between;\n  padding: 24px;\n}\n\n.part1 {\n  width: 60%;\n}\n\n.part2 {\n  width: 35%;\n  padding: 0 24px;\n  display: flex;\n  flex-direction: column;\n}\n\n.original {\n  width: 100%;\n  border: 1px solid rgba(180, 228, 91, 0.726);\n  border-radius: 8px;\n}\n\n.text {\n  padding: 20px 40px 20px 0;\n}\n\n.text-title {\n  color: #fff;\n}\n\n.comment-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.comment-title {\n  color: #fff;\n  font-size: 1.3vw;\n  font-weight: bold;\n  margin-top: 0;\n}\n\n.comments-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none;\n  gap: 8px;\n  overflow-y: auto;\n  scrollbar-width: none;\n  max-height: 200px;\n  padding: 12px;\n}\n\n.all-commented {\n  margin: 6px;\n  color: rgb(180, 228, 91);\n  font-size: small;\n}\n\n.date {\n  font-style: italic;\n  font-size: smaller;\n}\n\n.commented {\n  color: #fff;\n  font-size: small;\n}\n\n.close {\n  color: rgb(180, 228, 91);\n  float: right;\n  font-size: 44px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover,\n.close:focus {\n  color: rgba(180, 228, 91, 0.493);\n  text-decoration: none;\n}\n\n.comment-list {\n  width: 100%;\n  height: 30%;\n}\n\ninput {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 8px 8px 8px 5px;\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #ffaa4d;\n  margin-bottom: 18px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea {\n  color: #fff;\n  background: none;\n  font-size: 16px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  height: 5vw;\n  border: 1px solid #ffaa4d;\n  margin: 24px 0 12px 0;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n.likes {\n  color: #fff;\n  font-size: 14px;\n  margin-right: 12px;\n}\n\n.serie-name {\n  font-weight: bolder;\n}\n\nfooter {\n  width: 100%;\n  display: flex;\n  height: 6vw;\n  background-color: rgba(15, 13, 10, 0.915);\n  position: relative;\n  padding: 4px 20%;\n  gap: 28vw;\n  align-items: center;\n  text-align: center;\n}\n\n@media only screen and (max-width: 768px) {\n  header {\n    width: 90vw;\n    display: flex;\n    height: 6vw;\n    background-color: rgba(15, 13, 10, 0.915);\n    padding: 1vh 8%;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .title {\n    color: rgb(180, 228, 91);\n    font-size: 4vw;\n    font-weight: 700;\n  }\n\n  .nav {\n    display: none;\n  }\n\n  .main {\n    padding: 3vw;\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 1vw;\n    justify-content: center;\n    margin: 1vh 10%;\n  }\n\n  .serie {\n    padding: 2vw;\n    font-size: 3vw;\n    gap: 1vw;\n    width: 40vw;\n  }\n\n  .serie:hover {\n    transform: scale(1.1);\n  }\n\n  .comment {\n    padding: 0.6vw;\n    width: 20vw;\n    height: 4vw;\n    font-size: 2vw;\n  }\n\n  .add-comment {\n    padding: 0.6vw;\n    width: 20vw;\n    height: 4vw;\n    font-size: 2vw;\n  }\n\n  .modal {\n    padding-top: 20vw;\n    overflow: auto;\n  }\n\n  .modalContent {\n    display: flex;\n    flex-direction: column;\n    padding: 3vw;\n    margin-top: -10vw;\n  }\n\n  .part1 {\n    width: 100%;\n    margin-bottom: 4vw;\n  }\n\n  .part2 {\n    width: 95%;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .text {\n    padding: 10px 0 0 0;\n    font-size: 2.5vw;\n  }\n\n  .text-title {\n    color: #fff;\n    font-size: 4vw;\n  }\n\n  .comment-top {\n    display: none;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .comment-title {\n    color: #fff;\n    font-size: 3vw;\n    font-weight: bold;\n    margin-top: 0;\n  }\n\n  .comments-container {\n    display: none;\n  }\n\n  .comment-list {\n    width: 100%;\n    height: 30%;\n  }\n\n  footer {\n    width: 70%;\n    height: 9vw;\n    gap: 28vw;\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxV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QUEyQixhQUFhO0FBQ3hDLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvYWRkY29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZmV0Y2hDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWdyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZmV0Y2hzZXJpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy93bGwuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgZm9udC1mYW1pbHktbm8tbWlzc2luZy1nZW5lcmljLWZhbWlseS1rZXl3b3JkICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmxvY2stc2VtaWNvbG9uLW5ld2xpbmUtYWZ0ZXIgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTMsIDEwLCAwLjkxNSk7XFxuICBwYWRkaW5nOiAxdmggMTAlO1xcbiAgZ2FwOiA0MXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGZvbnQtc2l6ZTogMi41dnc7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuMnZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMjI4LCA5MSk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFiIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YWIgYTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIxNSwgMjM1LCAxNzgpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZzogM3Z3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIGdhcDogMXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDF2aCA5JTtcXG4gIG1pbi1oZWlnaHQ6IDQwdnc7XFxufVxcblxcbi5zZXJpZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxMywgMTAsIDAuNzk1KTtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGZvbnQtc2l6ZTogMS4zdnc7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxdnc7XFxuICB3aWR0aDogMTh2dztcXG59XFxuXFxuLnNlcmllOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnBpYyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuLmZhIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5mYTpob3ZlciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgY29sb3I6ICNmZmRmZGY7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5mYTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItcmFkaXVzOiA0ZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmZhOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogMHM7XFxufVxcblxcbi5uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC4ydnc7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogMnZ3O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDF2dztcXG59XFxuXFxuLmNvbW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY29sb3I6IHJnYigzMywgMzQsIDMwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiA2dnc7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAxdnc7XFxufVxcblxcbi5hZGQtY29tbWVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBjb2xvcjogcmdiKDMzLCAzNCwgMzApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubW9kYWxDb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDE4LCAxOCwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ucGFydDEge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLnBhcnQyIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm9yaWdpbmFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODAsIDIyOCwgOTEsIDAuNzI2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRleHQge1xcbiAgcGFkZGluZzogMjBweCA0MHB4IDIwcHggMDtcXG59XFxuXFxuLnRleHQtdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb21tZW50LXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnQtdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uY29tbWVudHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiA4cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4uYWxsLWNvbW1lbnRlZCB7XFxuICBtYXJnaW46IDZweDtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5kYXRlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuLmNvbW1lbnRlZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDQ0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogcmdiYSgxODAsIDIyOCwgOTEsIDAuNDkzKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmFhNGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1dnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZhYTRkO1xcbiAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxufVxcblxcbi5zZXJpZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDZ2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEzLCAxMCwgMC45MTUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNHB4IDIwJTtcXG4gIGdhcDogMjh2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDZ2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTMsIDEwLCAwLjkxNSk7XFxuICAgIHBhZGRpbmc6IDF2aCA4JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBwYWRkaW5nOiAzdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBnYXA6IDF2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMXZoIDEwJTtcXG4gIH1cXG5cXG4gIC5zZXJpZSB7XFxuICAgIHBhZGRpbmc6IDJ2dztcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIGdhcDogMXZ3O1xcbiAgICB3aWR0aDogNDB2dztcXG4gIH1cXG5cXG4gIC5zZXJpZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG5cXG4gIC5jb21tZW50IHtcXG4gICAgcGFkZGluZzogMC42dnc7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDR2dztcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICB9XFxuXFxuICAuYWRkLWNvbW1lbnQge1xcbiAgICBwYWRkaW5nOiAwLjZ2dztcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogNHZ3O1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHZ3O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG5cXG4gIC5tb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzdnc7XFxuICAgIG1hcmdpbi10b3A6IC0xMHZ3O1xcbiAgfVxcblxcbiAgLnBhcnQxIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDR2dztcXG4gIH1cXG5cXG4gIC5wYXJ0MiB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAudGV4dCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XFxuICAgIGZvbnQtc2l6ZTogMi41dnc7XFxuICB9XFxuXFxuICAudGV4dC10aXRsZSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gIH1cXG5cXG4gIC5jb21tZW50LXRvcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb21tZW50LXRpdGxlIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG5cXG4gIC5jb21tZW50cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogOXZ3O1xcbiAgICBnYXA6IDI4dnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvRUFBb0U7QUFDcEUsZ0VBQWdFO0FBQ2hFO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseURBQXlDO0VBQ3pDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztB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Q1gsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBmb250LWZhbWlseS1uby1taXNzaW5nLWdlbmVyaWMtZmFtaWx5LWtleXdvcmQgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1ibG9jay1zZW1pY29sb24tbmV3bGluZS1hZnRlciAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvd2xsLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTMsIDEwLCAwLjkxNSk7XFxuICBwYWRkaW5nOiAxdmggMTAlO1xcbiAgZ2FwOiA0MXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGZvbnQtc2l6ZTogMi41dnc7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuMnZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMjI4LCA5MSk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFiIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YWIgYTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDIxNSwgMjM1LCAxNzgpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udGFiOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgcGFkZGluZzogM3Z3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIGdhcDogMXZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDF2aCA5JTtcXG4gIG1pbi1oZWlnaHQ6IDQwdnc7XFxufVxcblxcbi5zZXJpZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxMywgMTAsIDAuNzk1KTtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGZvbnQtc2l6ZTogMS4zdnc7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxdnc7XFxuICB3aWR0aDogMTh2dztcXG59XFxuXFxuLnNlcmllOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnBpYyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAyMjgsIDkxKTtcXG59XFxuXFxuLmZhIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5mYTpob3ZlciB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgY29sb3I6ICNmZmRmZGY7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5mYTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXItcmFkaXVzOiA0ZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLmZhOmFjdGl2ZTo6YWZ0ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogMHM7XFxufVxcblxcbi5uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC4ydnc7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogMnZ3O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDF2dztcXG59XFxuXFxuLmNvbW1lbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgY29sb3I6IHJnYigzMywgMzQsIDMwKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiA2dnc7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAxdnc7XFxufVxcblxcbi5hZGQtY29tbWVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBjb2xvcjogcmdiKDMzLCAzNCwgMzApO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubW9kYWxDb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDE4LCAxOCwgMC44KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyNHB4O1xcbn1cXG5cXG4ucGFydDEge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLnBhcnQyIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm9yaWdpbmFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODAsIDIyOCwgOTEsIDAuNzI2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnRleHQge1xcbiAgcGFkZGluZzogMjBweCA0MHB4IDIwcHggMDtcXG59XFxuXFxuLnRleHQtdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb21tZW50LXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbW1lbnQtdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uY29tbWVudHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiA4cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4uYWxsLWNvbW1lbnRlZCB7XFxuICBtYXJnaW46IDZweDtcXG4gIGNvbG9yOiByZ2IoMTgwLCAyMjgsIDkxKTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5kYXRlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuLmNvbW1lbnRlZCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi5jbG9zZSB7XFxuICBjb2xvcjogcmdiKDE4MCwgMjI4LCA5MSk7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDQ0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogcmdiYSgxODAsIDIyOCwgOTEsIDAuNDkzKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnQtbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmFhNGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1dnc7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZhYTRkO1xcbiAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGlrZXMge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxufVxcblxcbi5zZXJpZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDZ2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDEzLCAxMCwgMC45MTUpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNHB4IDIwJTtcXG4gIGdhcDogMjh2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDZ2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTMsIDEwLCAwLjkxNSk7XFxuICAgIHBhZGRpbmc6IDF2aCA4JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgY29sb3I6IHJnYigxODAsIDIyOCwgOTEpO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBwYWRkaW5nOiAzdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgICBnYXA6IDF2dztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMXZoIDEwJTtcXG4gIH1cXG5cXG4gIC5zZXJpZSB7XFxuICAgIHBhZGRpbmc6IDJ2dztcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIGdhcDogMXZ3O1xcbiAgICB3aWR0aDogNDB2dztcXG4gIH1cXG5cXG4gIC5zZXJpZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG5cXG4gIC5jb21tZW50IHtcXG4gICAgcGFkZGluZzogMC42dnc7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDR2dztcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICB9XFxuXFxuICAuYWRkLWNvbW1lbnQge1xcbiAgICBwYWRkaW5nOiAwLjZ2dztcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogNHZ3O1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHZ3O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gIH1cXG5cXG4gIC5tb2RhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzdnc7XFxuICAgIG1hcmdpbi10b3A6IC0xMHZ3O1xcbiAgfVxcblxcbiAgLnBhcnQxIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDR2dztcXG4gIH1cXG5cXG4gIC5wYXJ0MiB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAudGV4dCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XFxuICAgIGZvbnQtc2l6ZTogMi41dnc7XFxuICB9XFxuXFxuICAudGV4dC10aXRsZSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gIH1cXG5cXG4gIC5jb21tZW50LXRvcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jb21tZW50LXRpdGxlIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG5cXG4gIC5jb21tZW50cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmNvbW1lbnQtbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogOXZ3O1xcbiAgICBnYXA6IDI4dnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2ZldGNoc2VyaWVzLmpzJztcbmltcG9ydCBhZGRMaWtlcyBmcm9tICcuL21vZHVsZXMvbGlrZXMuanMnO1xuXG5jb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG5cbmFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21tZW50Jykge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGZldGNoRGF0YShlLnRhcmdldC5pZCk7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Nsb3NlJykge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ZhIGZhLWhlYXJ0Jykge1xuICAgIGFkZExpa2VzKGUudGFyZ2V0LmlkKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgZmV0Y2hDb21tZW50cyBmcm9tICcuL2ZldGNoQ29tbWVudHMuanMnO1xuXG5jb25zdCBjb21tZW50VVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1REVEczc3huN2pZMG1mSkhnRzlhL2NvbW1lbnRzJztcblxuY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG1vdmllSUQgPSBlLnRhcmdldDtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGFkZENvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkZWQtY29tbWVudCcpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1mb3JtJyk7XG5cbiAgaWYgKG5hbWUgJiYgYWRkQ29tbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGNvbW1lbnRVUkwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogYCR7bW92aWVJRC5pZH1gLFxuICAgICAgICB1c2VybmFtZTogYCR7bmFtZX1gLFxuICAgICAgICBjb21tZW50OiBgJHthZGRDb21tZW50fWAsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb21tZW50Rm9ybS5yZXNldCgpO1xuICAgIGF3YWl0IHJlc3VsdC50ZXh0KCk7XG4gICAgZmV0Y2hDb21tZW50cyhtb3ZpZUlELmlkKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdENvbW1lbnQ7IiwiY29uc3QgYWRkQ29tbWVudCA9IChjb21tZW50cykgPT4ge1xuICBjb25zdCB0b3RhbGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50LWNvbW1tZW50cycpO1xuICB0b3RhbGNvbW1lbnRzLmlubmVySFRNTCA9IGAoJHtjb21tZW50cy5sZW5ndGh9KWA7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWNvbnRhaW5lcicpO1xuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiYWxsLWNvbW1lbnRlZFwiPjxzcGFuIGNsYXNzPVwiZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj4gJHtjb21tZW50LnVzZXJuYW1lfTogPHNwYW4gY2xhc3M9XCJjb21tZW50ZWRcIj4ke2NvbW1lbnQuY29tbWVudH08L3NwYW4+PC9saT5gO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbW1lbnRVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVERURzNzeG43alkwbWZKSGdHOWEvY29tbWVudHMnO1xuXG5jb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChgJHtjb21tZW50VVJMfT9pdGVtX2lkPSR7aWR9YCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbW1lbnRzIGFkZGVkIGZvciB0aGlzIG1vdmllJyk7XG4gIH1cbiAgY29uc3QgZ2V0Q29tbWVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgYWRkQ29tbWVudChnZXRDb21tZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoQ29tbWVudHM7IiwiaW1wb3J0IHBvc3RDb21tZW50IGZyb20gJy4vYWRkY29tbWVudC5qcyc7XG5pbXBvcnQgZmV0Y2hDb21tZW50cyBmcm9tICcuL2ZldGNoQ29tbWVudHMuanMnO1xuXG5jb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG5jb25zdCBnZXRTZXJpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvMS9lcGlzb2RlcycpO1xuICBjb25zdCBzZXJpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBzZXJpZXM7XG59O1xuXG5jb25zdCBzaG93U2VyaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzZXJpZXMgPSBhd2FpdCBnZXRTZXJpZXMoKTtcbiAgY29uc3QgdG90YWxtb3ZpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgdG90YWxtb3ZpZXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgKCR7c2VyaWVzLmxlbmd0aH0pYCk7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBzZXJpZXMuZm9yRWFjaCgoc2VyaWVzKSA9PiB7XG4gICAgY29uc3QgZXBpc29kZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlcGlzb2Rlcy5jbGFzc0xpc3QuYWRkKCdzZXJpZScpO1xuICAgIGVwaXNvZGVzLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGltZyBjbGFzcz1cInBpY1wiIHNyYz1cIiR7c2VyaWVzLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke3Nlcmllcy5uYW1lfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPjxwIGNsYXNzPVwic2VyaWUtbmFtZVwiPiR7c2VyaWVzLm5hbWV9PC9wPiBcbiAgICAgICAgICAgIDxwPiA8c3BhbiBpZD1cIiR7c2VyaWVzLmlkfVwiIGNsYXNzPVwibGlrZXNcIj4wPC9zcGFuPjxpIGlkPVwiJHtzZXJpZXMuaWR9XCIgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImNvbW1lbnRcIiBpZD1cIiR7c2VyaWVzLmlkfVwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgYDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGVwaXNvZGVzKTtcbiAgfSk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2hvd1Nlcmllcyk7XG5cbmNvbnN0IGZldGNoRGF0YSA9IChpZCkgPT4ge1xuICBnZXRTZXJpZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChzZXJpZXMpID0+IHtcbiAgICAgIGlmIChzZXJpZXMuaWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKSkge1xuICAgICAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwib3JpZ2luYWxcIiBzcmM9XCIke3Nlcmllcy5pbWFnZS5vcmlnaW5hbH1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC10aXRsZVwiPiR7c2VyaWVzLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFuZ3VhZ2VcIj4ke3Nlcmllcy5zdW1tYXJ5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnQyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tbWVudC10aXRsZVwiPkNvbW1lbnRzIDxzcGFuIGNsYXNzPVwiY291bnQtY29tbW1lbnRzXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tZ3JvdXAgZm9ybS1jb250cm9sIHAtNCBjb21tZW50LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1ncm91cFwiIHBsYWNlaG9sZGVyPVwiWW91ciBDb21tZW50XCIgc3R5bGU9XCJoZWlnaHQ6IDEyMHB4O1wiIGlkPVwiYWRkZWQtY29tbWVudFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtY29tbWVudFwiIGlkPSR7aWR9PkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIGZldGNoQ29tbWVudHMoaWQpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWNvbW1lbnQnKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9zdENvbW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZldGNoRGF0YSwgZ2V0U2VyaWVzIH07IiwiaW1wb3J0IHsgZ2V0U2VyaWVzIH0gZnJvbSAnLi9mZXRjaHNlcmllcy5qcyc7XG5cbmNvbnN0IG5ld0xpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9URFRHM3N4bjdqWTBtZkpIZ0c5YS9saWtlcycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKGNhbGwpID0+IHtcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1REVEczc3huN2pZMG1mSkhnRzlhL2xpa2VzJztcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgY2FsbChjb250ZW50KTtcbn07XG5cbmNvbnN0IGFkZExpa2VzID0gKGlkKSA9PiB7XG4gIGdldFNlcmllcygpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkYXRhLmZvckVhY2goKHNlcmllcykgPT4ge1xuICAgICAgaWYgKHNlcmllcy5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpKSB7XG4gICAgICAgIG5ld0xpa2UoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGdldERhdGEoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZS5pdGVtX2lkLnRvU3RyaW5nKCkgPT09IGlkLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50ID0gZS5saWtlcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBnZXREYXRhKChkYXRhKSA9PiB7XG4gICAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBsaWtlc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyk7XG4gICAgICBsaWtlc0NvdW50LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuaWQudG9TdHJpbmcoKSA9PT0gZWxlbWVudC5pdGVtX2lkLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICBlLnRleHRDb250ZW50ID0gZWxlbWVudC5saWtlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFkZExpa2VzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==