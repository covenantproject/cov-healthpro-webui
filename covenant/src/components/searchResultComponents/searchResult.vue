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
                <th>Location</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getData" :key="item.index">
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td><span v-if="item.quarantineViolation">Violation</span> <span v-if="item.needsMedicalCare">Medical Care</span> <span v-if="item.needsFoodOrWater">Food/Water</span></td>
                <td>{{item.sex}}, {{item.age}}</td>
                <td>{{item.latitude}}, {{item.longitude}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import sampleData from "../../data/data";

    export default {
        name: "searchResult",

        created() {
            this.getSearchPatient();
        },
        data: () => {
            return {
                sampleData,
                searchPatient: {}
            }
        },
        computed: {
            getData: function() {
                return sampleData.searchResults;
            }
        },
        methods: {
            getSearchPatient: function() {
                this.$store.dispatch("fetchSearchPatient", 9898987656).then(result => {
                    this.searchPatient = result.data;
                });
            }
        }
    }
</script>

<style scoped>

</style>
