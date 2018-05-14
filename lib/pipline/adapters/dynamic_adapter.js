import S3FileInput from './s3file_input';

const classes = {
  S3FileInput,
}

export default function dynamicAdapter(className, opts) {
  return new classes[className](opts);
}


