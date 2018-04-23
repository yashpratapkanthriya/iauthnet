const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack'); // for hot module replacement
module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});