<template>

</template>

<script>
export default {
  name: "Test1",
  methods:{
    function(data){
      console.log(data);
    }
  },
  mounted() {
    this.$bus.$on('diy',this.function)
  }
}
</script>

<style scoped>

</style>