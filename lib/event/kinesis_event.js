export default class S3Event {
  constructor(event) {
    this.event = event
  }

  key() {
    return decodeURIComponent(this.event.Records[0].s3.object.key.replace(/\+/g, ' '))
  }

  bucket() {
    return this.event.Records[0].s3.bucket.name
  }
}
