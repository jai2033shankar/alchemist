function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import AWS from 'aws-sdk';
import { chunks } from 'chunk-array';

const kinesis = new AWS.Kinesis();
const BATCHSIZE = 500;

export default class KinesisOutput {
  constructor(opts) {
    this.stream_name = opts.stream_name;
    this.partition_property = opts.partition_property;
  }

  write(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let data = yield pipelineData.getData();
      let chunkedData = chunks(data, BATCHSIZE);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9raW5lc2lzX291dHB1dC5qcyJdLCJuYW1lcyI6WyJBV1MiLCJjaHVua3MiLCJraW5lc2lzIiwiS2luZXNpcyIsIkJBVENIU0laRSIsIktpbmVzaXNPdXRwdXQiLCJjb25zdHJ1Y3RvciIsIm9wdHMiLCJzdHJlYW1fbmFtZSIsInBhcnRpdGlvbl9wcm9wZXJ0eSIsIndyaXRlIiwicGlwZWxpbmVEYXRhIiwiZGF0YSIsImdldERhdGEiLCJjaHVua2VkRGF0YSIsImZvckVhY2giLCJyZWNvcmRfY2h1bmsiLCJwYXJhbXMiLCJTdHJlYW1OYW1lIiwiUmVjb3JkcyIsIm1hcCIsInBhcnRpdGlvbl9rZXkiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIlBhcnRpdGlvbktleSIsInB1dFJlY29yZHMiLCJwcm9taXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEdBQVAsTUFBZ0IsU0FBaEI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGFBQXZCOztBQUVBLE1BQU1DLFVBQVUsSUFBSUYsSUFBSUcsT0FBUixFQUFoQjtBQUNBLE1BQU1DLFlBQVksR0FBbEI7O0FBRUEsZUFBZSxNQUFNQyxhQUFOLENBQW9CO0FBQ2pDQyxjQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFNBQUtDLFdBQUwsR0FBbUJELEtBQUtDLFdBQXhCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEJGLEtBQUtFLGtCQUEvQjtBQUNEOztBQUVLQyxPQUFOLENBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFBQTtBQUN4QixVQUFJQyxPQUFPLE1BQU1ELGFBQWFFLE9BQWIsRUFBakI7QUFDQSxVQUFJQyxjQUFjYixPQUFPVyxJQUFQLEVBQWFSLFNBQWIsQ0FBbEI7O0FBRUFVLGtCQUFZQyxPQUFaO0FBQUEscUNBQW9CLFdBQU9DLFlBQVAsRUFBd0I7QUFDMUMsY0FBSUMsU0FBUztBQUNYQyx3QkFBWSxNQUFLVixXQUROO0FBRVhXLHFCQUFTSCxhQUFhSSxHQUFiLENBQWlCLFVBQUNSLElBQUQsRUFBVTtBQUNsQyxrQkFBSVMsZ0JBQWdCLE1BQUtaLGtCQUFMLEdBQTBCRyxLQUFLLE1BQUtILGtCQUFWLENBQTFCLEdBQTBEYSxLQUFLQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLFNBQTNCLENBQXFDLENBQXJDLENBQTlFOztBQUVBLHFCQUFPO0FBQ0xDLHNCQUFNQyxLQUFLQyxTQUFMLENBQWVoQixJQUFmLENBREQ7QUFFTGlCLDhCQUFjUjtBQUZULGVBQVA7QUFJRCxhQVBRO0FBRkUsV0FBYjtBQVdBLGdCQUFNbkIsUUFBUTRCLFVBQVIsQ0FBbUJiLE1BQW5CLEVBQTJCYyxPQUEzQixFQUFOO0FBQ0QsU0FiRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUp3QjtBQWtCekI7QUF4QmdDIiwiZmlsZSI6ImtpbmVzaXNfb3V0cHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJ1xuaW1wb3J0IHsgY2h1bmtzIH0gZnJvbSAnY2h1bmstYXJyYXknXG5cbmNvbnN0IGtpbmVzaXMgPSBuZXcgQVdTLktpbmVzaXMoKVxuY29uc3QgQkFUQ0hTSVpFID0gNTAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbmVzaXNPdXRwdXQge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgdGhpcy5zdHJlYW1fbmFtZSA9IG9wdHMuc3RyZWFtX25hbWVcbiAgICB0aGlzLnBhcnRpdGlvbl9wcm9wZXJ0eSA9IG9wdHMucGFydGl0aW9uX3Byb3BlcnR5XG4gIH1cblxuICBhc3luYyB3cml0ZShwaXBlbGluZURhdGEpIHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHBpcGVsaW5lRGF0YS5nZXREYXRhKClcbiAgICBsZXQgY2h1bmtlZERhdGEgPSBjaHVua3MoZGF0YSwgQkFUQ0hTSVpFKVxuXG4gICAgY2h1bmtlZERhdGEuZm9yRWFjaChhc3luYyAocmVjb3JkX2NodW5rKSA9PiB7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBTdHJlYW1OYW1lOiB0aGlzLnN0cmVhbV9uYW1lLFxuICAgICAgICBSZWNvcmRzOiByZWNvcmRfY2h1bmsubWFwKChkYXRhKSA9PiB7IFxuICAgICAgICAgIGxldCBwYXJ0aXRpb25fa2V5ID0gdGhpcy5wYXJ0aXRpb25fcHJvcGVydHkgPyBkYXRhW3RoaXMucGFydGl0aW9uX3Byb3BlcnR5XSA6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcblxuICAgICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgRGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBQYXJ0aXRpb25LZXk6IHBhcnRpdGlvbl9rZXlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBhd2FpdCBraW5lc2lzLnB1dFJlY29yZHMocGFyYW1zKS5wcm9taXNlKClcbiAgICB9KVxuICB9XG59XG4iXX0=