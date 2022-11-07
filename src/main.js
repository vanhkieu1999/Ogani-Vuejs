// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './scss/style.css'
import './css/font-awesome.min.css'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './js/main'
import './js/mixitup.min.js'
import './js/jquery-ui.min.js'
import './js/jquery-3.3.1.min.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})