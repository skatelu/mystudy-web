<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <div>
      <h1> Vue Router </h1>
      <router-link to="/hello" style="font-size: x-large;display: inline">
        主页
      </router-link>
      <router-link to="/content" style="font-size: x-large; display: inline">
                           新建页
      </router-link>
    </div>
    <router-view>内容</router-view>
<!--    <router-view>内容页</router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
