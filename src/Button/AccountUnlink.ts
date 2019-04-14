import { Abstract } from '../Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/buttons/logout}
 */
export class ButtonAccountUnlink extends Abstract {
  constructor () {
    const constructure = { type: 'account_unlink' }

    super(constructure)
  }
}
