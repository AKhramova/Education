const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { loader } = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        app: './js/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        // {
        // test: /\.css$/i,
        // use: [
        //     MiniCssExtractPlugin.loader,
        //     "css-loader"],
        // },
        {
            test: /\.(sass|scss)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(png|gif|jpg|jpeg|jfif)/,
            use: ["file-loader"],
        },
        ]
    },
    devServer: {
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // app: "../static/index.html",
            // filename: "index.html",
        }),
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     // chunkFilename: "[id].css"
        // })

    ],
}
