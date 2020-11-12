module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var _src_styles_modal_movie_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/modal_movie.scss */ "./src/styles/modal_movie.scss");
/* harmony import */ var _src_styles_modal_movie_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_modal_movie_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_styles_not_found_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles/not_found.scss */ "./src/styles/not_found.scss");
/* harmony import */ var _src_styles_not_found_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_styles_not_found_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_styles_variables_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/styles/variables.scss */ "./src/styles/variables.scss");
/* harmony import */ var _src_styles_variables_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_styles_variables_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_styles_movie_founded_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/styles/movie_founded.scss */ "./src/styles/movie_founded.scss");
/* harmony import */ var _src_styles_movie_founded_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_styles_movie_founded_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/footer/footer.scss */ "./src/components/footer/footer.scss");
/* harmony import */ var _src_components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_components_footer_footer_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_movieDetails_movie_details_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/movieDetails/movie_details.scss */ "./src/components/movieDetails/movie_details.scss");
/* harmony import */ var _src_components_movieDetails_movie_details_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieDetails_movie_details_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_movieFilter_movie_filter_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/movieFilter/movie_filter.scss */ "./src/components/movieFilter/movie_filter.scss");
/* harmony import */ var _src_components_movieFilter_movie_filter_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieFilter_movie_filter_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_header_header_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/header/header.scss */ "./src/components/header/header.scss");
/* harmony import */ var _src_components_header_header_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_header_header_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_components_header_searchBar_search_bar_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/header/searchBar/search_bar.scss */ "./src/components/header/searchBar/search_bar.scss");
/* harmony import */ var _src_components_header_searchBar_search_bar_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_components_header_searchBar_search_bar_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_movieList_editMovieMenu_edit_movie_menu_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/movieList/editMovieMenu/edit_movie_menu.scss */ "./src/components/movieList/editMovieMenu/edit_movie_menu.scss");
/* harmony import */ var _src_components_movieList_editMovieMenu_edit_movie_menu_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_editMovieMenu_edit_movie_menu_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_components_movieList_editMovieModal_form_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/movieList/editMovieModal/form.scss */ "./src/components/movieList/editMovieModal/form.scss");
/* harmony import */ var _src_components_movieList_editMovieModal_form_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_editMovieModal_form_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_components_movieList_editMovie_movie_edit_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/movieList/editMovie/movie_edit.scss */ "./src/components/movieList/editMovie/movie_edit.scss");
/* harmony import */ var _src_components_movieList_editMovie_movie_edit_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_editMovie_movie_edit_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_components_movieList_movie_movie_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/components/movieList/movie/movie.scss */ "./src/components/movieList/movie/movie.scss");
/* harmony import */ var _src_components_movieList_movie_movie_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_movie_movie_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _src_components_movieList_movies_list_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/components/movieList/movies_list.scss */ "./src/components/movieList/movies_list.scss");
/* harmony import */ var _src_components_movieList_movies_list_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_src_components_movieList_movies_list_scss__WEBPACK_IMPORTED_MODULE_19__);




















function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps);
}

/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/header/searchBar/search_bar.scss":
/*!*********************************************************!*\
  !*** ./src/components/header/searchBar/search_bar.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/movieDetails/movie_details.scss":
/*!********************************************************!*\
  !*** ./src/components/movieDetails/movie_details.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/movieFilter/movie_filter.scss":
/*!******************************************************!*\
  !*** ./src/components/movieFilter/movie_filter.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/movieList/editMovie/movie_edit.scss":
/*!************************************************************!*\
  !*** ./src/components/movieList/editMovie/movie_edit.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/movieList/editMovieMenu/edit_movie_menu.scss":
/*!*********************************************************************!*\
  !*** ./src/components/movieList/editMovieMenu/edit_movie_menu.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/movieList/editMovieModal/form.scss":
/*!***********************************************************!*\
  !*** ./src/components/movieList/editMovieModal/form.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/movieList/movie/movie.scss":
/*!***************************************************!*\
  !*** ./src/components/movieList/movie/movie.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/movieList/movies_list.scss":
/*!***************************************************!*\
  !*** ./src/components/movieList/movies_list.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/base.scss":
/*!******************************!*\
  !*** ./src/styles/base.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/button.scss":
/*!********************************!*\
  !*** ./src/styles/button.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/logo.scss":
/*!******************************!*\
  !*** ./src/styles/logo.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/modal_movie.scss":
/*!*************************************!*\
  !*** ./src/styles/modal_movie.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/movie_founded.scss":
/*!***************************************!*\
  !*** ./src/styles/movie_founded.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/normalize.scss":
/*!***********************************!*\
  !*** ./src/styles/normalize.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/not_found.scss":
/*!***********************************!*\
  !*** ./src/styles/not_found.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/variables.scss":
/*!***********************************!*\
  !*** ./src/styles/variables.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJZSxTQUFTQSxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUNwRCxzQkFBTywyREFBQyxTQUFELEVBQWVBLFNBQWYsQ0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkQsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy9iYXNlLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9zdHlsZXMvYnV0dG9uLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9zdHlsZXMvbG9nby5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy9ub3JtYWxpemUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL3N0eWxlcy9tb2RhbF9tb3ZpZS5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL25vdF9mb3VuZC5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL21vdmllX2ZvdW5kZWQuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvY29tcG9uZW50cy9tb3ZpZURldGFpbHMvbW92aWVfZGV0YWlscy5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvY29tcG9uZW50cy9tb3ZpZUZpbHRlci9tb3ZpZV9maWx0ZXIuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvc2VhcmNoQmFyL3NlYXJjaF9iYXIuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL2NvbXBvbmVudHMvbW92aWVMaXN0L2VkaXRNb3ZpZU1lbnUvZWRpdF9tb3ZpZV9tZW51LnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC9lZGl0TW92aWVNb2RhbC9mb3JtLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9jb21wb25lbnRzL21vdmllTGlzdC9lZGl0TW92aWUvbW92aWVfZWRpdC5zY3NzJztcclxuaW1wb3J0ICcuLi9zcmMvY29tcG9uZW50cy9tb3ZpZUxpc3QvbW92aWUvbW92aWUuc2Nzcyc7XHJcbmltcG9ydCAnLi4vc3JjL2NvbXBvbmVudHMvbW92aWVMaXN0L21vdmllc19saXN0LnNjc3MnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9