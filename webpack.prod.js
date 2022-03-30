const { merge } = require("webpack-merge");
const common = require('./webpack.common');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    entry :{
        app : ["./src/index.tsx"],
    },
    mode : "production",
    output: {
        publicPath: "./"
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename : "[name].css", chunkFilename: "[id].css"})
    ]
});
