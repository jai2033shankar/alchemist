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
exports.default = S3FileOutput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9zM2ZpbGVfb3V0cHV0LmpzIl0sIm5hbWVzIjpbIlMzIiwiQVdTIiwiUzNGaWxlT3V0cHV0IiwiY29uc3RydWN0b3IiLCJvcHRzIiwicGFyYW1zIiwiQnVja2V0IiwiYnVja2V0IiwiS2V5Iiwia2V5Iiwid3JpdGUiLCJwaXBlbGluZURhdGEiLCJib2R5IiwiZ2V0RGF0YSIsInB1dE9iamVjdCIsIk9iamVjdCIsImFzc2lnbiIsIkJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvbWlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJQSxLQUFLLElBQUlDLGlCQUFJRCxFQUFSLEVBQVQ7O0FBRWUsTUFBTUUsWUFBTixDQUFtQjtBQUNoQ0MsY0FBWUMsSUFBWixFQUFrQjtBQUNoQixTQUFLQyxNQUFMLEdBQWM7QUFDWkMsY0FBUUYsS0FBS0csTUFERDtBQUVaQyxXQUFLSixLQUFLSztBQUZFLEtBQWQ7QUFJRDs7QUFFS0MsT0FBTixDQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQUE7QUFDeEIsVUFBSUMsT0FBTyxNQUFNRCxhQUFhRSxPQUFiLEVBQWpCO0FBQ0EsWUFBTWIsR0FBR2MsU0FBSCxDQUFhQyxPQUFPQyxNQUFQLENBQWMsTUFBS1gsTUFBbkIsRUFBMkIsRUFBQ1ksTUFBTUMsS0FBS0MsU0FBTCxDQUFlUCxJQUFmLENBQVAsRUFBM0IsQ0FBYixFQUF1RVEsT0FBdkUsRUFBTjtBQUZ3QjtBQUd6QjtBQVgrQjtrQkFBYmxCLFkiLCJmaWxlIjoiczNmaWxlX291dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9taXNpZnkgZnJvbSAndXRpbC5wcm9taXNpZnknXG5pbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnXG5cbnZhciBTMyA9IG5ldyBBV1MuUzMoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTM0ZpbGVPdXRwdXQge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICBCdWNrZXQ6IG9wdHMuYnVja2V0LFxuICAgICAgS2V5OiBvcHRzLmtleSxcbiAgICB9XG4gIH1cblxuICBhc3luYyB3cml0ZShwaXBlbGluZURhdGEpIHtcbiAgICBsZXQgYm9keSA9IGF3YWl0IHBpcGVsaW5lRGF0YS5nZXREYXRhKClcbiAgICBhd2FpdCBTMy5wdXRPYmplY3QoT2JqZWN0LmFzc2lnbih0aGlzLnBhcmFtcywge0JvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpfSkpLnByb21pc2UoKVxuICB9XG59XG5cbiJdfQ==