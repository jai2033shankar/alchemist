import S3FileInput from './s3file_input';
import S3FileOutput from './s3file_output';

const classes = {
  S3FileInput,
  S3FileOutput,
}

export default function dynamicAdapter(className, opts) {
  return new classes[className](opts);
}


