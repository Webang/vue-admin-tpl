<template>
  <div class="home">
    <Header />
    <SideMenu :menu="menu" :activeMenu="activeMenu" />
    <div class="container">
      <el-breadcrumb class="bread-crumb" separator="/" v-if="showBreadCrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
          <router-link :to="item.path">
            <span>{{ item.meta.title }}</span>
          </router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content">
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
  name: 'Home',

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
    showBreadCrumb () {
      return !this.$route.hideBreadCrumb && this.$route.meta.title
    },
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
      const matched = this.$route.matched.filter(item => item.path)

      const routes = [matched[0]]
      matched.forEach(el => {
        if (el.meta.level > routes[routes.length - 1].meta.level) {
          routes.push(el)
          Object.keys(this.$route.params).forEach(key => {
            const name = ':' + key
            el.path = el.path.replace(name, this.$route.params[key])
          })
        }
      })
      this.levelList = routes
      // const path = this.$route.path
      // const pathList = this.$route.path.split('/').filter(item => item)
      // const routes = []
      // for (let index = 0; index < pathList.length; index++) {
      //   const path = pathList.slice(0, index + 1)
      //   const route = this.$router.resolve('/' + path.join('/'))
      //   if (route.route.meta.title) {
      //     routes.push(route.route)
      //   }
      // }
      // this.levelList = routes

      // console.log(this.$route.matched)
      // let matched = this.$route.matched
      // let last = matched[matched.length - 1]
      // let list = [last]
      // for (let index = matched.length - 1; index >= 0; index--) {
      //   if (list[list.length - 1].meta.level > matched[index].meta.level) {
      //     list.unshift(matched[index])
      //   }
      // }
      // this.levelList = list
      // this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  margin-left: 200px;
}

.content {
  padding-top: 10px;
  padding-left: 12px;
}

.bread-crumb {
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 12px;
  box-shadow: 0 1px 4px #00152914;
}
</style>>
