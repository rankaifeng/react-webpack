const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //用来清除上一次打包的文件目录的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//将css提取成单独的文件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //压缩css文件
const ProgressBarPlugin = require('progress-bar-webpack-plugin') //打包控制台进度提示
const webpackBaseConfig = require('./webpack.base');//webpack公用配置
const { merge } = require('webpack-merge'); //用于合并webpack配置
const webpackProConfig = {
    //模式
    mode: "production",
    //用于提高性能，可以进行代码分割，
    optimization: {
        //告知webpack使用 TerserPlugin 或其它在 optimization.minimizer 定义的插件压缩 bundle。
        minimize: true,
        //分割模块
        splitChunks: {
            chunks: 'all'
        },
        //允许你通过提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer)。
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    //所使用的插件
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            //输出的目录
            filename: 'css/[hash].css'
        }),
        new ProgressBarPlugin({
            format: 'build [:bar] :percent (:elapsed seconds)',
            clear: false,
            width: 60
        }),
    ],
    stats: 'errors-only',
    module: {
        rules: [
            {
                test: /.(le|c)ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    //不编译进dist的包，用于优化dist体积
    externals: {}
}
module.exports = merge(webpackBaseConfig, webpackProConfig);