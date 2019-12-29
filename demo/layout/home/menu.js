export default[
  {
    path : '/workbench',
    label : '控制面板'
  }, {
    path : '/order',
    label : '订单管理'
  }, {
    path : '/chart',
    label : '图表展示',
    children: [
      {
        path: '/chart/highchart',
        label: 'highchart',
        children: [{
          path: '/chart/highchart/line',
          label: 'line',
        }]
      }, {
        path: '/chart/echart',
        label: 'echart',
        children: [{
          path: '/chart/echart/line',
          label: 'line',
        }]
      }
    ]
  }, {
    name : '',
    path : '/permission',
    label : '权限管理',
    children : [
      {
        name: '',
        path: '/permission',
        label: '角色权限'
      }, {
        name: '',
        path: '/permission/page',
        label: '页面权限'
      }, {
        name: '',
        path: '/permission/menu',
        label: '动态菜单'
      }, {
        name: '',
        path: '/permission/login',
        label: '登录权限'
      }
    ]
  }, {
    name : '',
    path : '/error',
    label : '错误处理'
  }
]
