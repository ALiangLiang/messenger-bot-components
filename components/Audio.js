const Joi = require('joi')

class Aideo extends require('./Basic') {
    constructor(url) {
        const
            constructure = {
                attachment: {
                    type: 'audio',
                    payload: {
                        url: url
                    }
                }
            },
            schema = Joi.object().keys({
                attachment: {
                    type: 'aideo',
                    payload: {
                        url: Joi.string().uri().optional()
                    }
                }
            })
        super(constructure, schema)
    }
}

module.exports = Aideo
