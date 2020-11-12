webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/button.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/styles/button.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".button {\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-size: 1.6rem;\n  text-transform: uppercase;\n  border: none;\n  background-color: #b4195a;\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n  outline: none;\n  -webkit-transition: .3s;\n  transition: .3s; }\n  .button:hover {\n    background-color: #e02071; }\n  .button:disabled, .button[disabled] {\n    opacity: .5;\n    cursor: auto; }\n  .button_reverse {\n    color: #b4195a;\n    background-color: white; }\n    .button_reverse:hover {\n      background-color: white; }\n  .button_search {\n    width: 200px; }\n\n.button_minimal {\n  display: inline-block;\n  cursor: pointer; }\n  .button_minimal_active {\n    color: #b4195a; }\n", "",{"version":3,"sources":["webpack://button.scss","webpack://variables.scss"],"names":[],"mappings":"AAEA;EACI,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,yBCR0B;EDS1B,YCLe;EDMf,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,uBAAe;EAAf,eAAe,EAAA;EAXnB;IAaQ,yBAA4C,EAAA;EAbpD;IAkBQ,WAAW;IACX,YAAY,EAAA;EAGhB;IACI,cCzBsB;ID0BtB,uBCtBW,EAAA;IDoBd;MAIO,uBAA4C,EAAA;EAIpD;IACI,YAAY,EAAA;;AAIpB;EACI,qBAAqB;EACrB,eAAe,EAAA;EACf;IACI,cCzCsB,EAAA","sourcesContent":[" @import './variables.scss';\r\n \r\n.button {\r\n    border-radius: 5px;\r\n    padding: 10px 20px;\r\n    font-size: 1.6rem;\r\n    text-transform: uppercase;\r\n    border: none;\r\n    background-color: $color-brand;\r\n    color: $color-light;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    outline: none;\r\n    transition: .3s;\r\n    &:hover {\r\n        background-color: lighten($color-brand, 10%);\r\n    }\r\n\r\n    &:disabled,\r\n    &[disabled] {\r\n        opacity: .5;\r\n        cursor: auto;\r\n    }\r\n\r\n    &_reverse {\r\n        color: $color-brand;\r\n        background-color: $color-light;\r\n        &:hover {\r\n            background-color: lighten($color-brand, 60%);\r\n        }\r\n    }\r\n\r\n    &_search {\r\n        width: 200px;\r\n    }\r\n}\r\n\r\n.button_minimal {\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    &_active {\r\n        color: $color-brand;\r\n    }\r\n}","$color-brand: rgb(180, 25, 90);\r\n$color-grey-dark: rgb(75, 75, 75);\r\n$color-grey-light: rgb(173, 173, 173);\r\n$color-error: red;\r\n$color-light: white;\r\n$color-text: rgb(29, 29, 29);"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/base.scss */ "./src/styles/base.scss");
/* harmony import */ var _src_styles_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_base_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/button.scss */ "./src/styles/button.scss");
/* harmony import */ var _src_styles_button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_button_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_styles_logo_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/styles/logo.scss */ "./src/styles/logo.scss");
/* harmony import */ var _src_styles_logo_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_styles_logo_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _src_styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/normalize.scss */ "./src/styles/normalize.scss");
/* harmony import */ var _src_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_normalize_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_styles_not_found_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/not_found.scss */ "./src/styles/not_found.scss");
/* harmony import */ var _src_styles_not_found_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_not_found_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_styles_variables_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles/variables.scss */ "./src/styles/variables.scss");
/* harmony import */ var _src_styles_variables_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_styles_variables_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_styles_movie_founded_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/styles/movie_founded.scss */ "./src/styles/movie_founded.scss");
/* harmony import */ var _src_styles_movie_founded_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_styles_movie_founded_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/footer/footer.scss */ "./src/components/footer/footer.scss");
/* harmony import */ var _src_components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_movieDetails_movie_details_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/movieDetails/movie_details.scss */ "./src/components/movieDetails/movie_details.scss");
/* harmony import */ var _src_components_movieDetails_movie_details_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieDetails_movie_details_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_movieFilter_movie_filter_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/movieFilter/movie_filter.scss */ "./src/components/movieFilter/movie_filter.scss");
/* harmony import */ var _src_components_movieFilter_movie_filter_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieFilter_movie_filter_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_header_header_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/header/header.scss */ "./src/components/header/header.scss");
/* harmony import */ var _src_components_header_header_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_components_header_header_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_header_searchBar_search_bar_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/header/searchBar/search_bar.scss */ "./src/components/header/searchBar/search_bar.scss");
/* harmony import */ var _src_components_header_searchBar_search_bar_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_header_searchBar_search_bar_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_components_movieList_editMovieMenu_edit_movie_menu_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/movieList/editMovieMenu/edit_movie_menu.scss */ "./src/components/movieList/editMovieMenu/edit_movie_menu.scss");
/* harmony import */ var _src_components_movieList_editMovieMenu_edit_movie_menu_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_editMovieMenu_edit_movie_menu_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_movieList_editMovieModal_form_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/movieList/editMovieModal/form.scss */ "./src/components/movieList/editMovieModal/form.scss");
/* harmony import */ var _src_components_movieList_editMovieModal_form_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_editMovieModal_form_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_components_movieList_editMovie_movie_edit_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/movieList/editMovie/movie_edit.scss */ "./src/components/movieList/editMovie/movie_edit.scss");
/* harmony import */ var _src_components_movieList_editMovie_movie_edit_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_editMovie_movie_edit_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_components_movieList_movie_movie_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/movieList/movie/movie.scss */ "./src/components/movieList/movie/movie.scss");
/* harmony import */ var _src_components_movieList_movie_movie_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_movie_movie_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_components_movieList_movies_list_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/components/movieList/movies_list.scss */ "./src/components/movieList/movies_list.scss");
/* harmony import */ var _src_components_movieList_movies_list_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_movies_list_scss__WEBPACK_IMPORTED_MODULE_18__);



















