import CONFIG from '../config'
import request = require('request-promise-native')

export function send (message: Object) {
  const json = {
    recipient: { id: CONFIG.PSID },
    message
  }

  return request({
    method: 'POST',
    uri: 'https://graph.facebook.com/v3.2/me/messages',
    qs: { access_token: CONFIG.ACCESS_TOKEN },
    json
  })
}
