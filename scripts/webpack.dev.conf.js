const merge = require('webpack-merge');
const baseWebpack = require('./webpack.common.conf');

const resolve = require('path').resolve;

module.exports = merge(baseWebpack, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devServer: {
        hot: true,
        port: 8000
    }
})