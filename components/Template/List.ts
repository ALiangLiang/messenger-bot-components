const
  Joi = require('joi')
const Button_Url = require('./../Button/Url')
const Button_Postback = require('./../Button/Postback')
const Button_PhoneNumber = require('./../Button/PhoneNumber')
const Button_ElementShare = require('./../Button/ElementShare')
const Button_AccountLink = require('./../Button/AccountLink')
const Button_AccountUnlink = require('./../Button/AccountUnlink')
const Template_Element_List = require('./Element/List')

class Template_List extends require('./../Basic') {
  constructor (elements, option = {}) {
    const
      constructure = {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'list',
            top_element_style: option.topElementStyle,
            buttons: option.buttons,
            elements: elements
          }
        }
      }
    const schema = Joi.object().keys({
      attachment: {
        type: 'template',
        payload: {
          template_type: 'list',
          top_element_style: Joi.string().allow('large', 'compact'),
          buttons: Joi.array().max(1).items(Joi.alternatives().try([
            Joi.object().type(Button_Url),
            Joi.object().type(Button_Postback),
            Joi.object().type(Button_PhoneNumber),
            Joi.object().type(Button_ElementShare),
            Joi.object().type(Button_AccountLink),
            Joi.object().type(Button_AccountUnlink)
          ])),
          elements: Joi.array().min(2).max(4).items(Joi.object().type(Template_Element_List)).required()
        }
      }
    })
    super(constructure, schema)
  }

  static get element () {
    return Template_Element_List
  }

  get element () {
    return Template_Element_List
  }
}

module.exports = Template_List
