<template>
  <div id="table">
<!--实现所有任务的展示    -->
      <ListMission v-for="todo in todos" :key="todo.ID" :todoObj="todo" :selectList="selectList" :deleteList="deleteList" ></ListMission>
  </div>
</template>

<script>
import ListMission from "@/components/ListMission";
export default {
  name: "TodoList",
  components:{ListMission},
  props:['todos','selectList','deleteList']
}
</script>
<style scoped>
  #table{
    height: auto;
  }
</style>