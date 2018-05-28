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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PipelineData {
  constructor() {
    this.data = {};
    this.invalidData = {};
  }

  getData() {
    return this.data;
  }

  putData(data) {
    return this.data = data;
  }

  hasInvalidData() {
    return this.invalidData.length > 0;
  }

  getInvalidData() {
    return this.invalidData;
  }

  putInvalidData(invalidData) {
    return this.invalidData = invalidData;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PipelineData;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("util.promisify");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipeline__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Pipeline", function() { return __WEBPACK_IMPORTED_MODULE_0__pipeline__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PipelineData", function() { return __WEBPACK_IMPORTED_MODULE_0__pipeline__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_0__pipeline__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return __WEBPACK_IMPORTED_MODULE_0__pipeline__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Transformation", function() { return __WEBPACK_IMPORTED_MODULE_0__pipeline__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AdapterRegistry", function() { return __WEBPACK_IMPORTED_MODULE_0__pipeline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(25);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventRegistry", function() { return __WEBPACK_IMPORTED_MODULE_1__event__["a"]; });



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipeline__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__pipeline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipeline_data__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__pipeline_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__output__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__output__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transformation__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__transformation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adapters__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__adapters__["a"]; });







/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipeline_data__ = __webpack_require__(1);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




class Pipeline {
  constructor(params) {
    this.input = params.input;

    if (params.transformations === undefined) {
      this.transformations = [];
    } else {
      this.transformations = params.transformations;
    }

    this.output = params.output;
    this.invalidOutput = params.invalidOutput;
    this.data = new __WEBPACK_IMPORTED_MODULE_1__pipeline_data__["a" /* default */]();
  }

  call() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (_this.input !== undefined) {
        yield _this.callStep(_this.input);
      }

      for (let i = 0; i < _this.transformations.length; i++) {
        yield _this.callStep(_this.transformations[i]);
      }

      if (_this.output !== undefined) {
        yield _this.callOutputStep(_this.output);
      }

      if (_this.invalidOutput !== undefined) {
        yield _this.callInvalidOutput(_this.invalidOutput);
      }

      return _this.data;
    })();
  }

  callStep(step) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.data = yield step.call(_this2.data);
    })();
  }

  callOutputStep(step) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      yield step.call(_this3.data);
    })();
  }

  callInvalidOutput(step) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      if (_this4.data.hasInvalidData()) {
        let invalidData = new __WEBPACK_IMPORTED_MODULE_1__pipeline_data__["a" /* default */]();
        invalidData.putData(_this4.data.getInvalidData());

        yield step.call(invalidData);
      }
    })();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pipeline;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__input__["a"]; });


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Input {
  constructor(adapterRegistry, type, opts) {
    this.source = adapterRegistry.adapterFor(type, opts);
  }

  call(data) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.source.read(data);
    })();
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Input(adapterRegistry, adapter, opts);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Input;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__output__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__output__["a"]; });


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Output {
  constructor(adapterRegistry, type, opts) {
    this.resource = adapterRegistry.adapterFor(type, opts);
  }

  call(data) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.resource.write(data);
    })();
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Output(adapterRegistry, adapter, opts);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Output;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transformation__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__transformation__["a"]; });


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Transformation {
  constructor(adapterRegistry, type, opts) {
    this.adapter = adapterRegistry.adapterFor(type, opts);
  }

  call(data) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.adapter.transform(data);
    })();
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Transformation(adapterRegistry, adapter, opts);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Transformation;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter_registry__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__adapter_registry__["a"]; });


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__s3file_input__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__s3file_output__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kinesis_input__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kinesis_output__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__console_output__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__unzip_transformation__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cloudfront_log_transformation__ = __webpack_require__(23);








class AdapterRegistry {
  constructor() {
    this.adapters = {
      S3FileInput: __WEBPACK_IMPORTED_MODULE_0__s3file_input__["a" /* default */],
      S3FileOutput: __WEBPACK_IMPORTED_MODULE_1__s3file_output__["a" /* default */],
      KinesisInput: __WEBPACK_IMPORTED_MODULE_2__kinesis_input__["a" /* default */],
      KinesisOutput: __WEBPACK_IMPORTED_MODULE_3__kinesis_output__["a" /* default */],
      ConsoleOutput: __WEBPACK_IMPORTED_MODULE_4__console_output__["a" /* default */],
      UnzipTransformation: __WEBPACK_IMPORTED_MODULE_5__unzip_transformation__["a" /* default */],
      CloudfrontLogTransformation: __WEBPACK_IMPORTED_MODULE_6__cloudfront_log_transformation__["a" /* default */]
    };
  }

  adapterFor(className, opts) {
    if (this.adapters[className]) {
      return new this.adapters[className](opts);
    } else {
      throw "No adapter registered with name '" + className + '"';
    }
  }

  register(className) {
    if (className || typeof className != "Object") {
      this.adapters[className.name] = className;
    } else {
      throw "Empty adapter class";
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AdapterRegistry;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_promisify__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_promisify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util_promisify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_sdk__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var S3 = new __WEBPACK_IMPORTED_MODULE_1_aws_sdk___default.a.S3();

class S3FileInput {
  constructor(opts) {
    this.params = {
      Bucket: opts.bucket,
      Key: opts.key
    };
  }

  read(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _this.loadFile();
      pipelineData.putData(_this.file.Body);
      return pipelineData;
    })();
  }

  loadFile() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.file = yield S3.getObject(_this2.params).promise();
    })();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = S3FileInput;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_promisify__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_promisify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util_promisify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aws_sdk__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var S3 = new __WEBPACK_IMPORTED_MODULE_1_aws_sdk___default.a.S3();

