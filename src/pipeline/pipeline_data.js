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

  hasInvalidData() {
    return this.invalidData.length > 0
  }

  getInvalidData() {
    return this.invalidData
  }

  putInvalidData(invalidData) {
    return this.invalidData = invalidData
  }
}

