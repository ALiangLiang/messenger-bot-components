const
  Joi = require('joi')
const Button_Url = require('./../../Button/Url')
const Button_Postback = require('./../../Button/Postback')
const Button_PhoneNumber = require('./../../Button/PhoneNumber')
const Button_ElementShare = require('./../../Button/ElementShare')
const Button_AccountLink = require('./../../Button/AccountLink')
const Button_AccountUnlink = require('./../../Button/AccountUnlink')

class Template_Element_Generic extends require('./../../Basic') {
  constructor (title, option = {}) {
    const
      constructure = {
        title: title,
        image_url: option.imageUrl,
        subtitle: option.subtitle,
        default_action: option.defaultAction,
        buttons: option.buttons
      }
    const schema = Joi.object().keys({
      title: Joi.string().max(80).required(),
      image_url: Joi.string().uri(),
      subtitle: Joi.string().max(80),
      default_action: Joi.object().type(Button_Url),
      buttons: Joi.array().min(1).max(3).items(Joi.alternatives().try([
        Joi.object().type(Button_Url),
        Joi.object().type(Button_Postback),
        Joi.object().type(Button_PhoneNumber),
        Joi.object().type(Button_ElementShare),
        Joi.object().type(Button_AccountLink),
        Joi.object().type(Button_AccountUnlink)
      ]))
    })
    super(constructure, schema)
  }
}

module.exports = Template_Element_Generic
