import _ from 'underscore'
import PipelineData from './pipeline_data'

export default class Pipeline {
  constructor(params) {
    this.adapterRegistry = params.adapterRegistry
    this.input = params.input

    if (params.transformations === undefined) {
      this.transformations = []
    } else {
      this.transformations = params.transformations
    }

    this.output = params.output
    this.errorOutput = params.errorOutput
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
      await this.callStep(this.output)
    }

    if (this.errorOutput !== undefined) {
      await this.callStep(this.errorOutput)
    }

    return this.data
  }

  async callStep(step) {
    this.data = await step.call(this.data)
  }
}
