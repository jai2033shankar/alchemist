import promisify from 'util.promisify'
import avro from 'avro-js'
import AWS from 'aws-sdk'

export const S3 = new AWS.S3()

export default class S3AvroInput {
  constructor(opts) {
    this.params = {
      Bucket: opts.bucket,
      Key: opts.key,
    }
  }

  async read(pipelineData) {
    await this.loadFile()

    let decoder = new avro.streams.BlockDecoder()
    let recordsStream = this.avroFileStream.pipe(decoder)

    // NOTE: A hack that is fixed in nodejs 10 please check:
    // http://2ality.com/2018/04/async-iter-nodejs.html
    let records = await new Promise(function(resolve, reject) {
      let records = []
      recordsStream
        .on('data', function (record) {
          records.push(record)
        })
        .on('end', function() {
          resolve(records)
        })
    })

    pipelineData.putData(records)
    return pipelineData
  }

  async loadFile() {
    let avroFile = await S3.getObject(this.params)
    this.avroFileStream = await avroFile.createReadStream()
  }
}

