<template>
    <div class="box">
<!--        <section class="hero is-light">-->
<!--            <div class="hero-body">-->
<!--                <div class="container">-->
<!--                    <h2 class="subtitle">-->
<!--                        <strong>Requests for Medical Care</strong>-->
<!--                    </h2>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
        <h4 class="title is-4">Requests for Medical Care</h4>

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
            <tr v-for="item in dataForDisplay" @click="onRowClicked(item.patientID)" :key="item.index">
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td>{{item.reported}}</td>
                <td>{{item.message}}</td>
            </tr>
            </tbody>
        </table>
        <button @click="showExpanded = !showExpanded" class="button">{{toggleText}}</button>
    </div>
</template>

<script>
    import sampleData from "../../data/data";

    export default {
        name: "dashboardRequestForMedicalCare",

        data: () => {
            return {
                showExpanded: false
            }
        },
        props: {
            requestForMedicalCareResponseObjectArray: {
                type: Array,
                default: null
            }
        },
        methods: {
            onRowClicked: function(patientID) {
                this.$router.push({name: 'userInfo', params: {patientID: "" + patientID}})
            }
        },
        computed: {
            dataForDisplay() {
                if (this.requestForMedicalCareResponseObjectArray == null) {
                    return null;
                }
                if (this.showExpanded) {
                    return this.requestForMedicalCareResponseObjectArray;
                } else {
                    return this.requestForMedicalCareResponseObjectArray.slice(0,5);
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