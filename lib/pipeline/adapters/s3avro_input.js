'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S3 = undefined;

var _util = require('util.promisify');

var _util2 = _interopRequireDefault(_util);

var _avroJs = require('avro-js');

var _avroJs2 = _interopRequireDefault(_avroJs);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const S3 = exports.S3 = new _awsSdk2.default.S3();

class S3AvroInput {
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

      let decoder = new _avroJs2.default.streams.BlockDecoder();
      let recordsStream = _this.avroFileStream.pipe(decoder);

      // NOTE: A hack that is fixed in nodejs 10 please check:
      // http://2ality.com/2018/04/async-iter-nodejs.html
      let records = yield new Promise(function (resolve, reject) {
        let records = [];
        recordsStream.on('data', function (record) {
          records.push(record);
        }).on('end', function () {
          resolve(records);
        });
      });

      pipelineData.putData(records);
      return pipelineData;
    })();
  }

  loadFile() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      let avroFile = yield S3.getObject(_this2.params);
      _this2.avroFileStream = yield avroFile.createReadStream();
    })();
  }
}
exports.default = S3AvroInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9zM2F2cm9faW5wdXQuanMiXSwibmFtZXMiOlsiUzMiLCJBV1MiLCJTM0F2cm9JbnB1dCIsImNvbnN0cnVjdG9yIiwib3B0cyIsInBhcmFtcyIsIkJ1Y2tldCIsImJ1Y2tldCIsIktleSIsImtleSIsInJlYWQiLCJwaXBlbGluZURhdGEiLCJsb2FkRmlsZSIsImRlY29kZXIiLCJhdnJvIiwic3RyZWFtcyIsIkJsb2NrRGVjb2RlciIsInJlY29yZHNTdHJlYW0iLCJhdnJvRmlsZVN0cmVhbSIsInBpcGUiLCJyZWNvcmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsInJlY29yZCIsInB1c2giLCJwdXREYXRhIiwiYXZyb0ZpbGUiLCJnZXRPYmplY3QiLCJjcmVhdGVSZWFkU3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVPLE1BQU1BLGtCQUFLLElBQUlDLGlCQUFJRCxFQUFSLEVBQVg7O0FBRVEsTUFBTUUsV0FBTixDQUFrQjtBQUMvQkMsY0FBWUMsSUFBWixFQUFrQjtBQUNoQixTQUFLQyxNQUFMLEdBQWM7QUFDWkMsY0FBUUYsS0FBS0csTUFERDtBQUVaQyxXQUFLSixLQUFLSztBQUZFLEtBQWQ7QUFJRDs7QUFFS0MsTUFBTixDQUFXQyxZQUFYLEVBQXlCO0FBQUE7O0FBQUE7QUFDdkIsWUFBTSxNQUFLQyxRQUFMLEVBQU47O0FBRUEsVUFBSUMsVUFBVSxJQUFJQyxpQkFBS0MsT0FBTCxDQUFhQyxZQUFqQixFQUFkO0FBQ0EsVUFBSUMsZ0JBQWdCLE1BQUtDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCTixPQUF6QixDQUFwQjs7QUFFQTtBQUNBO0FBQ0EsVUFBSU8sVUFBVSxNQUFNLElBQUlDLE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUN4RCxZQUFJSCxVQUFVLEVBQWQ7QUFDQUgsc0JBQ0dPLEVBREgsQ0FDTSxNQUROLEVBQ2MsVUFBVUMsTUFBVixFQUFrQjtBQUM1Qkwsa0JBQVFNLElBQVIsQ0FBYUQsTUFBYjtBQUNELFNBSEgsRUFJR0QsRUFKSCxDQUlNLEtBSk4sRUFJYSxZQUFXO0FBQ3BCRixrQkFBUUYsT0FBUjtBQUNELFNBTkg7QUFPRCxPQVRtQixDQUFwQjs7QUFXQVQsbUJBQWFnQixPQUFiLENBQXFCUCxPQUFyQjtBQUNBLGFBQU9ULFlBQVA7QUFwQnVCO0FBcUJ4Qjs7QUFFS0MsVUFBTixHQUFpQjtBQUFBOztBQUFBO0FBQ2YsVUFBSWdCLFdBQVcsTUFBTTVCLEdBQUc2QixTQUFILENBQWEsT0FBS3hCLE1BQWxCLENBQXJCO0FBQ0EsYUFBS2EsY0FBTCxHQUFzQixNQUFNVSxTQUFTRSxnQkFBVCxFQUE1QjtBQUZlO0FBR2hCO0FBbEM4QjtrQkFBWjVCLFciLCJmaWxlIjoiczNhdnJvX2lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb21pc2lmeSBmcm9tICd1dGlsLnByb21pc2lmeSdcbmltcG9ydCBhdnJvIGZyb20gJ2F2cm8tanMnXG5pbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnXG5cbmV4cG9ydCBjb25zdCBTMyA9IG5ldyBBV1MuUzMoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTM0F2cm9JbnB1dCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIEJ1Y2tldDogb3B0cy5idWNrZXQsXG4gICAgICBLZXk6IG9wdHMua2V5LFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlYWQocGlwZWxpbmVEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkRmlsZSgpXG5cbiAgICBsZXQgZGVjb2RlciA9IG5ldyBhdnJvLnN0cmVhbXMuQmxvY2tEZWNvZGVyKClcbiAgICBsZXQgcmVjb3Jkc1N0cmVhbSA9IHRoaXMuYXZyb0ZpbGVTdHJlYW0ucGlwZShkZWNvZGVyKVxuXG4gICAgLy8gTk9URTogQSBoYWNrIHRoYXQgaXMgZml4ZWQgaW4gbm9kZWpzIDEwIHBsZWFzZSBjaGVjazpcbiAgICAvLyBodHRwOi8vMmFsaXR5LmNvbS8yMDE4LzA0L2FzeW5jLWl0ZXItbm9kZWpzLmh0bWxcbiAgICBsZXQgcmVjb3JkcyA9IGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHJlY29yZHMgPSBbXVxuICAgICAgcmVjb3Jkc1N0cmVhbVxuICAgICAgICAub24oJ2RhdGEnLCBmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgcmVjb3Jkcy5wdXNoKHJlY29yZClcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXNvbHZlKHJlY29yZHMpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHBpcGVsaW5lRGF0YS5wdXREYXRhKHJlY29yZHMpXG4gICAgcmV0dXJuIHBpcGVsaW5lRGF0YVxuICB9XG5cbiAgYXN5bmMgbG9hZEZpbGUoKSB7XG4gICAgbGV0IGF2cm9GaWxlID0gYXdhaXQgUzMuZ2V0T2JqZWN0KHRoaXMucGFyYW1zKVxuICAgIHRoaXMuYXZyb0ZpbGVTdHJlYW0gPSBhd2FpdCBhdnJvRmlsZS5jcmVhdGVSZWFkU3RyZWFtKClcbiAgfVxufVxuXG4iXX0=