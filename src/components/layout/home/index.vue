<template>
  <div class="home">
    <Header />
    <SideMenu :menu="menu" :activeMenu="activeMenu" />
    <div class="main">
      <div class="container">
        <el-breadcrumb class="bread-crumb" separator="/">
          <el-breadcrumb-item v-for="item in levelList" :key="item.path">
            <span @click="handleClick(item)">{{ item.meta.title }}</span>
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
    handleClick (route) {
      this.$router.push(route.path)
    },
    getBreadcrumb () {
      let matched = this.$route.matched
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
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

.bread-crumb {
  padding-bottom: 20px;
}
</style>>
