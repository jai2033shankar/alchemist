function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

export default class KinesisInput {
  constructor(opts) {
    this.events = opts.events;
  }

  read(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let decoded = _this.events.map(function (event) {
        return Buffer.from(event.data, "base64").toString();
      });

      pipelineData.putData(decoded);
      return pipelineData;
    })();
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9raW5lc2lzX2lucHV0LmpzIl0sIm5hbWVzIjpbIktpbmVzaXNJbnB1dCIsImNvbnN0cnVjdG9yIiwib3B0cyIsImV2ZW50cyIsInJlYWQiLCJwaXBlbGluZURhdGEiLCJkZWNvZGVkIiwibWFwIiwiZXZlbnQiLCJCdWZmZXIiLCJmcm9tIiwiZGF0YSIsInRvU3RyaW5nIiwicHV0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFlLE1BQU1BLFlBQU4sQ0FBbUI7QUFDaENDLGNBQVlDLElBQVosRUFBa0I7QUFDaEIsU0FBS0MsTUFBTCxHQUFjRCxLQUFLQyxNQUFuQjtBQUNEOztBQUVLQyxNQUFOLENBQVdDLFlBQVgsRUFBeUI7QUFBQTs7QUFBQTtBQUN2QixVQUFJQyxVQUFVLE1BQUtILE1BQUwsQ0FBWUksR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQVc7QUFDdkMsZUFBT0MsT0FBT0MsSUFBUCxDQUFZRixNQUFNRyxJQUFsQixFQUF3QixRQUF4QixFQUFrQ0MsUUFBbEMsRUFBUDtBQUNELE9BRmEsQ0FBZDs7QUFJQVAsbUJBQWFRLE9BQWIsQ0FBcUJQLE9BQXJCO0FBQ0EsYUFBT0QsWUFBUDtBQU51QjtBQU94Qjs7QUFaK0IiLCJmaWxlIjoia2luZXNpc19pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbmVzaXNJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICB0aGlzLmV2ZW50cyA9IG9wdHMuZXZlbnRzO1xuICB9XG5cbiAgYXN5bmMgcmVhZChwaXBlbGluZURhdGEpIHtcbiAgICBsZXQgZGVjb2RlZCA9IHRoaXMuZXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcbiAgICAgIHJldHVybiBCdWZmZXIuZnJvbShldmVudC5kYXRhLCBcImJhc2U2NFwiKS50b1N0cmluZygpO1xuICAgIH0pO1xuXG4gICAgcGlwZWxpbmVEYXRhLnB1dERhdGEoZGVjb2RlZCk7XG4gICAgcmV0dXJuIHBpcGVsaW5lRGF0YVxuICB9XG5cbn1cblxuIl19