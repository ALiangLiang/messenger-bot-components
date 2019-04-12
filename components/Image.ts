const Joi = require('joi')

class Image extends require('./Basic') {
  constructor (urlOrAttachmentId, option = {}) {
    const
      url = (!Number(urlOrAttachmentId)) ? urlOrAttachmentId : void 0
    const attachmentId = (Number(urlOrAttachmentId)) ? urlOrAttachmentId : void 0

    const
      constructure = {
        attachment: {
          type: 'image',
          payload: {
            url: url,
            attachment_id: attachmentId,
            is_reusable: option.isReusable
          }
        }
      }
    const schema = Joi.object().keys({
      attachment: {
        type: 'image',
        payload: Joi.object().keys({
          url: Joi.string().uri().optional(),
          attachment_id: Joi.string().optional(),
          is_reusable: Joi.boolean().optional().default(false)
        }).nand('url', 'attachment_id')
      }
    })
    super(constructure, schema)
  }
}

module.exports = Image
