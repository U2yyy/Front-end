<template>
  <div>
<!--    <slot name="mySlot">默认内容</slot>-->
    <slot :name="name">默认内容</slot>
  </div>
</template>

<script>
export default {
  name: "test",
  data(){
    return{
      name:'YME'
    }
  }
}
</script>

<style scoped>

</style>