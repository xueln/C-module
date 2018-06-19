/**
 * Created by xueln on 2017/11/16.
 */
import * as types from '../action-types'
import {reg,log,validate} from '../../api/session'
import {push} from 'react-router-redux'
export default {
    reg(data){
        return dispatch=>{
            reg(data).then(payload=>{
                let {code} =payload;

                dispatch({
                    type:types.REG,
                    payload
                })
                if(code==0){
                    dispatch(push('/login'))
                }
            })

        }

        // return {
        //     type:types.REG,
        //     payload:reg(data)
        // }
    },
    log(data){
        return dispatch=>{
            log(data).then(payload=>{
                let {code} =payload;

                dispatch({
                    type:types.LOG,
                    payload
                })
                if(code==0){
                    dispatch(push('/person'))
                }
            })

        }
        // return{
        //     type:types.LOG,
        //     payload:log(data)
        // }
    },
    validate(){
        return dispatch=>{
            validate().then(payload=>{

                dispatch({
                    type:types.VALIDATE,
                    payload
                })

            })

        }
    }
}