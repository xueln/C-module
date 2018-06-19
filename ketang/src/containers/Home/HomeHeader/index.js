/**
 * Created by xueln on 2017/11/14.
 */
import React,{Component} from 'react';
import './index.less'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    toggle=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    choose=(e)=>{

        this.props.setLesson(e.target.dataset.id)

    }
    getMenu=()=>(

       <TransitionGroup className="menu-list">
            <CSSTransition timeout={1000} classNames="fade">
                <ul onClick={this.choose}>

                    <li data-id="1" className={this.props.lesson==1?'active':''}>湘菜</li>
                    <li data-id="2" className={this.props.lesson==2?'active':''}>东北菜</li>
                    <li data-id="3" className={this.props.lesson==3?'active':''}>西餐</li>
                </ul>
            </CSSTransition>
         </TransitionGroup>
    )


    render(){

        return (
            <div className="header">
               
                <div className="ico" onClick={this.toggle}>
                    {this.state.show?<i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>}

                </div>
                {this.state.show?this.getMenu():null}

            </div>
        )
    }
}