<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-3 px-5">
    <router-link class="navbar-brand" :to="{name :'Home'}"><i class="fas fa-truck-loading mr-2 text-success"></i>Stock <span class="text-success">Trader</span></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Stock'}"><i class="fas fa-cubes mr-2"></i>Stocks</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'Portfolio'}"><i class="fas fa-warehouse mr-2"></i>Portfolio</router-link>
        </li>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0">
        <li class="nav-item ">
          <a class="nav-link" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="saveData"><i class="fas fa-save mr-2"></i>Save Data</a>
            <a class="dropdown-item" @click="loadData"><i class="fas fa-cloud-upload-alt mr-2"></i>Load Data</a>
          </div>
        </li>
      <li class="nav-item ">
        <a  class="nav-link"><b class="funds">Funds :</b> {{getFunds}} <b><i class="fas fa-dollar-sign"></i></b></a>
      </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
      data(){
        return {}
      },
    computed : {
        ...mapGetters({
          getFunds : 'funds'
        })
    },
    methods:{
      endDay(){
        this.$store.dispatch('endDayTradeAction');
      },
      saveData(){
        const data = {
          funds : this.$store.getters.funds,
          stocks : this.$store.getters.stock,
          portfolio : this.$store.getters.portfolio
        };
        this.$http.put('https://trucktrade-92153.firebaseio.com/data.json',data)
          .then(response =>{
            if(response.ok){
              this.$notify({ group: 'app', title: 'Congratulations',text: 'Data save successfully', type :'success',speed : '1000',duration : '100'});
            }else{
              this.$notify({ group: 'app', title: 'we are sorry',text: 'an unexpected error while trying to save data', type :'error',speed : '1000',duration : '100'});
            }

          });
      },
      loadData(){
        this.$http.get('https://trucktrade-92153.firebaseio.com/data.json')
          .then(response =>{
            return response.json();
          })
          .then(data=>{
            this.$store.dispatch('changeFunds',data.funds);
            this.$store.dispatch('changeStock',data.stocks);
            this.$store.dispatch('changePortfolio',data.portfolio);
            this.$notify({ group: 'app', title: 'Success',text: 'Congratulations !Data loaded successfully', type :'success',speed : '1000',duration : '100'});

          });
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../styles/edges";
  @import "../styles/fonts";
  nav{
    border-radius: $radius-sm;
  }
  .nav-link{
    font-family: $font-montserrat;
  }
  .nav-link:hover{
    color: #4BC353!important;
  }
  .navbar-brand{
    font-family: $font-dosis;
    font-weight: bolder;
  }
  .active{
    color: #2D8649!important;
  }
  .funds{
    font-family: $font-titllium;
  }
</style>
