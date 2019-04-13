import { Abstract } from '../Abstract'

import { ButtonUrl, ButtonUrlOption } from '../Button/Url'
import { ButtonPostback } from '../Button/Postback'
import { ButtonPhoneNumber } from '../Button/PhoneNumber'
import { ButtonElementShare } from '../Button/ElementShare'
import { ButtonAccountLink } from '../Button/AccountLink'
import { ButtonAccountUnlink } from '../Button/AccountUnlink'

interface DefaultActionOption extends ButtonUrlOption {}

/**
 * DefaultAction accepts the same properties as URL button, except title.
 */
export class DefaultAction extends ButtonUrl {
  constructor (url: String, option: DefaultActionOption) {
    super(null, url, option)
  }
}

interface TemplateElementGenericOption {
  imageUrl?: String
  subtitle?: String
  defaultAction?: DefaultAction
  buttons?: ButtonUrl[] | ButtonPostback[] | ButtonPhoneNumber[] | ButtonElementShare[] | ButtonAccountLink[] | ButtonAccountUnlink[]
}

export class TemplateElementGeneric extends Abstract {
  constructor (title: String, option: TemplateElementGenericOption = {}) {
    const constructure = {
      title: title,
      image_url: option.imageUrl,
      subtitle: option.subtitle,
      default_action: option.defaultAction,
      buttons: option.buttons
    }

    super(constructure)
  }

  static get DefaultAction () {
    return DefaultAction
  }

  get DefaultAction () {
    return DefaultAction
  }
}

export class TemplateGeneric extends Abstract {
  constructor (elements: TemplateElementGeneric[]) {
    const constructure = {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: elements
        }
      }
    }

    super(constructure)
  }

  static get Element () {
    return TemplateElementGeneric
  }

  get Element () {
    return TemplateElementGeneric
  }
}
