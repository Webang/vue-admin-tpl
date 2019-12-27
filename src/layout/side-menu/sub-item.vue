<template>
  <div class="menu">
    <template v-for="(item, index) in menu">
      <el-menu-item
        :key="index"
        :index="item.path"
        v-if="!item.children || !item.children[0]"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu :index="item.path" :key="index" v-else>
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <sub-menu :menu="item.children || []"/>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sub-menu',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
}
</script>
