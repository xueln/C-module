/**
 * Created by xueln on 2017/11/9.
 */
import React,{Component} from 'react';

import {connect} from 'react-redux'

import * as types from '../store/action-types'

class Todos extends Component{
    constructor(){
        super();

    }
    add=(e)=>{
        if(e.keyCode==13) {
            this.props.addList(e.target.value)
            e.target.value=''
        }
    }
    render(){

        return (
            <div>
                <input type="text" onKeyDown={this.add}/>
                <ul>
                    {
                        this.props.todos.map((item,index)=>{
                            return <li key={index}>{item}<button onClick={()=>this.props.delList(index)}>删除</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{

    return state.todo
}
let mapDispatchToProps=(dispatch)=>{
    return {
        addList:(payload)=>dispatch({type:types.ADD_TODO,payload}),
        delList:(index)=>dispatch({type:types.DEL_TODO,index})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos)