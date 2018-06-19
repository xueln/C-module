/**
 * Created by xueln on 2017/10/22.
 */
let http=require('http');
let fs=require('fs');
let mime=require('mime');
let url=require('url')
let server=http.createServer(function(req,res){
    let {pathname,query}=url.parse(req.url,true);

    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else{
        if(fs.existsSync('.'+pathname)){
            res.setHeader('content-type',mime.getType(pathname)+';charset=utf-8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.end('not found')
        }

    }


});
server.listen(3000,function(){
    console.log('开启')
});