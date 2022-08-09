<template>
  <div id="app">
    <ListInput :addTodos="addTodos"></ListInput>
    <TodoList :todos="todos" :selectList="selectList" :deleteList="deleteList"></TodoList>
    <ListFooter :todos="todos"></ListFooter>
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
      todos:[
        {ID:'001',name:'Dinner',done:true},
        {ID:'002',name:'VideoGame',done:false},
        {ID:'003',name:'Code',done:true}
      ]
    }
  },
  methods:{
    addTodos(todoObj){
      this.todos.unshift(todoObj);
    },
    selectList(ID){
      this.todos.forEach((todoObj)=>{
        if(todoObj.ID === ID)todoObj.done = !todoObj.done;
      })
    },
    deleteList(ID){
      this.todos = this.todos.filter((todo)=>{
        return todo.ID !== ID;
      })
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
