/**
 * Created by xueln on 2017/11/11.
 */

let initialState={lists:JSON.parse(localStorage.getItem('lists'))||[]};
import * as types from '../action-types'
let reducer=(state=initialState,action)=>{
    switch(action.type){
        case types.ADD:

            let newcomments=[...state.lists,action.payload]
            localStorage.setItem('lists',JSON.stringify(newcomments));

            return {lists:newcomments};
        case types.DEL:
            let comments=state.lists.filter(item=>item.id!=action.payload)
            localStorage.setItem('lists',JSON.stringify(comments));

            return {lists:comments};

        default:return state;
    }
}
export default reducer;