<template>
  <div class="header">
    <div class="menu-btn" @click="handleToggle">
      <el-icon v-if="!isToggle" class="el-icon-s-fold" />
      <el-icon v-else class="el-icon-s-unfold" />
    </div>
    <span class="logo">后台管理系统</span>
    <div class="header-right">
      <div class="btn-screen">
        <el-icon class="el-tooltip el-icon-rank" />
      </div>
      <div class="btn-bell">
        <el-icon class="el-icon-bell" />
      </div>
      <div class="user-avator">
        <img src="./img/avatar.jpg" alt="">
      </div>
      <el-dropdown class="username">
        <span class="">
          <span style="color: #fff">admin</span>
          <i class="el-icon-arrow-down el-icon--right" style="color: #fff"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import EventBus from '@/utils/event-bus'
export default {
  data () {
    return {
      isToggle: window.localStorage.getItem('isToggle') || false
    }
  },
  methods: {
    handleToggle () {
      window.localStorage.setItem('isToggle', '1')
      this.isToggle = !this.isToggle
      this.emitMenuState()
    },
    emitMenuState () {
      EventBus.$emit('setMenuCollapseState', this.isToggle)
    }
  },
  mounted () {
    this.emitMenuState()
  }
}
</script>

<style lang="less" scoped>
@header-height: 60px;

.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: @header-height;
  font-size: 18px;
  color: #fff;
  background-color: #001529;
}

.menu-btn {
  float: left;
  width: 64px;
  text-align: center;
  line-height: @header-height;
  cursor: pointer;
}

.logo {
  line-height: @header-height;
}

.header-right {
  float: right;
  display: flex;
  align-items: center;
  height: @header-height;
  padding-right: 30px;
  div {
    margin-left: 16px;
    cursor: pointer;
  }
  .user-avator {
    img {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
