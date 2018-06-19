let express =require('express');
let {MsgModel}=require('./model')
let path =require('path')
let http=require('http')
let app=express();
app.get('/',function(req,res){
    res.sendFile(path.resolve('index.html'))
})
let server=http.createServer(app)
let io=require('socket.io')(server);
io.on('connection',function(socket){
    socket.on('message',function(msg){
        // socket.send('服务器回应'+data)
        MsgModel.create({msg},function(err,doc){
            io.emit('message',doc)
        })
       
    })
    socket.on('getAll',function(){
        MsgModel.find().sort({time:-1}).limit(10).exec(function(err,doc){
            io.emit('all',doc)
        })
    })
})
server.listen(8081)