export default class SQSEvent {
  constructor(event) {
    this.event = event
  }

  events() {
    return this.event.Records;
  }
}
