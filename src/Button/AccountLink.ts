import { Abstract } from '../Abstract'

export class ButtonAccountLink extends Abstract {
  constructor (url: String) {
    const constructure = {
      type: 'account_link',
      url: url
    }

    super(constructure)
  }
}
