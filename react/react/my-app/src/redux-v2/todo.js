/**
 * Created by xueln on 2017/11/9.
 */
import React,{Component} from 'react'

import store from './store/index'
import  * as types from './store/actionTypes.js'



export default class Todos extends Component{
    constructor(){
        super();
        this.state={
                todos:store.getState().Todo.todos
        }

    }
    componentDidMount(){
        this.unSubscribe=store.subscribe(()=>{
            this.setState(store.getState().Todo)
        })
    }
    componentWillUnmount(){
        this.unSubscribe();
    }
    addList=(e)=>{
        if(e.keyCode==13){
            store.dispatch({type:types.ADD_TODO,payload:e.target.value})
            e.target.value=''
        }
    }
    delete=(index)=>{
        store.dispatch({type:types.DEL_TODO,index:index})
    }
    render(){
        return (
            <div>
                <input type="text" onKeyDown={(e)=>{this.addList(e)}}/>
                <ul>
                    {
                        this.state.todos.map((item,index)=>{
                            return <li key={index}>{item}<button onClick={()=>{this.delete(index)}}>删除</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
