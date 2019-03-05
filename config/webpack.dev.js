const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ],
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true
  },
})