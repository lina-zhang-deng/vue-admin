import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/MainOne.vue'

import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/LoginIn.vue'
import HomeFirstVue from '../views/HomeFirst.vue'
import UserOneVue from '../views/UserOne.vue'
import MallOneVue from '../views/MallOne.vue'
Vue.use(VueRouter)

//1.创建路由组件
//2.将路由与组件进行映射
//3.创建router实例



const routes = [
  {      
    path: '/',
    component: Main,
    name: 'Main',
    redirect: '/home', //重定向
    children: [
        { path: 'home', name: 'home', component: HomeFirstVue }, //首页
        { path: 'user', name: 'user', component: UserOneVue },  //用户管理
        { path: 'mall', name: 'mall', component: MallOneVue }, //商品管理
        { path: 'page1', name: 'page1', component: PageOne },  //页面1
        { path: 'page2', name: 'page2', component: PageTwo },  //页面2
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
      
]


    const router = new VueRouter({
      routes
  })

   export default router