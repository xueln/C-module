/**
 * Created by xueln on 2017/10/28.
 */

let express =require('express');
let fs=require('fs')
let app=express();

app.get('/signin',function(req,res){
    res.setHeader('content-type','text/html;charset=utf-8');
    fs.createReadStream('signin.html').pipe(res);
})
app.post('/signin',function(req,res){
    res.setHeader('content-type','text/html;charset=utf-8');
    res.end('提交登录')
})
app.get('/signup',function(req,res){
    res.setHeader('content-type','text/html;charset=utf-8');
    fs.createReadStream('signup.html').pipe(res);

    console.log(req.path);
    console.log(req.query)


})
app.post('/signup',function(req,res){
    res.setHeader('content-type','text/html;charset=utf-8');//res.header()
    let str=''
    req.on('data',function(chunk){
        str+=chunk
    })
    req.on('end',function(){
        res.end(str)
    })

})

app.get('/users/:id/:name',function(req,res){
    let result=req.id+req.name
   res.end( result.toString());
})
app.param('id',function(req,res,next,id){
    req.id=Number(id);
    next();
})
app.param('name',function(req,res,next,name){
    req.name=Number(name);
    next();
})
app.put('/user',function(req,res){
    res.end('put')
})
app.delete('/user',function(req,res){
    res.end('delete')
})
app.all('*',function(){
    res.end('404页面不存在')
})

app.listen(8070,function(){
    console.log('开启')
})