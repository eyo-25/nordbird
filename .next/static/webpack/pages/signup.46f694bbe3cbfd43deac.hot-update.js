webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _component_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Seo */ "./component/Seo.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\eyo25\\Desktop\\eyo25\\nodebird\\prepare\\front\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //onFinish는 e.preventdefault()가 자동으로 적용되어있다.

var Signup = function Signup() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      term = _useState2[0],
      setTerm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      passwordError = _useState3[0],
      setPasswordError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1]; //   const [id, onChangeId] = useInput('');
  //   const [nick, onChangeNick] = useInput('');
  //   const [password, onChangePassword] = useInput('');


  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {});
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_component_Seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Sign up",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-nick",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })))));
};

_s(Signup, "d1QDPeZlAwL29aDTHDJuSc1cU7Q=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsInVzZVN0YXRlIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJ0ZXJtIiwic2V0VGVybSIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImlkIiwib25DaGFuZ2VJZCIsIm5pY2siLCJvbkNoYW5nZU5pY2siLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDbkIsZ0JBQTBDQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7RUFBQSxJQUFPQyxhQUFQO0VBQUEsSUFBc0JDLGdCQUF0Qjs7RUFDQSxpQkFBd0JGLHNEQUFRLENBQUMsS0FBRCxDQUFoQztFQUFBLElBQU9HLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUNBLGlCQUEwQ0osc0RBQVEsQ0FBQyxLQUFELENBQWxEO0VBQUEsSUFBT0ssYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBQ0EsaUJBQWtDTixzREFBUSxDQUFDLEtBQUQsQ0FBMUM7RUFBQSxJQUFPTyxTQUFQO0VBQUEsSUFBa0JDLFlBQWxCLGlCQUptQixDQU1uQjtFQUNBO0VBQ0E7OztFQUNBLElBQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNLENBQUUsQ0FBVCxDQUE1QjtFQUNBLE9BQ0UsbUVBQ0UsTUFBQyxzREFBRDtJQUFLLEtBQUssRUFBQyxTQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQUVFLE1BQUMsNERBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMseUNBQUQ7SUFBTSxRQUFRLEVBQUVELFFBQWhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTyxPQUFPLEVBQUMsU0FBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQURGLEVBRUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZGLEVBR0UsTUFBQywwQ0FBRDtJQUFPLElBQUksRUFBQyxTQUFaO0lBQXNCLEtBQUssRUFBRUUsRUFBN0I7SUFBaUMsUUFBUSxNQUF6QztJQUEwQyxRQUFRLEVBQUVDLFVBQXBEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFIRixDQURGLEVBTUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQU8sT0FBTyxFQUFDLFdBQWY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx3QkFERixFQUVFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFGRixFQUdFLE1BQUMsMENBQUQ7SUFDRSxJQUFJLEVBQUMsV0FEUDtJQUVFLEtBQUssRUFBRUMsSUFGVDtJQUdFLFFBQVEsTUFIVjtJQUlFLFFBQVEsRUFBRUMsWUFKWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSEYsQ0FORixFQWdCRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTyxPQUFPLEVBQUMsZUFBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQURGLEVBRUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZGLEVBR0UsTUFBQywwQ0FBRDtJQUNFLElBQUksRUFBQyxlQURQO0lBRUUsSUFBSSxFQUFDLFVBRlA7SUFHRSxLQUFLLEVBQUVDLFFBSFQ7SUFJRSxRQUFRLE1BSlY7SUFLRSxRQUFRLEVBQUVDLGdCQUxaO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFIRixDQWhCRixFQTJCRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTyxPQUFPLEVBQUMsU0FBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJDQURGLEVBRUUsTUFBQywwQ0FBRDtJQUFPLElBQUksRUFBQyxTQUFaO0lBQXNCLEtBQUssRUFBRUwsRUFBN0I7SUFBaUMsUUFBUSxNQUF6QztJQUEwQyxRQUFRLEVBQUVDLFVBQXBEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFGRixDQTNCRixDQURGLENBRkYsQ0FERjtBQXVDRCxDQWpERDs7R0FBTWIsTTs7S0FBQUEsTTtBQW1EU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjQ2ZjY5NGJiZTNjYmZkNDNkZWFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgU2VvIGZyb20gJy4uL2NvbXBvbmVudC9TZW8nO1xyXG5cclxuLy9vbkZpbmlzaOuKlCBlLnByZXZlbnRkZWZhdWx0KCnqsIAg7J6Q64+Z7Jy866GcIOyggeyaqeuQmOyWtOyeiOuLpC5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXJtRXJyb3IsIHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vICAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICAvLyAgIGNvbnN0IFtuaWNrLCBvbkNoYW5nZU5pY2tdID0gdXNlSW5wdXQoJycpO1xyXG4gIC8vICAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlbyB0aXRsZT1cIlNpZ24gdXBcIj48L1Nlbz5cclxuICAgICAgPEFwcExheW91dD5cclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlSWR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1uaWNrXCI+64uJ64Sk7J6EPC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLW5pY2tcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuaWNrfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7ruYTrsIDrsojtmLgg7LK07YGsPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VJZH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9