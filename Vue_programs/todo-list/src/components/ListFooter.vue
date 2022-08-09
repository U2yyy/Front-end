<template>
  <div id>
    <div id="footer" v-show="todos.length">
<!--全选按钮-->
      <input type="checkbox" v-model="isAll" @change="allChange(isAll)">Finished({{ finishedOfAll }})/All({{todos.length}})
<!-- 清除所有已完成任务-->
      <button @click="clear">Clear finished tasks</button>
    </div>
    <span id="ind">Created by U2y</span>
  </div>
</template>

<script>
export default {
  name: "ListFooter",
  //todos是App传入的所有当前任务项；allChange是App传入的全选函数；clear是App传入的清除所有已完成任务的函数
  props:['todos','allChange','clear'],
  computed:{
    //用于计算所有完成项的个数
    finishedOfAll(){
      const finishedNum = this.todos.reduce((pre,current)=>{
        return pre + (current.done ? 1 : 0);
      },0);
      return finishedNum;
    },
    //用于判断是否所有选项都已完成
    isAll:{
      get(){
        return this.finishedOfAll === this.todos.length;
      },
      //由于在App中有值的更改，因此这里需要填一个setter，但实际上什么都不用写，已经用allChange逻辑写好了
      set(value){
/*        console.log(value)
        this.allChange(value);*/
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