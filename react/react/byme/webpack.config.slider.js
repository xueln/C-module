/**
 * Created by xueln on 2017/11/4.
 */

let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./app/index.js',
    output:{
        path:path.resolve('build'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.jsx?$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif|bmp)$/,use:'url-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    devtool:'cheap-module-source-map'
}