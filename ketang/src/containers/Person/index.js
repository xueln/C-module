/**
 * Created by xueln on 2017/11/14.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux'
class Personal extends Component{
    render(){
        return (
            <div className="person">
                <div className="photo">
                    <img src={require('../../images/profile.png')}/>
                    {this.props.user?<span className="name" >{this.props.user}</span>: <Link to="/login">登录</Link>}

                </div>
                <div className="aboutme"></div>
            </div>
        )
    }
}
export default connect(state=>state.session)(Personal)