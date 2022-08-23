<template>
  <div class="hello">
    <button @click="isShow=!isShow">Click to change the element</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">HelloWorld!</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      isShow:true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello-enter-active{
    animation:myTransition 1s linear;
  }
  .hello-leave-active{
    animation:myTransition 1s linear reverse;
  }
  @keyframes myTransition {
    from{
      transform: translateX(-100%) ;
    }
    to{
      transform: translateX(0px);
    }
  }
</style>
