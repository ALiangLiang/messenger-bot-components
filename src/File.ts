import Abstract from './Abstract'

export default class File extends Abstract {
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
