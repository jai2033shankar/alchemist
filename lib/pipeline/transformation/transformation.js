"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Transformation {
  constructor(adapterRegistry, type, opts) {
    this.adapter = adapterRegistry.adapterFor(type, opts);
  }

  call(data) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.adapter.transform(data);
    })();
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Transformation(adapterRegistry, adapter, opts);
  }
}
exports.default = Transformation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJUcmFuc2Zvcm1hdGlvbiIsImNvbnN0cnVjdG9yIiwiYWRhcHRlclJlZ2lzdHJ5IiwidHlwZSIsIm9wdHMiLCJhZGFwdGVyIiwiYWRhcHRlckZvciIsImNhbGwiLCJkYXRhIiwidHJhbnNmb3JtIiwiaW5zdGFuY2VGb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWUsTUFBTUEsY0FBTixDQUFxQjtBQUNsQ0MsY0FBWUMsZUFBWixFQUE2QkMsSUFBN0IsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ3ZDLFNBQUtDLE9BQUwsR0FBZUgsZ0JBQWdCSSxVQUFoQixDQUEyQkgsSUFBM0IsRUFBaUNDLElBQWpDLENBQWY7QUFDRDs7QUFFS0csTUFBTixDQUFXQyxJQUFYLEVBQWlCO0FBQUE7O0FBQUE7QUFDZixhQUFPLE1BQU0sTUFBS0gsT0FBTCxDQUFhSSxTQUFiLENBQXVCRCxJQUF2QixDQUFiO0FBRGU7QUFFaEI7O0FBRUQsU0FBT0UsV0FBUCxDQUFtQlIsZUFBbkIsRUFBb0NHLE9BQXBDLEVBQTZDRCxJQUE3QyxFQUFtRDtBQUNqRCxXQUFPLElBQUlKLGNBQUosQ0FBbUJFLGVBQW5CLEVBQW9DRyxPQUFwQyxFQUE2Q0QsSUFBN0MsQ0FBUDtBQUNEO0FBWGlDO2tCQUFmSixjIiwiZmlsZSI6InRyYW5zZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtYXRpb24ge1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyUmVnaXN0cnksIHR5cGUsIG9wdHMpIHtcbiAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyUmVnaXN0cnkuYWRhcHRlckZvcih0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoZGF0YSkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmFkYXB0ZXIudHJhbnNmb3JtKGRhdGEpXG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VGb3IoYWRhcHRlclJlZ2lzdHJ5LCBhZGFwdGVyLCBvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm1hdGlvbihhZGFwdGVyUmVnaXN0cnksIGFkYXB0ZXIsIG9wdHMpO1xuICB9XG59XG4iXX0=