'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _s3file_input = require('./s3file_input');

var _s3file_input2 = _interopRequireDefault(_s3file_input);

var _s3file_output = require('./s3file_output');

var _s3file_output2 = _interopRequireDefault(_s3file_output);

var _kinesis_input = require('./kinesis_input');

var _kinesis_input2 = _interopRequireDefault(_kinesis_input);

var _kinesis_output = require('./kinesis_output');

var _kinesis_output2 = _interopRequireDefault(_kinesis_output);

var _console_output = require('./console_output');

var _console_output2 = _interopRequireDefault(_console_output);

var _unzip_transformation = require('./unzip_transformation');

var _unzip_transformation2 = _interopRequireDefault(_unzip_transformation);

var _cloudfront_log_transformation = require('./cloudfront_log_transformation');

var _cloudfront_log_transformation2 = _interopRequireDefault(_cloudfront_log_transformation);

var _s3avro_input = require('./s3avro_input');

var _s3avro_input2 = _interopRequireDefault(_s3avro_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AdapterRegistry {
  constructor() {
    this.adapters = {
      S3FileInput: _s3file_input2.default,
      S3FileOutput: _s3file_output2.default,
      S3AvroInput: _s3avro_input2.default,
      KinesisInput: _kinesis_input2.default,
      KinesisOutput: _kinesis_output2.default,
      ConsoleOutput: _console_output2.default,
      UnzipTransformation: _unzip_transformation2.default,
      CloudfrontLogTransformation: _cloudfront_log_transformation2.default
    };
  }

  adapterFor(className, opts) {
    if (this.adapters[className]) {
      return new this.adapters[className](opts);
    } else {
      throw 'No adapter registered with name \'' + className + '"';
    }
  }

  register(className) {
    if (className || typeof className != 'Object') {
      this.adapters[className.name] = className;
    } else {
      throw 'Empty adapter class';
    }
  }
}
exports.default = AdapterRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9hZGFwdGVyX3JlZ2lzdHJ5LmpzIl0sIm5hbWVzIjpbIkFkYXB0ZXJSZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiYWRhcHRlcnMiLCJTM0ZpbGVJbnB1dCIsIlMzRmlsZU91dHB1dCIsIlMzQXZyb0lucHV0IiwiS2luZXNpc0lucHV0IiwiS2luZXNpc091dHB1dCIsIkNvbnNvbGVPdXRwdXQiLCJVbnppcFRyYW5zZm9ybWF0aW9uIiwiQ2xvdWRmcm9udExvZ1RyYW5zZm9ybWF0aW9uIiwiYWRhcHRlckZvciIsImNsYXNzTmFtZSIsIm9wdHMiLCJyZWdpc3RlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLE1BQU1BLGVBQU4sQ0FBc0I7QUFDbkNDLGdCQUFjO0FBQ1osU0FBS0MsUUFBTCxHQUFnQjtBQUNkQyx5Q0FEYztBQUVkQywyQ0FGYztBQUdkQyx5Q0FIYztBQUlkQywyQ0FKYztBQUtkQyw2Q0FMYztBQU1kQyw2Q0FOYztBQU9kQyx5REFQYztBQVFkQztBQVJjLEtBQWhCO0FBVUQ7O0FBRURDLGFBQVdDLFNBQVgsRUFBc0JDLElBQXRCLEVBQTRCO0FBQzFCLFFBQUksS0FBS1gsUUFBTCxDQUFjVSxTQUFkLENBQUosRUFBOEI7QUFDNUIsYUFBTyxJQUFJLEtBQUtWLFFBQUwsQ0FBY1UsU0FBZCxDQUFKLENBQTZCQyxJQUE3QixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSx1Q0FBdUNELFNBQXZDLEdBQW1ELEdBQXpEO0FBQ0Q7QUFDRjs7QUFFREUsV0FBU0YsU0FBVCxFQUFvQjtBQUNsQixRQUFJQSxhQUFhLE9BQU9BLFNBQVAsSUFBb0IsUUFBckMsRUFBK0M7QUFDN0MsV0FBS1YsUUFBTCxDQUFjVSxVQUFVRyxJQUF4QixJQUFnQ0gsU0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFNLHFCQUFOO0FBQ0Q7QUFDRjtBQTVCa0M7a0JBQWhCWixlIiwiZmlsZSI6ImFkYXB0ZXJfcmVnaXN0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUzNGaWxlSW5wdXQgZnJvbSAnLi9zM2ZpbGVfaW5wdXQnXG5pbXBvcnQgUzNGaWxlT3V0cHV0IGZyb20gJy4vczNmaWxlX291dHB1dCdcbmltcG9ydCBLaW5lc2lzSW5wdXQgZnJvbSAnLi9raW5lc2lzX2lucHV0J1xuaW1wb3J0IEtpbmVzaXNPdXRwdXQgZnJvbSAnLi9raW5lc2lzX291dHB1dCdcbmltcG9ydCBDb25zb2xlT3V0cHV0IGZyb20gJy4vY29uc29sZV9vdXRwdXQnXG5pbXBvcnQgVW56aXBUcmFuc2Zvcm1hdGlvbiBmcm9tICcuL3VuemlwX3RyYW5zZm9ybWF0aW9uJ1xuaW1wb3J0IENsb3VkZnJvbnRMb2dUcmFuc2Zvcm1hdGlvbiBmcm9tICcuL2Nsb3VkZnJvbnRfbG9nX3RyYW5zZm9ybWF0aW9uJ1xuaW1wb3J0IFMzQXZyb0lucHV0IGZyb20gJy4vczNhdnJvX2lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGFwdGVyUmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFkYXB0ZXJzID0ge1xuICAgICAgUzNGaWxlSW5wdXQsXG4gICAgICBTM0ZpbGVPdXRwdXQsXG4gICAgICBTM0F2cm9JbnB1dCxcbiAgICAgIEtpbmVzaXNJbnB1dCxcbiAgICAgIEtpbmVzaXNPdXRwdXQsXG4gICAgICBDb25zb2xlT3V0cHV0LFxuICAgICAgVW56aXBUcmFuc2Zvcm1hdGlvbixcbiAgICAgIENsb3VkZnJvbnRMb2dUcmFuc2Zvcm1hdGlvbixcbiAgICB9XG4gIH1cblxuICBhZGFwdGVyRm9yKGNsYXNzTmFtZSwgb3B0cykge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJzW2NsYXNzTmFtZV0pIHtcbiAgICAgIHJldHVybiBuZXcgdGhpcy5hZGFwdGVyc1tjbGFzc05hbWVdKG9wdHMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICdObyBhZGFwdGVyIHJlZ2lzdGVyZWQgd2l0aCBuYW1lIFxcJycgKyBjbGFzc05hbWUgKyAnXCInXG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXIoY2xhc3NOYW1lKSB7XG4gICAgaWYgKGNsYXNzTmFtZSB8fCB0eXBlb2YgY2xhc3NOYW1lICE9ICdPYmplY3QnKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJzW2NsYXNzTmFtZS5uYW1lXSA9IGNsYXNzTmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnRW1wdHkgYWRhcHRlciBjbGFzcydcbiAgICB9XG4gIH1cbn1cbiJdfQ==