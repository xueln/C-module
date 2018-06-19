/**
 * Created by xueln on 2017/11/9.
 */
import React,{Component} from 'react';
import Counter from './counter'
import Todos from './todos'
export default class App extends Component{
    render(){
        return (
            <div>
                <p>计数器</p>
                <Counter/>
                <hr>
                </hr>
                <p>todolist</p>
                <Todos/>
            </div>
        )
    }
}