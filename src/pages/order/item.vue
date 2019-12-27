<template>
  <div class="order-item">
    <div>我是订单详情</div>
    <router-link to="/order/1/edit">去编辑订单</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'order-item'
}
</script>
