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
    let items = body
    let replacer = (key, value) => value === null ? '' : value
    let header = Object.keys(items[0])
    let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    csv.unshift(header.join(','))
    csv = csv.join('\r\n')
    await S3.putObject(Object.assign(this.params, {Body: csv})).promise()
  }
}

