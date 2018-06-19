/**
 * Created by xueln on 2017/11/9.
 */
import React,{Component} from 'react';

import {connect} from 'react-redux'


import actions from '../store/actions'
class Counter extends Component{
    constructor(){
        super();

    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.sub}>-</button>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{

    return state.counter
}

export default connect(mapStateToProps,actions)(Counter)


