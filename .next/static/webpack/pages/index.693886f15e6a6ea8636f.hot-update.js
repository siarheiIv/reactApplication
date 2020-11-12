webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWVMaXN0L21vdmllL21vdmllLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZSIsInByb3BzIiwiZGVzY3JpcHRpb24iLCJpZCIsInBvc3Rlcl9wYXRoIiwidGl0bGUiLCJyZWxlYXNlX2RhdGUiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNiQyxXQURhLEdBQ0dELEtBREgsQ0FDYkMsV0FEYTtBQUVyQixzQkFDSTtBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDSSwyREFBQyxnREFBRDtBQUFNLFFBQUksa0JBQVdBLFdBQVcsQ0FBQ0MsRUFBdkI7QUFBVixrQkFDSTtBQUFLLE9BQUcsRUFBRUQsV0FBVyxDQUFDRSxXQUF0QjtBQUFtQyxPQUFHLEVBQUMsRUFBdkM7QUFBMEMsYUFBUyxFQUFDO0FBQXBELElBREosQ0FESixlQUlJLDJEQUFDLHdEQUFEO0FBQVcsZUFBVyxFQUFFRjtBQUF4QixJQUpKLGVBS0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxxRkFDSTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQThCQSxXQUFXLENBQUNHLEtBQTFDLENBREosQ0FESixlQUlJO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBNEJILFdBQVcsQ0FBQ0ksWUFBWixDQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBNUIsQ0FKSixDQUxKLENBREo7QUFjSCxDQWhCRDs7S0FBTVAsSztBQWtCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjkzODg2ZjE1ZTZhNmVhODYzNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBFZGl0TW92aWUgZnJvbSAnLi4vZWRpdE1vdmllL2luZGV4JztcclxuXHJcbmNvbnN0IE1vdmllID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibW92aWVcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9maWxtLyR7ZGVzY3JpcHRpb24uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGVzY3JpcHRpb24ucG9zdGVyX3BhdGh9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm1vdmllX19pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPEVkaXRNb3ZpZSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb3ZpZV9fdGl0bGVcIj57ZGVzY3JpcHRpb24udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW92aWVfX3llYXJcIj57ZGVzY3JpcHRpb24ucmVsZWFzZV9kYXRlLnNsaWNlKDAsIDQpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZTsiXSwic291cmNlUm9vdCI6IiJ9