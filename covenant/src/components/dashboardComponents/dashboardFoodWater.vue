<template>
    <div class="box">
        <p><strong>Requests for Food and Water</strong></p>
        <table class="table is-fullwidth">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Reported</th>
                <th>Message</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getData" :key="item.index">
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td>{{item.reported}}</td>
                <td>{{item.message}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import sampleData from "../../data/data";

    export default {
        name: "dashboardFoodWater",

        data: () => {
            return {
                sampleData
            }
        },

        computed: {
            getData: function() {
                return sampleData.foodRequest;
            }
        }
    }
</script>

<style scoped>

</style>
