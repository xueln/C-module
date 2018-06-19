/**
 * Created by xueln on 2017/10/28.
 */
let express =require('express');
let path=require('path')
let app=express();
console.log(app)
app.use('/assets',express.static(path.resolve('assets')));
app.get('/baidu',function (req,res) {

    res.redirect('http://www.baidu.com')
})
app.listen(8080,function(){})


function static(rootpath,req,res){

    let realpath=rootpath+req.path
    res.sendFile(realpath)

}