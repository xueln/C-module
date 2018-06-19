/**
 * Created by xueln on 2017/11/15.
 */
const host='http://localhost:3033'
export function get(url){
    return fetch(host+url,{method:'GET',credentials:"include",headers:{
        "Accept":"application/json"

    }}).then(res=>res.json());
}
export function post(url,data){
    return fetch(host+url,{
        method:'POST',
        credentials:"include",
        headers:{
        "Accept":"application/json",
        "Content-Type":'application/json'
        },
        body: JSON.stringify(data)}).then(res=>res.json());
}