<template>
  <div class="card mb-4">
    <div class="card-header ">
      <b class="title mr-2 ">{{data.name}}</b> <span class="badge badge-secondary badge-pill">Price : {{data.price}} <i class="fas fa-dollar-sign ml-1 mr-1"></i>| Quantity : {{data.quantity}}</span>
    </div>
    <div class="card-body">
      <div class="row no-gutters">
        <div class="col-lg-8 p-1">
          <input type="number" class="form-control-sm form-control" placeholder="Quantity" v-model="Quantity">
        </div>
        <div class="col-lg-4 d-flex align-items-center p-1">
          <button class="btn btn-success btn-block btn-sm" @click="sell"><i class="fas fa-hand-pointer mr-2"></i>Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props : {
      data : {
        type : Object,
        required : true
      }
    },
    data(){
      return{
        Quantity: 0
      }
    },
    methods : {
      sell(){
        if(this.Quantity > 0){
          let cost = this.data.price * this.Quantity;
          console.log(cost);
            this.$store.dispatch('sellStock',{id : this.data.id,quantity : parseInt(this.Quantity), stockPrice : this.data.price});
            this.$store.dispatch('updateFunds',cost);
            this.$notify({ group: 'app', title: 'Validation',text: 'Congratulations ! you sold '+this.Quantity+' of '+this.data.name, type :'success',speed : '1000',duration : '100'});
        }else{
          this.$notify({ group: 'app', title: 'Validation',text: 'Enter quatity bigger than 0 that you want to sell', type :'error',speed : '1000',duration : '100'});
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../styles/fonts";
  @import "../styles/edges";
  .card{
    .title{
      font-family: $font-russone;
      font-weight: normal;
    }
    .card-header{
      background-color: #A7E2CC;
      color: white;
      border: none;
    }
    .card-body{
      border: none;

      background-color: #A7E2CC;

      input , input:hover , input:focus{
        border: none!important;
        outline: none!important;
        box-shadow: none!important;
        border-radius: $radius-sm;
        padding-left: 20px;
      }

      .btn-success{
        background-color: #2D8649!important;
        border-radius: $radius-sm;
      }
    }
  }
</style>
