import { Abstract } from '../Abstract'

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
