function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

export default class Output {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9vdXRwdXQvb3V0cHV0LmpzIl0sIm5hbWVzIjpbIk91dHB1dCIsImNvbnN0cnVjdG9yIiwiYWRhcHRlclJlZ2lzdHJ5IiwidHlwZSIsIm9wdHMiLCJyZXNvdXJjZSIsImFkYXB0ZXJGb3IiLCJjYWxsIiwiZGF0YSIsIndyaXRlIiwiaW5zdGFuY2VGb3IiLCJhZGFwdGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBLGVBQWUsTUFBTUEsTUFBTixDQUFhO0FBQzFCQyxjQUFZQyxlQUFaLEVBQTZCQyxJQUE3QixFQUFtQ0MsSUFBbkMsRUFBeUM7QUFDdkMsU0FBS0MsUUFBTCxHQUFnQkgsZ0JBQWdCSSxVQUFoQixDQUEyQkgsSUFBM0IsRUFBaUNDLElBQWpDLENBQWhCO0FBQ0Q7O0FBRUtHLE1BQU4sQ0FBV0MsSUFBWCxFQUFpQjtBQUFBOztBQUFBO0FBQ2YsYUFBTyxNQUFNLE1BQUtILFFBQUwsQ0FBY0ksS0FBZCxDQUFvQkQsSUFBcEIsQ0FBYjtBQURlO0FBRWhCOztBQUVELFNBQU9FLFdBQVAsQ0FBbUJSLGVBQW5CLEVBQW9DUyxPQUFwQyxFQUE2Q1AsSUFBN0MsRUFBbUQ7QUFDakQsV0FBTyxJQUFJSixNQUFKLENBQVdFLGVBQVgsRUFBNEJTLE9BQTVCLEVBQXFDUCxJQUFyQyxDQUFQO0FBQ0Q7QUFYeUIiLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0cHV0IHtcbiAgY29uc3RydWN0b3IoYWRhcHRlclJlZ2lzdHJ5LCB0eXBlLCBvcHRzKSB7XG4gICAgdGhpcy5yZXNvdXJjZSA9IGFkYXB0ZXJSZWdpc3RyeS5hZGFwdGVyRm9yKHR5cGUsIG9wdHMpXG4gIH1cblxuICBhc3luYyBjYWxsKGRhdGEpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXNvdXJjZS53cml0ZShkYXRhKVxuICB9XG5cbiAgc3RhdGljIGluc3RhbmNlRm9yKGFkYXB0ZXJSZWdpc3RyeSwgYWRhcHRlciwgb3B0cykge1xuICAgIHJldHVybiBuZXcgT3V0cHV0KGFkYXB0ZXJSZWdpc3RyeSwgYWRhcHRlciwgb3B0cyk7XG4gIH1cbn1cblxuIl19