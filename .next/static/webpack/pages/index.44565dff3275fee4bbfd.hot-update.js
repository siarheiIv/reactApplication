webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store.js");
/* harmony import */ var _src_pages_homePage_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/pages/homePage/index */ "./src/pages/homePage/index.js");




function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _src_redux_store__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_pages_homePage_index__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC9kZWxldGVNb3ZpZU1vZGFsL2RlbGV0ZU1vdmllTW9kYWwuanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tb3ZpZUxpc3QvZWRpdE1vdmllTW9kYWwvZWRpdE1vdmllTW9kYWwuanN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic3RvcmUiLCJEZWxldGVNb3ZpZU1vZGFsIiwicHJvcHMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRGVsZXRlTW92aWUiLCJkaXNwYXRjaCIsImRlbGV0ZU1vdmllIiwiaWQiLCJNb2RhbEhPQyIsIkVkaXRNb3ZpZU1vZGFsIiwiY2xhc3NlcyIsImlucHV0VmFsdWVzIiwidGl0bGUiLCJyZWxlYXNlX2RhdGUiLCJwb3N0ZXJfcGF0aCIsImdlbnJlcyIsIm92ZXJ2aWV3IiwicnVudGltZSIsInZvdGVfYXZlcmFnZSIsImhhbmRsZUFkZE1vdmllIiwibGlzdCIsInZhbHVlcyIsIk51bWJlciIsImdldFN0YXRlIiwiaG9tZVBhZ2UiLCJtb3ZpZXMiLCJmaWx0ZXIiLCJtb3ZpZSIsImxlbmd0aCIsInVwZGF0ZU1vdmllIiwiYWRkTW92aWUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJ1cmwiLCJ0eXBlRXJyb3IiLCJtaW4iLCJtYXgiLCJpc1N1Ym1pdHRpbmciLCJtc2ciLCJ0aGVtZTEiLCJkaXNhYmxlVW5kZXJsaW5lIiwibXVsdGlwbGUiLCJUZXh0RmllbGQiLCJyb290Iiwic2VsZWN0IiwiYnV0dG9uIiwid2l0aFN0eWxlcyIsInN0eWxlcyIsIkdFVF9BTExfRklMTVNfRk9SX1JFTkRFUiIsIlNFTEVDVEVEX1RBQl9JTkRFWCIsIlVQREFURV9TRUFSQ0hfVEVSTSIsIkFERF9NT1ZJRSIsIlVQREFURV9NT1ZJRSIsIkdFVF9NT1ZJRSIsImdldEZpbG1zRm9yUmVuZGVyIiwiZGF0YSIsInNlYXJjaFRlcm0iLCJzb3J0QnkiLCJvZmZzZXQiLCJzaG91bGRVcGRhdGVTdGF0ZSIsInR5cGUiLCJnZXRGaWxtQnlJZCIsInNldFNlbGVjdGVkSW5kZXgiLCJwYXlsb2FkIiwidXBkYXRlU2VhcmNoVGVybSIsInB1c2hNb3ZpZUludG9MaXN0IiwidXBkYXRlTW92aWVJbkxpc3QiLCJsb2FkQWxsTW92aWVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRNb3ZpZUJ5SWQiLCJyZXNwb25zZSIsIm1ldGhvZCIsIm5ld01vdmllIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmV3TW92aWVPYmplY3QiLCJlZGl0ZWRNb3ZpZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDOUIsc0JBQ0UsMkRBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVDLHdEQUFLQTtBQUF0QixrQkFDRSwyREFBQyxpRUFBRCxPQURGLENBREY7QUFJRDtLQUx1QkQsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQzFCQyxXQUQwQixHQUNHRCxLQURILENBQzFCQyxXQUQwQjtBQUFBLE1BQ2JDLFdBRGEsR0FDR0YsS0FESCxDQUNiRSxXQURhOztBQUdsQyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJMLHdEQUFLLENBQUNNLFFBQU4sQ0FBZUMsa0VBQVcsQ0FBQ0osV0FBVyxDQUFDSyxFQUFiLENBQTFCO0FBQ0FKLGVBQVc7QUFDWixHQUhEOztBQUtBLHNCQUNNLDJEQUFDLDRDQUFELENBQU8sUUFBUCxxQkFDSSxzRkFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksb0hBREosQ0FGSixlQUtJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBUSxhQUFTLEVBQUMsdUJBQWxCO0FBQTBDLFdBQU8sRUFBRUE7QUFBbkQsY0FESixlQUVJO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sRUFBRUM7QUFBcEMsZUFGSixDQUxKLENBRE47QUFZRCxDQXBCRDs7S0FBTUosZ0I7QUFzQlMscUVBQUFRLDZEQUFRLENBQUNSLGdCQUFELENBQXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDUixLQUFELEVBQVc7QUFBQSxNQUN4QkMsV0FEd0IsR0FDY0QsS0FEZCxDQUN4QkMsV0FEd0I7QUFBQSxNQUNYUSxPQURXLEdBQ2NULEtBRGQsQ0FDWFMsT0FEVztBQUFBLE1BQ0ZQLFdBREUsR0FDY0YsS0FEZCxDQUNGRSxXQURFO0FBRWhDLE1BQU1RLFdBQVcsR0FBRztBQUNsQkMsU0FBSyxFQUFFVixXQUFXLENBQUNVLEtBREQ7QUFFbEJDLGdCQUFZLEVBQUVYLFdBQVcsQ0FBQ1csWUFGUjtBQUdsQkMsZUFBVyxFQUFFWixXQUFXLENBQUNZLFdBSFA7QUFJbEJDLFVBQU0sRUFBRWIsV0FBVyxDQUFDYSxNQUpGO0FBS2xCQyxZQUFRLEVBQUVkLFdBQVcsQ0FBQ2MsUUFMSjtBQU1sQkMsV0FBTyxFQUFFZixXQUFXLENBQUNlLE9BTkg7QUFPbEJDLGdCQUFZLEVBQUVoQixXQUFXLENBQUNnQjtBQVBSLEdBQXBCOztBQVVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQy9CLFFBQU1DLE1BQU0sbUNBQ1BELElBRE87QUFDREgsYUFBTyxFQUFFSyxNQUFNLENBQUNGLElBQUksQ0FBQ0gsT0FBTixDQURkO0FBQzhCQyxrQkFBWSxFQUFFSSxNQUFNLENBQUNGLElBQUksQ0FBQ0YsWUFBTjtBQURsRCxNQUFaOztBQUdBLFFBQUluQixxREFBSyxDQUFDd0IsUUFBTixHQUFpQkMsUUFBakIsQ0FBMEJDLE1BQTFCLENBQWlDQyxNQUFqQyxDQUF3QyxVQUFDQyxLQUFEO0FBQUEsYUFBV0EsS0FBSyxDQUFDcEIsRUFBTixLQUFhTCxXQUFXLENBQUNLLEVBQXBDO0FBQUEsS0FBeEMsRUFBZ0ZxQixNQUFwRixFQUE0RjtBQUMxRjdCLDJEQUFLLENBQUNNLFFBQU4sQ0FBZXdCLG1FQUFXLENBQUNSLE1BQUQsRUFBU25CLFdBQVcsQ0FBQ0ssRUFBckIsQ0FBMUI7QUFDRCxLQUZELE1BRU87QUFDTFIsMkRBQUssQ0FBQ00sUUFBTixDQUFleUIsZ0VBQVEsQ0FBQ1QsTUFBRCxDQUF2QjtBQUNEOztBQUNEbEIsZUFBVztBQUNaLEdBVkQ7O0FBWUEsTUFBTTRCLGdCQUFnQixHQUFHQywyQ0FBQSxDQUFXO0FBQ2xDakIsVUFBTSxFQUFFaUIsMENBQUEsQ0FBVUEsMkNBQUEsRUFBVixFQUF3QkMsUUFBeEIsQ0FBaUMsaUNBQWpDLENBRDBCO0FBRWxDakIsWUFBUSxFQUFFZ0IsMkNBQUEsR0FBYUMsUUFBYixDQUFzQixzQkFBdEIsQ0FGd0I7QUFHbENuQixlQUFXLEVBQUVrQiwyQ0FBQSxHQUFhRSxHQUFiLENBQWlCLHFCQUFqQixFQUF3Q0QsUUFBeEMsQ0FBaUQsdUJBQWpELENBSHFCO0FBSWxDcEIsZ0JBQVksRUFBRW1CLDJDQUFBLEdBQWFDLFFBQWIsQ0FBc0Isa0JBQXRCLENBSm9CO0FBS2xDaEIsV0FBTyxFQUFFZSwyQ0FBQSxHQUFhRyxTQUFiLENBQXVCLG1DQUF2QixFQUE0REYsUUFBNUQsQ0FBcUUscUJBQXJFLEVBQ05HLEdBRE0sQ0FDRixDQURFLEVBQ0Msd0NBREQsRUFFTkMsR0FGTSxDQUVGLEtBRkUsRUFFSyw0Q0FGTCxDQUx5QjtBQVFsQ3pCLFNBQUssRUFBRW9CLDJDQUFBLEdBQWFDLFFBQWIsQ0FBc0IsbUJBQXRCLENBUjJCO0FBU2xDZixnQkFBWSxFQUFFYywyQ0FBQSxHQUFhRyxTQUFiLENBQXVCLG1DQUF2QixFQUE0REYsUUFBNUQsQ0FBcUUsOEJBQXJFLEVBQ1hHLEdBRFcsQ0FDUCxDQURPLEVBQ0osNkNBREksRUFFWEMsR0FGVyxDQUVQLEVBRk8sRUFFSCw4Q0FGRztBQVRvQixHQUFYLENBQXpCO0FBY0Esc0JBQU8sMkRBQUMsOENBQUQ7QUFDUCxpQkFBYSxFQUFFMUIsV0FEUjtBQUVQLG9CQUFnQixFQUFFb0IsZ0JBRlg7QUFHUCxZQUFRLEVBQUUsa0JBQUNWLE1BQUQ7QUFBQSxhQUFZRixjQUFjLENBQUNFLE1BQUQsQ0FBMUI7QUFBQTtBQUhILEtBTUc7QUFBQSxRQUFHaUIsWUFBSCxRQUFHQSxZQUFIO0FBQUEsd0JBQXNCLDJEQUFDLDRDQUFELHFCQUNkLG9GQURjLGVBRWQ7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFPLGFBQU8sRUFBQztBQUFmLGVBREosZUFFSSwyREFBQyw2Q0FBRDtBQUNJLGtCQUFZLEVBQUMsS0FEakI7QUFFSSxVQUFJLEVBQUMsT0FGVDtBQUdJLFVBQUksRUFBQyxNQUhUO0FBSUksUUFBRSxFQUFDO0FBSlAsTUFGSixlQVFJLDJEQUFDLG9EQUFEO0FBQWMsVUFBSSxFQUFDLE9BQW5CO0FBQTJCLFlBQU0sRUFBRSxnQkFBQ0MsR0FBRDtBQUFBLDRCQUFTO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQWlDQSxHQUFqQyxDQUFUO0FBQUE7QUFBbkMsTUFSSixDQUZjLGVBWWQ7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFPLGFBQU8sRUFBQztBQUFmLHNCQURKLGVBRUksMkRBQUMsNkNBQUQ7QUFDSSxrQkFBWSxFQUFDLEtBRGpCO0FBRUksVUFBSSxFQUFDLGNBRlQ7QUFHSSxVQUFJLEVBQUMsTUFIVDtBQUlJLFFBQUUsRUFBQztBQUpQLE1BRkosZUFRSSwyREFBQyxvREFBRDtBQUFjLFVBQUksRUFBQyxjQUFuQjtBQUFrQyxZQUFNLEVBQUUsZ0JBQUNBLEdBQUQ7QUFBQSw0QkFBUztBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUFpQ0EsR0FBakMsQ0FBVDtBQUFBO0FBQTFDLE1BUkosQ0FaYyxlQXNCZDtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQU8sYUFBTyxFQUFDO0FBQWYsbUJBREosZUFFSSwyREFBQyw2Q0FBRDtBQUNJLGtCQUFZLEVBQUMsS0FEakI7QUFFSSxVQUFJLEVBQUMsYUFGVDtBQUdJLFVBQUksRUFBQyxNQUhUO0FBSUksUUFBRSxFQUFDO0FBSlAsTUFGSixlQVFJLDJEQUFDLG9EQUFEO0FBQWMsVUFBSSxFQUFDLGFBQW5CO0FBQWlDLFlBQU0sRUFBRSxnQkFBQ0EsR0FBRDtBQUFBLDRCQUFTO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQWlDQSxHQUFqQyxDQUFUO0FBQUE7QUFBekMsTUFSSixDQXRCYyxlQWdDZDtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQU8sYUFBTyxFQUFDO0FBQWYsZ0JBREosZUFFSSwyREFBQywwRUFBRDtBQUFrQixXQUFLLEVBQUVDLDJEQUFNQTtBQUEvQixvQkFDSSwyREFBQyw2Q0FBRDtBQUNJLGdCQUFVLEVBQUU7QUFBRUMsd0JBQWdCLEVBQUU7QUFBcEIsT0FEaEI7QUFFSSxpQkFBVyxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUZqQjtBQUdJLFlBQU0sTUFIVjtBQUlJLFFBQUUsRUFBRUMsb0VBSlI7QUFLSSxVQUFJLEVBQUMsUUFMVDtBQU1JLGFBQU8sRUFBRTtBQUFFQyxZQUFJLEVBQUVsQyxPQUFPLENBQUNtQztBQUFoQjtBQU5iLG9CQVFJLDJEQUFDLDJEQUFEO0FBQVUsV0FBSyxFQUFFO0FBQWpCLGdCQVJKLGVBU0ksMkRBQUMsMkRBQUQ7QUFBVSxXQUFLLEVBQUU7QUFBakIsbUJBVEosZUFVSSwyREFBQywyREFBRDtBQUFVLFdBQUssRUFBRTtBQUFqQixtQkFWSixlQVdJLDJEQUFDLDJEQUFEO0FBQVUsV0FBSyxFQUFFO0FBQWpCLGdCQVhKLGVBWUksMkRBQUMsMkRBQUQ7QUFBVSxXQUFLLEVBQUU7QUFBakIsZUFaSixlQWFJLDJEQUFDLDJEQUFEO0FBQVUsV0FBSyxFQUFFO0FBQWpCLGlCQWJKLGVBY0ksMkRBQUMsMkRBQUQ7QUFBVSxXQUFLLEVBQUU7QUFBakIsaUJBZEosZUFlSSwyREFBQywyREFBRDtBQUFVLFdBQUssRUFBRTtBQUFqQix5QkFmSixDQURKLGVBa0JJLDJEQUFDLG9EQUFEO0FBQWMsVUFBSSxFQUFDLFFBQW5CO0FBQTRCLFlBQU0sRUFBRSxnQkFBQ04sR0FBRDtBQUFBLDRCQUFTO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQWlDQSxHQUFqQyxDQUFUO0FBQUE7QUFBcEMsTUFsQkosQ0FGSixDQWhDYyxlQXVEZDtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQU8sYUFBTyxFQUFDO0FBQWYsa0JBREosZUFFSSwyREFBQyw2Q0FBRDtBQUNJLGtCQUFZLEVBQUMsS0FEakI7QUFFSSxVQUFJLEVBQUMsVUFGVDtBQUdJLFVBQUksRUFBQyxNQUhUO0FBSUksUUFBRSxFQUFDO0FBSlAsTUFGSixlQVFJLDJEQUFDLG9EQUFEO0FBQWMsVUFBSSxFQUFDLFVBQW5CO0FBQThCLFlBQU0sRUFBRSxnQkFBQ0EsR0FBRDtBQUFBLDRCQUFTO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQWlDQSxHQUFqQyxDQUFUO0FBQUE7QUFBdEMsTUFSSixDQXZEYyxlQWlFZDtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQU8sYUFBTyxFQUFDO0FBQWYsc0JBREosZUFFSSwyREFBQyw2Q0FBRDtBQUNJLGtCQUFZLEVBQUMsS0FEakI7QUFFSSxVQUFJLEVBQUMsY0FGVDtBQUdJLFVBQUksRUFBQyxNQUhUO0FBSUksUUFBRSxFQUFDO0FBSlAsTUFGSixlQVFJLDJEQUFDLG9EQUFEO0FBQWMsVUFBSSxFQUFDLGNBQW5CO0FBQWtDLFlBQU0sRUFBRSxnQkFBQ0EsR0FBRDtBQUFBLDRCQUFTO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQWlDQSxHQUFqQyxDQUFUO0FBQUE7QUFBMUMsTUFSSixDQWpFYyxlQTJFZDtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQU8sYUFBTyxFQUFDO0FBQWYsaUJBREosZUFFSSwyREFBQyw2Q0FBRDtBQUNJLGtCQUFZLEVBQUMsS0FEakI7QUFFSSxVQUFJLEVBQUMsU0FGVDtBQUdJLFVBQUksRUFBQyxNQUhUO0FBSUksUUFBRSxFQUFDO0FBSlAsTUFGSixlQVFJLDJEQUFDLG9EQUFEO0FBQWMsVUFBSSxFQUFDLFNBQW5CO0FBQTZCLFlBQU0sRUFBRSxnQkFBQ0EsR0FBRDtBQUFBLDRCQUFTO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQWlDQSxHQUFqQyxDQUFUO0FBQUE7QUFBckMsTUFSSixDQTNFYyxlQXFGZDtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQVEsZUFBUyxFQUFDLHVCQUFsQjtBQUEwQyxhQUFPLEVBQUVwQztBQUFuRCxlQURKLGVBRUksMkRBQUMseURBQUQ7QUFDSSxhQUFPLEVBQUU7QUFBRXlDLFlBQUksRUFBRWxDLE9BQU8sQ0FBQ29DO0FBQWhCLE9BRGI7QUFFSSxVQUFJLEVBQUMsUUFGVDtBQUdJLGNBQVEsRUFBRVI7QUFIZCxnQkFGSixDQXJGYyxDQUF0QjtBQUFBLEdBTkgsQ0FBUDtBQXdHRCxDQTlJRDs7S0FBTTdCLGM7QUFnSlNELDZIQUFRLENBQUN1Qyx1RUFBVSxDQUFDQywyREFBRCxDQUFWLENBQW1CdkMsY0FBbkIsQ0FBRCxDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlKQTtBQUVPLElBQU13Qyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUFtQkMsTUFBbkIsRUFBMkJoQyxNQUEzQixFQUFtQ2lDLE1BQW5DLEVBQTJDQyxpQkFBM0M7QUFBQSxTQUFrRTtBQUNqR0MsUUFBSSxFQUFFWix3QkFEMkY7QUFFakdPLFFBQUksRUFBSkEsSUFGaUc7QUFHakdDLGNBQVUsRUFBVkEsVUFIaUc7QUFJakdDLFVBQU0sRUFBTkEsTUFKaUc7QUFLakdoQyxVQUFNLEVBQU5BLE1BTGlHO0FBTWpHaUMsVUFBTSxFQUFOQSxNQU5pRztBQU9qR0MscUJBQWlCLEVBQWpCQTtBQVBpRyxHQUFsRTtBQUFBLENBQTFCO0FBVUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sSUFBRDtBQUFBLFNBQVc7QUFDcENLLFFBQUksRUFBRVAsU0FEOEI7QUFFcENFLFFBQUksRUFBSkE7QUFGb0MsR0FBWDtBQUFBLENBQXBCO0FBS0EsSUFBTU8sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDUCxJQUFEO0FBQUEsU0FBVztBQUN6Q0ssUUFBSSxFQUFFWCxrQkFEbUM7QUFFekNjLFdBQU8sRUFBRVI7QUFGZ0MsR0FBWDtBQUFBLENBQXpCO0FBS0EsSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDVCxJQUFEO0FBQUEsU0FBVztBQUN6Q0ssUUFBSSxFQUFFVixrQkFEbUM7QUFFekNhLFdBQU8sRUFBRVI7QUFGZ0MsR0FBWDtBQUFBLENBQXpCO0FBS0EsSUFBTVUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDVixJQUFEO0FBQUEsU0FBVztBQUMxQ0ssUUFBSSxFQUFFVCxTQURvQztBQUUxQ1ksV0FBTyxFQUFFUjtBQUZpQyxHQUFYO0FBQUEsQ0FBMUI7QUFLQSxJQUFNVyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNYLElBQUQsRUFBT2pELEVBQVA7QUFBQSxTQUFlO0FBQzlDc0QsUUFBSSxFQUFFUixZQUR3QztBQUU5Q1csV0FBTyxFQUFFUixJQUZxQztBQUc5Q2pELE1BQUUsRUFBRkE7QUFIOEMsR0FBZjtBQUFBLENBQTFCO0FBTUEsSUFBTTZELGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ3hELEtBQUQsRUFBUThDLE1BQVIsRUFBZ0JoQyxNQUFoQixFQUF3QmlDLE1BQXhCLEVBQWdDQyxpQkFBaEM7QUFBQSw4RUFBc0Q7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFeERTLEtBQUssOERBQXVEVixNQUFNLHFCQUFjQSxNQUFkLElBQXlCLFdBQXRGLFNBQW9HL0MsS0FBSyxnQ0FBeUJBLEtBQXpCLHVCQUFrRCxFQUEzSixTQUFnSzhDLE1BQU0sS0FBSyxPQUFYLEdBQXFCLGVBQXJCLEdBQXVDQSxNQUFNLEtBQUssUUFBWCxHQUFzQixzQkFBdEIsR0FBK0Msc0JBQXRQLFNBQStRaEMsTUFBTSxxQkFBY0EsTUFBZCxJQUF5QixFQUE5UyxFQUFMLENBQ3BCNEMsSUFEb0IsQ0FDZixVQUFDQyxJQUFEO0FBQUEscUJBQVVBLElBQUksQ0FBQ0MsSUFBTCxFQUFWO0FBQUEsYUFEZSxDQUZ3RDs7QUFBQTtBQUFBO0FBRXZFaEIsZ0JBRnVFLHFCQUV2RUEsSUFGdUU7QUFJL0V6RCwyREFBSyxDQUFDTSxRQUFOLENBQWVrRCxpQkFBaUIsQ0FBQ0MsSUFBRCxFQUFPNUMsS0FBUCxFQUFjOEMsTUFBZCxFQUFzQmhDLE1BQXRCLEVBQThCaUMsTUFBOUIsRUFBc0NDLGlCQUF0QyxDQUFoQztBQUorRTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU0vRWEsbUJBQU8sQ0FBQ0MsS0FBUjs7QUFOK0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdEQ7QUFBQSxDQUF0QjtBQVVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNwRSxFQUFEO0FBQUEsOEVBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUViOEQsS0FBSyx3Q0FBaUM5RCxFQUFqQyxFQUFMLENBQTRDK0QsSUFBNUMsQ0FBaUQsVUFBQ00sUUFBRDtBQUFBLHFCQUFjQSxRQUFRLENBQUNKLElBQVQsRUFBZDtBQUFBLGFBQWpELENBRmE7O0FBQUE7QUFFMUJoQixnQkFGMEI7QUFHaEN6RCwyREFBSyxDQUFDTSxRQUFOLENBQWV5RCxXQUFXLENBQUNOLElBQUQsQ0FBMUI7QUFIZ0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLaENpQixtQkFBTyxDQUFDQyxLQUFSOztBQUxnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFSO0FBQUEsQ0FBckI7QUFTQSxJQUFNcEUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRDtBQUFBLDhFQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXpCOEQsS0FBSyx3Q0FBaUM5RCxFQUFqQyxHQUF1QztBQUNoRHNFLG9CQUFNLEVBQUU7QUFEd0MsYUFBdkMsQ0FGb0I7O0FBQUE7QUFLL0I5RSwyREFBSyxDQUFDTSxRQUFOLENBQWUrRCxhQUFhLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULENBQTVCO0FBTCtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTy9CSyxtQkFBTyxDQUFDQyxLQUFSOztBQVArQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFSO0FBQUEsQ0FBcEI7QUFXQSxJQUFNNUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2dELFFBQUQ7QUFBQSw4RUFBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUxULEtBQUssQ0FBQyw4QkFBRCxFQUFpQztBQUNqRVEsb0JBQU0sRUFBRSxNQUR5RDtBQUVqRUUscUJBQU8sRUFBRTtBQUFFLGdDQUFnQjtBQUFsQixlQUZ3RDtBQUdqRUMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFFBQWY7QUFIMkQsYUFBakMsQ0FBTCxDQUkxQlIsSUFKMEIsQ0FJckIsVUFBQ00sUUFBRDtBQUFBLHFCQUFjQSxRQUFRLENBQUNKLElBQVQsRUFBZDtBQUFBLGFBSnFCLENBRks7O0FBQUE7QUFFNUJXLDBCQUY0QjtBQU9sQ3BGLDJEQUFLLENBQUNNLFFBQU4sQ0FBZTZELGlCQUFpQixDQUFDaUIsY0FBRCxDQUFoQztBQVBrQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNsQ1YsbUJBQU8sQ0FBQ0MsS0FBUjs7QUFUa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZDtBQUFBLENBQWpCO0FBYUEsSUFBTTdDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUMyQixJQUFELEVBQU9qRCxFQUFQO0FBQUEsOEVBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVYOEQsS0FBSyxDQUFDLCtCQUFELEVBQWtDO0FBQy9EUSxvQkFBTSxFQUFFLEtBRHVEO0FBRS9ERSxxQkFBTyxFQUFFO0FBQUUsZ0NBQWdCO0FBQWxCLGVBRnNEO0FBRy9EQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsaUNBQW9CMUIsSUFBcEI7QUFBMEJqRCxrQkFBRSxFQUFGQTtBQUExQjtBQUh5RCxhQUFsQyxDQUFMLENBSXZCK0QsSUFKdUIsQ0FJbEIsVUFBQ00sUUFBRDtBQUFBLHFCQUFjQSxRQUFRLENBQUNKLElBQVQsRUFBZDtBQUFBLGFBSmtCLENBRlc7O0FBQUE7QUFFL0JZLHVCQUYrQjtBQU9yQ3JGLDJEQUFLLENBQUNNLFFBQU4sQ0FBZThELGlCQUFpQixDQUFDaUIsV0FBRCxFQUFjQSxXQUFXLENBQUM3RSxFQUExQixDQUFoQztBQVBxQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNyQ2tFLG1CQUFPLENBQUNDLEtBQVI7O0FBVHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWQ7QUFBQSxDQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTTNFLEtBQUssR0FBR3NGLHlEQUFXLENBQUNDLDJEQUFELEVBQWNDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDQyxtREFBRCxDQUFoQixDQUFqQyxDQUF6QjtBQUNlMUYsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ1NjVkZmYzMjc1ZmVlNGJiZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3JjL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL3NyYy9wYWdlcy9ob21lUGFnZS9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxIb21lUGFnZSAvPlxyXG4gICAgPC9Qcm92aWRlcj4pO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbEhPQyBmcm9tICcuLi8uLi9ob2MvbW9kYWxIT0MnO1xyXG5pbXBvcnQgeyBkZWxldGVNb3ZpZSB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vLi4vcmVkdXgvc3RvcmUnO1xyXG5cclxuY29uc3QgRGVsZXRlTW92aWVNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGVzY3JpcHRpb24sIGhhbmRsZUNsaWNrIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTW92aWUgPSAoKSA9PiB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChkZWxldGVNb3ZpZShkZXNjcmlwdGlvbi5pZCkpO1xyXG4gICAgaGFuZGxlQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGgyPkRlbGV0ZSBNb3ZpZTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxwPkFyZSB0b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBtb3ZpZT88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX2J1dHRvbnNfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b25fcmV2ZXJzZVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRGVsZXRlTW92aWV9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxIT0MoRGVsZXRlTW92aWVNb2RhbCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgRm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlLFxyXG59IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgTXVpVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi8uLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IGFkZE1vdmllLCB1cGRhdGVNb3ZpZSB9IGZyb20gJy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgTW9kYWxIT0MgZnJvbSAnLi4vLi4vaG9jL21vZGFsSE9DJztcclxuaW1wb3J0IHsgc3R5bGVzLCB0aGVtZTEgfSBmcm9tICcuL3N0eWxlcy1tYXRlcmlhbC11aSc7XHJcblxyXG5jb25zdCBFZGl0TW92aWVNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGVzY3JpcHRpb24sIGNsYXNzZXMsIGhhbmRsZUNsaWNrIH0gPSBwcm9wcztcclxuICBjb25zdCBpbnB1dFZhbHVlcyA9IHtcclxuICAgIHRpdGxlOiBkZXNjcmlwdGlvbi50aXRsZSxcclxuICAgIHJlbGVhc2VfZGF0ZTogZGVzY3JpcHRpb24ucmVsZWFzZV9kYXRlLFxyXG4gICAgcG9zdGVyX3BhdGg6IGRlc2NyaXB0aW9uLnBvc3Rlcl9wYXRoLFxyXG4gICAgZ2VucmVzOiBkZXNjcmlwdGlvbi5nZW5yZXMsXHJcbiAgICBvdmVydmlldzogZGVzY3JpcHRpb24ub3ZlcnZpZXcsXHJcbiAgICBydW50aW1lOiBkZXNjcmlwdGlvbi5ydW50aW1lLFxyXG4gICAgdm90ZV9hdmVyYWdlOiBkZXNjcmlwdGlvbi52b3RlX2F2ZXJhZ2UsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkTW92aWUgPSAobGlzdCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVzID0ge1xyXG4gICAgICAuLi5saXN0LCBydW50aW1lOiBOdW1iZXIobGlzdC5ydW50aW1lKSwgdm90ZV9hdmVyYWdlOiBOdW1iZXIobGlzdC52b3RlX2F2ZXJhZ2UpLFxyXG4gICAgfTtcclxuICAgIGlmIChzdG9yZS5nZXRTdGF0ZSgpLmhvbWVQYWdlLm1vdmllcy5maWx0ZXIoKG1vdmllKSA9PiBtb3ZpZS5pZCA9PT0gZGVzY3JpcHRpb24uaWQpLmxlbmd0aCkge1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVNb3ZpZSh2YWx1ZXMsIGRlc2NyaXB0aW9uLmlkKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yZS5kaXNwYXRjaChhZGRNb3ZpZSh2YWx1ZXMpKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3Qoe1xyXG4gICAgZ2VucmVzOiBZdXAuYXJyYXkoWXVwLnN0cmluZygpKS5yZXF1aXJlZCgnR2VucmVzIGZpZWxkIG11c3QgaGF2ZSAxIG9wdGlvbicpLFxyXG4gICAgb3ZlcnZpZXc6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnT3ZlcnZpZXcgaXMgcmVxdWlyZWQnKSxcclxuICAgIHBvc3Rlcl9wYXRoOiBZdXAuc3RyaW5nKCkudXJsKCdJbnZhbGlkIHVybCBhZGRyZXNzJykucmVxdWlyZWQoJ0ltYWdlIFVSTCBpcyByZXF1aXJlZCcpLFxyXG4gICAgcmVsZWFzZV9kYXRlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoJ0RhdGUgaXMgcmVxdWlyZWQnKSxcclxuICAgIHJ1bnRpbWU6IFl1cC5udW1iZXIoKS50eXBlRXJyb3IoJ1RoZSBhdmVyYWdlIHZvdGUgbXVzdCBiZSBhIG51bWJlcicpLnJlcXVpcmVkKCdSdW50aW1lIGlzIHJlcXVpcmVkJylcclxuICAgICAgLm1pbigwLCAnVGhlIHJ1bnRpbWUgbXVzdCBiZSBtb3JlIG9yIGVxdWFsIHRvIDAnKVxyXG4gICAgICAubWF4KDEwMDAwLCAnVGhlIHJ1bnRpbWUgbXVzdCBiZSBsZXNzIG9yIGVxdWFsIHRvIDEwMDAwJyksXHJcbiAgICB0aXRsZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCdUaXRsZSBpcyByZXF1aXJlZCcpLFxyXG4gICAgdm90ZV9hdmVyYWdlOiBZdXAubnVtYmVyKCkudHlwZUVycm9yKCdUaGUgYXZlcmFnZSB2b3RlIG11c3QgYmUgYSBudW1iZXInKS5yZXF1aXJlZCgnVGhlIGF2ZXJhZ2Ugdm90ZSBpcyByZXF1aXJlZCcpXHJcbiAgICAgIC5taW4oMCwgJ1RoZSBhdmVyYWdlIHZvdGUgbXVzdCBiZSBtb3JlIG9yIGVxdWFsIHRvIDAnKVxyXG4gICAgICAubWF4KDEwLCAnVGhlIGF2ZXJhZ2Ugdm90ZSBtdXN0IGJlIGxlc3Mgb3IgZXF1YWwgdG8gMTAnKSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIDxGb3JtaWtcclxuICBpbml0aWFsVmFsdWVzPXtpbnB1dFZhbHVlc31cclxuICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxyXG4gIG9uU3VibWl0PXsodmFsdWVzKSA9PiBoYW5kbGVBZGRNb3ZpZSh2YWx1ZXMpfVxyXG4gID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICh7IGlzU3VibWl0dGluZyB9KSA9PiA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+RWRpdCBNb3ZpZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInRpdGxlXCIgcmVuZGVyPXsobXNnKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIiA+e21zZ308L2Rpdj59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9maWVsZCByZWxlYXNlX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWxlYXNlX2RhdGVcIj5SZWxlYXNlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVsZWFzZV9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVsZWFzZV9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicmVsZWFzZV9kYXRlXCIgcmVuZGVyPXsobXNnKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIiA+e21zZ308L2Rpdj59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBvc3Rlcl9wYXRoXCI+SW1hZ2UgVXJsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBvc3Rlcl9wYXRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicG9zdGVyX3BhdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJwb3N0ZXJfcGF0aFwiIHJlbmRlcj17KG1zZykgPT4gPGRpdiBjbGFzc05hbWU9XCJlcnJvcl9tZXNzYWdlXCIgPnttc2d9PC9kaXY+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb3N0ZXJfcGF0aFwiPkdlbnJlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0UHJvcHM9e3sgbXVsdGlwbGU6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZW5yZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlcy5zZWxlY3QgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydBY3Rpb24nfT5BY3Rpb248L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J0FkdmVudHVyZSd9PkFkdmVudHVyZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnQW5pbWF0aW9uJ30+QW5pbWF0aW9uPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydGYW1pbHknfT5GYW1pbHk8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J0RyYW1hJ30+RHJhbWE8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J0ZhbnRhc3knfT5GYW50YXN5PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9eydSb21hbmNlJ30+Um9tYW5jZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnU2NpZW5jZSBmaWN0aW9uJ30+U2NpZW5jZSBGaWN0aW9uPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJnZW5yZXNcIiByZW5kZXI9eyhtc2cpID0+IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JfbWVzc2FnZVwiID57bXNnfTwvZGl2Pn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdmVydmlld1wiPk92ZXJ2aWV3PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm92ZXJ2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3ZlcnZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJvdmVydmlld1wiIHJlbmRlcj17KG1zZykgPT4gPGRpdiBjbGFzc05hbWU9XCJlcnJvcl9tZXNzYWdlXCIgPnttc2d9PC9kaXY+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ2b3RlX2F2ZXJhZ2VcIj5BdmVyYWdlIFZvdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidm90ZV9hdmVyYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidm90ZV9hdmVyYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwidm90ZV9hdmVyYWdlXCIgcmVuZGVyPXsobXNnKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIiA+e21zZ308L2Rpdj59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJ1bnRpbWVcIj5SdW50aW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJ1bnRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJydW50aW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicnVudGltZVwiIHJlbmRlcj17KG1zZykgPT4gPGRpdiBjbGFzc05hbWU9XCJlcnJvcl9tZXNzYWdlXCIgPnttc2d9PC9kaXY+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfYnV0dG9uc19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uX3JldmVyc2VcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+UmVzZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmJ1dHRvbiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgfVxyXG4gICAgPC9Gb3JtaWs+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxIT0Mod2l0aFN0eWxlcyhzdHlsZXMpKEVkaXRNb3ZpZU1vZGFsKSk7XHJcbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX0ZJTE1TX0ZPUl9SRU5ERVIgPSAnR0VUX0FMTF9GSUxNU19GT1JfUkVOREVSJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX1RBQl9JTkRFWCA9ICdTRUxFQ1RFRF9UQUJfSU5ERVgnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NFQVJDSF9URVJNID0gJ1VQREFURV9TRUFSQ0hfVEVSTSc7XHJcbmV4cG9ydCBjb25zdCBBRERfTU9WSUUgPSAnQUREX01PVklFJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9NT1ZJRSA9ICdVUERBVEVfTU9WSUUnO1xyXG5leHBvcnQgY29uc3QgR0VUX01PVklFID0gJ0dFVF9NT1ZJRSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmlsbXNGb3JSZW5kZXIgPSAoZGF0YSwgc2VhcmNoVGVybSwgc29ydEJ5LCBmaWx0ZXIsIG9mZnNldCwgc2hvdWxkVXBkYXRlU3RhdGUpID0+ICh7XHJcbiAgdHlwZTogR0VUX0FMTF9GSUxNU19GT1JfUkVOREVSLFxyXG4gIGRhdGEsXHJcbiAgc2VhcmNoVGVybSxcclxuICBzb3J0QnksXHJcbiAgZmlsdGVyLFxyXG4gIG9mZnNldCxcclxuICBzaG91bGRVcGRhdGVTdGF0ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmlsbUJ5SWQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBHRVRfTU9WSUUsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRJbmRleCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFNFTEVDVEVEX1RBQl9JTkRFWCxcclxuICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTZWFyY2hUZXJtID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVVBEQVRFX1NFQVJDSF9URVJNLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHB1c2hNb3ZpZUludG9MaXN0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX01PVklFLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllSW5MaXN0ID0gKGRhdGEsIGlkKSA9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9NT1ZJRSxcclxuICBwYXlsb2FkOiBkYXRhLFxyXG4gIGlkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQWxsTW92aWVzID0gKHRpdGxlLCBzb3J0QnksIGZpbHRlciwgb2Zmc2V0LCBzaG91bGRVcGRhdGVTdGF0ZSkgPT4gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvbW92aWVzPyZsaW1pdD05JnNvcnRPcmRlcj1hc2Mke29mZnNldCA/IGAmb2Zmc2V0PSR7b2Zmc2V0fWAgOiAnJm9mZnNldD0wJ30ke3RpdGxlID8gYCZsaW1pdD0zNTAwJnNlYXJjaD0ke3RpdGxlfSZzZWFyY2hCeT10aXRsZWAgOiAnJ30ke3NvcnRCeSA9PT0gJ3RpdGxlJyA/ICcmc29ydEJ5PXRpdGxlJyA6IHNvcnRCeSA9PT0gJ3JhdGluZycgPyAnJnNvcnRCeT12b3RlX2F2ZXJhZ2UnIDogJyZzb3J0Qnk9cmVsZWFzZV9kYXRlJ30ke2ZpbHRlciA/IGAmZmlsdGVyPSR7ZmlsdGVyfWAgOiAnJ31gKVxyXG4gICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goZ2V0RmlsbXNGb3JSZW5kZXIoZGF0YSwgdGl0bGUsIHNvcnRCeSwgZmlsdGVyLCBvZmZzZXQsIHNob3VsZFVwZGF0ZVN0YXRlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW92aWVCeUlkID0gKGlkKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL21vdmllcy8ke2lkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goZ2V0RmlsbUJ5SWQoZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1vdmllID0gKGlkKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvbW92aWVzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgfSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChsb2FkQWxsTW92aWVzKCcnLCAnJywgJycpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRNb3ZpZSA9IChuZXdNb3ZpZSkgPT4gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBuZXdNb3ZpZU9iamVjdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvbW92aWVzJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld01vdmllKSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2gocHVzaE1vdmllSW50b0xpc3QobmV3TW92aWVPYmplY3QpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZSA9IChkYXRhLCBpZCkgPT4gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBlZGl0ZWRNb3ZpZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvbW92aWVzLycsIHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgLi4uZGF0YSwgaWQgfSksXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZU1vdmllSW5MaXN0KGVkaXRlZE1vdmllLCBlZGl0ZWRNb3ZpZS5pZCkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB7IHJvb3RSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJzb3VyY2VSb290IjoiIn0=