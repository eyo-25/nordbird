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
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {});
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_component_Seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Sign up",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_component_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(TextInput, {
    value: "135135",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-nick",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "\uBE44\uBC00\uBC88\uD638 \uCCB4\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })))));
};

_s(Signup, "dxotx4bRp4hqtreIb7Qt5WGFfKk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlRleHRJbnB1dCIsInZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiU2lnbnVwIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInRlcm0iLCJzZXRUZXJtIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJ1c2VJbnB1dCIsImlkIiwib25DaGFuZ2VJZCIsIm5pY2siLCJvbkNoYW5nZU5pY2siLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJvblN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7RUFBQSxJQUFaQyxLQUFZLFFBQVpBLEtBQVk7RUFDL0IsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQU1BLEtBQU4sQ0FBUDtBQUNELENBRkQ7O0tBQU1ELFM7QUFJTkEsU0FBUyxDQUFDRSxTQUFWLEdBQXNCO0VBQ3BCRCxLQUFLLEVBQUVFLGlEQUFTLENBQUNDO0FBREcsQ0FBdEIsQyxDQUlBOztBQUNBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDbkIsZ0JBQTBDQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7RUFBQSxJQUFPQyxhQUFQO0VBQUEsSUFBc0JDLGdCQUF0Qjs7RUFDQSxpQkFBd0JGLHNEQUFRLENBQUMsS0FBRCxDQUFoQztFQUFBLElBQU9HLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUNBLGlCQUEwQ0osc0RBQVEsQ0FBQyxL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SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLE9BQU8sRUFBQyxTQUFmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsMkNBREYsRUFFRSxNQUFDLDBDQUFEO0lBQ0UsSUFBSSxFQUFDLFNBRFA7SUFFRSxLQUFLLEVBQUVMLEVBRlQ7SUFHRSxRQUFRLE1BSFY7SUFJRSxRQUFRLEVBQUVNLHFCQUpaO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFGRixDQTVCRixDQURGLENBRkYsQ0FERjtBQTZDRCxDQS9ERDs7R0FBTWpCLE07VUFNcUJVLDBELEVBQ0lBLDBELEVBQ1FBLDBEOzs7TUFSakNWLE07QUFpRVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5kNmQwZmVjNTE2ZjUzN2Y3MWE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFNlbyBmcm9tICcuLi9jb21wb25lbnQvU2VvJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50L0FwcExheW91dCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dC5qcyc7XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+e3ZhbHVlfTwvZGl2PjtcclxufTtcclxuXHJcblRleHRJbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG4vL29uRmluaXNo64qUIGUucHJldmVudGRlZmF1bHQoKeqwgCDsnpDrj5nsnLzroZwg7KCB7Jqp65CY7Ja07J6I64ukLlxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lkLCBvbkNoYW5nZUlkXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbbmljaywgb25DaGFuZ2VOaWNrXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICB9LFxyXG4gICAgW3Bhc3N3b3JkXSxcclxuICApO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge30pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VvIHRpdGxlPVwiU2lnbiB1cFwiPjwvU2VvPlxyXG4gICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8VGV4dElucHV0IHZhbHVlPVwiMTM1MTM1XCIgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXItaWRcIiB2YWx1ZT17aWR9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja1wiPuuLieuEpOyehDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlci1uaWNrXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmlja31cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+67mE67CA67KI7Zi4IOyytO2BrDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWlkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17aWR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=