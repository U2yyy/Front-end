<template>
  <div id="app">
    <ListInput :addTodos="addTodos"></ListInput>
    <TodoList :todos="todos" :selectList="selectList" :deleteList="deleteList"></TodoList>
    <ListFooter :todos="todos" :allChange="allChange" :clear="clear"></ListFooter>
  </div>
</template>
<script>
import ListInput from "@/components/ListInput";
import ListFooter from "@/components/ListFooter";
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    ListInput,
    ListFooter,
    TodoList
  },
  data(){
    return {
      //所有任务的数据来源
      todos: JSON.parse(localStorage.getItem('todolist')) || []
    }
  },
  methods:{
    //添加数据的方法
    addTodos(todoObj){
      this.todos.unshift(todoObj);
    },
    //这是绑定在checkbox上的方法，即选中当前任务，改变任务完成状态
    selectList(ID){
      this.todos.forEach((todoObj)=>{
        if(todoObj.id === ID)todoObj.done = !todoObj.done;
      })
    },
    //绑定在Delete按钮上的方法，删除当前任务
    deleteList(ID){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== ID;
      })
    },
    //绑定在全选按钮上的方法，以实现全选或全不选
    allChange(isAll){
      this.todos.forEach((todoObj)=>{
        if(isAll)todoObj.done = false;
        else todoObj.done = true;
      })
    },
    //清除所有已完成的任务
    clear(){
      if(!confirm("clear all finished tasks?"))return;
      this.todos = this.todos.filter((todoObj)=>{
        return !todoObj.done;
      })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todolist',JSON.stringify(value));
      }
    }
  }
}
</script>

<style>
#app {
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  border: 1px solid;
  text-align:center;
  height: auto;
  width:300px;
  overflow: auto;
}
</style>
