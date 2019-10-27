import {rule} from '../no-array-render'
import {RuleTester} from 'eslint'

const parser = require.resolve('babel-eslint')
const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
}
const ruleTester = new RuleTester()

ruleTester.run('no-array-render', rule, {
  invalid: [
    {
      code: `
import * as React from 'react'
export default class Foo extends React.Component {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      errors: [
        {
          column: 12,
          endColumn: 51,
          endLine: 5,
          line: 5,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '    return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.Component {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      errors: [
        {
          column: 12,
          endColumn: 51,
          endLine: 5,
          line: 5,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '    return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
export default class Foo extends Component {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      errors: [
        {
          column: 12,
          endColumn: 51,
          endLine: 5,
          line: 5,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '    return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      errors: [
        {
          column: 12,
          endColumn: 51,
          endLine: 5,
          line: 5,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '    return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      errors: [
        {
          column: 12,
          endColumn: 51,
          endLine: 5,
          line: 5,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '    return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
export default class Foo extends PureComponent {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      errors: [
        {
          column: 12,
          endColumn: 51,
          endLine: 5,
          line: 5,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '    return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default () => {
  return [<div key="bar" />, <div key="spam" />]
}
        `,
      errors: [
        {
          column: 10,
          endColumn: 49,
          endLine: 4,
          line: 4,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '  return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default () => {
  return [<div key="bar" />, <div key="spam" />]
}
        `,
      errors: [
        {
          column: 10,
          endColumn: 49,
          endLine: 4,
          line: 4,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '  return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default function() {
  return [<div key="bar" />, <div key="spam" />]
}
        `,
      errors: [
        {
          column: 10,
          endColumn: 49,
          endLine: 4,
          line: 4,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '  return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default function() {
  return [<div key="bar" />, <div key="spam" />]
}
        `,
      errors: [
        {
          column: 10,
          endColumn: 49,
          endLine: 4,
          line: 4,
          message:
            "Don't return an array fron a React component's render method.",
          nodeType: 'ArrayExpression',
          severity: 1,
          source: '  return [<div key="bar" />, <div key="spam" />]',
        },
      ],
      parser,
      parserOptions,
    },
  ],
  valid: [
    {
      code: `
import * as React from 'react'
export default class Foo extends React.Component {
  render() {
    return <div />
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.Component {
  render() {
    return null
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.Component {
  render() {
    return "bar"
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.Component {
  render() {
    return 42
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.Component {
  render() {
    function test() {
      return []
    }

    return (
      <div>
        {test()}
      </div>
    )
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.Component {
  render() {
    return <div />
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.Component {
  render() {
    return null
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.Component {
  render() {
    return "bar"
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.Component {
  render() {
    return 42
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.Component {
  render() {
    function test() {
      return []
    }

    return (
      <div>
        {test()}
      </div>
    )
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
export default class Foo extends Component {
  render() {
    return <div />
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
export default class Foo extends Component {
  render() {
    return null
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
export default class Foo extends Component {
  render() {
    return "bar"
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
export default class Foo extends Component {
  render() {
    return 42
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'react'
export default class Foo extends Component {
  render() {
    function test() {
      return []
    }

    return (
      <div>
        {test()}
      </div>
    )
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return <div />
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return null
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return "bar"
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return 42
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    function test() {
      return []
    }

    return (
      <div>
        {test()}
      </div>
    )
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return <div />
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return null
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return "bar"
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    return 42
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'react'
export default class Foo extends React.PureComponent {
  render() {
    function test() {
      return []
    }

    return (
      <div>
        {test()}
      </div>
    )
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
export default class Foo extends PureComponent {
  render() {
    return <div />
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
export default class Foo extends PureComponent {
  render() {
    return null
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
export default class Foo extends PureComponent {
  render() {
    return "bar"
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
export default class Foo extends PureComponent {
  render() {
    return 42
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {PureComponent} from 'react'
export default class Foo extends PureComponent {
  render() {
    function test() {
      return []
    }

    return (
      <div>
        {test()}
      </div>
    )
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'not-react'
export default class Foo extends React.Component {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import React from 'not-react'
export default class Foo extends React.Component {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import {Component} from 'not-react'
export default class Foo extends Component {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
export default class Foo {
  render() {
    return [<div key="bar" />, <div key="spam" />]
  }
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
export default () => {
  return [<div key="bar" />, <div key="spam" />]
}
        `,
      parser,
      parserOptions,
    },
    {
      code: `
import * as React from 'react'
function getItems() {
  return [0, 1, 2]
}
export default () => {
  return <ul>{getItems().map(item => <li>{item}</li>)}</ul>
}
        `,
      parser,
      parserOptions,
    },
  ],
})
