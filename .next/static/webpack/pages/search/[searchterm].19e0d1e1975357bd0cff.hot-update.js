webpackHotUpdate_N_E("pages/search/[searchterm]",{

/***/ "./src/components/movieList/editMovieMenu/editMovieMenu.jsx":
/*!******************************************************************!*\
  !*** ./src/components/movieList/editMovieMenu/editMovieMenu.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _editMovieModal_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../editMovieModal/index */ "./src/components/movieList/editMovieModal/index.js");
/* harmony import */ var _deleteMovieModal_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../deleteMovieModal/index */ "./src/components/movieList/deleteMovieModal/index.js");












var _s2 = $RefreshSig$();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var EditMovieMenu = function EditMovieMenu(props) {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      editModal = _useState2[0],
      setEditModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      deleteModal = _useState4[0],
      setDeleteModal = _useState4[1];

  var handleSelect = function handleSelect(e) {
    if (e.target.dataset.name === "editModal") {
      setEditModal(!editModal);
    } else {
      setDeleteModal(true);
    }
  };

  var handleClick = props.handleClick,
      description = props.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, !editModal && !deleteModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "movie_edit_menu",
    tabIndex: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
    className: "movie_edit_menu_close",
    onClick: handleClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "movie_edit_menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
    "data-name": "editModal",
    onClick: function onClick(e) {
      return handleSelect(e);
    }
  }, "Edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "movie_edit_menu_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
    "data-name": "deleteModal",
    onClick: function onClick(e) {
      return handleSelect(e);
    }
  }, "Delete"))), editModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_editMovieModal_index__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleClick: handleClick,
    description: description
  }), deleteModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_deleteMovieModal_index__WEBPACK_IMPORTED_MODULE_13__["default"], {
    handleClick: handleClick,
    description: description
  }));
};

_s2(EditMovieMenu, "bmQEqqi1sS0rfSwycJgPctO7xrk=");

_c = EditMovieMenu;
/* harmony default export */ __webpack_exports__["default"] = (EditMovieMenu);

var _c;

$RefreshReg$(_c, "EditMovieMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWVMaXN0L2VkaXRNb3ZpZU1lbnUvZWRpdE1vdmllTWVudS5qc3giXSwibmFtZXMiOlsiRWRpdE1vdmllTWVudSIsInByb3BzIiwidXNlU3RhdGUiLCJlZGl0TW9kYWwiLCJzZXRFZGl0TW9kYWwiLCJkZWxldGVNb2RhbCIsInNldERlbGV0ZU1vZGFsIiwiaGFuZGxlU2VsZWN0IiwiZSIsInRhcmdldCIsImRhdGFzZXQiLCJuYW1lIiwiaGFuZGxlQ2xpY2siLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0tDLHVEQUFRLENBQUMsS0FBRCxDQURiO0FBQUE7QUFBQSxNQUN0QkMsU0FEc0I7QUFBQSxNQUNYQyxZQURXOztBQUFBLG1CQUVTRix1REFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQTtBQUFBLE1BRXRCRyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBSTdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QixRQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkNQLGtCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0gsS0FGRCxNQUVPO0FBQ0hHLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0g7QUFFSixHQVBEOztBQUo2QixNQWFyQk0sV0FicUIsR0FhUVgsS0FiUixDQWFyQlcsV0FicUI7QUFBQSxNQWFSQyxXQWJRLEdBYVFaLEtBYlIsQ0FhUlksV0FiUTtBQWU3QixzQkFDSSw0REFBQyw2Q0FBRCxDQUFPLFFBQVAsUUFDSyxDQUFDVixTQUFELElBQWMsQ0FBQ0UsV0FBZixpQkFDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQyxZQUFRLEVBQUU7QUFBM0Msa0JBQ0c7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQXdDLFdBQU8sRUFBRU87QUFBakQsSUFESCxlQUVHO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBTSxpQkFBVSxXQUFoQjtBQUE0QixXQUFPLEVBQUUsaUJBQUNKLENBQUQ7QUFBQSxhQUFPRCxZQUFZLENBQUNDLENBQUQsQ0FBbkI7QUFBQTtBQUFyQyxZQURKLENBRkgsZUFLRztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQU0saUJBQVUsYUFBaEI7QUFBOEIsV0FBTyxFQUFFLGlCQUFDQSxDQUFEO0FBQUEsYUFBT0QsWUFBWSxDQUFDQyxDQUFELENBQW5CO0FBQUE7QUFBdkMsY0FESixDQUxILENBRlQsRUFZS0wsU0FBUyxpQkFBSSw0REFBQyw4REFBRDtBQUFnQixlQUFXLEVBQUVTLFdBQTdCO0FBQTBDLGVBQVcsRUFBRUM7QUFBdkQsSUFabEIsRUFhS1IsV0FBVyxpQkFBSSw0REFBQyxnRUFBRDtBQUFrQixlQUFXLEVBQUVPLFdBQS9CO0FBQTRDLGVBQVcsRUFBRUM7QUFBekQsSUFicEIsQ0FESjtBQWlCSCxDQWhDRDs7SUFBTWIsYTs7S0FBQUEsYTtBQWtDU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1tzZWFyY2h0ZXJtXS4xOWUwZDFlMTk3NTM1N2JkMGNmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRWRpdE1vdmllTW9kYWwgZnJvbSAnLi4vZWRpdE1vdmllTW9kYWwvaW5kZXgnO1xyXG5pbXBvcnQgRGVsZXRlTW92aWVNb2RhbCBmcm9tICcuLi9kZWxldGVNb3ZpZU1vZGFsL2luZGV4JztcclxuXHJcbmNvbnN0IEVkaXRNb3ZpZU1lbnUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtlZGl0TW9kYWwsIHNldEVkaXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGVsZXRlTW9kYWwsIHNldERlbGV0ZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5kYXRhc2V0Lm5hbWUgPT09IFwiZWRpdE1vZGFsXCIpIHtcclxuICAgICAgICAgICAgc2V0RWRpdE1vZGFsKCFlZGl0TW9kYWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldERlbGV0ZU1vZGFsKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHsgaGFuZGxlQ2xpY2ssIGRlc2NyaXB0aW9uIH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgeyFlZGl0TW9kYWwgJiYgIWRlbGV0ZU1vZGFsICYmXHJcbiAgICAgICAgICAgICAgICAoPGRpdiBjbGFzc05hbWU9XCJtb3ZpZV9lZGl0X21lbnVcIiB0YWJJbmRleD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW92aWVfZWRpdF9tZW51X2Nsb3NlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9ID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZV9lZGl0X21lbnVfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLW5hbWU9XCJlZGl0TW9kYWxcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU2VsZWN0KGUpfT5FZGl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVfZWRpdF9tZW51X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1uYW1lPVwiZGVsZXRlTW9kYWxcIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlU2VsZWN0KGUpfT5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2VkaXRNb2RhbCAmJiA8RWRpdE1vdmllTW9kYWwgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+fVxyXG4gICAgICAgICAgICB7ZGVsZXRlTW9kYWwgJiYgPERlbGV0ZU1vdmllTW9kYWwgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+fVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRNb3ZpZU1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==