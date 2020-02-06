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
    path: '/analize',
    component: Layout,
    name: 'analize',
    meta: {
      title: 'analize'
    },
    redirect: '/analize/line',
    children: [
      {
        path: 'line',
        component: () => import('@/pages/analize/line'),
        name: 'analize-line',
        meta: { title: '折线图' }
      }
    ]
  },
  {
    path: '/chart',
    component: Layout,
    name: 'chart',
    meta: { title: 'chart' },
    redirect: '/chart/echart/line',
    children: [
      {
        path: '/chart/echart',
        component: () => import('@/pages/chart/echart/index'),
        name: 'chartEchart',
        meta: { title: 'echart' },
        prev: 'chart',
        redirect: '/chart/echart/line'
      },
      {
        path: '/chart/echart/line',
        component: () => import('@/pages/chart/echart/line'),
        name: 'chartEchartLine',
        meta: { title: '曲线图' },
        prev: 'chartEchart'
      },
      {
        path: '/chart/highchart',
        component: () => import('@/pages/chart/highchart/index'),
        name: 'chartHighchart',
        meta: { title: 'highchart' },
        prev: 'chart',
        redirect: '/chart/highchart/line'
      },
      {
        path: '/chart/highchart/line',
        component: () => import('@/pages/chart/highchart/line'),
        name: 'chartHighchartLine',
        meta: { title: '曲线图' },
        prev: 'chartHighchart'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/workbench',
    children: [
      {
        path: '/workbench',
        component: () => import('@/pages/workbench/index'),
        name: 'workbench',
        meta: { title: '控制面板' }
      },
      {
        path: '/order',
        name: 'OrderList',
        component: () => import('@/pages/order/list'),
        meta: {
          title: '订单列表'
        }
      },
      {
        path: '/order/:orderId',
        name: 'OrderItem',
        prev: 'OrderList',
        component: () => import('@/pages/order/item'),
        meta: {
          title: '订单详情'
        }
      },
      {
        path: '/order/:orderId/edit',
        name: 'OrderItemEdit',
        prev: 'OrderItem',
        component: () => import('@/pages/order/edit'),
        meta: {
          title: '订单编辑'
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
