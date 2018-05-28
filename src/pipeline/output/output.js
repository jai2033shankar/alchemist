export default class Output {
  constructor(adapterRegistry, type, opts) {
    this.resource = adapterRegistry.adapterFor(type, opts)
  }

  async call(data) {
    return await this.resource.write(data)
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Output(adapterRegistry, adapter, opts);
  }
}

