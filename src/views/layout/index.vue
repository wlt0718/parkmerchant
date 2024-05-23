<script setup>
</script>
<template>
<router-view></router-view>
<van-tabbar route fixed
  active-color="#5075FF"
  inactive-color="#AEBDF6"
  :safe-area-inset-bottom="true"
>
  <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="search" replace to="/mine">我的</van-tabbar-item>
</van-tabbar>
</template>
<style lang="scss" scoped>
.van-tabbar-item--active {
  font-weight: 600;
}
</style>