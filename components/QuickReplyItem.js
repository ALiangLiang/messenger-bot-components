const Joi = require('joi')

class QuickReplyItem extends require('./Basic') {
    constructor(contentType, option = {}) {
        const
            constructure = {
                title: option.title,
                content_type: contentType,
                payload: option.payload,
                image_url: option.imageUrl
            },
            schema = Joi.object().keys({
                title: Joi.string().max(20),
                content_type: Joi.string().allow('text', 'location').required(),
                payload: Joi.string().max(1000),
                image_url: Joi.string().uri().optional()
            })
        super(constructure, schema)
    }
}

module.exports = QuickReplyItem
