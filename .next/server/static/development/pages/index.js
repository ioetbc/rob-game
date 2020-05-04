module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/williamcole/Documents/Free/rob-game/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const item = document.getElementById('example-wrapper');
    item.addEventListener('wheel', e => item.scrollLeft -= e.deltaY * 1.5);
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
    const halfScreenWidth = window.innerWidth / 2;
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

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      class: "horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, __jsx("div", {
      class: "scrollContent",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "box2 blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 29
      }
    }, __jsx("div", {
      class: "image-wrapper",
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
      class: "spacer s_viewport",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 29
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/williamcole/Documents/Free/rob-game/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map