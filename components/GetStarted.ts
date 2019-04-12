const Joi = require('joi')

class GetStarted extends require('./Basic') {
  constructor (payload) {
    const
      constructure = {
        get_started: {
          payload: payload
        }
      }
    const schema = Joi.object().keys({
      get_started: Joi.object().keys({
        payload: Joi.string().min(1).max(1000).required()
      }).required()
    })
    super(constructure, schema)
  }
}

module.exports = GetStarted
