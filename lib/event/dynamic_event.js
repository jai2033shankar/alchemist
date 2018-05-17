import S3Event from './s3event';

const classes = {
  S3Event
}

export default function dynamicEvent(className, opts) {
  return new classes[className](opts);
}


