/**
 * Created by xueln on 2017/11/11.
 */
import React,{Component} from 'react';


export default class CommentInput extends Component{
    add=(e)=>{

        let time=new Date().toLocaleString();
        let list={title:this.title.value,content:this.content.value,time}

        this.props.fn(list)

        this.content.value=''
        e.preventDefault();
    }
    render(){
        return <form className="form-horizontal" onSubmit={this.add} action="">
                    <div className="form-group">
                        <label htmlFor="" className="control-label col-md-3">用户名</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" ref={value=>this.title=value} required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="control-label col-md-3">发布内容</label>
                        <div className="col-md-9">
                            <textarea  className="form-control" ref={dom=>this.content=dom} required></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-8 col-md-offset-5">
                            <input type="submit" className="btn btn-primary" />
                        </div>
                    </div>

                </form>
    }
}