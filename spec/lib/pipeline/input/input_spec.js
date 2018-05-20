import {Input} from '../../../../lib'
import {AdapterRegistry, S3FileInput} from '../../../../lib'
import chai from 'chai'

let expect = chai.expect

let adapterRegistry = new AdapterRegistry()

describe('Input', function() {
  describe('constructor', function() {
    it('sets right adapter', function() {
      let input = new Input(adapterRegistry, 'S3FileInput', {})

      expect(input.source.constructor.name).to.eq("S3FileInput")
    })
  })
})

