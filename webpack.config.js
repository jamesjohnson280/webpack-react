const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', 'jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-[fullhash]-bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello React!',
      template: path.resolve(__dirname, './static/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
  devtool: 'source-map',
};