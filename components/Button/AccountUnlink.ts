const Joi = require('joi')

class Button_AccountUnlink extends require('./../Basic') {
  constructor () {
    const constructure = {
      type: 'account_unlink'
    }
    super(constructure)
  }
}

module.exports = Button_AccountUnlink
