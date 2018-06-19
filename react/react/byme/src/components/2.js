/**
 * Created by xueln on 2017/11/4.
 */
import React from './react'
import ReactDOM from './reactdom'

let ele=React.createElement('h1',{id:'title'},React.createElement('h2',{id:'t2'},'111hello') );
ReactDOM.render(ele,document.querySelector('#app'))