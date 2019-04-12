import Abstract from '../Abstract'

export default class ButtonPostback extends Abstract {
  constructor (title: string, payload: string) {
    const constructure = {
      type: 'postback',
      title: title,
      payload: payload
    }

    super(constructure)
  }
}
