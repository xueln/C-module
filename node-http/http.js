/**
 * Created by xueln on 2017/10/22.
 */
let http=require('http');
let server=http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url)
    res.setHeader('content-type','text/plain;charset=utf-8')
    res.write('中文');

    res.end('--end')
});
server.listen(3020,function(){
    console.log('开启')
});//windows3000以上 mac1000以上