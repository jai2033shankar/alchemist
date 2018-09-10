import promisify from 'util.promisify'
import avro from 'avro-js'
import fs from 'fs'

export default class AvroInput {
  constructor(opts) {
    this.avroFilePath = opts.avroFilePath
  }

  async read(pipelineData) {
    await this.loadFile()

    this.avroFile.pipe(new avro.streams.BlockDecoder())
      .on('data', async (record) => pipelineData.putData(record))

    return pipelineData
  }

  async loadFile() {
    this.avroFile = await fs.createReadStream(this.avroFilePath)
  }
}

