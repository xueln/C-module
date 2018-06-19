/**
 * Created by xueln on 2017/11/14.
 */
let express=require('express')
let app=express();
let bodyParser=require('body-parser')
let session=require('express-session')

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'1'
}))

app.use(bodyParser.json())

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost:9999')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE')
    res.header('Access-Control-Allow-Headers','Content-Type')
    res.header('Access-Control-Allow-Credentials','true')
    if(req.method=='OPTIONS'){
        res.end()
    }else{
        next()
    }
})
let sliders=require('./mock/slider')
let lessons=require('./mock/lessonList')
app.get('/slider',function(req,res){
    res.json(sliders)
})
app.get('/lessons',function(req,res){
    let oldLessons=JSON.parse(JSON.stringify(lessons))
    let{offset=0,limit=5}=req.query;

    for(let i=0;i<oldLessons.list.length;i++){
        let item=oldLessons.list[i]
        item.title=`${+offset+i+1}-${item.title}`
    }
    if(offset==10){
        oldLessons.hasMore=false;
    }
    setTimeout(function(){res.json(oldLessons)},3000)

})
let users=[];
app.post('/reg',function(req,res){
    let user=req.body;
    let same=users.some(item=>item.tel==user.tel)
    if(!same){
        users.push(user);
        res.json({code:0,suc:'注册成功',err:''})
    }else{
        res.json({code:1,err:'注册占用',suc:''})
    }

})
app.post('/log',function(req,res){
    let user=req.body;
    let member=users.some(item=>item.tel==user.tel&&item.psw==user.psw)
    if(member){
        req.session.user=user.tel;
       
        res.json({code:0,user:user.tel,suc:'登录成功',err:''})
    }else{
        res.json({code:1,err:'登录失败',suc:''})
    }
})
//判断
app.get('/validate',function(req,res){
    if(req.session.user){
        res.json({code:0,user:req.session.user})
    }else{
        res.json({code:1})
    }
})
app.listen(3033)