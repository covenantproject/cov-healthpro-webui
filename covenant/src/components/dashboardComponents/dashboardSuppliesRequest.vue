<template>
    <div class="box">
<!--        <section class="hero is-light">-->
<!--            <div class="hero-body">-->
<!--                <div class="container">-->
<!--                    <h2 class="subtitle">-->
<!--                        <strong>Requests for Food and Water</strong>-->
<!--                    </h2>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
        <h4 class="title is-4">Requests for Food and Water</h4>

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
                <tr v-for="(item, index)  in dataForDisplay" @click="onRowClicked($event, index)" :key="item.index">
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
        name: "dashboardFoodWater",

        data: () => {
            return {
                showExpanded: false
            }
        },
        props: {
            suppliesRequestStatusResponseObjectArray: {
                type: Array,
                default: null
            }
        },
        methods: {
            onRowClicked: function(event, index) {
                const patientID  = this.suppliesRequestStatusResponseObjectArray[index].patientID;
                this.$router.push({ name: 'userInfo', params: { patientID: ""+patientID }})
            }
        },
        computed: {
            dataForDisplay() {
                if (this.suppliesRequestStatusResponseObjectArray == null) {
                    return null;
                }
                if (this.showExpanded) {
                    return this.suppliesRequestStatusResponseObjectArray;
                } else {
                    return this.suppliesRequestStatusResponseObjectArray.slice(0,5);
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