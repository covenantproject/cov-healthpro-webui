import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './../node_modules/bulma/css/bulma.css';
import store from './data/index.js';
import Vuex from 'vuex';
import axios from 'axios';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCmAfPlAloWEJYI4VqtAXOEZdvatjzAvEA",
    libraries: "places" // necessary for places input
  }
});

axios.interceptors.request.use((request) => {
  console.log(request);
  return request;
}, (error) => {
  return Promise.reject(error.message);
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
