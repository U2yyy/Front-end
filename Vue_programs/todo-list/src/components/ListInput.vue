<template>
  <div>
    <h1>To-DoList</h1>
    <input id="inputBox" type="text" v-model="mission_name" @keyup.enter="add" placeholder="Please input your task,press enter to add">
    <br>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
export default {
  name: "ListInput",
  date(){
    return {
      mission_name:''
    }
  },
  props:['addTodos'],
  methods:{
    add(e){
      let todoMis = {
        id:nanoid(),
        name:this.mission_name,
        done:false
      }
      if(!this.mission_name)return alert("Input is empty!");
      this.addTodos(todoMis);
      e.target.value = '';
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