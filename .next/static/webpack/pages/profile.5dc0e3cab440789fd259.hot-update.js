webpackHotUpdate_N_E("pages/profile",{

/***/ "./component/FollowList.js":
/*!*********************************!*\
  !*** ./component/FollowList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\eyo25\\Desktop\\eyo25\\nodebird\\prepare\\front\\component\\FollowList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var FollowList = function FollowList(_ref) {
  var header = _ref.header,
      data = _ref.data;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 2,
      xs: 2,
      md: 3
    },
    size: "small",
    header: __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, header),
    loadMore: __jsx("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, "\uB354 \uBCF4\uAE30")),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
        style: {
          marginTop: '20px'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["StopOutlined"], {
          key: "stop",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }
        })],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
        description: item.nickname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      })));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  });
};

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0xpc3QuanMiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsIm1kIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtFQUFBLElBQUdDLE1BQUgsUUFBR0EsTUFBSDtFQUFBLElBQVdDLElBQVgsUUFBV0EsSUFBWDtFQUFBLE9BQ2pCLE1BQUMseUNBQUQ7SUFDRSxLQUFLLEVBQUU7TUFBRUMsWUFBWSxFQUFFO0lBQWhCLENBRFQ7SUFFRSxJQUFJLEVBQUU7TUFBRUMsTUFBTSxFQUFFLENBQVY7TUFBYUMsRUFBRSxFQUFFLENBQWpCO01BQW9CQyxFQUFFLEVBQUU7SUFBeEIsQ0FGUjtJQUdFLElBQUksRUFBQyxPQUhQO0lBSUUsTUFBTSxFQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FBTUwsTUFBTixDQUpWO0lBS0UsUUFBUSxFQUNOO01BQUssS0FBSyxFQUFFO1FBQUVNLFNBQVMsRUFBRSxRQUFiO1FBQXVCQyxNQUFNLEVBQUU7TUFBL0IsQ0FBWjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsTUFBQywyQ0FBRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLHlCQURGLENBTko7SUFVRSxRQUFRLE1BVlY7SUFXRSxVQUFVLEVBQUVOLElBWGQ7SUFZRSxVQUFVLEVBQUUsb0JBQUNPLElBQUQ7TUFBQSxPQUNWLE1BQUMseUNBQUQsQ0FBTSxJQUFOO1FBQVcsS0FBSyxFQUFFO1VBQUVDLFNBQVMsRUFBRTtRQUFiLENBQWxCO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDRSxNQUFDLHlDQUFEO1FBQU0sT0FBTyxFQUFFLENBQUMsTUFBQyw4REFBRDtVQUFjLEdBQUcsRUFBQyxNQUFsQjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUFBLEVBQUQsQ0FBZjtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47UUFBVyxXQUFXLEVBQUVELElBQUksQ0FBQ0UsUUFBN0I7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQURGLENBREYsQ0FEVTtJQUFBLENBWmQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURpQjtBQUFBLENBQW5COztLQUFNWCxVO0FBdUJOQSxVQUFVLENBQUNZLFNBQVgsR0FBdUI7RUFDckJYLE1BQU0sRUFBRVksaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFESjtFQUVyQmIsSUFBSSxFQUFFVyxpREFBUyxDQUFDRyxLQUFWLENBQWdCRDtBQUZELENBQXZCO0FBS2VmLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNWRjMGUzY2FiNDQwNzg5ZmQyNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgTGlzdCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IChcclxuICA8TGlzdFxyXG4gICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcgfX1cclxuICAgIGdyaWQ9e3sgZ3V0dGVyOiAyLCB4czogMiwgbWQ6IDMgfX1cclxuICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59XHJcbiAgICBsb2FkTW9yZT17XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJyB9fT5cclxuICAgICAgICA8QnV0dG9uPuuNlCDrs7TquLA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgICBib3JkZXJlZFxyXG4gICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjBweCcgfX0+XHJcbiAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIC8+XX0+XHJcbiAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICApfVxyXG4gIC8+XHJcbik7XHJcblxyXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcclxuICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=