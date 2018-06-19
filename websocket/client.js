let Websocket=require('ws')
let socket=new Websocket('ws://localhost:8080')
socket.on('open',function(){
    console.log('succ客户端')
    socket.send('nihao')
})
socket.on('message',function(data){
    console.log(data)
})