/**
 * Created by xueln on 2017/11/11.
 */
import React,{Component} from 'react';
import moment from 'moment'
import 'moment/locale/zh-cn'
export default class Comment extends Component{
    delete=(id)=>{
        this.props.fn(id)
    }
    componentDidMount(){

    }
    render(){
        let {id,title,content,time}=this.props.item;
        content=content.replace(/`([^`]+)`/g,function () {
            return '<code>'+arguments[1]+'</code>'
        })
        return <li className="list-group-item" id={id}>
                    {title}:
                     <span dangerouslySetInnerHTML={{__html:content}}></span>
                    <span className="pull-right">{moment(time).fromNow()}</span>
                    <span className="btn btn-danger" onClick={()=>this.delete(id)}>删除</span>
                </li>
    }
}