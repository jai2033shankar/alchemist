import dynamicAdapter from '../adapters'

export default class Output {
  constructor(type, opts) {
    this.resource = dynamicAdapter(type, opts)
  }

  async call(data) {
    return await this.resource.write(data)
  }
}

