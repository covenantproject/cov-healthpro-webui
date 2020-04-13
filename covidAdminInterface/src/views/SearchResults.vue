<template>
  <div>
    <dashboard-quarantine-violation></dashboard-quarantine-violation>
    <dashboard-request-for-medical-care></dashboard-request-for-medical-care>
    <dashboard-food-water></dashboard-food-water>
    <search-results></search-results>
  </div>
</template>

<script>
  import DashboardQuarantineViolation from "../components/dashboardComponents/dashboardQuarantineViolation";
  import DashboardRequestForMedicalCare from "../components/dashboardComponents/dashboardRequestMedical";
  import DashboardFoodWater from "../components/dashboardComponents/dashboardFoodWater";
  import SearchResults from "../components/dashboardComponents/searchResults";

  export default {
    name: "SearchResults",
    components: {
      DashboardFoodWater,
      DashboardRequestForMedicalCare,
      DashboardQuarantineViolation,
      SearchResults
    }
  }
</script>

<style scoped>

</style>

