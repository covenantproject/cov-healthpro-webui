<template>
    <div class="box">
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h2 class="subtitle">
                        <strong>Individuals currently Non-Compliant</strong>
                    </h2>
                </div>
            </div>
        </section>

        <table class="table is-fullwidth is-hoverable">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Last Reported</th>
                <th>Duration</th>
                <th>Distance</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getData" @click="onRowClicked($event, index)" :key="item.index">
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td>{{item.lastReported}}</td>
                <td>{{item.duration}}</td>
                <td>{{item.distance}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import sampleData from "../../data/data";

    export default {
        name: "dashboardItem",

        data: () => {
            return {
                sampleData
            }
        },
        props: {
            quarantineViolationResponseObjectArray: {
                type: Array,
                default: null
            }
        },
        methods: {
            onRowClicked: function(event, index) {
                console.log("request quarantine violation table row clicked " + value);
                const patientID = this.suppliesRequestStatusResponseObjectArray[index].patientID;
                this.$router.push({name: 'userInfo', params: {patientID: "" + patientID}})
            }
        },
        computed: {
            getData: function() {
                return this.quarantineViolationResponseObjectArray ? this.quarantineViolationResponseObjectArray : sampleData.foodRequest;
            }
        }
    }
</script>