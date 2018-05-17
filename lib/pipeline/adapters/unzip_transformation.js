import Zlib from 'zlib'

export default class UnzipTransformation {
  constructor(opts) {
  }

  async transform(pipelineData) {
    let data = pipelineData.getData()
    let uncompressedData = Zlib.gunzipSync(data)

    await pipelineData.putData(uncompressedData.toString())
    return pipelineData
  }
}
