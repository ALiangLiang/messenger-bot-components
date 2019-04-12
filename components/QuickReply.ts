const
  Joi = require('joi')
const QuickReplyItem = require('./QuickReplyItem')

class QuickReply extends require('./Basic') {
  constructor (text, quickReplies) {
    const
      constructure = {
        text: text,
        quick_replies: quickReplies
      }
    const schema = Joi.object().keys({
      text: Joi.string().required(),
      quick_replies: Joi.array().max(11).items(Joi.object().type(QuickReplyItem)).required()
    })
    super(constructure, schema)
  }
}

module.exports = QuickReply
