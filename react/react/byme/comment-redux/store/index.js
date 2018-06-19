/**
 * Created by xueln on 2017/11/11.
 */
import {createStore} from 'redux';
import reducer from './reducers/index'
let store=createStore(reducer)
export default store;