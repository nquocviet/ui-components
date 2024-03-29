const path = require('path')

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: { reactDocgen: false },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [path.resolve(__dirname, '../')],
    }

    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ]

    return config
  },
}
