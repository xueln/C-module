/**
 * Created by xueln on 2017/11/15.
 */
/**
 * Created by xueln on 2017/11/15.
 */
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import promise from 'redux-promise'


let initialstate=0;
let reducer=(state=initialstate,action)=>{
    switch(action.type){
        case 'ADD':return state+action.payload||1;
        default:return state;
    }
}
let store =createStore(reducer,applyMiddleware(promise,logger));
let TASK=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){

            resolve({type:'ADD'})
        }else{
            reject({type:'ADD'})

        }
    },3000)
})
let TASK1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true){

            resolve(3)
        }else{
            reject({type:'ADD'})

        }
    },3000)
})

store.dispatch(
 TASK
)
store.dispatch(
    {
        type:'ADD',
        payload:TASK1
    }
)