const Joi = require('joi')

class GreetingItem extends require('./Basic') {
    constructor(text, locale) {
        const
            constructure = {
                text: text,
                locale: locale
            },
            schema = Joi.object().keys({
                text: Joi.string().min(1).max(160).required(),
                locale: Joi.string().required()
            }).required()
        super(constructure, schema)
    }
}

module.exports = GreetingItem
