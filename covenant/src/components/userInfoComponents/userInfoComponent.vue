<template>
    <div v-if="getShowProgressBarCount === 0">
        <div class="box">
            <p id="title-first-lastname">{{patient.firstName}} {{patient.lastName}}</p>
            <input id="message-text-box" class="input" type="text" :value=getMessage() readonly>
            <div class="columns">
                <div class="column">
                    <p class="info-title">Quarantine Status</p>
                    <p>{{patient.quarantineStatus}}</p>
                </div>
                <div class="column">
                    <p class="info-title">Quarantine Dates</p>
                    <p>{{patient.quarantineStartDate}} - {{patient.quarantineStartDate}}</p>
                </div>
                <div class="column">
                    <p class="info-title">COVID-19 Status</p>
                    <p>{{patient.covid19Status}}</p>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-third">
                    <div>
                        <p class="info-title">Geofence Status</p>
                        <p>{{patient.geofenceStatus}}</p>
                    </div>
                    <div>
                        <p class="info-title">Demographics</p>
                        <p>{{patient.sex}} {{getAge()}} ({{getBirthdayDDMMYYYY()}})</p>
                    </div>
                    <div>
                        <p class="info-title">Contact Info</p>
                        <p>{{patient.phoneNumber1}}</p>
                    </div>
                    <div>
                        <p class="info-title">Quarantine Address</p>
                        <p>{{patient.quarantineAddress}}</p>
                    </div>
                    <div>
                        <p class="info-title">Patient Latitude</p>
                        <p>{{patient.latitude}}</p>
                    </div>
                    <div>
                        <p class="info-title">Patient Longitude</p>
                        <p>{{patient.longitude}}</p>
                    </div>
                </div>
                <div class="column is-two-thirds">
                    <geo-map id="geo-map"
                        v-bind:latitude="patient.latitude"
                        v-bind:longitude="patient.longitude"
                    ></geo-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sampleData from "../../data/data";
    import geoMap from "../geoMappingComponents/geoMap";

    export default {
        name: "userInfoComponent",
        components: {
            geoMap
        },
        data: () => {
            return {
                sampleData,
                patient: {}
            }
        },
        created() {
            this.$store.commit("setShowProgressBarCount", this.$store.getters.getShowProgressBarCount + 1);
            console.log(this.$route.params.patientID);
            this.fetchPatientInfo();

        },
        methods: {
            fetchPatientInfo() {
                this.$store.dispatch("fetchPatientInfo", {
                    patientID: this.$route.params.patientID
                }).then(result => {
                    this.$store.commit("setShowProgressBarCount", this.$store.getters.getShowProgressBarCount - 1);
                    console.log(result);
                    this.patient = result.data;
                });
            },
            getFirstName() {
                return sampleData.userProfile.firstName;
            },
            getLastName() {
                return sampleData.userProfile.lastName;
            },
            getMessage() {
                return sampleData.userProfile.message;
            },
            getAge() {
                return sampleData.userProfile.age;
            },
            getBirthdayDDMMYYYY() {
                return sampleData.userProfile.birthdayDDMMYYYY;
            },
            getSex() {
                return sampleData.userProfile.sex;
            },
            getPatientType() {
                return sampleData.userProfile.patientType;
            },
            getQuarantineStart() {
                return sampleData.userProfile.quarantineStart;
            },
            getQuarantineDuration() {
                return sampleData.userProfile.quarantineDuration;
            },
            getQuarantineLatitude() {
                return sampleData.userProfile.quarantineLatitude;
            },
            getQuarantineLongitude() {
                return sampleData.userProfile.quarantineLongitude;
            },
            getCovidStatus() {
                return sampleData.userProfile.covidStatus;
            },
            getQuarantineStatus() {
                return sampleData.userProfile.quarantineStatus;
            },
            getContactInfo() {
                return sampleData.userProfile.contactInfo;
            }
        },
        computed: {
            getShowProgressBarCount() {
                return this.$store.getters.getShowProgressBarCount;
            }
        }
    }
</script>

<style scoped>
    #title-first-lastname {
        font-size: 2rem;
    }

    #message-text-box {
        margin-top: 1rem;
    }

    #geo-map {
        margin-right: 2rem;
        margin-bottom: 2rem;
    }

    .info-title {
        margin-top: 1.5rem;
        font-size: 1.3rem;
    }
</style>
