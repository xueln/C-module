/**
 * Created by xueln on 2017/10/28.
 */
let express =require('express');
let router=express.Router();
router.get('/signup',(req,res)=>{
    res.send('注册')
})
router.post('/signup',(req,res)=>{
    res.send('提交注册')
})
router.get('/signin',(req,res)=>{
    res.send('登录')
})
router.post('/signin',(req,res)=>{
    res.send('提交登录')
})
module.exports=router;

