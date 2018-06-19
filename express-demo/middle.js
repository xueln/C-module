/**
 * Created by xueln on 2017/10/28.
 */
let express =require('express');
let app=express();
let fs=require('fs');
app.use(function(req,res,next){
    console.log('中间1')

    fs.readFile('tsconfig.json','utf8',function(err,data){
        if(err){
            next(err)
        }else{
            req.msg=data;
            next();
        }
    })

})
app.use(function(req,res,next){
    console.log(req.path);
    console.log(req.method)

    next();
})
app.use(function(err,req,res,next){
    console.error(err);
    next()
})
app.get('/',function(req,res){
    res.send('首页')
})
app.get('/users',function(req,res){
    res.send('用户管理')
})

app.listen(8080,function(){})