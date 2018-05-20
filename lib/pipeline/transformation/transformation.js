export default class Transformation {
  constructor(adapterRegistry, type, opts) {
    this.resource = adapterRegistry.adapterFor(type, opts);
  }

  async call(data) {
    return await this.resource.transform(data)
  }

  static instanceFor(adapterRegistry, adapter, opts) {
    return new Transformation(adapterRegistry, adapter, opts);
  }
}
