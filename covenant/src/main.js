import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './../node_modules/bulma/css/bulma.css';
import store from './data/index.js';
import Vuex from 'vuex';
import * as Keycloak from 'keycloak-js';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Vuex);
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCmAfPlAloWEJYI4VqtAXOEZdvatjzAvEA",
    libraries: "places" // necessary for places input
  }
});

//keycloak init options 
//CovenantProd , 26b5e262-27e9-491a-a9df-efea174ee54c
//COV-Client-4200, 1720fbbd-c9a2-4677-9658-232755a1b397
let initOptions = {
  url: 'http://3.7.102.213:9763/auth', realm: 'master', clientId: 'CovenantProd', onLoad: 'login-required', "credentials": {
    "secret": "26b5e262-27e9-491a-a9df-efea174ee54c"
  }  
};

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

// axios.interceptors.request.use((request) => {
//   console.log(request);
//   return request;
// }, (error) => {
//   return Promise.reject(error.message);
// });