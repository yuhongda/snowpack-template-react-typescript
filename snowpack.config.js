module.exports = {
  extends: '@snowpack/app-scripts-react',
  plugins: [
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
        transformOptions: {},
      },
    ],
    ['@snowpack/plugin-postcss'],
    ['@snowpack/plugin-run-script', { cmd: 'sass src/ --no-source-map', watch: '$1 --watch' }],
    ['snowpack-plugin-less'],
  ],
  exclude: ['**/node_modules/**/*', '**/__tests__/*', '**/*.@(spec|test).@(js|mjs)'],
  alias: {
    '@': './src/',
  },
  installOptions: {
    polyfillNode: true,
    namedExports: ['mobx-react-router'],
  },
};
