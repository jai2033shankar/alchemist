'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _s3_event = require('./s3_event');

var _s3_event2 = _interopRequireDefault(_s3_event);

var _kinesis_event = require('./kinesis_event');

var _kinesis_event2 = _interopRequireDefault(_kinesis_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EventRegistry {
  constructor() {
    this.events = {
      S3Event: _s3_event2.default,
      KinesisEvent: _kinesis_event2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ldmVudC9ldmVudF9yZWdpc3RyeS5qcyJdLCJuYW1lcyI6WyJFdmVudFJlZ2lzdHJ5IiwiY29uc3RydWN0b3IiLCJldmVudHMiLCJTM0V2ZW50IiwiS2luZXNpc0V2ZW50IiwiZXZlbnRGb3IiLCJjbGFzc05hbWUiLCJvcHRzIiwicmVnaXN0ZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFZSxNQUFNQSxhQUFOLENBQW9CO0FBQ2pDQyxnQkFBYztBQUNaLFNBQUtDLE1BQUwsR0FBYztBQUNaQyxpQ0FEWTtBQUVaQztBQUZZLEtBQWQ7QUFJRDs7QUFFREMsV0FBU0MsU0FBVCxFQUFvQkMsSUFBcEIsRUFBMEI7QUFDeEIsUUFBSSxLQUFLTCxNQUFMLENBQVlJLFNBQVosQ0FBSixFQUE0QjtBQUMxQixhQUFPLElBQUksS0FBS0osTUFBTCxDQUFZSSxTQUFaLENBQUosQ0FBMkJDLElBQTNCLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFNLG9DQUFvQ0QsU0FBcEMsR0FBZ0QsR0FBdEQ7QUFDRDtBQUNGOztBQUVERSxXQUFTRixTQUFULEVBQW9CO0FBQ2xCLFFBQUlBLGFBQWEsT0FBT0EsU0FBUCxJQUFvQixRQUFyQyxFQUErQztBQUM3QyxXQUFLSixNQUFMLENBQVlJLFVBQVVHLElBQXRCLElBQThCSCxTQUE5QjtBQUNELEtBRkQsTUFHSztBQUNILFlBQU0saUNBQU47QUFDRDtBQUNGO0FBdkJnQztrQkFBZE4sYSIsImZpbGUiOiJldmVudF9yZWdpc3RyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTM0V2ZW50IGZyb20gJy4vczNfZXZlbnQnO1xuaW1wb3J0IEtpbmVzaXNFdmVudCBmcm9tICcuL2tpbmVzaXNfZXZlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7XG4gICAgICBTM0V2ZW50LFxuICAgICAgS2luZXNpc0V2ZW50XG4gICAgfVxuICB9XG5cbiAgZXZlbnRGb3IoY2xhc3NOYW1lLCBvcHRzKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2NsYXNzTmFtZV0pIHtcbiAgICAgIHJldHVybiBuZXcgdGhpcy5ldmVudHNbY2xhc3NOYW1lXShvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgXCJObyBldmVudCByZWdpc3RlcmVkIHdpdGggbmFtZSAnXCIgKyBjbGFzc05hbWUgKyAnXCInXG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXIoY2xhc3NOYW1lKSB7XG4gICAgaWYgKGNsYXNzTmFtZSB8fCB0eXBlb2YgY2xhc3NOYW1lICE9IFwiT2JqZWN0XCIpIHtcbiAgICAgIHRoaXMuZXZlbnRzW2NsYXNzTmFtZS5uYW1lXSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBcIkVtcHR5IG9yIG51bGwgZXZlbnQgY2xhc3MgZ2l2ZW5cIlxuICAgIH1cbiAgfVxufSJdfQ==