import { Abstract } from './Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/send-api/#message}
 */
export class Text extends Abstract {
  constructor (text: String) {
    const constructure = { text }

    super(constructure)
  }
}
