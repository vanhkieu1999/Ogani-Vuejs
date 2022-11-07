// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import './scss/style.css'
import './css/bootstrap.min.css'
import './css/font-awesome.min.css'
import './css/elegant-icons.css'
import './css/nice-select.css'
import './css/slick.css'
import './css/slick-theme.css'
import './css/style.css'
import './css/swiper-bundle.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  

import './js/slick'
import './js/slick.min.js'
import './js/index'
import './data/data'

Vue.config.productionTip = false
Vue.use(BootstrapVue)


new Vue({
  el: '#App',
  router,
  components: { App },
  template: '<App/>'
});

// var cate = new Vue({
//   el: '#categories',
//   data: {
//     ListMeat: [
//     {
//       id: 1,
//       title: "Thịt Bò",
//       price: "$30.00",
//       imgsrc: require("./assets/product/product-1.jpg")
//     },
//     {
//       id: 2,
//       title: "Thịt Lợn",
//       price: "$30.00",
//       imgsrc: require("./assets/product/product-2.jpg")
//     },
//     {
//       id: 3,
//       title: "Thịt Gà",
//       price: "$30.00",
//       imgsrc: require("./assets/product/product-3.jpg")
//     },
//     {
//       id: 4,
//       title: "Thịt Bò",
//       price: "$30.00",
//       imgsrc: require("./assets/product/product-4.jpg")
//     },
//     {
//       id: 5,
//       title: "Thịt Lợn",
//       price: "$30.00",
//       imgsrc: require("./assets/product/product-5.jpg")
//     },
//     {
//       id: 6,
//       title: "Thịt Gà",
//       price: "$30.00",
//       imgsrc: require("./assets/product/product-6.jpg")
//     },
//     {
//       id: 7,
//       title: "Thịt Cá",
//       price: "$30.00",
//       imgsrc: require("./assets/product/product-7.jpg")
//     },
//     {
//       id: 8,
//       title: "Thịt Trâu",
//       price: "$30.00",
//       imgsrc: require("./assets/product/product-8.jpg")
//     }
//     ]
//   }
// });
  
// new Vue({
//   el: '#blogs',
//   data: {
//     blogList: [
//       {
//         id: 1,
//         date: 'May 4, 2019',
//         commentCount: '5',
//         title: 'Cooking tips make cooking simple',
//         content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
//         imgsrc: require("./assets/blog/blog-1.jpg")
//       },
//       {
//         id: 2,
//         date: 'May 4, 2019',
//         commentCount: '5',
//         title: '6 ways to prepare breakfast for 30',
//         content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
//         imgsrc: require("./assets/blog/blog-2.jpg")
//       },
//       {
//         id: 3,
//         date: 'May 4, 2019',
//         commentCount: '5',
//         title: 'Cooking tips make cooking simple',
//         content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
//         imgsrc: require("./assets/blog/blog-3.jpg")
//       },
//     ]
//   },
  
// })