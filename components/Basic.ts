const Joi = require('joi')

function serializer (object) {
  try {
    return JSON.parse(JSON.stringify(object, jsonReplacer))
  } catch (err) {
    console.error(err)
  }
}

function jsonReplacer (key, value) {
  if (value && value.constructure) {
    return value.constructure
  }
  return value
}

class Basic {
  constructor (constructure = {}, schema) {
    this._constructure = constructure
    if (schema && Basic._strictMode) {
      Joi.validate(constructure, schema, function (err, value) {
        if (err) {
          throw new Error(err)
        }
      })
    }
  }

  inspect () {
    return this._constructure
  }

  toJSON () {
    return serializer(this._constructure)
  }

  static set strictMode (strictMode) {
    this._strictMode = strictMode
  }

  set constructure (constructure) {}

  get constructure () {
    return serializer(this._constructure)
  }
}

module.exports = Basic
