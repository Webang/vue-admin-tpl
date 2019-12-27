import Layout from '@/layout/home'

export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about')
  },
  {
    path: '/workBench',
    component: Layout,
    meta: {
      showMenu: true,
      title: '空置面板'
    },
    children: [
      {
        path: '/',
        component: () => import('@/pages/workbench/index'),
        meta: {
          title: '控制面板'
        }
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/pages/error-page/404')
  }
]
