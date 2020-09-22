import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'bulma/css/bulma.css';
import store from './data/index.js';
import Vuex from 'vuex';

import * as Keycloak from 'keycloak-js'
import * as VueGoogleMaps from 'vue2-google-maps';
import axios from "axios";

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
  url: 'https://aws1.covn.in:9443/auth/', realm: 'master', clientId: 'CovenantProd', "credentials": {
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
    render: h => h(App, {props: {keycloak: keycloak}}),
  }).$mount('#app');

  localStorage.setItem("kc-token", keycloak.token);
  localStorage.setItem("kc-refresh-token", keycloak.refreshToken);

  setInterval(() =>{
    keycloak.updateToken(70).success((refreshed)=>{
      if (refreshed) {
        console.log.debug('Token refreshed'+ refreshed);
      } else {
        console.log('Token not refreshed, valid for '
            + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).error(()=>{
      console.log('Failed to refresh token');
    });
  }, 60000)

}).error(() => {
  console.log.error("Authenticated Failed");
});

axios.interceptors.request.use((request) => {
  console.log("interceptor");
  console.log(request);
  return request;
}, (error) => {
  return Promise.reject(error.message);
});