import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount("#app");
