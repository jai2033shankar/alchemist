import promisify from 'util.promisify'
import avro from 'avro-js'
import fs from 'fs'

var S3 = new AWS.S3()

export default class AvroInput {
  constructor(opts) {
    this.avroFilePath = path.resolve(__dirname, opts.avroFilePath)
  }

  async read(pipelineData) {
    await this.loadFile()

    let avroData = {}

    this.file.pipe(new avro.streams.BlockDecoder())
      .on('metadata', async (type) => avroData.type = type)
      .on('data', async (record) => avroData.record = record)

    pipelineData.putData(avroData)
    return pipelineData
  }

  async loadFile() {
    this.file = await fs.createReadStream(this.avroFilePath)
  }
}

