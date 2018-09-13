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
      let records = [];
      // NOTE: A hack that is fixed in nodejs 10 please check:
      // http://2ality.com/2018/04/async-iter-nodejs.html
      yield new Promise(function (resolve, reject) {
        recordsStream.on('data', function (record) {
          records.push(record);
        }).on('end', function () {
          resolve('done');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9zM2F2cm9faW5wdXQuanMiXSwibmFtZXMiOlsiUzMiLCJBV1MiLCJTM0F2cm9JbnB1dCIsImNvbnN0cnVjdG9yIiwib3B0cyIsInBhcmFtcyIsIkJ1Y2tldCIsImJ1Y2tldCIsIktleSIsImtleSIsInJlYWQiLCJwaXBlbGluZURhdGEiLCJsb2FkRmlsZSIsImRlY29kZXIiLCJhdnJvIiwic3RyZWFtcyIsIkJsb2NrRGVjb2RlciIsInJlY29yZHNTdHJlYW0iLCJhdnJvRmlsZVN0cmVhbSIsInBpcGUiLCJyZWNvcmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsInJlY29yZCIsInB1c2giLCJwdXREYXRhIiwiYXZyb0ZpbGUiLCJnZXRPYmplY3QiLCJwcm9taXNlIiwiY3JlYXRlUmVhZFN0cmVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxNQUFNQSxrQkFBSyxJQUFJQyxpQkFBSUQsRUFBUixFQUFYOztBQUVRLE1BQU1FLFdBQU4sQ0FBa0I7QUFDL0JDLGNBQVlDLElBQVosRUFBa0I7QUFDaEIsU0FBS0MsTUFBTCxHQUFjO0FBQ1pDLGNBQVFGLEtBQUtHLE1BREQ7QUFFWkMsV0FBS0osS0FBS0s7QUFGRSxLQUFkO0FBSUQ7O0FBRUtDLE1BQU4sQ0FBV0MsWUFBWCxFQUF5QjtBQUFBOztBQUFBO0FBQ3ZCLFlBQU0sTUFBS0MsUUFBTCxFQUFOO0FBQ0EsVUFBSUMsVUFBVSxJQUFJQyxpQkFBS0MsT0FBTCxDQUFhQyxZQUFqQixFQUFkOztBQUVBLFVBQUlDLGdCQUFnQixNQUFLQyxjQUFMLENBQW9CQyxJQUFwQixDQUF5Qk4sT0FBekIsQ0FBcEI7QUFDQSxVQUFJTyxVQUFVLEVBQWQ7QUFDQTtBQUNBO0FBQ0EsWUFBTSxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDMUNOLHNCQUNHTyxFQURILENBQ00sTUFETixFQUNjLFVBQVVDLE1BQVYsRUFBa0I7QUFDNUJMLGtCQUFRTSxJQUFSLENBQWFELE1BQWI7QUFDRCxTQUhILEVBSUdELEVBSkgsQ0FJTSxLQUpOLEVBSWEsWUFBVztBQUNwQkYsa0JBQVEsTUFBUjtBQUNELFNBTkg7QUFPRCxPQVJLLENBQU47QUFTQVgsbUJBQWFnQixPQUFiLENBQXFCUCxPQUFyQjtBQUNBLGFBQU9ULFlBQVA7QUFsQnVCO0FBbUJ4Qjs7QUFFS0MsVUFBTixHQUFpQjtBQUFBOztBQUFBO0FBQ2YsVUFBSWdCLFdBQVcsTUFBTTVCLEdBQUc2QixTQUFILENBQWEsT0FBS3hCLE1BQWxCLEVBQTBCeUIsT0FBMUIsRUFBckI7QUFDQSxhQUFLWixjQUFMLEdBQXNCLE1BQU1VLFNBQVNHLGdCQUFULEVBQTVCO0FBRmU7QUFHaEI7QUFoQzhCO2tCQUFaN0IsVyIsImZpbGUiOiJzM2F2cm9faW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvbWlzaWZ5IGZyb20gJ3V0aWwucHJvbWlzaWZ5J1xuaW1wb3J0IGF2cm8gZnJvbSAnYXZyby1qcydcbmltcG9ydCBBV1MgZnJvbSAnYXdzLXNkaydcblxuZXhwb3J0IGNvbnN0IFMzID0gbmV3IEFXUy5TMygpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFMzQXZyb0lucHV0IHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgQnVja2V0OiBvcHRzLmJ1Y2tldCxcbiAgICAgIEtleTogb3B0cy5rZXksXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVhZChwaXBlbGluZURhdGEpIHtcbiAgICBhd2FpdCB0aGlzLmxvYWRGaWxlKClcbiAgICBsZXQgZGVjb2RlciA9IG5ldyBhdnJvLnN0cmVhbXMuQmxvY2tEZWNvZGVyKClcblxuICAgIGxldCByZWNvcmRzU3RyZWFtID0gdGhpcy5hdnJvRmlsZVN0cmVhbS5waXBlKGRlY29kZXIpXG4gICAgbGV0IHJlY29yZHMgPSBbXVxuICAgIC8vIE5PVEU6IEEgaGFjayB0aGF0IGlzIGZpeGVkIGluIG5vZGVqcyAxMCBwbGVhc2UgY2hlY2s6XG4gICAgLy8gaHR0cDovLzJhbGl0eS5jb20vMjAxOC8wNC9hc3luYy1pdGVyLW5vZGVqcy5odG1sXG4gICAgYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWNvcmRzU3RyZWFtXG4gICAgICAgIC5vbignZGF0YScsIGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICByZWNvcmRzLnB1c2gocmVjb3JkKVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlc29sdmUoJ2RvbmUnKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgcGlwZWxpbmVEYXRhLnB1dERhdGEocmVjb3JkcylcbiAgICByZXR1cm4gcGlwZWxpbmVEYXRhXG4gIH1cblxuICBhc3luYyBsb2FkRmlsZSgpIHtcbiAgICBsZXQgYXZyb0ZpbGUgPSBhd2FpdCBTMy5nZXRPYmplY3QodGhpcy5wYXJhbXMpLnByb21pc2UoKVxuICAgIHRoaXMuYXZyb0ZpbGVTdHJlYW0gPSBhd2FpdCBhdnJvRmlsZS5jcmVhdGVSZWFkU3RyZWFtKClcbiAgfVxufVxuXG4iXX0=