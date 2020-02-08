const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const plugins = [
  new webpack.DefinePlugin({
    'process.env.DEVELOPMENT': false,
  }),
];

module.exports = merge.smart(
  {
    mode: 'production',
    plugins,
  },
  common,
);
