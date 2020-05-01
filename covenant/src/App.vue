<template>
    <div id="app">
        <nav class="bd-navbar navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

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
                        <a class="navbar-item" v-if='hideNavItemsOnUrls()'>Register</a>
                        <a class="navbar-item" v-if='hideNavItemsOnUrls()'>Username</a>
                        <div class="navbar-item" v-if='hideNavItemsOnUrls()'>
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
            <div class="columns is-mobile is-centered" v-if='hideSearchBoxOnUrls()'>
                <div class="column is-three-fifths">
                    <label>
                        <input id="search-box" class="input" type="text" placeholder="Search User">
                    </label>
                </div>
                <div class="column is-one-fifth">
                    <button v-bind:class="[searchIsLoading ? 'is-loading' : '', 'button', 'is-primary']" type="submit" @click="toggleLoad">Search
                    </button>
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
                searchIsLoading: false,
            }
        },
        methods: {
            toggleLoad() {
                this.searchIsLoading = !this.searchIsLoading;
            },
            hideSearchBoxOnUrls(){
                return this.$route.path !== "/login" && this.$route.path !== "/sendMessage" && this.$route.path !== "/registration";
            },
            hideNavItemsOnUrls() {
                return this.$route.path !== "/login" && this.$route.path !== "/sendMessage";
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
