webpackHotUpdate_N_E("pages/search/[searchterm]",{

/***/ "./pages/search/[searchterm].js":
/*!**************************************!*\
  !*** ./pages/search/[searchterm].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchTerm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/redux/store */ "./src/redux/store.js");
/* harmony import */ var _src_pages_homePage_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/pages/homePage/index */ "./src/pages/homePage/index.js");




function SearchTerm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _src_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_pages_homePage_index__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
_c = SearchTerm;

var _c;

$RefreshReg$(_c, "SearchTerm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/movieList/deleteMovieModal/deleteMovieModal.jsx":
/*!************************************************************************!*\
  !*** ./src/components/movieList/deleteMovieModal/deleteMovieModal.jsx ***!
  \************************************************************************/
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
/* harmony import */ var _hoc_modalHOC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hoc/modalHOC */ "./src/components/hoc/modalHOC.jsx");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions */ "./src/redux/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/store */ "./src/redux/store.js");







var DeleteMovieModal = function DeleteMovieModal(props) {
  var description = props.description,
      handleClick = props.handleClick;

  var handleDeleteMovie = function handleDeleteMovie() {
    _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["deleteMovie"])(description.id));
    handleClick();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Delete Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "modal_field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Are tou sure you want to delete this movie?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "modal_buttons_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "button button_reverse",
    onClick: handleClick
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "button",
    onClick: handleDeleteMovie
  }, "Confirm")));
};

_c = DeleteMovieModal;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_hoc_modalHOC__WEBPACK_IMPORTED_MODULE_3__["default"])(DeleteMovieModal));

var _c, _c2;

$RefreshReg$(_c, "DeleteMovieModal");
$RefreshReg$(_c2, "%default%");

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

/***/ }),

/***/ "./src/components/movieList/editMovieModal/editMovieModal.jsx":
/*!********************************************************************!*\
  !*** ./src/components/movieList/editMovieModal/editMovieModal.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../redux/store */ "./src/redux/store.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../redux/actions */ "./src/redux/actions.js");
