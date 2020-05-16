<template>
    <div id="app">
        <nav class="bd-navbar navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true">Hey</span>
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
                                <img src="./assets/cov-logo.png" height="90" width="135">
                            </router-link>
                        </a>
                    </div>
                    <div class="navbar-end">
                        <a class="navbar-item" v-if='hideNavItemsOnUrls()'>
                            <router-link
                                    :to="{ name: 'search' }"
                            >
                                <strong>Search</strong>
                            </router-link>
                        </a>
                        <a class="navbar-item" v-if='hideNavItemsOnUrls()'>
                            <router-link
                                    :to="{ name: 'registration' }"
                            >
                                <strong>Register</strong>
                            </router-link>
                        </a>
                        <a class="navbar-item" v-if='hideNavItemsOnUrls()'><strong>Username</strong></a>
                        <div class="navbar-item" v-if='hideNavItemsOnUrls()'>
                            <div class="buttons">
                                <a class="button is-light" v-on:click="signOut">
                                    <strong>Sign Out</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <progress v-if="getShowProgressBarCount > 0" class="progress is-small is-info" max="100">15%</progress>
        <div class="container" id="main">
            <router-view/>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        props: {
            keycloak: Object
        },
        data() {
            return {
                searchIsLoading: false,
            }
        },
        methods: {
            hideNavItemsOnUrls() {
                return this.$route.path !== "/login" && this.$route.path !== "/sendMessage";
            },
            signOut() {
                console.log("log out?");
                this.keycloak.logout();
            }
        },
        computed: {
            getShowProgressBarCount() {
                return this.$store.getters.getShowProgressBarCount;
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