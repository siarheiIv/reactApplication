webpackHotUpdate_N_E("pages/index",{

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
            _store__WEBPACK_IMPORTED_MODULE_11__["store"].dispatch(getFilmsForRender(data, title, sortBy, filter, offset, shouldUpdateState));
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
            _store__WEBPACK_IMPORTED_MODULE_11__["store"].dispatch(getFilmById(data));
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
            _store__WEBPACK_IMPORTED_MODULE_11__["store"].dispatch(loadAllMovies('', '', ''));
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
            _store__WEBPACK_IMPORTED_MODULE_11__["store"].dispatch(pushMovieIntoList(newMovieObject));
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
            _store__WEBPACK_IMPORTED_MODULE_11__["store"].dispatch(updateMovieInList(editedMovie, editedMovie.id));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FjdGlvbnMuanMiXSwibmFtZXMiOlsiR0VUX0FMTF9GSUxNU19GT1JfUkVOREVSIiwiU0VMRUNURURfVEFCX0lOREVYIiwiVVBEQVRFX1NFQVJDSF9URVJNIiwiQUREX01PVklFIiwiVVBEQVRFX01PVklFIiwiR0VUX01PVklFIiwiZ2V0RmlsbXNGb3JSZW5kZXIiLCJkYXRhIiwic2VhcmNoVGVybSIsInNvcnRCeSIsImZpbHRlciIsIm9mZnNldCIsInNob3VsZFVwZGF0ZVN0YXRlIiwidHlwZSIsImdldEZpbG1CeUlkIiwic2V0U2VsZWN0ZWRJbmRleCIsInBheWxvYWQiLCJ1cGRhdGVTZWFyY2hUZXJtIiwicHVzaE1vdmllSW50b0xpc3QiLCJ1cGRhdGVNb3ZpZUluTGlzdCIsImlkIiwibG9hZEFsbE1vdmllcyIsInRpdGxlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJzdG9yZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImVycm9yIiwiZ2V0TW92aWVCeUlkIiwicmVzcG9uc2UiLCJkZWxldGVNb3ZpZSIsIm1ldGhvZCIsImFkZE1vdmllIiwibmV3TW92aWUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdNb3ZpZU9iamVjdCIsInVwZGF0ZU1vdmllIiwiZWRpdGVkTW92aWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUVBLElBQU1DLGlC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QUE7QUFFNUJlLDBCQUY0QjtBQU9sQ2QseURBQUssQ0FBQ0MsUUFBTixDQUFlVixpQkFBaUIsQ0FBQ3VCLGNBQUQsQ0FBaEM7QUFQa0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFTbENaLG1CQUFPLENBQUNDLEtBQVI7O0FBVGtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWQ7QUFBQSxDQUFqQjtBQWFBLElBQU1ZLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNuQyxJQUFELEVBQU9hLEVBQVA7QUFBQSw4RUFBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVhHLEtBQUssQ0FBQywrQkFBRCxFQUFrQztBQUMvRFcsb0JBQU0sRUFBRSxLQUR1RDtBQUUvREcscUJBQU8sRUFBRTtBQUFFLGdDQUFnQjtBQUFsQixlQUZzRDtBQUcvREMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLGlDQUFvQmpDLElBQXBCO0FBQTBCYSxrQkFBRSxFQUFGQTtBQUExQjtBQUh5RCxhQUFsQyxDQUFMLENBSXZCSSxJQUp1QixDQUlsQixVQUFDUSxRQUFEO0FBQUEscUJBQWNBLFFBQVEsQ0FBQ04sSUFBVCxFQUFkO0FBQUEsYUFKa0IsQ0FGVzs7QUFBQTtBQUUvQmlCLHVCQUYrQjtBQU9yQ2hCLHlEQUFLLENBQUNDLFFBQU4sQ0FBZVQsaUJBQWlCLENBQUN3QixXQUFELEVBQWNBLFdBQVcsQ0FBQ3ZCLEVBQTFCLENBQWhDO0FBUHFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU3JDUyxtQkFBTyxDQUFDQyxLQUFSOztBQVRxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFkO0FBQUEsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWEyYjczZjE4NDhlODNhYzkyMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9GSUxNU19GT1JfUkVOREVSID0gJ0dFVF9BTExfRklMTVNfRk9SX1JFTkRFUic7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9UQUJfSU5ERVggPSAnU0VMRUNURURfVEFCX0lOREVYJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9TRUFSQ0hfVEVSTSA9ICdVUERBVEVfU0VBUkNIX1RFUk0nO1xyXG5leHBvcnQgY29uc3QgQUREX01PVklFID0gJ0FERF9NT1ZJRSc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTU9WSUUgPSAnVVBEQVRFX01PVklFJztcclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRSA9ICdHRVRfTU9WSUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZpbG1zRm9yUmVuZGVyID0gKGRhdGEsIHNlYXJjaFRlcm0sIHNvcnRCeSwgZmlsdGVyLCBvZmZzZXQsIHNob3VsZFVwZGF0ZVN0YXRlKSA9PiAoe1xyXG4gIHR5cGU6IEdFVF9BTExfRklMTVNfRk9SX1JFTkRFUixcclxuICBkYXRhLFxyXG4gIHNlYXJjaFRlcm0sXHJcbiAgc29ydEJ5LFxyXG4gIGZpbHRlcixcclxuICBvZmZzZXQsXHJcbiAgc2hvdWxkVXBkYXRlU3RhdGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZpbG1CeUlkID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogR0VUX01PVklFLFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkSW5kZXggPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBTRUxFQ1RFRF9UQUJfSU5ERVgsXHJcbiAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2VhcmNoVGVybSA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9TRUFSQ0hfVEVSTSxcclxuICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBwdXNoTW92aWVJbnRvTGlzdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9NT1ZJRSxcclxuICBwYXlsb2FkOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNb3ZpZUluTGlzdCA9IChkYXRhLCBpZCkgPT4gKHtcclxuICB0eXBlOiBVUERBVEVfTU9WSUUsXHJcbiAgcGF5bG9hZDogZGF0YSxcclxuICBpZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEFsbE1vdmllcyA9ICh0aXRsZSwgc29ydEJ5LCBmaWx0ZXIsIG9mZnNldCwgc2hvdWxkVXBkYXRlU3RhdGUpID0+IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL21vdmllcz8mbGltaXQ9OSZzb3J0T3JkZXI9YXNjJHtvZmZzZXQgPyBgJm9mZnNldD0ke29mZnNldH1gIDogJyZvZmZzZXQ9MCd9JHt0aXRsZSA/IGAmbGltaXQ9MzUwMCZzZWFyY2g9JHt0aXRsZX0mc2VhcmNoQnk9dGl0bGVgIDogJyd9JHtzb3J0QnkgPT09ICd0aXRsZScgPyAnJnNvcnRCeT10aXRsZScgOiBzb3J0QnkgPT09ICdyYXRpbmcnID8gJyZzb3J0Qnk9dm90ZV9hdmVyYWdlJyA6ICcmc29ydEJ5PXJlbGVhc2VfZGF0ZSd9JHtmaWx0ZXIgPyBgJmZpbHRlcj0ke2ZpbHRlcn1gIDogJyd9YClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKGdldEZpbG1zRm9yUmVuZGVyKGRhdGEsIHRpdGxlLCBzb3J0QnksIGZpbHRlciwgb2Zmc2V0LCBzaG91bGRVcGRhdGVTdGF0ZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmllQnlJZCA9IChpZCkgPT4gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tb3ZpZXMvJHtpZH1gKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKGdldEZpbG1CeUlkKGRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZSA9IChpZCkgPT4gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL21vdmllcy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgIH0pO1xyXG4gICAgc3RvcmUuZGlzcGF0Y2gobG9hZEFsbE1vdmllcygnJywgJycsICcnKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTW92aWUgPSAobmV3TW92aWUpID0+IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbmV3TW92aWVPYmplY3QgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL21vdmllcycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdNb3ZpZSksXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKHB1c2hNb3ZpZUludG9MaXN0KG5ld01vdmllT2JqZWN0KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWUgPSAoZGF0YSwgaWQpID0+IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZWRpdGVkTW92aWUgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL21vdmllcy8nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLmRhdGEsIGlkIH0pLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVNb3ZpZUluTGlzdChlZGl0ZWRNb3ZpZSwgZWRpdGVkTW92aWUuaWQpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==