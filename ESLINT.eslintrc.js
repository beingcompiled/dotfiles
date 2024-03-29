module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: [2, 'tab'],
    'no-tabs': 0,
    'padded-blocks': 0,
    'no-template-curly-in-string': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
