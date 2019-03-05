const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const Dotenv = require('dotenv-webpack')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: "assets/js/[name].[hash:4].js",
    chunkFilename: "assets/js/[name].[hash:4].chunk.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 200,
      maxSize: 0,
      minChunks: 1
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
              'postcss-loader'
            ],
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, `src`)],
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "My App",
      inject: true,
      template: "templates/index.html"
    }),
    // new Dotenv()
    // new BundleAnalyzerPlugin()
  ]
}