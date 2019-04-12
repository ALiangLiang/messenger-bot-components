const
  Joi = require('joi')
const PersistentMenuLocale = require('./PersistentMenuLocale')

class PersistentMenu extends require('./Basic') {
  constructor (persistentMenuLocales) {
    const
      constructure = {
        persistent_menu: persistentMenuLocales
      }
    const schema = Joi.object().keys({
      persistent_menu: Joi.array().items(Joi.object().type(PersistentMenuLocale)).required()
    })
    super(constructure, schema)
  }
}

module.exports = PersistentMenu
