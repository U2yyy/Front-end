<template>
  <div id="app">
    <data-user/>
      <data-source/>
  </div>
</template>

<script>
import dataUser from "@/components/dataUser";
import dataSource from "@/components/dataSource";

export default {
  name: 'App',
  components: {
    dataUser,
    dataSource
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
