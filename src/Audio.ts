import Abstract from './Abstract'

export default class Audio extends Abstract {
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
