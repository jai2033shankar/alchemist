"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class SQSInput {
  constructor(opts) {
    this.events = opts.events;
  }

  read(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let extracted = _this.events.map(function (event) {
        return event.body;
      });

      pipelineData.putData(extracted);
      return pipelineData;
    })();
  }

}
exports.default = SQSInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9zcXNfaW5wdXQuanMiXSwibmFtZXMiOlsiU1FTSW5wdXQiLCJjb25zdHJ1Y3RvciIsIm9wdHMiLCJldmVudHMiLCJyZWFkIiwicGlwZWxpbmVEYXRhIiwiZXh0cmFjdGVkIiwibWFwIiwiZXZlbnQiLCJib2R5IiwicHV0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZSxNQUFNQSxRQUFOLENBQWU7QUFDNUJDLGNBQVlDLElBQVosRUFBa0I7QUFDaEIsU0FBS0MsTUFBTCxHQUFjRCxLQUFLQyxNQUFuQjtBQUNEOztBQUVLQyxNQUFOLENBQVdDLFlBQVgsRUFBeUI7QUFBQTs7QUFBQTtBQUN2QixVQUFJQyxZQUFZLE1BQUtILE1BQUwsQ0FBWUksR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQVc7QUFDekMsZUFBT0EsTUFBTUMsSUFBYjtBQUNELE9BRmUsQ0FBaEI7O0FBSUFKLG1CQUFhSyxPQUFiLENBQXFCSixTQUFyQjtBQUNBLGFBQU9ELFlBQVA7QUFOdUI7QUFPeEI7O0FBWjJCO2tCQUFUTCxRIiwiZmlsZSI6InNxc19pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNRU0lucHV0IHtcbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIHRoaXMuZXZlbnRzID0gb3B0cy5ldmVudHM7XG4gIH1cblxuICBhc3luYyByZWFkKHBpcGVsaW5lRGF0YSkge1xuICAgIGxldCBleHRyYWN0ZWQgPSB0aGlzLmV2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XG4gICAgICByZXR1cm4gZXZlbnQuYm9keTtcbiAgICB9KTtcblxuICAgIHBpcGVsaW5lRGF0YS5wdXREYXRhKGV4dHJhY3RlZCk7XG4gICAgcmV0dXJuIHBpcGVsaW5lRGF0YVxuICB9XG5cbn1cblxuIl19