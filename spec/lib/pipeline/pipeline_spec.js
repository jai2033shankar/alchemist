import {Pipeline} from '../../../lib'
import chai from 'chai'

var expect = chai.expect

class Input {
  call() {
    return [1, 2, 3]
  }
}

class Output {
  call() {
    return [4, 5, 6]
  }
}

class Validation {
  call() {
    return [7, 8, 9]
  }
}

class Transformation {
  call() {
    return [10, 11, 12]
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
    expect(await pipeline.call()).to.have.same.members([4, 5, 6])
  })

  it('should run validations', async function() {
    let input = new Input()
    let validation = new Validation()
    let pipeline = new Pipeline({input: input, validations: [validation]})
    expect(await pipeline.call()).to.have.same.members([7, 8, 9])
  })

  it('should run transformations', async function() {
    let input = new Input()
    let transformation = new Transformation()
    let pipeline = new Pipeline({input: input, transformations: [transformation]})
    expect(await pipeline.call()).to.have.same.members([10, 11, 12])
  })
})

