const path = require('path');

module.exports = {
  presets: ['@babel/typescript', '@babel/preset-react'],
  env: {
    development: {
      presets: [ 
        [ '@babel/preset-env', {
          modules: false
        }]
      ],
    },
  },
  plugins: [
    '@babel/plugin-proposal-json-strings',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ],
};
