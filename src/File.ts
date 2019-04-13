import { Abstract } from './Abstract'

export class File extends Abstract {
  constructor (url: String) {
    const constructure = {
      attachment: {
        type: 'file',
        payload: {
          url
        }
      }
    }

    super(constructure)
  }
}
