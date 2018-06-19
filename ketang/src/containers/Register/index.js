/**
 * Created by xueln on 2017/11/16.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.less'
import Header from '../../components/Header/index'
import actions from '../../store/actions/session'
import Tip from '../../components/Tip/index'
class Register extends Component{
    reg=(e)=>{
        e.preventDefault();
        let tel=this.tel.value;
        let very=this.very.value;
        let psw=this.psw.value;
        this.props.reg({tel,very,psw})
    }
    render(){
        return (
            <div className="login-panel">
                <Header title="注册"></Header>
                <div className="login-logo"></div>
                <form className="login-form" onSubmit={this.reg}>
                    <input placeholder="姓名选填"/>
                    <input placeholder="手机号" required ref={input=>this.tel=input}/>
                    <input placeholder="验证码" ref={input=>this.very=input} required className="fill-verify"/><button className="verify">发送验证码</button>
                    <input placeholder="密码" required ref={input=>this.psw=input}/>
                    <input type="checkbox" className="agree" required/><span>同意</span>
                    <input type="submit" value="注册" className="reg"/>

                </form>
                <Tip {...this.props}/>
            </div>
        )
    }
}
export default connect(state=>state.session,actions)(Register)