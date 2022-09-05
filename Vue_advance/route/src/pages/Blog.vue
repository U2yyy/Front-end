<template>
  <div>
    <h1>My blog</h1>
    <p>Hello World !</p>
    <br>
    <ul>
      <li v-for="blog in myBlog" :key="blog.id">
<!--        <router-link :to="`/category/blog/article?id=${blog.id}&title=${blog.title}`">Click to change to blog{{blog.id}}</router-link>-->
<!--        使用字符串或者是对象形式传参-->
<!--        <router-link
            :to="{
              name:'article',
              query:{
                id:blog.id,
                title:blog.title
              }
            }"
            >Click to change to blog{{blog.id}}</router-link>-->
<!--        使用params传参,其对象形式与使用query传参区别不大，此处不表-->
            <router-link :to="`/category/blog/article/${blog.id}/${blog.title}`">Click to change to blog{{blog.id}}</router-link>
      </li>
    </ul>
    <br>
    <keep-alive include="Article">
      <router-view></router-view>
    </keep-alive>
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