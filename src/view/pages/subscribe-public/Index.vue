<template>
  <div>
    <div class="nav">
      <router-link to="/subscribe-public/demo1">DEMO1</router-link>
      <router-link to="/subscribe-public/demo2">DEMO2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.nav {
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>