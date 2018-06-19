/**
 * Created by xueln on 2017/11/9.
 */
import  * as types from './actionTypes.js'
import store from './index'
import {bindActionCreators} from 'redux'

let actionCreators=bindActionCreators({
    add(payload){
        return {
            type:types.ADD,
            payload
        }
    },
    sub(payload){
        return {
            type:types.SUB,
            payload
        }
    },
    addList(e){

        return {
            type:types.ADD_TODO,payload:e.target.value
        }


    },
    delete(index){
       return {type:types.DEL_TODO,index:index}
    }
},store.dispatch)
export default actionCreators