<template>
  <div id="app">
    <nav class="bd-navbar navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <!--        <a class="navbar-item" href="https://bulma.io">-->
          <!--          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">-->
          <!--        </a>-->

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              <router-link
                      :to="{ name: 'root' }"
              >
                <strong>Covenant</strong>
              </router-link>
            </a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item">Username</a>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-light">
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container" id="main">
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <label>
            <input id="search-box" class="input" type="text" placeholder="Search User">
          </label>
        </div>
        <div class="column">
          <button v-bind:class="[searchIsLoading ? 'is-loading' : '', 'button', 'is-primary']" type="submit" >Search</button>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        searchIsLoading: true,
      }
    }
  }
</script>

<style lang="scss">
  #main {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
</style>
