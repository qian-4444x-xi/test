import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Swiper
import axios from "axios";
import "swiper/dist/css/swiper.min.css";

Vue.config.productionTip = false
Vue.prototype.$http=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
