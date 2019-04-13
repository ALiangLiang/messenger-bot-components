import { Abstract } from './Abstract'

export class GetStarted extends Abstract {
  constructor (payload: String) {
    const
      constructure = {
        get_started: { payload }
      }

    super(constructure)
  }
}
