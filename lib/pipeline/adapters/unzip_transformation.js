function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import Zlib from 'zlib';

export default class UnzipTransformation {
  constructor(opts) {}

  transform(pipelineData) {
    return _asyncToGenerator(function* () {
      let data = pipelineData.getData();
      let uncompressedData = Zlib.gunzipSync(data);

      yield pipelineData.putData(uncompressedData.toString());
      return pipelineData;
    })();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy91bnppcF90cmFuc2Zvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJabGliIiwiVW56aXBUcmFuc2Zvcm1hdGlvbiIsImNvbnN0cnVjdG9yIiwib3B0cyIsInRyYW5zZm9ybSIsInBpcGVsaW5lRGF0YSIsImRhdGEiLCJnZXREYXRhIiwidW5jb21wcmVzc2VkRGF0YSIsImd1bnppcFN5bmMiLCJwdXREYXRhIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsSUFBUCxNQUFpQixNQUFqQjs7QUFFQSxlQUFlLE1BQU1DLG1CQUFOLENBQTBCO0FBQ3ZDQyxjQUFZQyxJQUFaLEVBQWtCLENBQ2pCOztBQUVLQyxXQUFOLENBQWdCQyxZQUFoQixFQUE4QjtBQUFBO0FBQzVCLFVBQUlDLE9BQU9ELGFBQWFFLE9BQWIsRUFBWDtBQUNBLFVBQUlDLG1CQUFtQlIsS0FBS1MsVUFBTCxDQUFnQkgsSUFBaEIsQ0FBdkI7O0FBRUEsWUFBTUQsYUFBYUssT0FBYixDQUFxQkYsaUJBQWlCRyxRQUFqQixFQUFyQixDQUFOO0FBQ0EsYUFBT04sWUFBUDtBQUw0QjtBQU03QjtBQVZzQyIsImZpbGUiOiJ1bnppcF90cmFuc2Zvcm1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBabGliIGZyb20gJ3psaWInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuemlwVHJhbnNmb3JtYXRpb24ge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gIH1cblxuICBhc3luYyB0cmFuc2Zvcm0ocGlwZWxpbmVEYXRhKSB7XG4gICAgbGV0IGRhdGEgPSBwaXBlbGluZURhdGEuZ2V0RGF0YSgpXG4gICAgbGV0IHVuY29tcHJlc3NlZERhdGEgPSBabGliLmd1bnppcFN5bmMoZGF0YSlcblxuICAgIGF3YWl0IHBpcGVsaW5lRGF0YS5wdXREYXRhKHVuY29tcHJlc3NlZERhdGEudG9TdHJpbmcoKSlcbiAgICByZXR1cm4gcGlwZWxpbmVEYXRhXG4gIH1cbn1cbiJdfQ==