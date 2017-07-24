const Joi = require('joi')

class Text extends require('./Basic') {
    constructor(text) {
        const
            constructure = {
                text: text
            },
            schema = Joi.object().keys({
                text: Joi.string().max(640).required()
            })
        super(constructure, schema)
    }
}

module.exports = Text
