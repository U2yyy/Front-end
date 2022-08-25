<template>
  <div>
    <button @click="isShow=!isShow">Click to change the words</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounce"
        leave-active-class="animate__bounceOut"
    >
      <h1 key="1" v-show="isShow">Hello Animate.css</h1>
      <h1 key="2" v-show="!isShow">Hello HUST</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "animateCSS",
  data(){
    return{
      isShow : true
    }
  }
}
</script>

<style scoped>

</style>