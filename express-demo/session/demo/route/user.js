/**
 * Created by xueln on 2017/10/29.
 */
let express =require('express');
let app=express();
let router=express.Router();
let path=require('path');
let fs=require('fs');



router.get('/signin',function(req,res){
    res.clearCookie('connect.sid')
    res.render('./index',{action:'注册',info:req.session.status})

})
router.post('/signin',function(req,res){
    let user=req.body;
    let arr=[];
    console.log(user)
    fs.readFile('./db.json','utf8',function(err,data){
        if(err){
            console.log(err)
        }
        console.log(data)
        let exist=JSON.parse(data).some(item=>item.name==user.name)
        if(exist){
            req.session.status='用户名被占用'
            res.redirect('back')


        }else {

            arr.push(user)
            fs.writeFile(path.resolve('db.json'),JSON.stringify(arr),function(){
                res.redirect('/user/signup')
            })

        }
    })




})
router.get('/signup',function(req,res){
    res.clearCookie('connect.sid')
    res.render('./index',{action:'登录',info:req.session.status})
})
router.post('/signup',function(req,res){
    let user=req.body;
    fs.readFile(path.resolve('db.json'),'utf8',function(err,data){
        let exist= JSON.parse(data).some(item=>item.name==user.name && item.psw==user.psw);
        if(exist){
            req.session.user=user.name
            res.redirect('/welcome')
        }else{
            req.session.status='用户名或密码错误'
            res.redirect('back')
        }
    })
})

router.get('/private',function(req,res){
    req.session.user?res.render('./private'):res.redirect('/user/signup')
})
module.exports=router