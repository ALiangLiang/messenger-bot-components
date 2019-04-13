module.exports = {
  plugins: [
    'mocha'
  ],
  env: {
    mocha: true
  },
  rules: {
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-skipped-tests': 'warn',
  }
}
