const Joi = require('joi')

class Audio extends require('./Basic') {
  constructor (url) {
    const
      constructure = {
        attachment: {
          type: 'audio',
          payload: {
            url: url
          }
        }
      }
    const schema = Joi.object().keys({
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

module.exports = Audio
