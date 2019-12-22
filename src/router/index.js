import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    { // 先匹配login
      path: '/login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/chart/:chartType',
          component: () => import('../pages/chart.vue')
        },
        {
          path: '/order',
          component: () => import('../pages/order.vue')
        },
        {
          path: '*',
          component: () => import('../pages/v404.vue')
        }
      ]
    }
  ]
})
