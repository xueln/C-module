/**
 * Created by xueln on 2017/11/14.
 */

let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./ware/2.js',
    output:{
        filename:'main.js',
        path:path.resolve('./dist')
    },
    module:{
        rules:[
            {test:/\.(js|jsx)$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif|bmp|svg|eot|woff2|ttf|woff)$/,use:'url-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
    ],
    devtool:'cheap-module-source-map'


}