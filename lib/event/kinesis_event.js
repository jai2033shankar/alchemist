export default class KinesisEvent {
  constructor(event) {
    this.event = event
  }

  events() {
    return this.event.Records.map((event) => { return event.kinesis; })
  }
}
