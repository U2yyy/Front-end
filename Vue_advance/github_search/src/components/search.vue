<template>
  <div>
    <h1>Search Github Users</h1>
    <input @keyup.enter="searchUsers" type="text" placeholder="Please input your Github name" v-model="userName">
    <button @click="searchUsers">Search</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "search",
  data(){
    return{
      userName:''
    }
  },
  methods:{
    searchUsers(){
      this.$bus.$emit('changeStatus')
      axios.get(`https://api.github.com/search/users?q=${this.userName}`).then(
          response => {
            console.log('发送数据')
            this.$bus.$emit('getUsers',response.data.items)
          },
          error => {
            console.log(error.message)
          }
      )
    }
  }
}
</script>

<style scoped>
  div{
    margin-left:50px;
    margin-right: 50px;
    width: auto;
    height: auto;
    background: gray;
    text-align: center;
  }
  input{
    width: 200px;
    text-align: center;
    margin-bottom: 10px;
  }
  h1{
    margin-top: 0;
  }
</style>