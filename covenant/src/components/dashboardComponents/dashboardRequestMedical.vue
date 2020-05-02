<template>
    <div class="box">
        <p><strong>Requests for Medical Care</strong></p>
        <table class="table is-fullwidth is-hoverable">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Reported</th>
                <th>Message</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getData" @click="onRowClicked" :key="item.index">
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
        name: "dashboardRequestForMedicalCare",

        data: () => {
            return {
                sampleData
            }
        },
        methods: {
            onRowClicked: function(value) {
                console.log("request medical table row clicked " + value);
            }
        },
        computed: {
            getData: function() {
                return this.sampleData.medicalRequest;
            }
        }
    }
</script>

<style scoped>

</style>
