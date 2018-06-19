let Server=require('ws').Server;
let server=new Server({port:'8080'});
server.on('connection',function(socket){
    socket.on('message',function(message){
        console.log(message)
        socket.send('服务器'+message)
    })
})