<template>
  <div>
    <h1>To-DoList</h1>
<!--    //输入框-->
    <input id="inputBox" type="text" v-model="mission_name" @keyup.enter="add" placeholder="Please input your task,press enter to add">
    <br>
  </div>
</template>

<script>
//引入nanoid便于生成随机ID
import {nanoid} from 'nanoid';
export default {
  name: "ListInput",
  data(){
    return {
      mission_name:''
    }
  },
  //App组件传入了addTodos方法以便将输入的数据传入到App中
  props:['addTodos'],
  methods:{
    add(e){
      let todoMis = {
        id:nanoid(),
        name:this.mission_name,
        done:false
      }
      //如果输入框是空则不输入
      if(!this.mission_name)return alert("Input is empty!");
      //调用App传入的addTodos方法
      this.addTodos(todoMis);
      //清空页面缓存和实际值
      e.target.value = '';
      this.mission_name = '';
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