/**
 * Created by xueln on 2017/11/15.
 */
let redux=require('redux');
console.log(redux)
let initialstate=0;
let reducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'ADD':return state+1;
        default:return state;
    }
}
let store =redux.createStore(reducer)
let old=store.dispatch;
store.dispatch=function(action){
    console.log('lao',store.getState());
    old(action);
    console.log('new',store.getState())
}

store.dispatch({type:'ADD'})
