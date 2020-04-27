<template>
    <div>
        <dashboard-quarantine-violation
                v-bind:firstName= "quarantineViolation.firstName"
                v-bind:lastName= "quarantineViolation.lastName"
                v-bind:lastReported ="quarantineViolation.lastReported"
                v-bind:duration ="quarantineViolation.duration"
                v-bind:distance ="quarantineViolation.distance"
        />

        <dashboard-request-for-medical-care
                v-bind:firstName ="requestForMedicalCare.firstName"
                v-bind:lastName ="requestForMedicalCare.lastName"
                v-bind:reported ="requestForMedicalCare.lastReported"
                v-bind:message ="requestForMedicalCare.duration"
                v-bind:distance ="requestForMedicalCare.distance"
        />
        <dashboard-food-water
                v-bind:firstName ="foodWater.firstName"
                v-bind:lastName ="foodWater.lastName"
                v-bind:reported ="foodWater.lastReported"
                v-bind:message ="foodWater.duration"
        />
    </div>
</template>

<script>
    import DashboardQuarantineViolation from "../components/dashboardComponents/dashboardQuarantineViolation";
    import DashboardRequestForMedicalCare from "../components/dashboardComponents/dashboardRequestMedical";
    import DashboardFoodWater from "../components/dashboardComponents/dashboardFoodWater";

    export default {
        name: "Dashboard",
        components: {
            DashboardFoodWater,
            DashboardRequestForMedicalCare,
            DashboardQuarantineViolation
        },
        data: () => {
            return {
                quarantineViolation: {
                    firstName: "",
                    lastName: "",
                    lastReported: Number,
                    duration: Number,
                    distance: Number
                },
                requestForMedicalCare: {
                    firstName: "",
                    lastName: "",
                    reported: Number,
                    message: "",
                    distance: Number
                },
                foodWater: {
                    firstName: "",
                    lastName: "",
                    reported: Number,
                    message: "",
                    distance: Number
                }
            }
        },
        created() {
            this.$store.dispatch("fetchOpenMedicalRequests", {
                locationId: 338,
                healthProId: 1,
                quarantineRequestStatus: "Open"
            }).then(result => console.log(result));
        }
    }
</script>