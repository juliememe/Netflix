const { merge } = require("webpack-merge");
const webpack = require("webpack");
const common = require('./webpack.common');

module.exports = merge(common, {
    mode : "development",
    entry :{
        app : ["./src/index.tsx"],
    },
    output: {
        publicPath: "/"
    },
    devServer: {
        port: 5555,
        hot : true, //тригерятся изменения, пересобирается билд
        open: true, // открывает страничку
        compress: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({}),
    ]
});



