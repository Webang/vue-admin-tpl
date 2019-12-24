import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('../components/layout/home')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => Layout
    },
    {
      name: 'Home',
      path: '/',
      component: () => import('../components/layout/home'),
      children: [
        // 订单
        {
          path: 'order',
          component: () => import('../pages/order/index'),
          redirect: '/order/list',
          name: 'Order',
          meta: {
            title: '订单列表',
            level: 1
          },
          children: [
            {
              path: 'list',
              name: 'OrderList',
              component: () => import('../pages/order/list'),
              meta: {
                title: '订单列表',
                level: 1
              }
            },
            {
              path: ':orderId',
              name: 'OrderItem',
              component: () => import('../pages/order/item'),
              meta: {
                title: '订单详情',
                level: 2
              },
              children: [
                {
                  path: 'edit',
                  name: 'OrderItemEdit',
                  component: () => import('../pages/order/edit'),
                  meta: {
                    title: '编辑订单',
                    level: 3
                  }
                }
              ]
            }
          ]
        },
        // 错误
        {
          path: '/error',
          component: () => import('../pages/error'),
          meta: {
            title: '错误处理',
            activeMenu: '' // 配置左侧菜单激活项
          }
        },
        // 图表
        {
          path: '/chart',
          redirect: '/chart/echart',
          component: () => import('../pages/chart/index'),
          meta: {
            title: '图表',
            level: 1
          },
          children: [
            {
              path: 'echart',
              component: () => import('../pages/chart/echart'),
              redirect: '/chart/echart/line',
              meta: {
                title: 'echart',
                level: 2
              },
              children: [
                {
                  path: 'curve',
                  component: () => import('../pages/chart/echart/curve'),
                  meta: {
                    title: 'curve',
                    level: 3
                  }
                },
                {
                  path: 'line',
                  component: () => import('../pages/chart/echart/line'),
                  meta: {
                    title: 'line',
                    level: 3
                  }
                }
              ]
            }
          ]
        },
        {
          path: '/lang',
          component: () => import('../pages/lang'),
          meta: {
            title: '多语言化'
          }
        },
        {
          path: '*',
          component: () => import('../pages/v404')
        }
      ]
    }
  ]
})
