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

eval("const MasterView = __webpack_require__(/*! ./views/master_view.js */ \"./client/src/views/master_view.js\")\nconst DataLoad = __webpack_require__(/*! ./model/data_load.js */ \"./client/src/model/data_load.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const masterDiv = document.querySelector('#master_grid');\n  const masterView = new MasterView(masterDiv);\n  masterView.bindEvents();\n\n  const dataLoad = new DataLoad();\n  dataLoad.publishData();\n\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

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

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst DataLoad = function() {\n\n  this.images = [\n    {id: 1, value: 1, url:\"images/1.jpeg\"},\n    {id: 2, value: 2, url:\"images/2.jpeg\"},\n    {id: 3, value: 3, url:\"images/3.jpg\"},\n    {id: 4, value: 4, url:\"images/4.png\"},\n    {id: 5, value: 5, url:\"images/5.jpg\"},\n    {id: 6, value: 6, url:\"images/6.jpeg\"},\n    {id: 7, value: 7, url:\"images/7.png\"},\n    {id: 8, value: 8, url:\"images/8.jpeg\"}\n  ]\n}\n\nDataLoad.prototype.publishData = function () {\n  this.sortData();\n  PubSub.publish('DataLoad:images-ready', this.images)\n};\n\nDataLoad.prototype.sortData = function () {\n  const allImages = this.images;\n  const newArray = this.images.reduce((total, image) => {\n    image.id = this.images.length + image.id + 1;\n    total.push(image)\n    return total;\n  }, [])\n  allImages.push(newArray);\n  this.images = allImages.flat();\n};\n\nmodule.exports = DataLoad;\n\n\n//# sourceURL=webpack:///./client/src/model/data_load.js?");

/***/ }),

/***/ "./client/src/views/master_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/master_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst SquareView = __webpack_require__(/*! ../views/square_view.js */ \"./client/src/views/square_view.js\")\n\nconst MasterView = function(element) {\n  this.element = element;\n}\n\nMasterView.prototype.bindEvents = function () {\n  PubSub.subscribe('DataLoad:images-ready', (event) => {\n    const imageData = event.detail;\n    this.renderImages(imageData)\n  })\n};\n\nMasterView.prototype.renderImages = function (imageData) {\n  imageData.forEach((image) => {\n    const squareView = new SquareView(this.element, image);\n    squareView.render();\n  })\n};\n\nmodule.exports = MasterView;\n\n\n//# sourceURL=webpack:///./client/src/views/master_view.js?");

/***/ }),

/***/ "./client/src/views/square_view.js":
/*!*****************************************!*\
  !*** ./client/src/views/square_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst SquareView = function(container, data) {\n  this.container = container;\n  this.url = data.url;\n  this.id = data.id;\n  this.value = data.value;\n}\n\nSquareView.prototype.render = function () {\n  const squareDiv = this.createDiv();\n  const newImg = this.createImage();\n  squareDiv.appendChild(newImg);\n  this.addClickEvent(squareDiv)\n  this.container.appendChild(squareDiv);\n};\n\nSquareView.prototype.createDiv = function () {\n  const newDiv = document.createElement(\"div\");\n  newDiv.classList.add(\"square\")\n  return newDiv\n};\n\nSquareView.prototype.createImage = function () {\n  const img = document.createElement(\"img\");\n  img.src = this.url;\n  return img\n};\n\nSquareView.prototype.addClickEvent = function (squareDiv) {\n  squareDiv.addEventListener('click', (event) => {\n    console.log(this.value, this.id);\n  })\n};\n\nmodule.exports = SquareView;\n\n\n//# sourceURL=webpack:///./client/src/views/square_view.js?");

/***/ })

/******/ });