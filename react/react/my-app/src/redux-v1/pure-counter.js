/**
 * Created by xueln on 2017/11/8.
 */
/**
 * Created by xueln on 2017/11/7.
 */
import React,{Component} from 'react'

import ReactDOM from 'react-dom'
let initState=0;

let createStore=function(reducer){
    let state;
    let listeners=[];
    let getState=()=>state;
    let dispatch=(action)=>{
       state= reducer(state,action);
        listeners.forEach(item=>item())
    }
    let subscribe=(listener)=>{
        listeners.push(listener);

    }
    dispatch({})

    return {
        getState,
        dispatch,
        subscribe
    }
}
const ADD='ADD';
const SUB='SUB';

let reducer=(state=initState,action)=>{
    switch(action.type){
        case ADD:
            return state+1;break;
        case SUB:
            return state-1;break;
        default:return state;break;
    }
}
let store=createStore(reducer)
store.dispatch({type:ADD})
console.log(store.getState())
store.dispatch({type:ADD})
console.log(store.getState())
store.dispatch({type:ADD})
console.log(store.getState())

ReactDOM.render(<div></div>,document.querySelector('#root'))