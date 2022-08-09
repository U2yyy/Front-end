<template>
  <div id>
    <div id="footer" v-show="todos.length">
      <input type="checkbox" v-model="isAll" @change="allChange(isAll)">Finished({{ finishedOfAll }})/All({{todos.length}})
      <button @click="clear">Clear finished tasks</button>
    </div>
    <span id="ind">Created by U2y</span>
  </div>
</template>

<script>
export default {
  name: "ListFooter",
  props:['todos','allChange','clear'],
  computed:{
    finishedOfAll(){
      const finishedNum = this.todos.reduce((pre,current)=>{
        return pre + (current.done ? 1 : 0);
      },0);
      return finishedNum;
    },
    isAll:{
      get(){
        return this.finishedOfAll === this.todos.length;
      },
      set(value){
        this.allChange(value);
      }
    }
  }
}
</script>

<style scoped>
  #footer{
    width: 97%;
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
    height: 170px;
  }
  input{
    float: left;
  }
  button{
    cursor: pointer;
    margin-top: 1px;
    margin-right: 5px;
    float: right;
    color: white;
    background: red;
    border-radius: 5px;
    border:solid 1px black;
  }
  #ind{
    float: right;
    font-family: "Cascadia Mono";
    margin-bottom: 5px;
    margin-right: 5px;
  }
</style>