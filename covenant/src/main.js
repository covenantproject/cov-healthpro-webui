import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './../node_modules/bulma/css/bulma.css';
import store from './data/index.js';
import Vuex from 'vuex';
import * as Keycloak from 'keycloak-js'
//import axios from 'axios';

Vue.use(Vuex);

Vue.config.productionTip = false;

//keycloak init options
let initOptions = {
  url: 'http://3.7.102.213:9763/auth', realm: 'master', clientId: 'COV-Client', onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad, "checkLoginIframe": false }).success((auth) => {

  if (!auth) {
    window.location.reload();
  }

  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app');

  localStorage.setItem("kc-token", keycloak.token);
  localStorage.setItem("kc-refresh-token", keycloak.refreshToken);

}).error(() => {

});