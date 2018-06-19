/**
 * Created by xueln on 2017/10/22.
 */
let fs=require('fs');
let rs=fs.createReadStream('1.txt',{highWaterMark:4});

rs.on('data',function(chunk){


    if(! ws.write(chunk)){
        rs.pause();
    }
    ws.on('drain',function(){
        rs.resume();
    });
   // console.log(chunk);
    // setTimeout(function(){
    //     rs.resume();
    // },1000)

});
rs.on('end',function(){
    ws.end();

});


let ws=fs.createWriteStream('3.txt',{highWaterMark:1});
// let flag=ws.write('字符3462ui4wewkehwkjehw3yu');
// ws.on('drain',function(){
//     console.log('t')
// });
// console.log(flag)
// ws.end('----end');

