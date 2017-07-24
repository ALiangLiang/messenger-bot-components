const Joi = require('joi')

class Button_ElementShare extends require('./../Basic') {
    constructor() {
        const constructure = {
                type: 'element_share'
            }
        super(constructure)
    }
}

module.exports = Button_ElementShare
