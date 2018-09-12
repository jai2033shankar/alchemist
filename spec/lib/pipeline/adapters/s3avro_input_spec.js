import chai from 'chai'
const expect = chai.expect

import promisify from 'util.promisify'
import path from 'path'
import AWS from 'aws-sdk-mock'
import pipelineData from '../../../../src/pipeline/pipeline_data'

import S3AvroInput from '../../../../src/pipeline/adapters/s3avro_input'

describe('AvroInput', () => {
  let avroFilePath = path.resolve(__dirname, '../../../spec/fixtures/avro.avro')

  AWS.mock('S3', 'getObject', Buffer.from(require('fs').readFileSync(avroFilePath)))

  describe('#read', () => {
    it('retrieves the records in the avro data, into the pipelineData', () => {
      let s3avro_input = new S3AvroInput({})
      let result = s3avro_input.read()
    })
  })

  AWS.restore('S3')
})
