webpackHotUpdate_N_E("pages/film/[id]",{

/***/ "./src/components/movieDetails/movieDetails.jsx":
/*!******************************************************!*\
  !*** ./src/components/movieDetails/movieDetails.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ "./src/redux/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


var _s = $RefreshSig$();

 // import chevron from '../../styles/img/chevron.png';



 // import { useParams } from "react-router-dom";
// import movie_details from './movie_details.scss';




var MovieDetails = function MovieDetails(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = router.query.id;
  console.log(router); // let { id } = useParams();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _redux_store__WEBPACK_IMPORTED_MODULE_3__["store"].dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_2__["getMovieById"])(id));
  }, [id]); // let { id } = useParams();
  // useEffect(() => {
  //     store.dispatch(getMovieById(id));
  // }, [id]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    className: "logo"
  }, "netflixroulette")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#/"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "description_image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.movieDetails ? props.movieDetails.poster_path : '',
    alt: "cover"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_wrapper_title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "description_title"
  }, props.movieDetails ? props.movieDetails.title : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_rate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, props.movieDetails ? props.movieDetails.vote_average : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "description_short_overview"
  }, " Short Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_wrapper_date"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_date"
  }, props.movieDetails.id ? props.movieDetails.release_date.slice(0, 4) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "description_time"
  }, props.movieDetails ? "".concat(props.movieDetails.runtime, " min") : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "description_overview"
  }, props.movieDetails ? props.movieDetails.overview : ''))))));
};

_s(MovieDetails, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = MovieDetails;

var mapStateToProps = function mapStateToProps(store) {
  return {
    movieDetails: store.homePage.movieDetails
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(MovieDetails));

var _c;

$RefreshReg$(_c, "MovieDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWVEZXRhaWxzL21vdmllRGV0YWlscy5qc3giXSwibmFtZXMiOlsiTW92aWVEZXRhaWxzIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInN0b3JlIiwiZGlzcGF0Y2giLCJnZXRNb3ZpZUJ5SWQiLCJtb3ZpZURldGFpbHMiLCJwb3N0ZXJfcGF0aCIsInRpdGxlIiwidm90ZV9hdmVyYWdlIiwicmVsZWFzZV9kYXRlIiwic2xpY2UiLCJydW50aW1lIiwib3ZlcnZpZXciLCJtYXBTdGF0ZVRvUHJvcHMiLCJob21lUGFnZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ0QixNQUVwQkMsRUFGb0IsR0FFYkYsTUFBTSxDQUFDRyxLQUZNLENBRXBCRCxFQUZvQjtBQUc1QkUsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVosRUFINEIsQ0FLNUI7O0FBQ0FNLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxzREFBSyxDQUFDQyxRQUFOLENBQWVDLG1FQUFZLENBQUNQLEVBQUQsQ0FBM0I7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsRUFBRCxDQUZNLENBQVQsQ0FONEIsQ0FXNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSwyREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLGtCQUFlO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUM7QUFBdEIsdUJBQWYsQ0FESixlQUVJO0FBQUcsUUFBSSxFQUFDO0FBQVIsSUFGSixDQURKLGVBT007QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDSTtBQUFLLE9BQUcsRUFBRUgsS0FBSyxDQUFDVyxZQUFOLEdBQXFCWCxLQUFLLENBQUNXLFlBQU4sQ0FBbUJDLFdBQXhDLEdBQXNELEVBQWhFO0FBQW9FLE9BQUcsRUFBQztBQUF4RSxJQURKLENBREYsZUFJRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUFtQ1osS0FBSyxDQUFDVyxZQUFOLEdBQXFCWCxLQUFLLENBQUNXLFlBQU4sQ0FBbUJFLEtBQXhDLEdBQWdELEVBQW5GLENBREosZUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLHlFQUFPYixLQUFLLENBQUNXLFlBQU4sR0FBcUJYLEtBQUssQ0FBQ1csWUFBTixDQUFtQkcsWUFBeEMsR0FBdUQsRUFBOUQsQ0FESixDQUZKLENBREosZUFPSTtBQUFHLGFBQVMsRUFBQztBQUFiLHVCQVBKLGVBUUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQW1DZCxLQUFLLENBQUNXLFlBQU4sQ0FBbUJSLEVBQW5CLEdBQXdCSCxLQUFLLENBQUNXLFlBQU4sQ0FBbUJJLFlBQW5CLENBQWdDQyxLQUFoQyxDQUFzQyxDQUF0QyxFQUF5QyxDQUF6QyxDQUF4QixHQUFzRSxFQUF6RyxDQURKLGVBRUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFtQ2hCLEtBQUssQ0FBQ1csWUFBTixhQUF3QlgsS0FBSyxDQUFDVyxZQUFOLENBQW1CTSxPQUEzQyxZQUEyRCxFQUE5RixDQUZKLENBUkosZUFZSTtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQXFDakIsS0FBSyxDQUFDVyxZQUFOLEdBQXFCWCxLQUFLLENBQUNXLFlBQU4sQ0FBbUJPLFFBQXhDLEdBQW1ELEVBQXhGLENBWkosQ0FKRixDQVBOLENBREosQ0FESixDQURKO0FBaUNILENBakREOztHQUFNbkIsWTtVQUNhRyxxRDs7O0tBRGJILFk7O0FBa0ROLElBQU1vQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNYLEtBQUQsRUFBVztBQUMvQixTQUFPO0FBQ0hHLGdCQUFZLEVBQUVILEtBQUssQ0FBQ1ksUUFBTixDQUFlVDtBQUQxQixHQUFQO0FBR0gsQ0FKRDs7QUFNZVUsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCcEIsWUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9maWxtL1tpZF0uYTlhZjU4MmE4NTQwY2YyZTgyYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBjaGV2cm9uIGZyb20gJy4uLy4uL3N0eWxlcy9pbWcvY2hldnJvbi5wbmcnO1xyXG5pbXBvcnQgeyBnZXRNb3ZpZUJ5SWQgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbi8vIGltcG9ydCBtb3ZpZV9kZXRhaWxzIGZyb20gJy4vbW92aWVfZGV0YWlscy5zY3NzJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE1vdmllRGV0YWlscyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcblxyXG4gICAgLy8gbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChnZXRNb3ZpZUJ5SWQoaWQpKTtcclxuICAgIH0sIFtpZF0pO1xyXG5cclxuXHJcbiAgICAvLyBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIHN0b3JlLmRpc3BhdGNoKGdldE1vdmllQnlJZChpZCkpO1xyXG4gICAgLy8gfSwgW2lkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX2xvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxvZ29cIj5uZXRmbGl4cm91bGV0dGU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIy9cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJpbWFnZVwiIHNyYz17Y2hldnJvbn0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7KDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLm1vdmllRGV0YWlscyA/IHByb3BzLm1vdmllRGV0YWlscy5wb3N0ZXJfcGF0aCA6ICcnfSBhbHQ9XCJjb3ZlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX3dyYXBwZXJfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fdGl0bGVcIj57cHJvcHMubW92aWVEZXRhaWxzID8gcHJvcHMubW92aWVEZXRhaWxzLnRpdGxlIDogJyd9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX3JhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLm1vdmllRGV0YWlscyA/IHByb3BzLm1vdmllRGV0YWlscy52b3RlX2F2ZXJhZ2UgOiAnJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX3Nob3J0X292ZXJ2aWV3XCI+IFNob3J0IE92ZXJ2aWV3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl93cmFwcGVyX2RhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX2RhdGVcIj57cHJvcHMubW92aWVEZXRhaWxzLmlkID8gcHJvcHMubW92aWVEZXRhaWxzLnJlbGVhc2VfZGF0ZS5zbGljZSgwLCA0KSA6ICcnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fdGltZVwiPntwcm9wcy5tb3ZpZURldGFpbHMgPyBgJHtwcm9wcy5tb3ZpZURldGFpbHMucnVudGltZX0gbWluYCA6ICcnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9vdmVydmlld1wiPntwcm9wcy5tb3ZpZURldGFpbHMgPyBwcm9wcy5tb3ZpZURldGFpbHMub3ZlcnZpZXcgOiAnJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtb3ZpZURldGFpbHM6IHN0b3JlLmhvbWVQYWdlLm1vdmllRGV0YWlscyxcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNb3ZpZURldGFpbHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9