/**
 * Created by xueln on 2017/11/14.
 */
import * as types from '../action-types'
let initialState={
    currentLesson:0,
    slider:[],
    lessons:{
        loading:'',
        hasMore:true,
        list:[],
        offset:0,
        limit:0
    }
}
let home=(state=initialState,action)=>{

    switch (action.type){
        case types.SET_LESSON:return {...state,currentLesson:action.payload.id};
        case types.FETCH_SLIDER:return {...state,slider:action.payload.slider};
        case types.FETCH_LESSONS:return {...state,lessons:{...state.lessons,loading:'加载中..'}};
        case types.FETCH_LESSONS_FINISH:return{...state,lessons:{...state.lessons,
            loading:'',
            offset:state.lessons.offset+action.payload.list.length,
            limit:action.payload.offset,
            hasMore:action.payload.hasMore,
            list:[...state.lessons.list,...action.payload.list]}};
	case types.FETCH_REFRESH:return{...state,lessons:{...state.lessons,
            loading:'',
            offset:action.payload.list.length,
            limit:action.payload.offset,
            hasMore:action.payload.hasMore,
            list:[...action.payload.list]}};
        default:return state;
    }
}
export default home;