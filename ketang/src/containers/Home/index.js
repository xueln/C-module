/**
 * Created by xueln on 2017/11/14.
 */
import React,{Component} from 'react';
import './index.less'
import HomeHeader from './HomeHeader/index'
import {connect} from 'react-redux'
import actions from '../../store/actions/home'
import Slider from './Slider/index'
import LessonList from './LessonList/index'
import {upPull,downPull} from '../../utils/utils'
class Home extends Component{
    componentDidMount(){
        this.props.getSlider();
	    this.props.getLessons();
        upPull(this.box,this.props.getLessons);
        downPull(this.box,this.props.refresh)
    }

    render(){

        return (
            <div>
                <HomeHeader lesson={this.props.currentLesson} setLesson={this.props.setLesson}></HomeHeader>
                <section className="main-container" ref={box=>this.box=box}>
                    <div><Slider slider={this.props.slider}/></div>
                    <div>
                        <LessonList lessons={this.props.lessons} loadMore={this.props.getLessons}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect((state)=>state.home,actions)(Home)