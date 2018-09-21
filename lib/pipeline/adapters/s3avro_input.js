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
      let avroFile = yield S3.getObject(_this2.params).promise();
      _this2.avroFileStream = yield avroFile.createReadStream();
    })();
  }
}
exports.default = S3AvroInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9zM2F2cm9faW5wdXQuanMiXSwibmFtZXMiOlsiUzMiLCJBV1MiLCJTM0F2cm9JbnB1dCIsImNvbnN0cnVjdG9yIiwib3B0cyIsInBhcmFtcyIsIkJ1Y2tldCIsImJ1Y2tldCIsIktleSIsImtleSIsInJlYWQiLCJwaXBlbGluZURhdGEiLCJsb2FkRmlsZSIsImRlY29kZXIiLCJhdnJvIiwic3RyZWFtcyIsIkJsb2NrRGVjb2RlciIsInJlY29yZHNTdHJlYW0iLCJhdnJvRmlsZVN0cmVhbSIsInBpcGUiLCJyZWNvcmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsInJlY29yZCIsInB1c2giLCJwdXREYXRhIiwiYXZyb0ZpbGUiLCJnZXRPYmplY3QiLCJwcm9taXNlIiwiY3JlYXRlUmVhZFN0cmVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxNQUFNQSxrQkFBSyxJQUFJQyxpQkFBSUQsRUFBUixFQUFYOztBQUVRLE1BQU1FLFdBQU4sQ0FBa0I7QUFDL0JDLGNBQVlDLElBQVosRUFBa0I7QUFDaEIsU0FBS0MsTUFBTCxHQUFjO0FBQ1pDLGNBQVFGLEtBQUtHLE1BREQ7QUFFWkMsV0FBS0osS0FBS0s7QUFGRSxLQUFkO0FBSUQ7O0FBRUtDLE1BQU4sQ0FBV0MsWUFBWCxFQUF5QjtBQUFBOztBQUFBO0FBQ3ZCLFlBQU0sTUFBS0MsUUFBTCxFQUFOOztBQUVBLFVBQUlDLFVBQVUsSUFBSUMsaUJBQUtDLE9BQUwsQ0FBYUMsWUFBakIsRUFBZDtBQUNBLFVBQUlDLGdCQUFnQixNQUFLQyxjQUFMLENBQW9CQyxJQUFwQixDQUF5Qk4sT0FBekIsQ0FBcEI7O0FBRUE7QUFDQTtBQUNBLFVBQUlPLFVBQVUsTUFBTSxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDeEQsWUFBSUgsVUFBVSxFQUFkO0FBQ0FILHNCQUNHTyxFQURILENBQ00sTUFETixFQUNjLFVBQVVDLE1BQVYsRUFBa0I7QUFDNUJMLGtCQUFRTSxJQUFSLENBQWFELE1BQWI7QUFDRCxTQUhILEVBSUdELEVBSkgsQ0FJTSxLQUpOLEVBSWEsWUFBVztBQUNwQkYsa0JBQVFGLE9BQVI7QUFDRCxTQU5IO0FBT0QsT0FUbUIsQ0FBcEI7O0FBV0FULG1CQUFhZ0IsT0FBYixDQUFxQlAsT0FBckI7QUFDQSxhQUFPVCxZQUFQO0FBcEJ1QjtBQXFCeEI7O0FBRUtDLFVBQU4sR0FBaUI7QUFBQTs7QUFBQTtBQUNmLFVBQUlnQixXQUFXLE1BQU01QixHQUFHNkIsU0FBSCxDQUFhLE9BQUt4QixNQUFsQixFQUEwQnlCLE9BQTFCLEVBQXJCO0FBQ0EsYUFBS1osY0FBTCxHQUFzQixNQUFNVSxTQUFTRyxnQkFBVCxFQUE1QjtBQUZlO0FBR2hCO0FBbEM4QjtrQkFBWjdCLFciLCJmaWxlIjoiczNhdnJvX2lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb21pc2lmeSBmcm9tICd1dGlsLnByb21pc2lmeSdcbmltcG9ydCBhdnJvIGZyb20gJ2F2cm8tanMnXG5pbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnXG5cbmV4cG9ydCBjb25zdCBTMyA9IG5ldyBBV1MuUzMoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTM0F2cm9JbnB1dCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIEJ1Y2tldDogb3B0cy5idWNrZXQsXG4gICAgICBLZXk6IG9wdHMua2V5LFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlYWQocGlwZWxpbmVEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkRmlsZSgpXG5cbiAgICBsZXQgZGVjb2RlciA9IG5ldyBhdnJvLnN0cmVhbXMuQmxvY2tEZWNvZGVyKClcbiAgICBsZXQgcmVjb3Jkc1N0cmVhbSA9IHRoaXMuYXZyb0ZpbGVTdHJlYW0ucGlwZShkZWNvZGVyKVxuXG4gICAgLy8gTk9URTogQSBoYWNrIHRoYXQgaXMgZml4ZWQgaW4gbm9kZWpzIDEwIHBsZWFzZSBjaGVjazpcbiAgICAvLyBodHRwOi8vMmFsaXR5LmNvbS8yMDE4LzA0L2FzeW5jLWl0ZXItbm9kZWpzLmh0bWxcbiAgICBsZXQgcmVjb3JkcyA9IGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHJlY29yZHMgPSBbXVxuICAgICAgcmVjb3Jkc1N0cmVhbVxuICAgICAgICAub24oJ2RhdGEnLCBmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgcmVjb3Jkcy5wdXNoKHJlY29yZClcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXNvbHZlKHJlY29yZHMpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIHBpcGVsaW5lRGF0YS5wdXREYXRhKHJlY29yZHMpXG4gICAgcmV0dXJuIHBpcGVsaW5lRGF0YVxuICB9XG5cbiAgYXN5bmMgbG9hZEZpbGUoKSB7XG4gICAgbGV0IGF2cm9GaWxlID0gYXdhaXQgUzMuZ2V0T2JqZWN0KHRoaXMucGFyYW1zKS5wcm9taXNlKClcbiAgICB0aGlzLmF2cm9GaWxlU3RyZWFtID0gYXdhaXQgYXZyb0ZpbGUuY3JlYXRlUmVhZFN0cmVhbSgpXG4gIH1cbn1cblxuIl19