/* harmony import */ var _hoc_modalHOC__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hoc/modalHOC */ "./src/components/hoc/modalHOC.jsx");
/* harmony import */ var _styles_material_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles-material-ui */ "./src/components/movieList/editMovieModal/styles-material-ui.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var EditMovieModal = function EditMovieModal(props) {
  var description = props.description,
      classes = props.classes,
      handleClick = props.handleClick;
  var inputValues = {
    title: description.title,
    release_date: description.release_date,
    poster_path: description.poster_path,
    genres: description.genres,
    overview: description.overview,
    runtime: description.runtime,
    vote_average: description.vote_average
  };

  var handleAddMovie = function handleAddMovie(list) {
    var values = _objectSpread(_objectSpread({}, list), {}, {
      runtime: Number(list.runtime),
      vote_average: Number(list.vote_average)
    });

    if (_redux_store__WEBPACK_IMPORTED_MODULE_16__["default"].getState().homePage.movies.filter(function (movie) {
      return movie.id === description.id;
    }).length) {
      _redux_store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_17__["updateMovie"])(values, description.id));
    } else {
      _redux_store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_17__["addMovie"])(values));
    }

    handleClick();
  };

  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_11__["object"]({
    genres: yup__WEBPACK_IMPORTED_MODULE_11__["array"](yup__WEBPACK_IMPORTED_MODULE_11__["string"]()).required('Genres field must have 1 option'),
    overview: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required('Overview is required'),
    poster_path: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().url('Invalid url address').required('Image URL is required'),
    release_date: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required('Date is required'),
    runtime: yup__WEBPACK_IMPORTED_MODULE_11__["number"]().typeError('The average vote must be a number').required('Runtime is required').min(0, 'The runtime must be more or equal to 0').max(10000, 'The runtime must be less or equal to 10000'),
    title: yup__WEBPACK_IMPORTED_MODULE_11__["string"]().required('Title is required'),
    vote_average: yup__WEBPACK_IMPORTED_MODULE_11__["number"]().typeError('The average vote must be a number').required('The average vote is required').min(0, 'The average vote must be more or equal to 0').max(10, 'The average vote must be less or equal to 10')
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Formik"], {
    initialValues: inputValues,
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values) {
      return handleAddMovie(values);
    }
  }, function (_ref) {
    var isSubmitting = _ref.isSubmitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "Edit Movie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "modal_field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      htmlFor: "title"
    }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      autoComplete: "off",
      name: "title",
      type: "text",
      id: "title"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"], {
      name: "title",
      render: function render(msg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "error_message"
        }, msg);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "modal_field release_date"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      htmlFor: "release_date"
    }, "Release Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      autoComplete: "off",
      name: "release_date",
      type: "date",
      id: "release_date"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"], {
      name: "release_date",
      render: function render(msg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "error_message"
        }, msg);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "modal_field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      htmlFor: "poster_path"
    }, "Image Url"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      autoComplete: "off",
      name: "poster_path",
      type: "text",
      id: "poster_path"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"], {
      name: "poster_path",
      render: function render(msg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "error_message"
        }, msg);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "modal_field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      htmlFor: "poster_path"
    }, "Genres"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["MuiThemeProvider"], {
      theme: _styles_material_ui__WEBPACK_IMPORTED_MODULE_19__["theme1"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      InputProps: {
        disableUnderline: true
      },
      SelectProps: {
        multiple: true
      },
      select: true,
      as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"],
      name: "genres",
      classes: {
        root: classes.select
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
      value: 'Action'
    }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
      value: 'Adventure'
    }, "Adventure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
      value: 'Animation'
    }, "Animation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
      value: 'Family'
    }, "Family"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
      value: 'Drama'
    }, "Drama"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
      value: 'Fantasy'
    }, "Fantasy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
      value: 'Romance'
    }, "Romance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
      value: 'Science fiction'
    }, "Science Fiction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"], {
      name: "genres",
      render: function render(msg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "error_message"
        }, msg);
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "modal_field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      htmlFor: "overview"
    }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      autoComplete: "off",
      name: "overview",
      type: "text",
      id: "overview"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"], {
      name: "overview",
      render: function render(msg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "error_message"
        }, msg);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "modal_field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      htmlFor: "vote_average"
    }, "Average Vote"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      autoComplete: "off",
      name: "vote_average",
      type: "text",
      id: "vote_average"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"], {
      name: "vote_average",
      render: function render(msg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "error_message"
        }, msg);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "modal_field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      htmlFor: "runtime"
    }, "Runtime"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      autoComplete: "off",
      name: "runtime",
      type: "text",
      id: "runtime"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_10__["ErrorMessage"], {
      name: "runtime",
      render: function render(msg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "error_message"
        }, msg);
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "modal_buttons_container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
      className: "button button_reverse",
      onClick: handleClick
    }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      classes: {
        root: classes.button
      },
      type: "submit",
      disabled: isSubmitting
    }, "Submit")));
  });
};

_c = EditMovieModal;
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_modalHOC__WEBPACK_IMPORTED_MODULE_18__["default"])(Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(_styles_material_ui__WEBPACK_IMPORTED_MODULE_19__["styles"])(EditMovieModal)));

var _c;

$RefreshReg$(_c, "EditMovieModal");

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

/***/ }),

/***/ "./src/redux/actions.js":
/*!******************************!*\
  !*** ./src/redux/actions.js ***!
  \******************************/
