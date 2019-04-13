import { Abstract } from '../Abstract'

import { TemplateGeneric } from '../Template/Generic'

interface ButtonElementShareOption {
  shareContents?: TemplateGeneric
}

export class ButtonElementShare extends Abstract {
  constructor (option: ButtonElementShareOption = {}) {
    const constructure = {
      type: 'element_share',
      share_contents: option.shareContents
    }

    super(constructure)
  }
}
