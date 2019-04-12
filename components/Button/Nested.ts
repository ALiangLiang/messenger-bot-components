const
  Joi = require('joi')
const Button_Url = require('./Url')
const Button_Postback = require('./Postback')
const Button_AccountLink = require('./AccountLink')
const Button_AccountUnlink = require('./AccountUnlink')

class Button_Nested extends require('./../Basic') {
  constructor (title, callToActions, option = {}) {
    const
      constructure = {
        type: 'nested',
        title: title,
        call_to_actions: callToActions
      }
    const schema = Joi.object().keys({
      type: 'nested',
      title: Joi.string().max(30).required(),
      call_to_actions: Joi.array().min(1).max(5).items(Joi.alternatives().try([
        Joi.object().type(Button_Url),
        Joi.object().type(Button_Postback),
        Joi.object().type(Button_Nested),
        Joi.object().type(Button_AccountLink),
        Joi.object().type(Button_AccountUnlink)
      ]))
        .when('composer_input_disabled', {
          is: true,
          then: Joi.required()
        })
    })
    super(constructure, schema)
  }
}

module.exports = Button_Nested
