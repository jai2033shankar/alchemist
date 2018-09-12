import promisify from 'util.promisify'
import avro from 'avro-js'
import AWS from 'aws-sdk'

var S3 = new AWS.S3()

export default class S3AvroInput {
  constructor(opts) {
    this.params = {
      Bucket: opts.bucket,
      Key: opts.key,
    }
  }

  async read(pipelineData) {
    await this.loadFile()

    this.avroFile.pipe(new avro.streams.BlockDecoder())
      .on('data', async (record) => pipelineData.putData(record))

    return pipelineData
  }

  async loadFile() {
    this.avroFile = await s3.getObject(this.params).createReadStream()
  }
}

