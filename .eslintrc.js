module.exports = {
  root: true,
  extends: 'standard',
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  rules: {
    'no-unused-vars': 0,
    'linebreak-style': ['warn', 'unix'],
    'brace-style':[2, "1tbs", { "allowSingleLine": false }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
