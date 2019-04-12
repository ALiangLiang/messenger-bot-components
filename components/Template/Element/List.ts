const
    Joi = require('joi'),
    Button_Url = require('./../../Button/Url'),
    Button_Postback = require('./../../Button/Postback'),
    Button_PhoneNumber = require('./../../Button/PhoneNumber'),
    Button_ElementShare = require('./../../Button/ElementShare'),
    Button_AccountLink = require('./../../Button/AccountLink'),
    Button_AccountUnlink = require('./../../Button/AccountUnlink')

class Template_Element_List extends require('./../../Basic') {
    constructor(title, option = {}) {
        const
            constructure = {
                title: title,
                image_url: option.imageUrl,
                subtitle: option.subtitle,
                default_action: option.defaultAction,
                buttons: option.buttons,
            },
            schema = Joi.object().keys({
                title: Joi.string().max(80).required(),
                image_url: Joi.string().uri(),
                subtitle: Joi.string().max(80),
                default_action: Joi.object().type(Button_Url),
                buttons: Joi.array().max(1).items(Joi.alternatives().try([
                    Joi.object().type(Button_Url),
                    Joi.object().type(Button_Postback),
                    Joi.object().type(Button_PhoneNumber),
                    Joi.object().type(Button_ElementShare),
                    Joi.object().type(Button_AccountLink),
                    Joi.object().type(Button_AccountUnlink)
                ])),
            })
        super(constructure, schema)
    }
}

module.exports = Template_Element_List
