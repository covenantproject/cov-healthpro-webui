<template>
    <div class="container" id="main">
        <div class="columns is-mobile is-centered">
            <div class="column is-three-fifths">
                <label>
                    <input id="search-box" class="input" type="text" placeholder="Search User">
                </label>
            </div>
            <div class="column is-one-fifth">
                <button v-bind:class="[searchIsLoading ? 'is-loading' : '', 'button', 'is-primary']" type="submit" @click="onSearchButtonClicked">Search
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchBarComponent",
        data() {
            return {
                searchIsLoading: false,
            }
        },
        methods: {
            onSearchButtonClicked(){
                this.toggleLoad();
                // TODO: Dispatch Api call
            },
            toggleLoad() {
                this.searchIsLoading = !this.searchIsLoading;
            },
        }
    }
</script>

<style scoped>

</style>