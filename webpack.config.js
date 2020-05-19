var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require("./webpack.config.base.js")

module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                //开发的时候使用 loader 速度快，css不会抽离，直接写在html中
            }
        ]
    }
};

