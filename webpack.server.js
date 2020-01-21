const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // tell webpack we are building a bundle for NodeJS, not the browser
  target: 'node',
  // point webpack to root file for the server app
  entry: './src/index.js',
  // point webpack to put output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()],
  mode: 'development'
};

module.exports = merge(baseConfig, config);
