export default[
  {
    path : '/workbench',
    label : '控制面板'
  }, {
    path : '/analize',
    label : '图表分类',
    children: [
      {
        path: '/analize/line',
        label: '折线图'
      },
      {
        path: '/analize/column',
        label: '柱状图'
      },
      {
        path: '/analize/bar',
        label: '条形图'
      },
      {
        path: '/analize/pie',
        label: '饼图'
      },
      {
        path: '/analize/area',
        label: '面积图'
      },
      {
        path: '/analize/gauge',
        label: '仪表盘'
      },
      {
        path: '/analize/funnel',
        label: '漏斗图'
      },
      {
        path: '/analize/relation',
        label: '关系图'
      }
    ]
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
  }
]
