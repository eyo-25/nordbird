webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _component_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Seo */ "./component/Seo.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var _hooks_useInput_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput.js */ "./hooks/useInput.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\eyo25\\Desktop\\eyo25\\nodebird\\prepare\\front\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var TextInput = function TextInput(_ref) {
  var value = _ref.value;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }, value);
};

_c = TextInput;
TextInput.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
}; //onFinish는 e.preventdefault()가 자동으로 적용되어있다.
//Button 속성에 htmlType="submit"가 있으면 버튼누를시 Form의 onFinish호출

var Signup = function Signup() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      term = _useState2[0],
      setTerm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passwordError = _useState3[0],
      setPasswordError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var _useInput = Object(_hooks_useInput_js__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput_js__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nick = _useInput4[0],
      onChangeNick = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput_js__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(e.target.value);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (term === false) {
      return setTermError(true);
    }

    console.log(id, nick, password);
  }, [password, passwordCheck, term]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_component_Seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Sign up",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(TextInput, {
    value: "135135",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-nick",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-nick",
    value: nick,
    required: true,
    onChange: onChangeNick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), passwordError && __jsx("div", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "\uC81C\uB85C\uCD08 \uB9D0\uC744 \uC798 \uB4E4\uC744 \uAC83\uC744 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx("div", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, "\uAC00\uC785\uD558\uAE30")))));
};

_s(Signup, "dlmBuYFEGbrdPT5IKOrsYOQu1RQ=", false, function () {
  return [_hooks_useInput_js__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput_js__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput_js__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "TextInput");
$RefreshReg$(_c2, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlRleHRJbnB1dCIsInZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiU2lnbnVwIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInRlcm0iLCJzZXRUZXJtIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJ1c2VJbnB1dCIsImlkIiwib25DaGFuZ2VJZCIsIm5pY2siLCJvbkNoYW5nZU5pY2siLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJvbkNoYW5nZVRlcm0iLCJjaGVja2VkIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiY29sb3IiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0VBQUEsSUFBWkMsS0FBWSxRQUFaQSxLQUFZO0VBQy9CLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFNQSxLQUFOLENBQVA7QUFDRCxDQUZEOztLQUFNRCxTO0FBSU5BLFNBQVMsQ0FBQ0UsU0FBVixHQUFzQjtFQUNwQkQsS0FBSyxFQUFFRSxpREFBUyxDQUFDQztBQURHLENBQXRCLEMsQ0FJQTtBQUNBOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDbkIsZ0JBQTBDQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7RUFBQSxJQUFPQyxhQUFQO0VBQUEsSUFBc0JDLGdCQUF0Qjs7RUFDQSxpQkFBd0JGLHNEQUFRLENBQUMsS0FB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SSxFQUFDLFdBQWY7SUFBMkIsT0FBTyxFQUFFdEIsSUFBcEM7SUFBMEMsUUFBUSxFQUFFaUIsWUFBcEQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxzR0FERixFQUlHYixTQUFTLElBQ1I7SUFBSyxLQUFLLEVBQUU7TUFBRWtCLEtBQUssRUFBRTtJQUFULENBQVo7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSwyRUFMSixDQXhDRixFQWdERTtJQUFLLEtBQUssRUFBRTtNQUFFQyxTQUFTLEVBQUU7SUFBYixDQUFaO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLDJDQUFEO0lBQVEsSUFBSSxFQUFDLFNBQWI7SUFBdUIsUUFBUSxFQUFDLFFBQWhDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBREYsQ0FoREYsQ0FERixDQUZGLENBREY7QUE2REQsQ0EzRkQ7O0dBQU0zQixNO1VBTXFCVSwwRCxFQUNJQSwwRCxFQUNRQSwwRDs7O01BUmpDVixNO0FBNkZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuOGNlOGIwNWIyN2FiZjZmMjBmMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBTZW8gZnJvbSAnLi4vY29tcG9uZW50L1Nlbyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQuanMnO1xyXG5cclxuY29uc3QgVGV4dElucHV0ID0gKHsgdmFsdWUgfSkgPT4ge1xyXG4gIHJldHVybiA8ZGl2Pnt2YWx1ZX08L2Rpdj47XHJcbn07XHJcblxyXG5UZXh0SW5wdXQucHJvcFR5cGVzID0ge1xyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuLy9vbkZpbmlzaOuKlCBlLnByZXZlbnRkZWZhdWx0KCnqsIAg7J6Q64+Z7Jy866GcIOyggeyaqeuQmOyWtOyeiOuLpC5cclxuLy9CdXR0b24g7IaN7ISx7JeQIGh0bWxUeXBlPVwic3VibWl0XCLqsIAg7J6I7Jy866m0IOuyhO2KvOuIhOulvOyLnCBGb3Jt7J2YIG9uRmluaXNo7Zi47LacXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtuaWNrLCBvbkNoYW5nZU5pY2tdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICAgIH0sXHJcbiAgICBbcGFzc3dvcmRdLFxyXG4gICk7XHJcbiAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICBzZXRUZXJtRXJyb3IoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDaGVjaykge1xyXG4gICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGlmICh0ZXJtID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coaWQsIG5pY2ssIHBhc3N3b3JkKTtcclxuICB9LCBbcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2ssIHRlcm1dKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlbyB0aXRsZT1cIlNpZ24gdXBcIj48L1Nlbz5cclxuICAgICAgPEFwcExheW91dD5cclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgPFRleHRJbnB1dCB2YWx1ZT1cIjEzNTEzNVwiIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VJZH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLW5pY2tcIj7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXItbmlja1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25pY2t9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VOaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuu5hOuwgOuyiO2YuCDssrTtgaw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBuYW1lPVwidXNlci10ZXJtXCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e29uQ2hhbmdlVGVybX0+XHJcbiAgICAgICAgICAgICAg7KCc66Gc7LSIIOunkOydhCDsnpgg65Ok7J2EIOqyg+ydhCDrj5nsnZjtlanri4jri6QuXHJcbiAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PuyVveq0gOyXkCDrj5nsnZjtlZjshZTslbwg7ZWp64uI64ukLjwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIOqwgOyehe2VmOq4sFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9