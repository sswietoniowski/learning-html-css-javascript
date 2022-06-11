const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
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
    port: 3000,
  },
};
