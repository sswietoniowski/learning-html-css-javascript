const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: ['regenerator-runtime/runtime.js', './src/app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new CopyPlugin({ patterns: [{ from: 'assets' }] }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-0'],
          },
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
    port: 5000,
  },
};
