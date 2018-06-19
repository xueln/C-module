/**
 * Created by xueln on 2017/10/28.
 */
let express =require('express');
let router=express.Router();
router.post('/add',(req,res)=>{
    res.send('增加文章')
})
router.delete('/delete',(req,res)=>{
    res.send('删除文章')
})
module.exports=router;