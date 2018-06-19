/**
 * Created by xueln on 2017/10/29.
 */
let http=require('http');
http.createServer(function(req,res){
    let url=req.url;
    if(url=='/write'){
        res.setHeader('Set-Cookie','name=zzzz');
        res.end('ok')
    }else if(url=='/read'){
        let cookie=req.headers.cookie;
        res.end(cookie);
    }else{
        res.end('not')
    }
}).listen(8080)