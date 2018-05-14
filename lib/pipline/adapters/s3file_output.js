import promisify from 'util.promisify'
import AWS from 'aws-sdk'

var S3 = new AWS.S3()

export default class S3FileOutput {
  constructor(opts) {
    this.params = {
      Bucket: opts.bucket,
      Key: opts.key,
    }
  }

  async write(pipelineData) {
    let body = await pipelineData.getData()
    await promisify(S3.putObject.bind(S3))(Object.assign(this.params, {Body: JSON.stringify(body)}))
  }
}

