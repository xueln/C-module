/* 
* @Author: Marte
* @Date:   2017-10-13 11:43:08
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-13 17:40:23
*/
import {fn,str} from './a.js';
import '../css/index.css';
import '../css/style.less';
import pic from '../img/1.png'

console.log(str)
fn();
console.log('sdsdsjkdjsl')
let fn1=()=>{
    alert(1234398349839482093842935)
}
fn1();
let obj1={name:"xue"};
let obj2={key:"sss"}
console.log({...obj1,...obj2})

let oImg=document.createElement('img');
oImg.src=pic;
document.body.appendChild(oImg)
