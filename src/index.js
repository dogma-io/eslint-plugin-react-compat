/**
 * @flow
 */

import {rule as noArrayRender} from './rules/no-array-render'

export default {
  configs: {
    recommended: {
      rules: {
        'react-compat/no-array-render': 2,
      },
    },
  },
  rules: {
    'no-array-render': noArrayRender,
  },
}
