<template>
  <div id="app">
    <ListInput></ListInput>
    <TodoList></TodoList>
    <ListFooter></ListFooter>
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
  height: 400px;
  width:300px;
  overflow: auto;
}
</style>
