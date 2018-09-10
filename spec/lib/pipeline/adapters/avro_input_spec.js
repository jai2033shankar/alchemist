import chai from 'chai'
const expect = chai.expect

import path from 'path'
import promisify from 'util.promisify'

import AvroInput from '../../../../src/pipeline/adapters/avro_input'

describe('AvroInput', () => {
  let avroFilePath = path.resolve(__dirname, '../../../spec/fixtures/avro.avro')

  describe('#constructor', () => {
    it('sets the avroFilePath field', () => {
      let avroInput = new AvroInput({ avroFilePath })
      expect(avroInput.avroFilePath).to.eq(avroFilePath)
    })
  })

  describe('#read', () => {
    it('retrieves the records in the avro data, into the pipelineData', () => {
      // TODO
    })
  })

  describe('#loadFile', () => {
    describe('with a filepath for an existing avro file', () => {
      let avroInput = new AvroInput({ avroFilePath })

      it('sets the object "file" field to the streamable avro file', async () => {
        await avroInput.loadFile()
        expect(avroInput.avroFile).to.respondsTo('pipe')
      })
    })

    describe('with a filepath for a nonexistent filepath', () => {
      let avroInput = new AvroInput({ avroFilePath })

      it('throws an error', async () => {
        await expect(avroInput.loadFile()).to.throw
      })
    })
  })
})
