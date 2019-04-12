import Abstract from './Abstract'

export default class GetStarted extends Abstract {
  constructor (payload: String) {
    const
      constructure = {
        get_started: { payload }
      }

    super(constructure)
  }
}
