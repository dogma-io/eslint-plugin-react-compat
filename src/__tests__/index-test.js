import index from '../index'
import {rule as noArrayRender} from '../rules/no-array-render'

describe('eslint-plugin-react-compat', () => {
  it('should define expected configs', () => {
    expect(index.configs).toEqual({
      recommended: {
        rules: {
          'react-compat/no-array-render': 2,
        },
      },
    })
  })

  it('should define expected rules', () => {
    expect(index.rules).toEqual({
      'no-array-render': noArrayRender,
    })
  })
})
