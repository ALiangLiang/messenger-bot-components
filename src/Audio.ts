/**
 * @module Audio
 */
import { Abstract } from './Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/send-api/#attachment}
 */
export class Audio extends Abstract {
  constructor (url: String) {
    const constructure = {
      attachment: {
        type: 'audio',
        payload: {
          url
        }
      }
    }

    super(constructure)
  }
}
