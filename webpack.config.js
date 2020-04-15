const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    entry: {
        main: "./src/index.js",
    },
    devServer: {
        contentBase: "./dist",
        open: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    "presets": [
                        ["@babel/preset-env", {
                            "useBuiltIns": "usage", //polyfill 使用的语法才去添加polyfill
                        }]
                    ]
                }
            },
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new CleanWebpackPlugin(),
    ]
}