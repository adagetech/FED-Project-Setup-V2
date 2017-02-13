/// <binding ProjectOpened='Watch - Development' />

const webpack = require('webpack')
const path = require('path');
const autoprefixer = require('autoprefixer');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/',
    example: './app/pages/example-page/'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name]/index.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {presets: ['es2015']}
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [{loader: 'eslint-loader'}],
    },
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({use: ['css-loader', 'postcss-loader', 'sass-loader']})
    }
    ],
  },
  plugins: [
  new LiveReloadPlugin(),
  new ExtractTextPlugin({ filename: '../static/stylesheets/main.css' }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
      autoprefixer(),
      ]
    }
  })
  ]
};
