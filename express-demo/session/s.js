/**
 * Created by xueln on 2017/10/29.
 */
let express =require('express');
let app=express();
let session=require('express-session')
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'1',
    cookie:{
        httpOnly:false,
        maxAge:1000
    }

}))
app.get('/visit',function(req,res){
    let times=req.session.count||0;
    req.session.count=++times;
    console.log(times)
    res.send(times+'')
})


app.listen(8080,function(){})