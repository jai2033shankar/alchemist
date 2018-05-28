import S3FileInput from './s3file_input';
import S3FileOutput from './s3file_output';
import KinesisInput from './kinesis_input';
import KinesisOutput from './kinesis_output';
import ConsoleOutput from './console_output';
import UnzipTransformation from './unzip_transformation';
import CloudfrontLogTransformation from './cloudfront_log_transformation';

export default class AdapterRegistry {
  constructor() {
    this.adapters = {
      S3FileInput,
      S3FileOutput,
      KinesisInput,
      KinesisOutput,
      ConsoleOutput,
      UnzipTransformation,
      CloudfrontLogTransformation,
    }
  }

  adapterFor(className, opts) {
    if (this.adapters[className]) {
      return new this.adapters[className](opts);
    } else {
      throw "No adapter registered with name '" + className + '"'
    }
  }

  register(className) {
    if (className || typeof className != "Object") {
      this.adapters[className.name] = className;
    } else {
      throw "Empty adapter class"
    }
  }
}