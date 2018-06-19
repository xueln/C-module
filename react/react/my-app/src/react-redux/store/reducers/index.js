/**
 * Created by xueln on 2017/11/9.
 */
import {combineReducers} from 'redux'
import counter from './counter'
import todo from './todo'
export default combineReducers({
    counter,
    todo
})