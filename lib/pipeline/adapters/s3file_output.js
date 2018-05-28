function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import promisify from 'util.promisify';
import AWS from 'aws-sdk';

var S3 = new AWS.S3();

export default class S3FileOutput {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9zM2ZpbGVfb3V0cHV0LmpzIl0sIm5hbWVzIjpbInByb21pc2lmeSIsIkFXUyIsIlMzIiwiUzNGaWxlT3V0cHV0IiwiY29uc3RydWN0b3IiLCJvcHRzIiwicGFyYW1zIiwiQnVja2V0IiwiYnVja2V0IiwiS2V5Iiwia2V5Iiwid3JpdGUiLCJwaXBlbGluZURhdGEiLCJib2R5IiwiZ2V0RGF0YSIsInB1dE9iamVjdCIsIk9iamVjdCIsImFzc2lnbiIsIkJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvbWlzZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsU0FBaEI7O0FBRUEsSUFBSUMsS0FBSyxJQUFJRCxJQUFJQyxFQUFSLEVBQVQ7O0FBRUEsZUFBZSxNQUFNQyxZQUFOLENBQW1CO0FBQ2hDQyxjQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFNBQUtDLE1BQUwsR0FBYztBQUNaQyxjQUFRRixLQUFLRyxNQUREO0FBRVpDLFdBQUtKLEtBQUtLO0FBRkUsS0FBZDtBQUlEOztBQUVLQyxPQUFOLENBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFBQTtBQUN4QixVQUFJQyxPQUFPLE1BQU1ELGFBQWFFLE9BQWIsRUFBakI7QUFDQSxZQUFNWixHQUFHYSxTQUFILENBQWFDLE9BQU9DLE1BQVAsQ0FBYyxNQUFLWCxNQUFuQixFQUEyQixFQUFDWSxNQUFNQyxLQUFLQyxTQUFMLENBQWVQLElBQWYsQ0FBUCxFQUEzQixDQUFiLEVBQXVFUSxPQUF2RSxFQUFOO0FBRndCO0FBR3pCO0FBWCtCIiwiZmlsZSI6InMzZmlsZV9vdXRwdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvbWlzaWZ5IGZyb20gJ3V0aWwucHJvbWlzaWZ5J1xuaW1wb3J0IEFXUyBmcm9tICdhd3Mtc2RrJ1xuXG52YXIgUzMgPSBuZXcgQVdTLlMzKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUzNGaWxlT3V0cHV0IHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHRoaXMucGFyYW1zID0ge1xuICAgICAgQnVja2V0OiBvcHRzLmJ1Y2tldCxcbiAgICAgIEtleTogb3B0cy5rZXksXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgd3JpdGUocGlwZWxpbmVEYXRhKSB7XG4gICAgbGV0IGJvZHkgPSBhd2FpdCBwaXBlbGluZURhdGEuZ2V0RGF0YSgpXG4gICAgYXdhaXQgUzMucHV0T2JqZWN0KE9iamVjdC5hc3NpZ24odGhpcy5wYXJhbXMsIHtCb2R5OiBKU09OLnN0cmluZ2lmeShib2R5KX0pKS5wcm9taXNlKClcbiAgfVxufVxuXG4iXX0=