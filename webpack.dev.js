const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {cleanWebpackPlugin, CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 8090
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node/modules/',
                loader: "babel-loader"
            },
            {
                test: /\.jpg$/,
                type: 'asset/resource',
            },
            {
                test: /\.png$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            dry:true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}