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
    children : [
      {
        path: '/chart/highchart',
        label: 'highchart',
        children: [
          {
            path: '/chart/highchart/line',
            label: 'line'
          }
        ]
      }, {
        path: '/chart/echart',
        label: 'echart',
        children: [
          {
            path: '/chart/echart/line',
            label: 'line'
          }
        ]
      }
    ]
  }, {
    path : '/permission',
    label : '权限管理',
    children : [
      {
        path: '/permission/role',
        label: '角色权限'
      }, {
        path: '/permission/page',
        label: '页面权限'
      }, {
        path: '/permission/menu',
        label: '动态菜单'
      }
    ]
  }, {
    path : '/error',
    label : '错误处理'
  }
]
