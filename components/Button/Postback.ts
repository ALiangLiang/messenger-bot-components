const Joi = require('joi')

class Button_Postback extends require('./../Basic') {
  constructor (title, payload) {
    const
      constructure = {
        type: 'postback',
        title: title,
        payload: payload
      }
    const schema = Joi.object().keys({
      type: 'postback',
      title: Joi.string().max(20).required(),
      payload: Joi.string().max(1000).required()
    })
    super(constructure, schema)
  }
}

module.exports = Button_Postback
