const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public", "images"),
    hot: true,
    port: 3002,
    open: true,
    historyApiFallback: true
  },
  devtool: "inline-source-map"
});