/*! exports provided: GET_ALL_FILMS_FOR_RENDER, SELECTED_TAB_INDEX, UPDATE_SEARCH_TERM, ADD_MOVIE, UPDATE_MOVIE, GET_MOVIE, getFilmsForRender, getFilmById, setSelectedIndex, updateSearchTerm, pushMovieIntoList, updateMovieInList, loadAllMovies, getMovieById, deleteMovie, addMovie, updateMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_FILMS_FOR_RENDER", function() { return GET_ALL_FILMS_FOR_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_TAB_INDEX", function() { return SELECTED_TAB_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCH_TERM", function() { return UPDATE_SEARCH_TERM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MOVIE", function() { return ADD_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MOVIE", function() { return UPDATE_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE", function() { return GET_MOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilmsForRender", function() { return getFilmsForRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilmById", function() { return getFilmById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedIndex", function() { return setSelectedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchTerm", function() { return updateSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushMovieIntoList", function() { return pushMovieIntoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovieInList", function() { return updateMovieInList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllMovies", function() { return loadAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieById", function() { return getMovieById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovie", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovie", function() { return addMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovie", function() { return updateMovie; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./src/redux/store.js");












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var GET_ALL_FILMS_FOR_RENDER = 'GET_ALL_FILMS_FOR_RENDER';
var SELECTED_TAB_INDEX = 'SELECTED_TAB_INDEX';
var UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
var ADD_MOVIE = 'ADD_MOVIE';
var UPDATE_MOVIE = 'UPDATE_MOVIE';
var GET_MOVIE = 'GET_MOVIE';
var getFilmsForRender = function getFilmsForRender(data, searchTerm, sortBy, filter, offset, shouldUpdateState) {
  return {
    type: GET_ALL_FILMS_FOR_RENDER,
    data: data,
    searchTerm: searchTerm,
    sortBy: sortBy,
    filter: filter,
    offset: offset,
    shouldUpdateState: shouldUpdateState
  };
};
var getFilmById = function getFilmById(data) {
  return {
    type: GET_MOVIE,
    data: data
  };
};
var setSelectedIndex = function setSelectedIndex(data) {
  return {
    type: SELECTED_TAB_INDEX,
    payload: data
  };
};
var updateSearchTerm = function updateSearchTerm(data) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: data
  };
};
var pushMovieIntoList = function pushMovieIntoList(data) {
  return {
    type: ADD_MOVIE,
    payload: data
  };
};
var updateMovieInList = function updateMovieInList(data, id) {
  return {
    type: UPDATE_MOVIE,
    payload: data,
    id: id
  };
};
var loadAllMovies = function loadAllMovies(title, sortBy, filter, offset, shouldUpdateState) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _yield$fetch$then, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("http://localhost:5000/movies?&limit=9&sortOrder=asc".concat(offset ? "&offset=".concat(offset) : '&offset=0').concat(title ? "&limit=3500&search=".concat(title, "&searchBy=title") : '').concat(sortBy === 'title' ? '&sortBy=title' : sortBy === 'rating' ? '&sortBy=vote_average' : '&sortBy=release_date').concat(filter ? "&filter=".concat(filter) : '')).then(function (resp) {
              return resp.json();
            });

          case 3:
            _yield$fetch$then = _context.sent;
            data = _yield$fetch$then.data;
            _store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(getFilmsForRender(data, title, sortBy, filter, offset, shouldUpdateState));
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
};
var getMovieById = function getMovieById(id) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch("http://localhost:5000/movies/".concat(id)).then(function (response) {
              return response.json();
            });

          case 3:
            data = _context2.sent;
            _store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(getFilmById(data));
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
};
var deleteMovie = function deleteMovie(id) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch("http://localhost:5000/movies/".concat(id), {
              method: 'DELETE'
            });

          case 3:
            _store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(loadAllMovies('', '', ''));
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.error();

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));
};
var addMovie = function addMovie(newMovie) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var newMovieObject;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return fetch('http://localhost:5000/movies', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newMovie)
            }).then(function (response) {
              return response.json();
            });

          case 3:
            newMovieObject = _context4.sent;
            _store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(pushMovieIntoList(newMovieObject));
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.error();

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
};
var updateMovie = function updateMovie(data, id) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var editedMovie;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return fetch('http://localhost:5000/movies/', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(_objectSpread(_objectSpread({}, data), {}, {
                id: id
              }))
            }).then(function (response) {
              return response.json();
            });

          case 3:
            editedMovie = _context5.sent;
            _store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(updateMovieInList(editedMovie, editedMovie.id));
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.error();

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/index */ "./src/redux/reducers/index.js");




