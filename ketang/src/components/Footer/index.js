/**
 * Created by xueln on 2017/11/14.
 */
import React,{Component} from 'react';
import { NavLink } from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
 class Footer extends Component{
    componentDidMount(){
        this.props.validate()
    }
    render(){
        return (
            <nav className="tab">
                <NavLink to="/" exact>
                    <i className="iconfont icon-xingqiu"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/lesson">
                    <i className="iconfont icon-react"></i>
                    <span>我的口味</span>
                </NavLink>
                <NavLink to="/person">
                    <i className="iconfont icon-xiaolian"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}

export default connect(null,actions)(Footer)