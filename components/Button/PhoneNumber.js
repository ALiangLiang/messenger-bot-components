const Joi = require('joi')

class Button_PhoneNumber extends require('./../Basic') {
    constructor(title, phoneNumber) {
        const
            constructure = {
                type: 'phone_number',
                title: title,
                payload: phoneNumber
            },
            schema = Joi.object().keys({
                type: 'phone_number',
                title: Joi.string().max(20).required(),
                payload: Joi.string().max(1000).required()
            })
        super(constructure, schema)
    }
}

module.exports = Button_PhoneNumber
