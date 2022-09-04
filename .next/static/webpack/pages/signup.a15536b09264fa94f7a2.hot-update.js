webpackHotUpdate_N_E("pages/signup",{

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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }), "0"), __jsx("div", {
      key: "followings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }), "0"), __jsx("div", {
      key: "followers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }), "0")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 28
      }
    }, "ZC"),
    title: "eyo25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "\uB85C\uADF8\uC544\uC6C3")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1VzZXJQcm9maWxlLmpzIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwic2V0SXNMb2dpbiIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBb0I7RUFBQTs7RUFBQSxJQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0VBQ3RDLElBQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ2pDRixVQUFVLENBQUMsS0FBRCxDQUFWO0VBQ0QsQ0FGMkIsRUFFekIsRUFGeUIsQ0FBNUI7RUFHQSxPQUNFLG1FQUNFLE1BQUMseUNBQUQ7SUFDRSxPQUFPLEVBQUUsQ0FDUDtNQUFLLEdBQUcsRUFBQyxNQUFUO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsbUJBRUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUZGLE1BRE8sRUFLUDtNQUFLLEdBQUcsRUFBQyxZQUFUO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEseUJBRUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUZGLE1BTE8sRUFTUDtNQUFLLEdBQUcsRUFBQyxXQUFUO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEseUJBRUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUZGLE1BVE8sQ0FEWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBZ0JFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQVcsTUFBTSxFQUFFLE1BQUMsMkNBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxRQUFuQjtJQUF3QyxLQUFLLEVBQUMsT0FBOUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQWhCRixFQWlCRSxNQUFDLDJDQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBakJGLENBREYsQ0FERjtBQXVCRCxDQTNCRDs7R0FBTUQsVzs7S0FBQUEsVztBQTZCTkEsV0FBVyxDQUFDSSxTQUFaLEdBQXdCO0VBQ3RCSCxVQUFVLEVBQUVJLGlEQUFTLENBQUNDO0FBREEsQ0FBeEI7QUFJZU4sMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmExNTUzNmIwOTI2NGZhOTRmN2EyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDYXJkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICh7IHNldElzTG9naW4gfSkgPT4ge1xyXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dpbihmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPlxyXG4gICAgICAgICAgICDsp7nsp7lcclxuICAgICAgICAgICAgPGJyIC8+MFxyXG4gICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+XHJcbiAgICAgICAgICAgIO2MlOuhnOyeiVxyXG4gICAgICAgICAgICA8YnIgLz4wXHJcbiAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICA8ZGl2IGtleT1cImZvbGxvd2Vyc1wiPlxyXG4gICAgICAgICAgICDtjJTroZzsm4xcclxuICAgICAgICAgICAgPGJyIC8+MFxyXG4gICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZC5NZXRhIGF2YXRhcj17PEF2YXRhcj5aQzwvQXZhdGFyPn0gdGl0bGU9XCJleW8yNVwiPjwvQ2FyZC5NZXRhPlxyXG4gICAgICAgIDxCdXR0b24+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Vc2VyUHJvZmlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgc2V0SXNMb2dpbjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==