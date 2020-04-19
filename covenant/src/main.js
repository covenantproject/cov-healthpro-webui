import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router/index.js';
import './../node_modules/bulma/css/bulma.css';
import store from './data/index.js';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(axios);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
