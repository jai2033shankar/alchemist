import promisify from 'util.promisify'
import AWS from 'aws-sdk'

var S3 = new AWS.S3()

export default class S3FileInput {
  constructor(opts) {
    this.params = {
      Bucket: opts.bucket,
      Key: opts.key,
    }
  }

  async read(pipelineData) {
    await this.loadFile()
    pipelineData.putData(this.file.Body)
    return pipelineData
  }

  async loadFile() {
    this.file = await S3.getObject(this.params).promise()
  }
}

