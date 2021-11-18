const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const resolve = p => path.resolve(__dirname, p);
module.exports = {
    //入口，告诉webpack起点是哪里，它会找到所有依赖并处理
    entry: resolve('../src/index.jsx'),
    //出口
    output: {
        //最终输出的的目录名称
        path: resolve('../dist'),
        //最终输出的文件名称
        filename: './js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', '.jsx'],//可以省略后缀名为js jsx json的文件
        alias: {
            "@": path.resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [
            {
                //匹配js或jsx类型的文件
                test: /.jsx?$/,
                //排除node_modules下的文件，因为node_module下的文件不用我们去处理，人家已经处理过了
                exclude: /node_modules/,
                //使用的loader
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            }
        ]
    },
    //所使用的插件
    plugins: [
        //生成html文件
        new HtmlWebpackPlugin({
            //使用html模板的目录
            template: resolve('../public/index.html'),
            //自动引入打包后的文件，默认值true
            inject: true
        }),
        //使用插件定义全局变量DEV
        new webpack.DefinePlugin({
            'process': JSON.stringify({
                env: 'development'
            })
        })
    ],
    node: {
        global: true
    },
}