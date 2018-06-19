// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2861488593,1651617597&fm=111&gp=0.jpg',
  loading: 'http://cdn.uehtml.com/201402/1392662520296_1140x0.gif',
  attempt: 1
})




Vue.config.productionTip = false
import store from './vuex/index';

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  ...App,
  store
})
