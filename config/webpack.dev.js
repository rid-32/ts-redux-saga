const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.DEVELOPMENT': true,
  }),
];

module.exports = merge.smart(
  {
    mode: 'development',
    plugins,
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      port: process.env.WEBPACK_DEVSERVER_PORT || 3000,
      hot: true,
      compress: true,
    },
  },
  common,
);
