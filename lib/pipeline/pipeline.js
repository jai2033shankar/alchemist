function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import _ from 'underscore';
import PipelineData from './pipeline_data';

export default class Pipeline {
  constructor(params) {
    this.input = params.input;

    if (params.transformations === undefined) {
      this.transformations = [];
    } else {
      this.transformations = params.transformations;
    }

    this.output = params.output;
    this.invalidOutput = params.invalidOutput;
    this.data = new PipelineData();
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
        let invalidData = new PipelineData();
        invalidData.putData(_this4.data.getInvalidData());

        yield step.call(invalidData);
      }
    })();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXBlbGluZS9waXBlbGluZS5qcyJdLCJuYW1lcyI6WyJfIiwiUGlwZWxpbmVEYXRhIiwiUGlwZWxpbmUiLCJjb25zdHJ1Y3RvciIsInBhcmFtcyIsImlucHV0IiwidHJhbnNmb3JtYXRpb25zIiwidW5kZWZpbmVkIiwib3V0cHV0IiwiaW52YWxpZE91dHB1dCIsImRhdGEiLCJjYWxsIiwiY2FsbFN0ZXAiLCJpIiwibGVuZ3RoIiwiY2FsbE91dHB1dFN0ZXAiLCJjYWxsSW52YWxpZE91dHB1dCIsInN0ZXAiLCJoYXNJbnZhbGlkRGF0YSIsImludmFsaWREYXRhIiwicHV0RGF0YSIsImdldEludmFsaWREYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLENBQVAsTUFBYyxZQUFkO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixpQkFBekI7O0FBRUEsZUFBZSxNQUFNQyxRQUFOLENBQWU7QUFDNUJDLGNBQVlDLE1BQVosRUFBb0I7QUFDbEIsU0FBS0MsS0FBTCxHQUFhRCxPQUFPQyxLQUFwQjs7QUFFQSxRQUFJRCxPQUFPRSxlQUFQLEtBQTJCQyxTQUEvQixFQUEwQztBQUN4QyxXQUFLRCxlQUFMLEdBQXVCLEVBQXZCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0EsZUFBTCxHQUF1QkYsT0FBT0UsZUFBOUI7QUFDRDs7QUFFRCxTQUFLRSxNQUFMLEdBQWNKLE9BQU9JLE1BQXJCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkwsT0FBT0ssYUFBNUI7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBSVQsWUFBSixFQUFaO0FBQ0Q7O0FBRUtVLE1BQU4sR0FBYTtBQUFBOztBQUFBO0FBQ1gsVUFBSSxNQUFLTixLQUFMLEtBQWVFLFNBQW5CLEVBQThCO0FBQzVCLGNBQU0sTUFBS0ssUUFBTCxDQUFjLE1BQUtQLEtBQW5CLENBQU47QUFDRDs7QUFFRCxXQUFLLElBQUlRLElBQUksQ0FBYixFQUFnQkEsSUFBSSxNQUFLUCxlQUFMLENBQXFCUSxNQUF6QyxFQUFpREQsR0FBakQsRUFBc0Q7QUFDcEQsY0FBTSxNQUFLRCxRQUFMLENBQWMsTUFBS04sZUFBTCxDQUFxQk8sQ0FBckIsQ0FBZCxDQUFOO0FBQ0Q7O0FBRUQsVUFBSSxNQUFLTCxNQUFMLEtBQWdCRCxTQUFwQixFQUErQjtBQUM3QixjQUFNLE1BQUtRLGNBQUwsQ0FBb0IsTUFBS1AsTUFBekIsQ0FBTjtBQUNEOztBQUVELFVBQUksTUFBS0MsYUFBTCxLQUF1QkYsU0FBM0IsRUFBc0M7QUFDcEMsY0FBTSxNQUFLUyxpQkFBTCxDQUF1QixNQUFLUCxhQUE1QixDQUFOO0FBQ0Q7O0FBRUQsYUFBTyxNQUFLQyxJQUFaO0FBakJXO0FBa0JaOztBQUVLRSxVQUFOLENBQWVLLElBQWYsRUFBcUI7QUFBQTs7QUFBQTtBQUNuQixhQUFLUCxJQUFMLEdBQVksTUFBTU8sS0FBS04sSUFBTCxDQUFVLE9BQUtELElBQWYsQ0FBbEI7QUFEbUI7QUFFcEI7O0FBRUtLLGdCQUFOLENBQXFCRSxJQUFyQixFQUEyQjtBQUFBOztBQUFBO0FBQ3pCLFlBQU1BLEtBQUtOLElBQUwsQ0FBVSxPQUFLRCxJQUFmLENBQU47QUFEeUI7QUFFMUI7O0FBRUtNLG1CQUFOLENBQXdCQyxJQUF4QixFQUE4QjtBQUFBOztBQUFBO0FBQzVCLFVBQUksT0FBS1AsSUFBTCxDQUFVUSxjQUFWLEVBQUosRUFBZ0M7QUFDOUIsWUFBSUMsY0FBYyxJQUFJbEIsWUFBSixFQUFsQjtBQUNBa0Isb0JBQVlDLE9BQVosQ0FBb0IsT0FBS1YsSUFBTCxDQUFVVyxjQUFWLEVBQXBCOztBQUVBLGNBQU1KLEtBQUtOLElBQUwsQ0FBVVEsV0FBVixDQUFOO0FBQ0Q7QUFOMkI7QUFPN0I7QUFsRDJCIiwiZmlsZSI6InBpcGVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSdcbmltcG9ydCBQaXBlbGluZURhdGEgZnJvbSAnLi9waXBlbGluZV9kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaXBlbGluZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgIHRoaXMuaW5wdXQgPSBwYXJhbXMuaW5wdXRcblxuICAgIGlmIChwYXJhbXMudHJhbnNmb3JtYXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtYXRpb25zID0gW11cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvbnMgPSBwYXJhbXMudHJhbnNmb3JtYXRpb25zXG4gICAgfVxuXG4gICAgdGhpcy5vdXRwdXQgPSBwYXJhbXMub3V0cHV0XG4gICAgdGhpcy5pbnZhbGlkT3V0cHV0ID0gcGFyYW1zLmludmFsaWRPdXRwdXRcbiAgICB0aGlzLmRhdGEgPSBuZXcgUGlwZWxpbmVEYXRhKClcbiAgfVxuXG4gIGFzeW5jIGNhbGwoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXdhaXQgdGhpcy5jYWxsU3RlcCh0aGlzLmlucHV0KVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF3YWl0IHRoaXMuY2FsbFN0ZXAodGhpcy50cmFuc2Zvcm1hdGlvbnNbaV0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3V0cHV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2FsbE91dHB1dFN0ZXAodGhpcy5vdXRwdXQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW52YWxpZE91dHB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhd2FpdCB0aGlzLmNhbGxJbnZhbGlkT3V0cHV0KHRoaXMuaW52YWxpZE91dHB1dClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhXG4gIH1cblxuICBhc3luYyBjYWxsU3RlcChzdGVwKSB7XG4gICAgdGhpcy5kYXRhID0gYXdhaXQgc3RlcC5jYWxsKHRoaXMuZGF0YSlcbiAgfVxuXG4gIGFzeW5jIGNhbGxPdXRwdXRTdGVwKHN0ZXApIHtcbiAgICBhd2FpdCBzdGVwLmNhbGwodGhpcy5kYXRhKVxuICB9XG5cbiAgYXN5bmMgY2FsbEludmFsaWRPdXRwdXQoc3RlcCkge1xuICAgIGlmICh0aGlzLmRhdGEuaGFzSW52YWxpZERhdGEoKSkge1xuICAgICAgbGV0IGludmFsaWREYXRhID0gbmV3IFBpcGVsaW5lRGF0YSgpO1xuICAgICAgaW52YWxpZERhdGEucHV0RGF0YSh0aGlzLmRhdGEuZ2V0SW52YWxpZERhdGEoKSk7XG5cbiAgICAgIGF3YWl0IHN0ZXAuY2FsbChpbnZhbGlkRGF0YSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==