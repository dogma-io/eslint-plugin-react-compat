import noArrayRender from './rules/no-array-render'

export default {
  configs: {
    'react-compat': {
      rules: {
        'react-compat/no-array-render': 2,
      },
    },
  },
  rules: {
    'no-array-render': noArrayRender,
  },
}
