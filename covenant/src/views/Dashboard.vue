<template>
    <div>
<!--        <button @click="fetchDashboardData()" class="button is-normal">Temporary Test Button</button>-->
        <dashboard-quarantine-violation v-if="getShowProgressBarCount === 0"
                v-bind:quarantine-violation-response-object-array="quarantineViolationResponseObjectArray"
        />
        <dashboard-request-for-medical-care v-if="getShowProgressBarCount === 0"
                v-bind:request-for-medical-care-response-object-array="requestForMedicalCareResponseObjectArray"
        />
        <dashboard-supplies-request v-if="getShowProgressBarCount === 0"
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
        created() {
            this.fetchDashboardData();
            this.$store.commit("setShowProgressBarCount", 3);
        },
        methods: {
            fetchDashboardData: function() {
                console.log("fetch");
                console.log("supplies");

                this.$store.dispatch("fetchDashboardCompliance", {
                    suppliesRequestStatus: "Open",
                    healthProId: 1
                }).then(result => {
                    this.$store.commit("setShowProgressBarCount", this.$store.getters.getShowProgressBarCount - 1);
                    this.quarantineViolationResponseObjectArray = result.data.patients;
                    console.log(result.data.patients);
                });

                this.$store.dispatch("fetchDashboardMedical", {
                    suppliesRequestStatus: "Open",
                    healthProId: 1
                }).then(result => {
                    this.$store.commit("setShowProgressBarCount", this.$store.getters.getShowProgressBarCount - 1);
                    this.requestForMedicalCareResponseObjectArray = result.data.patients;
                    console.log(result.data.patients);
                });

                this.$store.dispatch("fetchDashboardSupplies", {
                    suppliesRequestStatus: "Open",
                    healthProId: 1
                }).then(result => {
                    this.$store.commit("setShowProgressBarCount", this.$store.getters.getShowProgressBarCount - 1);
                    this.suppliesRequestStatusResponseObjectArray = result.data.patients;
                    console.log(result.data.patients);
                });
            }
        },
        computed: {
            getShowProgressBarCount() {
                return this.$store.getters.getShowProgressBarCount;
            }
        }
    }
</script>
<style>
    tr {
        cursor: pointer;
    }
</style>