class S3FileOutput {
  constructor(opts) {
    this.params = {
      Bucket: opts.bucket,
      Key: opts.key
    };
  }

  write(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let body = yield pipelineData.getData();
      yield S3.putObject(Object.assign(_this.params, { Body: JSON.stringify(body) })).promise();
    })();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = S3FileOutput;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class KinesisInput {
  constructor(opts) {
    this.events = opts.events;
  }

  read(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let decoded = _this.events.map(function (event) {
        return Buffer.from(event.data, "base64").toString();
      });

      pipelineData.putData(decoded);
      return pipelineData;
    })();
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = KinesisInput;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aws_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_aws_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chunk_array__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chunk_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chunk_array__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




const kinesis = new __WEBPACK_IMPORTED_MODULE_0_aws_sdk___default.a.Kinesis();
const BATCHSIZE = 500;

class KinesisOutput {
  constructor(opts) {
    this.stream_name = opts.stream_name;
    this.partition_property = opts.partition_property;
  }

  write(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let data = yield pipelineData.getData();
      let chunkedData = Object(__WEBPACK_IMPORTED_MODULE_1_chunk_array__["chunks"])(data, BATCHSIZE);

      chunkedData.forEach((() => {
        var _ref = _asyncToGenerator(function* (record_chunk) {
          let params = {
            StreamName: _this.stream_name,
            Records: record_chunk.map(function (data) {
              let partition_key = _this.partition_property ? data[_this.partition_property] : Math.random().toString(36).substring(7);

              return {
                Data: JSON.stringify(data),
                PartitionKey: partition_key
              };
            })
          };
          yield kinesis.putRecords(params).promise();
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      })());
    })();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KinesisOutput;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("chunk-array");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class ConsoleOutput {
  constructor(opts) {}

  write(pipelineData) {
    return _asyncToGenerator(function* () {
      console.log(pipelineData.getData());
    })();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConsoleOutput;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zlib__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zlib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zlib__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



class UnzipTransformation {
  constructor(opts) {}

  transform(pipelineData) {
    return _asyncToGenerator(function* () {
      let data = pipelineData.getData();
      let uncompressedData = __WEBPACK_IMPORTED_MODULE_0_zlib___default.a.gunzipSync(data);

      yield pipelineData.putData(uncompressedData.toString());
      return pipelineData;
    })();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnzipTransformation;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_querystring__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_querystring__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



class CloudfrontLogTransformation {
  constructor(opts) {}

  transform(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let data = pipelineData.getData();
      let parsedData = _this.create_payloads_from_piwik(data);

      yield pipelineData.putData(parsedData);
      return pipelineData;
    })();
  }

  create_payloads_from_piwik(data) {
    let fields = [];

    const mapped = data.split(/\r?\n/).map(line => {
      if (line.startsWith('#Fields: ')) {
        fields = line.split(/#Fields: /)[1].split(/ /);
      }

      if (line.startsWith('#')) {
        return null;
      }

      let line_final = {};
      const line_data = line.split(/\t/);

      for (let index in line_data) {
        line_final[fields[index]] = __WEBPACK_IMPORTED_MODULE_0_querystring___default.a.unescape(line_data[index]);
      }

      return line_final;
    }).filter(entry => {
      return entry != null;
    });

    const payloads = mapped.map(entry => {
      const params = __WEBPACK_IMPORTED_MODULE_0_querystring___default.a.parse(entry['cs-uri-query']);
      const fetched_at = new Date(Date.parse(entry['date'] + ' ' + entry['time']));

      params.source_ip = entry['c-ip'];
      params.fetched_at = fetched_at.getTime() / 1000;
      params.user_agent = __WEBPACK_IMPORTED_MODULE_0_querystring___default.a.unescape(entry['cs(User-Agent)']);
      params.edge_location = entry['x-edge-location'];

      return params;
    }).filter(entry => {
      return entry.idsite != null;
    });

    return payloads;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CloudfrontLogTransformation;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_registry__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__event_registry__["a"]; });


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__s3_event__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kinesis_event__ = __webpack_require__(28);



class EventRegistry {
  constructor() {
    this.events = {
      S3Event: __WEBPACK_IMPORTED_MODULE_0__s3_event__["a" /* default */],
      KinesisEvent: __WEBPACK_IMPORTED_MODULE_1__kinesis_event__["a" /* default */]
    };
  }

  eventFor(className, opts) {
    if (this.events[className]) {
      return new this.events[className](opts);
    } else {
      throw "No event registered with name '" + className + '"';
    }
  }

  register(className) {
    if (className || typeof className != "Object") {
      this.events[className.name] = className;
    } else {
      throw "Empty or null event class given";
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventRegistry;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class S3Event {
  constructor(event) {
    this.event = event;
  }

  key() {
    return decodeURIComponent(this.event.Records[0].s3.object.key.replace(/\+/g, ' '));
  }

  bucket() {
    return this.event.Records[0].s3.bucket.name;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = S3Event;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class KinesisEvent {
  constructor(event) {
    this.event = event;
  }

  events() {
    return this.event.Records.map(event => {
      return event.kinesis;
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KinesisEvent;


/***/ })
/******/ ]);