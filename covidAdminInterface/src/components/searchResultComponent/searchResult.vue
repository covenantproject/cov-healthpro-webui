<template>
  <div class="box">
    <p><strong>Search Results</strong></p>
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Needs</th>
        <th>Demographics</th>
        <th>Address</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in getData" :key="item.index">
        <td>{{item.firstName}}</td>
        <td>{{item.lastName}}</td>
        <td><span v-if="item.quarantineViolation">Violation</span> <span v-if="item.needsMedicalCare">Medical Care</span> <span v-if="item.needsFoodOrWater">Food/Water</span></td>
        <td>{{item.sex}}, {{item.age}}</td>
        <td>{{item.address}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import sampleData from "../../data/data";

    export default {
        name: "searchResult",

        data: () => {
          return {
              sampleData
          }
        },

        computed: {
          getData: function() {
            return sampleData.searchResults;
          }
        }
    }
</script>

<style scoped>

</style>
