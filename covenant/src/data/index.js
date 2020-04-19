import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const API_URL = "http://blockchain.eastus.cloudapp.azure.com:8080/covid_service";

export default new Vuex.Store({
    state: {
        count: 0,
        searchPatient: {}

    },
    getters: {
        getCounter (state) {
            return state.count;
        }
    },
    mutations: {
        incrementCounter (state) {
            state.counter += 1;
        },
        setSearchPatient(state, data) {
            this.state.searchPatient = data;
        }
    },
    actions: {
        fetchPatientBasedPhoneNumber: function({commit}, phoneNumber) {
            return axios.get(API_URL + "/api/searchPatient?/phoneNumber={}", phoneNumber).then(result =>
                commit("setPatientForSearch", result.data));
        }
    }
});
