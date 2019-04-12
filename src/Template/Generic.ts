import Abstract from '../Abstract'

import ButtonUrl from '../Button/Url'
import ButtonPostback from '../Button/Postback'
import ButtonPhoneNumber from '../Button/PhoneNumber'
import ButtonElementShare from '../Button/ElementShare'
import ButtonAccountLink from '../Button/AccountLink'
import ButtonAccountUnlink from '../Button/AccountUnlink'

interface TemplateElementGenericOption {
  imageUrl?: String
  subtitle?: String
  defaultAction?: String
  buttons?: ButtonUrl[] | ButtonPostback[] | ButtonPhoneNumber[] | ButtonElementShare[] | ButtonAccountLink[] | ButtonAccountUnlink[]
}

export class TemplateElementGeneric extends Abstract {
  constructor (title: String, option: TemplateElementGenericOption) {
    const constructure = {
      title: title,
      image_url: option.imageUrl,
      subtitle: option.subtitle,
      default_action: option.defaultAction,
      buttons: option.buttons
    }

    super(constructure)
  }
}

export default class TemplateGeneric extends Abstract {
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
