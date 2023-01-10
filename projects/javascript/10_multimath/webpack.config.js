const path = require('path');

const config = {
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: 'ts-loader',
        exclude: ['/node_modules/'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js',
  },
  devServer: {
    static: './',
    open: true,
    compress: true,
    host: 'localhost',
  },
};

module.exports = () => {
  config.mode = 'development';
  return config;
};
