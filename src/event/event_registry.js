import S3Event from './s3_event';
import KinesisEvent from './kinesis_event';
import SQSEvent from './sqs_event';

export default class EventRegistry {
  constructor() {
    this.events = {
      S3Event,
      KinesisEvent,
      SQSEvent
    }
  }

  eventFor(className, opts) {
    if (this.events[className]) {
      return new this.events[className](opts);
    } else {
      throw "No event registered with name '" + className + '"'
    }
  }

  register(className) {
    if (className || typeof className != "Object") {
      this.events[className.name] = className;
    }
    else {
      throw "Empty or null event class given"
    }
  }
}
