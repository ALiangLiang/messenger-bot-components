import { Abstract } from './Abstract'

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
