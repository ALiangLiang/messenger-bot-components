import Abstract from './Abstract'

export class GreetingItem extends Abstract {
  constructor (text: String, locale: String) {
    const constructure = { text, locale }

    super(constructure)
  }
}

export default class Greeting extends Abstract {
  constructor (greetingItems: GreetingItem[]) {
    const constructure = {
      greeting: greetingItems
    }

    super(constructure)
  }
}
