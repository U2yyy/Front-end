<template>
  <div id="app">
    <search/>
    <list/>
  </div>
</template>

<script>
import list from "@/components/list";
import search from "@/components/search";

export default {
  name: 'App',
  components: {
    list,search
  }
}
</script>

<style>
#app {
  margin: auto;
}
body{
  margin:0;
  padding:0;
}
</style>
