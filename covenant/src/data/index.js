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
            return axios.get("api/getLocationAndRole", params);
        },
        fetchOpenMedicalRequests() {
                return axios.get("/api/searchPatient?healthProId=1&phoneNumber=9791713457&size&from&firstName&lastName&covid19Status&quarantineStatus&isolationStatus&quarantineRequestStatus&medicalRequestStatus&suppliesRequestStatus&geofenceCompliant&heartbeatStatus&healthStatusAlert");
        },
        fetchPatientInfo(params) {
            return axios.get("/api/getPatientInfo?", params)
        },
        fetchLocationHierarchy(params) {
            return axios.get("/api/getLocationHierarchy", params)
        },
        savePatientProviderRelationship(params) {
            return axios.post("/api/savePatientProviderRelationship?", params)
        }
    }
});
