<template>
  <div id="app">


<!--  <Users></Users>-->

<!--使用-->
    <router-view/>
  </div>
</template>


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