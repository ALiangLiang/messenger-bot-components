/**
 * @module ButtonElementShare
 */
import { Abstract } from '../Abstract'

import { TemplateGeneric } from '../Template/Generic'

export interface ButtonElementShareOption {
  shareContents?: TemplateGeneric
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/buttons/share}
 */
export class ButtonElementShare extends Abstract {
  constructor (option: ButtonElementShareOption = {}) {
    const constructure = {
      type: 'element_share',
      share_contents: option.shareContents
    }

    super(constructure)
  }
}
