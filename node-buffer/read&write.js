/**
 * Created by xueln on 2017/10/22.
 */
let fs=require('fs');
function copySync(addr,target){
    let content=fs.readFileSync(addr,'utf8');
    fs.writeFileSync(target,content)
}
function copy(addr,target){
    fs.readFile(addr,'utf8',function(err,data){
        if(err) return ;
        fs.writeFile(target,data,function(err){

        })
    })
}
//copySync('2.txt','1.txt');
copy('2.txt','1.txt')