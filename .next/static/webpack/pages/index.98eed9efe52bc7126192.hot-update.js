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
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
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

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var deleteMovie = function deleteMovie(id) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
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

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var addMovie = function addMovie(newMovie) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
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

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var updateMovie = function updateMovie(data, id) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch) {
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

    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L2FjdGlvbnMuanMiXSwibmFtZXMiOlsiR0VUX0FMTF9GSUxNU19GT1JfUkVOREVSIiwiU0VMRUNURURfVEFCX0lOREVYIiwiVVBEQVRFX1NFQVJDSF9URVJNIiwiQUREX01PVklFIiwiVVBEQVRFX01PVklFIiwiR0VUX01PVklFIiwiZ2V0RmlsbXNGb3JSZW5kZXIiLCJkYXRhIiwic2VhcmNoVGVybSIsInNvcnRCeSIsImZpbHRlciIsIm9mZnNldCIsInNob3VsZFVwZGF0ZVN0YXRlIiwidHlwZSIsImdldEZpbG1CeUlkIiwic2V0U2VsZWN0ZWRJbmRleCIsInBheWxvYWQiLCJ1cGRhdGVTZWFyY2hUZXJtIiwicHVzaE1vdmllSW50b0xpc3QiLCJ1cGRhdGVNb3ZpZUluTGlzdCIsImlkIiwibG9hZEFsbE1vdmllcyIsInRpdGxlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJzdG9yZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImVycm9yIiwiZ2V0TW92aWVCeUlkIiwicmVzcG9uc2UiLCJkZWxldGVNb3ZpZSIsIm1ldGhvZCIsImFkZE1vdmllIiwibmV3TW92aWUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdNb3ZpZU9iamVjdCIsInVwZGF0ZU1vdmllIiwiZWRpdGVkTW92aWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxXQUFsQjtBQUVBLElBQU1DLGlC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LENBQXBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk4ZWVkOWVmZTUyYmM3MTI2MTkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfRklMTVNfRk9SX1JFTkRFUiA9ICdHRVRfQUxMX0ZJTE1TX0ZPUl9SRU5ERVInO1xyXG5leHBvcnQgY29uc3QgU0VMRUNURURfVEFCX0lOREVYID0gJ1NFTEVDVEVEX1RBQl9JTkRFWCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VBUkNIX1RFUk0gPSAnVVBEQVRFX1NFQVJDSF9URVJNJztcclxuZXhwb3J0IGNvbnN0IEFERF9NT1ZJRSA9ICdBRERfTU9WSUUnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX01PVklFID0gJ1VQREFURV9NT1ZJRSc7XHJcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUUgPSAnR0VUX01PVklFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGaWxtc0ZvclJlbmRlciA9IChkYXRhLCBzZWFyY2hUZXJtLCBzb3J0QnksIGZpbHRlciwgb2Zmc2V0LCBzaG91bGRVcGRhdGVTdGF0ZSkgPT4gKHtcclxuICB0eXBlOiBHRVRfQUxMX0ZJTE1TX0ZPUl9SRU5ERVIsXHJcbiAgZGF0YSxcclxuICBzZWFyY2hUZXJtLFxyXG4gIHNvcnRCeSxcclxuICBmaWx0ZXIsXHJcbiAgb2Zmc2V0LFxyXG4gIHNob3VsZFVwZGF0ZVN0YXRlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGaWxtQnlJZCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEdFVF9NT1ZJRSxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTZWxlY3RlZEluZGV4ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogU0VMRUNURURfVEFCX0lOREVYLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlYXJjaFRlcm0gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBVUERBVEVfU0VBUkNIX1RFUk0sXHJcbiAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcHVzaE1vdmllSW50b0xpc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfTU9WSUUsXHJcbiAgcGF5bG9hZDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTW92aWVJbkxpc3QgPSAoZGF0YSwgaWQpID0+ICh7XHJcbiAgdHlwZTogVVBEQVRFX01PVklFLFxyXG4gIHBheWxvYWQ6IGRhdGEsXHJcbiAgaWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRBbGxNb3ZpZXMgPSAodGl0bGUsIHNvcnRCeSwgZmlsdGVyLCBvZmZzZXQsIHNob3VsZFVwZGF0ZVN0YXRlKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tb3ZpZXM/JmxpbWl0PTkmc29ydE9yZGVyPWFzYyR7b2Zmc2V0ID8gYCZvZmZzZXQ9JHtvZmZzZXR9YCA6ICcmb2Zmc2V0PTAnfSR7dGl0bGUgPyBgJmxpbWl0PTM1MDAmc2VhcmNoPSR7dGl0bGV9JnNlYXJjaEJ5PXRpdGxlYCA6ICcnfSR7c29ydEJ5ID09PSAndGl0bGUnID8gJyZzb3J0Qnk9dGl0bGUnIDogc29ydEJ5ID09PSAncmF0aW5nJyA/ICcmc29ydEJ5PXZvdGVfYXZlcmFnZScgOiAnJnNvcnRCeT1yZWxlYXNlX2RhdGUnfSR7ZmlsdGVyID8gYCZmaWx0ZXI9JHtmaWx0ZXJ9YCA6ICcnfWApXHJcbiAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChnZXRGaWxtc0ZvclJlbmRlcihkYXRhLCB0aXRsZSwgc29ydEJ5LCBmaWx0ZXIsIG9mZnNldCwgc2hvdWxkVXBkYXRlU3RhdGUpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUJ5SWQgPSAoaWQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tb3ZpZXMvJHtpZH1gKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIHN0b3JlLmRpc3BhdGNoKGdldEZpbG1CeUlkKGRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVNb3ZpZSA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvbW92aWVzLyR7aWR9YCwge1xyXG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgfSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChsb2FkQWxsTW92aWVzKCcnLCAnJywgJycpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRNb3ZpZSA9IChuZXdNb3ZpZSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG5ld01vdmllT2JqZWN0ID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9tb3ZpZXMnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3TW92aWUpLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChwdXNoTW92aWVJbnRvTGlzdChuZXdNb3ZpZU9iamVjdCkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1vdmllID0gKGRhdGEsIGlkKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZWRpdGVkTW92aWUgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL21vdmllcy8nLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLmRhdGEsIGlkIH0pLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICBzdG9yZS5kaXNwYXRjaCh1cGRhdGVNb3ZpZUluTGlzdChlZGl0ZWRNb3ZpZSwgZWRpdGVkTW92aWUuaWQpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcigpO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==