export default class PipelineData {
  constructor() {
    this.data = {}
    this.invalidData = {}
  }

  getData() {
    return this.data
  }

  putData(data) {
    return this.data = data
  }

  getInvalidData() {
    return this.invalidData
  }

  putInvalidData() {
    return this.invalidData = invalidData
  }
}

