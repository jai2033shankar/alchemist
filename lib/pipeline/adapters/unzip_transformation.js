'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zlib = require('zlib');

var _zlib2 = _interopRequireDefault(_zlib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class UnzipTransformation {
  constructor(opts) {}

  transform(pipelineData) {
    return _asyncToGenerator(function* () {
      let data = pipelineData.getData();
      let uncompressedData = _zlib2.default.gunzipSync(data);

      yield pipelineData.putData(uncompressedData.toString());
      return pipelineData;
    })();
  }
}
exports.default = UnzipTransformation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy91bnppcF90cmFuc2Zvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJVbnppcFRyYW5zZm9ybWF0aW9uIiwiY29uc3RydWN0b3IiLCJvcHRzIiwidHJhbnNmb3JtIiwicGlwZWxpbmVEYXRhIiwiZGF0YSIsImdldERhdGEiLCJ1bmNvbXByZXNzZWREYXRhIiwiWmxpYiIsImd1bnppcFN5bmMiLCJwdXREYXRhIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztBQUVlLE1BQU1BLG1CQUFOLENBQTBCO0FBQ3ZDQyxjQUFZQyxJQUFaLEVBQWtCLENBQ2pCOztBQUVLQyxXQUFOLENBQWdCQyxZQUFoQixFQUE4QjtBQUFBO0FBQzVCLFVBQUlDLE9BQU9ELGFBQWFFLE9BQWIsRUFBWDtBQUNBLFVBQUlDLG1CQUFtQkMsZUFBS0MsVUFBTCxDQUFnQkosSUFBaEIsQ0FBdkI7O0FBRUEsWUFBTUQsYUFBYU0sT0FBYixDQUFxQkgsaUJBQWlCSSxRQUFqQixFQUFyQixDQUFOO0FBQ0EsYUFBT1AsWUFBUDtBQUw0QjtBQU03QjtBQVZzQztrQkFBcEJKLG1CIiwiZmlsZSI6InVuemlwX3RyYW5zZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFpsaWIgZnJvbSAnemxpYidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW56aXBUcmFuc2Zvcm1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgfVxuXG4gIGFzeW5jIHRyYW5zZm9ybShwaXBlbGluZURhdGEpIHtcbiAgICBsZXQgZGF0YSA9IHBpcGVsaW5lRGF0YS5nZXREYXRhKClcbiAgICBsZXQgdW5jb21wcmVzc2VkRGF0YSA9IFpsaWIuZ3VuemlwU3luYyhkYXRhKVxuXG4gICAgYXdhaXQgcGlwZWxpbmVEYXRhLnB1dERhdGEodW5jb21wcmVzc2VkRGF0YS50b1N0cmluZygpKVxuICAgIHJldHVybiBwaXBlbGluZURhdGFcbiAgfVxufVxuIl19