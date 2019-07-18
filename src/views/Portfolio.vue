<template>
  <div class="row animated fadeInUp">
    <div class="col-lg-3 col-md-4 col-sm-6" v-if="stocks.length >0" v-for="stock in stocks">
      <app-portfolio :data="stock"></app-portfolio>
    </div>
  </div>
</template>
<script>
  import Portfolio from '../components/portfolio'
  export default{
    components:{
      appPortfolio : Portfolio
    },
    data(){
      return{

      }
    },
    computed:{
      stocks(){
        return this.$store.getters.stockPortfolio;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/app";
</style>
