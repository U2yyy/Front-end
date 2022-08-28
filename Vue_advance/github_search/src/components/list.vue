<template>
  <div class="row">
    <h2 v-if="isBegin" style="margin: auto">Welcome to use !</h2>
    <h2 v-if="isSearch" style="margin: auto">Loading...</h2>
    <div class="card" v-for="user in users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px">
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data(){
    return{
      users:[],
      isBegin:true,
      isSearch:false
    }
  },
  mounted() {
    this.$bus.$on('getUsers',(data)=>{
      this.isSearch = !this.isSearch
      console.log('收到数据')
      this.users = data
    })
    this.$bus.$on('changeStatus',()=>{
      this.isBegin = !this.isBegin
      this.isSearch = !this.isSearch
    })
  }
}
</script>

<style scoped>
.row{
  margin: 0 auto;
  text-align: center;
}
.card {
  margin-left: 150px;
  float: left;
  width: 20%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.card-text {
  font-size: 85%;
}
</style>