/**
 * @module ButtonPostback
 */
import { Abstract } from '../Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/buttons/postback}
 */
export class ButtonPostback extends Abstract {
  constructor (title: string, payload: string) {
    const constructure = {
      type: 'postback',
      title: title,
      payload: payload
    }

    super(constructure)
  }
}
