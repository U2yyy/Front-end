<template>

</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "dataUser",
  methods:{
    myFun(MsgName,data){
      console.log("Demo被调用了",data)
    }
  },
  mounted() {
    this.pid = pubsub.subscribe('Demo',this.myFun)
  },
  beforeDestroy() {
    pubsub.unsubcribe(this.pid)
  }
}
</script>

<style scoped>

</style>