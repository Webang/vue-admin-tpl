<template>
  <div class="order-list">
    <div>order-list</div>
    <router-link to="/order/1">跳转到订单详情</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'OrderList'
}
</script>
