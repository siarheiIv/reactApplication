webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/movieList/movieTabs/tabs.jsx":
/*!*****************************************************!*\
  !*** ./src/components/movieList/movieTabs/tabs.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Tabs = function Tabs(props) {
  var tabs = [{
    title: 'All',
    attribute: 'all'
  }, {
    title: 'Action',
    attribute: 'action'
  }, {
    title: 'Adventure',
    attribute: 'adventure'
  }, {
    title: 'Animation',
    attribute: 'animation'
  }, {
    title: 'Drama',
    attribute: 'drama'
  }, {
    title: 'Family',
    attribute: 'family'
  }, {
    title: 'Fantasy',
    attribute: 'fantasy'
  }, {
    title: 'Romance',
    attribute: 'romance'
  }, {
    title: 'Science Fiction',
    attribute: 'science fiction'
  }];
  var selectedTabIndex = props.selectedTabIndex,
      handleTabClick = props.handleTabClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, tabs.map(function (tab, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: tab.title,
      dangerouslySetInnerHTML: {
        __html: tab.title
      },
      onClick: function onClick(e) {
        return handleTabClick(e, i);
      },
      className: i === selectedTabIndex ? 'active' : '',
      "data-tab": tab.attribute
    });
  }));
};

_c = Tabs;
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

var _c;

$RefreshReg$(_c, "Tabs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWVMaXN0L21vdmllVGFicy90YWJzLmpzeCJdLCJuYW1lcyI6WyJUYWJzIiwicHJvcHMiLCJ0YWJzIiwidGl0bGUiLCJhdHRyaWJ1dGUiLCJzZWxlY3RlZFRhYkluZGV4IiwiaGFuZGxlVGFiQ2xpY2siLCJtYXAiLCJ0YWIiLCJpIiwiX19odG1sIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUN0QixNQUFNQyxJQUFJLEdBQUcsQ0FDWDtBQUFFQyxTQUFLLEVBQUUsS0FBVDtBQUFnQkMsYUFBUyxFQUFFO0FBQTNCLEdBRFcsRUFFWDtBQUFFRCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsYUFBUyxFQUFFO0FBQTlCLEdBRlcsRUFHWDtBQUFFRCxTQUFLLEVBQUUsV0FBVDtBQUFzQkMsYUFBUyxFQUFFO0FBQWpDLEdBSFcsRUFJWDtBQUFFRCxTQUFLLEVBQUUsV0FBVDtBQUFzQkMsYUFBUyxFQUFFO0FBQWpDLEdBSlcsRUFLWDtBQUFFRCxTQUFLLEVBQUUsT0FBVDtBQUFrQkMsYUFBUyxFQUFFO0FBQTdCLEdBTFcsRUFNWDtBQUFFRCxTQUFLLEVBQUUsUUFBVDtBQUFtQkMsYUFBUyxFQUFFO0FBQTlCLEdBTlcsRUFPWDtBQUFFRCxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsYUFBUyxFQUFFO0FBQS9CLEdBUFcsRUFRWDtBQUFFRCxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsYUFBUyxFQUFFO0FBQS9CLEdBUlcsRUFTWDtBQUFFRCxTQUFLLEVBQUUsaUJBQVQ7QUFBNEJDLGFBQVMsRUFBRTtBQUF2QyxHQVRXLENBQWI7QUFEc0IsTUFZZEMsZ0JBWmMsR0FZdUJKLEtBWnZCLENBWWRJLGdCQVpjO0FBQUEsTUFZSUMsY0FaSixHQVl1QkwsS0FadkIsQ0FZSUssY0FaSjtBQWN0QixzQkFDTSx1RUFFUUosSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsd0JBQ0Q7QUFDSSxTQUFHLEVBQUVELEdBQUcsQ0FBQ0wsS0FEYjtBQUVJLDZCQUF1QixFQUFFO0FBQUVPLGNBQU0sRUFBRUYsR0FBRyxDQUFDTDtBQUFkLE9BRjdCO0FBR0ksYUFBTyxFQUFFLGlCQUFDUSxDQUFEO0FBQUEsZUFBT0wsY0FBYyxDQUFDSyxDQUFELEVBQUlGLENBQUosQ0FBckI7QUFBQSxPQUhiO0FBSUksZUFBUyxFQUFFQSxDQUFDLEtBQUtKLGdCQUFOLEdBQXlCLFFBQXpCLEdBQW9DLEVBSm5EO0FBS0ksa0JBQVVHLEdBQUcsQ0FBQ0o7QUFMbEIsTUFEQztBQUFBLEdBQVQsQ0FGUixDQUROO0FBZ0JELENBOUJEOztLQUFNSixJO0FBZ0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZjU3Y2IzOGFjOWJlMTNkNjJiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRhYnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0YWJzID0gW1xyXG4gICAgeyB0aXRsZTogJ0FsbCcsIGF0dHJpYnV0ZTogJ2FsbCcgfSxcclxuICAgIHsgdGl0bGU6ICdBY3Rpb24nLCBhdHRyaWJ1dGU6ICdhY3Rpb24nIH0sXHJcbiAgICB7IHRpdGxlOiAnQWR2ZW50dXJlJywgYXR0cmlidXRlOiAnYWR2ZW50dXJlJyB9LFxyXG4gICAgeyB0aXRsZTogJ0FuaW1hdGlvbicsIGF0dHJpYnV0ZTogJ2FuaW1hdGlvbicgfSxcclxuICAgIHsgdGl0bGU6ICdEcmFtYScsIGF0dHJpYnV0ZTogJ2RyYW1hJyB9LFxyXG4gICAgeyB0aXRsZTogJ0ZhbWlseScsIGF0dHJpYnV0ZTogJ2ZhbWlseScgfSxcclxuICAgIHsgdGl0bGU6ICdGYW50YXN5JywgYXR0cmlidXRlOiAnZmFudGFzeScgfSxcclxuICAgIHsgdGl0bGU6ICdSb21hbmNlJywgYXR0cmlidXRlOiAncm9tYW5jZScgfSxcclxuICAgIHsgdGl0bGU6ICdTY2llbmNlIEZpY3Rpb24nLCBhdHRyaWJ1dGU6ICdzY2llbmNlIGZpY3Rpb24nIH0sXHJcbiAgXTtcclxuICBjb25zdCB7IHNlbGVjdGVkVGFiSW5kZXgsIGhhbmRsZVRhYkNsaWNrIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRhYnMubWFwKCh0YWIsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhYi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGFiLnRpdGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlVGFiQ2xpY2soZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IHNlbGVjdGVkVGFiSW5kZXggPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWI9e3RhYi5hdHRyaWJ1dGV9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=