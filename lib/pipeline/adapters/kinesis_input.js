export default class KinesisInput {
  constructor(opts) {
    this.events = opts.events;
  }

  async read(pipelineData) {
    let decoded = this.events.map((event) => {
      return Buffer.from(event.data, "base64").toString();
    });

    pipelineData.putData(decoded);
    return pipelineData
  }

}