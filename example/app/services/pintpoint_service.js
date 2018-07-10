import { Input, Pipeline, Transformation, Output, AdapterRegistry, EventRegistry } from "alchemist-etl";
import PinpointEventTransformation from "../adapters/pinpoint_event_transformation";
import AWS from 'aws-sdk'

export default class PinpointService {
  constructor(opts) {
    // Register the adapters used in the ETL Job
    this.adapterRegistry = new AdapterRegistry();
    this.adapterRegistry.register(PinpointEventTransformation);

    this.eventRegistry = new EventRegistry();

    this.event = this.eventRegistry.eventFor('KinesisEvent', opts.event);
    this.context = opts.context
  }

  async call() {
    let input = this.buildInput()
    let output = this.buildOutput()
    let transformations = this.buildTranformations()
    // Use console for invalid output ( notice ConsoleOutput is a preregistered Adapter )
    let invalidOutput = Output.instanceFor(this.adapterRegistry, 'ConsoleOutput', { })

    let pipeline = new Pipeline({
      input: input,
      transformations: transformations,
      output: output,
      invalidOutput: invalidOutput
    })

    await pipeline.call()
  }


  buildInput() {
    return Input.instanceFor(this.adapterRegistry, 'KinesisInput', { events: this.event.events() })
  }

  buildOutput() {
    let stream_name = "my-kinesis-stream"
    return Output.instanceFor(this.adapterRegistry, 'KinesisOutput', {stream_name: stream_name})
  }

  buildTranformations() {
    return [
      Transformation.instanceFor(this.adapterRegistry, 'PinpointEventTransformation')
    ]
  }
}

