import { Abstract } from '../Abstract'

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