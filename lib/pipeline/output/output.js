"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class Output {
  constructor(adapterRegistry, type, opts) {
    this.resource = adapterRegistry.adapterFor(type, opts);
  }

  call(data) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this.resource.write(data);
    })();
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Output(adapterRegistry, adapter, opts);
  }
}
exports.default = Output;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9vdXRwdXQvb3V0cHV0LmpzIl0sIm5hbWVzIjpbIk91dHB1dCIsImNvbnN0cnVjdG9yIiwiYWRhcHRlclJlZ2lzdHJ5IiwidHlwZSIsIm9wdHMiLCJyZXNvdXJjZSIsImFkYXB0ZXJGb3IiLCJjYWxsIiwiZGF0YSIsIndyaXRlIiwiaW5zdGFuY2VGb3IiLCJhZGFwdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLE1BQU1BLE1BQU4sQ0FBYTtBQUMxQkMsY0FBWUMsZUFBWixFQUE2QkMsSUFBN0IsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ3ZDLFNBQUtDLFFBQUwsR0FBZ0JILGdCQUFnQkksVUFBaEIsQ0FBMkJILElBQTNCLEVBQWlDQyxJQUFqQyxDQUFoQjtBQUNEOztBQUVLRyxNQUFOLENBQVdDLElBQVgsRUFBaUI7QUFBQTs7QUFBQTtBQUNmLGFBQU8sTUFBTSxNQUFLSCxRQUFMLENBQWNJLEtBQWQsQ0FBb0JELElBQXBCLENBQWI7QUFEZTtBQUVoQjs7QUFFRCxTQUFPRSxXQUFQLENBQW1CUixlQUFuQixFQUFvQ1MsT0FBcEMsRUFBNkNQLElBQTdDLEVBQW1EO0FBQ2pELFdBQU8sSUFBSUosTUFBSixDQUFXRSxlQUFYLEVBQTRCUyxPQUE1QixFQUFxQ1AsSUFBckMsQ0FBUDtBQUNEO0FBWHlCO2tCQUFQSixNIiwiZmlsZSI6Im91dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dHB1dCB7XG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXJSZWdpc3RyeSwgdHlwZSwgb3B0cykge1xuICAgIHRoaXMucmVzb3VyY2UgPSBhZGFwdGVyUmVnaXN0cnkuYWRhcHRlckZvcih0eXBlLCBvcHRzKVxuICB9XG5cbiAgYXN5bmMgY2FsbChkYXRhKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucmVzb3VyY2Uud3JpdGUoZGF0YSlcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZUZvcihhZGFwdGVyUmVnaXN0cnksIGFkYXB0ZXIsIG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IE91dHB1dChhZGFwdGVyUmVnaXN0cnksIGFkYXB0ZXIsIG9wdHMpO1xuICB9XG59XG5cbiJdfQ==