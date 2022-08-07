<template>
  <School></School>
  <Student></Student>
</template>

<script>
  import Student from './Student.vue'
  import School from './School.vue'
  export default {
    name:'App',
    components:{
      Student,
      School
    }
  }
</script>