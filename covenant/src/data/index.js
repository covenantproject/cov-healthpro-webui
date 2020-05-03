import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        showProgressBarCount: 0, // if count > 0 show indeterminate progress bar
        searchPatient: {}

    },
    getters: {
        getCounter (state) {
            return state.count;
        },
        getShowProgressBarCount (state) {
            return state.showProgressBarCount;
        }
    },
    mutations: {
        incrementCounter (state) {
            state.counter += 1;
        },
        setSearchPatient(state, data) {
            this.state.searchPatient = data;
        },
        setShowProgressBarCount(state, data) {
            this.state.showProgressBarCount = data;
        }
    },
    actions: {
        fetchPatientBasedPhoneNumber: function({commit}, phoneNumber) {
            return axios.get("/api/searchPatient?/phoneNumber={}", phoneNumber).then(result =>
                commit("setPatientForSearch", result.data));
        },
        fetchLocationsAndRolesForUser(params) {
            return axios.get("api/getLocationAndRole", params);
        },
        fetchPatientInfo(params) {
            return axios.get("/api/getPatientInfo?", params);
        },
        fetchLocationHierarchy(params) {
            return axios.get("/api/getLocationHierarchy", params);
        },
        savePatientProviderRelationship(params) {
            return axios.post("/api/savePatientProviderRelationship?", params);
        },
        fetchOpenMedicalRequests() {
            return axios.get("/api/searchPatient?healthProId=1&phoneNumber=9791713457", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("kc-token")}`
                }
            });
        },
        fetchDashboardSuppliesRequestStatus() {
            return axios.get("searchPatient?suppliesRequestStatus=Open&healthProId=1", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("kc-token")}`
                }
            });
        }
    }
});
