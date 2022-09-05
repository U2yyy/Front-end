<template>
  <div>
    <button @click="back">Back</button>
    <button @click="forward">Forward</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    }
  }
}
</script>

<style scoped>

</style>