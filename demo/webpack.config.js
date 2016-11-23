var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: ["babel-polyfill", "./src/entry.js"],
    output: {
        path: __dirname,
        filename: "js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: 'style!css'
                //loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.scss$/,
                //loader: 'style!css?modules!postcss!sass?sourceMap:true'
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    sassLoader: {
        includePaths:[
            __dirname + '/sass'
        ]
    },

    plugins: [
        ////这个使用uglifyJs压缩你的js代码
        //new webpack.optimize.UglifyJsPlugin({minimize: true}),
        ////把入口文件里面的数组打包成verdors.js
        //new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
        new ExtractTextPlugin('css/[name].css')
    ]
};