/**
 * Created by xueln on 2017/11/14.
 */
import React,{Component} from 'react';
import './index.less'
import {Route} from 'react-router-dom'
import Home from '../Home/index.js';
import Lesson from '../Lesson/index.js'
import Personal from '../Person/index.js'
import Footer from  '../../components/Footer/index.js'
import Login from '../Login/index'
import Register from '../Register/index'

import { ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createHashHistory'
const history = createHistory()

export default class App extends Component{
    render(){
        return (
            <div>
                <ConnectedRouter history={history}>
                    <div>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/lesson" component={Lesson}></Route>
                        <Route path="/person" component={Personal}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Footer/>
                    </div>

                </ConnectedRouter>

            </div>
        )
    }
}