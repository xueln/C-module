/**
 * Created by xueln on 2017/10/29.
 */
let express =require('express');
let app=express();
let cookieParser=require('cookie-parser');


app.use(cookieParser());

app.get('/',function(req,res){
    let times=req.cookies.count||0;
    if(times==10){
        res.clearCookie('count');
        res.send('终止')

    }else{
        times++;
        res.cookie('count',times,{
            //domain:'a.zfpx.cn',
            path:'/read',
            expires:new Date(Date.now()+1000),
            maxAge:10000,
            httpOnly:true
        });
        res.send('欢迎第'+times+'次访问')
    }

})

app.listen(8080,function(){})