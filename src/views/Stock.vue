<template>
  <div class="row animated fadeInUp">
    <div class="col-lg-3 col-md-4 col-sm-6" v-for="stock in stocks">
        <app-stock :data="stock"></app-stock>
    </div>
  </div>
</template>
<script>
  import Stock from '../components/stock'
  export default{
      components:{
        appStock : Stock
      },
    data(){
        return{

        }
    },
    computed:{
        stocks(){
          return this.$store.getters.stock;
        }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/app";
</style>
