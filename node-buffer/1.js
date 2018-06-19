/**
 * Created by xueln on 2017/10/22.
 */

// var b=new Buffer(12);
var buff1=new Buffer('珠峰');
var buff2=new Buffer('培训');
// buff1.copy(b,0,0,buff1.length);
// buff2.copy(b,buff1.length,0,buff2.length);
// console.log(b);
// console.log(b.toString());

Buffer.myCancat=function(list,totalLength){

    if(totalLength){

        var Length=0;
        for(var i=0;i<list.length;i++){

            list[i].copy(big,Length);
            Length+=list[i].length;
        };
        if(totalLength>big.length){
            big=big.splice(0,big.length);
        }
        return big
    }else{
        var totalLength=0;
        for(var i=0;i<list.length;i++){
            totalLength+=list[i].length;
        };
        var big=new Buffer(totalLength);
        var Length=0;
        for(var i=0;i<list.length;i++){
            list[i].copy(big,Length);
            Length+=list[i].length;
        };
        return big
    }
    var big=new Buffer(totalLength);



};
console.log(Buffer.myCancat([buff1,buff2]).toString());