import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import navbar from '@/components/Navbar'
import footer from '@/components/Footer'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.component('navbar', navbar)
Vue.component('thomas-footer', footer)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
