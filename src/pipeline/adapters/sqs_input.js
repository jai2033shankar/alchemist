export default class SQSInput {
  constructor(opts) {
    this.events = opts.events;
  }

  async read(pipelineData) {
    let extracted = this.events.map((event) => {
      return event.body;
    });

    pipelineData.putData(extracted);
    return pipelineData
  }

}

