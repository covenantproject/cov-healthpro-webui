<template>
    <div>
        <button @click="fetchDashboardSuppliesRequestStatus()" class="button is-normal">Temporary Test Button</button>
        <dashboard-quarantine-violation />
        <dashboard-request-for-medical-care />
        <dashboard-supplies-request
                v-bind:supplies-request-status-object-array="suppliesRequestStatusResponseObjectArray"
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
            fetchDashboardSuppliesRequestStatus: function() {
                console.log("fetch");
                console.log("supplies");
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