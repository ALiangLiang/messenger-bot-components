const
    Joi = require('joi'),
    GreetingItem = require('./GreetingItem')

class Greeting extends require('./Basic') {
    constructor(greetingItems) {
        const
            constructure = {
                greeting: greetingItems
            },
            schema = Joi.object().keys({
                greeting: Joi.array().items(Joi.object().type(GreetingItem))
            }).required()
        super(constructure, schema)
    }
}

module.exports = Greeting
