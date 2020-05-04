(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/global.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */\nhtml, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6 {\n  margin: 0;\n  padding: 0; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: 100%;\n  font-weight: normal; }\n\nul {\n  list-style: none; }\n\nbutton, input, select, textarea {\n  margin: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nimg, video {\n  height: auto;\n  max-width: 100%; }\n\niframe {\n  border: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd, th {\n  padding: 0; }\n\ntd:not([align]), th:not([align]) {\n  text-align: left; }\n\n.video {\n  width: 100vw;\n  height: 100vh;\n  background: grey; }\n\nimg {\n  max-height: 395px; }\n\n#target, #target2, #target3, #target4, #target5, #target6, #target7, #target8 {\n  min-height: 100vh;\n  min-width: 400px;\n  max-width: 400px;\n  transform-origin: right; }\n\n.image-wrapper {\n  height: 100%;\n  display: flex;\n  align-items: flex-end; }\n\n/*\n    General styles\n  */\nbody {\n  background-color: #c7e1ff; }\n\nbody, html {\n  height: 100%; }\n\n/*\n    Containers\n  */\n#content-wrapper, #example-wrapper {\n  height: 100%; }\n\n.scrollContainer {\n  height: 100%;\n  margin: auto; }\n\n#example-wrapper .scrollContent {\n  height: 100%; }\n\n.horizontal.scrollContainer {\n  overflow-y: hidden;\n  overflow-x: scroll; }\n\n#example-wrapper.scrollContainer .scrollContent {\n  width: 100%;\n  height: auto; }\n\n#example-wrapper.scrollContainer.horizontal .scrollContent {\n  width: auto;\n  height: 100%; }\n\n#example-wrapper.horizontal {\n  white-space: nowrap;\n  font-size: 0;\n  /* fix for spaces between inline block divs */ }\n\n#example-wrapper.horizontal div {\n  font-size: 13px; }\n\n#example-wrapper .scrollContent div {\n  font-size: 13px; }\n\nsection#titlechart {\n  text-align: center;\n  position: relative;\n  height: 100%;\n  min-height: 500px;\n  min-width: 100%;\n  height: 100vh; }\n\n.horizontal section, .horizontal section#titlechart {\n  display: inline-block;\n  vertical-align: top;\n  height: 100%; }\n\nsection#titlechart #description {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  width: 600px;\n  height: 300px;\n  margin: -150px auto auto -300px; }\n\nsection#titlechart.home #description {\n  padding-top: 0;\n  padding-bottom: 100px; }\n\nsection#titlechart #description h1 {\n  margin: 0; }\n\nsection#titlechart #description h2 {\n  margin-bottom: 20px; }\n\nsection#titlechart #description a.viewsource {\n  margin-bottom: 20px;\n  display: inline-block; }\n\nsection#titlechart #description code {\n  background-color: #E1F1FF;\n  padding-left: 2px;\n  padding-right: 2px;\n  white-space: nowrap; }\n\nsection#titlechart #description ol, section#titlechart #description p {\n  text-align: left;\n  max-width: 400px;\n  margin: 10px auto 10px auto;\n  white-space: normal; }\n\nsection#titlechart #description ol {\n  list-style-position: outside; }\n\n#example-wrapper section#titlechart #description:after {\n  content: \"â†§\";\n  font-size: 40px;\n  display: block; }\n\n#example-wrapper.horizontal section#titlechart #description:after {\n  content: \"â†¦\"; }\n\nsection.demo * {\n  font-size: 13px; }\n\nsection.demo {\n  font-size: 0;\n  text-align: center; }\n\nsection.demo.fullheight {\n  min-height: 100%; }\n\nsection.demo.doublewidth, .spacer.doublewidth {\n  min-width: 200%; }\n\n.horizontal section.demo {\n  text-align: inherit;\n  white-space: nowrap; }\n\n.horizontal section.demo.fullwidth {\n  min-width: 100%; }\n\n/*\n    Elements\n  */\nh1.badge {\n  /*cursor: text;*/\n  pointer-events: none; }\n\nh1.badge:after {\n  vertical-align: text-top;\n  display: inline-block;\n  position: absolute;\n  cursor: pointer;\n  margin-left: 10px;\n  font-family: \"Source Sans Pro\", Arial, sans-serif;\n  font-weight: bold;\n  font-style: normal;\n  color: #FFFFFF;\n  font-size: 12px;\n  padding: 2px 5px;\n  dius: 10px;\n  pointer-events: all; }\n\nh1.badge.gsap:after {\n  content: \"GSAP\";\n  background-color: #61AC27; }\n\nh1.badge.velocity:after {\n  content: \"Velocity.js\";\n  background-color: #f53a47; }\n\n.spacer {\n  text-align: center;\n  min-height: 100px; }\n\n.spacer.s0 {\n  min-height: 1px; }\n\n.spacer.s1 {\n  min-height: 100px; }\n\n.spacer.s2 {\n  min-height: 200px; }\n\n.spacer.s3 {\n  min-height: 300px; }\n\n.spacer.s4 {\n  min-height: 400px; }\n\n.spacer.s5 {\n  min-height: 500px; }\n\n.spacer.s6 {\n  min-height: 600px; }\n\n.spacer.s7 {\n  min-height: 700px; }\n\n.spacer.s8 {\n  min-height: 800px; }\n\n.spacer.s9 {\n  min-height: 900px; }\n\n.spacer.s10 {\n  min-height: 1000px; }\n\n.spacer.s_viewport {\n  min-height: 100%; }\n\n.horizontal .spacer {\n  margin-bottom: 0;\n  min-height: 0;\n  min-height: initial;\n  min-width: 100px;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top; }\n\n.horizontal .spacer.s0 {\n  min-width: 1px; }\n\n.horizontal .spacer.s1 {\n  min-width: 100px; }\n\n.horizontal .spacer.s2 {\n  min-width: 200px; }\n\n.horizontal .spacer.s3 {\n  min-width: 300px; }\n\n.horizontal .spacer.s4 {\n  min-width: 400px; }\n\n.horizontal .spacer.s5 {\n  min-width: 500px; }\n\n.horizontal .spacer.s6 {\n  min-width: 600px; }\n\n.horizontal .spacer.s7 {\n  min-width: 700px; }\n\n.horizontal .spacer.s8 {\n  min-width: 800px; }\n\n.horizontal .spacer.s9 {\n  min-width: 900px; }\n\n.horizontal .spacer.s10 {\n  min-width: 1000px; }\n\n.spacer.s_viewport {\n  min-width: 100%; }\n\n.box1, .box2, .box3 {\n  display: inline-block;\n  position: relative;\n  dius: 8px;\n  border: 0px solid white;\n  text-align: center;\n  vertical-align: middle;\n  padding: 0 5px; }\n\n.box1 {\n  min-width: 100px;\n  height: 100px;\n  margin: 0 auto 0 auto; }\n\n.box2 {\n  min-width: 50px;\n  height: 50px;\n  margin: 25px auto 25px auto; }\n\n.box3 {\n  min-width: 26px;\n  height: 26px;\n  margin: 37px auto 37px auto; }\n\n.horizontal .box1 {\n  top: 50%;\n  max-height: 100px;\n  margin: -50px 0 auto 0; }\n\n.horizontal .box2 {\n  top: 50%;\n  max-height: 50px;\n  margin: -25px 25px auto 25px; }\n\n.horizontal .box3 {\n  top: 50%;\n  max-height: 26px;\n  margin: -13px 37px auto 37px; }\n\n.box1 p, .box2 p, .box3 p {\n  margin: 5px 15px 5px 15px;\n  font-size: 13px;\n  font-weight: lighter;\n  color: white; }\n\n.box1 p:first-child {\n  margin-top: 27px; }\n\n.box1 a, .box2 a, .box3 a {\n  color: white; }\n\n.box1.white *, .box2.white *, .box3.white * {\n  color: #2e639e; }\n\n.box2.mario {\n  background-color: #004fae;\n  border-top: 30px solid #fc112f;\n  border-bottom: 10px solid #c4723b; }\n\n.box3.goomba {\n  min-width: 30px;\n  height: 4px;\n  margin-top: 75px;\n  margin-left: 30px;\n  margin-bottom: 25px;\n  background-color: #b39475;\n  border-top: 30px solid #744527;\n  border-bottom: 6px solid #c4723b; }\n\n/*\n    colors\n  */\n.box1.outline, .box2.outline, .box3.outline {\n  border: 1px solid white; }\n\n.blue {\n  border: 1px solid black; }\n\n.turqoise {\n  background-color: #38ced7; }\n\n.brown {\n  background-color: #a66f28; }\n\n.bordeaux {\n  background-color: #953543; }\n\n.skin {\n  background-color: #ED9F4C; }\n\n.black {\n  background-color: #000000; }\n\n.white {\n  background-color: #FFFFFF; }\n\n.red {\n  background-color: #cf3535; }\n\n.green {\n  background-color: #22d659; }\n\n.orange {\n  background-color: #ea6300; }\n\n/*\n    Form\n  */\nform.move {\n  text-align: left;\n  position: fixed;\n  top: 70px;\n  left: 20px;\n  display: block;\n  background-color: white;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 20px;\n  z-index: 20; }\n\nhtml.touch form.move {\n  top: 120px; }\n\nform > div, form > fieldset > div {\n  margin: 10px 0 10px 0;\n  display: block; }\n\nform .slider {\n  min-width: 199px;\n  display: inline-block;\n  position: relative;\n  height: 9px;\n  border-right: 1px solid #2e639e;\n  border-left: 1px solid #2e639e;\n  vertical-align: middle;\n  margin-right: 5px; }\n\nform .slider .trackbar {\n  margin-top: 4px;\n  border-top: 1px solid #2e639e;\n  height: 4px; }\n\nform .slider .handle {\n  height: 14px;\n  width: 6px;\n  position: absolute;\n  top: -4px;\n  margin-left: -4px;\n  left: 0%;\n  background-color: white;\n  cursor: pointer;\n  border: 1px solid #2e639e; }\n\nform .slider .handle:hover, form .slider.dragging .handle {\n  background-color: #79b0ee; }\n\nform .slider + input {\n  background-color: transparent;\n  border: none;\n  padding: 0; }\n\nform #options label, form #actions label, form #tweenparams label {\n  min-width: 90px;\n  text-align: right;\n  display: inline-block;\n  margin-right: 10px; }\n\nform #tweenparams label {\n  min-width: 50px; }\n\nform #options button {\n  width: 65px; }\n\nform fieldset {\n  padding: 0 10px 0 10px;\n  margin: 5px 0 0 0; }\n\nform fieldset:first-child {\n  margin-top: -5px; }\n\nform fieldset legend {\n  padding: 0 5px 0 5px;\n  margin: 0; }\n\n.move {\n  cursor: move; }\n\n.move * {\n  cursor: auto; }\n\n.move label {\n  cursor: default; }\n\n/*\n    MENU\n  */\nul#menu, ul#menu ul {\n  list-style: none;\n  padding: 0; }\n\nul#menu {\n  position: fixed;\n  z-index: 999;\n  width: 540px;\n  left: 50%;\n  margin: 10px auto auto -270px;\n  text-align: center; }\n\nul#menu > li {\n  display: inline-block;\n  margin: 0 5px 0 5px;\n  position: relative;\n  min-height: 30px;\n  background-color: #79b0ee;\n  vertical-align: top;\n  min-width: 165px; }\n\nul#menu li a {\n  padding: 0 5px 0 5px;\n  display: block;\n  text-decoration: none;\n  line-height: 30px;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-size: 15px; }\n\nul#menu ul {\n  display: none; }\n\nul#menu li:hover > a, ul#menu li.current > a {\n  color: #2e639e; }\n\nul#menu li:hover ul, html.touch ul#menu li.open ul {\n  display: block;\n  width: 100%;\n  padding: 5px 0 5px 0;\n  border-top: 1px dashed white; }\n\nul#menu ul li a {\n  text-transform: none;\n  font-size: 12px;\n  line-height: 20px;\n  font-weight: lighter;\n  color: #133f71; }\n\nul#menu ul li.current a {\n  background-color: #FFFFFF; }\n\nul#menu ul li a:hover {\n  background-color: #3883d8;\n  color: white; }\n\n.menuwrap {\n  position: fixed;\n  background-color: white;\n  background-color: rgba(255, 255, 255, 0.9);\n  min-width: 540px;\n  left: 50%;\n  margin-left: -270px;\n  min-height: 51px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  z-index: 99999;\n  text-align: center;\n  transition: top 0.5s;\n  -webkit-transition: top 0.5s;\n  /* Safari */\n  transition-delay: 1s;\n  -webkit-transition-delay: 1s;\n  /* Safari */ }\n\n#titlechart .menuwrap {\n  position: absolute;\n  z-index: inherit;\n  background-color: transparent; }\n\n.menuwrap ul#menu {\n  position: absolute; }\n\n.menuwrap > a.prev, .menuwrap > a.next {\n  display: block;\n  position: absolute;\n  background-color: white;\n  background-color: rgba(255, 255, 255, 0.9);\n  line-height: 30px;\n  width: 30px;\n  height: 30px;\n  top: 11px;\n  margin: 0 280px;\n  box-sizing: border-box; }\n\n.menuwrap > a.prev:hover, .menuwrap > a.next:hover {\n  text-decoration: none;\n  background-color: #79b0ee;\n  color: #FFFFFF; }\n\n.menuwrap > a.prev {\n  margin-left: 0;\n  padding-right: 2px;\n  right: 50%; }\n\n.menuwrap > a.next {\n  margin-right: 0;\n  padding-left: 4px;\n  left: 50%; }\n\n/*\n    mobile\n  */\nhtml.touch .menuwrap {\n  z-index: 999999;\n  box-sizing: content-box;\n  min-width: 0;\n  width: 100%;\n  margin: 0;\n  left: 0;\n  top: 0;\n  height: auto;\n  background-color: transparent; }\n\nhtml.touch ul#menu {\n  position: static;\n  margin: 100px 0 0 0;\n  text-align: center;\n  width: 100%;\n  left: 0;\n  display: none; }\n\nhtml.touch .menuwrap.open {\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.9);\n  overflow: scroll; }\n\nhtml.touch .menuwrap.open ul#menu {\n  display: block; }\n\nhtml.touch ul#menu > li {\n  display: block;\n  margin: 10px;\n  height: auto; }\n\nhtml.touch ul#menu ul {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px dashed white; }\n\nhtml.touch ul#menu li {\n  padding: 10px 0; }\n\nhtml.touch ul#menu > li a {\n  color: #2e639e;\n  font-size: 4em;\n  line-height: 1.2em; }\n\nhtml.touch ul#menu ul li a {\n  font-size: 2.5em;\n  line-height: 1.2em; }\n\nhtml.touch ul#menu ul {\n  display: block; }\n\nhtml.touch ul#menu ul li.current a {\n  background-color: transparent; }\n\nhtml.touch ul#menu ul li a:hover {\n  background-color: transparent; }\n\nhtml.touch ul#menu ul li a:active {\n  color: white; }\n\nhtml.touch .menuwrap > a.prev, html.touch .menuwrap > a.next, html.touch .menubtn {\n  width: 80px;\n  height: 80px;\n  dius: 40px;\n  top: 10px;\n  background-color: #3883d8;\n  color: white;\n  font-size: 4em;\n  line-height: 1.5em; }\n\nhtml.touch .menuwrap > a.prev:active, html.touch .menuwrap > a.next:active, html.touch .menubtn:active {\n  background-color: white;\n  color: #3883d8;\n  border: 2px solid #3883d8; }\n\nhtml.touch .menuwrap > a.prev {\n  margin-right: 70px;\n  padding-right: 10px; }\n\nhtml.touch .menuwrap > a.next {\n  margin-left: 70px;\n  padding-left: 10px; }\n\nhtml.touch .menubtn {\n  padding: 0;\n  border: 0;\n  position: absolute;\n  left: 50%;\n  margin-left: -40px;\n  line-height: 0;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nhtml.touch .menubtn:active .button-lines, html.touch .menubtn:active .button-lines::before, html.touch .menubtn:active .button-lines::after {\n  background: #3883d8; }\n\nhtml.touch .menubtn .button-lines, html.touch .menubtn .button-lines::before, html.touch .menubtn .button-lines::after {\n  display: inline-block;\n  height: 6px;\n  width: 35px;\n  dius: 4px;\n  transition: 0.3s;\n  background: #FFFFFF;\n  position: relative;\n  left: 0;\n  top: -5px; }\n\nhtml.touch .menubtn .button-lines::before, html.touch .menubtn .button-lines::after {\n  content: '';\n  position: absolute; }\n\nhtml.touch .menubtn .button-lines::before {\n  top: 12px; }\n\nhtml.touch .menubtn .button-lines::after {\n  top: -12px; }\n\nhtml.touch .menuwrap.open .menubtn .button-lines {\n  background: transparent; }\n\nhtml.touch .menuwrap.open .menubtn .button-lines::before {\n  top: 0px;\n  transform: rotate3d(0, 0, 1, -45deg);\n  transform-origin: 50% 50%; }\n\nhtml.touch .menuwrap.open .menubtn .button-lines::after {\n  top: 0px;\n  transform: rotate3d(0, 0, 1, 45deg);\n  transform-origin: 50% 50%; }\n\n/*\n    Codecontainer\n  */\n#codecontainer {\n  position: fixed;\n  top: 30px;\n  bottom: 20px;\n  right: 20px;\n  left: 20px;\n  background-color: white;\n  dius: 4px;\n  z-index: 99999;\n  min-height: 300px; }\n\n#codecontainer pre {\n  margin: 0;\n  padding: 0;\n  line-height: 16px;\n  -moz-tab-size: 4;\n    -o-tab-size: 4;\n       tab-size: 4; }\n\n#codecontainer pre .break {\n  background-color: #F6F6F6;\n  font-weight: bold;\n  color: #aaa; }\n\n#codecontainer pre .break:before {\n  content: \"áŽ’\"; }\n\n#codecontainer .codewrap {\n  position: absolute;\n  top: 10px;\n  bottom: 10px;\n  width: 100%;\n  overflow: hidden;\n  overflow: scroll;\n  white-space: nowrap; }\n\n#codecontainer .code, #codecontainer .linenumbers {\n  min-height: 100%; }\n\n#codecontainer .code {\n  padding: 0;\n  display: inline-block; }\n\n#codecontainer .code {\n  padding: 0 15px 10px 5px; }\n\n#codecontainer .linenumbers {\n  float: left;\n  padding: 0px 5px 0px 10px;\n  color: #aaa;\n  text-align: right;\n  border-right: 1px solid #e5e5e5; }\n\n#codecontainer span.indent {\n  width: 31px;\n  display: inline-block;\n  white-space: nowrap; }\n\n#codecontainer #close.button {\n  position: fixed;\n  top: 20px;\n  right: 10px;\n  width: 20px;\n  height: 20px; }\n\n#codecontainer #select.button {\n  position: fixed;\n  top: 20px;\n  right: 40px;\n  height: 20px;\n  padding: 0 10px 0 10px; }\n\n#codecontainer #close.button:after {\n  content: \"à¾¾\"; }\n\n#codecontainer .button {\n  background-color: white;\n  dius: 10px;\n  border: 1px solid #e5e5e5;\n  text-align: center;\n  cursor: pointer;\n  color: #2e639e; }\n\n#codecontainer .button:hover {\n  background-color: #3883d8;\n  color: white; }\n\n/*\n    OTHER\n  */\na.viewsource:after {\n  content: \" }\"; }\n\na.viewsource:before {\n  content: \"{ \"; }\n\n#parallaxContainer {\n  width: 900px;\n  height: 500px;\n  top: 30px;\n  position: relative; }\n\n#parallaxContainer .layer1 {\n  height: 100%;\n  text-align: center; }\n\n#parallaxContainer .layer2 {\n  position: absolute;\n  height: 139px;\n  width: 100%;\n  bottom: 32px; }\n\n#parallaxContainer .layer3 {\n  position: absolute;\n  height: 32px;\n  width: 100%;\n  bottom: 0px; }\n\n#parallaxText {\n  width: 0;\n  height: 100%;\n  margin: auto;\n  position: relative; }\n\n#parallaxText .layer1, #parallaxText .layer2, #parallaxText .layer3 {\n  position: absolute;\n  font-size: 50px;\n  line-height: 50px;\n  margin-left: -150px;\n  margin-top: -25px;\n  width: 300px;\n  top: 50%;\n  left: 50%;\n  text-align: center;\n  color: #133f71; }\n\n#parallaxText .layer1 {\n  top: 48%; }\n\n#parallaxText .layer2 {\n  top: 49%; }\n\n#parallaxText .layer3 a {\n  display: block;\n  font-family: \"Source Sans Pro\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal; }\n\n#parallax1 > div, #parallax2 > div, #parallax3 > div {\n  -webkit-transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  -webkit-perspective: 1000; }\n\n.dynamicContent #content {\n  width: 390px;\n  margin: auto;\n  text-align: left; }\n\n.dynamicContent #content .box1 {\n  margin: 10px; }\n\n.dynamicContent #loader {\n  height: 0;\n  overflow: hidden;\n  line-height: 60px; }\n\n.dynamicContent #loader.active {\n  height: 60px; }\n\n.dynamicContent #loader img {\n  vertical-align: text-bottom; }\n\n#customactions {\n  height: 160px;\n  width: 170px;\n  margin: auto;\n  padding-top: 40px;\n  text-align: left; }\n\n#customactions label {\n  width: 100px;\n  display: inline-block; }\n\n#customactions code {\n  color: #3883d8; }\n\n#customactions a.viewsource {\n  margin-top: 20px;\n  display: block;\n  text-align: center; }\n\n.demo.responsiveDuration {\n  position: relative; }\n\n.responsiveDuration .box1 {\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  margin-top: -50px;\n  margin-left: -50px; }\n\n#destroybox a {\n  display: block;\n  margin-top: 20px; }\n\n#destroybox a.disabled {\n  color: #79b0ee; }\n\n#mobileadvanced {\n  width: 150px;\n  height: 150px; }\n\n#mobileadvanced p {\n  margin-top: 50px; }\n\n#multiDirect {\n  text-align: left;\n  position: relative; }\n\n#multiDirect .box1 {\n  left: 50vw;\n  top: 200px;\n  margin-left: -60px; }\n\n#multiDirect .box1 p:first-child {\n  margin-top: 20px; }\n\n#imagesequence {\n  height: 300px; }\n\n.copyright {\n  font-feature-settings: ;\n  font-variant: italic;\n  font-size: 11px; }\n\n#bezier {\n  overflow: hidden;\n  position: relative; }\n\n#bezier #plane {\n  position: absolute;\n  left: -100px; }\n\n#bezier a.viewsource {\n  margin: 100px;\n  display: inline-block; }\n\n.demo#section-slides, .demo#section-wipes {\n  height: 100%;\n  width: 100%;\n  background-image: none; }\n\n.demo#section-slides .panel > b, .demo#section-wipes .panel > b {\n  font-size: 15px;\n  color: white;\n  position: relative;\n  display: block;\n  height: 0;\n  overflow: visible;\n  top: 50%; }\n\n/*\n\n  Codehighlighting\n  github.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n  */\n.hljs {\n  display: block;\n  padding: 0.5em;\n  color: #333;\n  /*background: #f8f8f8*/ }\n\n.hljs-comment,\n.hljs-template_comment,\n.diff .hljs-header,\n.hljs-javadoc {\n  color: #998;\n  font-style: italic; }\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.javascript .hljs-title,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold; }\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #099; }\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-phpdoc,\n.tex .hljs-formula {\n  color: #d14; }\n\n.hljs-title,\n.hljs-id,\n.coffeescript .hljs-params,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold; }\n\n.javascript .hljs-title,\n.lisp .hljs-title,\n.clojure .hljs-title,\n.hljs-subst {\n  font-weight: normal; }\n\n.hljs-class .hljs-title,\n.haskell .hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold; }\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rules .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal; }\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body {\n  color: #008080; }\n\n.hljs-regexp {\n  color: #009926; }\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073; }\n\n.hljs-built_in,\n.lisp .hljs-title,\n.clojure .hljs-built_in {\n  color: #0086b3; }\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold; }\n\n.hljs-deletion {\n  background: #fdd; }\n\n.hljs-addition {\n  background: #dfd; }\n\n.diff .hljs-change {\n  background: #0086b3; }\n\n.hljs-chunk {\n  color: #aaa; }\n", "",{"version":3,"sources":["/Users/williamcole/Documents/Free/rob-game/styles/global.scss"],"names":[],"mappings":"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","file":"global.scss","sourcesContent":["/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:left}\n\n.video {\n    width: 100vw;\n    height: 100vh;\n    background: grey;\n}\n\nimg {\n    max-height: 395px;\n}\n\n#target, #target2, #target3, #target4, #target5, #target6, #target7, #target8 {\n    min-height: 100vh;\n    min-width: 400px;\n    max-width: 400px;\n    transform-origin: right;\n}\n\n.image-wrapper {\n    height: 100%;\n    display: flex;\n    align-items: flex-end;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  /*\n    General styles\n  */\n  body {\n    background-color: #c7e1ff;\n  }\n  body, html {\n    height: 100%\n  }\n\n\n  /*\n    Containers\n  */\n  #content-wrapper, #example-wrapper {\n    height: 100%;\n  }\n  .scrollContainer {\n\n  }\n  .scrollContainer {\n    height: 100%;\n    margin: auto;\n  }\n  #example-wrapper .scrollContent {\n    height: 100%;\n  }\n\n  .horizontal.scrollContainer {\n    overflow-y: hidden;\n    overflow-x: scroll;\n  }\n  #example-wrapper.scrollContainer .scrollContent {\n    width: 100%;\n    height: auto;\n  }\n  #example-wrapper.scrollContainer.horizontal .scrollContent {\n    width: auto;\n    height: 100%;\n  }\n  #example-wrapper.horizontal {\n    white-space: nowrap;\n    font-size: 0;  /* fix for spaces between inline block divs */\n  }\n  #example-wrapper.horizontal div {\n    font-size: 13px;\n  }\n\n  #example-wrapper .scrollContent div {\n    font-size: 13px;\n  }\n  #example-wrapper section {\n  }\n\n  section#titlechart {\n    text-align: center;\n    position: relative;\n    height: 100%;\n    min-height: 500px;\n    min-width: 100%;\n    height: 100vh;\n  }\n  .horizontal section, .horizontal section#titlechart{\n    display: inline-block;\n    vertical-align: top;\n    height: 100%;\n  }\n  section#titlechart #description {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    width: 600px;\n    height: 300px;\n    margin: -150px auto auto -300px;\n  }\n  section#titlechart.home #description {\n    padding-top: 0;\n    padding-bottom: 100px;\n  }\n  section#titlechart #description h1 {\n    margin: 0;\n  }\n  section#titlechart #description h2 {\n    margin-bottom: 20px;\n  }\n  section#titlechart #description a.viewsource {\n    margin-bottom: 20px;\n    display: inline-block;\n  }\n  section#titlechart #description code {\n    background-color: #E1F1FF;\n    padding-left: 2px;\n    padding-right: 2px;\n    white-space: nowrap;\n  }\n\n  section#titlechart #description ol, section#titlechart #description p {\n    text-align: left;\n    max-width: 400px;\n    margin: 10px auto 10px auto;\n    white-space: normal;\n  }\n  section#titlechart #description ol {\n    list-style-position: outside;\n  }\n  #example-wrapper section#titlechart #description:after {\n    content: \"â†§\";\n    font-size: 40px;\n    display: block;\n  }\n  #example-wrapper.horizontal section#titlechart #description:after {\n    content: \"â†¦\";\n  }\n\n\n  section.demo * {\n    font-size: 13px;\n  }\n  section.demo {\n    font-size: 0;\n    text-align: center;\n    // background-image: url(\"../img/example_bg_v.png\");\n  }\n  section.demo.fullheight {\n    min-height: 100%;\n  }\n  section.demo.doublewidth, .spacer.doublewidth {\n    min-width: 200%;\n  }\n  .horizontal section.demo {\n    text-align: inherit;\n    white-space: nowrap;\n    // background-image: url(\"../img/example_bg_h.png\");\n  }\n  .horizontal section.demo.fullwidth {\n    min-width: 100%;\n  }\n  /*\n    Elements\n  */\n  h1.badge {\n    /*cursor: text;*/\n    pointer-events: none;\n  }\n  h1.badge:after {\n    vertical-align: text-top;\n    display: inline-block;\n    position: absolute;\n    cursor: pointer;\n    margin-left: 10px;\n    font-family: \"Source Sans Pro\", Arial, sans-serif;\n    font-weight: bold;\n    font-style: normal;\n    color: #FFFFFF;\n    font-size: 12px;\n    padding: 2px 5px;\n    dius: 10px;\n    pointer-events: all;\n  }\n  h1.badge.gsap:after {\n    content: \"GSAP\";\n    background-color: #61AC27;\n  }\n  h1.badge.velocity:after {\n    content: \"Velocity.js\";\n    background-color: #f53a47;\n  }\n  .spacer {\n    text-align: center;\n    min-height: 100px;\n    // background-image: url(\"../img/example_bg_spacer_v.gif\");\n  }\n  .spacer.s0 {\n    min-height: 1px;\n  }\n  .spacer.s1 {\n    min-height: 100px;\n  }\n  .spacer.s2 {\n    min-height: 200px;\n  }\n  .spacer.s3 {\n    min-height: 300px;\n  }\n  .spacer.s4 {\n    min-height: 400px;\n  }\n  .spacer.s5 {\n    min-height: 500px;\n  }\n  .spacer.s6 {\n    min-height: 600px;\n  }\n  .spacer.s7 {\n    min-height: 700px;\n  }\n  .spacer.s8 {\n    min-height: 800px;\n  }\n  .spacer.s9 {\n    min-height: 900px;\n  }\n  .spacer.s10 {\n    min-height: 1000px;\n  }\n  .spacer.s_viewport {\n    min-height: 100%;\n  }\n  .horizontal .spacer {\n    // background-image: url(\"../img/example_bg_spacer_h.gif\");\n    margin-bottom: 0;\n    min-height: initial;\n    min-width: 100px;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n  }\n  .horizontal .spacer.s0 {\n    min-width: 1px;\n  }\n  .horizontal .spacer.s1 {\n    min-width: 100px;\n  }\n  .horizontal .spacer.s2 {\n    min-width: 200px;\n  }\n  .horizontal .spacer.s3 {\n    min-width: 300px;\n  }\n  .horizontal .spacer.s4 {\n    min-width: 400px;\n  }\n  .horizontal .spacer.s5 {\n    min-width: 500px;\n  }\n  .horizontal .spacer.s6 {\n    min-width: 600px;\n  }\n  .horizontal .spacer.s7 {\n    min-width: 700px;\n  }\n  .horizontal .spacer.s8 {\n    min-width: 800px;\n  }\n  .horizontal .spacer.s9 {\n    min-width: 900px;\n  }\n  .horizontal .spacer.s10 {\n    min-width: 1000px;\n  }\n  .spacer.s_viewport {\n    min-width: 100%;\n  }\n\n  .box1, .box2, .box3 {\n    display: inline-block;\n    position: relative;\n    dius: 8px;\n    border: 0px solid white;\n    text-align: center;\n    vertical-align: middle;\n    padding: 0 5px;\n  }\n  .box1 {\n    min-width: 100px;\n    height: 100px;\n    margin: 0 auto 0 auto;\n  }\n  .box2 {\n    min-width: 50px;\n    height: 50px;\n    margin: 25px auto 25px auto;\n  }\n  .box3 {\n    min-width: 26px;\n    height: 26px;\n    margin: 37px auto 37px auto;\n  }\n  .horizontal .box1 {\n    top: 50%;\n    max-height: 100px;\n    margin: -50px 0 auto 0;\n  }\n  .horizontal .box2 {\n    top: 50%;\n    max-height: 50px;\n    margin: -25px 25px auto 25px;\n  }\n  .horizontal .box3 {\n    top: 50%;\n    max-height: 26px;\n    margin: -13px 37px auto 37px;\n  }\n  .box1 p, .box2 p, .box3 p {\n    margin: 5px 15px 5px 15px;\n    font-size: 13px;\n    font-weight: lighter;\n    color: white;\n  }\n  .box1 p:first-child {\n    margin-top: 27px;\n  }\n  .box1 a, .box2 a, .box3 a {\n    color: white;\n  }\n  .box1.white *, .box2.white *, .box3.white * {\n    color: #2e639e;\n  }\n  .box2.mario {\n    background-color: #004fae;\n    border-top: 30px solid #fc112f;\n    border-bottom: 10px solid #c4723b;\n  }\n  .box3.goomba {\n    min-width: 30px;\n    height: 4px;\n    margin-top: 75px;\n    margin-left: 30px;\n    margin-bottom: 25px;\n    background-color: #b39475;\n    border-top: 30px solid #744527;\n    border-bottom: 6px solid #c4723b;\n  }\n  /*\n    colors\n  */\n\n  .box1.outline, .box2.outline, .box3.outline {\n    border: 1px solid white;\n  }\n  .blue {\n    border: 1px solid black;\n  }\n  .turqoise {\n    background-color: #38ced7;\n  }\n  .brown {\n    background-color: #a66f28;\n  }\n  .bordeaux {\n    background-color: #953543;\n  }\n  .skin {\n    background-color: #ED9F4C;\n  }\n  .black {\n    background-color: #000000;\n  }\n  .white {\n    background-color: #FFFFFF;\n  }\n  .red {\n    background-color: #cf3535;\n  }\n  .green {\n    background-color: #22d659;\n  }\n  .orange {\n    background-color: #ea6300;\n  }\n  /*\n    Form\n  */\n  form.move {\n    text-align: left;\n    position: fixed;\n    top: 70px;\n    left: 20px;\n    display: block;\n    background-color: white;\n    background-color: rgba(255, 255, 255, 0.9);\n    padding: 20px;\n    z-index: 20;\n  }\n  html.touch form.move {\n    top: 120px;\n  }\n  form > div, form > fieldset > div {\n    margin: 10px 0 10px 0;\n    display: block;\n  }\n  form .slider {\n    min-width: 199px;\n    display: inline-block;\n    position: relative;\n    height: 9px;\n    border-right: 1px solid #2e639e;\n    border-left: 1px solid #2e639e;\n    vertical-align: middle;\n    margin-right: 5px;\n  }\n  form .slider .trackbar {\n    margin-top: 4px;\n    border-top: 1px solid #2e639e;\n    height: 4px;\n  }\n  form .slider .handle {\n    height: 14px;\n    width: 6px;\n    position: absolute;\n    top: -4px;\n    margin-left: -4px;\n    left: 0%;\n    background-color: white;\n    cursor: pointer;\n    border: 1px solid #2e639e;\n  }\n  form .slider .handle:hover, form .slider.dragging .handle {\n    background-color: #79b0ee;\n  }\n  form .slider + input {\n    background-color: transparent;\n    border: none;\n    padding: 0;\n  }\n  form #options label, form #actions label, form #tweenparams label {\n    min-width: 90px;\n    text-align: right;\n    display: inline-block;\n    margin-right: 10px;\n  }\n  form #tweenparams label {\n    min-width: 50px;\n  }\n  form #options button {\n    width: 65px;\n  }\n  form fieldset {\n    padding: 0 10px 0 10px;\n    margin: 5px 0 0 0;\n  }\n  form fieldset:first-child {\n    margin-top: -5px;\n  }\n  form fieldset legend {\n    padding: 0 5px 0 5px;\n    margin: 0;\n  }\n\n  .move {\n    cursor: move;\n  }\n  .move * {\n    cursor: auto;\n  }\n  .move label {\n    cursor: default;\n  }\n\n  /*\n    MENU\n  */\n\n  ul#menu, ul#menu ul {\n    list-style: none;\n    padding: 0;\n  }\n\n  ul#menu {\n    position: fixed;\n    z-index: 999;\n    width: 540px;\n    left: 50%;\n    margin: 10px auto auto -270px;\n    text-align: center;\n  }\n\n  ul#menu > li {\n    display: inline-block;\n    margin: 0 5px 0 5px;\n    position: relative;\n    min-height: 30px;\n    background-color: #79b0ee;\n    vertical-align: top;\n    min-width: 165px;\n  }\n  ul#menu li a {\n    padding: 0 5px 0 5px;\n    display: block;\n    text-decoration: none;\n    line-height: 30px;\n    color: white;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    font-size: 15px;\n  }\n  ul#menu ul {\n    display: none;\n  }\n\n  ul#menu li:hover > a, ul#menu li.current > a {\n    color: #2e639e;\n  }\n\n  ul#menu li:hover ul, html.touch ul#menu li.open ul {\n    display: block;\n    width: 100%;\n    padding: 5px 0 5px 0;\n    border-top: 1px dashed white;\n  }\n  ul#menu ul li a {\n    text-transform: none;\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: lighter;\n    color: #133f71;\n  }\n  ul#menu ul li.current a {\n    background-color: #FFFFFF;\n  }\n  ul#menu ul li a:hover {\n    background-color: #3883d8;\n    color: white;\n  }\n\n  .menuwrap {\n    position: fixed;\n    background-color: white;\n    background-color: rgba(255, 255, 255, 0.9);\n    min-width: 540px;\n    left: 50%;\n    margin-left: -270px;\n    min-height: 51px;\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    z-index: 99999;\n    text-align: center;\n    transition: top 0.5s;\n    -webkit-transition: top 0.5s; /* Safari */\n    transition-delay: 1s;\n    -webkit-transition-delay: 1s; /* Safari */\n  }\n\n  #titlechart .menuwrap {\n    position: absolute;\n    z-index: inherit;\n    background-color: transparent;\n  }\n\n  .menuwrap ul#menu {\n    position: absolute;\n  }\n  .menuwrap > a.prev, .menuwrap > a.next {\n    display: block;\n    position: absolute;\n    background-color: white;\n    background-color: rgba(255, 255, 255, 0.9);\n    line-height: 30px;\n    width: 30px;\n    height: 30px;\n    top: 11px;\n    margin: 0 280px;\n    box-sizing: border-box;\n  }\n  .menuwrap > a.prev:hover, .menuwrap > a.next:hover {\n    text-decoration: none;\n    background-color: #79b0ee;\n    color: #FFFFFF;\n  }\n  .menuwrap > a.prev {\n    margin-left: 0;\n    padding-right: 2px;\n    right: 50%;\n  }\n  .menuwrap > a.next {\n    margin-right: 0;\n    padding-left: 4px;\n    left: 50%;\n  }\n  /*\n    mobile\n  */\n  html.touch .menuwrap {\n    z-index: 999999;\n    box-sizing: content-box;\n    min-width: 0;\n    width: 100%;\n    margin: 0;\n    left: 0;\n    top: 0;\n    height: auto;\n    background-color: transparent;\n  }\n  html.touch ul#menu {\n    position: static;\n    margin: 100px 0 0 0;\n    text-align: center;\n    width: 100%;\n    left: 0;\n    display: none;\n  }\n  html.touch .menuwrap.open {\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.9);\n    overflow: scroll;\n  }\n  html.touch .menuwrap.open ul#menu {\n    display: block;\n  }\n\n  html.touch ul#menu > li {\n    display: block;\n    margin: 10px;\n    height: auto;\n  }\n  html.touch ul#menu ul {\n    margin-top: 10px;\n    padding-top: 10px;\n    border-top: 1px dashed white;\n  }\n  html.touch ul#menu li {\n    padding: 10px 0;\n  }\n  html.touch ul#menu li ul li{\n  }\n  html.touch ul#menu > li a {\n    color: #2e639e;\n    font-size: 4em;\n    line-height: 1.2em;\n  }\n  html.touch ul#menu ul li a {\n    font-size: 2.5em;\n    line-height: 1.2em;\n  }\n  html.touch ul#menu ul li a {\n  }\n  html.touch ul#menu ul {\n    display: block;\n  }\n  html.touch ul#menu ul li.current a {\n    background-color: transparent;\n  }\n  html.touch ul#menu ul li a:hover {\n    background-color: transparent;\n  }\n  html.touch ul#menu ul li a:active {\n    color: white;\n  }\n  html.touch .menuwrap > a.prev, html.touch .menuwrap > a.next, html.touch .menubtn {\n    width: 80px;\n    height: 80px;\n    dius: 40px;\n    top: 10px;\n    background-color: #3883d8;\n    color: white;\n    font-size: 4em;\n    line-height: 1.5em;\n  }\n  html.touch .menuwrap > a.prev:active, html.touch .menuwrap > a.next:active, html.touch .menubtn:active {\n    background-color: white;\n    color: #3883d8;\n    border: 2px solid #3883d8;\n  }\n  html.touch .menuwrap > a.prev {\n    margin-right: 70px;\n    padding-right: 10px; \n  }\n  html.touch .menuwrap > a.next {\n    margin-left: 70px;\n    padding-left: 10px;\n  }\n  html.touch .menubtn {\n    padding: 0;\n    border: 0;\n    position: absolute;\n    left: 50%;\n    margin-left: -40px;\n    line-height: 0;\n    outline: none;\n\n    appearance: none;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    transition: 0.3s;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  html.touch .menubtn:active .button-lines, html.touch .menubtn:active .button-lines::before, html.touch .menubtn:active .button-lines::after{\n    background: #3883d8;\n  }\n  html.touch .menubtn .button-lines, html.touch .menubtn .button-lines::before, html.touch .menubtn .button-lines::after {\n    display: inline-block;\n    height: 6px;\n    width: 35px;\n    dius: 4px;\n    transition: 0.3s;\n    background: #FFFFFF;\n    position: relative;\n    left: 0;\n    top: -5px;\n  }\n  html.touch .menubtn .button-lines::before, html.touch .menubtn .button-lines::after {\n    content: '';\n    position: absolute;\n  }\n  html.touch .menubtn .button-lines::before {\n    top: 12px;\n  }\n  html.touch .menubtn .button-lines::after {\n    top: -12px;\n  }\n  html.touch .menuwrap.open .menubtn .button-lines {\n    background: transparent;\n  }\n  html.touch .menuwrap.open .menubtn .button-lines::before {\n    top: 0px;\n    -o-transform: rotate3d(0, 0, 1, -45deg);\n    -moz-transform: rotate3d(0, 0, 1, -45deg);\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    -o-transform-origin: 50% 50%;\n    -moz-transform-origin: 50% 50%;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n  }\n  html.touch .menuwrap.open .menubtn .button-lines::after {\n    top: 0px;\n    -o-transform: rotate3d(0, 0, 1, 45deg);\n    -moz-transform: rotate3d(0, 0, 1, 45deg);\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    -o-transform-origin: 50% 50%;\n    -moz-transform-origin: 50% 50%;\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n  }\n\n\n  /*\n    Codecontainer\n  */\n  #codecontainer {\n    position: fixed;\n    top: 30px;\n    bottom: 20px;\n    right: 20px;\n    left: 20px;\n    background-color: white;\n    dius: 4px;\n    z-index: 99999;\n    min-height: 300px;\n  }\n  #codecontainer pre {\n    margin: 0;\n    padding: 0;\n    line-height: 16px;\n    tab-size: 4;\n  }\n  #codecontainer pre .break {\n    background-color: #F6F6F6;\n    font-weight: bold;\n    color: #aaa;\n  }\n  #codecontainer pre .break:before {\n    content: \"áŽ’\"\n  }\n  #codecontainer .codewrap {\n    position: absolute;\n    top: 10px;\n    bottom: 10px;\n    width: 100%;\n    overflow: hidden;\n    overflow: scroll;\n    white-space: nowrap;\n  }\n  #codecontainer .code, #codecontainer .linenumbers {\n    min-height: 100%;\n  }\n  #codecontainer .code {\n    padding: 0;\n    display: inline-block;\n  }\n  #codecontainer .code {\n    padding: 0 15px 10px 5px;\n  }\n  #codecontainer .linenumbers {\n    float: left;\n    padding: 0px 5px 0px 10px;\n    color: #aaa;\n    text-align: right;\n    border-right: 1px solid #e5e5e5;\n  }\n  #codecontainer span.indent {\n    width: 31px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n  #codecontainer #close.button {\n    position: fixed;\n    top: 20px;\n    right: 10px;\n    width: 20px;\n    height: 20px;\n  }\n  #codecontainer #select.button {\n    position: fixed;\n    top: 20px;\n    right: 40px;\n    height: 20px;\n    padding: 0 10px 0 10px;\n  }\n  #codecontainer #close.button:after {\n    content: \"à¾¾\";\n  }\n  #codecontainer .button {\n    background-color: white;\n    dius: 10px;\n    border: 1px solid #e5e5e5;\n    text-align: center;\n    cursor: pointer;\n    color: #2e639e;\n  }\n  #codecontainer .button:hover {\n    background-color: #3883d8;\n    color: white;\n  }\n\n  /*\n    OTHER\n  */\n  a.viewsource:after {\n    content: \" }\";\n  }\n  a.viewsource:before {\n    content: \"{ \";\n  }\n\n  #parallaxContainer {\n    width: 900px;\n    height: 500px;\n    top: 30px;\n    position: relative;\n  }\n  #parallaxContainer .layer1 {\n    height: 100%;\n    text-align: center;\n    // background-image: url(\"../img/example_parallax_l1.gif\");\n  }\n  #parallaxContainer .layer2 {\n    // background-image: url(\"../img/example_parallax_l2.png\");\n    position: absolute;\n    height: 139px;\n    width: 100%;\n    bottom: 32px\n  }\n  #parallaxContainer .layer3 {\n    // background-image: url(\"../img/example_parallax_l3.gif\");\n    position: absolute;\n    height: 32px;\n    width: 100%;\n    bottom: 0px;\n  }\n  #parallaxText {\n    width: 0;\n    height: 100%;\n    margin: auto;\n    position: relative;\n  }\n  #parallaxText .layer1, #parallaxText .layer2, #parallaxText .layer3 {\n    position: absolute;\n    font-size: 50px;\n    line-height: 50px;\n    margin-left: -150px;\n    margin-top: -25px;\n    width: 300px;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n    color: #133f71;\n  }\n  #parallaxText .layer1 {\n    top: 48%;\n  }\n  #parallaxText .layer2 {\n    top: 49%;\n  }\n  #parallaxText .layer3 a {\n    display: block;\n    font-family: \"Source Sans Pro\", Arial, sans-serif;\n    font-style: normal;\n    font-weight: normal;\n  }\n  #parallax1 > div, #parallax2 > div, #parallax3 > div {\n    -webkit-transform: translateZ(0);-webkit-backface-visibility: hidden;-webkit-perspective: 1000;\n  }\n\n  .dynamicContent #content {\n    width: 390px;\n    margin: auto;\n    text-align: left;\n  }\n  .dynamicContent #content .box1 {\n    margin: 10px;\n  }\n\n  .dynamicContent #loader {\n    height: 0;\n    overflow: hidden;\n    line-height: 60px;\n  }\n  .dynamicContent #loader.active {\n    height: 60px;\n  }\n  .dynamicContent #loader img {\n    vertical-align: text-bottom;\n  }\n\n  #customactions {\n    height: 160px;\n    width: 170px;\n    margin: auto;\n    padding-top: 40px;\n    text-align: left;\n  }\n  #customactions label {\n    width: 100px;\n    display: inline-block;\n  }\n  #customactions code {\n    color: #3883d8;\n  }\n  #customactions a.viewsource {\n    margin-top: 20px;\n    display: block;\n    text-align: center;\n  }\n  .demo.responsiveDuration {\n    position: relative;\n  }\n  .responsiveDuration .box1 {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    margin-top: -50px;\n    margin-left: -50px;\n  }\n  #destroybox a {\n    display: block;\n    margin-top: 20px;\n  }\n  #destroybox a.disabled {\n    color: #79b0ee;\n  }\n  #mobileadvanced {\n    width: 150px;\n    height: 150px;\n  }\n  #mobileadvanced p {\n    margin-top: 50px;\n  }\n  #multiDirect {\n    text-align: left;\n    position: relative;\n  }\n  #multiDirect .box1 {\n    left: 50vw;\n    top: 200px;\n    margin-left: -60px;\n  }\n  #multiDirect .box1 p:first-child {\n    margin-top: 20px;\n  }\n\n  #imagesequence {\n    height: 300px;\n  }\n\n  .copyright {\n    font-variant: italic;\n    font-size: 11px;\n  }\n\n  #bezier {\n    overflow: hidden;\n    position: relative;\n  }\n  #bezier #plane {\n    position: absolute;\n    left: -100px;\n  }\n  #bezier a.viewsource {\n    margin: 100px;\n    display: inline-block;\n  }\n\n  .demo#section-slides, .demo#section-wipes {\n    height: 100%;\n    width: 100%;\n    background-image: none;\n  }\n  .demo#section-slides .panel, .demo#section-wipes .panel {\n    // background-image: url(\"../img/example_bg_spacer_v.gif\");\n  }\n  .demo#section-wipes #pinContainer .turqoise, .demo#section-wipes #pinContainer .green, .demo#section-slides #slideContainer .panel {\n    // background-image: url(\"../img/example_bg_spacer_h.gif\");\n  }\n  .demo#section-slides .panel > b, .demo#section-wipes .panel > b {\n    font-size: 15px;\n    color: white;\n    position: relative;\n    display: block;\n    height: 0;\n    overflow: visible;\n    top: 50%;\n  }\n\n  /*\n\n  Codehighlighting\n  github.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n  */\n\n  .hljs {\n    display: block; padding: 0.5em;\n    color: #333;\n    /*background: #f8f8f8*/\n  }\n\n  .hljs-comment,\n  .hljs-template_comment,\n  .diff .hljs-header,\n  .hljs-javadoc {\n    color: #998;\n    font-style: italic\n  }\n\n  .hljs-keyword,\n  .css .rule .hljs-keyword,\n  .hljs-winutils,\n  .javascript .hljs-title,\n  .nginx .hljs-title,\n  .hljs-subst,\n  .hljs-request,\n  .hljs-status {\n    color: #333;\n    font-weight: bold\n  }\n\n  .hljs-number,\n  .hljs-hexcolor,\n  .ruby .hljs-constant {\n    color: #099;\n  }\n\n  .hljs-string,\n  .hljs-tag .hljs-value,\n  .hljs-phpdoc,\n  .tex .hljs-formula {\n    color: #d14\n  }\n\n  .hljs-title,\n  .hljs-id,\n  .coffeescript .hljs-params,\n  .scss .hljs-preprocessor {\n    color: #900;\n    font-weight: bold\n  }\n\n  .javascript .hljs-title,\n  .lisp .hljs-title,\n  .clojure .hljs-title,\n  .hljs-subst {\n    font-weight: normal\n  }\n\n  .hljs-class .hljs-title,\n  .haskell .hljs-type,\n  .vhdl .hljs-literal,\n  .tex .hljs-command {\n    color: #458;\n    font-weight: bold\n  }\n\n  .hljs-tag,\n  .hljs-tag .hljs-title,\n  .hljs-rules .hljs-property,\n  .django .hljs-tag .hljs-keyword {\n    color: #000080;\n    font-weight: normal\n  }\n\n  .hljs-attribute,\n  .hljs-variable,\n  .lisp .hljs-body {\n    color: #008080\n  }\n\n  .hljs-regexp {\n    color: #009926\n  }\n\n  .hljs-symbol,\n  .ruby .hljs-symbol .hljs-string,\n  .lisp .hljs-keyword,\n  .tex .hljs-special,\n  .hljs-prompt {\n    color: #990073\n  }\n\n  .hljs-built_in,\n  .lisp .hljs-title,\n  .clojure .hljs-built_in {\n    color: #0086b3\n  }\n\n  .hljs-preprocessor,\n  .hljs-pragma,\n  .hljs-pi,\n  .hljs-doctype,\n  .hljs-shebang,\n  .hljs-cdata {\n    color: #999;\n    font-weight: bold\n  }\n\n  .hljs-deletion {\n    background: #fdd\n  }\n\n  .hljs-addition {\n    background: #dfd\n  }\n\n  .diff .hljs-change {\n    background: #0086b3\n  }\n\n  .hljs-chunk {\n    color: #aaa\n  }"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/williamcole/Documents/Free/rob-game/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 12
    }
  }));
}

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /Users/williamcole/Documents/Free/rob-game/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map