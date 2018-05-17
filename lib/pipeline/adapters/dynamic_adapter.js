import S3FileInput from './s3file_input';
import S3FileOutput from './s3file_output';
import KinesisOutput from './kinesis_output';
import UnzipTransformation from './unzip_transformation';

const classes = {
  S3FileInput,
  S3FileOutput,
  KinesisOutput,
  UnzipTransformation
}

export default function dynamicAdapter(className, opts) {
  return new classes[className](opts);
}


