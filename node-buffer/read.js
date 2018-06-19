/**
 * Created by xueln on 2017/10/22.
 */

let fs=require('fs');
function read(addr){
    return new Promise((resolve,reject)=>{
        fs.readFile(addr,'utf8',function(err,data){
            if(err) return reject(err);
            resolve(data);
        })
    })
};

module.exports=read;

