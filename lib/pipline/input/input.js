import {dynamicAdapter} from '../adapters'

export default class Input {
  constructor(type, opts) {
    this.source = dynamicAdapter(type, opts)

  }

  async call(data) {
    return await this.source.read(data)
  }
}

