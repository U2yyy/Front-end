<template>
  <div id="student">
    <h1>MyStudent</h1>
    <br>
    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
    <button @click="change">Click me to change student</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data(){
    return {
      name:'U2y',
      age:20
    }
  },
  methods:{
    change(){
      this.name = 'YME';
      this.age = 19
    }
  }
}
</script>

<style scoped>
  #student{
    background: #2aabd2;
    border: solid aquamarine;
  }
  h2{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: larger;
    font-style: inherit;
  }
  button{
    font-style: initial;
    font-size: 30px;
    height: 50px;
  }
</style>