export default class Input {
  constructor(adapterRegistry, type, opts) {
    this.source = adapterRegistry.adapterFor(type, opts);
  }

  async call(data) {
    return await this.source.read(data)
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Input(adapterRegistry, adapter, opts);
  }
}

