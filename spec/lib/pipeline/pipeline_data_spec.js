import {PipelineData} from '../../../src'
import chai from 'chai'

var expect = chai.expect

describe('PipelineData', function(){
  describe('constructor', function(){
    it('should add data store', function(){
      let pipelineData = new PipelineData()
      expect(pipelineData).to.have.all.keys('data', 'invalidData')
    })
  })
})

