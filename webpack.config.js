var path = require('path');
var Webpack = require('webpack');

var commonsPlugin = new Webpack.optimize.CommonChuckPlugin('shared.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js')//repath where the bundle file maybe
    entry: {
        utlis: './utils',
        app: './app.js',
        about: './about_page.js',
        home: './index_page.js',
        contact:'./contact_page.js'
    },//Top Level files to inculde in build and entry point for Webpack
    output: {
        path:path.resolve('build/js/'),
        publicPath: '/public/assets/js',
        filename: '[name].js'//where the new bundled entry file's code will be going
    },
    plugins: [
        commonsPlugin,
        new ExtractTextPlugin('styles.css')
    ],
    devServer: {
        contentBase: 'public'
    },
    watch: true, //Webpack will rerun everytime entry files change
    module: {
        loader: [
            {
                test:'/\.es6$/,'
                exclude: '/node_modules',
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js','.es6']
    }
}
