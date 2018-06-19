
let express =require('express');
let fs=require('fs');
let app=express();
let path=require('path')
let bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

function read(cal){
  fs.readFile('../mock/book.json',(err,data)=>{
    if(err){
      console.log(err)
    }
    let objData=JSON.parse(data)
    cal(objData);

  })
}
function write(input,cal){
  fs.writeFile('../mock/book.json',JSON.stringify(input),(data)=>{
    cal()
  })
}
app.get('/book',function(req,res){
  if(req.query.id){
    read(function(data){
      res.send(data.find(item=>item.id==req.query.id))
    })

  }else{
    res.sendFile(path.resolve('../mock/book.json'))
  }

})
app.put('/book',function(req,res){
  read(function(data){
    let newData=data.map(item=>{
      if(item.id==req.body.id){
        return req.body
      }else{
        return item
      }
    })
    write(newData,function(){
      res.send(req.body)
    })

  })
})
app.post('/book',function(req,res){
  read(function(objData){
    let addData=req.body;
    let newId=objData.length+1;
    addData.id=newId;
    objData.push(addData)
    write(objData,function(){
      res.send(addData)
    })

  })


})
app.delete('/book',function(req,res){
  read(function(objData){
    let newData=objData.filter(item=>item.id!=req.query.id);
    write(newData,function(){
      res.send(req.query.id)
    })
  })


})
app.listen(3040,function(){})
