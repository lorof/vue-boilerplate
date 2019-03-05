const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash:4].css",
      chunkFilename: "assets/css/[name].[hash:4].chunk.css"
    })
  ]
});