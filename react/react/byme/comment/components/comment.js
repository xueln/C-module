/**
 * Created by xueln on 2017/11/11.
 */
import React,{Component} from 'react';

export default class Comment extends Component{
    delete=(id)=>{
        this.props.fn(id)
    }
    render(){
        let {id,title,content,time}=this.props.item;
        return <li className="list-group-item" id={id}>{title}:{content} <span className="glyphicon-time">{time}</span><span className="btn btn-danger" onClick={()=>this.delete(id)}>x</span></li>
    }
}