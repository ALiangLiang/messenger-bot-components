const Joi = require('joi')

class Video extends require('./Basic') {
    constructor(url) {
        const
            constructure = {
                attachment: {
                    type: 'video',
                    payload: {
                        url: url
                    }
                }
            },
            schema = Joi.object().keys({
                attachment: {
                    type: 'video',
                    payload: {
                        url: Joi.string().uri().optional()
                    }
                }
            })
        super(constructure, schema)
    }
}

module.exports = Video
