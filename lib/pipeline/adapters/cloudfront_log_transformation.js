'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class CloudfrontLogTransformation {
  constructor(opts) {}

  transform(pipelineData) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let data = pipelineData.getData();
      let parsedData = _this.create_payloads_from_piwik(data);

      yield pipelineData.putData(parsedData);
      return pipelineData;
    })();
  }

  create_payloads_from_piwik(data) {
    let fields = [];

    const mapped = data.split(/\r?\n/).map(line => {
      if (line.startsWith('#Fields: ')) {
        fields = line.split(/#Fields: /)[1].split(/ /);
      }

      if (line.startsWith('#')) {
        return null;
      }

      let line_final = {};
      const line_data = line.split(/\t/);

      for (let index in line_data) {
        line_final[fields[index]] = _querystring2.default.unescape(line_data[index]);
      }

      return line_final;
    }).filter(entry => {
      return entry != null;
    });

    const payloads = mapped.map(entry => {
      const params = _querystring2.default.parse(entry['cs-uri-query']);
      const fetched_at = new Date(Date.parse(entry['date'] + ' ' + entry['time']));

      params.source_ip = entry['c-ip'];
      params.fetched_at = fetched_at.getTime() / 1000;
      params.user_agent = _querystring2.default.unescape(entry['cs(User-Agent)']);
      params.edge_location = entry['x-edge-location'];

      return params;
    }).filter(entry => {
      return entry.idsite != null;
    });

    return payloads;
  }
}
exports.default = CloudfrontLogTransformation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9jbG91ZGZyb250X2xvZ190cmFuc2Zvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJDbG91ZGZyb250TG9nVHJhbnNmb3JtYXRpb24iLCJjb25zdHJ1Y3RvciIsIm9wdHMiLCJ0cmFuc2Zvcm0iLCJwaXBlbGluZURhdGEiLCJkYXRhIiwiZ2V0RGF0YSIsInBhcnNlZERhdGEiLCJjcmVhdGVfcGF5bG9hZHNfZnJvbV9waXdpayIsInB1dERhdGEiLCJmaWVsZHMiLCJtYXBwZWQiLCJzcGxpdCIsIm1hcCIsImxpbmUiLCJzdGFydHNXaXRoIiwibGluZV9maW5hbCIsImxpbmVfZGF0YSIsImluZGV4IiwiUXVlcnlzdHJpbmciLCJ1bmVzY2FwZSIsImZpbHRlciIsImVudHJ5IiwicGF5bG9hZHMiLCJwYXJhbXMiLCJwYXJzZSIsImZldGNoZWRfYXQiLCJEYXRlIiwic291cmNlX2lwIiwiZ2V0VGltZSIsInVzZXJfYWdlbnQiLCJlZGdlX2xvY2F0aW9uIiwiaWRzaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFZSxNQUFNQSwyQkFBTixDQUFrQztBQUMvQ0MsY0FBWUMsSUFBWixFQUFrQixDQUNqQjs7QUFFS0MsV0FBTixDQUFnQkMsWUFBaEIsRUFBOEI7QUFBQTs7QUFBQTtBQUM1QixVQUFJQyxPQUFPRCxhQUFhRSxPQUFiLEVBQVg7QUFDQSxVQUFJQyxhQUFhLE1BQUtDLDBCQUFMLENBQWdDSCxJQUFoQyxDQUFqQjs7QUFFQSxZQUFNRCxhQUFhSyxPQUFiLENBQXFCRixVQUFyQixDQUFOO0FBQ0EsYUFBT0gsWUFBUDtBQUw0QjtBQU03Qjs7QUFFREksNkJBQTJCSCxJQUEzQixFQUFpQztBQUMvQixRQUFJSyxTQUFTLEVBQWI7O0FBRUEsVUFBTUMsU0FBU04sS0FBS08sS0FBTCxDQUFXLE9BQVgsRUFBb0JDLEdBQXBCLENBQXlCQyxJQUFELElBQVM7QUFDOUMsVUFBSUEsS0FBS0MsVUFBTCxDQUFnQixXQUFoQixDQUFKLEVBQWtDO0FBQ2hDTCxpQkFBU0ksS0FBS0YsS0FBTCxDQUFXLFdBQVgsRUFBd0IsQ0FBeEIsRUFBMkJBLEtBQTNCLENBQWlDLEdBQWpDLENBQVQ7QUFDRDs7QUFFRCxVQUFJRSxLQUFLQyxVQUFMLENBQWdCLEdBQWhCLENBQUosRUFBMEI7QUFDeEIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSUMsYUFBYSxFQUFqQjtBQUNBLFlBQU1DLFlBQVlILEtBQUtGLEtBQUwsQ0FBVyxJQUFYLENBQWxCOztBQUVBLFdBQUssSUFBSU0sS0FBVCxJQUFrQkQsU0FBbEIsRUFBNkI7QUFDM0JELG1CQUFXTixPQUFPUSxLQUFQLENBQVgsSUFBNEJDLHNCQUFZQyxRQUFaLENBQXFCSCxVQUFVQyxLQUFWLENBQXJCLENBQTVCO0FBQ0Q7O0FBRUQsYUFBT0YsVUFBUDtBQUNELEtBakJjLEVBaUJaSyxNQWpCWSxDQWlCSkMsS0FBRCxJQUFXO0FBQUUsYUFBT0EsU0FBUyxJQUFoQjtBQUFzQixLQWpCOUIsQ0FBZjs7QUFtQkEsVUFBTUMsV0FBV1osT0FBT0UsR0FBUCxDQUFZUyxLQUFELElBQVc7QUFDckMsWUFBTUUsU0FBU0wsc0JBQVlNLEtBQVosQ0FBa0JILE1BQU0sY0FBTixDQUFsQixDQUFmO0FBQ0EsWUFBTUksYUFBYSxJQUFJQyxJQUFKLENBQVNBLEtBQUtGLEtBQUwsQ0FBV0gsTUFBTSxNQUFOLElBQWdCLEdBQWhCLEdBQXNCQSxNQUFNLE1BQU4sQ0FBakMsQ0FBVCxDQUFuQjs7QUFFQUUsYUFBT0ksU0FBUCxHQUFtQk4sTUFBTSxNQUFOLENBQW5CO0FBQ0FFLGFBQU9FLFVBQVAsR0FBb0JBLFdBQVdHLE9BQVgsS0FBdUIsSUFBM0M7QUFDQUwsYUFBT00sVUFBUCxHQUFvQlgsc0JBQVlDLFFBQVosQ0FBcUJFLE1BQU0sZ0JBQU4sQ0FBckIsQ0FBcEI7QUFDQUUsYUFBT08sYUFBUCxHQUF1QlQsTUFBTSxpQkFBTixDQUF2Qjs7QUFFQSxhQUFPRSxNQUFQO0FBQ0QsS0FWZ0IsRUFVZEgsTUFWYyxDQVVOQyxLQUFELElBQVc7QUFBRSxhQUFPQSxNQUFNVSxNQUFOLElBQWdCLElBQXZCO0FBQTZCLEtBVm5DLENBQWpCOztBQVlBLFdBQU9ULFFBQVA7QUFDRDtBQS9DOEM7a0JBQTVCdkIsMkIiLCJmaWxlIjoiY2xvdWRmcm9udF9sb2dfdHJhbnNmb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUXVlcnlzdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3VkZnJvbnRMb2dUcmFuc2Zvcm1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgfVxuXG4gIGFzeW5jIHRyYW5zZm9ybShwaXBlbGluZURhdGEpIHtcbiAgICBsZXQgZGF0YSA9IHBpcGVsaW5lRGF0YS5nZXREYXRhKClcbiAgICBsZXQgcGFyc2VkRGF0YSA9IHRoaXMuY3JlYXRlX3BheWxvYWRzX2Zyb21fcGl3aWsoZGF0YSk7XG5cbiAgICBhd2FpdCBwaXBlbGluZURhdGEucHV0RGF0YShwYXJzZWREYXRhKVxuICAgIHJldHVybiBwaXBlbGluZURhdGFcbiAgfVxuXG4gIGNyZWF0ZV9wYXlsb2Fkc19mcm9tX3Bpd2lrKGRhdGEpIHtcbiAgICBsZXQgZmllbGRzID0gW11cblxuICAgIGNvbnN0IG1hcHBlZCA9IGRhdGEuc3BsaXQoL1xccj9cXG4vKS5tYXAoKGxpbmUpID0+e1xuICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnI0ZpZWxkczogJykpIHtcbiAgICAgICAgZmllbGRzID0gbGluZS5zcGxpdCgvI0ZpZWxkczogLylbMV0uc3BsaXQoLyAvKVxuICAgICAgfVxuXG4gICAgICBpZiAobGluZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGV0IGxpbmVfZmluYWwgPSB7fVxuICAgICAgY29uc3QgbGluZV9kYXRhID0gbGluZS5zcGxpdCgvXFx0LylcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaW5kZXggaW4gbGluZV9kYXRhKSB7XG4gICAgICAgIGxpbmVfZmluYWxbZmllbGRzW2luZGV4XV0gPSBRdWVyeXN0cmluZy51bmVzY2FwZShsaW5lX2RhdGFbaW5kZXhdKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGluZV9maW5hbFxuICAgIH0pLmZpbHRlcigoZW50cnkpID0+IHsgcmV0dXJuIGVudHJ5ICE9IG51bGwgfSlcblxuICAgIGNvbnN0IHBheWxvYWRzID0gbWFwcGVkLm1hcCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IFF1ZXJ5c3RyaW5nLnBhcnNlKGVudHJ5Wydjcy11cmktcXVlcnknXSlcbiAgICAgIGNvbnN0IGZldGNoZWRfYXQgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGVudHJ5WydkYXRlJ10gKyAnICcgKyBlbnRyeVsndGltZSddKSlcbiAgICAgIFxuICAgICAgcGFyYW1zLnNvdXJjZV9pcCA9IGVudHJ5WydjLWlwJ11cbiAgICAgIHBhcmFtcy5mZXRjaGVkX2F0ID0gZmV0Y2hlZF9hdC5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICBwYXJhbXMudXNlcl9hZ2VudCA9IFF1ZXJ5c3RyaW5nLnVuZXNjYXBlKGVudHJ5WydjcyhVc2VyLUFnZW50KSddKVxuICAgICAgcGFyYW1zLmVkZ2VfbG9jYXRpb24gPSBlbnRyeVsneC1lZGdlLWxvY2F0aW9uJ11cblxuICAgICAgcmV0dXJuIHBhcmFtc1xuICAgIH0pLmZpbHRlcigoZW50cnkpID0+IHsgcmV0dXJuIGVudHJ5Lmlkc2l0ZSAhPSBudWxsIH0pXG5cbiAgICByZXR1cm4gcGF5bG9hZHM7XG4gIH1cbn0iXX0=