<template>
  <div class="jumbotron animated fadeInDown">
    <h1 class="display-4">Trade or view your portfolio</h1>
    <p class="lead">You May save or load your data to firebase it's really easy , scalable , fastest app with SPA (single page application) technologie
    <br/> Click 'End day link to start new trade dat with New prices'
    </p>
    <hr class="my-4">
    <p class="d-inline-block mr-4">Your actual Funds is :   <b>{{getFunds}} <i class="fas fa-dollar-sign"></i></b></p>
    <router-link class="btn btn-primary btn-sm d-inline-block" role="button" :to="{name: 'Portfolio' }"><i class="fas fa-truck-loading mr-2"></i>Check your porfolio </router-link>
  </div>
</template>
<script>
  export default{
      computed:{
        getFunds(){
          return this.$store.getters.funds;
        }
      }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/app";
  @import "../styles/fonts";
  .jumbotron{
    .display-4{
        font-family: $font-montserrat;
        font-weight: bolder;
      font-size: 3rem;
    }

    .lead{
      font-family: $font-quicksand;
      font-size: 1rem;
    }
  }
</style>
