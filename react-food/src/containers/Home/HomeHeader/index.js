import React, {Component} from 'react';
import './index.less'
import {CSSTransition,TransitionGroup} from 'react-transition-group';
export default class HomeHeader extends Component {
  constructor(){
    super();
    this.state = {showMenu:false};
  }
  render() {
    return (
      <div className="header">
        <img src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1511004314&di=5acda50541a12dd0de78d058a7fe564b&src=http://static.lagou.com/thumbnail_300x300/image1/M00/34/36/Cgo8PFWWQiaAfHi_AAGmtNxeJWY241.png?cc=0.8220333545468748'/>
        <div onClick={()=>this.setState({showMenu:!this.state.showMenu})}>
        {
          this.state.showMenu?<i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>
        }
          <TransitionGroup>
            {
              this.state.showMenu? <CSSTransition
                classNames="fade"
                timeout={500}
              ><ul className="menu-list">
                <li>东北菜</li>
                <li>广东菜</li>
                <li>西餐</li>
                <li>湘菜</li>
              </ul></CSSTransition>:null
            }
          </TransitionGroup>
        </div>

      </div>
    )
  }
}