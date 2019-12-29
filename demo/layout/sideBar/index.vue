<template>
  <div class="sidebar">
    <el-menu
      :collapse="isCollapse"
      :default-active="activeMenu"
      class="el-menu"
      text-color="#bfcbd9"
      background-color="#001529"
      active-text-color="#ffd04b"
      :router="true"
      :unique-opened="true"
    >
      <ChildMenu v-for="(item, index) in menu" :menu="item" :key="index"/>
    </el-menu>
  </div>
</template>

<script>
import ChildMenu from './child'

export default {
  components: {
    ChildMenu
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) return meta.activeMenu

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
  }
}
</script>

<style lang="less" scoped>
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}

.sidebar {
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 60px;
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
