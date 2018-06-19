
let http=require('http');
let url=require('url');
let sliders=require('./db/sliders.js');
let fs=require('fs')
function getBook(cb){
    fs.readFile('./db/book.json','utf-8',function(err,data){
        if(err || data.length==0){
            cb([]);
        }else{
            cb(JSON.parse(data))
        }
    })
}
function writeBook(item,callback){

  fs.writeFile('./db/book.json',JSON.stringify(item),callback)
}
http.createServer(function(req,res){

  let {pathname,query}=url.parse(req.url,true);
  if(pathname=='/api/sliders'){
    res.end(JSON.stringify(sliders));
  }else if(pathname=='/api/hot'){
    getBook(function(data){
      res.end(JSON.stringify(data.reverse().slice(0,6)))
    })


  }else if(pathname=='/api/book'){
    let id=parseInt(query.id);
    switch(req.method){
      case 'GET':
        if(id){
          getBook(function(data){
            let newData=data.find(item =>{
              return item.id==id
            })
            let result={newData}
            if(newData){
              result.err=0
            }else{
              result.err=1;
            }

            res.end(JSON.stringify(result))
          })
        }else{
          getBook(function(data){
            res.end(JSON.stringify(data.reverse()))
          })
        };
        break;
      case 'POST':
        let str='';
        req.on('data',function(chunk){
          str+=chunk;

        })
        req.on('end',function(){

          let book=JSON.parse(str);

          getBook(function(data){

            let newid=data.length?++data[data.length-1].id:1;
            book.id=newid;

            writeBook(data.concat(book),function(){
              res.end(JSON.stringify(book));
            })

          })
        })

        ;break;
      case 'DELETE':
        if(id){

          getBook(function(data){


            data= data.filter(item=>{
              return item.id !=id
            });

            writeBook(data,function(){
              res.end(JSON.stringify({}))
            })
          })
        }else{

        }
        ;break;
      case 'PUT':


        let strr='';
        req.on('data',function(chunk){
          strr+=chunk;
        })

        req.on('end',function(){
          console.log(strr)
          let updateItem=JSON.parse(strr);
          getBook(function(data){
            data=data.map((item)=>{
              if(item.id==updateItem.id){
                console.log(updateItem);
                return updateItem;
              }else{
                return item
              }
            });
            writeBook(data,function(){
              res.end(JSON.stringify(updateItem))
            })
          })
        })

        ;break;
    }



  }


}).listen(6000,function(){
  console.log('开启')
});
