/**
 * Created by xueln on 2017/11/8.
 */
import React,{Component} from 'react'

import store from './store/index'
import actions from './store/action-creator'


export default class Counter extends Component{
	constructor(){
		super()
	this.state={
		num:store.getState().Counter.num
		}

	}
	componentDidMount(){
		this.unSubscribe=store.subscribe(()=>{
			this.setState({
				num:store.getState().Counter.num
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
                <button onClick={()=>actions.add(parseFloat(this.input.value||1))}>+</button>
                <button onClick={()=>actions.sub(parseFloat(this.input.value||1))}>-</button>
            </div>
        )
    }
}
