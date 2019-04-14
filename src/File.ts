/**
 * @module File
 */
import { Abstract } from './Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/send-api/#attachment}
 */
export class File extends Abstract {
  constructor (url: String) {
    const constructure = {
      attachment: {
        type: 'file',
        payload: { url }
      }
    }

    super(constructure)
  }
}
