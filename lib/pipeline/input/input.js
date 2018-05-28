"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Input {
  constructor(adapterRegistry, type, opts) {
    this.source = adapterRegistry.adapterFor(type, opts);
  }

  call(data) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.source.read(data);
    })();
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Input(adapterRegistry, adapter, opts);
  }
}
exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9pbnB1dC9pbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dCIsImNvbnN0cnVjdG9yIiwiYWRhcHRlclJlZ2lzdHJ5IiwidHlwZSIsIm9wdHMiLCJzb3VyY2UiLCJhZGFwdGVyRm9yIiwiY2FsbCIsImRhdGEiLCJyZWFkIiwiaW5zdGFuY2VGb3IiLCJhZGFwdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLE1BQU1BLEtBQU4sQ0FBWTtBQUN6QkMsY0FBWUMsZUFBWixFQUE2QkMsSUFBN0IsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ3ZDLFNBQUtDLE1BQUwsR0FBY0gsZ0JBQWdCSSxVQUFoQixDQUEyQkgsSUFBM0IsRUFBaUNDLElBQWpDLENBQWQ7QUFDRDs7QUFFS0csTUFBTixDQUFXQyxJQUFYLEVBQWlCO0FBQUE7O0FBQUE7QUFDZixhQUFPLE1BQU0sTUFBS0gsTUFBTCxDQUFZSSxJQUFaLENBQWlCRCxJQUFqQixDQUFiO0FBRGU7QUFFaEI7O0FBRUQsU0FBT0UsV0FBUCxDQUFtQlIsZUFBbkIsRUFBb0NTLE9BQXBDLEVBQTZDUCxJQUE3QyxFQUFtRDtBQUNqRCxXQUFPLElBQUlKLEtBQUosQ0FBVUUsZUFBVixFQUEyQlMsT0FBM0IsRUFBb0NQLElBQXBDLENBQVA7QUFDRDtBQVh3QjtrQkFBTkosSyIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3IoYWRhcHRlclJlZ2lzdHJ5LCB0eXBlLCBvcHRzKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBhZGFwdGVyUmVnaXN0cnkuYWRhcHRlckZvcih0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoZGF0YSkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnNvdXJjZS5yZWFkKGRhdGEpXG4gIH1cblxuICBzdGF0aWMgaW5zdGFuY2VGb3IoYWRhcHRlclJlZ2lzdHJ5LCBhZGFwdGVyLCBvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBJbnB1dChhZGFwdGVyUmVnaXN0cnksIGFkYXB0ZXIsIG9wdHMpO1xuICB9XG59XG5cbiJdfQ==