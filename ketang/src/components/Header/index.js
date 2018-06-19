/**
 * Created by xueln on 2017/11/16.
 */
import React,{Component} from 'react';
import './index.less'
export default class Header extends Component{
    render(){
        return (
            <div className="navbar">
                <i className="iconfont icon-fanhui"></i>
                <span>{this.props.title}</span>

            </div>
        )
    }
}