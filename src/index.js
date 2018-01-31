module.exports = {
  configs: {
    recommended: {
      rules: {
        'react-compat/no-array-render': 2,
      },
    },
  },
  rules: {
    'no-array-render': require('./rules/no-array-render').default,
  },
}
