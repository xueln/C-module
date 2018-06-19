/**
 * Created by xueln on 2017/10/29.
 */
let express =require('express');
let app=express();
let router=express.Router();
let path=require('path');
let fs=require('fs');



router.get('/signin',function(req,res){
    res.clearCookie('status')
    res.render('./index',{action:'注册',info:req.cookies.status})

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
            res.cookie('status','用户名被占用')
            res.redirect('back')


        }else {

            arr.push(user)
            fs.writeFile(path.resolve('db.json'),JSON.stringify(arr),function(){
                res.redirect('/user/signup')
            })

        }
    })




})
module.exports=router