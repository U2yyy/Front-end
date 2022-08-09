<template>
  <div id="mission" @mouseover="hangover" @mouseleave="passaway" :class="missionStyle"  @click="changeSel(todoObj.ID)">
    <input type="checkbox" :checked="todoObj.done">{{todoObj.name}}
    <button id="delete" v-show="selected" @click="deleteMis(todoObj.ID)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "ListMission",
  data(){
    return {
      selected:false,
      hang:'notover',
      completed:this.todoObj.done,
      missionStyle:{
        through:false,
        notover:true,
        over:false
      }
    }
  },
  props:['todoObj','selectList','deleteList'],
  methods:{
     hangover(){
       this.missionStyle.over = true;
       this.missionStyle.notover = false;
       this.selected = true;
     },
    passaway(){
      this.missionStyle.over = false;
      this.missionStyle.notover = true;
       this.selected = false;
    },
    changeSel(ID){
      this.completed = !this.completed;
      this.selectList(ID);
    },
    deleteMis(ID){
       if(confirm("Confirm the deletion"))
         this.deleteList(ID);
    }
  },
  mounted() {
    if(this.todoObj.done)this.missionStyle.through = true;
    else this.missionStyle.through = false;
  },
  updated() {
    if(this.todoObj.done)this.missionStyle.through = true;
    else this.missionStyle.through = false;
  }
}
</script>

<style scoped>
  .through{
    text-line-through: single;
    text-decoration: line-through;
  }
  input{
    float: left;
  }
  .notover{
    background: white;
  }
  .over{
    background: #bab8b8;
  }
  #mission{
    user-select: none;
    margin-left: auto;
    margin-right: auto;
    width: 97%;
    border: 1px solid;
    height: 23px;
    border-radius: 3px;
  }
  #delete{
    cursor: pointer;
    line-height: 20px;
    float: right;
    margin: auto;
    color: white;
    background: red;
    border: solid 1px black;
    border-radius: 3px;
    }
</style>