webpackHotUpdate_N_E("pages/signup",{

/***/ "./component/LoginForm.js":
/*!********************************!*\
  !*** ./component/LoginForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\eyo25\\Desktop\\eyo25\\nodebird\\prepare\\front\\component\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var BtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 10px;\n"])));
_c = BtnWrapper;

var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLogin = _ref.setIsLogin;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []); //컴포넌트에 props로 넘기는 함수는 usecallback을 사용해야 최적화

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(id, password);
    setIsLogin(true);
  }, [id, password]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onFinish: onSubmitForm,
    style: {
      padding: '10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "user-password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "user-password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), __jsx(BtnWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))))));
};

_s(LoginForm, "71+HE8XHzYDzU9jR9aPFdEuC8MA=");

_c2 = LoginForm;
LoginForm.propTypes = {
  setIsLogin: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2;

$RefreshReg$(_c, "BtnWrapper");
$RefreshReg$(_c2, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0xvZ2luRm9ybS5qcyJdLCJuYW1lcyI6WyJCdG5XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTG9naW5Gb3JtIiwic2V0SXNMb2dpbiIsInVzZVN0YXRlIiwiaWQiLCJzZXRJZCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbkNoYW5nZUlkIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZVBhc3N3b3JkIiwib25TdWJtaXRGb3JtIiwiY29uc29sZSIsImxvZyIsInBhZGRpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixzS0FBaEI7S0FBTUYsVTs7QUFJTixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFvQjtFQUFBOztFQUFBLElBQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0VBQ3BDLGdCQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQTVCO0VBQUEsSUFBT0MsRUFBUDtFQUFBLElBQVdDLEtBQVg7O0VBQ0EsaUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7RUFBQSxJQUFPRyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLElBQU1DLFVBQVUsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87SUFDcENMLEtBQUssQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTDtFQUNELENBRjZCLEVBRTNCLEVBRjJCLENBQTlCO0VBR0EsSUFBTUMsZ0JBQWdCLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQzFDSCxXQUFXLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7RUFDRCxDQUZtQyxFQUVqQyxFQUZpQyxDQUFwQyxDQU5vQyxDQVNwQzs7RUFDQSxJQUFNRSxZQUFZLEdBQUdMLHlEQUFXLENBQUMsWUFBTTtJQUNyQ00sT0FBTyxDQUFDQyxHQUFSLENBQVlaLEVBQVosRUFBZ0JFLFFBQWhCO0lBQ0FKLFVBQVUsQ0FBQyxJQUFELENBQVY7RUFDRCxDQUgrQixFQUc3QixDQUFDRSxFQUFELEVBQUtFLFFBQUwsQ0FINkIsQ0FBaEM7RUFLQSxPQUNFLG1FQUNFLE1BQUMseUNBQUQ7SUFBTSxRQUFRLEVBQUVRLFlBQWhCO0lBQThCLEtBQUssRUFBRTtNQUFFRyxPQUFPLEVBQUU7SUFBWCxDQUFyQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQU8sT0FBTyxFQUFDLFNBQWY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx3QkFERixFQUVFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFGRixFQUdFLE1BQUMsMENBQUQ7SUFBTyxJQUFJLEVBQUMsU0FBWjtJQUFzQixLQUFLLEVBQUViLEVBQTdCO0lBQWlDLFFBQVEsRUFBRUksVUFBM0M7SUFBdUQsUUFBUSxNQUEvRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSEYsQ0FERixFQU1FO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLE9BQU8sRUFBQyxlQUFmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBREYsRUFFRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkYsRUFHRSxNQUFDLDBDQUFEO0lBQ0UsSUFBSSxFQUFDLGVBRFA7SUFFRSxJQUFJLEVBQUMsVUFGUDtJQUdFLEtBQUssRUFBRUYsUUFIVDtJQUlFLFFBQVEsRUFBRU8sZ0JBSlo7SUFLRSxRQUFRLE1BTFY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUhGLENBTkYsRUFpQkUsTUFBQyxVQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLDJDQUFEO0lBQVEsSUFBSSxFQUFDLFNBQWI7SUFBdUIsUUFBUSxFQUFDLFFBQWhDO0lBQXlDLE9BQU8sRUFBRSxLQUFsRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQURGLEVBSUUsTUFBQyxnREFBRDtJQUFNLElBQUksRUFBQyxTQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQywyQ0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQURGLENBREYsQ0FKRixDQWpCRixDQURGLENBREY7QUFnQ0QsQ0EvQ0Q7O0dBQU1aLFM7O01BQUFBLFM7QUFpRE5BLFNBQVMsQ0FBQ2lCLFNBQVYsR0FBc0I7RUFDcEJoQixVQUFVLEVBQUVpQixpREFBUyxDQUFDQztBQURGLENBQXRCO0FBSWVuQix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuYWNjNDY5MTliYTdmNWYxNjVjODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBCdG5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKHsgc2V0SXNMb2dpbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICAvL+y7tO2PrOuEjO2KuOyXkCBwcm9wc+uhnCDrhJjquLDripQg7ZWo7IiY64qUIHVzZWNhbGxiYWNr7J2EIOyCrOyaqe2VtOyVvCDstZzsoIHtmZRcclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQpO1xyXG4gICAgc2V0SXNMb2dpbih0cnVlKTtcclxuICB9LCBbaWQsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfSBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwidXNlci1pZFwiIHZhbHVlPXtpZH0gb25DaGFuZ2U9e29uQ2hhbmdlSWR9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdG5XcmFwcGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9PlxyXG4gICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQnRuV3JhcHBlcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkxvZ2luRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgc2V0SXNMb2dpbjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=