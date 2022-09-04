webpackHotUpdate_N_E("pages/index",{

/***/ "./component/AppLayout.js":
/*!********************************!*\
  !*** ./component/AppLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserProfile */ "./component/UserProfile.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./component/LoginForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\eyo25\\Desktop\\eyo25\\nodebird\\prepare\\front\\component\\AppLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search)(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  vertical-align: center;\n"]))); // 컴퍼넌트나 태그에 스타일을 인라인형식으로 작성하면 vertual돔이 바뀐걸로 파악해서 리랜더링하기때문에
// styled-component로 빼서 Input.Search 컴퍼넌트를 스타일 해주어 최적화
// 아니면 const style = useMemo(()=>({ marginTop:10 }),[])해서 스타일 할당
// 이때 useMemo()는 값을 캐싱해서 변하지않음 <-> useCallBack()은 함수를 캐싱

_c = SearchInput;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLogin = _useState[0],
      setIsLogin = _useState[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    mode: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "mail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(SearchInput, {
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "\uD68C\uC6D0\uAC00\uC785"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, isLogin ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setIsLogin: setIsLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setIsLogin: setIsLogin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://eyo-25.github.io/eyoflix",
    target: "_blank",
    rel: "nore noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Made by eyo25"))));
};

_s(AppLayout, "JvSgsX4M8G46LDE0KxvpuaiuM34=");

_c2 = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c, _c2;

$RefreshReg$(_c, "SearchInput");
$RefreshReg$(_c2, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0FwcExheW91dC5qcyJdLCJuYW1lcyI6WyJTZWFyY2hJbnB1dCIsInN0eWxlZCIsIklucHV0IiwiU2VhcmNoIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxpRUFBTSxDQUFDQywwQ0FBSyxDQUFDQyxNQUFQLENBQVQsNEtBQWpCLEMsQ0FJQTtBQUNBO0FBRUE7QUFDQTs7S0FSTUgsVzs7QUFVTixJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtFQUFBOztFQUFBLElBQWZDLFFBQWUsUUFBZkEsUUFBZTs7RUFDbEMsZ0JBQThCQyxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7RUFBQSxJQUFPQyxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUNBLE9BQ0U7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMseUNBQUQ7SUFBTSxJQUFJLEVBQUMsWUFBWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47SUFBVyxHQUFHLEVBQUMsTUFBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxnREFBRDtJQUFNLElBQUksRUFBQyxHQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQURGLENBREYsQ0FERixFQU1FLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0lBQVcsR0FBRyxFQUFDLFNBQWY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsZ0RBQUQ7SUFBTSxJQUFJLEVBQUMsVUFBWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx3QkFERixDQURGLENBTkYsRUFXRSxNQUFDLHlDQUFELENBQU0sSUFBTjtJQUFXLEdBQUcsRUFBQyxNQUFmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLFdBQUQ7SUFBYSxXQUFXLE1BQXhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQVhGLEVBY0UsTUFBQyx5Q0FBRCxDQUFNLElBQU47SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsZ0RBQUQ7SUFBTSxJQUFJLEVBQUMsU0FBWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsMkNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw4QkFERixDQURGLENBREYsQ0FkRixDQURGLEVBdUJFLE1BQUMsd0NBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsd0NBQUQ7SUFBSyxFQUFFLEVBQUUsRUFBVDtJQUFhLEVBQUUsRUFBRSxDQUFqQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dELE9BQU8sR0FDTixNQUFDLG9EQUFEO0lBQWEsVUFBVSxFQUFFQyxVQUF6QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRE0sR0FHTixNQUFDLGtEQUFEO0lBQVcsVUFBVSxFQUFFQSxVQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSkosQ0FERixFQVFFLE1BQUMsd0NBQUQ7SUFBSyxFQUFFLEVBQUUsRUFBVDtJQUFhLEVBQUUsRUFBRSxFQUFqQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dILFFBREgsQ0FSRixFQVdFLE1BQUMsd0NBQUQ7SUFBSyxFQUFFLEVBQUUsRUFBVDtJQUFhLEVBQUUsRUFBRSxDQUFqQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFDRSxJQUFJLEVBQUMsa0NBRFA7SUFFRSxNQUFNLEVBQUMsUUFGVDtJQUdFLEdBQUcsRUFBQyxpQkFITjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLG1CQURGLENBWEYsQ0F2QkYsQ0FERjtBQStDRCxDQWpERDs7R0FBTUQsUzs7TUFBQUEsUztBQW1ETkEsU0FBUyxDQUFDSyxTQUFWLEdBQXNCO0VBQ3BCSixRQUFRLEVBQUVLLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QjtBQUllUix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTZiN2Q3NjVlMmE4Y2YwMmYwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBNZW51LCBJbnB1dCwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9Vc2VyUHJvZmlsZSc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbi8vIOy7tO2NvOuEjO2KuOuCmCDtg5zqt7jsl5Ag7Iqk7YOA7J287J2EIOyduOudvOyduO2YleyLneycvOuhnCDsnpHshLHtlZjrqbQgdmVydHVhbOuPlOydtCDrsJTrgJDqsbjroZwg7YyM7JWF7ZW07IScIOumrOuenOuNlOunge2VmOq4sOuVjOusuOyXkFxyXG4vLyBzdHlsZWQtY29tcG9uZW5066GcIOu5vOyEnCBJbnB1dC5TZWFyY2gg7Lu07Y2864SM7Yq466W8IOyKpO2DgOydvCDtlbTso7zslrQg7LWc7KCB7ZmUXHJcblxyXG4vLyDslYTri4jrqbQgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpPT4oeyBtYXJnaW5Ub3A6MTAgfSksW10p7ZW07IScIOyKpO2DgOydvCDtlaDri7lcclxuLy8g7J2065WMIHVzZU1lbW8oKeuKlCDqsJLsnYQg7LqQ7Iux7ZW07IScIOuzgO2VmOyngOyViuydjCA8LT4gdXNlQ2FsbEJhY2soKeydgCDtlajsiJjrpbwg7LqQ7IuxXHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiaG9tZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+64W465Oc67KE65OcPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwicHJvZmlsZVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxhPu2UhOuhnO2VhDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIm1haWxcIj5cclxuICAgICAgICAgIDxTZWFyY2hJbnB1dCBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8QnV0dG9uPu2ajOybkOqwgOyehTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAge2lzTG9naW4gPyAoXHJcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZSBzZXRJc0xvZ2luPXtzZXRJc0xvZ2lufSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPExvZ2luRm9ybSBzZXRJc0xvZ2luPXtzZXRJc0xvZ2lufSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezZ9PlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZXlvLTI1LmdpdGh1Yi5pby9leW9mbGl4XCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9yZSBub3JlZmVycmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWFkZSBieSBleW8yNVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9