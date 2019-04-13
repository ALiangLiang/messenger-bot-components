import { Abstract } from './Abstract'

export enum ContentType {
  TEXT = 'text',
  LOCATION = 'location',
  USER_PHONE_NUMBER = 'user_phone_number',
  USER_EMAIL = 'user_email'
}

interface QuickReplyItemOption {
  title?: String
  payload?: String
  imageUrl?: String
}

export class QuickReplyItem extends Abstract {
  constructor (contentType: ContentType | 'text' | 'location' | 'user_phone_number' | 'user_email', option: QuickReplyItemOption = {}) {
    const constructure = {
      title: option.title,
      content_type: contentType,
      payload: option.payload,
      image_url: option.imageUrl
    }

    super(constructure)
  }

  static get ContentType () {
    return ContentType
  }

  get ContentType () {
    return ContentType
  }
}

export class QuickReply extends Abstract {
  constructor (text: String, quickReplies: QuickReplyItem[]) {
    const constructure = {
      text,
      quick_replies: quickReplies
    }

    super(constructure)
  }

  static get Item () {
    return QuickReplyItem
  }

  get Item () {
    return QuickReplyItem
  }
}
