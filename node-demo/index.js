let result=require ('./dialog.js');
let sum=require('./sum.js');
// let lina=require('lina')
// console.log(lina)
let Dl=new result()
Dl.create();
Dl.fn();

console.log(sum)
console.log(sum(1,2,3));

console.log('23y2u3y2u3g');
console.log(this)

// (function(){
//     console.log(this)
// })()
console.time('start')
for(let a=0;a<1000000000;a++){

}
console.timeEnd('start');

//console.log(process.env);
if(process.env.NODE_ENV=='dev'){
    console.log('dev')
}else{
    console.log('build')
}
try{

}catch(e){

}


setTimeout(function(eat,food){
    console.log(eat,food)
},0,'3333','4444')


let str="我的npm安装包";

function Parent(){
    this.name="father"
}
Parent.prototype.eat=function(){
    console.log('eateat')
}
function Child(){

}

let util=require('util');
;
util.inherits(Child,Parent);
let child=new Child();
console.log( child.eat(),child.name);
let path=require('path');


module.exports=str;
