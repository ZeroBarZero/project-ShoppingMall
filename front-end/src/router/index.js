import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Register from '@/components/Register'
import Project from '@/components/Projectlist'
import Storeitem from '@/components/Storeitem'
import Storelist from '@/components/Storelist'
import Seoullist from '@/components/Seoullist'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
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
      name: 'Project',
      component: Project
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
