/**
 * @module ButtonNested
 */
import { Abstract } from '../Abstract'

import { ButtonUrl } from './Url'
import { ButtonPostback } from './Postback'
import { ButtonAccountLink } from './AccountLink'
import { ButtonAccountUnlink } from './AccountUnlink'

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api/persistent-menu#menu_item}
 */
export class ButtonNested extends Abstract {
  constructor (title: String, callToActions: ButtonUrl[] | ButtonPostback[] | ButtonAccountLink[] | ButtonAccountUnlink[] | ButtonNested[]) {
    const constructure = {
      type: 'nested',
      title: title,
      call_to_actions: callToActions
    }

    super(constructure)
  }
}
