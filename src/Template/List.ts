import Abstract from '../Abstract'

import ButtonUrl from '../Button/Url'
import ButtonPostback from '../Button/Postback'
import ButtonPhoneNumber from '../Button/PhoneNumber'
import ButtonElementShare from '../Button/ElementShare'
import ButtonAccountLink from '../Button/AccountLink'
import ButtonAccountUnlink from '../Button/AccountUnlink'

interface TemplateElementListOption {
  imageUrl?: String
  subtitle?: String
  defaultAction?: String
  buttons?: ButtonUrl[] | ButtonPostback[] | ButtonPhoneNumber[] | ButtonElementShare[] | ButtonAccountLink[] | ButtonAccountUnlink[]
}

export class TemplateElementList extends Abstract {
  constructor (title: String, option: TemplateElementListOption) {
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

const enum TopElementStyle {
  compact = 'compact',
  large = 'large',
}

interface TemplateListOption {
  topElementStyle?: TopElementStyle
  buttons?: ButtonUrl[] | ButtonPostback[] | ButtonPhoneNumber[] | ButtonElementShare[] | ButtonAccountLink[] | ButtonAccountUnlink[]
}

export default class TemplateList extends Abstract {
  constructor (elements: TemplateElementList[], option: TemplateListOption = {}) {
    const
      constructure = {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'list',
            top_element_style: option.topElementStyle,
            buttons: option.buttons,
            elements: elements
          }
        }
      }

    super(constructure)
  }

  static get Element () {
    return TemplateElementList
  }

  get Element () {
    return TemplateElementList
  }
}
