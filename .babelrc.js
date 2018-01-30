module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: '4',
        },
      },
    ],
    '@babel/flow',
    '@babel/react',
  ],
}
