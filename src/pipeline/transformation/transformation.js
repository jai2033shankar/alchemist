export default class Transformation {
  constructor(adapterRegistry, type, opts) {
    this.adapter = adapterRegistry.adapterFor(type, opts);
  }

  async call(data) {
    return await this.adapter.transform(data)
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Transformation(adapterRegistry, adapter, opts);
  }
}
