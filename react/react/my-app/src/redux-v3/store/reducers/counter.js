/**
 * Created by xueln on 2017/11/9.
 */
import  * as types from '../actionTypes.js'

let initial={
    num:0
}
let reducer=(state=initial,action)=>{
    console.log(action)
    switch(action.type){
        case types.ADD:return {num:state.num+action.payload};
        case types.SUB:return {num:state.num-action.payload};
        default:return state
    }
}
export default reducer;