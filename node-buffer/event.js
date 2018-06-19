/**
 * Created by xueln on 2017/10/22.
 */
let events=require('events');
let util=require('util');
function Girl(){

}
util.inherits(Girl,events);
let girl=new Girl();
function shopping(data){
    console.log(data)
}
girl.on('女生失恋',shopping);
girl.once('女生失恋',shopping);
girl.removeListener('女生失恋',shopping)
girl.emit('女生失恋','232312');
