/**
 * Created by xueln on 2017/11/14.
 */
import React,{Component} from 'react';
import ReactSwipe from 'react-swipe'
import './index.less'
export default class Home extends Component{
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    render(){
        let swipeOptions={
            continuous:true,
            auto:600,
            callback:(index)=>{
                this.setState({
                    index
                })
            }
        }
        return (
            <div className="carousel-wrapper">
                {this.props.slider.length>0?<ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                        {this.props.slider.map((item,index)=>{
                            return <div key={index}><img src={item}/></div>
                        })}

                    </ReactSwipe>:null}
                <ul className="dot">
                    {this.props.slider.map((item,index)=>{
                        return <li key={index} className={index==this.state.index?'active':''}></li>
                    })}
                </ul>
            </div>
        )
    }
}