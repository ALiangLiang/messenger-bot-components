const Joi = require('joi')

class Button_Url extends require('./../Basic') {
  constructor (title, url, option = {}) {
    const
      constructure = {
        type: 'web_url',
        title: title,
        url: url,
        webview_height_ratio: option.webview_height_ratio,
        messenger_extensions: option.messenger_extensions,
        fallback_url: option.fallback_url
      }
    const schema = Joi.object().keys({
      type: Joi.string().valid('web_url').required(),
      title: Joi.string().max(20).required(),
      url: Joi.string().required(),
      webview_height_ratio: Joi.string().valid(['compact', 'tall', 'full']),
      messenger_extensions: Joi.boolean(),
      fallback_url: Joi.string()
    })
    super(constructure, schema)
  }
}

module.exports = Button_Url
