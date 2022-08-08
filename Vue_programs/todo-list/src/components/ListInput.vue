<template>
  <div>
    <h1>To-DoList</h1>
    <input id="inputBox" type="text" v-model="mission" @keydown.enter="DoInput" placeholder="Please input your task,press enter to add">
    <br>
  </div>
</template>

<script>
export default {
  name: "ListInput",
  date(){
    return {
      mission:''
    }
  },
  methods:{
    DoInput(){

    }
  }
}
</script>

<style scoped>
  #inputBox{
    width: 280px;
    margin-bottom: 10px;
    padding: 5px;
  }
</style>