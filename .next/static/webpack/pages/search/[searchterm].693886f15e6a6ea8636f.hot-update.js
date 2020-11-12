webpackHotUpdate_N_E("pages/search/[searchterm]",{

/***/ "./src/components/movieList/movie/movie.jsx":
/*!**************************************************!*\
  !*** ./src/components/movieList/movie/movie.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editMovie_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editMovie/index */ "./src/components/movieList/editMovie/index.js");







var Movie = function Movie(props) {
  var description = props.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
    className: "movie"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/film/".concat(description.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: description.poster_path,
    alt: "",
    className: "movie__image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_editMovie_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    description: description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "movie__description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "movie__title"
  }, description.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "movie__year"
  }, description.release_date.slice(0, 4))));
};

_c = Movie;
/* harmony default export */ __webpack_exports__["default"] = (Movie);

var _c;

$RefreshReg$(_c, "Movie");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWVMaXN0L21vdmllL21vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsInByb3BzIiwiZGVzY3JpcHRpb24iLCJpZCIsInBvc3Rlcl9wYXRoIiwidGl0bGUiLCJyZWxlYXNlX2RhdGUiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNiQyxXQURhLEdBQ0dELEtBREgsQ0FDYkMsV0FEYTtBQUVyQixzQkFDSTtBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDSSwyREFBQyxnREFBRDtBQUFNLFFBQUksa0JBQVdBLFdBQVcsQ0FBQ0MsRUFBdkI7QUFBVixrQkFDSTtBQUFLLE9BQUcsRUFBRUQsV0FBVyxDQUFDRSxXQUF0QjtBQUFtQyxPQUFHLEVBQUMsRUFBdkM7QUFBMEMsYUFBUyxFQUFDO0FBQXBELElBREosQ0FESixlQUlJLDJEQUFDLHdEQUFEO0FBQVcsZUFBVyxFQUFFRjtBQUF4QixJQUpKLGVBS0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxxRkFDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQThCQSxXQUFXLENBQUNHLEtBQTFDLENBREosQ0FESixlQUlJO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBNEJILFdBQVcsQ0FBQ0ksWUFBWixDQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBNUIsQ0FKSixDQUxKLENBREo7QUFjSCxDQWhCRDs7S0FBTVAsSztBQWtCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1tzZWFyY2h0ZXJtXS42OTM4ODZmMTVlNmE2ZWE4NjM2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEVkaXRNb3ZpZSBmcm9tICcuLi9lZGl0TW92aWUvaW5kZXgnO1xyXG5cclxuY29uc3QgTW92aWUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtb3ZpZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2ZpbG0vJHtkZXNjcmlwdGlvbi5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkZXNjcmlwdGlvbi5wb3N0ZXJfcGF0aH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwibW92aWVfX2ltYWdlXCIgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8RWRpdE1vdmllIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZV9fZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vdmllX190aXRsZVwiPntkZXNjcmlwdGlvbi50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb3ZpZV9feWVhclwiPntkZXNjcmlwdGlvbi5yZWxlYXNlX2RhdGUuc2xpY2UoMCwgNCl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllOyJdLCJzb3VyY2VSb290IjoiIn0=