// const webpack = require('webpack');

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'html-webpack-plugin',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
        ],
      },
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
