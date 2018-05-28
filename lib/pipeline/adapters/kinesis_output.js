'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _chunkArray = require('chunk-array');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const kinesis = new _awsSdk2.default.Kinesis();
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
      let chunkedData = (0, _chunkArray.chunks)(data, BATCHSIZE);

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
exports.default = KinesisOutput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9raW5lc2lzX291dHB1dC5qcyJdLCJuYW1lcyI6WyJraW5lc2lzIiwiQVdTIiwiS2luZXNpcyIsIkJBVENIU0laRSIsIktpbmVzaXNPdXRwdXQiLCJjb25zdHJ1Y3RvciIsIm9wdHMiLCJzdHJlYW1fbmFtZSIsInBhcnRpdGlvbl9wcm9wZXJ0eSIsIndyaXRlIiwicGlwZWxpbmVEYXRhIiwiZGF0YSIsImdldERhdGEiLCJjaHVua2VkRGF0YSIsImZvckVhY2giLCJyZWNvcmRfY2h1bmsiLCJwYXJhbXMiLCJTdHJlYW1OYW1lIiwiUmVjb3JkcyIsIm1hcCIsInBhcnRpdGlvbl9rZXkiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIlBhcnRpdGlvbktleSIsInB1dFJlY29yZHMiLCJwcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxVQUFVLElBQUlDLGlCQUFJQyxPQUFSLEVBQWhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFsQjs7QUFFZSxNQUFNQyxhQUFOLENBQW9CO0FBQ2pDQyxjQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFNBQUtDLFdBQUwsR0FBbUJELEtBQUtDLFdBQXhCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJGLEtBQUtFLGtCQUEvQjtBQUNEOztBQUVLQyxPQUFOLENBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFBQTtBQUN4QixVQUFJQyxPQUFPLE1BQU1ELGFBQWFFLE9BQWIsRUFBakI7QUFDQSxVQUFJQyxjQUFjLHdCQUFPRixJQUFQLEVBQWFSLFNBQWIsQ0FBbEI7O0FBRUFVLGtCQUFZQyxPQUFaO0FBQUEscUNBQW9CLFdBQU9DLFlBQVAsRUFBd0I7QUFDMUMsY0FBSUMsU0FBUztBQUNYQyx3QkFBWSxNQUFLVixXQUROO0FBRVhXLHFCQUFTSCxhQUFhSSxHQUFiLENBQWlCLFVBQUNSLElBQUQsRUFBVTtBQUNsQyxrQkFBSVMsZ0JBQWdCLE1BQUtaLGtCQUFMLEdBQTBCRyxLQUFLLE1BQUtILGtCQUFWLENBQTFCLEdBQTBEYSxLQUFLQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLFNBQTNCLENBQXFDLENBQXJDLENBQTlFOztBQUVBLHFCQUFPO0FBQ0xDLHNCQUFNQyxLQUFLQyxTQUFMLENBQWVoQixJQUFmLENBREQ7QUFFTGlCLDhCQUFjUjtBQUZULGVBQVA7QUFJRCxhQVBRO0FBRkUsV0FBYjtBQVdBLGdCQUFNcEIsUUFBUTZCLFVBQVIsQ0FBbUJiLE1BQW5CLEVBQTJCYyxPQUEzQixFQUFOO0FBQ0QsU0FiRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUp3QjtBQWtCekI7QUF4QmdDO2tCQUFkMUIsYSIsImZpbGUiOiJraW5lc2lzX291dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBV1MgZnJvbSAnYXdzLXNkaydcbmltcG9ydCB7IGNodW5rcyB9IGZyb20gJ2NodW5rLWFycmF5J1xuXG5jb25zdCBraW5lc2lzID0gbmV3IEFXUy5LaW5lc2lzKClcbmNvbnN0IEJBVENIU0laRSA9IDUwMFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW5lc2lzT3V0cHV0IHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHRoaXMuc3RyZWFtX25hbWUgPSBvcHRzLnN0cmVhbV9uYW1lXG4gICAgdGhpcy5wYXJ0aXRpb25fcHJvcGVydHkgPSBvcHRzLnBhcnRpdGlvbl9wcm9wZXJ0eVxuICB9XG5cbiAgYXN5bmMgd3JpdGUocGlwZWxpbmVEYXRhKSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBwaXBlbGluZURhdGEuZ2V0RGF0YSgpXG4gICAgbGV0IGNodW5rZWREYXRhID0gY2h1bmtzKGRhdGEsIEJBVENIU0laRSlcblxuICAgIGNodW5rZWREYXRhLmZvckVhY2goYXN5bmMgKHJlY29yZF9jaHVuaykgPT4ge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgU3RyZWFtTmFtZTogdGhpcy5zdHJlYW1fbmFtZSxcbiAgICAgICAgUmVjb3JkczogcmVjb3JkX2NodW5rLm1hcCgoZGF0YSkgPT4geyBcbiAgICAgICAgICBsZXQgcGFydGl0aW9uX2tleSA9IHRoaXMucGFydGl0aW9uX3Byb3BlcnR5ID8gZGF0YVt0aGlzLnBhcnRpdGlvbl9wcm9wZXJ0eV0gOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG5cbiAgICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIERhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgUGFydGl0aW9uS2V5OiBwYXJ0aXRpb25fa2V5XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYXdhaXQga2luZXNpcy5wdXRSZWNvcmRzKHBhcmFtcykucHJvbWlzZSgpXG4gICAgfSlcbiAgfVxufVxuIl19