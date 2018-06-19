/**
 * Created by xueln on 2017/11/15.
 */
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
// let redux=require('redux');
// let {createStore,applyMiddleware}=redux;
//let logger=require('redux-logger');

let initialstate=0;
let reducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'ADD':return state+1;
        default:return state;
    }
}
let store =createStore(reducer,applyMiddleware(thunk,logger))
store.dispatch((dispatch)=>{
    setTimeout(()=>{
        dispatch({type:'ADD'})
    },3000)
})