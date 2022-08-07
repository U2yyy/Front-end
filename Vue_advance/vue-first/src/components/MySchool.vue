<template>
  <div id="school">
    <h1>MySchool</h1>
    <br>
    <h2>name:{{name}}</h2>
    <h2>address:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data(){
    return{
      name:'Huazhong-University',
      address:'Wuhan'
    }
  }
}
</script>

<style scoped>
  #school{
    border: dotted burlywood;
  }
</style>