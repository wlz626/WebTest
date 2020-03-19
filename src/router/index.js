import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/City',
      name: 'City',
      component:()=>import('../components/city/City.vue')
    },
    {
      path: '/details',
      name: 'details',
      component:()=>import('../components/details/Details.vue')
    }
  ]
})
