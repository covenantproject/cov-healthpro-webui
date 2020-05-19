<template>
    <div class="container" id="main">
        <div class="columns is-mobile is-centered">
            <div class="column">
                <label class="label">First Name</label>
                <input v-model="firstName" id="first-name" class="input" type="text" placeholder="First Name">
            </div>
            <div class="column">
                <label class="label">Last Name</label>
                <input v-model="lastName" id="last-name" class="input" type="text" placeholder="Last Name">
            </div>
            <div class="column">
                <label class="label">Phone Number</label>
                <input v-model="phoneNumber" id="phone-number" class="input" type="text" placeholder="Phone Number">
            </div>
            <div class="column is-one-fifth">
                <button v-bind:class="[searchIsLoading ? 'is-loading' : '', 'button', 'is-info']" type="submit" @click="onSearchButtonClicked">Search
                </button>
            </div>
        </div>
        <div class="columns is-mobile">
            <table class="table">
                <tbody>
                <tr v-for="patient in searchResults" :key="patient.patientID">
                    <td>{{patient.patientID}}</td>
                    <td>{{patient.firstName}}</td>
                    <td>{{patient.lastName}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchBarComponent",
        data() {
            return {
                searchIsLoading: false,
                firstName: null,
                lastName: null,
                phoneNumber: null,
                searchResults: []
            }
        },
        methods: {
            onSearchButtonClicked(){
                this.toggleLoad();
                this.$store.dispatch("fetchSearchResults", {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber
                }).then(result => {
                    this.$store.commit("setShowProgressBarCount", this.$store.getters.getShowProgressBarCount - 1);
                    this.searchResults = result.data.patients;
                    console.log(result.data);
                    this.toggleLoad();
                });
            },
            toggleLoad() {
                this.searchIsLoading = !this.searchIsLoading;
            },
        }
    }
</script>

<style scoped>

</style>