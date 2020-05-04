webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/williamcole/Documents/Free/rob-game/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var App = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var item = document.getElementById('example-wrapper');
      item.addEventListener('wheel', function (e) {
        return item.scrollLeft -= e.deltaY * 1.5;
      });
      var controller = new ScrollMagic.Controller({
        vertical: false
      });
      var tween = TweenMax.to("#target", 1, {
        width: "+=800px"
      });
      var tween2 = TweenMax.to("#target2", 1, {
        width: "+=800px"
      });
      var tween3 = TweenMax.to("#target3", 1, {
        width: "+=800px"
      });
      var tween4 = TweenMax.to("#target4", 1, {
        width: "+=800px"
      });
      var tween5 = TweenMax.to("#target5", 1, {
        width: "+=800px"
      });
      var tween6 = TweenMax.to("#target6", 1, {
        width: "+=800px"
      });
      var tween7 = TweenMax.to("#target7", 1, {
        width: "+=800px"
      });
      var tween8 = TweenMax.to("#target8", 1, {
        width: "+=800px"
      });
      var tween9 = TweenMax.to("#target9", 1, {
        width: "+=800px"
      });
      var tween10 = TweenMax.to("#target10", 1, {
        width: "+=800px"
      });
      var tween11 = TweenMax.to("#target11", 1, {
        width: "+=800px"
      });
      var tween12 = TweenMax.to("#target12", 1, {
        width: "+=800px"
      });
      var tween13 = TweenMax.to("#target13", 1, {
        width: "+=800px"
      });
      var tween14 = TweenMax.to("#target14", 1, {
        width: "+=800px"
      });
      var halfScreenWidth = window.innerWidth / 2;
      new ScrollMagic.Scene({
        triggerElement: "#target",
        duration: halfScreenWidth
      }).setTween(tween) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target2",
        duration: halfScreenWidth
      }).setTween(tween2) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target3",
        duration: halfScreenWidth
      }).setTween(tween3) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target4",
        duration: halfScreenWidth
      }).setTween(tween4) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target5",
        duration: halfScreenWidth
      }).setTween(tween5) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target6",
        duration: halfScreenWidth
      }).setTween(tween6) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target7",
        duration: halfScreenWidth
      }).setTween(tween7) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target8",
        duration: halfScreenWidth
      }).setTween(tween8) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target9",
        duration: halfScreenWidth
      }).setTween(tween9) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target10",
        duration: halfScreenWidth
      }).setTween(tween10) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target11",
        duration: halfScreenWidth
      }).setTween(tween11) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target12",
        duration: halfScreenWidth
      }).setTween(tween12) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target13",
        duration: halfScreenWidth
      }).setTween(tween13) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: "#target14",
        duration: halfScreenWidth
      }).setTween(tween14) // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }
      }, "My page title"), __jsx("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }
      }), __jsx("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }), __jsx("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/plugins/debug.addIndicators.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }
      }), __jsx("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenMax.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }
      }), __jsx("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }
      })), __jsx("div", {
        id: "example-wrapper",
        "class": "horizontal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "scrollContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }
      }, __jsx("section", {
        className: "video",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }
      }), __jsx("div", {
        id: "target",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello",
        src: "/images/palceholder-probject-image.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 37
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 33
        }
      }, "title")), __jsx("div", {
        id: "target2",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello2",
        src: "/images/palceholder-probject-image-2.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target3",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello3",
        src: "/images/palceholder-probject-image-3.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target4",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target5",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image-2.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target6",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image-3.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target7",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target8",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image-2.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target9",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image-3.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target10",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target11",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image-2.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target12",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image-3.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target13",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 37
        }
      }))), __jsx("div", {
        id: "target14",
        "class": "box2 blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "image-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 33
        }
      }, __jsx("img", {
        id: "hello4",
        src: "/images/palceholder-probject-image-2.jpeg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 37
        }
      }))), __jsx("div", {
        "class": "spacer s_viewport",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 29
        }
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.eacb7248780e15ae0ca9.hot-update.js.map