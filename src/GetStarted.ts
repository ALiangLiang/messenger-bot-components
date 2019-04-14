import { Abstract } from './Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/get-started-button}
 */
export class GetStarted extends Abstract {
  constructor (payload: String) {
    const constructure = {
      get_started: { payload }
    }

    super(constructure)
  }
}
