const path = require("path");
const resolve = p => path.resolve(__dirname, p);
const webpackBaseConfig = require('./webpack.base');//webpack公用配置
const { merge } = require('webpack-merge'); //用于合并webpack配置
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpackDevConfig = {
    devtool: 'source-map',
    //模式
    mode: "development",
    stats: "errors-only",
    //开发服务器配置
    devServer: {
        static: {
            //目录
            directory: resolve('dist')
        },
        //为了解决刷新网页路由时显示 Cannot GET /
        historyApiFallback: true,
        //压缩
        compress: true,
        //热更新
        hot: true,
        //是否自动打开浏览器
        open: true,
        //端口号
        port: 3000
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:8000'],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
        })
    ]
}
const result = merge(webpackBaseConfig, webpackDevConfig)
module.exports = result;