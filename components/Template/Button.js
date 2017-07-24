const
    Joi = require('joi'),
    Button_Url = require('./../Button/Url'),
    Button_Postback = require('./../Button/Postback'),
    Button_PhoneNumber = require('./../Button/PhoneNumber'),
    Button_ElementShare = require('./../Button/ElementShare'),
    Button_AccountLink = require('./../Button/AccountLink'),
    Button_AccountUnlink = require('./../Button/AccountUnlink')

class Template_Button extends require('./../Basic') {
    constructor(title, buttons) {
        const
            constructure = {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'button',
                        text: title,
                        buttons: buttons
                    }
                }
            },
            schema = Joi.object().keys({
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'button',
                        text: Joi.string().max(640),
                        buttons: Joi.array().min(1).max(3).items(Joi.alternatives().try([
                            Joi.object().type(Button_Url),
                            Joi.object().type(Button_Postback),
                            Joi.object().type(Button_PhoneNumber),
                            Joi.object().type(Button_ElementShare),
                            Joi.object().type(Button_AccountLink),
                            Joi.object().type(Button_AccountUnlink),
                        ]))
                    }
                }
            })
        super(constructure, schema)
    }
}

module.exports = Template_Button
