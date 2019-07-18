import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Notifications from 'vue-notification'
import vueResource from 'vue-resource'
Vue.config.productionTip = false;


Vue.use(Notifications);
Vue.use(vueResource);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
