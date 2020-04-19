<template>
    <div>
        <dashboard-quarantine-violation></dashboard-quarantine-violation>
        <dashboard-request-for-medical-care></dashboard-request-for-medical-care>
        <dashboard-food-water></dashboard-food-water>
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
        }
    }
</script>

<style scoped>

</style>
