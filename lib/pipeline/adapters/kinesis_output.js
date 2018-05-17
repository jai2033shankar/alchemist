import AWS from 'aws-sdk'
import { chunks } from 'chunk-array'

const kinesis = new AWS.Kinesis()
const BATCHSIZE = 500

export default class KinesisOutput {
  constructor(opts) {
    this.stream_name = opts.stream_name
  }

  async write(pipelineData) {
    let data = await pipelineData.getData()
    let chunkedData = chunks(data, BATCHSIZE)

    chunkedData.forEach(async (record_chunk) => {
      let params = {
        StreamName: this.stream_name,
        Records: record_chunk.map((data) => { 
          console.log(data);
          throw new Exception("ERROR")
          return { 
            Data: JSON.stringify(data),
            // TODO make the PartitionKey something meaningful and batch the entries together
            // by a field from the event data, like user_id or so
            PartitionKey: Math.random().toString(36).substring(7)
          }
        })
      }
      await kinesis.putRecords(params).promise()
    })
  }
}
