<template>
  <div id="app">
    <Test1></Test1>
    <data1></data1>
  </div>
</template>

<script>
import data1 from "@/components/data1";
import Test1 from "@/components/Test1";
export default {
  name: 'App',
  components: {
    data1,
    Test1
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
