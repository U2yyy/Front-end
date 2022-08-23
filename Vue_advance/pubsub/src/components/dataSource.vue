<template>
  <button @click="myFun2">点我传递信息</button>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "dataSource",
  data(){
    return{
      name:'U2y'
    }
  },
  methods:{
    myFun2(){
      pubsub.publish('Demo',this.name)
    }
  }
}
</script>

<style scoped>

</style>