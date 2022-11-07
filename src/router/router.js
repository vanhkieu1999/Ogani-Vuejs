import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Shop from '@/components/pages/Shop'
import Blog from '@/components/pages/Blog'
import Contact from '@/components/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
