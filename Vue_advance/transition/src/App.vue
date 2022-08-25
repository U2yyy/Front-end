<template>
  <div id="app">
    <hello-world></hello-world>
    <animateCSS></animateCSS>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import animateCSS from "@/components/animateCSS";

export default {
  name: 'App',
  components: {
    HelloWorld,
    animateCSS
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
