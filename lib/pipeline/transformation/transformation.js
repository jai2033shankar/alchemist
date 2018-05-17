import dynamicAdapter from '../adapters/dynamic_adapter'

export default class Transformation {
  constructor(type, opts) {
    this.resource = dynamicAdapter(type, opts)
  }

  async call(data) {
    return await this.resource.transform(data)
  }
}
