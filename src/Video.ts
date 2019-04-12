import Abstract from './Abstract'

export default class Video extends Abstract {
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
