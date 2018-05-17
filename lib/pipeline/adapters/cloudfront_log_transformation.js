import Zlib from 'zlib'

export default class CloudfrontLogTransformation {
  constructor(opts) {
  }

  async transform(pipelineData) {
    let data = pipelineData.getData()

    
    

    await pipelineData.putData(parsedData.toString())
    return pipelineData
  }
}
