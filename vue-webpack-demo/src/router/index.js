/**
 * Created by xueln on 2017/10/19.
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home.vue';
import Profile from '../components/profile.vue'
import Introduce from '../components/Introduce.vue'
import Aboutme from '../components/Aboutme.vue'
import Article from '../components/Article.vue'
Vue.use(Router);

export default new Router({
    linkActiveClass:'link-active',
    linkExactActiveClass:'current-active',
    routes:[
        {path:'',component:Home},
        {path:'/home',component:Home},
        {path:'/profile',component:Profile,children:[
            {path:'/',component:Introduce},
            {path:'introduce',component:Introduce},
            {path:'aboutme',component:Aboutme}
        ]},
        {
            path:'/article/:id/:name',component:Article
        }
    ]
})
