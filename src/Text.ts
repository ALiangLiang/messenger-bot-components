import Abstract from './Abstract'

export default class Text extends Abstract {
  constructor (text: String) {
    const constructure = { text }

    super(constructure)
  }
}
