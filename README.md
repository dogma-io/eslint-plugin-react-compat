# eslint-plugin-react-compat [![NPM][npm-img]][npm-url] [![Coverage][cov-img]][cov-url]

Make sure your [React][react-url] code is compatible with [Inferno][inferno-url] and [Preact][preact-url].

## Table of Contents

*   [Installation](#installation)
*   [Documentation](#documentation)
*   [Contributing](#contributing)
*   [License](#license)

## Installation

**npm**

```bash
npm install eslint-plugin-react-compat
```

**yarn**

```bash
yarn add eslint-plugin-react-compat
```

## Documentation

Add the following to your [ESLint configuration file][eslint-config-url]:

```js
{
  "extends": ["plugin:react-compat/recommended"],
  "plugins": ["react-compat"]
}
```

## Contributing

Please see the [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE.md)

[cov-img]: https://img.shields.io/codecov/c/github/dogma-io/eslint-plugin-react-compat.svg "Code Coverage"
[cov-url]: https://codecov.io/gh/dogma-io/eslint-plugin-react-compat

[eslint-config-url]: https://eslint.org/docs/user-guide/configuring
[inferno-url]: https://infernojs.org/

[npm-img]: https://img.shields.io/npm/v/eslint-plugin-react-compat.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/eslint-plugin-react-compat

[preact-url]: https://preactjs.com/
[react-url]: https://reactjs.org/
