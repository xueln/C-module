/**
 * Created by xueln on 2017/10/17.
 */


function Girl(){
    this._event={};
}
Girl.prototype.on=function(eventname,callback){
    if(this._event[eventname]){
        this._event[eventname].push(callback)
    }else{
        this._event[eventname]=[callback]
    }
}
Girl.prototype.emit=function(eventname,...args){
    if(this._event[eventname]){
        this._event[eventname].forEach(cb=>cb(...args))
    }
}
Girl.prototype.remove=function(eventname,callback){
    if(this._event[eventname]){
        this._event[eventname].filter(cb=>cb!==callback);
    }



}
let girl =new Girl();
let shopping=function(who){
    console.log(who+'购物购物')
}
let cry=function(who,why,when){
    console.log(who+"哭"+","+why+"，频率"+when)
}
//girl.on('女生失恋',shopping);
girl.remove('女生失恋',shopping)
girl.on('女生失恋',cry)

girl.emit('女生失恋','该女生','因为失恋','每天')