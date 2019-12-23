<template>
  <div>
    <Header />
    <SideMenu :menu="menu" :activeMenu="activeMenu" />
    <div class="main">
      <div class="container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span>{{ item.meta.title }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import menu from './menu'
import Header from '../header'
import SideMenu from '../side-menu'

export default {
  components: {
    Header,
    SideMenu
  },

  data () {
    return {
      menu: menu,
      levelList: null
    }
  },

  computed: {
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }

      let activeIndex
      const rawTree = (list) => {
        list.forEach(element => {
          if (path.indexOf(element.path) === 0) {
            activeIndex = element.path
          }
          if (element.children) rawTree(element.children)
        })
      }
      rawTree(this.menu)
      return activeIndex
    }
  },

  created () {
    this.getBreadcrumb()
    this.$watch('$route', this.getBreadcrumb)
  },

  methods: {
    getBreadcrumb () { // only show routes with meta.title
      let matched = this.$route.matched
      const first = matched[0]

      console.log(matched)

      // if (!this.isDashboard(first)) {
      //   matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
      // }

      this.levelList = matched
      // this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  margin-left: 200px;
}

.container {
  padding-top: 12px;
  padding-left: 10px;
}
</style>>
