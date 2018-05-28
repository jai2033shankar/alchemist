function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import promisify from 'util.promisify';
import AWS from 'aws-sdk';

var S3 = new AWS.S3();

export default class S3FileInput {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9zM2ZpbGVfaW5wdXQuanMiXSwibmFtZXMiOlsicHJvbWlzaWZ5IiwiQVdTIiwiUzMiLCJTM0ZpbGVJbnB1dCIsImNvbnN0cnVjdG9yIiwib3B0cyIsInBhcmFtcyIsIkJ1Y2tldCIsImJ1Y2tldCIsIktleSIsImtleSIsInJlYWQiLCJwaXBlbGluZURhdGEiLCJsb2FkRmlsZSIsInB1dERhdGEiLCJmaWxlIiwiQm9keSIsImdldE9iamVjdCIsInByb21pc2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFNBQWhCOztBQUVBLElBQUlDLEtBQUssSUFBSUQsSUFBSUMsRUFBUixFQUFUOztBQUVBLGVBQWUsTUFBTUMsV0FBTixDQUFrQjtBQUMvQkMsY0FBWUMsSUFBWixFQUFrQjtBQUNoQixTQUFLQyxNQUFMLEdBQWM7QUFDWkMsY0FBUUYsS0FBS0csTUFERDtBQUVaQyxXQUFLSixLQUFLSztBQUZFLEtBQWQ7QUFJRDs7QUFFS0MsTUFBTixDQUFXQyxZQUFYLEVBQXlCO0FBQUE7O0FBQUE7QUFDdkIsWUFBTSxNQUFLQyxRQUFMLEVBQU47QUFDQUQsbUJBQWFFLE9BQWIsQ0FBcUIsTUFBS0MsSUFBTCxDQUFVQyxJQUEvQjtBQUNBLGFBQU9KLFlBQVA7QUFIdUI7QUFJeEI7O0FBRUtDLFVBQU4sR0FBaUI7QUFBQTs7QUFBQTtBQUNmLGFBQUtFLElBQUwsR0FBWSxNQUFNYixHQUFHZSxTQUFILENBQWEsT0FBS1gsTUFBbEIsRUFBMEJZLE9BQTFCLEVBQWxCO0FBRGU7QUFFaEI7QUFoQjhCIiwiZmlsZSI6InMzZmlsZV9pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9taXNpZnkgZnJvbSAndXRpbC5wcm9taXNpZnknXG5pbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnXG5cbnZhciBTMyA9IG5ldyBBV1MuUzMoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTM0ZpbGVJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIEJ1Y2tldDogb3B0cy5idWNrZXQsXG4gICAgICBLZXk6IG9wdHMua2V5LFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlYWQocGlwZWxpbmVEYXRhKSB7XG4gICAgYXdhaXQgdGhpcy5sb2FkRmlsZSgpXG4gICAgcGlwZWxpbmVEYXRhLnB1dERhdGEodGhpcy5maWxlLkJvZHkpXG4gICAgcmV0dXJuIHBpcGVsaW5lRGF0YVxuICB9XG5cbiAgYXN5bmMgbG9hZEZpbGUoKSB7XG4gICAgdGhpcy5maWxlID0gYXdhaXQgUzMuZ2V0T2JqZWN0KHRoaXMucGFyYW1zKS5wcm9taXNlKClcbiAgfVxufVxuXG4iXX0=