/**
 * Created by xueln on 2017/11/9.
 */
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Todos from './todo'
import Counter from './counter'

class Page extends Component{
    render(){
        return (<div>
            <Todos/>
            <Counter/>
        </div>)
    }
}
ReactDOM.render(<Page/>,document.querySelector('#root'))