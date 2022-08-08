<template>
  <div id="table">
      <ListMission v-for="todo in todos" :key="todo.ID" :todoObj="todo"></ListMission>
  </div>
</template>

<script>
import ListMission from "@/components/ListMission";
export default {
  name: "TodoList",
  data(){
    return {
      todos:[
        {ID:'001',name:'Dinner',done:true},
        {ID:'002',name:'VideoGame',done:false},
        {ID:'003',name:'Code',done:true}
      ]
    }
  },
  components:{ListMission}
}
</script>
<style scoped>

</style>