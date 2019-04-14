/**
 * @module TemplateMedia
 */
import { Abstract } from '../Abstract'

import { ButtonUrl } from '../Button/Url'
import { ButtonPostback } from '../Button/Postback'
import { ButtonPhoneNumber } from '../Button/PhoneNumber'
import { ButtonElementShare } from '../Button/ElementShare'
import { ButtonAccountLink } from '../Button/AccountLink'
import { ButtonAccountUnlink } from '../Button/AccountUnlink'

enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
}

interface TemplateElementMediaOption {
  mediaType: MediaType | 'image' | 'video'
  attachmentId?: String
  url?: String
  buttons: ButtonUrl[] | ButtonPostback[] | ButtonPhoneNumber[] | ButtonElementShare[] | ButtonAccountLink[] | ButtonAccountUnlink[]
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/media#elements}
 */
export class TemplateElementMedia extends Abstract {
  constructor (option: TemplateElementMediaOption) {
    const constructure = {
      media_type: option.mediaType,
      attachment_id: option.attachmentId,
      url: option.url,
      buttons: option.buttons
    }

    super(constructure)
  }

  static get MediaType () {
    return MediaType
  }

  get MediaType () {
    return MediaType
  }
}

interface TemplateMediaOption {
  sharable?: Boolean
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/template/media}
 */
export class TemplateMedia extends Abstract {
  constructor (elements: TemplateElementMedia[], option: TemplateMediaOption = {}) {
    const constructure = {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'media',
          elements,
          sharable: option.sharable
        }
      }
    }

    super(constructure)
  }

  static get Element () {
    return TemplateElementMedia
  }

  get Element () {
    return TemplateElementMedia
  }
}
