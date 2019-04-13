import { Abstract } from '../Abstract'

import { ButtonUrl } from './Url'
import { ButtonPostback } from './Postback'
import { ButtonAccountLink } from './AccountLink'
import { ButtonAccountUnlink } from './AccountUnlink'

export class ButtonNested extends Abstract {
  constructor (title: String, callToActions: ButtonUrl[] | ButtonPostback[] | ButtonAccountLink[] | ButtonAccountUnlink[]) {
    const constructure = {
      type: 'nested',
      title: title,
      call_to_actions: callToActions
    }

    super(constructure)
  }
}
