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
      <ChildMenu :menu="item" v-for="(item, index) in routes" :key="index" :base-path="item.path"/>
    </el-menu>
  </div>
</template>

<script>
// import EventBus from '@/utils/event-bus'
import ChildMenu from './child'

export default {
  components: {
    ChildMenu
  },
  props: {
    routes: {
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
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
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
