"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class ConsoleOutput {
  constructor(opts) {}

  write(pipelineData) {
    return _asyncToGenerator(function* () {
      console.log(pipelineData.getData());
    })();
  }
}
exports.default = ConsoleOutput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9jb25zb2xlX291dHB1dC5qcyJdLCJuYW1lcyI6WyJDb25zb2xlT3V0cHV0IiwiY29uc3RydWN0b3IiLCJvcHRzIiwid3JpdGUiLCJwaXBlbGluZURhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZSxNQUFNQSxhQUFOLENBQW9CO0FBQ2pDQyxjQUFZQyxJQUFaLEVBQWtCLENBQUc7O0FBRWZDLE9BQU4sQ0FBWUMsWUFBWixFQUEwQjtBQUFBO0FBQ3hCQyxjQUFRQyxHQUFSLENBQVlGLGFBQWFHLE9BQWIsRUFBWjtBQUR3QjtBQUV6QjtBQUxnQztrQkFBZFAsYSIsImZpbGUiOiJjb25zb2xlX291dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVPdXRwdXQge1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7IH1cblxuICBhc3luYyB3cml0ZShwaXBlbGluZURhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhwaXBlbGluZURhdGEuZ2V0RGF0YSgpKTtcbiAgfVxufVxuXG4iXX0=