"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class KinesisInput {
  constructor(opts) {
    this.events = opts.events;
  }

  read(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let decoded = _this.events.map(function (event) {
        return Buffer.from(event.data, "base64").toString();
      });

      pipelineData.putData(decoded);
      return pipelineData;
    })();
  }

}
exports.default = KinesisInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9raW5lc2lzX2lucHV0LmpzIl0sIm5hbWVzIjpbIktpbmVzaXNJbnB1dCIsImNvbnN0cnVjdG9yIiwib3B0cyIsImV2ZW50cyIsInJlYWQiLCJwaXBlbGluZURhdGEiLCJkZWNvZGVkIiwibWFwIiwiZXZlbnQiLCJCdWZmZXIiLCJmcm9tIiwiZGF0YSIsInRvU3RyaW5nIiwicHV0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZSxNQUFNQSxZQUFOLENBQW1CO0FBQ2hDQyxjQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFNBQUtDLE1BQUwsR0FBY0QsS0FBS0MsTUFBbkI7QUFDRDs7QUFFS0MsTUFBTixDQUFXQyxZQUFYLEVBQXlCO0FBQUE7O0FBQUE7QUFDdkIsVUFBSUMsVUFBVSxNQUFLSCxNQUFMLENBQVlJLEdBQVosQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZDLGVBQU9DLE9BQU9DLElBQVAsQ0FBWUYsTUFBTUcsSUFBbEIsRUFBd0IsUUFBeEIsRUFBa0NDLFFBQWxDLEVBQVA7QUFDRCxPQUZhLENBQWQ7O0FBSUFQLG1CQUFhUSxPQUFiLENBQXFCUCxPQUFyQjtBQUNBLGFBQU9ELFlBQVA7QUFOdUI7QUFPeEI7O0FBWitCO2tCQUFiTCxZIiwiZmlsZSI6ImtpbmVzaXNfaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBLaW5lc2lzSW5wdXQge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgdGhpcy5ldmVudHMgPSBvcHRzLmV2ZW50cztcbiAgfVxuXG4gIGFzeW5jIHJlYWQocGlwZWxpbmVEYXRhKSB7XG4gICAgbGV0IGRlY29kZWQgPSB0aGlzLmV2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XG4gICAgICByZXR1cm4gQnVmZmVyLmZyb20oZXZlbnQuZGF0YSwgXCJiYXNlNjRcIikudG9TdHJpbmcoKTtcbiAgICB9KTtcblxuICAgIHBpcGVsaW5lRGF0YS5wdXREYXRhKGRlY29kZWQpO1xuICAgIHJldHVybiBwaXBlbGluZURhdGFcbiAgfVxuXG59XG5cbiJdfQ==