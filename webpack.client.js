const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // point webpack to root file for the server app
  entry: './src/client/client.js',
  // point webpack to put output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development'
};

module.exports = merge(baseConfig, config);
