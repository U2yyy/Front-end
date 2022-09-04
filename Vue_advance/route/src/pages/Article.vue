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
  name: "Article"
}
</script>

<style scoped>

</style>