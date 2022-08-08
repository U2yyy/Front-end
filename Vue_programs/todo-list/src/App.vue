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
  margin:auto;
  position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);border: 1px solid;text-align:center;height: 400px;width:300px;
}
</style>
