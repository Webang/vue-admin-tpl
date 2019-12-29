const Layout = () => import('@/layout/home')

export default [
  {
    path: '/permission',
    component: Layout,
    name: 'Permission',
    redirect: '/permission/page', // 可能没有权限
    meta: {
      title: '权限管理',
      icon: 'lock',
      roles: ['admin', 'common']
    },
    children: [
      {
        path: 'page',
        component: () => import('@/pages/permission/page'),
        name: 'PagePermission',
        meta: {
          title: '页面权限',
          roles: ['common']
        }
      },
      {
        path: 'role',
        component: () => import('@/pages/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '角色权限',
          roles: ['admin']
        }
      }
    ]
  }
]
