<template>
  <div id="mission" @mouseover="hangover" @mouseleave="passaway">
    <input type="checkbox">{{mission}}
    <button id="delete" v-show="selected">Delete</button>
  </div>
</template>

<script>
export default {
  name: "ListMission",
  data(){
    return {
      mission:'',
      selected:false
    }
  },
  methods:{
     hangover(){
       this.selected = true;
     },
    passaway(){
       this.selected = false;
    }
  }
}
</script>

<style scoped>
  input{
    float: left;
  }
  #mission{
    margin: auto;
    width: 95%;
    border: 1px solid;
    height: 20px;
    border-radius: 3px;
  }
  #delete{
    float: right;
    margin: auto;
  }
</style>