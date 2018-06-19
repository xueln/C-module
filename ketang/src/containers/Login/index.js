/**
 * Created by xueln on 2017/11/16.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
import Header from '../../components/Header/index'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
import Tip from '../../components/Tip/index'
 class Login extends Component{
    log=(e)=>{
        e.preventDefault()
        let tel=this.tel.value;
        let psw=this.psw.value;
        this.props.log({tel,psw})
    }
    render(){
        return (
            <div className="login-panel">
                <Header title="登录"></Header>
                <div className="login-logo"></div>
                <form className="login-form" onSubmit={this.log}>
                    <input placeholder="手机号" required ref={input=>this.tel=input}/>
                    <input placeholder="密码" required ref={input=>this.psw=input}/>

                    <Link to="/register">注册</Link>
                    <input type="submit" value="登录" className="log"/>
                    <Link to="/forget" >忘记密码</Link>

                </form>
                <Tip {...this.props}/>

            </div>
        )
    }
}
export default connect(state=>state.session,actions)(Login)