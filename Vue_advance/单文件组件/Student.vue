<template>
  <div id="student">
    <h2>StudentName:{{name}}</h2>
    <h2>StudentAge:{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name:'Student',
    data(){
      return {
        name:'U2y',
        age:18
      }
    }
  }
</script>

<style>
  #student{
    background: red;
  }
</style>