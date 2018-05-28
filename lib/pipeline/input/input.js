function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

export default class Input {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9pbnB1dC9pbnB1dC5qcyJdLCJuYW1lcyI6WyJJbnB1dCIsImNvbnN0cnVjdG9yIiwiYWRhcHRlclJlZ2lzdHJ5IiwidHlwZSIsIm9wdHMiLCJzb3VyY2UiLCJhZGFwdGVyRm9yIiwiY2FsbCIsImRhdGEiLCJyZWFkIiwiaW5zdGFuY2VGb3IiLCJhZGFwdGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLGVBQWUsTUFBTUEsS0FBTixDQUFZO0FBQ3pCQyxjQUFZQyxlQUFaLEVBQTZCQyxJQUE3QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDdkMsU0FBS0MsTUFBTCxHQUFjSCxnQkFBZ0JJLFVBQWhCLENBQTJCSCxJQUEzQixFQUFpQ0MsSUFBakMsQ0FBZDtBQUNEOztBQUVLRyxNQUFOLENBQVdDLElBQVgsRUFBaUI7QUFBQTs7QUFBQTtBQUNmLGFBQU8sTUFBTSxNQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUJELElBQWpCLENBQWI7QUFEZTtBQUVoQjs7QUFFRCxTQUFPRSxXQUFQLENBQW1CUixlQUFuQixFQUFvQ1MsT0FBcEMsRUFBNkNQLElBQTdDLEVBQW1EO0FBQ2pELFdBQU8sSUFBSUosS0FBSixDQUFVRSxlQUFWLEVBQTJCUyxPQUEzQixFQUFvQ1AsSUFBcEMsQ0FBUDtBQUNEO0FBWHdCIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQge1xuICBjb25zdHJ1Y3RvcihhZGFwdGVyUmVnaXN0cnksIHR5cGUsIG9wdHMpIHtcbiAgICB0aGlzLnNvdXJjZSA9IGFkYXB0ZXJSZWdpc3RyeS5hZGFwdGVyRm9yKHR5cGUsIG9wdHMpO1xuICB9XG5cbiAgYXN5bmMgY2FsbChkYXRhKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuc291cmNlLnJlYWQoZGF0YSlcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZUZvcihhZGFwdGVyUmVnaXN0cnksIGFkYXB0ZXIsIG9wdHMpIHtcbiAgICByZXR1cm4gbmV3IElucHV0KGFkYXB0ZXJSZWdpc3RyeSwgYWRhcHRlciwgb3B0cyk7XG4gIH1cbn1cblxuIl19