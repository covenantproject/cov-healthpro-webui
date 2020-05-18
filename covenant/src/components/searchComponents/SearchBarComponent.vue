<template>
    <div class="container" id="main">
        <div class="columns is-mobile is-centered">
            <div class="column">
                <label class="label">First Name</label>
                <input id="first-name" class="input" type="text" placeholder="First Name">
            </div>
            <div class="column">
                <label class="label">Last Name</label>
                <input id="last-name" class="input" type="text" placeholder="Last Name">
            </div>
            <div class="column">
                <label class="label">Phone Number</label>
                <input id="phone-number" class="input" type="text" placeholder="Phone Number">
            </div>
            <div class="column is-one-fifth">
                <button v-bind:class="[searchIsLoading ? 'is-loading' : '', 'button', 'is-info']" type="submit" @click="onSearchButtonClicked">Search
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