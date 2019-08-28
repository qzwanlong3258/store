<template>
  <div id="app">


<!--  <Users></Users>-->


    <router-view/>
  </div>
</template>
<!--增加-->

<style lang="scss">

</style>
<script>
  import Users from './components/Users'

  export default{
    data(){
      return{

      }
    },
    components:{
      Users
    }

  }


</script>