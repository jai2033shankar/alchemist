export default class KinesisInput {
  constructor(opts) {
  }

  async read(pipelineData) {
    events = pipelineData.Records.map((record) => {
      JSON.parse(Buffer.from(record["kinesis"]["data"], 'base64'));
    });

    pipelineData.putData(events);
    return pipelineData
  }

}

