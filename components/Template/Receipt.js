const
    Joi = require('joi'),
    Template_Element_Receipt = require('./Element/Receipt')

class Template_Receipt extends require('./../Basic') {
    constructor(recipientName, orderNumber, currency, paymentMethod, summary, option = {}) {
        const
            constructure = {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'receipt',
                        recipient_name: recipientName,
                        order_number: orderNumber,
                        currency: currency,
                        payment_method: paymentMethod,
                        summary: summary,
                        sharable: option.sharable,
                        timestamp: option.timestamp,
                        elements: option.elements,
                        address: option.address,
                        adjustments: option.adjustments
                    }
                }
            },
            schema = Joi.object().keys({
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'list',
                        recipient_name: Joi.string().required(),
                        order_number: Joi.string().required(),
                        currency: Joi.string().required(),
                        payment_method: Joi.string().required(),
                        summary: Joi.object().required(),
                        sharable: Joi.boolean().optional(),
                        timestamp: Joi.string().optional(),
                        elements: Joi.object().type(Template_Element_Receipt).optional(),
                        address: Joi.object().optional(),
                        adjustments: Joi.array().optional()
                    }
                }
            })
        super(constructure, schema)
    }

    static get element() {
        return Template_Element_Receipt
    }

    get element() {
        return Template_Element_Receipt
    }
}

module.exports = Template_Receipt
