import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello/Hello'
import One from '@/pages/One/One'
import Login from '@/pages/Login/Login'
import Main from '@/pages/Main/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //测试
      path: '/hello',
      name: 'Hello',
      component: Hello,
      children: [
      	{name: 'One',path: '/one', component:One}
      ]
    },
    //登录页面
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    //主页
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
