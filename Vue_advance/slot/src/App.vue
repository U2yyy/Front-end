<template>
  <div>
<!--    <test>-->
<!--      <template slot="mySlot">-->
<!--        <h1>{{names}}</h1>-->
<!--      </template>-->
<!--    </test>-->
    <test>
      <template slot-scope="yme">
        <h1>{{yme.name}}</h1>
      </template>
    </test>
  </div>
</template>

<script>
import test from "@/components/test";
export default {
  name: 'App',
  components: {
    test
  },
  data(){
    return{
      names:'U2y'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
