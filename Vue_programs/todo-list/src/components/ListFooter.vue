<template>
  <div id="footer">
    <input type="checkbox">Finished{{finish}}/All{{all}}
    <button>Clear finished tasks</button>
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
    margin-top: 5px;
  }
  input{
    float: left;
  }
  button{
    margin-right: 5px;
    float: right;
    color: white;
    background: red;
    border-radius: 5px;
  }
</style>