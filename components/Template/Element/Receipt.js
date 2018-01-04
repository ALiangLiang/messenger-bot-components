const
    Joi = require('joi')

class Template_Element_List extends require('./../../Basic') {
    constructor(title, price, option = {}) {
        const
            constructure = {
                title: title,
                price: price,
                subtitle: option.subtitle,
                quantity: option.quantity,
                currency: option.currency,
                image_url: option.imageUrl
            },
            schema = Joi.object().keys({
                title: Joi.string().required(),
                price: Joi.number().min(0).required(),
                subtitle: Joi.string().optional(),
                quantity: Joi.number().optional(),
                currency: Joi.string().optional(),
                image_url: Joi.string().optional()
            })
        super(constructure, schema)
    }
}

module.exports = Template_Element_List
