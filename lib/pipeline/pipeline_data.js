export default class PipelineData {
  constructor() {
    this.data = {}
  }

  getData() {
    return this.data
  }

  putData(data) {
    return this.data = data
  }
}

