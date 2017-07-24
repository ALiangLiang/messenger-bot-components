const
    Joi = require('joi'),
    Template_Element_Generic = require('./Element/Generic')

class Template_Generic extends require('./../Basic') {
    constructor(elements) {
        const
            constructure = {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'generic',
                        elements: elements
                    }
                }
            },
            schema = Joi.object().keys({
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'generic',
                        elements: Joi.array().min(1).max(10).items(Joi.object().type(Template_Element_Generic)).required()
                    }
                }
            })
        super(constructure, schema)
    }

    static get element() {
        return Template_Element_Generic
    }

    get element() {
        return Template_Element_Generic
    }
}

module.exports = Template_Generic
