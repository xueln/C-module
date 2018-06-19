/**
 * Created by xueln on 2017/11/9.
 */
import React,{Component} from 'react'

import store from './store/index'

import actions from './store/action-creator'

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

    render(){
        return (
            <div>
                <input type="text" onKeyDown={(e)=>{if(e.keyCode==13)actions.addList(e)}}/>
                <ul>
                    {
                        this.state.todos.map((item,index)=>{
                            return <li key={index}>{item}<button onClick={()=>{actions.delete(index)}}>删除</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
