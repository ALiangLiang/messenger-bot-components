import request = require('request-promise-native')
try {
  require('../config')
} catch (err) {}

function sendApi (api: String, json: Object) {
  return request({
    method: 'POST',
    uri: 'https://graph.facebook.com/v3.2/me/' + api,
    qs: { access_token: process.env.ACCESS_TOKEN },
    json
  })
}

export function send (message: Object) {
  const json = {
    recipient: { id: process.env.PSID },
    message,
    messaging_type: 'MESSAGE_TAG',
    tag: 'FEATURE_FUNCTIONALITY_UPDATE'
  }

  return sendApi('messages', json)
}

export function set (profile: Object) {
  const json = profile

  return sendApi('messenger_profile', json)
}
