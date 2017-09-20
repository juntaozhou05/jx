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
import PayControl from '@/pages/Main/components/PayControl'
import UserBalance from '@/pages/Main/components/UserBalance'

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
        {name: 'Content',path: '/main/content/:type', component:Content}, //首页
        {name: 'PersonalData',path: '/main/personalData/:type', component:PersonalData}, //用户资料
        {name: 'ChangePassword',path: '/main/changePassword/:type', component:ChangePassword},//修改密码
        {name: 'Authorization',path: '/main/authorization/:type', component:Authorization},//权限管理
        {name: 'RoleControl',path: '/main/roleControl/:type', component:RoleControl},//角色管理
        {name: 'UserControl',path: '/main/userControl/:type', component:UserControl},//用户管理
        {name: 'PayControl',path: '/main/payControl/:type', component:PayControl},//支付用户管理
        {name: 'UserBalance',path: '/main/userBalance/:type', component:UserBalance}//用户余额
      ]
    }
  ]
})









