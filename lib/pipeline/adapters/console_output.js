function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

export default class ConsoleOutput {
  constructor(opts) {}

  write(pipelineData) {
    return _asyncToGenerator(function* () {
      console.log(pipelineData.getData());
    })();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9jb25zb2xlX291dHB1dC5qcyJdLCJuYW1lcyI6WyJDb25zb2xlT3V0cHV0IiwiY29uc3RydWN0b3IiLCJvcHRzIiwid3JpdGUiLCJwaXBlbGluZURhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxlQUFlLE1BQU1BLGFBQU4sQ0FBb0I7QUFDakNDLGNBQVlDLElBQVosRUFBa0IsQ0FBRzs7QUFFZkMsT0FBTixDQUFZQyxZQUFaLEVBQTBCO0FBQUE7QUFDeEJDLGNBQVFDLEdBQVIsQ0FBWUYsYUFBYUcsT0FBYixFQUFaO0FBRHdCO0FBRXpCO0FBTGdDIiwiZmlsZSI6ImNvbnNvbGVfb3V0cHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZU91dHB1dCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHsgfVxuXG4gIGFzeW5jIHdyaXRlKHBpcGVsaW5lRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKHBpcGVsaW5lRGF0YS5nZXREYXRhKCkpO1xuICB9XG59XG5cbiJdfQ==