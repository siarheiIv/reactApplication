webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaG9jL21vZGFsSE9DLmpzeCJdLCJuYW1lcyI6WyJNb2RhbEhPQyIsIldyYXBwZWRDb21wb25lbnQiLCJuZXdNb3ZpZU1vZGFsIiwicHJvcHMiLCJtb2RhbFJlZiIsInVzZVJlZiIsImhhbmRsZUNsaWNrIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxnQkFBRCxFQUFzQjtBQUFBOztBQUVuQyxZQUFPLFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQ2pDLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxFQUFELENBQXZCO0FBRGlDLFFBRXpCQyxXQUZ5QixHQUVJSCxLQUZKLENBRXpCRyxXQUZ5QjtBQUFBLFFBRVpDLFdBRlksR0FFSUosS0FGSixDQUVaSSxXQUZZLEVBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDSTtBQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssV0FBRyxFQUFFSCxRQUFWO0FBQW9CLGlCQUFTLEVBQUM7QUFBOUIsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsZUFBTyxFQUFFRTtBQUF0QyxRQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksMkRBQUMsZ0JBQUQ7QUFBa0IsbUJBQVcsRUFBRUMsV0FBL0I7QUFBNEMsbUJBQVcsRUFBRUQ7QUFBekQsUUFESixDQUZKLENBREo7QUFGSjtBQVdILEdBdEJEO0FBdUJILENBekJEOztLQUFNTixRO0FBMkJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNmMwYmQxM2ZiNWQ1OWIyZTNiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1vZGFsSE9DID0gKFdyYXBwZWRDb21wb25lbnQpID0+IHtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gbmV3TW92aWVNb2RhbChwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKCcnKTtcclxuICAgICAgICBjb25zdCB7IGhhbmRsZUNsaWNrLCBkZXNjcmlwdGlvbiB9ID0gcHJvcHM7XHJcbiAgICAgICAgLy8gY29uc3QgY2xvc2VNb2RhbCA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChtb2RhbFJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgaGFuZGxlQ2xpY2soKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9vdmVybGF5XCIgb25DbGljaz17KGUpID0+IGNsb3NlTW9kYWwoZSl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX292ZXJsYXlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXttb2RhbFJlZn0gY2xhc3NOYW1lPVwibW9kYWxfYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY2xvc2VcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxIT0M7Il0sInNvdXJjZVJvb3QiOiIifQ==