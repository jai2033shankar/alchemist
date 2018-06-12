import PinpointService from '../services/pinpoint_service'

export async function handle(event, context, callback) {
	let pinpointService = new PinpointService({event: event, context: context})

  await pinpointService.call()

  callback(null);
}

