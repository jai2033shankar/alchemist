import _ from 'underscore'
import PipelineData from './pipeline_data'

export default class Pipeline {
  constructor(params) {
    this.adapterRegistry = params.adapterRegistry
    this.input = params.input

    if (params.validations === undefined) {
      this.validations = []
    } else {
      this.validations = params.validations
    }

    if (params.transformations === undefined) {
      this.transformations = []
    } else {
      this.transformations = params.transformations
    }

    this.output = params.output
    this.data = new PipelineData()
  }

  async call() {
    if (this.input !== undefined) {
      await this.callStep(this.input)
    }

    for (let i = 0; i < this.transformations.length; i++) {
      await this.callStep(this.transformations[i])
    }

    for (let i = 0; i < this.validations.length; i++) {
      await this.callStep(this.validations[i])
    }

    if (this.output !== undefined) {
      await this.callStep(this.output)
    }

    return this.data
  }

  async callStep(step) {
    this.data = await step.call(this.data)
  }
}
