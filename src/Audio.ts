import { Abstract } from './Abstract'

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
