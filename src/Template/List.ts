/**
 * @module TemplateList
 */
import { Abstract } from '../Abstract'

import { ButtonUrl } from '../Button/Url'
import { ButtonPostback } from '../Button/Postback'
import { ButtonPhoneNumber } from '../Button/PhoneNumber'
import { ButtonElementShare } from '../Button/ElementShare'
import { ButtonAccountLink } from '../Button/AccountLink'
import { ButtonAccountUnlink } from '../Button/AccountUnlink'

interface TemplateElementListOption {
  imageUrl?: String
  subtitle?: String
  defaultAction?: ButtonUrl
  buttons?: ButtonUrl[] | ButtonPostback[] | ButtonPhoneNumber[] | ButtonElementShare[] | ButtonAccountLink[] | ButtonAccountUnlink[]
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/list#elements}
 */
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
  COMPACT = 'compact',
  LARGE = 'large',
}

interface TemplateListOption {
  topElementStyle?: TopElementStyle | 'compact' | 'large'
  buttons?: ButtonUrl[] | ButtonPostback[] | ButtonPhoneNumber[] | ButtonElementShare[] | ButtonAccountLink[] | ButtonAccountUnlink[],
  sharable?: Boolean
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/list}
 */
export class TemplateList extends Abstract {
  constructor (elements: TemplateElementList[], option: TemplateListOption = {}) {
    const
      constructure = {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'list',
            top_element_style: option.topElementStyle,
            buttons: option.buttons,
            elements: elements,
            sharable: option.sharable
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
