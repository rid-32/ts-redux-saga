const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

const plugins = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  }),
]

const tsLoader = {
  test: /\.(tsx?|jsx?)$/,
  exclude: /node_modules/,
  use: 'ts-loader'
}

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css']

module.exports = {
  target: 'web',
  entry: [path.resolve(__dirname, '../src/index.tsx')],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [tsLoader]
  },
  resolve: {
    extensions,
  },
  plugins,
}
