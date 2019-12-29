export default [
  {
    name: '',
    path: '/',
    label: '控制面板'
  },
  {
    name: '',
    path: '/permission',
    label: '权限管理',
    children: [
      {
        name: '',
        path: '/permission',
        label: '角色权限'
      },
      {
        name: '',
        path: '/permission/page',
        label: '页面权限'
      },
      {
        name: '',
        path: '/permission/menu',
        label: '动态菜单'
      },
      {
        name: '',
        path: '/permission/login',
        label: '登录权限'
      }
    ]
  },
  {
    name: '',
    path: '/error',
    label: '错误处理'
  }
]
