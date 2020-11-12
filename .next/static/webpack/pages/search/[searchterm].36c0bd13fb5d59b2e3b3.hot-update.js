webpackHotUpdate_N_E("pages/search/[searchterm]",{

/***/ "./src/components/hoc/modalHOC.jsx":
/*!*****************************************!*\
  !*** ./src/components/hoc/modalHOC.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var ModalHOC = function ModalHOC(WrappedComponent) {
  var _s = $RefreshSig$();

  return _s(function newMovieModal(props) {
    _s();

    var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])('');
    var handleClick = props.handleClick,
        description = props.description; // const closeModal = (e) => {
    //     if (modalRef.current.contains(e.target)) {
    //         return;
    //     } else {
    //         handleClick();
    //     }
    // }

    return (
      /*#__PURE__*/
      // <div className="modal_overlay" onClick={(e) => closeModal(e)}>
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "modal_overlay"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: modalRef,
        className: "modal_body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "modal-close",
        onClick: handleClick
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "modal_wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, {
        description: description,
        handleClick: handleClick
      }))))
    );
  }, "zNVem5B1U/BPM1VF05fbpVyTiCs=");
};

_c = ModalHOC;
/* harmony default export */ __webpack_exports__["default"] = (ModalHOC);

var _c;

$RefreshReg$(_c, "ModalHOC");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9jL21vZGFsSE9DLmpzeCJdLCJuYW1lcyI6WyJNb2RhbEhPQyIsIldyYXBwZWRDb21wb25lbnQiLCJuZXdNb3ZpZU1vZGFsIiwicHJvcHMiLCJtb2RhbFJlZiIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxnQkFBRCxFQUFzQjtBQUFBOztBQUVuQyxZQUFPLFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQ2pDLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxFQUFELENBQXZCO0FBRGlDLFFBRXpCQyxXQUZ5QixHQUVJSCxLQUZKLENBRXpCRyxXQUZ5QjtBQUFBLFFBRVpDLFdBRlksR0FFSUosS0FGSixDQUVaSSxXQUZZLEVBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDSTtBQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssV0FBRyxFQUFFSCxRQUFWO0FBQW9CLGlCQUFTLEVBQUM7QUFBOUIsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsZUFBTyxFQUFFRTtBQUF0QyxRQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksMkRBQUMsZ0JBQUQ7QUFBa0IsbUJBQVcsRUFBRUMsV0FBL0I7QUFBNEMsbUJBQVcsRUFBRUQ7QUFBekQsUUFESixDQUZKLENBREo7QUFGSjtBQVdILEdBdEJEO0FBdUJILENBekJEOztLQUFNTixRO0FBMkJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2gvW3NlYXJjaHRlcm1dLjM2YzBiZDEzZmI1ZDU5YjJlM2IzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTW9kYWxIT0MgPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBuZXdNb3ZpZU1vZGFsKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWYoJycpO1xyXG4gICAgICAgIGNvbnN0IHsgaGFuZGxlQ2xpY2ssIGRlc2NyaXB0aW9uIH0gPSBwcm9wcztcclxuICAgICAgICAvLyBjb25zdCBjbG9zZU1vZGFsID0gKGUpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKG1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBoYW5kbGVDbGljaygpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX292ZXJsYXlcIiBvbkNsaWNrPXsoZSkgPT4gY2xvc2VNb2RhbChlKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e21vZGFsUmVmfSBjbGFzc05hbWU9XCJtb2RhbF9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFdyYXBwZWRDb21wb25lbnQgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEhPQzsiXSwic291cmNlUm9vdCI6IiJ9