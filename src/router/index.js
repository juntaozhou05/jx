import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello/Hello'
import One from '@/pages/One/One'
import Login from '@/pages/Login/Login'
import Main from '@/pages/Main/Main'
import Content from '@/pages/Main/components/Content'
import PersonalData from '@/pages/Main/components/PersonalData'
import ChangePassword from '@/pages/Main/components/ChangePassword'
import Authorization from '@/pages/Main/components/Authorization'
import RoleControl from '@/pages/Main/components/RoleControl'
import UserControl from '@/pages/Main/components/UserControl'

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
      component: Main,
      //内容页面
      children: [
        {name: 'Content',path: '/main/content/:type', component:Content},
        {name: 'PersonalData',path: '/main/personalData/:type', component:PersonalData},
        {name: 'ChangePassword',path: '/main/changePassword/:type', component:ChangePassword},
        {name: 'Authorization',path: '/main/authorization/:type', component:Authorization},
        {name: 'RoleControl',path: '/main/roleControl/:type', component:RoleControl},
        {name: 'UserControl',path: '/main/userControl/:type', component:UserControl}
      ]
    }
  ]
})









