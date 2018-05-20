import S3FileInput from './s3file_input';
import S3FileOutput from './s3file_output';
import KinesisOutput from './kinesis_output';
import UnzipTransformation from './unzip_transformation';
import CloudfrontLogTransformation from './cloudfront_log_transformation';

export default class AdapterRegistry {
  constructor() {
    this.adapters = {
      S3FileInput,
      S3FileOutput,
      KinesisOutput,
      UnzipTransformation,
      CloudfrontLogTransformation
    }
  }

  adapterFor(className, opts) {
    return new this.adapters[className](opts);
  }

  register(className) {
    this.adapters[className.name] = className;
  }
}