/**
 * Created by xueln on 2017/11/11.
 */
import React,{Component} from 'react';

import CommentInput from './commentinput'
import CommentList from './commentlist'

import 'bootstrap/dist/css/bootstrap.css'

import store from '../store/index'
import actions from '../store/action-creator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

@connect(state=>state,actions)
export default class CommentApp extends Component{
    constructor(){
        super();

    }
    add=(content)=>{
        let newContent=content;
        newContent.id=store.getState().lists.length+1;
        this.props.add(newContent)


    }
    del=(id)=>{
      this.props.del(id)

    }

    render(){
        return <div className="container">
            <div className="row col-md-6 col-md-offset-3 panel-group">
                <div className="panel-heading">
                    <h3 className="text-center">留言板  react-redux版</h3>
                </div>
                <div className="panel-body">
                    <CommentList list={this.props.lists} fn={this.del} />
                </div>
                <div className="panel-footer">
                    <CommentInput fn={this.add}/>

                </div>


            </div>

        </div>
    }
}
// function mapStateToProps(state){
//     return state
// }
// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actions,dispatch)
// }

