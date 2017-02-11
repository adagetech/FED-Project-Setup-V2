/// <binding BeforeBuild='Run - Development' ProjectOpened='Watch - Development' />

const webpack = require('webpack')
const path = require('path');
const autoprefixer = require('autoprefixer');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app/',
    example: './app/components/example/'
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
      loader: ExtractTextPlugin.extract({loader: ['css-loader', 'postcss-loader', 'sass-loader']})
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
