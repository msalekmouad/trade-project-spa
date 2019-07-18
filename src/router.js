import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Portfolio from './views/Portfolio'
import Stock from './views/Stock'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass : 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path : '',
      component : Home,
      name : 'Home'
    },
    {
      path : '/stock',
      component : Stock,
      name : 'Stock'
    },
    {
      path : '/portfolio',
      component : Portfolio,
      name : 'Portfolio'
    }
  ]
})