var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["rootReducer"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"])));
/* harmony default export */ __webpack_exports__["default"] = (store);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1tzZWFyY2h0ZXJtXS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWVMaXN0L2RlbGV0ZU1vdmllTW9kYWwvZGVsZXRlTW92aWVNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC9lZGl0TW92aWVNb2RhbC9lZGl0TW92aWVNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc3RvcmUuanMiXSwibmFtZXMiOlsiU2VhcmNoVGVybSIsInN0b3JlIiwiRGVsZXRlTW92aWVNb2RhbCIsInByb3BzIiwiZGVzY3JpcHRpb24iLCJoYW5kbGVDbGljayIsImhhbmRsZURlbGV0ZU1vdmllIiwiZGlzcGF0Y2giLCJkZWxldGVNb3ZpZSIsImlkIiwiTW9kYWxIT0MiLCJFZGl0TW92aWVNb2RhbCIsImNsYXNzZXMiLCJpbnB1dFZhbHVlcyIsInRpdGxlIiwicmVsZWFzZV9kYXRlIiwicG9zdGVyX3BhdGgiLCJnZW5yZXMiLCJvdmVydmlldyIsInJ1bnRpbWUiLCJ2b3RlX2F2ZXJhZ2UiLCJoYW5kbGVBZGRNb3ZpZSIsImxpc3QiLCJ2YWx1ZXMiLCJOdW1iZXIiLCJnZXRTdGF0ZSIsImhvbWVQYWdlIiwibW92aWVzIiwiZmlsdGVyIiwibW92aWUiLCJsZW5ndGgiLCJ1cGRhdGVNb3ZpZSIsImFkZE1vdmllIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwidXJsIiwidHlwZUVycm9yIiwibWluIiwibWF4IiwiaXNTdWJtaXR0aW5nIiwibXNnIiwidGhlbWUxIiwiZGlzYWJsZVVuZGVybGluZSIsIm11bHRpcGxlIiwiVGV4dEZpZWxkIiwicm9vdCIsInNlbGVjdCIsImJ1dHRvbiIsIndpdGhTdHlsZXMiLCJzdHlsZXMiLCJHRVRfQUxMX0ZJTE1TX0ZPUl9SRU5ERVIiLCJTRUxFQ1RFRF9UQUJfSU5ERVgiLCJVUERBVEVfU0VBUkNIX1RFUk0iLCJBRERfTU9WSUUiLCJVUERBVEVfTU9WSUUiLCJHRVRfTU9WSUUiLCJnZXRGaWxtc0ZvclJlbmRlciIsImRhdGEiLCJzZWFyY2hUZXJtIiwic29ydEJ5Iiwib2Zmc2V0Iiwic2hvdWxkVXBkYXRlU3RhdGUiLCJ0eXBlIiwiZ2V0RmlsbUJ5SWQiLCJzZXRTZWxlY3RlZEluZGV4IiwicGF5bG9hZCIsInVwZGF0ZVNlYXJjaFRlcm0iLCJwdXNoTW92aWVJbnRvTGlzdCIsInVwZGF0ZU1vdmllSW5MaXN0IiwibG9hZEFsbE1vdmllcyIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwiZ2V0TW92aWVCeUlkIiwicmVzcG9uc2UiLCJtZXRob2QiLCJuZXdNb3ZpZSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld01vdmllT2JqZWN0IiwiZWRpdGVkTW92aWUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2FyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBQ25DLHNCQUNFLDJEQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQyx3REFBS0E7QUFBdEIsa0JBQ0UsMkRBQUMsaUVBQUQsT0FERixDQURGO0FBSUQ7S0FMdUJELFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7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QitELElBSnVCLENBSWxCLFVBQUNNLFFBQUQ7QUFBQSxxQkFBY0EsUUFBUSxDQUFDSixJQUFULEVBQWQ7QUFBQSxhQUprQixDQUZXOztBQUFBO0FBRS9CWSx1QkFGK0I7QUFPckNyRiwyREFBSyxDQUFDTSxRQUFOLENBQWU4RCxpQkFBaUIsQ0FBQ2lCLFdBQUQsRUFBY0EsV0FBVyxDQUFDN0UsRUFBMUIsQ0FBaEM7QUFQcUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTckNrRSxtQkFBTyxDQUFDQyxLQUFSOztBQVRxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFkO0FBQUEsQ0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0zRSxLQUFLLEdBQUdzRix5REFBVyxDQUFDQywyREFBRCxFQUFjQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBaEIsQ0FBakMsQ0FBekI7QUFDZTFGLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9bc2VhcmNodGVybV0uNDQ1NjVkZmYzMjc1ZmVlNGJiZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3JjL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uLy4uL3NyYy9wYWdlcy9ob21lUGFnZS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hUZXJtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPEhvbWVQYWdlIC8+XHJcbiAgICA8L1Byb3ZpZGVyPik7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsSE9DIGZyb20gJy4uLy4uL2hvYy9tb2RhbEhPQyc7XHJcbmltcG9ydCB7IGRlbGV0ZU1vdmllIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi8uLi9yZWR1eC9zdG9yZSc7XHJcblxyXG5jb25zdCBEZWxldGVNb3ZpZU1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgaGFuZGxlQ2xpY2sgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVNb3ZpZSA9ICgpID0+IHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKGRlbGV0ZU1vdmllKGRlc2NyaXB0aW9uLmlkKSk7XHJcbiAgICBoYW5kbGVDbGljaygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aDI+RGVsZXRlIE1vdmllPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+QXJlIHRvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIG1vdmllPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYnV0dG9uc19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbl9yZXZlcnNlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVEZWxldGVNb3ZpZX0+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEhPQyhEZWxldGVNb3ZpZU1vZGFsKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2UsXHJcbn0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uLy4uL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IHsgYWRkTW92aWUsIHVwZGF0ZU1vdmllIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCBNb2RhbEhPQyBmcm9tICcuLi8uLi9ob2MvbW9kYWxIT0MnO1xyXG5pbXBvcnQgeyBzdHlsZXMsIHRoZW1lMSB9IGZyb20gJy4vc3R5bGVzLW1hdGVyaWFsLXVpJztcclxuXHJcbmNvbnN0IEVkaXRNb3ZpZU1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgY2xhc3NlcywgaGFuZGxlQ2xpY2sgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGlucHV0VmFsdWVzID0ge1xyXG4gICAgdGl0bGU6IGRlc2NyaXB0aW9uLnRpdGxlLFxyXG4gICAgcmVsZWFzZV9kYXRlOiBkZXNjcmlwdGlvbi5yZWxlYXNlX2RhdGUsXHJcbiAgICBwb3N0ZXJfcGF0aDogZGVzY3JpcHRpb24ucG9zdGVyX3BhdGgsXHJcbiAgICBnZW5yZXM6IGRlc2NyaXB0aW9uLmdlbnJlcyxcclxuICAgIG92ZXJ2aWV3OiBkZXNjcmlwdGlvbi5vdmVydmlldyxcclxuICAgIHJ1bnRpbWU6IGRlc2NyaXB0aW9uLnJ1bnRpbWUsXHJcbiAgICB2b3RlX2F2ZXJhZ2U6IGRlc2NyaXB0aW9uLnZvdGVfYXZlcmFnZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRNb3ZpZSA9IChsaXN0KSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSB7XHJcbiAgICAgIC4uLmxpc3QsIHJ1bnRpbWU6IE51bWJlcihsaXN0LnJ1bnRpbWUpLCB2b3RlX2F2ZXJhZ2U6IE51bWJlcihsaXN0LnZvdGVfYXZlcmFnZSksXHJcbiAgICB9O1xyXG4gICAgaWYgKHN0b3JlLmdldFN0YXRlKCkuaG9tZVBhZ2UubW92aWVzLmZpbHRlcigobW92aWUpID0+IG1vdmllLmlkID09PSBkZXNjcmlwdGlvbi5pZCkubGVuZ3RoKSB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZU1vdmllKHZhbHVlcywgZGVzY3JpcHRpb24uaWQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGFkZE1vdmllKHZhbHVlcykpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCh7XHJcbiAgICBnZW5yZXM6IFl1cC5hcnJheShZdXAuc3RyaW5nKCkpLnJlcXVpcmVkKCdHZW5yZXMgZmllbGQgbXVzdCBoYXZlIDEgb3B0aW9uJyksXHJcbiAgICBvdmVydmlldzogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdPdmVydmlldyBpcyByZXF1aXJlZCcpLFxyXG4gICAgcG9zdGVyX3BhdGg6IFl1cC5zdHJpbmcoKS51cmwoJ0ludmFsaWQgdXJsIGFkZHJlc3MnKS5yZXF1aXJlZCgnSW1hZ2UgVVJMIGlzIHJlcXVpcmVkJyksXHJcbiAgICByZWxlYXNlX2RhdGU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRGF0ZSBpcyByZXF1aXJlZCcpLFxyXG4gICAgcnVudGltZTogWXVwLm51bWJlcigpLnR5cGVFcnJvcignVGhlIGF2ZXJhZ2Ugdm90ZSBtdXN0IGJlIGEgbnVtYmVyJykucmVxdWlyZWQoJ1J1bnRpbWUgaXMgcmVxdWlyZWQnKVxyXG4gICAgICAubWluKDAsICdUaGUgcnVudGltZSBtdXN0IGJlIG1vcmUgb3IgZXF1YWwgdG8gMCcpXHJcbiAgICAgIC5tYXgoMTAwMDAsICdUaGUgcnVudGltZSBtdXN0IGJlIGxlc3Mgb3IgZXF1YWwgdG8gMTAwMDAnKSxcclxuICAgIHRpdGxlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ1RpdGxlIGlzIHJlcXVpcmVkJyksXHJcbiAgICB2b3RlX2F2ZXJhZ2U6IFl1cC5udW1iZXIoKS50eXBlRXJyb3IoJ1RoZSBhdmVyYWdlIHZvdGUgbXVzdCBiZSBhIG51bWJlcicpLnJlcXVpcmVkKCdUaGUgYXZlcmFnZSB2b3RlIGlzIHJlcXVpcmVkJylcclxuICAgICAgLm1pbigwLCAnVGhlIGF2ZXJhZ2Ugdm90ZSBtdXN0IGJlIG1vcmUgb3IgZXF1YWwgdG8gMCcpXHJcbiAgICAgIC5tYXgoMTAsICdUaGUgYXZlcmFnZSB2b3RlIG11c3QgYmUgbGVzcyBvciBlcXVhbCB0byAxMCcpLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gPEZvcm1pa1xyXG4gIGluaXRpYWxWYWx1ZXM9e2lucHV0VmFsdWVzfVxyXG4gIHZhbGlkYXRpb25TY2hlbWE9e3ZhbGlkYXRpb25TY2hlbWF9XHJcbiAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IGhhbmRsZUFkZE1vdmllKHZhbHVlcyl9XHJcbiAgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgKHsgaXNTdWJtaXR0aW5nIH0pID0+IDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5FZGl0IE1vdmllPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwidGl0bGVcIiByZW5kZXI9eyhtc2cpID0+IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JfbWVzc2FnZVwiID57bXNnfTwvZGl2Pn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2ZpZWxkIHJlbGVhc2VfZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlbGVhc2VfZGF0ZVwiPlJlbGVhc2UgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWxlYXNlX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWxlYXNlX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJyZWxlYXNlX2RhdGVcIiByZW5kZXI9eyhtc2cpID0+IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JfbWVzc2FnZVwiID57bXNnfTwvZGl2Pn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9zdGVyX3BhdGhcIj5JbWFnZSBVcmw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicG9zdGVyX3BhdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwb3N0ZXJfcGF0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInBvc3Rlcl9wYXRoXCIgcmVuZGVyPXsobXNnKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIiA+e21zZ308L2Rpdj59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBvc3Rlcl9wYXRoXCI+R2VucmVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7IGRpc2FibGVVbmRlcmxpbmU6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3RQcm9wcz17eyBtdWx0aXBsZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbnJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLnNlbGVjdCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J0FjdGlvbid9PkFjdGlvbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnQWR2ZW50dXJlJ30+QWR2ZW50dXJlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydBbmltYXRpb24nfT5BbmltYXRpb248L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J0ZhbWlseSd9PkZhbWlseTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnRHJhbWEnfT5EcmFtYTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnRmFudGFzeSd9PkZhbnRhc3k8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J1JvbWFuY2UnfT5Sb21hbmNlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydTY2llbmNlIGZpY3Rpb24nfT5TY2llbmNlIEZpY3Rpb248L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cImdlbnJlc1wiIHJlbmRlcj17KG1zZykgPT4gPGRpdiBjbGFzc05hbWU9XCJlcnJvcl9tZXNzYWdlXCIgPnttc2d9PC9kaXY+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm92ZXJ2aWV3XCI+T3ZlcnZpZXc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3ZlcnZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdmVydmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cIm92ZXJ2aWV3XCIgcmVuZGVyPXsobXNnKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIiA+e21zZ308L2Rpdj59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZvdGVfYXZlcmFnZVwiPkF2ZXJhZ2UgVm90ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2b3RlX2F2ZXJhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2b3RlX2F2ZXJhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJ2b3RlX2F2ZXJhZ2VcIiByZW5kZXI9eyhtc2cpID0+IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JfbWVzc2FnZVwiID57bXNnfTwvZGl2Pn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2ZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicnVudGltZVwiPlJ1bnRpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicnVudGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJ1bnRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJydW50aW1lXCIgcmVuZGVyPXsobXNnKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIiA+e21zZ308L2Rpdj59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9idXR0b25zX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fcmV2ZXJzZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuYnV0dG9uIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICB9XHJcbiAgICA8L0Zvcm1paz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEhPQyh3aXRoU3R5bGVzKHN0eWxlcykoRWRpdE1vdmllTW9kYWwpKTtcclxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfRklMTVNfRk9SX1JFTkRFUiA9ICdHRVRfQUxMX0ZJTE1TX0ZPUl9SRU5ERVInO1xyXG5leHBvcnQgY29uc3QgU0VMRUNURURfVEFCX0lOREVYID0gJ1NFTEVDVEVEX1RBQl9JTkRFWCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VBUkNIX1RFUk0gPSAnVVBEQVRFX1NFQVJDSF9URVJNJztcclxuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRSA9ICdBRERfTU9WSUUnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFID0gJ1VQREFURV9NT1ZJRSc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUUgPSAnR0VUX01PVklFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGaWxtc0ZvclJlbmRlciA9IChkYXRhLCBzZWFyY2hUZXJtLCBzb3J0QnksIGZpbHRlciwgb2Zmc2V0LCBzaG91bGRVcGRhdGVTdGF0ZSkgPT4gKHtcclxuICB0eXBlOiBHRVRfQUxMX0ZJTE1TX0ZPUl9SRU5ERVIsXHJcbiAgZGF0YSxcclxuICBzZWFyY2hUZXJtLFxyXG4gIHNvcnRCeSxcclxuICBmaWx0ZXIsXHJcbiAgb2Zmc2V0LFxyXG4gIHNob3VsZFVwZGF0ZVN0YXRlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGaWxtQnlJZCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEdFVF9NT1ZJRSxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTZWxlY3RlZEluZGV4ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0VMRUNURURfVEFCX0lOREVYLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlYXJjaFRlcm0gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBVUERBVEVfU0VBUkNIX1RFUk0sXHJcbiAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVzaE1vdmllSW50b0xpc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfTU9WSUUsXHJcbiAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVJbkxpc3QgPSAoZGF0YSwgaWQpID0+ICh7XHJcbiAgdHlwZTogVVBEQVRFX01PVklFLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbiAgaWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRBbGxNb3ZpZXMgPSAodGl0bGUsIHNvcnRCeSwgZmlsdGVyLCBvZmZzZXQsIHNob3VsZFVwZGF0ZVN0YXRlKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tb3ZpZXM/JmxpbWl0PTkmc29ydE9yZGVyPWFzYyR7b2Zmc2V0ID8gYCZvZmZzZXQ9JHtvZmZzZXR9YCA6ICcmb2Zmc2V0PTAnfSR7dGl0bGUgPyBgJmxpbWl0PTM1MDAmc2VhcmNoPSR7dGl0bGV9JnNlYXJjaEJ5PXRpdGxlYCA6ICcnfSR7c29ydEJ5ID09PSAndGl0bGUnID8gJyZzb3J0Qnk9dGl0bGUnIDogc29ydEJ5ID09PSAncmF0aW5nJyA/ICcmc29ydEJ5PXZvdGVfYXZlcmFnZScgOiAnJnNvcnRCeT1yZWxlYXNlX2RhdGUnfSR7ZmlsdGVyID8gYCZmaWx0ZXI9JHtmaWx0ZXJ9YCA6ICcnfWApXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChnZXRGaWxtc0ZvclJlbmRlcihkYXRhLCB0aXRsZSwgc29ydEJ5LCBmaWx0ZXIsIG9mZnNldCwgc2hvdWxkVXBkYXRlU3RhdGUpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUJ5SWQgPSAoaWQpID0+IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvbW92aWVzLyR7aWR9YCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChnZXRGaWxtQnlJZChkYXRhKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTW92aWUgPSAoaWQpID0+IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tb3ZpZXMvJHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICB9KTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKGxvYWRBbGxNb3ZpZXMoJycsICcnLCAnJykpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE1vdmllID0gKG5ld01vdmllKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG5ld01vdmllT2JqZWN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tb3ZpZXMnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3TW92aWUpLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChwdXNoTW92aWVJbnRvTGlzdChuZXdNb3ZpZU9iamVjdCkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllID0gKGRhdGEsIGlkKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGVkaXRlZE1vdmllID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tb3ZpZXMvJywge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5kYXRhLCBpZCB9KSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2godXBkYXRlTW92aWVJbkxpc3QoZWRpdGVkTW92aWUsIGVkaXRlZE1vdmllLmlkKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHsgcm9vdFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpKTtcclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==