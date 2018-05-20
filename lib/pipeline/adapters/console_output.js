export default class ConsoleOutput {
  constructor(opts) { }

  async write(pipelineData) {
    console.log(pipelineData.getData());
  }
}

