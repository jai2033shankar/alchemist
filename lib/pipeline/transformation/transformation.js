function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

export default class Transformation {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJUcmFuc2Zvcm1hdGlvbiIsImNvbnN0cnVjdG9yIiwiYWRhcHRlclJlZ2lzdHJ5IiwidHlwZSIsIm9wdHMiLCJhZGFwdGVyIiwiYWRhcHRlckZvciIsImNhbGwiLCJkYXRhIiwidHJhbnNmb3JtIiwiaW5zdGFuY2VGb3IiXSwibWFwcGluZ3MiOiI7O0FBQUEsZUFBZSxNQUFNQSxjQUFOLENBQXFCO0FBQ2xDQyxjQUFZQyxlQUFaLEVBQTZCQyxJQUE3QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDdkMsU0FBS0MsT0FBTCxHQUFlSCxnQkFBZ0JJLFVBQWhCLENBQTJCSCxJQUEzQixFQUFpQ0MsSUFBakMsQ0FBZjtBQUNEOztBQUVLRyxNQUFOLENBQVdDLElBQVgsRUFBaUI7QUFBQTs7QUFBQTtBQUNmLGFBQU8sTUFBTSxNQUFLSCxPQUFMLENBQWFJLFNBQWIsQ0FBdUJELElBQXZCLENBQWI7QUFEZTtBQUVoQjs7QUFFRCxTQUFPRSxXQUFQLENBQW1CUixlQUFuQixFQUFvQ0csT0FBcEMsRUFBNkNELElBQTdDLEVBQW1EO0FBQ2pELFdBQU8sSUFBSUosY0FBSixDQUFtQkUsZUFBbkIsRUFBb0NHLE9BQXBDLEVBQTZDRCxJQUE3QyxDQUFQO0FBQ0Q7QUFYaUMiLCJmaWxlIjoidHJhbnNmb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGFkYXB0ZXJSZWdpc3RyeSwgdHlwZSwgb3B0cykge1xuICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXJSZWdpc3RyeS5hZGFwdGVyRm9yKHR5cGUsIG9wdHMpO1xuICB9XG5cbiAgYXN5bmMgY2FsbChkYXRhKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYWRhcHRlci50cmFuc2Zvcm0oZGF0YSlcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZUZvcihhZGFwdGVyUmVnaXN0cnksIGFkYXB0ZXIsIG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IFRyYW5zZm9ybWF0aW9uKGFkYXB0ZXJSZWdpc3RyeSwgYWRhcHRlciwgb3B0cyk7XG4gIH1cbn1cbiJdfQ==