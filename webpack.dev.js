const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack'); // for hot module replacement
const path = require('path');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        port: 8080,
        historyApiFallback: true,
        proxy: {
            "/": "http://localhost:8080/dist/index.html",
            "/profile" : "http://localhost:8080/dist/profile.html"
        },
        publicPath : "/"
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});