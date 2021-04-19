const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 8090
    }, 
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: '/node/modules/',
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/views/index.html',
            filename: './index.html'
        })
    ]
}