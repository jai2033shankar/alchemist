'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util.promisify');

var _util2 = _interopRequireDefault(_util);

var _avroJs = require('avro-js');

var _avroJs2 = _interopRequireDefault(_avroJs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class AvroInput {
  constructor(opts) {
    this.avroFilePath = opts.avroFilePath;
  }

  read(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _this.loadFile();

      _this.avroFile.pipe(new _avroJs2.default.streams.BlockDecoder()).on('data', (() => {
        var _ref = _asyncToGenerator(function* (record) {
          return pipelineData.putData(record);
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      })());

      return pipelineData;
    })();
  }

  loadFile() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.avroFile = yield _fs2.default.createReadStream(_this2.avroFilePath);
    })();
  }
}
exports.default = AvroInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9hdnJvX2lucHV0LmpzIl0sIm5hbWVzIjpbIkF2cm9JbnB1dCIsImNvbnN0cnVjdG9yIiwib3B0cyIsImF2cm9GaWxlUGF0aCIsInJlYWQiLCJwaXBlbGluZURhdGEiLCJsb2FkRmlsZSIsImF2cm9GaWxlIiwicGlwZSIsImF2cm8iLCJzdHJlYW1zIiwiQmxvY2tEZWNvZGVyIiwib24iLCJyZWNvcmQiLCJwdXREYXRhIiwiZnMiLCJjcmVhdGVSZWFkU3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRWUsTUFBTUEsU0FBTixDQUFnQjtBQUM3QkMsY0FBWUMsSUFBWixFQUFrQjtBQUNoQixTQUFLQyxZQUFMLEdBQW9CRCxLQUFLQyxZQUF6QjtBQUNEOztBQUVLQyxNQUFOLENBQVdDLFlBQVgsRUFBeUI7QUFBQTs7QUFBQTtBQUN2QixZQUFNLE1BQUtDLFFBQUwsRUFBTjs7QUFFQSxZQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBSUMsaUJBQUtDLE9BQUwsQ0FBYUMsWUFBakIsRUFBbkIsRUFDR0MsRUFESCxDQUNNLE1BRE47QUFBQSxxQ0FDYyxXQUFPQyxNQUFQO0FBQUEsaUJBQWtCUixhQUFhUyxPQUFiLENBQXFCRCxNQUFyQixDQUFsQjtBQUFBLFNBRGQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0EsYUFBT1IsWUFBUDtBQU51QjtBQU94Qjs7QUFFS0MsVUFBTixHQUFpQjtBQUFBOztBQUFBO0FBQ2YsYUFBS0MsUUFBTCxHQUFnQixNQUFNUSxhQUFHQyxnQkFBSCxDQUFvQixPQUFLYixZQUF6QixDQUF0QjtBQURlO0FBRWhCO0FBaEI0QjtrQkFBVkgsUyIsImZpbGUiOiJhdnJvX2lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb21pc2lmeSBmcm9tICd1dGlsLnByb21pc2lmeSdcbmltcG9ydCBhdnJvIGZyb20gJ2F2cm8tanMnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2cm9JbnB1dCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICB0aGlzLmF2cm9GaWxlUGF0aCA9IG9wdHMuYXZyb0ZpbGVQYXRoXG4gIH1cblxuICBhc3luYyByZWFkKHBpcGVsaW5lRGF0YSkge1xuICAgIGF3YWl0IHRoaXMubG9hZEZpbGUoKVxuXG4gICAgdGhpcy5hdnJvRmlsZS5waXBlKG5ldyBhdnJvLnN0cmVhbXMuQmxvY2tEZWNvZGVyKCkpXG4gICAgICAub24oJ2RhdGEnLCBhc3luYyAocmVjb3JkKSA9PiBwaXBlbGluZURhdGEucHV0RGF0YShyZWNvcmQpKVxuXG4gICAgcmV0dXJuIHBpcGVsaW5lRGF0YVxuICB9XG5cbiAgYXN5bmMgbG9hZEZpbGUoKSB7XG4gICAgdGhpcy5hdnJvRmlsZSA9IGF3YWl0IGZzLmNyZWF0ZVJlYWRTdHJlYW0odGhpcy5hdnJvRmlsZVBhdGgpXG4gIH1cbn1cblxuIl19