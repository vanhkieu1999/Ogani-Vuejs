// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import Hero from './Hero'
import router from './router'

import './scss/style.css'
import './css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/elegant-icons.css'
import './css/nice-select.css'
import './css/slick.css'
import './css/slick-theme.css'
import './css/style.css'
import './css/swiper-bundle.min.css'


import './js/slick'
import './js/slick.min.js'
import './js/index'
import './data/data'

Vue.config.productionTip = false

new Vue({
    el: '#TheHeader',
    router,
    components: { TheHeader },
    template: '<TheHeader/>'
  });
  
  new Vue({
    el: '#TheFooter',
    router,
    components: { TheFooter },
    template: '<TheFooter/>'
  });
  
  new Vue({
    el: '#Hero',
    router,
    components: { Hero },
    template: '<Hero/>'
  });
  