import AWS from 'aws-sdk'
import { chunks } from 'chunk-array'

const kinesis = new AWS.Kinesis()
const BATCHSIZE = 500

export default class KinesisOutput {
  constructor(opts) {
    this.stream_name = opts.stream_name
    this.partition_property = opts.partition_property
  }

  async write(pipelineData) {
    let data = await pipelineData.getData()
    let chunkedData = chunks(data, BATCHSIZE)

    chunkedData.forEach(async (record_chunk) => {
      let params = {
        StreamName: this.stream_name,
        Records: record_chunk.map((data) => { 
          let partition_key = this.partition_property ? data[this.partition_property] : Math.random().toString(36).substring(7);

          return { 
            Data: JSON.stringify(data),
            PartitionKey: partition_key
          }
        })
      }
      await kinesis.putRecords(params).promise()
    })
  }
}
