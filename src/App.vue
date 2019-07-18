<template>
  <div class="container-fluid pt-4 px-5">
    <app-navbar></app-navbar>
    <div class="container-fluid mt-5 p-0">
      <router-view></router-view>
    </div>
    <notifications group="app" position="bottom right"/>
  </div>
</template>
<script>
  import Navbar from './components/Navbar'
  export default {
    components :{
      appNavbar : Navbar
    }

  }
</script>
<style lang="scss">

</style>
