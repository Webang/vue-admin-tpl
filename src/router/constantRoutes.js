import Layout from '@/layout/home'

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login'),
    hidden: true,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about'),
    hidden: true,
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/workbench',
    children: [
      {
        path: 'workbench',
        component: () => import('@/pages/workbench/index'),
        name: 'workbench',
        meta: { title: '控制面板' }
      }
    ]
  },
  // 订单
  {
    path: '/order',
    component: Layout,
    redirect: '/order/list',
    meta: {
      title: '订单管理'
    },
    children: [
      {
        path: 'list',
        name: 'OrderList',
        component: () => import('@/pages/order/list'),
        meta: {
          title: '订单列表'
        }
      },
      {
        path: ':orderId',
        name: 'OrderItem',
        component: () => import('@/pages/order/item'),
        hidden: true,
        meta: {
          title: '订单详情',
          prev: 'OrderList'
        }
      },
      {
        path: ':orderId/edit',
        component: () => import('@/pages/order/edit'),
        hidden: true,
        meta: {
          title: '订单编辑',
          prev: 'OrderItem'
        }
      }
    ]
  },
  {
    path: '*',
    hidden: true,
    component: () => import('@/pages/error-page/404')
  }
]
