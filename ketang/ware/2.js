/**
 * Created by xueln on 2017/11/15.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



let initState={
    loading:'',
    data:'',
    err:''
}
const FETCH_START='FETCH_START';
const FETCH_SUCCESS='FETCH_SUCCESS';
const FETCH_ERROR='FETCH_ERROR';
let reducer=(state=initState,action)=>{
    switch(action.type){
        case 'FETCH_START':return {loading:'加载中...',data:'',err:''};
        case 'FETCH_SUCCESS':return {loading:'',data:action.payload,err:''}
        case 'FETCH_ERROR':return {loading:'',data:'',err:action.payload}
        default:return state;
    }
}
let store=createStore(reducer,applyMiddleware(thunk,promise,logger))


let task=new Promise((resolve,reject)=>{
    resolve({type:FETCH_START});


})
let task2=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>.5){
            // new Promise(()=>{
            //
            // })
            resolve({type:FETCH_SUCCESS,payload:'chenggong'})
        }else{
            resolve({type:FETCH_ERROR,payload:'shibai'})
        }
    },2000)});

class Panel extends Component{
	constructor(){
        super();
        this.state={

        }
    }
    load=()=>{
	
		store.dispatch(function(dispatch){
            dispatch({type:FETCH_START});
            setTimeout(()=>{
                if(Math.random()>.5){
                    dispatch({type:FETCH_SUCCESS,payload:'chenggong'})
                }else{
                    dispatch({type:FETCH_ERROR,payload:'shibai'})
                }

            },2000)


        }

        )
	}
	loaded=()=>{
        store.dispatch(task)
        store.dispatch(task2)
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render(){
        let{loading,data,err}=store.getState();
        return (
            <div>
                    <p>{loading}{data}{err}</p>
                <button onClick={this.loaded}>加载</button>
            </div>
        )
    }
}
ReactDOM.render(<Panel/>,document.querySelector('#app'))