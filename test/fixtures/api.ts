const CONFIG = require('../config')
import request = require('request-promise-native')

function sendApi (api: String, json: Object) {
  return request({
    method: 'POST',
    uri: 'https://graph.facebook.com/v3.2/me/' + api,
    qs: { access_token: CONFIG.ACCESS_TOKEN },
    json
  })
}

export function send (message: Object) {
  const json = {
    recipient: { id: CONFIG.PSID },
    message
  }

  return sendApi('messages', json)
}

export function set (profile: Object) {
  const json = profile

  return sendApi('messenger_profile', json)
}
