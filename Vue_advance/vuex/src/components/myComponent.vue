<template>
  <div>
    <h1>{{$store.state.number}}</h1>
    <button @click="addNum(1)">Click to add 1</button>
    <button @click="ifAdd(1)">Click to add 1(with conditions)</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  name: "myComponent",
  methods:{
    /* addNum(){
      this.$store.commit('ADD',1)
    }, */
    ...mapMutations({addNum:'ADD'}),
    /* ifAdd(){
      this.$store.dispatch('add',1)
    } */
    ...mapActions({ifAdd:'add'})
  },
  computed:{
    ...mapState(['number'])
  }
}
</script>

<style scoped>

</style>