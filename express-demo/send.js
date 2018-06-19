/**
 * Created by xueln on 2017/10/28.
 */
let express =require('express');
let app=express();
let path=require('path')
let users=[{id:4,name:'444'}];

app.get('/users',function(req,res){
    res.sendFile(path.resolve('./tsconfig.json'))
    //res.sendFile('./tsconfig.json',{root:__dirname})
    //res.json(users)
   // res.status(404)
    res.sendStatus(404)
})
app.listen(8080,function(){})