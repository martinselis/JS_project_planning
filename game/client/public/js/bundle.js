/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SquareView = __webpack_require__(/*! ./views/square_view */ \"./client/src/views/square_view.js\")\nconst MasterView = __webpack_require__(/*! ./views/master_view */ \"./client/src/views/master_view.js\")\nconst DataLoad = __webpack_require__(/*! ./model/data_load */ \"./client/src/model/data_load.js\")\nconst GameLogic = __webpack_require__(/*! ./model/game_logic */ \"./client/src/model/game_logic.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('DOMContentLoaded')\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/model/data_load.js":
/*!***************************************!*\
  !*** ./client/src/model/data_load.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {const DataLoad = function() {\n  this.images = [\n  {id: 1, value: 1, url:\"images/1.jpg\"},\n  {id: 2, value: 2, url:\"images/2.jpg\"},\n  {id: 3, value: 3, url:\"images/3.jpg\"},\n  {id: 4, value: 1, url:\"images/1.jpg\"},\n  {id: 5, value: 2, url:\"images/2.jpg\"},\n  {id: 6, value: 3, url:\"images/3.jpg\"}\n]\n}\n\nDataLoad.prototype.duplicate = function () {\n\n};\n\nmodule.export = DataLoad\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/src/model/data_load.js?");

/***/ }),

/***/ "./client/src/model/game_logic.js":
/*!****************************************!*\
  !*** ./client/src/model/game_logic.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./client/src/model/game_logic.js?");

/***/ }),

/***/ "./client/src/views/master_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/master_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./client/src/helpers/pub_sub.js\");\n\nconst MasterView = function (container) {\n  this.container = container;\n}\n\n// Subscribe to all cards ready\nMasterView.prototype.setupEventListeners = function() {\n  PubSub.subscribe('DataLoad:cards-ready', (evt) => {\n    const items = evt.detail;\n    this.renderCards(items);\n  });\n};\n\n// Sends render to square view to allow all cards ready\nMasterView.prototype.renderCards = function(items){\n  items.forEach((item) => this.renderCards(item));\n}\n\n// Subscribe to reset if not match method.\n//\n// Subscribe to match tally and publish the Game Won message\n\nmodule.exports = MasterView\n\n\n//# sourceURL=webpack:///./client/src/views/master_view.js?");

/***/ }),

/***/ "./client/src/views/square_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/square_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./client/src/helpers/pub_sub.js\");\n// const MasterView = require('./views/master_view')\n\nconst SquareView = function (container) {\n  this.classList = classList;\n  this.container = container\n  this.card = card\n}\n\n//render all cards to grid\nSquareView.prototype.bindEvents = function(){\n  this.container = evt.detail;\n  this.render()\n}\n\nSquareView.prototype.render = function(){\n  const container = document.createElement('memory-game');\n  this.container.innerHTML = '';\n  this.container.appendChild(container);\n\n  const image = this.createCardImage()\n  container.appendChild(image)\n}\n\nSquareView.prototype.createCardImage = function() {\n  const image = document.createElement('img');\n\n  return image\n}\n\n//on event listen for flip cards\nconst cards = document.querySelectorAll('.memory-card')\n\nfunction flipCard() {\n  this.classList.toggle('flip');\n}\n\ncards.forEach(card => card.addEventListener('click', flipCard));\n\n\n//publish choosen cards back to the game logic file\n\nmodule.exports = SquareView\n\n\n//# sourceURL=webpack:///./client/src/views/square_view.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ })

/******/ });