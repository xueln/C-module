/**
 * Created by xueln on 2017/11/11.
 */
import React,{Component} from 'react';

import CommentInput from './commentinput'
import CommentList from './commentlist'

import 'bootstrap/dist/css/bootstrap.css'

export default class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            lists:[]
        }
    }
    add=(content)=>{
        content.id=this.state.lists.length+1;
        this.setState({
            lists:[...this.state.lists,content]
        })
        console.log(this.state.lists)
    }
    del=(id)=>{
        this.setState({
            lists:this.state.lists.filter(item=>item.id!=id)
        })
    }
    render(){
        return <div className="container">
            <div className="row col-md-6 col-md-offset-3 panel-group">
                <div className="panel-heading">
                    <h3 className="text-center">留言板</h3>
                </div>
                <div className="panel-body">
                    <CommentList list={this.state.lists} fn={this.del}/>
                </div>
                <div className="panel-footer">
                    <CommentInput fn={this.add}/>

                </div>


            </div>

        </div>
    }
}
