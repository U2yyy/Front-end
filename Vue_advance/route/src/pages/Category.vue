<template>
  <div>
    <h1>Here is Category</h1>
    <router-link to="/category/blog">Blog</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Category"
}
</script>

<style scoped>

</style>