/**
 * Created by xueln on 2017/10/29.
 */
let express =require('express');
let app=express();
let router=express.Router();
let path=require('path');
let fs=require('fs');
router.get('/signup',function(req,res){
    res.clearCookie('status')
    res.render('./index',{action:'登录',info:req.cookies.status})
})
router.post('/signup',function(req,res){
    let user=req.body;
    fs.readFile(path.resolve('db.json'),'utf8',function(err,data){
       let exist= JSON.parse(data).some(item=>item.name==user.name && item.psw==user.psw);
       if(exist){
           res.redirect('/welcome')
       }else{
           res.cookie('status','用户名或密码错误')
           res.redirect('back')
       }
    })
})
module.exports=router