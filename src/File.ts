const Joi = require('joi')

class File extends require('./Basic') {
  constructor (url) {
    const
      constructure = {
        attachment: {
          type: 'file',
          payload: {
            url: url
          }
        }
      }
    const schema = Joi.object().keys({
      attachment: {
        type: 'file',
        payload: {
          url: Joi.string().uri().optional()
        }
      }
    })
    super(constructure, schema)
  }
}

module.exports = File
