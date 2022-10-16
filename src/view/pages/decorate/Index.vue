<template>
  <div>
    <div class="nav">
      <!-- <router-link to="/decorate/log-demo1">log DEMO1</router-link>
      <router-link to="/decorate/log-demo2">log DEMO2</router-link> -->
      <router-link to="/decorate/cache-demo1">缓存 DEMO1</router-link>
      <router-link to="/decorate/cache-demo2">缓存 DEMO2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.nav {
  width: 700px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>
