import { Abstract } from '../Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/buttons/login}
 */
export class ButtonAccountLink extends Abstract {
  constructor (url: String) {
    const constructure = {
      type: 'account_link',
      url: url
    }

    super(constructure)
  }
}
