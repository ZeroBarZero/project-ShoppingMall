import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'

sync(store, router)
Vue.config.productionTip = true
Vue.prototype.$http = axios
/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})

//var carousels = bulmaCarousel.attach()
