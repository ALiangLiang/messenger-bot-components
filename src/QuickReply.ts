import { Abstract } from './Abstract'

interface QuickReplyItemOption {
  title?: String
  payload?: String
  imageUrl?: String
}

export class QuickReplyItem extends Abstract {
  constructor (contentType: String, option: QuickReplyItemOption = {}) {
    const constructure = {
      title: option.title,
      content_type: contentType,
      payload: option.payload,
      image_url: option.imageUrl
    }

    super(constructure)
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
}
