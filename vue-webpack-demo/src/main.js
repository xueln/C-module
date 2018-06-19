import Vue from 'vue';
import App from './App.vue';
import  router from './router/index.js';

import 'bootstrap/dist/css/bootstrap.css';

console.log(App)
let vm = new Vue({
    el: "#app",
    render:h => h(App),
    router

});