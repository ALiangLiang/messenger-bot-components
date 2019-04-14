const CONFIG = {
  // These variables is used to run create-test-user-page.js. If you already have access token and psid.
  // You can ignore and directly fill them.
  VERIFY_TOKEN: 'YOU_CAN_SPECIFY_ANY_TOKEN',
  PORT: 9487,
  APP_ID: '',
  APP_TOKEN: '',

  // You need to run the create-test-user-page.js first. And follow the instruction.
  ACCESS_TOKEN: '',
  PSID: ''
}

// Cover the process.env by CONFIG. But process.env first
Object.assign(CONFIG, process.env)
Object.assign(process.env, CONFIG)

module.exports = process.env
