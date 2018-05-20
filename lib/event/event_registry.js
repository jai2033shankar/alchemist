import S3Event from './s3_event';
import KinesisEvent from './kinesis_event';

export default class EventRegistry {
  constructor() {
    this.events = {
      S3Event,
      KinesisEvent,
    }
  }

  eventFor(className, opts) {
    return new this.events[className](opts);
  }

  register(className) {
    this.events[className.name] = className;
  }
}