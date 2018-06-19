import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import ('../components/home')
    },
    {
      path: '/list',
      component:()=>import ('../components/list')
    },
    {
      path: '/collect',
      component: ()=>import ('../components/collect')
    },
    {
      path: '/add',
      component: ()=>import ('../components/add')
    },
    {
      path:'/detail/:id',
      component:()=>import ('../components/detail'),
      name:'detail'
    },
    {
      path: '*',
      component: ()=>import ('../components/404')
    }
  ]
})
