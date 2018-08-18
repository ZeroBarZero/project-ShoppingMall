import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
sync(store, router)
Vue.config.productionTip = true
/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
