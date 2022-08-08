<template>
  <div>
    <h1>To-DoList</h1>
    <input id="inputBox" type="text" v-model="mission" @keydown.enter="add" placeholder="Please input your task,press enter to add">
    <br>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
export default {
  name: "ListInput",
  date(){
    return {
      mission:''
    }
  },
  props:['addTodos'],
  methods:{
    add(){
      let todoMis = {
        id:nanoid(),
        name:this.mission,
        done:false
      }
      if(!this.mission)return alert("Input is empty!")
      this.addTodos(todoMis);
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