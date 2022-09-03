<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/category">category</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Category from "@/components/Category"
import Home from "@/components/Home";

export default {
  name: 'App',
  components: {
    Category,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
