<template>
  <div>
    <h1>My blog</h1>
    <p>Hello World !</p>
    <br>
    <ul>
      <li v-for="blog in myBlog" :key="blog.id">
<!--        <router-link :to="`/category/blog/article?id=${blog.id}&title=${blog.title}`">Click to change to blog{{blog.id}}</router-link>-->
<!--        使用字符串或者是对象形式传参-->
        <router-link
            :to="{
              name:'article',
              query:{
                id:blog.id,
                title:blog.title
              }
            }"
            >Click to change to blog{{blog.id}}</router-link>
      </li>
    </ul>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data(){
    return{
      myBlog:[
        {id:'001',title:'hi'},
        {id:'002',title:'hello'},
        {id:'003',title:'gii'},
      ]
    }
  }
}
</script>

<style scoped>

</style>