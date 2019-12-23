<template>
  <div>
    <Header />
    <SideMenu />
    <div class="main">
      <div class="container">
        {{ $route.path }}
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/layout/header'
import SideMenu from '../components/layout/side-menu'

export default {
  components: {
    Header,
    SideMenu
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
