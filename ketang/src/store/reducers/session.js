/**
 * Created by xueln on 2017/11/16.
 */
import * as types from '../action-types'
let init={
    user:'',
    suc:'',
    err:'',
}

export default function (state=init,action){
    switch (action.type){
        case types.REG:return {...state,...action.payload};
        case types.LOG:return {...state,...action.payload};
        case types.VALIDATE:
            if(action.payload.code==0){
                return {...state,...action.payload}
            }else{
                return {...state};
            };


        default:return state;

    }
}