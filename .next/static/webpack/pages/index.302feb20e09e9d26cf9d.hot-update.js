webpackHotUpdate_N_E("pages/index",{

/***/ "./component/UserProfile.js":
/*!**********************************!*\
  !*** ./component/UserProfile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\eyo25\\Desktop\\eyo25\\nodebird\\prepare\\front\\component\\UserProfile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UserProfile = function UserProfile(_ref) {
  _s();

  var setIsLogin = _ref.setIsLogin;
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsLogin(false);
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }), "0"), __jsx("div", {
      key: "followings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }), "0"), __jsx("div", {
      key: "followers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), "0")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 26
      }
    }, "ZC"),
    title: "eyo25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

_s(UserProfile, "soEkKhOFJiBA5pEh4NHl5+aG1VY=");

_c = UserProfile;
UserProfile.propTypes = {
  setIsLogin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1VzZXJQcm9maWxlLmpzIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwic2V0SXNMb2dpbiIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBb0I7RUFBQTs7RUFBQSxJQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0VBQ3RDLElBQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ2pDRixVQUFVLENBQUMsS0FBRCxDQUFWO0VBQ0QsQ0FGMkIsRUFFekIsRUFGeUIsQ0FBNUI7RUFHQSxPQUNFLE1BQUMseUNBQUQ7SUFDRSxPQUFPLEVBQUUsQ0FDUDtNQUFLLEdBQUcsRUFBQyxNQUFUO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsbUJBRUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUZGLE1BRE8sRUFLUDtNQUFLLEdBQUcsRUFBQyxZQUFUO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEseUJBRUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUZGLE1BTE8sRUFTUDtNQUFLLEdBQUcsRUFBQyxXQUFUO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEseUJBRUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUZGLE1BVE8sQ0FEWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBZ0JFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQVcsTUFBTSxFQUFFLE1BQUMsMkNBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxRQUFuQjtJQUF3QyxLQUFLLEVBQUMsT0FBOUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQWhCRixFQWlCRSxNQUFDLDJDQUFEO0lBQVEsT0FBTyxFQUFFQyxRQUFqQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQWpCRixDQURGO0FBcUJELENBekJEOztHQUFNRixXOztLQUFBQSxXO0FBMkJOQSxXQUFXLENBQUNJLFNBQVosR0FBd0I7RUFDdEJILFVBQVUsRUFBRUksaURBQVMsQ0FBQ0M7QUFEQSxDQUF4QjtBQUllTiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMDJmZWIyMGUwOWU5ZDI2Y2Y5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoeyBzZXRJc0xvZ2luIH0pID0+IHtcclxuICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzTG9naW4oZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRcclxuICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgIDxkaXYga2V5PVwidHdpdFwiPlxyXG4gICAgICAgICAg7Ke57Ke5XHJcbiAgICAgICAgICA8YnIgLz4wXHJcbiAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nc1wiPlxyXG4gICAgICAgICAg7YyU66Gc7J6JXHJcbiAgICAgICAgICA8YnIgLz4wXHJcbiAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJzXCI+XHJcbiAgICAgICAgICDtjJTroZzsm4xcclxuICAgICAgICAgIDxiciAvPjBcclxuICAgICAgICA8L2Rpdj4sXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkLk1ldGEgYXZhdGFyPXs8QXZhdGFyPlpDPC9BdmF0YXI+fSB0aXRsZT1cImV5bzI1XCI+PC9DYXJkLk1ldGE+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25Mb2dPdXR9PuuhnOq3uOyVhOybgzwvQnV0dG9uPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5Vc2VyUHJvZmlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgc2V0SXNMb2dpbjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==