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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AdapterRegistry {
  constructor() {
    this.adapters = {
      S3FileInput: _s3file_input2.default,
      S3FileOutput: _s3file_output2.default,
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
      throw "No adapter registered with name '" + className + '"';
    }
  }

  register(className) {
    if (className || typeof className != "Object") {
      this.adapters[className.name] = className;
    } else {
      throw "Empty adapter class";
    }
  }
}
exports.default = AdapterRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waXBlbGluZS9hZGFwdGVycy9hZGFwdGVyX3JlZ2lzdHJ5LmpzIl0sIm5hbWVzIjpbIkFkYXB0ZXJSZWdpc3RyeSIsImNvbnN0cnVjdG9yIiwiYWRhcHRlcnMiLCJTM0ZpbGVJbnB1dCIsIlMzRmlsZU91dHB1dCIsIktpbmVzaXNJbnB1dCIsIktpbmVzaXNPdXRwdXQiLCJDb25zb2xlT3V0cHV0IiwiVW56aXBUcmFuc2Zvcm1hdGlvbiIsIkNsb3VkZnJvbnRMb2dUcmFuc2Zvcm1hdGlvbiIsImFkYXB0ZXJGb3IiLCJjbGFzc05hbWUiLCJvcHRzIiwicmVnaXN0ZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRWUsTUFBTUEsZUFBTixDQUFzQjtBQUNuQ0MsZ0JBQWM7QUFDWixTQUFLQyxRQUFMLEdBQWdCO0FBQ2RDLHlDQURjO0FBRWRDLDJDQUZjO0FBR2RDLDJDQUhjO0FBSWRDLDZDQUpjO0FBS2RDLDZDQUxjO0FBTWRDLHlEQU5jO0FBT2RDO0FBUGMsS0FBaEI7QUFTRDs7QUFFREMsYUFBV0MsU0FBWCxFQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsUUFBSSxLQUFLVixRQUFMLENBQWNTLFNBQWQsQ0FBSixFQUE4QjtBQUM1QixhQUFPLElBQUksS0FBS1QsUUFBTCxDQUFjUyxTQUFkLENBQUosQ0FBNkJDLElBQTdCLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFNLHNDQUFzQ0QsU0FBdEMsR0FBa0QsR0FBeEQ7QUFDRDtBQUNGOztBQUVERSxXQUFTRixTQUFULEVBQW9CO0FBQ2xCLFFBQUlBLGFBQWEsT0FBT0EsU0FBUCxJQUFvQixRQUFyQyxFQUErQztBQUM3QyxXQUFLVCxRQUFMLENBQWNTLFVBQVVHLElBQXhCLElBQWdDSCxTQUFoQztBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0scUJBQU47QUFDRDtBQUNGO0FBM0JrQztrQkFBaEJYLGUiLCJmaWxlIjoiYWRhcHRlcl9yZWdpc3RyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTM0ZpbGVJbnB1dCBmcm9tICcuL3MzZmlsZV9pbnB1dCc7XG5pbXBvcnQgUzNGaWxlT3V0cHV0IGZyb20gJy4vczNmaWxlX291dHB1dCc7XG5pbXBvcnQgS2luZXNpc0lucHV0IGZyb20gJy4va2luZXNpc19pbnB1dCc7XG5pbXBvcnQgS2luZXNpc091dHB1dCBmcm9tICcuL2tpbmVzaXNfb3V0cHV0JztcbmltcG9ydCBDb25zb2xlT3V0cHV0IGZyb20gJy4vY29uc29sZV9vdXRwdXQnO1xuaW1wb3J0IFVuemlwVHJhbnNmb3JtYXRpb24gZnJvbSAnLi91bnppcF90cmFuc2Zvcm1hdGlvbic7XG5pbXBvcnQgQ2xvdWRmcm9udExvZ1RyYW5zZm9ybWF0aW9uIGZyb20gJy4vY2xvdWRmcm9udF9sb2dfdHJhbnNmb3JtYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGFwdGVyUmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFkYXB0ZXJzID0ge1xuICAgICAgUzNGaWxlSW5wdXQsXG4gICAgICBTM0ZpbGVPdXRwdXQsXG4gICAgICBLaW5lc2lzSW5wdXQsXG4gICAgICBLaW5lc2lzT3V0cHV0LFxuICAgICAgQ29uc29sZU91dHB1dCxcbiAgICAgIFVuemlwVHJhbnNmb3JtYXRpb24sXG4gICAgICBDbG91ZGZyb250TG9nVHJhbnNmb3JtYXRpb24sXG4gICAgfVxuICB9XG5cbiAgYWRhcHRlckZvcihjbGFzc05hbWUsIG9wdHMpIHtcbiAgICBpZiAodGhpcy5hZGFwdGVyc1tjbGFzc05hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IHRoaXMuYWRhcHRlcnNbY2xhc3NOYW1lXShvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgXCJObyBhZGFwdGVyIHJlZ2lzdGVyZWQgd2l0aCBuYW1lICdcIiArIGNsYXNzTmFtZSArICdcIidcbiAgICB9XG4gIH1cblxuICByZWdpc3RlcihjbGFzc05hbWUpIHtcbiAgICBpZiAoY2xhc3NOYW1lIHx8IHR5cGVvZiBjbGFzc05hbWUgIT0gXCJPYmplY3RcIikge1xuICAgICAgdGhpcy5hZGFwdGVyc1tjbGFzc05hbWUubmFtZV0gPSBjbGFzc05hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFwiRW1wdHkgYWRhcHRlciBjbGFzc1wiXG4gICAgfVxuICB9XG59Il19