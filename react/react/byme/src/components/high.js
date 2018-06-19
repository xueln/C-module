/**
 * Created by xueln on 2017/11/14.
 */
import React,{Component} from 'react';

export default (Input,name)=>{

    class Widthdata extends Component{
        constructor(){
            super();
            this.state={
                data:null
            }
        }
        componentDidMount(){
            ajax.get('/data/'+name,(data)=>{
                this.setState({data})
            })
        }
        render(){
            return (
                <div>
                    <Input data={this.state.data}/>
                </div>
            )
        }
    }
    return Widthdata;

}
