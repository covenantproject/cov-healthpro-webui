<template>
    <div class="box">
<!--        <section class="hero is-light">-->
<!--            <div class="hero-body">-->
<!--                <div class="container">-->
<!--                    <h2 class="subtitle">-->
<!--                        <strong>Individuals currently Non-Compliant</strong>-->
<!--                    </h2>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
        <h4 class="title is-4">Individuals currently Non-Compliant</h4>

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
            <tr v-for="item in dataForDisplay" @click="onRowClicked(item.patientID)" :key="item.index">
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td>{{item.lastReported}}</td>
                <td>{{item.duration}}</td>
                <td>{{item.distance}}</td>
            </tr>
            </tbody>
        </table>
        <button @click="showExpanded = !showExpanded" class="button">{{toggleText}}</button>
    </div>
</template>

<script>
    import sampleData from "../../data/data";

    export default {
        name: "dashboardItem",

        data: () => {
            return {
                showExpanded: false,
            }
        },
        props: {
            quarantineViolationResponseObjectArray: {
                type: Array,
                default: null
            }
        },
        methods: {
            onRowClicked: function(patientID) {
                console.log("request quarantine violation table row clicked ", patientID);
                this.$router.push({name: 'userInfo', params: {patientID: patientID}})
            }
        },
        computed: {
            dataForDisplay() {
                if (this.quarantineViolationResponseObjectArray == null) {
                    return null;
                }
                if (this.showExpanded) {
                    return this.quarantineViolationResponseObjectArray;
                } else {
                    return this.quarantineViolationResponseObjectArray.slice(0,5);
                }
            },
            toggleText() {
                if (this.showExpanded){
                    return "Hide Expanded View"
                } else {
                    return "Show All"
                }
            }
        }
    }
</script>