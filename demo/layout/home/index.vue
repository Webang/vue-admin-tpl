<template>
  <div class="home">
    <Header />
    <SideBar :menu="menu" />
    <div class="container">
      <el-breadcrumb class="bread-crumb" separator="/" v-if="showBreadCrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
          <router-link :to="pathCompile(item.path)">
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
import SideBar from '../sideBar'
import { mapState } from 'vuex'
import { compile } from 'path-to-regexp'

export default {
  name: 'Home',
  components: {
    Header,
    SideBar
  },
  data () {
    return {
      menu: menu,
      levelList: []
    }
  },
  computed: {
    ...mapState({
      routes: (state) => state.permission.routes
    }),
    showBreadCrumb () {
      return !this.$route.hideBreadCrumb && this.$route.meta.title
    }
  },
  created () {
    console.log(this.$route)
    this.initBreadCrumb()
    this.$watch('$route', this.initBreadCrumb)
  },
  methods: {
    initBreadCrumb() {
      this.levelList = []
      this.getBreadcrumb(this.$route.name)
    },
    handleClick (route) {
      this.$router.push(route.path)
    },
    pathCompile (path) {
      const { params } = this.$route
      var toPath = compile(path)
      return toPath(params)
    },
    getBreadcrumb (name) {
      const matched = this.$route.matched.filter(item => item.path)
      const { routes } = this.$store.state.permission
      let result = null

      const find = (list, name) => {
        list.forEach(item => {
          if (item.name === name) {
            result = item
            this.levelList.unshift(item)
          }
          if (item.children) find(item.children, name)
        })
      }

      find(routes, name)
      if (result && result.prev) {
        this.getBreadcrumb(result.prev)
      }
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
