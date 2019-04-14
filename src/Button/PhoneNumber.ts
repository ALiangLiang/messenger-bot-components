/**
 * @module ButtonPhoneNumber
 */
import { Abstract } from '../Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/buttons/call}
 */
export class ButtonPhoneNumber extends Abstract {
  constructor (title: String, phoneNumber: String) {
    const constructure = {
      type: 'phone_number',
      title: title,
      payload: phoneNumber
    }

    super(constructure)
  }
}
