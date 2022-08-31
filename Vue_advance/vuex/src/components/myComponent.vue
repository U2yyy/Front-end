<template>
  <div>
    <h1>{{$store.state.number}}</h1>
    <button @click="addNum">Click to add 1</button>
    <button @click="ifAdd">Click to add 1(with conditions)</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "myComponent",
  methods:{
    addNum(){
      this.$store.commit('ADD',1)
    },
    ifAdd(){
      this.$store.dispatch('add',1)
    }
  },
  computed:{
    ...mapState(['number'])
  }
}
</script>

<style scoped>

</style>