/**
 * Created by xueln on 2017/11/9.
 */
import  * as types from '../actionTypes.js'
let initState={
    todos:[],

}


let reducer=(state=initState,action)=>{
    switch(action.type){
        case types.ADD_TODO:return {todos:[...state.todos,action.payload]}
        case types.DEL_TODO:return {todos:state.todos.filter((item,index)=>index!=action.index)};
        default:return state;
    }
}
export  default reducer;