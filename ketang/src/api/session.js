/**
 * Created by xueln on 2017/11/16.
 */
import {post,get} from './index'
export function reg(data){
    return post('/reg',data);
}
export function log(data){
    return post('/log',data)
}
export function validate() {
    return get('/validate')
}