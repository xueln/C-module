/**
 * Created by xueln on 2017/10/30.
 */

import * as Types from './mutations-type.js'

export default {
  [Types.ADD_COLLECT](state,item){
      state.collect.push(item);
  },
  [Types.CANCEL_COLLECT](state,item){
      state.collect=state.collect.filter(book=>book.id!=item.id)
  }

}
