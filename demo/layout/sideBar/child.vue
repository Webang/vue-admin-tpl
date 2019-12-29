<template>
  <div class="menu">
    <template v-if="!menu.children">
      <el-menu-item :index="menu.path">
        <el-icon class="el-icon-menu" />
        <span>{{ menu.label }}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu :index="menu.path">
        <template slot="title">
          <el-icon class="el-icon-menu" />
          <span>{{ menu.label }}</span>
        </template>
        <child-menu v-for="(item, index) in menu.children" :key="index" :menu="item"/>
      </el-submenu>
    </template>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'childMenu',
  props: {
    menu: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      onlyOneChild: null
    }
  },
  computed: {
    hasChild () {
      return this.menu.children && this.menu.children.length
    },
    showInMenu () {
      const hasTitle = this.menu.meta && this.menu.meta.title
      return this.hasChild && hasTitle
    }
  },
  methods: {
    hasOneShowingChild (children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }
      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }
      return false
    },
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
