/**
 * Created by xueln on 2017/11/14.
 */
import * as types from '../action-types'
import {fetchSliders,fetchLessons} from '../../api/home'
export default {
    setLesson(id){
        return {
            type:types.SET_LESSON,
            payload:{
                id
            }
        }
    },
    getSlider(){
        return dispatch=>{fetchSliders().then(slider=>{
            dispatch({
                type:types.FETCH_SLIDER,
                payload:{slider}
            })
        })}
    },
    getLessons(){
        return (dispatch,getState)=>{
            let{hasMore,offset,loading,limit}=getState().home.lessons;
            dispatch({
                type:types.FETCH_LESSONS
            })

            if(!loading&& hasMore){
                dispatch({
                    type:types.FETCH_LESSONS_FINISH,
                    payload:fetchLessons(offset,limit)
                })
            }


        }
    },
   refresh(){
        return (dispatch,getState)=>{
                    let{hasMore,offset,loading,limit}=getState().home.lessons;
                    dispatch({
                        type:types.FETCH_LESSONS
                    })

                    if(!loading){
                        dispatch({
                            type:types.FETCH_REFRESH,
                            payload:fetchLessons(0,offset+limit)
                        })
                    }


                }
    }




}