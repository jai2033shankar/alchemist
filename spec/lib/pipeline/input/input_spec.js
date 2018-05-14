import {Input} from '../../../../lib'
import {S3FileInput} from '../../../../lib'
import chai from 'chai'

var expect = chai.expect

describe('Input', function() {
  describe('constructor', function() {
    it('sets right adapter', function() {
      let input = new Input('S3FileInput', {})
      expect(input.source).to.be.an.instanceof(S3FileInput)
    })
  })
})

