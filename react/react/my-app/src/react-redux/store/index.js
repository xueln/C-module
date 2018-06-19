/**
 * Created by xueln on 2017/11/9.
 */
import {createStore} from 'redux'
import reducers from './reducers/index'

let store =createStore(reducers)
export default store;