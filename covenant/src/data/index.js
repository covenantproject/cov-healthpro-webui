import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

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
        // fetchPatientBasedPhoneNumber: function({commit}, phoneNumber) {
        //     return axios.get(API_URL + "/api/searchPatient?/phoneNumber={}", phoneNumber).then(result =>
        //         commit("setPatientForSearch", result.data));
        // },
        fetchLocationsAndRolesForUser(params) {
            return axios.get("api/getLocationAndRole", {params});
        },
        fetchOpenMedicalRequests(params) {
                return axios.get("/api/searchPatient?", {params});
        },
        fetchPatientInfo(params) {
            return axios.get("/api/getPatientInfo?", {params})
        },
        fetchLocationHierarchy(params) {
            return axios.get("/api/getLocationHierarchy", {params})
        },
        savePatientProviderRelationship(params) {
            return axios.post("/api/savePatientProviderRelationship?", {params})
        }
    }
});
