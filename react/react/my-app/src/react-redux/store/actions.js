/**
 * Created by xueln on 2017/11/9.
 */
import * as types from './action-types'

export default {
    add(){
        return {
            type:types.ADD,
            payload:1
        }
    },
    sub(){
        return{
            type:types.SUB,
            payload:1
        }
    }
}