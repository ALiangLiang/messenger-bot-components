const
    Joi = require('joi'),
    Button_Url = require('./Button/Url'),
    Button_Postback = require('./Button/Postback'),
    Button_Nested = require('./Button/Nested')

class PersistentMenuLocale extends require('./Basic') {
    constructor(locale, callToActions, option = {}) {
        const
            constructure = {
                locale: locale,
                composer_input_disabled: option.composerInputDisabled,
                call_to_actions: callToActions
            },
            schema = Joi.object().keys({
                locale: Joi.string().required(),
                composer_input_disabled: Joi.boolean(),
                call_to_actions: Joi.array().min(1).max(3).items(Joi.alternatives().try([
                        Joi.object().type(Button_Url),
                        Joi.object().type(Button_Postback),
                        Joi.object().type(Button_Nested)
                    ]))
                    .when('composer_input_disabled', {
                        is: true,
                        then: Joi.required()
                    })
            })
        super(constructure, schema)
    }
}

module.exports = PersistentMenuLocale
