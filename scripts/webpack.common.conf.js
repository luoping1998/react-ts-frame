const htmlPlugin = require('html-webpack-plugin');

const { resolve } = require('path');
module.exports = {
    entry: {
        index: resolve(__dirname, '../src/index.tsx')
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [resolve(__dirname, '../src')],
                exclude: /node_modules/,
                use: [
                    { loader: "awesome-typescript-loader" }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5*1024,
                            outputPath: 'static/imgs/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlPlugin({
            filename: 'index.html',
            template: resolve(__dirname, '../index.html') 
        })
    ],
}