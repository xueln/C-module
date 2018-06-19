/**
 * Created by xueln on 2017/10/26.
 */
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
  count:0
}
const mutations={
  plus(state,val){
    state.count++;
    console.log(val)
  },
  reduce(state){
    state.count-=1;

  },

}
const getters={
  type:(state)=>state.count%2?'奇数':"偶数"
}
let store=new Vuex.Store({
  state,
  mutations,
  getters,
  strict:true//开启严格模式，只能通过mutation
});


new Vue({
  el:'#app',
  ...App,
  store

})
