import {Pipeline} from '../../../src'
import chai from 'chai'

var expect = chai.expect

class Input {
  call() {
    return [1, 2, 3]
  }
}

class Output {
  call() {
    return {data: [4, 5, 6]}
  }
}

class Transformation {
  call() {
    return {data: [10, 11, 12]}
  }
}

describe('Pipeline', function() {
  it('should run input', async function() {
    let input = new Input()
    let pipeline = new Pipeline({input: input})
    expect(await pipeline.call()).to.have.same.members([1, 2, 3])
  })

  it('should run output', async function() {
    let output = new Output()
    let pipeline = new Pipeline({output: output})

    expect(await pipeline.call()).to.deep.eq({data: {}, invalidData: {} })
  })

  it('should run transformations', async function() {
    let input = new Input()
    let transformation = new Transformation()
    let pipeline = new Pipeline({input: input, transformations: [transformation]})
    expect(await pipeline.call()).to.deep.eq({data: [10, 11, 12]})
  })
})

