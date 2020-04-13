import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './../node_modules/bulma/css/bulma.css';

Vue.use(router);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount("#app");
