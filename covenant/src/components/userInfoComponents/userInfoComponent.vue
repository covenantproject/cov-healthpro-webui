<template>
    <div>
        <div class="box">
            <p id="title-first-lastname">{{getFirstName()}} {{getLastName()}}</p>
            <input id="message-text-box" class="input" type="text" :value=getMessage() readonly>
            <div class="columns">
                <div class="column">
                    <p class="info-title">Patient Type</p>
                    <p>{{getPatientType()}}</p>
                </div>
                <div class="column">
                    <p class="info-title">Quarantine Dates</p>
                    <p>1 April - 15 April</p>
                </div>
                <div class="column">
                    <p class="info-title">COVID-19 Status</p>
                    <p>{{getCovidStatus()}}</p>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-third">
                    <div>
                        <p class="info-title">Quarantine Status</p>
                        <p>{{getQuarantineStatus()}}</p>
                    </div>
                    <div>
                        <p class="info-title">Demographics</p>
                        <p>{{getSex()}} {{getAge()}} ({{getBirthdayDDMMYYYY()}})</p>
                    </div>
                    <div>
                        <p class="info-title">Contact Info</p>
                        <p>{{getContactInfo()}}</p>
                    </div>
                    <div>
                        <p class="info-title">Quarantine Latitude</p>
                        <p>{{getQuarantineLatitude()}}</p>
                    </div>
                    <div>
                        <p class="info-title">Quarantine Longitude</p>
                        <p>{{getQuarantineLongitude()}}</p>
                    </div>
                </div>
                <div class="column is-two-thirds">
                    <geo-map id="geo-map"
                        v-bind:latitude="getQuarantineLatitude()"
                        v-bind:longitude="getQuarantineLongitude()"
                    ></geo-map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sampleData from "../../data/data";
    import geoMap from "../geoMappingComponent/geoMap";

    export default {
        name: "userInfoComponent",

        components: {
            geoMap
        },
        data: () => {
            return {
                sampleData
            }
        },
        methods: {
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
