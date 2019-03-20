// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { resolve } = require('path');
module.exports = {
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
    }
}