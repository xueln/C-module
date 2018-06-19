/**
 * Created by xueln on 2017/10/30.
 */
export default {
  filterCollect:(state)=>{
    let origin=state.collect;
    let result=[];
    let id;
    for(let i=0;i<origin.length;i++){//经过过滤后的收藏
      if(id==undefined||origin[i].id!=id){
        result.push(origin[i]);
        id=origin[i].id
      }
    }
    return result
  }
}
