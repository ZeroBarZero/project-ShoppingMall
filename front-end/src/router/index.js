import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Register from '@/components/Register'
import Project from '@/components/Projectlist'

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
    }
  ]
})
