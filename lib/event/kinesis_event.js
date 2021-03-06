"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class KinesisEvent {
  constructor(event) {
    this.event = event;
  }

  events() {
    return this.event.Records.map(event => {
      return event.kinesis;
    });
  }
}
exports.default = KinesisEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmVudC9raW5lc2lzX2V2ZW50LmpzIl0sIm5hbWVzIjpbIktpbmVzaXNFdmVudCIsImNvbnN0cnVjdG9yIiwiZXZlbnQiLCJldmVudHMiLCJSZWNvcmRzIiwibWFwIiwia2luZXNpcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZSxNQUFNQSxZQUFOLENBQW1CO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOztBQUVEQyxXQUFTO0FBQ1AsV0FBTyxLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXdCSCxLQUFELElBQVc7QUFBRSxhQUFPQSxNQUFNSSxPQUFiO0FBQXVCLEtBQTNELENBQVA7QUFDRDtBQVArQjtrQkFBYk4sWSIsImZpbGUiOiJraW5lc2lzX2V2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2luZXNpc0V2ZW50IHtcbiAgY29uc3RydWN0b3IoZXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnRcbiAgfVxuXG4gIGV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudC5SZWNvcmRzLm1hcCgoZXZlbnQpID0+IHsgcmV0dXJuIGV2ZW50LmtpbmVzaXM7IH0pXG4gIH1cbn1cbiJdfQ==