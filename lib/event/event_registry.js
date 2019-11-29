'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _s3_event = require('./s3_event');

var _s3_event2 = _interopRequireDefault(_s3_event);

var _kinesis_event = require('./kinesis_event');

var _kinesis_event2 = _interopRequireDefault(_kinesis_event);

var _sqs_event = require('./sqs_event');

var _sqs_event2 = _interopRequireDefault(_sqs_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EventRegistry {
  constructor() {
    this.events = {
      S3Event: _s3_event2.default,
      KinesisEvent: _kinesis_event2.default,
      SQSEvent: _sqs_event2.default
    };
  }

  eventFor(className, opts) {
    if (this.events[className]) {
      return new this.events[className](opts);
    } else {
      throw "No event registered with name '" + className + '"';
    }
  }

  register(className) {
    if (className || typeof className != "Object") {
      this.events[className.name] = className;
    } else {
      throw "Empty or null event class given";
    }
  }
}
exports.default = EventRegistry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmVudC9ldmVudF9yZWdpc3RyeS5qcyJdLCJuYW1lcyI6WyJFdmVudFJlZ2lzdHJ5IiwiY29uc3RydWN0b3IiLCJldmVudHMiLCJTM0V2ZW50IiwiS2luZXNpc0V2ZW50IiwiU1FTRXZlbnQiLCJldmVudEZvciIsImNsYXNzTmFtZSIsIm9wdHMiLCJyZWdpc3RlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRWUsTUFBTUEsYUFBTixDQUFvQjtBQUNqQ0MsZ0JBQWM7QUFDWixTQUFLQyxNQUFMLEdBQWM7QUFDWkMsaUNBRFk7QUFFWkMsMkNBRlk7QUFHWkM7QUFIWSxLQUFkO0FBS0Q7O0FBRURDLFdBQVNDLFNBQVQsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFFBQUksS0FBS04sTUFBTCxDQUFZSyxTQUFaLENBQUosRUFBNEI7QUFDMUIsYUFBTyxJQUFJLEtBQUtMLE1BQUwsQ0FBWUssU0FBWixDQUFKLENBQTJCQyxJQUEzQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxvQ0FBb0NELFNBQXBDLEdBQWdELEdBQXREO0FBQ0Q7QUFDRjs7QUFFREUsV0FBU0YsU0FBVCxFQUFvQjtBQUNsQixRQUFJQSxhQUFhLE9BQU9BLFNBQVAsSUFBb0IsUUFBckMsRUFBK0M7QUFDN0MsV0FBS0wsTUFBTCxDQUFZSyxVQUFVRyxJQUF0QixJQUE4QkgsU0FBOUI7QUFDRCxLQUZELE1BR0s7QUFDSCxZQUFNLGlDQUFOO0FBQ0Q7QUFDRjtBQXhCZ0M7a0JBQWRQLGEiLCJmaWxlIjoiZXZlbnRfcmVnaXN0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUzNFdmVudCBmcm9tICcuL3MzX2V2ZW50JztcbmltcG9ydCBLaW5lc2lzRXZlbnQgZnJvbSAnLi9raW5lc2lzX2V2ZW50JztcbmltcG9ydCBTUVNFdmVudCBmcm9tICcuL3Nxc19ldmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHtcbiAgICAgIFMzRXZlbnQsXG4gICAgICBLaW5lc2lzRXZlbnQsXG4gICAgICBTUVNFdmVudFxuICAgIH1cbiAgfVxuXG4gIGV2ZW50Rm9yKGNsYXNzTmFtZSwgb3B0cykge1xuICAgIGlmICh0aGlzLmV2ZW50c1tjbGFzc05hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IHRoaXMuZXZlbnRzW2NsYXNzTmFtZV0ob3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFwiTm8gZXZlbnQgcmVnaXN0ZXJlZCB3aXRoIG5hbWUgJ1wiICsgY2xhc3NOYW1lICsgJ1wiJ1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyKGNsYXNzTmFtZSkge1xuICAgIGlmIChjbGFzc05hbWUgfHwgdHlwZW9mIGNsYXNzTmFtZSAhPSBcIk9iamVjdFwiKSB7XG4gICAgICB0aGlzLmV2ZW50c1tjbGFzc05hbWUubmFtZV0gPSBjbGFzc05hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgXCJFbXB0eSBvciBudWxsIGV2ZW50IGNsYXNzIGdpdmVuXCJcbiAgICB9XG4gIH1cbn1cbiJdfQ==