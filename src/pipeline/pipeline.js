import _ from 'underscore'
import PipelineData from './pipeline_data'

export default class Pipeline {
  constructor(params) {
    this.input = params.input

    if (params.transformations === undefined) {
      this.transformations = []
    } else {
      this.transformations = params.transformations
    }

    this.output = params.output
    this.invalidOutput = params.invalidOutput
    this.data = new PipelineData()
  }

  async call() {
    if (this.input !== undefined) {
      await this.callStep(this.input)
    }

    for (let i = 0; i < this.transformations.length; i++) {
      await this.callStep(this.transformations[i])
    }

    if (this.output !== undefined) {
      await this.callOutputStep(this.output)
    }

    if (this.invalidOutput !== undefined) {
      await this.callInvalidOutput(this.invalidOutput)
    }

    return this.data
  }

  async callStep(step) {
    this.data = await step.call(this.data)
  }

  async callOutputStep(step) {
    await step.call(this.data)
  }

  async callInvalidOutput(step) {
    if (this.data.hasInvalidData()) {
      let invalidData = new PipelineData();
      invalidData.putData(this.data.getInvalidData());

      await step.call(invalidData)
    }
  }
}
