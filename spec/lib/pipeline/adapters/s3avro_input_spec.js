import chai from 'chai'
import sinon from 'sinon'

const expect = chai.expect
let stub = sinon.stub

import promisify from 'util.promisify'
import path from 'path'
import fs from 'fs'
import PipelineData from '../../../../src/pipeline/pipeline_data'

import S3AvroInput from '../../../../src/pipeline/adapters/s3avro_input'
import {S3} from '../../../../src/pipeline/adapters/s3avro_input'

describe('AvroInput', async () => {

  before(async () => {
    let avroFilePath = path.resolve(__dirname, '../../../spec/fixtures/avro.avro')

    stub(S3, 'getObject').returns({
      promise: () => { return Promise.resolve({
        AcceptRanges: 'bytes',
        LastModified: new Date('2018-04-25T13:32:58.000Z'),
        ContentLength: 23,
        ETag: '"ae771fbbba6a74eeeb77754355831713"',
        ContentType: 'text/plain',
        Metadata: {},
        Body: Buffer.from('Test file\n'),
        createReadStream: () => { return require("fs").createReadStream(avroFilePath) }
      })}
    })
  })


  describe('#read', async () => {
    it('retrieves the records in the avro data, into the pipelineData', async () => {
      let pipelineData = new PipelineData()
      let s3avro_input = new S3AvroInput({})
      let result = await s3avro_input.read(pipelineData)
      expect(result.data[0].id).equal('5a6514de-ce66-47d7-a9b5-9fe690c2e392')
    })
  })
})
