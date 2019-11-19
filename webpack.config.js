var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html' //relative to root of the application
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }

}