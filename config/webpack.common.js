const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

const rootAssetPath = path.resolve(__dirname, '../public/assets');

const plugins = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  }),
];

const resolvePlugins = [
  new TsconfigPathsPlugin({
    configFile: path.resolve(__dirname, '../tsconfig.json'),
  }),
];

const tsLoader = {
  test: /\.(tsx?|jsx?)$/,
  exclude: /node_modules/,
  use: {
    loader: 'ts-loader',
  },
};

const fileLoader = {
  test: /\.(wav|webm|mp3|woff|woff2|ttf|eot|svg|png|jpe?g|gif|ico)(\?.*)?$/i,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[hash].[ext]',
      context: rootAssetPath,
    },
  },
};

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];

module.exports = {
  target: 'web',
  entry: [path.resolve(__dirname, '../src/index.tsx')],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [tsLoader, fileLoader],
  },
  resolve: {
    extensions,
    plugins: resolvePlugins,
  },
  plugins,
};
