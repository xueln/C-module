/**
 * Created by xueln on 2017/10/26.
 */
import * as Types from './mutations-types.js'
export default {
  [Types.ADD_COLLECT](state,book){
    let flag=state.favors.some(item=>{
      return item.id==book.id
    })
    if(flag){
      alert('您已经收藏过该书')
    }else{
      state.favors.push(book);
      localStorage.setItem('collect',JSON.stringify(state.favors))

    }

  },
  [Types.REMOVE_COLLECT](state,id){
    state.favors=state.favors.filter(item=>item.id!=id);
  }
}
