/// <binding BeforeBuild='Run - Development' ProjectOpened='Watch - Development' />
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './app/',
        example: './app/components/example/'
    },
    devtool: 'source-map',
    output: {
        path: './dist/',
        filename: '[name]/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin(),
        new ExtractTextPlugin('../Static/stylesheets/main.css', {
            allChunks: true
        })
    ]
};