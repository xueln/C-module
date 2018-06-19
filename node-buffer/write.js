/**
 * Created by xueln on 2017/10/22.
 */
let fs=require('fs');
fs.writeFileSync('1.txt',99999);
fs.writeFile('1.txt',88888,function(err){

});