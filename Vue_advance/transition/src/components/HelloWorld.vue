<template>
  <div class="hello">
    <button @click="isShow=!isShow">Click to change the element</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">HelloWorld!</h1>
    </transition>
    <button @click="isShow1=!isShow1">Click to show yme</button>
    <transition name="yme" appear>
      <h1 v-show='isShow1'>YME猪猪</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      isShow:true,
      isShow1:true
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

  /* 另一种过渡方式，不需要使用关键帧动画 */
  .yme-enter,.yme-leave-to{
    transform: translateX(-100%);
  }
  .yme-enter-to,.yme-leave{
    transform: translateX(0);
  }
  .yme-enter-active,.yme-leave-active{
    transition: 1s linear;
  }
</style>
