/**
 * Created by xueln on 2017/11/11.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './components/commentapp'
import {Provider} from 'react-redux'
import store from './store/index'

ReactDOM.render(
    <Provider store={store}>
        <CommentApp/>
    </Provider>
   ,document.querySelector('#app'))