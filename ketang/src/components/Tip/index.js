/**
 * Created by xueln on 2017/11/16.
 */
import React,{Component} from 'react';
import './index.less'
export default class Tip extends Component{
    render(){
        return (
            <div className="msg">{
                (this.props.err&&<span className="err">{this.props.err}</span>)||(this.props.suc&&<span className="suc">用户{this.props.user}{this.props.suc}</span>)
            }</div>
        )
    }
}