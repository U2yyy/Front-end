<template>
  <div>
    <h1>HelloWorld</h1>
    <button @click="myFun">Click me to translate the data</button>
  </div>
</template>

<script>
export default {
  name: "data1",
  data(){
    return{
      name: 'U2y',
      email: 'a1535887812@gmail.com'
    }
  },
  methods:{
    myFun() {
      this.$bus.$emit('diy',this.$data)
    }
  }
}
</script>

<style scoped>

</style>