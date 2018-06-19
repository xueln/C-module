/**
 * Created by xueln on 2017/11/9.
 */
import {createStore,combineReducers} from 'redux'//combineReducers

import Counter from './reducers/counter'
import Todo from './reducers/todo'

// function combineReducers(obj){
//
//     return function(state={},action){
//         let result={};
//         for(let attr in obj){
//             result[attr]=obj[attr](state[attr],action)
//         }
//         return result;
//     }
// }
let reducer=combineReducers({
    Counter,
    Todo
})
let store=createStore(reducer)

export default store;