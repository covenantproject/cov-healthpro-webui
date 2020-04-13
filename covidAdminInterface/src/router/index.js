import Router from "vue-router";
import Vue from "vue";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import SearchResults from "../views/SearchResults";
import UserInfo from "../views/UserInfo";

Vue.use(Router);

const routes = new Router({
//mode: "history", //TODO: removes the hash as the first element of the url - remove this line for production
  base: window.location.pathname,

  routes: [
    {
      path: "/",
      name: "root",
      type: "root",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/searchResults",
      name: "searchResults",
      component: SearchResults,
    },
    {
      path: "/userInfo",
      name: "userInfo",
      component: UserInfo
    }
  ]
});

export default routes;
