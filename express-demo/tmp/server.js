/**
 * Created by xueln on 2017/10/28.
 */
let express =require('express');
let path=require('path')
let app=express();

app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express)

app.get('/',function(req,res){

    res.render('./index',{title:'首页',users:[{
        id:1,
        name:'zzzz'
    },{
        id:2,
        name:'z3r4zzz'
    }],msg:'<h1>4545453</h1>'})
})
app.listen(8080,function(){})