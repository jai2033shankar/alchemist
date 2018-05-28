'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _pipeline_data = require('./pipeline_data');

var _pipeline_data2 = _interopRequireDefault(_pipeline_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Pipeline {
  constructor(params) {
    this.input = params.input;

    if (params.transformations === undefined) {
      this.transformations = [];
    } else {
      this.transformations = params.transformations;
    }

    this.output = params.output;
    this.invalidOutput = params.invalidOutput;
    this.data = new _pipeline_data2.default();
  }

  call() {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (_this.input !== undefined) {
        yield _this.callStep(_this.input);
      }

      for (let i = 0; i < _this.transformations.length; i++) {
        yield _this.callStep(_this.transformations[i]);
      }

      if (_this.output !== undefined) {
        yield _this.callOutputStep(_this.output);
      }

      if (_this.invalidOutput !== undefined) {
        yield _this.callInvalidOutput(_this.invalidOutput);
      }

      return _this.data;
    })();
  }

  callStep(step) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.data = yield step.call(_this2.data);
    })();
  }

  callOutputStep(step) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      yield step.call(_this3.data);
    })();
  }

  callInvalidOutput(step) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      if (_this4.data.hasInvalidData()) {
        let invalidData = new _pipeline_data2.default();
        invalidData.putData(_this4.data.getInvalidData());

        yield step.call(invalidData);
      }
    })();
  }
}
exports.default = Pipeline;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXBlbGluZS9waXBlbGluZS5qcyJdLCJuYW1lcyI6WyJQaXBlbGluZSIsImNvbnN0cnVjdG9yIiwicGFyYW1zIiwiaW5wdXQiLCJ0cmFuc2Zvcm1hdGlvbnMiLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJpbnZhbGlkT3V0cHV0IiwiZGF0YSIsIlBpcGVsaW5lRGF0YSIsImNhbGwiLCJjYWxsU3RlcCIsImkiLCJsZW5ndGgiLCJjYWxsT3V0cHV0U3RlcCIsImNhbGxJbnZhbGlkT3V0cHV0Iiwic3RlcCIsImhhc0ludmFsaWREYXRhIiwiaW52YWxpZERhdGEiLCJwdXREYXRhIiwiZ2V0SW52YWxpZERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRWUsTUFBTUEsUUFBTixDQUFlO0FBQzVCQyxjQUFZQyxNQUFaLEVBQW9CO0FBQ2xCLFNBQUtDLEtBQUwsR0FBYUQsT0FBT0MsS0FBcEI7O0FBRUEsUUFBSUQsT0FBT0UsZUFBUCxLQUEyQkMsU0FBL0IsRUFBMEM7QUFDeEMsV0FBS0QsZUFBTCxHQUF1QixFQUF2QjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtBLGVBQUwsR0FBdUJGLE9BQU9FLGVBQTlCO0FBQ0Q7O0FBRUQsU0FBS0UsTUFBTCxHQUFjSixPQUFPSSxNQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJMLE9BQU9LLGFBQTVCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQUlDLHVCQUFKLEVBQVo7QUFDRDs7QUFFS0MsTUFBTixHQUFhO0FBQUE7O0FBQUE7QUFDWCxVQUFJLE1BQUtQLEtBQUwsS0FBZUUsU0FBbkIsRUFBOEI7QUFDNUIsY0FBTSxNQUFLTSxRQUFMLENBQWMsTUFBS1IsS0FBbkIsQ0FBTjtBQUNEOztBQUVELFdBQUssSUFBSVMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLE1BQUtSLGVBQUwsQ0FBcUJTLE1BQXpDLEVBQWlERCxHQUFqRCxFQUFzRDtBQUNwRCxjQUFNLE1BQUtELFFBQUwsQ0FBYyxNQUFLUCxlQUFMLENBQXFCUSxDQUFyQixDQUFkLENBQU47QUFDRDs7QUFFRCxVQUFJLE1BQUtOLE1BQUwsS0FBZ0JELFNBQXBCLEVBQStCO0FBQzdCLGNBQU0sTUFBS1MsY0FBTCxDQUFvQixNQUFLUixNQUF6QixDQUFOO0FBQ0Q7O0FBRUQsVUFBSSxNQUFLQyxhQUFMLEtBQXVCRixTQUEzQixFQUFzQztBQUNwQyxjQUFNLE1BQUtVLGlCQUFMLENBQXVCLE1BQUtSLGFBQTVCLENBQU47QUFDRDs7QUFFRCxhQUFPLE1BQUtDLElBQVo7QUFqQlc7QUFrQlo7O0FBRUtHLFVBQU4sQ0FBZUssSUFBZixFQUFxQjtBQUFBOztBQUFBO0FBQ25CLGFBQUtSLElBQUwsR0FBWSxNQUFNUSxLQUFLTixJQUFMLENBQVUsT0FBS0YsSUFBZixDQUFsQjtBQURtQjtBQUVwQjs7QUFFS00sZ0JBQU4sQ0FBcUJFLElBQXJCLEVBQTJCO0FBQUE7O0FBQUE7QUFDekIsWUFBTUEsS0FBS04sSUFBTCxDQUFVLE9BQUtGLElBQWYsQ0FBTjtBQUR5QjtBQUUxQjs7QUFFS08sbUJBQU4sQ0FBd0JDLElBQXhCLEVBQThCO0FBQUE7O0FBQUE7QUFDNUIsVUFBSSxPQUFLUixJQUFMLENBQVVTLGNBQVYsRUFBSixFQUFnQztBQUM5QixZQUFJQyxjQUFjLElBQUlULHVCQUFKLEVBQWxCO0FBQ0FTLG9CQUFZQyxPQUFaLENBQW9CLE9BQUtYLElBQUwsQ0FBVVksY0FBVixFQUFwQjs7QUFFQSxjQUFNSixLQUFLTixJQUFMLENBQVVRLFdBQVYsQ0FBTjtBQUNEO0FBTjJCO0FBTzdCO0FBbEQyQjtrQkFBVGxCLFEiLCJmaWxlIjoicGlwZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xuaW1wb3J0IFBpcGVsaW5lRGF0YSBmcm9tICcuL3BpcGVsaW5lX2RhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpcGVsaW5lIHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5pbnB1dCA9IHBhcmFtcy5pbnB1dFxuXG4gICAgaWYgKHBhcmFtcy50cmFuc2Zvcm1hdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvbnMgPSBbXVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucyA9IHBhcmFtcy50cmFuc2Zvcm1hdGlvbnNcbiAgICB9XG5cbiAgICB0aGlzLm91dHB1dCA9IHBhcmFtcy5vdXRwdXRcbiAgICB0aGlzLmludmFsaWRPdXRwdXQgPSBwYXJhbXMuaW52YWxpZE91dHB1dFxuICAgIHRoaXMuZGF0YSA9IG5ldyBQaXBlbGluZURhdGEoKVxuICB9XG5cbiAgYXN5bmMgY2FsbCgpIHtcbiAgICBpZiAodGhpcy5pbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhd2FpdCB0aGlzLmNhbGxTdGVwKHRoaXMuaW5wdXQpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgYXdhaXQgdGhpcy5jYWxsU3RlcCh0aGlzLnRyYW5zZm9ybWF0aW9uc1tpXSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdXRwdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXdhaXQgdGhpcy5jYWxsT3V0cHV0U3RlcCh0aGlzLm91dHB1dClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnZhbGlkT3V0cHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2FsbEludmFsaWRPdXRwdXQodGhpcy5pbnZhbGlkT3V0cHV0KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRhdGFcbiAgfVxuXG4gIGFzeW5jIGNhbGxTdGVwKHN0ZXApIHtcbiAgICB0aGlzLmRhdGEgPSBhd2FpdCBzdGVwLmNhbGwodGhpcy5kYXRhKVxuICB9XG5cbiAgYXN5bmMgY2FsbE91dHB1dFN0ZXAoc3RlcCkge1xuICAgIGF3YWl0IHN0ZXAuY2FsbCh0aGlzLmRhdGEpXG4gIH1cblxuICBhc3luYyBjYWxsSW52YWxpZE91dHB1dChzdGVwKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5oYXNJbnZhbGlkRGF0YSgpKSB7XG4gICAgICBsZXQgaW52YWxpZERhdGEgPSBuZXcgUGlwZWxpbmVEYXRhKCk7XG4gICAgICBpbnZhbGlkRGF0YS5wdXREYXRhKHRoaXMuZGF0YS5nZXRJbnZhbGlkRGF0YSgpKTtcblxuICAgICAgYXdhaXQgc3RlcC5jYWxsKGludmFsaWREYXRhKVxuICAgIH1cbiAgfVxufVxuIl19