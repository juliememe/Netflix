const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        path: path.resolve(__dirname,  "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: 'assets/[name][ext]',
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/\.(s*)css$/,
                exclude: /node_modules/,
                use: [
                    process.env.NODE_ENV === 'development' ? 'style-loader' : { loader: MiniCss.loader },
                    {
                        loader: 'css-loader',
                        options: { //css modules
                            sourceMap: true,
                            modules: {
                                localIdentName: "[name]_[local]",
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },

                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename : "[name].css", chunkFilename: "[id].css"}),
    ],
};