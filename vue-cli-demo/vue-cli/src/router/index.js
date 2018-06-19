import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home';
// import List from '../components/List';
// import Collect from '../components/Collect';
// import Add from '../components/Add'
// import Detail from '../components/Detail'


// let Home=()=>{
//   Promise.resolve({})
// }
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',component:()=>import ('../components/Home')
    },
    {
      path:'/home',component:()=>import ('../components/Home')
    },
    {
      path:'/list',component:()=>import ('../components/List')
    },
    {
      path:'/collect',component:()=>import ('../components/Collect')
    },{
      path:'/add',component:()=>import ('../components/Add')
    },
    {path:'/detail/:id',component:()=>import ('../components/Detail'),name:'detail'},
    {
      path:'*',redirect:'/home'
    }
  ]
})
