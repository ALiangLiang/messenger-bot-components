import { Abstract } from './Abstract'

export class Text extends Abstract {
  constructor (text: String) {
    const constructure = { text }

    super(constructure)
  }
}
