<template>
  <div class="side-menu">
    <el-menu
      :collapse="isCollapse"
      :default-active="cActiveIndex"
      class="el-menu"
      text-color="#bfcbd9"
      background-color="#545c64"
      active-text-color="#ffd04b"
      :router="true"
      :unique-opened="true"
    >
      <SubItem :menu="menu" />
    </el-menu>
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus'
import SubItem from './sub-item'

export default {
  components: {
    SubItem
  },
  data () {
    return {
      isCollapse: false,
      menu: [
        {
          name: '',
          path: '/',
          label: '系统首页'
        },
        {
          name: '',
          path: '/draggable',
          label: '拖拽组件'
        },
        {
          name: '',
          path: '/error',
          label: '错误处理'
        },
        {
          name: '',
          path: '/lang',
          label: '多语言化'
        },
        {
          name: '',
          path: '/chart',
          label: '图表展示',
          children: [
            {
              name: '',
              path: '/chart/echart',
              label: 'echart图标',
              children: [
                {
                  name: '',
                  path: '/chart/echart/line',
                  label: '折线图'
                },
                {
                  name: '',
                  path: '/chart/echart/curve',
                  label: '曲线图'
                }
              ]
            },
            {
              name: '',
              path: '/chart/highchart',
              label: 'highchart图标',
              children: [
                {
                  name: '',
                  path: '/chart/highchart/line',
                  label: '折线图'
                },
                {
                  name: '',
                  path: '/chart/highchart/curve',
                  label: '曲线图'
                }
              ]
            }
          ]
        },
        {
          name: '',
          path: '/table',
          label: '表格展示'
        },
        {
          name: '',
          path: '/theme',
          label: '主题配置'
        },
        {
          name: '',
          path: '/permission',
          label: '页面权限',
          children: [
            {
              name: '',
              path: '/permission/page',
              label: '页面权限'
            },
            {
              name: '',
              path: '/permission/role',
              label: '角色权限'
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
        }
      ]
    }
  },

  computed: {
    cActiveIndex () {
      let activeIndex
      const rawTree = (list) => {
        list.forEach(element => {
          if (this.$route.path.indexOf(element.path) === 0) {
            activeIndex = element.path
          }
          if (element.children) rawTree(element.children)
        })
      }
      rawTree(this.menu)
      return activeIndex
    }
  },

  mounted () {
    EventBus.$on('setMenuCollapseState', val => (this.isCollapse = val))
  },

  destroyed () {
    EventBus.$off('setMenuCollapseState')
  },

  methods: {
    handleSelect (key, keyPath) {
      this.$router.push(`${key}`)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}

.side-menu {
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 70px;
  bottom: 0;
  left: 0;
  width: 200px;
  z-index: 1001;
  overflow: hidden;
}

.el-menu {
  height: 100%;
}
</style>
