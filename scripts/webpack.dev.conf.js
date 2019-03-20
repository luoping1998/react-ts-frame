const merge = require('webpack-merge');
const baseWebpack = require('./webpack.common.conf');
const htmlPlugin = require('html-webpack-plugin');

const resolve = require('path').resolve;

module.exports = merge(baseWebpack, {
    mode: "development",
    entry: {
        index: resolve(__dirname, '../src/index.tsx')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: resolve(__dirname, '../index.html') 
        })
    ],
    devServer: {
        hot: true,
        port: 8000
    }
})