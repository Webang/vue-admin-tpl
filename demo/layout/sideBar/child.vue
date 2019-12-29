<template>
  <div class="menu" v-if="!menu.hidden">
    <template v-if="hasOneShowingChild(menu.children || [], menu) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!menu.alwaysShow">
      <el-menu-item :index="resolvePath(onlyOneChild.path)">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ onlyOneChild.meta.title }}</span>
      </el-menu-item>
    </template>

    <template v-else>
      <el-submenu :index="resolvePath(menu.path)">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{ menu.meta.title }}</span>
        </template>
        <child-menu
          v-for="child in menu.children"
          :key="child.path"
          :menu="child"
          :basePath="resolvePath(child.path)"
        />
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
    },
    basePath: {
      type: String,
      default: ''
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
