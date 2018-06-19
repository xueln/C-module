/**
 * Created by xueln on 2017/11/11.
 */
import React,{Component} from 'react';
import Comment from './comment'
export default class CommentList extends Component{

    render(){
        return <ul>
            {this.props.list.map((item,index)=>{
            return <Comment key={index} item={item} fn={this.props.fn}/>
        })}

        </ul>
    }
}