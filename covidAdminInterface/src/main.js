import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './../node_modules/bulma/css/bulma.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';


Vue.use(VueAxios, axios);
Vue.use(Vuex);
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
// import 'leaflet/dist/leaflet.css';
//
// Vue.component('l-map', LMap);
// Vue.component('l-tile-layer', LTileLayer);
// Vue.component('l-marker', LMarker);

Vue.use(router);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount("#app");
