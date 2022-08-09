<template>
  <div id="table">
      <ListMission v-for="todo in todos" :key="todo.ID" :todoObj="todo" :selectList="selectList"></ListMission>
  </div>
</template>

<script>
import ListMission from "@/components/ListMission";
export default {
  name: "TodoList",
  components:{ListMission},
  props:['todos','selectList']
}
</script>
<style scoped>
  #table{
    height: auto;
  }
</style>