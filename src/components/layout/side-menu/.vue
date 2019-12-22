<template>
  <div class="side-menu">
    <el-menu
      :collapse="isCollapse"
      :default-active="$route.path"
      class="el-menu"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :router="true"
      :unique-opened="true"
    >
      <template v-for="(item, index) in menu">
        <el-menu-item
          :key="index"
          :index="item.path"
          v-if="!item.children || !item.children[0]"
        >
          <i class="el-icon-menu"></i>
          <span>{{ item.label }}</span>
        </el-menu-item>
        <el-submenu :index="item.path" :key="index" v-else>
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item
            v-for="childEl in item.children || []"
            :index="childEl.path"
            :key="childEl.path"
          >
            <i class="el-icon-menu"></i>
            <span>{{ childEl.label }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus'
export default {
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
              label: 'echart图标'
            },
            {
              name: '',
              path: '/chart/highchart',
              label: 'highchart图标'
            }
          ]
        }
        // {
        //   name: '',
        //   path: '/tabel',
        //   label: '表格展示'
        // }
      ]
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
    },
    handleClickMenu () {}
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
  background-color: #304156;
  /deep/ .el-submenu__title:hover, .el-menu-item:hover,
  /deep/ .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #47575f;
  }
}
</style>
