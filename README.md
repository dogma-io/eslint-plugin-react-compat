# eslint-plugin-react-no-array-render [![NPM][npm-img]][npm-url] [![Coverage][cov-img]][cov-url]

Prevent [React][react-url] components from returning an `Array` from their `render` method. This is useful if you want your React code to work with a React version prior to 16 or with a drop-in replacement such as [Preact][preact-url] or [Inferno][inferno-url], as none of them support this feature.

## Installation

**npm**

```bash
npm install eslint-plugin-react-no-array-render
```

**yarn**

```bash
yarn add eslint-plugin-react-no-array-render
```

## Usage

Add the following to your [ESLint configuration file][eslint-config-url]:

```js
{
  "rules": {
    "react-no-array-render": [2]
  }
}
```

[cov-img]: https://img.shields.io/codecov/c/github/dogma-io/eslint-plugin-react-no-array-render.svg "Code Coverage"
[cov-url]: https://codecov.io/gh/dogma-io/eslint-plugin-react-no-array-render

[eslint-config-url]: https://eslint.org/docs/user-guide/configuring
[inferno-url]: https://infernojs.org/

[npm-img]: https://img.shields.io/npm/v/eslint-plugin-react-no-array-render.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/eslint-plugin-react-no-array-render

[preact-url]: https://preactjs.com/
[react-url]: https://reactjs.org/
