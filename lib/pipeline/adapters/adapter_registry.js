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

var _sqs_input = require('./sqs_input');

var _sqs_input2 = _interopRequireDefault(_sqs_input);

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
      CloudfrontLogTransformation: _cloudfront_log_transformation2.default,
      SQSInput: _sqs_input2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9hZGFwdGVyX3JlZ2lzdHJ5LmpzIl0sIm5hbWVzIjpbIkFkYXB0ZXJSZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiYWRhcHRlcnMiLCJTM0ZpbGVJbnB1dCIsIlMzRmlsZU91dHB1dCIsIlMzQXZyb0lucHV0IiwiS2luZXNpc0lucHV0IiwiS2luZXNpc091dHB1dCIsIkNvbnNvbGVPdXRwdXQiLCJVbnppcFRyYW5zZm9ybWF0aW9uIiwiQ2xvdWRmcm9udExvZ1RyYW5zZm9ybWF0aW9uIiwiU1FTSW5wdXQiLCJhZGFwdGVyRm9yIiwiY2xhc3NOYW1lIiwib3B0cyIsInJlZ2lzdGVyIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxNQUFNQSxlQUFOLENBQXNCO0FBQ25DQyxnQkFBYztBQUNaLFNBQUtDLFFBQUwsR0FBZ0I7QUFDZEMseUNBRGM7QUFFZEMsMkNBRmM7QUFHZEMseUNBSGM7QUFJZEMsMkNBSmM7QUFLZEMsNkNBTGM7QUFNZEMsNkNBTmM7QUFPZEMseURBUGM7QUFRZEMsMEVBUmM7QUFTZEM7QUFUYyxLQUFoQjtBQVdEOztBQUVEQyxhQUFXQyxTQUFYLEVBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixRQUFJLEtBQUtaLFFBQUwsQ0FBY1csU0FBZCxDQUFKLEVBQThCO0FBQzVCLGFBQU8sSUFBSSxLQUFLWCxRQUFMLENBQWNXLFNBQWQsQ0FBSixDQUE2QkMsSUFBN0IsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sdUNBQXVDRCxTQUF2QyxHQUFtRCxHQUF6RDtBQUNEO0FBQ0Y7O0FBRURFLFdBQVNGLFNBQVQsRUFBb0I7QUFDbEIsUUFBSUEsYUFBYSxPQUFPQSxTQUFQLElBQW9CLFFBQXJDLEVBQStDO0FBQzdDLFdBQUtYLFFBQUwsQ0FBY1csVUFBVUcsSUFBeEIsSUFBZ0NILFNBQWhDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxxQkFBTjtBQUNEO0FBQ0Y7QUE3QmtDO2tCQUFoQmIsZSIsImZpbGUiOiJhZGFwdGVyX3JlZ2lzdHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFMzRmlsZUlucHV0IGZyb20gJy4vczNmaWxlX2lucHV0J1xuaW1wb3J0IFMzRmlsZU91dHB1dCBmcm9tICcuL3MzZmlsZV9vdXRwdXQnXG5pbXBvcnQgS2luZXNpc0lucHV0IGZyb20gJy4va2luZXNpc19pbnB1dCdcbmltcG9ydCBLaW5lc2lzT3V0cHV0IGZyb20gJy4va2luZXNpc19vdXRwdXQnXG5pbXBvcnQgQ29uc29sZU91dHB1dCBmcm9tICcuL2NvbnNvbGVfb3V0cHV0J1xuaW1wb3J0IFVuemlwVHJhbnNmb3JtYXRpb24gZnJvbSAnLi91bnppcF90cmFuc2Zvcm1hdGlvbidcbmltcG9ydCBDbG91ZGZyb250TG9nVHJhbnNmb3JtYXRpb24gZnJvbSAnLi9jbG91ZGZyb250X2xvZ190cmFuc2Zvcm1hdGlvbidcbmltcG9ydCBTM0F2cm9JbnB1dCBmcm9tICcuL3MzYXZyb19pbnB1dCdcbmltcG9ydCBTUVNJbnB1dCBmcm9tICcuL3Nxc19pbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhcHRlclJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hZGFwdGVycyA9IHtcbiAgICAgIFMzRmlsZUlucHV0LFxuICAgICAgUzNGaWxlT3V0cHV0LFxuICAgICAgUzNBdnJvSW5wdXQsXG4gICAgICBLaW5lc2lzSW5wdXQsXG4gICAgICBLaW5lc2lzT3V0cHV0LFxuICAgICAgQ29uc29sZU91dHB1dCxcbiAgICAgIFVuemlwVHJhbnNmb3JtYXRpb24sXG4gICAgICBDbG91ZGZyb250TG9nVHJhbnNmb3JtYXRpb24sXG4gICAgICBTUVNJbnB1dCxcbiAgICB9XG4gIH1cblxuICBhZGFwdGVyRm9yKGNsYXNzTmFtZSwgb3B0cykge1xuICAgIGlmICh0aGlzLmFkYXB0ZXJzW2NsYXNzTmFtZV0pIHtcbiAgICAgIHJldHVybiBuZXcgdGhpcy5hZGFwdGVyc1tjbGFzc05hbWVdKG9wdHMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICdObyBhZGFwdGVyIHJlZ2lzdGVyZWQgd2l0aCBuYW1lIFxcJycgKyBjbGFzc05hbWUgKyAnXCInXG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXIoY2xhc3NOYW1lKSB7XG4gICAgaWYgKGNsYXNzTmFtZSB8fCB0eXBlb2YgY2xhc3NOYW1lICE9ICdPYmplY3QnKSB7XG4gICAgICB0aGlzLmFkYXB0ZXJzW2NsYXNzTmFtZS5uYW1lXSA9IGNsYXNzTmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnRW1wdHkgYWRhcHRlciBjbGFzcydcbiAgICB9XG4gIH1cbn1cbiJdfQ==