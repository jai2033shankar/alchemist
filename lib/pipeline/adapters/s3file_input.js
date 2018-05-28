'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util.promisify');

var _util2 = _interopRequireDefault(_util);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var S3 = new _awsSdk2.default.S3();

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
exports.default = S3FileInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9zM2ZpbGVfaW5wdXQuanMiXSwibmFtZXMiOlsiUzMiLCJBV1MiLCJTM0ZpbGVJbnB1dCIsImNvbnN0cnVjdG9yIiwib3B0cyIsInBhcmFtcyIsIkJ1Y2tldCIsImJ1Y2tldCIsIktleSIsImtleSIsInJlYWQiLCJwaXBlbGluZURhdGEiLCJsb2FkRmlsZSIsInB1dERhdGEiLCJmaWxlIiwiQm9keSIsImdldE9iamVjdCIsInByb21pc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSUEsS0FBSyxJQUFJQyxpQkFBSUQsRUFBUixFQUFUOztBQUVlLE1BQU1FLFdBQU4sQ0FBa0I7QUFDL0JDLGNBQVlDLElBQVosRUFBa0I7QUFDaEIsU0FBS0MsTUFBTCxHQUFjO0FBQ1pDLGNBQVFGLEtBQUtHLE1BREQ7QUFFWkMsV0FBS0osS0FBS0s7QUFGRSxLQUFkO0FBSUQ7O0FBRUtDLE1BQU4sQ0FBV0MsWUFBWCxFQUF5QjtBQUFBOztBQUFBO0FBQ3ZCLFlBQU0sTUFBS0MsUUFBTCxFQUFOO0FBQ0FELG1CQUFhRSxPQUFiLENBQXFCLE1BQUtDLElBQUwsQ0FBVUMsSUFBL0I7QUFDQSxhQUFPSixZQUFQO0FBSHVCO0FBSXhCOztBQUVLQyxVQUFOLEdBQWlCO0FBQUE7O0FBQUE7QUFDZixhQUFLRSxJQUFMLEdBQVksTUFBTWQsR0FBR2dCLFNBQUgsQ0FBYSxPQUFLWCxNQUFsQixFQUEwQlksT0FBMUIsRUFBbEI7QUFEZTtBQUVoQjtBQWhCOEI7a0JBQVpmLFciLCJmaWxlIjoiczNmaWxlX2lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb21pc2lmeSBmcm9tICd1dGlsLnByb21pc2lmeSdcbmltcG9ydCBBV1MgZnJvbSAnYXdzLXNkaydcblxudmFyIFMzID0gbmV3IEFXUy5TMygpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFMzRmlsZUlucHV0IHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgQnVja2V0OiBvcHRzLmJ1Y2tldCxcbiAgICAgIEtleTogb3B0cy5rZXksXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVhZChwaXBlbGluZURhdGEpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRGaWxlKClcbiAgICBwaXBlbGluZURhdGEucHV0RGF0YSh0aGlzLmZpbGUuQm9keSlcbiAgICByZXR1cm4gcGlwZWxpbmVEYXRhXG4gIH1cblxuICBhc3luYyBsb2FkRmlsZSgpIHtcbiAgICB0aGlzLmZpbGUgPSBhd2FpdCBTMy5nZXRPYmplY3QodGhpcy5wYXJhbXMpLnByb21pc2UoKVxuICB9XG59XG5cbiJdfQ==