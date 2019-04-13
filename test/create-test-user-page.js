const request = require('request-promise-native')
const ngrok = require('ngrok')
const express = require('express')
const bodyParser = require('body-parser')
const CONFIG = require('./config')

async function main () {
  // Create test user
  const testUser = await request({
    method: 'POST',
    uri: `https://graph.facebook.com/v3.2/${CONFIG.APP_ID}/accounts/test-users`,
    qs: { access_token: CONFIG.APP_TOKEN },
    json: {
      installed: true,
      permissions: 'manage_pages,pages_messaging'
    }
  })

  console.log('Created test user', testUser)

  // Create test page
  await request({
    method: 'POST',
    uri: `https://graph.facebook.com/v3.2/${testUser.id}/accounts`,
    qs: { access_token: testUser.access_token },
    json: {
      name: 'Test Page 1',
      category: '756092301147942',
      about: 'test',
      picture: 'https://dummyimage.com/600x400/000/fff',
      cover_photo: { url: 'https://dummyimage.com/600x400/000/fff' }
    }
  })

  console.log('Created test page')

  // Get test page
  const testPage = (await request({
    method: 'GET',
    uri: `https://graph.facebook.com/v3.2/${testUser.id}/accounts`,
    qs: { access_token: testUser.access_token },
    json: true
  })).data[0]

  console.log('Got test page', testPage)

  // subscribe page to app
  await request({
    uri: 'https://graph.facebook.com/v3.2/me/subscribed_apps',
    method: 'POST',
    qs: { access_token: testPage.access_token },
    json: {
      subscribed_fields: [
        'messages',
        'message_deliveries',
        'message_reads'
      ]
    }
  })

  console.log('Subscribed')

  // Set whitelist domain
  await request({
    uri: 'https://graph.facebook.com/v3.2/me/messenger_profile',
    method: 'POST',
    qs: { access_token: testPage.access_token },
    json: {
      whitelisted_domains: ['https://foo.bar']
    }
  })

  console.log('Set whitelist domain')

  const psid = await new Promise((resolve, reject) => {
    // Establish http server
    const app = express()
    app.use(bodyParser.json())
    app.get('/', function (req, res) {
      if (req.query['hub.verify_token'] === CONFIG.VERIFY_TOKEN) {
        console.log('verified')
        return res.send(req.query['hub.challenge'])
      }
      res.status(400).send('Error, wrong validation token')
    })
    app.post('/', function (req, res) {
      console.dir(req.body, { depth: 7 })
      res.send()
      try {
        return resolve(req.body.entry[0].messaging[0].sender.id)
      } catch (err) {
        console.dir(req.body, { depth: 10 })
        return reject(err)
      }
    })
    await new Promise((resolve, reject) => app.listen(CONFIG.PORT, resolve))

    console.log('Webhook server listening on port ' + CONFIG.PORT)

    // Establish https proxy to http server
    const ngrokUrl = await ngrok.connect({
      proto: 'http',
      addr: CONFIG.PORT,
      region: 'us'
    })

    console.log('Got the ngrok url', ngrokUrl)

    // Set and verify webhook
    await request({
      uri: `https://graph.facebook.com/v3.2/${CONFIG.APP_ID}/subscriptions`,
      method: 'POST',
      qs: { access_token: CONFIG.APP_TOKEN },
      json: {
        object: 'page',
        callback_url: ngrokUrl,
        fields: 'messages',
        include_values: true,
        verify_token: CONFIG.VERIFY_TOKEN
      }
    })

    console.log('Already establish https server and webhook. Please send any message to test page using test user')
    console.log('test user email:', testUser.email)
    console.log('test user password:', testUser.password)
  })

  console.log('Got psid. Please store it in config.json -> PSID', psid)
  console.log('Please store the access_token in config.json -> ACCESS_TOKEN', testPage.access_token)
}

main()
