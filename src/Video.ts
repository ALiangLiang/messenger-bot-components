import { Abstract } from './Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/send-api/#attachment}
 */
export class Video extends Abstract {
  constructor (url: String) {
    const constructure = {
      attachment: {
        type: 'video',
        payload: { url }
      }
    }

    super(constructure)
  }
}
