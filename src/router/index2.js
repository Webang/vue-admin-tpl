import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('../components/layout/home')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('../pages/demo/login')
    },
    {
      path: '/',
      component: () => import('../components/layout/home'),
      children: [
        {
          path: '/error',
          component: () => import('../pages/demo/error'),
          meta: {
            title: '错误处理',
            activeMenu: '' // 配置左侧菜单激活项
          }
        },
        {
          path: '/order',
          component: () => import('../pages/demo/order/list'),
          name: 'order',
          meta: {
            title: 'dingdan列表'
          },
          children: [
            {
              path: ':orderId',
              name: 'orderItem',
              component: () => import('../pages/demo/order/item'),
              meta: {
                title: '订单详情'
              }
            }
          ]
        },
        {
          path: '*',
          component: () => import('../pages/demo/v404')
        }
      ]
    }
  ]
})
