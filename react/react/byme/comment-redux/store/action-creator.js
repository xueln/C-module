/**
 * Created by xueln on 2017/11/11.
 */



import * as types from '../store/action-types'

let actions={
    add(content){
        return {
            type:types.ADD,
            payload:content
        }
    },
    del(id){
        return{
            type:types.DEL,
            payload:id
        }
    }

}
export default actions;