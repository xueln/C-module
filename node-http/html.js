/**
 * Created by xueln on 2017/10/22.
 */
let http=require('http');
let fs=require('fs')
let server=http.createServer(function(req,res){
    if(req.url=='/'){
        res.setHeader('content-type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else if(req.url=='/index.css'){
        res.setHeader('content-type','text/css;charset=utf-8');
        fs.createReadStream('index.css').pipe(res);
    }else{
        res.end('not found');
        res.statusCode=404;
    }


});
server.listen(3000,function(){
    console.log('开启')
});