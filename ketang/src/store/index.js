/**
 * Created by xueln on 2017/11/14.
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import reducer from './reducers/index'
import {  routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createHashHistory'

const history = createHistory()
const middleware=routerMiddleware(history)

let store=createStore(reducer,applyMiddleware(thunk,promise,middleware,logger));
export default store;