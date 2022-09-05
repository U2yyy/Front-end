<template>
  <div>
    <h2>
<!--      id:{{$route.query.id}}
      title:{{$route.query.title}}-->
      id:{{$route.params.id}}
      title:{{$route.params.title}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Article",
  /*使用下面这两个生命钩子时必须确保展示该组件的地方，也就是<router-view>处被<keep-active>包裹住，其必须和该属性配合使用，否则将会失效*/
  activated() {
    console.log('u entered')
  },
  deactivated() {
    console.log('u leaved')
  }
}
</script>

<style scoped>

</style>