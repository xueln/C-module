import React,{Component} from 'react';
import './index.less'
export default class LessonList extends Component{
    componentDidMount(){

    }
    constructor(){
        super();

    }

    render(){
        return (
            <div className="lessonlist">
                <h2><i className="iconfont icon-book"></i><span>全部美食</span></h2>
                <ul className="lesson">
                    {this.props.lessons.list.map((item,index)=>(<li key={index}>
                        <p className="title">{item.title}</p>
                        <img src={item.url}/>
                        <p className="price">{item.price}</p>

                    </li>))}
                </ul>
                <p className="more" onClick={this.props.loadMore}>{this.props.lessons.loading?'加载中':this.props.lessons.hasMore?'加载更多':'我是有底线的'}</p>
            </div>
        )
    }
}