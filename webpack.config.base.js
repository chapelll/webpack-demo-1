var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack的练习",
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [
            {   test: /\.(png|jpg)$/, 
                use: 'file-loader'},
            {
                test: /\.styl$/i,
                loader: ["style-loader","css-loader","stylus-loader"],
            },
            {
                test: /\.less$/i,
                loader: ["style-loader","css-loader","less-loader"],
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("dart-sass")
                        }
                    }
                ],
            },
        ],
    },
};

