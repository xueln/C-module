/**
 * Created by xueln on 2017/10/26.
 */
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
import state from './state.js';
import mutations from './mutations.js'
import getters from './getters.js';



let store=new Vuex.Store({
  state,
  mutations,
  getters,
  strict:true

})
export default store;
