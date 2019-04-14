/**
 * @module Image
 */
import { Abstract } from './Abstract'

interface ImageOption {
  isReusable?: Boolean
}

/**
 * @see {@link https://developers.facebook.com/docs/messenger-platform/reference/send-api/#attachment}
 */
export class Image extends Abstract {
  constructor (urlOrAttachmentId: Number | String, option: ImageOption = {}) {
    const url = (!Number(urlOrAttachmentId)) ? urlOrAttachmentId : void 0
    const attachmentId = (Number(urlOrAttachmentId)) ? urlOrAttachmentId : void 0

    const constructure = {
      attachment: {
        type: 'image',
        payload: {
          url: url,
          attachment_id: attachmentId,
          is_reusable: option.isReusable
        }
      }
    }

    super(constructure)
  }
}
