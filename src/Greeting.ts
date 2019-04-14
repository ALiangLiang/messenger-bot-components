import { Abstract } from './Abstract'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/greeting#properties}
 */
export class GreetingItem extends Abstract {
  constructor (text: String, locale: String) {
    const constructure = { text, locale }

    super(constructure)
  }
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/greeting}
 */
export class Greeting extends Abstract {
  constructor (greetingItems: GreetingItem[]) {
    const constructure = {
      greeting: greetingItems
    }

    super(constructure)
  }

  static get Item () {
    return GreetingItem
  }

  get Item () {
    return GreetingItem
  }
}
