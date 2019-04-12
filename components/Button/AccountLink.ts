const Joi = require('joi')

class Button_AccountLink extends require('./../Basic') {
  constructor (url) {
    const
      constructure = {
        type: 'account_link',
        url: url
      }
    const schema = Joi.object().keys({
      type: 'account_link',
      url: Joi.string().uri().required()
    })
    super(constructure, schema)
  }
}

module.exports = Button_AccountLink
