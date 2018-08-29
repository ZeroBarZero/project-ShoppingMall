import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Register from '@/components/Register'
import Projectlist from '@/components/Projectlist'
import Storeitem from '@/components/Storeitem'
import Storelist from '@/components/Storelist'
import Seoullist from '@/components/Seoullist'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/projectlist',
      name: 'Projectlist',
      component: Projectlist
    },
    {
      path: '/storeitem',
      name: 'Storeitem',
      component: Storeitem
    },
    {
      path: '/storelist',
      name: 'Storellist',
      component: Storelist
    },
    {
      path: '/seoullist',
      name: 'Seoulllist',
      component: Seoullist
    }
  ]
})
