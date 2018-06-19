/**
 * Created by xueln on 2017/10/29.
 */

let express =require('express');
let app=express();
let router=express.Router();

router.get('/welcome',function(req,res){
    res.render('./welcome',{user:req.session.user})
})
module.exports=router;