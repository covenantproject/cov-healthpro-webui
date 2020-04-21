import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './../node_modules/bulma/css/bulma.css';
import store from './data/index.js';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
Vue.config.productionTip = false;

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
