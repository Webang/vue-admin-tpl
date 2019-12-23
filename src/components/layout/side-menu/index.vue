<template>
  <div class="side-menu">
    <el-menu
      :collapse="isCollapse"
      :default-active="activeMenu"
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

  props: {
    menu: {
      type: Array,
      default: () => []
    },
    activeMenu: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      isCollapse: false
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
