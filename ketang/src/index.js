/**
 * Created by xueln on 2017/11/14.
 */
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import App from './containers/App/index.js'
import {Provider} from 'react-redux'
import store from './store/index'
ReactDOM.render(<Provider store={store}>
    <App/></Provider>,document.querySelector('#app'))
