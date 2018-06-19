/**
 * Created by xueln on 2017/11/15.
 */
import {get} from './index.js'

export function fetchSliders(){
    return get('/slider')
}
export function fetchLessons(offset,limit){
    return get('/lessons?offset='+offset+'&limit='+limit)
}