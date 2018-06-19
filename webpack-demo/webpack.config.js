
let path=require('path');
let HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports={

    entry:'./src/js/main.js',
    output:{
        filename:'build.js',
        path:path.resolve('./dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules/'},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'

        })
    ]

}