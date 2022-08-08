<template>
  <div id="mission" @mouseover="hangover" @mouseleave="passaway" :class="hang"  @click="completed = !completed">
    <input type="checkbox" :checked="completed">{{todoObj.name}}
    <button id="delete" v-show="selected">Delete</button>
  </div>
</template>

<script>
export default {
  name: "ListMission",
  data(){
    return {
      selected:false,
      hang:'notover',
      completed:this.todoObj.done
    }
  },
  props:['todoObj'],
  methods:{
     hangover(){
       this.hang = 'over';
       this.selected = true;
     },
    passaway(){
       this.hang = 'notover';
       this.selected = false;
    }
  }
}
</script>

<style scoped>
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
    margin-left: auto;
    margin-right: auto;
    width: 97%;
    border: 1px solid;
    height: 23px;
    border-radius: 3px;
  }
  #delete{
    line-height: 20px;
    float: right;
    margin: auto;
    color: white;
    background: red;
    border: solid 1px black;
    border-radius: 3px;
    }
</style>