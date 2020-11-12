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
  var id = router.query.id; // let { id } = useParams();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWVEZXRhaWxzL21vdmllRGV0YWlscy5qc3giXSwibmFtZXMiOlsiTW92aWVEZXRhaWxzIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0Iiwic3RvcmUiLCJkaXNwYXRjaCIsImdldE1vdmllQnlJZCIsIm1vdmllRGV0YWlscyIsInBvc3Rlcl9wYXRoIiwidGl0bGUiLCJ2b3RlX2F2ZXJhZ2UiLCJyZWxlYXNlX2RhdGUiLCJzbGljZSIsInJ1bnRpbWUiLCJvdmVydmlldyIsIm1hcFN0YXRlVG9Qcm9wcyIsImhvbWVQYWdlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDRCLE1BRXBCQyxFQUZvQixHQUViRixNQUFNLENBQUNHLEtBRk0sQ0FFcEJELEVBRm9CLEVBSTVCOztBQUNBRSx5REFBUyxDQUFDLFlBQU07QUFDWkMsc0RBQUssQ0FBQ0MsUUFBTixDQUFlQyxtRUFBWSxDQUFDTCxFQUFELENBQTNCO0FBQ0gsR0FGUSxFQUVOLENBQUNBLEVBQUQsQ0FGTSxDQUFULENBTDRCLENBVTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0ksMkRBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxrQkFBZTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDO0FBQXRCLHVCQUFmLENBREosZUFFSTtBQUFHLFFBQUksRUFBQztBQUFSLElBRkosQ0FESixlQU9NO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0k7QUFBSyxPQUFHLEVBQUVILEtBQUssQ0FBQ1MsWUFBTixHQUFxQlQsS0FBSyxDQUFDUyxZQUFOLENBQW1CQyxXQUF4QyxHQUFzRCxFQUFoRTtBQUFvRSxPQUFHLEVBQUM7QUFBeEUsSUFESixDQURGLGVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBbUNWLEtBQUssQ0FBQ1MsWUFBTixHQUFxQlQsS0FBSyxDQUFDUyxZQUFOLENBQW1CRSxLQUF4QyxHQUFnRCxFQUFuRixDQURKLGVBRUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSx5RUFBT1gsS0FBSyxDQUFDUyxZQUFOLEdBQXFCVCxLQUFLLENBQUNTLFlBQU4sQ0FBbUJHLFlBQXhDLEdBQXVELEVBQTlELENBREosQ0FGSixDQURKLGVBT0k7QUFBRyxhQUFTLEVBQUM7QUFBYix1QkFQSixlQVFJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFtQ1osS0FBSyxDQUFDUyxZQUFOLENBQW1CTixFQUFuQixHQUF3QkgsS0FBSyxDQUFDUyxZQUFOLENBQW1CSSxZQUFuQixDQUFnQ0MsS0FBaEMsQ0FBc0MsQ0FBdEMsRUFBeUMsQ0FBekMsQ0FBeEIsR0FBc0UsRUFBekcsQ0FESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBbUNkLEtBQUssQ0FBQ1MsWUFBTixhQUF3QlQsS0FBSyxDQUFDUyxZQUFOLENBQW1CTSxPQUEzQyxZQUEyRCxFQUE5RixDQUZKLENBUkosZUFZSTtBQUFHLGFBQVMsRUFBQztBQUFiLEtBQXFDZixLQUFLLENBQUNTLFlBQU4sR0FBcUJULEtBQUssQ0FBQ1MsWUFBTixDQUFtQk8sUUFBeEMsR0FBbUQsRUFBeEYsQ0FaSixDQUpGLENBUE4sQ0FESixDQURKLENBREo7QUFpQ0gsQ0FoREQ7O0dBQU1qQixZO1VBQ2FHLHFEOzs7S0FEYkgsWTs7QUFpRE4sSUFBTWtCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ1gsS0FBRCxFQUFXO0FBQy9CLFNBQU87QUFDSEcsZ0JBQVksRUFBRUgsS0FBSyxDQUFDWSxRQUFOLENBQWVUO0FBRDFCLEdBQVA7QUFHSCxDQUpEOztBQU1lVSwwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJsQixZQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZpbG0vW2lkXS40MGI4NTUzYjRkZTg5NTM0MWI3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGNoZXZyb24gZnJvbSAnLi4vLi4vc3R5bGVzL2ltZy9jaGV2cm9uLnBuZyc7XHJcbmltcG9ydCB7IGdldE1vdmllQnlJZCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy8gaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLy8gaW1wb3J0IG1vdmllX2RldGFpbHMgZnJvbSAnLi9tb3ZpZV9kZXRhaWxzLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTW92aWVEZXRhaWxzID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICAvLyBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKGdldE1vdmllQnlJZChpZCkpO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG5cclxuICAgIC8vIGxldCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgc3RvcmUuZGlzcGF0Y2goZ2V0TW92aWVCeUlkKGlkKSk7XHJcbiAgICAvLyB9LCBbaWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibG9nb1wiPm5ldGZsaXhyb3VsZXR0ZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjL1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImltYWdlXCIgc3JjPXtjaGV2cm9ufSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsoPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMubW92aWVEZXRhaWxzID8gcHJvcHMubW92aWVEZXRhaWxzLnBvc3Rlcl9wYXRoIDogJyd9IGFsdD1cImNvdmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fd3JhcHBlcl90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl90aXRsZVwiPntwcm9wcy5tb3ZpZURldGFpbHMgPyBwcm9wcy5tb3ZpZURldGFpbHMudGl0bGUgOiAnJ308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fcmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMubW92aWVEZXRhaWxzID8gcHJvcHMubW92aWVEZXRhaWxzLnZvdGVfYXZlcmFnZSA6ICcnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fc2hvcnRfb3ZlcnZpZXdcIj4gU2hvcnQgT3ZlcnZpZXc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX3dyYXBwZXJfZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fZGF0ZVwiPntwcm9wcy5tb3ZpZURldGFpbHMuaWQgPyBwcm9wcy5tb3ZpZURldGFpbHMucmVsZWFzZV9kYXRlLnNsaWNlKDAsIDQpIDogJyd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl90aW1lXCI+e3Byb3BzLm1vdmllRGV0YWlscyA/IGAke3Byb3BzLm1vdmllRGV0YWlscy5ydW50aW1lfSBtaW5gIDogJyd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX292ZXJ2aWV3XCI+e3Byb3BzLm1vdmllRGV0YWlscyA/IHByb3BzLm1vdmllRGV0YWlscy5vdmVydmlldyA6ICcnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1vdmllRGV0YWlsczogc3RvcmUuaG9tZVBhZ2UubW92aWVEZXRhaWxzLFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1vdmllRGV0YWlscyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=