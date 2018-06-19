/**
 * Created by xueln on 2017/11/8.
 */
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'

const ADD='ADD'
const SUB='SUB'
let initial={
	num:0
}
let reducer=(state=initial,action)=>{
	console.log(action)
	switch(action.type){
		case ADD:return {num:state.num+action.payload};
		case SUB:return {num:state.num-action.payload};
		default:return state
	}
}
let store =createStore(reducer)

function add(payload){
	return {
		type:ADD,
		payload
	}
}
function sub(payload){
    return {
        type:SUB,
        payload
    }
}
class Counter extends Component{
	constructor(){
		super()
	this.state={
		num:store.getState().num
		}

	}
	componentDidMount(){
		this.unSubscribe=store.subscribe(()=>{
			this.setState({
				num:store.getState().num
				})
		})
	}
	componentWillUnmount(){
        this.unSubscribe();
	}
    render(){
        return (
            <div>
                <p>{this.state.num}</p>
				<input type="text" ref={input=>this.input=input}/>
                <button onClick={()=>store.dispatch(add(parseFloat(this.input.value||1)))}>+</button>
                <button onClick={()=>store.dispatch(sub(parseFloat(this.input.value||1)))}>-</button>
            </div>
        )
    }
}

ReactDOM.render(<div><Counter></Counter><Counter></Counter></div>,document.querySelector('#root'))