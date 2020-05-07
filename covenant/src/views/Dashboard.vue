<template>
    <div>
        <button @click="fetchDashboardData()" class="button is-normal">Temporary Test Button</button>
        <dashboard-quarantine-violation
                v-bind:quarantine-violation-response-object-array="quarantineViolationResponseObjectArray"
        />
        <dashboard-request-for-medical-care
                v-bind:request-for-medical-care-response-object-array="requestForMedicalCareResponseObjectArray"
        />
        <dashboard-supplies-request
                v-bind:supplies-request-status-response-object-array="suppliesRequestStatusResponseObjectArray"
        />
    </div>
</template>

<script>
    import DashboardQuarantineViolation from "../components/dashboardComponents/dashboardQuarantineViolation";
    import DashboardRequestForMedicalCare from "../components/dashboardComponents/dashboardRequestMedical";
    import DashboardSuppliesRequest from "../components/dashboardComponents/dashboardSuppliesRequest";

    export default {
        name: "Dashboard",
        components: {
            DashboardSuppliesRequest,
            DashboardRequestForMedicalCare,
            DashboardQuarantineViolation
        },
        data: () => {
            return {
                quarantineViolationResponseObjectArray: null,
                requestForMedicalCareResponseObjectArray: null,
                suppliesRequestStatusResponseObjectArray: null,
            }
        },
        methods: {
            fetchOpenMedicalRequests: function() {
                console.log("fire");
                console.log("request");
                this.$store.dispatch("fetchOpenMedicalRequests", {
                    phoneNumber: 9791713457,
                    healthProId: 1
                }).then(result => console.log(result));
            },
            fetchDashboardData: function() {
                console.log("fetch");
                console.log("supplies");

                this.$store.dispatch("fetchDashboardComplianceStatus", {
                    suppliesRequestStatus: "Open",
                    healthProId: 1
                }).then(result => {
                    this.quarantineViolationResponseObjectArray = result.data.patients;
                    console.log(result.data.patients);
                });

                this.$store.dispatch("fetchDashboardMedicalRequestStatus", {
                    suppliesRequestStatus: "Open",
                    healthProId: 1
                }).then(result => {
                    this.requestForMedicalCareResponseObjectArray = result.data.patients;
                    console.log(result.data.patients);
                });

                // this.$store.commit("setShowProgressBarCount", this.$store.getters.getShowProgressBarCount());
                this.$store.dispatch("fetchDashboardSuppliesRequestStatus", {
                    suppliesRequestStatus: "Open",
                    healthProId: 1
                }).then(result => {
                    this.suppliesRequestStatusResponseObjectArray = result.data.patients;
                    console.log(result.data.patients);
                });
            },
        },
    }
</script>

<style>
    tr {
        cursor: pointer;
    }
</style>