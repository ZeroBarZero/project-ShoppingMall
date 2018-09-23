import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Admin from '@/components/Admins/Admin'
import Dashboard from '@/components/Admins/Dashboard'
import CURD from '@/components/Admins/CURD'
import seoul from '@/components/Admins/seoul'
import Register from '@/components/Register'
import Projectlist from '@/components/Projectlist'
import Storeitem from '@/components/Storeitem'
import Storelist from '@/components/Storelist'
import Seoullist from '@/components/Seoullist'
import Seoulitem from '@/components/Seoulitem'
import Order from '@/components/Order'
import OrderComplete from '@/components/OrderComplete'

/* eslint-disable */

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'Home',
      component: Home

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children : [
        { path: '/admin', component: Dashboard },
        { path: 'curd', component: CURD },
        { path: 'seoul', component: seoul }
      ]
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
    },
    {
      path: '/seoulitem',
      name: 'Seoulitem',
      component: Seoulitem
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/ordercomplete',
      name: 'OrderComplete',
      component: OrderComplete
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
