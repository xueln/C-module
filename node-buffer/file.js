/**
 * Created by xueln on 2017/10/22.
 */
let fs=require('fs');
// let content=fs.readFileSync('1.txt','utf8');
// console.log(content);
//
// fs.readFile('1.txt','utf8',function(err,data){
//
//     console.log(data)
// })
// fs.readFile('2.txt','utf8',function(err,data){
//     console.log(data)
// });
// let p=new Promise((resolve,reject)=>{
//     resolve('我爱你');
//     reject('shibai')
//     // setTimeout(()=>{
//     //
//     // },2000)
// })
// p.then(function(data){
//     console.log(data)
// },function(data){
//     console.log(data)
// })


let read=require('./read.js');
// Promise.all([read('1.txt'),read('2.txt')]).then(([data1,data2])=>{
//     console.log(data1,data2)
// });
async function b(){
    let result=await Promise.all([read('1.txt'),read('2.txt')]);
    console.log(result)
}

// read('1.txt').then((data)=>{
//
//     return read(data)
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err)
// })
async function a(){
    let result1= await read('1.txt');
    let result2=await read('2.txt');
    console.log(result1,result2);
}
//a();
b();