<template>
  <div id>
    <div id="footer">
      <input type="checkbox">Finished{{finish}}/All{{all}}
      <button>Clear finished tasks</button>
    </div>
    <span id="ind">Created by U2y</span>
  </div>
</template>

<script>
export default {
  name: "ListFooter",
  data(){
    return{
      all:'',
      finish:''
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