function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps);
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/styles/button.scss":
/*!********************************!*\
  !*** ./src/styles/button.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./button.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/button.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./button.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/button.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-7-2!../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./button.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/styles/button.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9idXR0b24uc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9idXR0b24uc2Nzcz82MmI5Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNEY7QUFDNUYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFlBQVksdUJBQXVCLHVCQUF1QixzQkFBc0IsOEJBQThCLGlCQUFpQiw4QkFBOEIsaUJBQWlCLHFCQUFxQixvQkFBb0Isa0JBQWtCLDRCQUE0QixvQkFBb0IsRUFBRSxtQkFBbUIsZ0NBQWdDLEVBQUUseUNBQXlDLGtCQUFrQixtQkFBbUIsRUFBRSxxQkFBcUIscUJBQXFCLDhCQUE4QixFQUFFLDZCQUE2QixnQ0FBZ0MsRUFBRSxvQkFBb0IsbUJBQW1CLEVBQUUscUJBQXFCLDBCQUEwQixvQkFBb0IsRUFBRSw0QkFBNEIscUJBQXFCLEVBQUUsU0FBUyx1R0FBdUcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLGVBQWUsTUFBTSxpQkFBaUIsTUFBTSxXQUFXLGVBQWUsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGlCQUFpQixNQUFNLGdCQUFnQixNQUFNLFlBQVksZ0JBQWdCLEtBQUssaUVBQWlFLGtCQUFrQiwyQkFBMkIsMkJBQTJCLDBCQUEwQixrQ0FBa0MscUJBQXFCLHVDQUF1Qyw0QkFBNEIseUJBQXlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLGlCQUFpQix5REFBeUQsU0FBUyw0Q0FBNEMsd0JBQXdCLHlCQUF5QixTQUFTLHVCQUF1QixnQ0FBZ0MsMkNBQTJDLHFCQUFxQiw2REFBNkQsYUFBYSxTQUFTLHNCQUFzQix5QkFBeUIsU0FBUyxLQUFLLHlCQUF5Qiw4QkFBOEIsd0JBQXdCLGtCQUFrQixnQ0FBZ0MsU0FBUyxLQUFLLGtDQUFrQyxzQ0FBc0MsMENBQTBDLHNCQUFzQix3QkFBd0IsaUNBQWlDLG1CQUFtQjtBQUNoMEU7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ052QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSWUsU0FBU0EsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDcEQsc0JBQU8sMkRBQUMsU0FBRCxFQUFlQSxTQUFmLENBQVA7QUFDSDtLQUZ1QkYsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ4QixVQUFVLG1CQUFPLENBQUMsMExBQTZGO0FBQy9HLDBCQUEwQixtQkFBTyxDQUFDLHVnQkFBMlM7O0FBRTdVOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHVnQkFBMlM7QUFDalQ7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx1Z0JBQTJTOztBQUVyVTs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTliODM2ZDljZDM0NTc0NTQ1ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0MTk1YTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XFxuICB0cmFuc2l0aW9uOiAuM3M7IH1cXG4gIC5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTAyMDcxOyB9XFxuICAuYnV0dG9uOmRpc2FibGVkLCAuYnV0dG9uW2Rpc2FibGVkXSB7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBjdXJzb3I6IGF1dG87IH1cXG4gIC5idXR0b25fcmV2ZXJzZSB7XFxuICAgIGNvbG9yOiAjYjQxOTVhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgICAuYnV0dG9uX3JldmVyc2U6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICAuYnV0dG9uX3NlYXJjaCB7XFxuICAgIHdpZHRoOiAyMDBweDsgfVxcblxcbi5idXR0b25fbWluaW1hbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5idXR0b25fbWluaW1hbF9hY3RpdmUge1xcbiAgICBjb2xvcjogI2I0MTk1YTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9idXR0b24uc2Nzc1wiLFwid2VicGFjazovL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix5QkNSMEI7RURTMUIsWUNMZTtFRE1mLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUFlO0VBQWYsZUFBZSxFQUFBO0VBWG5CO0lBYVEseUJBQTRDLEVBQUE7RUFicEQ7SUFrQlEsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdoQjtJQUNJLGNDekJzQjtJRDBCdEIsdUJDdEJXLEVBQUE7SURvQmQ7TUFJTyx1QkFBNEMsRUFBQTtFQUlwRDtJQUNJLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0VBQ2Y7SUFDSSxjQ3pDc0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XFxyXFxuIFxcclxcbi5idXR0b24ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJyYW5kO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvci1icmFuZCwgMTAlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmRpc2FibGVkLFxcclxcbiAgICAmW2Rpc2FibGVkXSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAuNTtcXHJcXG4gICAgICAgIGN1cnNvcjogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX3JldmVyc2Uge1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1icmFuZDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodDtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLWJyYW5kLCA2MCUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfc2VhcmNoIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uX21pbmltYWwge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgJl9hY3RpdmUge1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci1icmFuZDtcXHJcXG4gICAgfVxcclxcbn1cIixcIiRjb2xvci1icmFuZDogcmdiKDE4MCwgMjUsIDkwKTtcXHJcXG4kY29sb3ItZ3JleS1kYXJrOiByZ2IoNzUsIDc1LCA3NSk7XFxyXFxuJGNvbG9yLWdyZXktbGlnaHQ6IHJnYigxNzMsIDE3MywgMTczKTtcXHJcXG4kY29sb3ItZXJyb3I6IHJlZDtcXHJcXG4kY29sb3ItbGlnaHQ6IHdoaXRlO1xcclxcbiRjb2xvci10ZXh0OiByZ2IoMjksIDI5LCAyOSk7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy9iYXNlLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9zdHlsZXMvYnV0dG9uLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9zdHlsZXMvbG9nby5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy9ub3JtYWxpemUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy9ub3RfZm91bmQuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy9tb3ZpZV9mb3VuZGVkLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL2NvbXBvbmVudHMvbW92aWVEZXRhaWxzL21vdmllX2RldGFpbHMuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL2NvbXBvbmVudHMvbW92aWVGaWx0ZXIvbW92aWVfZmlsdGVyLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL3NlYXJjaEJhci9zZWFyY2hfYmFyLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC9lZGl0TW92aWVNZW51L2VkaXRfbW92aWVfbWVudS5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvY29tcG9uZW50cy9tb3ZpZUxpc3QvZWRpdE1vdmllTW9kYWwvZm9ybS5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvY29tcG9uZW50cy9tb3ZpZUxpc3QvZWRpdE1vdmllL21vdmllX2VkaXQuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL2NvbXBvbmVudHMvbW92aWVMaXN0L21vdmllL21vdmllLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC9tb3ZpZXNfbGlzdC5zY3NzJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctMiEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtNy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctNCEuL2J1dHRvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctMiEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtNy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctNCEuL2J1dHRvbi5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctMiEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtNy0zIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTctNCEuL2J1dHRvbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=